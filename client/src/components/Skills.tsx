import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const skillCategories = [
  {
    id: "programming",
    title: "Programming Languages",
    skills: ["Python", "C++", "Java", "SQL", "Bash"]
  },
  {
    id: "frameworks",
    title: "Frameworks & Libraries",
    skills: ["Transformers", "LangChain", "Django", "Bootstrap", "React", "Node.js"]
  },
  {
    id: "cloud",
    title: "Cloud & DevOps",
    skills: ["AWS", "GCP", "Docker", "Kubernetes", "Helm", "Anaconda"]
  },
  {
    id: "systems",
    title: "Systems & Tools",
    skills: ["Unix/Linux", "Apache Kafka", "Minikube", "Node.js Runtime", "MCP"]
  },
  {
    id: "domains",
    title: "Domains & Expertise",
    skills: ["Deep Learning", "NLP", "Generative AI", "AI Agents", "Graph Analytics", "Edge Computing", "APIs"]
  }
];

export function Skills() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-12" data-testid="text-skills-title">Skills & Technologies</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <Card key={category.id} className="p-6" data-testid={`card-${category.id}`}>
              <h3 className="text-lg font-semibold mb-4" data-testid={`text-${category.id}-title`}>
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge 
                    key={skill} 
                    variant="secondary"
                    data-testid={`badge-${category.id}-${skill.toLowerCase().replace(/[\s\/]/g, '-')}`}
                  >
                    {skill}
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
