import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Calendar } from "lucide-react";

const projects = [
  {
    id: "project-1",
    title: "Student Loan Repayment System",
    period: "Oct 2025 – Oct 2025",
    description: "Full-stack loan management platform with AI-powered features and real-time analytics",
    highlights: [
      "Cut manual data entry 90% by building an AI-assisted CSV importer with automated column mapping",
      "Delivered a conversational AI chatbot with flow management and state-specific tax logic to personalize loan payoff projections",
      "Hardened the stack with end-to-end encryption, PII masking, JWT auth, RBAC, and audit logging",
      "Achieved sub-second p95 responses via async REST APIs and optimized state management"
    ],
    technologies: ["React 19", "FastAPI", "MongoDB", "AI/ML", "JWT", "Encryption"]
  },
  {
    id: "project-2",
    title: "Face Recognition Edge Computing System",
    period: "Feb 2025 – Apr 2025",
    description: "Edge-based face recognition pipeline on AWS IoT Greengrass with low-latency inference",
    highlights: [
      "Engineered edge-based face recognition achieving low-latency inference and reducing cloud dependency",
      "Developed MTCNN-based detection on EC2 Greengrass; streamlined throughput by 30% via SQS queues",
      "Configured IoT clients with secure certificates and MQTT messaging for 100% reliable delivery",
      "Optimized edge pipeline to handle No-Face cases locally, reducing unnecessary cloud requests by 15%"
    ],
    technologies: ["AWS IoT Greengrass", "SQS", "Lambda", "MTCNN", "MQTT", "EC2"]
  },
  {
    id: "project-3",
    title: "Graph Processing & Streaming Analytics",
    period: "Sep 2024 – Nov 2024",
    description: "Real-time graph processing system for analyzing 20M+ NYC taxi trips",
    highlights: [
      "Designed and deployed graph processing system on Neo4j using Docker containers",
      "Implemented PageRank and BFS algorithms for high-traffic location identification",
      "Built streaming pipeline with Kubernetes and Apache Kafka for near real-time analytics",
      "Automated deployment using Helm charts, reducing manual setup effort by 40%"
    ],
    technologies: ["Neo4j", "Docker", "Kafka", "Kubernetes", "Helm", "Graph Algorithms"]
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-12" data-testid="text-projects-title">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <Card key={project.id} className="p-6 flex flex-col hover-elevate" data-testid={`card-${project.id}`}>
              <div className="space-y-4 flex-1">
                <div className="space-y-2">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-xl font-semibold" data-testid={`text-${project.id}-title`}>
                      {project.title}
                    </h3>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-3 w-3" />
                    <span data-testid={`text-${project.id}-period`}>{project.period}</span>
                  </div>
                  <p className="text-muted-foreground" data-testid={`text-${project.id}-description`}>
                    {project.description}
                  </p>
                </div>

                <ul className="space-y-2 text-sm">
                  {project.highlights.map((highlight, idx) => (
                    <li
                      key={idx}
                      className="flex gap-2 text-muted-foreground leading-relaxed"
                      data-testid={`text-${project.id}-highlight-${idx}`}
                    >
                      <span className="text-primary mt-1 flex-shrink-0">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2 pt-4 mt-4 border-t border-border">
                {project.technologies.map((tech) => (
                  <Badge key={tech} variant="secondary" data-testid={`badge-${project.id}-tech-${tech.toLowerCase().replace(/[\s\/]/g, '-')}`}>
                    {tech}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
