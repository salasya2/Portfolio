import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import profileImage from "@assets/generated_images/Professional_portfolio_headshot_34912d2a.png";

export function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-8" data-testid="text-about-title">About Me</h2>
        <Card className="p-8">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-shrink-0">
              <Avatar className="h-48 w-48">
                <AvatarImage src={profileImage} alt="Sai Teja Alasyam" />
                <AvatarFallback>ST</AvatarFallback>
              </Avatar>
            </div>
            <div className="space-y-4 flex-1">
              <div>
                <h3 className="text-2xl font-semibold mb-2" data-testid="text-about-name">
                  Sai Teja Alasyam
                </h3>
                <p className="text-muted-foreground">AI/ML Engineer & Software Developer</p>
              </div>
              <div className="space-y-2 text-muted-foreground">
                <p data-testid="text-about-location">
                  <span className="font-medium text-foreground">Location:</span> Tempe, AZ
                </p>
                <p data-testid="text-about-email">
                  <span className="font-medium text-foreground">Email:</span>{" "}
                  <a href="mailto:saitejaalasyam@gmail.com" className="text-primary hover:underline">
                    saitejaalasyam@gmail.com
                  </a>
                </p>
                <p data-testid="text-about-phone">
                  <span className="font-medium text-foreground">Phone:</span>{" "}
                  <a href="tel:+16025767785" className="text-primary hover:underline">
                    +1 (602) 576-7785
                  </a>
                </p>
              </div>
              <div className="pt-4 space-y-3 leading-relaxed" data-testid="text-about-description">
                <p>
                  I'm a Master's student in Computer Science at Arizona State University with a perfect 4.0 GPA, 
                  specializing in AI/ML, deep learning, and cloud technologies. Currently working as a Mindful AI 
                  Framework Assistant, I'm passionate about building intelligent systems that solve real-world problems.
                </p>
                <p>
                  My expertise spans from developing RAG systems and multimodal AI pipelines to deploying scalable 
                  edge computing solutions on AWS. I've worked extensively with technologies like Kubernetes, Docker, 
                  Apache Kafka, and various machine learning frameworks including Transformers and LangChain.
                </p>
                <p>
                  With hands-on experience in full-stack development, cloud infrastructure, and AI research, I bring 
                  a comprehensive approach to solving complex technical challenges. I'm particularly interested in 
                  generative AI, NLP, and building production-ready AI systems at scale.
                </p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
