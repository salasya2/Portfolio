import { useState, useEffect } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Search, FileText, Briefcase, Code, Loader2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";

interface SearchModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

interface SearchResult {
  id: string;
  title: string;
  excerpt: string;
  section: string;
  score: number;
}

const sectionIcons: Record<string, any> = {
  Experience: Briefcase,
  Projects: Code,
  Skills: FileText,
  Education: FileText,
  About: FileText,
};

export function SearchModal({ open, onOpenChange }: SearchModalProps) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);

  const searchMutation = useMutation({
    mutationFn: async (searchQuery: string) => {
      const res = await apiRequest("POST", "/api/search", { query: searchQuery });
      return res.json();
    },
    onSuccess: (data: SearchResult[]) => {
      setResults(data);
    },
    onError: (error) => {
      console.error("Search error:", error);
      setResults([]);
    },
  });

  useEffect(() => {
    if (query.length > 2) {
      const debounce = setTimeout(() => {
        searchMutation.mutate(query);
      }, 500);
      return () => clearTimeout(debounce);
    } else {
      setResults([]);
    }
  }, [query]);

  const handleResultClick = (section: string) => {
    const sectionId = section.toLowerCase();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      onOpenChange(false);
      setQuery("");
      setResults([]);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl p-0 gap-0">
        <div className="p-4 border-b border-border">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search portfolio using AI..."
              className="pl-10"
              autoFocus
              data-testid="input-search-query"
            />
          </div>
        </div>

        <div className="max-h-[400px] overflow-y-auto">
          {query.length === 0 ? (
            <div className="p-8 text-center text-muted-foreground" data-testid="text-search-prompt">
              <Search className="h-12 w-12 mx-auto mb-3 opacity-50" />
              <p>Start typing to search through experience, projects, and skills</p>
              <p className="text-sm mt-2">Powered by AI semantic search</p>
            </div>
          ) : searchMutation.isPending ? (
            <div className="p-8 text-center text-muted-foreground">
              <Loader2 className="h-8 w-8 mx-auto mb-3 animate-spin" />
              <p>Searching...</p>
            </div>
          ) : results.length === 0 && query.length > 2 ? (
            <div className="p-8 text-center text-muted-foreground" data-testid="text-search-no-results">
              <p>No results found for "{query}"</p>
            </div>
          ) : (
            <div className="divide-y divide-border">
              {results.map((result) => {
                const Icon = sectionIcons[result.section] || FileText;
                return (
                  <button
                    key={result.id}
                    onClick={() => handleResultClick(result.section)}
                    className="w-full p-4 text-left hover-elevate active-elevate-2 transition-colors"
                    data-testid={`result-${result.id}`}
                  >
                    <div className="flex gap-3">
                      <div className="flex-shrink-0 mt-1">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1 space-y-1">
                        <div className="flex items-center gap-2">
                          <h3 className="font-semibold" data-testid={`text-result-${result.id}-title`}>
                            {result.title}
                          </h3>
                          <Badge variant="secondary" data-testid={`badge-result-${result.id}-section`}>
                            {result.section}
                          </Badge>
                          <span className="text-xs text-muted-foreground ml-auto">
                            {Math.round(result.score * 100)}% match
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground line-clamp-2" data-testid={`text-result-${result.id}-excerpt`}>
                          {result.excerpt}
                        </p>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
