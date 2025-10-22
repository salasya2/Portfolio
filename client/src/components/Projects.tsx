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
  },
  {
    id: "project-4",
    title: "Extension of WebArena",
    period: "Nov 2024 – Dec 2024",
    description: "Enhancing WebArena tasks by incorporating deontic logic and refining prompt structures",
    highlights: [
      "Enhanced WebArena tasks by incorporating deontic logic and refining prompt structures to improve model performance",
      "Developed a dataset of 25 deontological tasks and evaluated them using WebArena LLMs",
      "Validated task complexity through assessments with ChatGPT",
      "Improved model reasoning capabilities in complex web-based environments"
    ],
    technologies: ["WebArena", "Deontic Logic", "LLMs", "Prompt Engineering", "Evaluation", "ChatGPT"]
  },
  {
    id: "project-5",
    title: "LLM-based Phishing Detection",
    period: "Feb 2025 – Apr 2025",
    description: "Multi-agent architecture utilizing LLaMA-3.3-49B Nemotron model for real-time phishing detection",
    highlights: [
      "Designed a multi-agent architecture utilizing the LLaMA-3.3-49B Nemotron model for real-time phishing website detection",
      "Implemented rule-based evaluation mechanisms to identify phishing indicators from webpage content and structure",
      "Built and deployed a browser extension integrated with the detection pipeline for end-user protection",
      "Led collaboration with peers to design evaluation strategies and effectively communicated results through presentations and documentation"
    ],
    technologies: ["LLaMA-3.3-49B", "Nemotron", "Multi-agent", "Browser Extension", "Phishing Detection", "Rule-based Evaluation"]
  },
  {
    id: "project-6",
    title: "Evaluating Mathematical Reasoning of LLMs",
    period: "Oct 2024 – Dec 2024",
    description: "Evaluated reasoning abilities of open-source instruction-tuned models on GSM8k dataset",
    highlights: [
      "Evaluated reasoning abilities of open-source instruction-tuned models (Llama-3.1-8B-instruct, Llama-3.2-3B, Gemma-2-9B-it, Mistral-7B-instruct) on the GSM8k dataset",
      "Designed a multi-agent framework and assessed performance across four dimensions: Accuracy, Correct Reasoning, Correct Answer, and Joint Correctness",
      "Demonstrated that multi-agent setups uncovered untapped reasoning ability, achieving up to 13% Correct Reasoning, even in cases where answers were incorrect",
      "Collaborated in a research group, contributing to methodology discussions and refining experiment design while practicing clear scientific communication"
    ],
    technologies: ["Llama-3.1-8B", "Llama-3.2-3B", "Gemma-2-9B", "Mistral-7B", "GSM8k", "Multi-agent", "Mathematical Reasoning"]
  },
  {
    id: "project-7",
    title: "Specialized Rich Text Document RAG for arXiv Papers",
    period: "Oct 2024 – Dec 2024",
    description: "Built a Retrieval-Augmented Generation (RAG) system to process multimodal user queries over scientific papers",
    highlights: [
      "Built a Retrieval-Augmented Generation (RAG) system to process multimodal user queries over scientific papers",
      "Utilized AWS DynamoDB & S3 for storage and retrieval of scraped research papers",
      "Established a baseline method for handling complex scientific document structures and multimodal queries",
      "Implemented efficient retrieval mechanisms for large-scale scientific literature processing"
    ],
    technologies: ["RAG", "AWS DynamoDB", "S3", "arXiv", "Multimodal", "Scientific Papers", "Retrieval Systems"]
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
