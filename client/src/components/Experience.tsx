import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, MapPin, Calendar } from "lucide-react";

const experiences = [
  {
    id: "exp-1",
    title: "Mindful AI Framework Assistant",
    company: "WP Carey School of Business, Arizona State University",
    location: "Remote",
    period: "Jun 2025 – Present",
    achievements: [
      "Developed an AI Risk Repository using the Mindful AI Framework, improving risk classification accuracy and expanding taxonomy coverage",
      "Conducted a study on LLM-based classification pipelines, benchmarking techniques such as Reflexion and hierarchical agents across multiple large language models to optimize performance and reliability",
      "Enhanced the MIT AI Risk Taxonomy classification process by labeling over 1,100 incidents, improving dataset consistency and achieving classification accuracy of up to 80%"
    ],
    skills: ["AI Risk Management", "LLM Pipelines", "Taxonomy Classification", "Reflexion"]
  },
  {
    id: "exp-2",
    title: "Research Aide",
    company: "WP Carey School of Business, Arizona State University",
    location: "Tempe, AZ",
    period: "Oct 2024 – Aug 2025",
    achievements: [
      "Engineered a Retrieval-Augmented Generation (RAG) system for academic course data, improving search efficiency by 40%",
      "Migrated LLM codebase from Google Colab to AWS SageMaker Studio, enhancing scalability and reproducibility",
      "Developed a multimodal trajectory prediction pipeline on the Waymo Open Dataset using Google Gemma-2-9B with LoRA fine-tuning; integrated image-to-text encoding, contextual prompts, and trajectory intent prediction, achieving a benchmark score of 7.36 (vs. 7.52 baseline)"
    ],
    skills: ["RAG Systems", "AWS SageMaker", "Multimodal AI", "LoRA Fine-tuning", "Waymo Dataset"]
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-12" data-testid="text-experience-title">Experience</h2>
        <div className="space-y-6">
          {experiences.map((exp) => (
            <Card key={exp.id} className="p-6 hover-elevate" data-testid={`card-${exp.id}`}>
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                  <div className="space-y-1">
                    <h3 className="text-xl font-semibold" data-testid={`text-${exp.id}-title`}>
                      {exp.title}
                    </h3>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Building2 className="h-4 w-4" />
                      <span data-testid={`text-${exp.id}-company`}>{exp.company}</span>
                    </div>
                  </div>
                  <div className="flex flex-col sm:items-end gap-1 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span data-testid={`text-${exp.id}-period`}>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      <span data-testid={`text-${exp.id}-location`}>{exp.location}</span>
                    </div>
                  </div>
                </div>
                
                <ul className="space-y-2 ml-4">
                  {exp.achievements.map((achievement, idx) => (
                    <li
                      key={idx}
                      className="flex gap-3 text-muted-foreground leading-relaxed"
                      data-testid={`text-${exp.id}-achievement-${idx}`}
                    >
                      <span className="text-primary mt-2 flex-shrink-0">•</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 pt-2">
                  {exp.skills.map((skill) => (
                    <Badge key={skill} variant="secondary" data-testid={`badge-${exp.id}-skill-${skill.toLowerCase().replace(/\s+/g, '-')}`}>
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
