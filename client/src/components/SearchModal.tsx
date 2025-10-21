import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Search, FileText, Briefcase, Code } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface SearchModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const mockResults = [
  {
    id: "1",
    title: "Mindful AI Framework Assistant",
    excerpt: "Developed an AI Risk Repository using the Mindful AI Framework, improving risk classification accuracy...",
    section: "Experience",
    icon: Briefcase
  },
  {
    id: "2",
    title: "RAG System Development",
    excerpt: "Engineered a Retrieval-Augmented Generation (RAG) system for academic course data, improving search efficiency by 40%...",
    section: "Experience",
    icon: Briefcase
  },
  {
    id: "3",
    title: "Student Loan Repayment System",
    excerpt: "Full-stack loan platform with AI-powered features. Cut manual data entry 90% with automated column mapping...",
    section: "Projects",
    icon: Code
  },
  {
    id: "4",
    title: "Face Recognition Edge Computing",
    excerpt: "Engineered edge-based face recognition pipeline on AWS IoT Greengrass with MTCNN detection...",
    section: "Projects",
    icon: Code
  },
  {
    id: "5",
    title: "Deep Learning & NLP Skills",
    excerpt: "Expertise in Transformers, LangChain, Generative AI, and AI Agents...",
    section: "Skills",
    icon: FileText
  }
];

export function SearchModal({ open, onOpenChange }: SearchModalProps) {
  const [query, setQuery] = useState("");
  
  const filteredResults = query.length > 0
    ? mockResults.filter(result =>
        result.title.toLowerCase().includes(query.toLowerCase()) ||
        result.excerpt.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  const handleResultClick = (section: string) => {
    const sectionId = section.toLowerCase();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      onOpenChange(false);
      setQuery("");
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
              placeholder="Search portfolio..."
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
            </div>
          ) : filteredResults.length === 0 ? (
            <div className="p-8 text-center text-muted-foreground" data-testid="text-search-no-results">
              <p>No results found for "{query}"</p>
            </div>
          ) : (
            <div className="divide-y divide-border">
              {filteredResults.map((result) => {
                const Icon = result.icon;
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
