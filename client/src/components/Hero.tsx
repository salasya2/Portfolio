import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Search, Calendar, Github, Linkedin, Mail } from "lucide-react";
import { SiPython, SiAmazon, SiKubernetes, SiDocker, SiReact, SiTensorflow } from "react-icons/si";

interface HeroProps {
  onSearchOpen: () => void;
  onBookingOpen: () => void;
}

export function Hero({ onSearchOpen, onBookingOpen }: HeroProps) {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8"
      style={{
        background: "linear-gradient(to bottom, hsl(var(--background)), hsl(var(--card)))",
      }}
    >
      <div className="max-w-7xl w-full">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
          <div className="lg:col-span-3 space-y-6">
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight" data-testid="text-hero-name">
                Sai Teja Alasyam
              </h1>
              <h2 className="text-3xl sm:text-4xl font-semibold">
                <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
                  AI/ML Engineer
                </span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl">
                Specializing in Deep Learning, NLP, Generative AI, and Cloud Technologies
              </p>
            </div>

            <div className="flex flex-wrap gap-4 items-center">
              <SiPython className="h-8 w-8 text-muted-foreground" />
              <SiAmazon className="h-8 w-8 text-muted-foreground" />
              <SiKubernetes className="h-8 w-8 text-muted-foreground" />
              <SiDocker className="h-8 w-8 text-muted-foreground" />
              <SiReact className="h-8 w-8 text-muted-foreground" />
              <SiTensorflow className="h-8 w-8 text-muted-foreground" />
            </div>

            <div className="flex flex-wrap gap-3">
              <Button onClick={onBookingOpen} size="lg" data-testid="button-hero-book">
                <Calendar className="h-4 w-4 mr-2" />
                Schedule a Call
              </Button>
              <Button variant="outline" size="lg" asChild data-testid="link-github">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4 mr-2" />
                  GitHub
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild data-testid="link-linkedin">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-4 w-4 mr-2" />
                  LinkedIn
                </a>
              </Button>
            </div>

            <div className="relative max-w-xl">
              <Button
                variant="outline"
                className="w-full justify-start text-muted-foreground hover:text-foreground"
                onClick={onSearchOpen}
                data-testid="button-hero-search"
              >
                <Search className="h-4 w-4 mr-2" />
                Search my portfolio...
              </Button>
            </div>
          </div>

          <div className="lg:col-span-2">
            <Card className="p-6 space-y-6">
              <h3 className="text-lg font-semibold" data-testid="text-stats-title">Quick Stats</h3>
              <div className="space-y-4">
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Current Role</p>
                  <p className="font-semibold" data-testid="text-current-role">Mindful AI Framework Assistant</p>
                  <p className="text-sm text-muted-foreground">Arizona State University</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <p className="text-2xl font-bold text-primary" data-testid="text-projects-count">3+</p>
                    <p className="text-sm text-muted-foreground">Major Projects</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-2xl font-bold text-primary" data-testid="text-gpa">4.0</p>
                    <p className="text-sm text-muted-foreground">GPA</p>
                  </div>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Education</p>
                  <p className="font-semibold" data-testid="text-education">MS Computer Science</p>
                  <p className="text-sm text-muted-foreground">Expected Dec 2025</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
