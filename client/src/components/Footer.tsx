import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card/50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold" data-testid="text-footer-about-title">About</h3>
            <p className="text-sm text-muted-foreground" data-testid="text-footer-about">
              AI/ML Engineer and Software Developer specializing in deep learning, 
              NLP, and cloud technologies. Currently pursuing MS in Computer Science at ASU.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold" data-testid="text-footer-links-title">Quick Links</h3>
            <div className="flex flex-col gap-2">
              <button
                onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
                className="text-sm text-muted-foreground hover:text-foreground text-left"
                data-testid="link-footer-about"
              >
                About
              </button>
              <button
                onClick={() => document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" })}
                className="text-sm text-muted-foreground hover:text-foreground text-left"
                data-testid="link-footer-experience"
              >
                Experience
              </button>
              <button
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                className="text-sm text-muted-foreground hover:text-foreground text-left"
                data-testid="link-footer-projects"
              >
                Projects
              </button>
              <button
                onClick={() => document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" })}
                className="text-sm text-muted-foreground hover:text-foreground text-left"
                data-testid="link-footer-skills"
              >
                Skills
              </button>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold" data-testid="text-footer-connect-title">Connect</h3>
            <div className="flex gap-2">
              <Button variant="outline" size="icon" asChild data-testid="link-footer-github">
                <a href="https://github.com/salasya2" target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild data-testid="link-footer-linkedin">
                <a href="https://www.linkedin.com/in/alasyam-sai-teja-845446193/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild data-testid="link-footer-email">
                <a href="mailto:saitejaalasyam@gmail.com">
                  <Mail className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p data-testid="text-footer-copyright">
            © {new Date().getFullYear()} Sai Teja Alasyam. Built with React, TypeScript, and Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
}
