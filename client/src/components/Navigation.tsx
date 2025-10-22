import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./ThemeToggle";
import { Search, Menu, X } from "lucide-react";

interface NavigationProps {
  onSearchOpen: () => void;
}

export function Navigation({ onSearchOpen }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { label: "About", id: "about" },
    { label: "Experience", id: "experience" },
    { label: "Projects", id: "projects" },
    { label: "Skills", id: "skills" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <button
              onClick={() => scrollToSection("hero")}
              className="text-lg font-bold hover-elevate active-elevate-2 px-2 py-1 rounded-md transition-colors"
              data-testid="link-home"
            >
              <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                Sai Teja Alasyam
              </span>
            </button>
          </div>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Button
                key={link.id}
                variant="ghost"
                onClick={() => scrollToSection(link.id)}
                data-testid={`link-${link.id}`}
              >
                {link.label}
              </Button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={onSearchOpen}
              data-testid="button-search-open"
            >
              <Search className="h-5 w-5" />
            </Button>
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              data-testid="button-mobile-menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="px-4 py-4 space-y-2">
            {navLinks.map((link) => (
              <Button
                key={link.id}
                variant="ghost"
                className="w-full justify-start"
                onClick={() => scrollToSection(link.id)}
                data-testid={`link-mobile-${link.id}`}
              >
                {link.label}
              </Button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
