import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Send, Calendar, Github, Linkedin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface ContactProps {
  onBookingOpen: () => void;
}

export function Contact({ onBookingOpen }: ContactProps) {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact form submitted:", formData);
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-12" data-testid="text-contact-title">Get In Touch</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="p-8">
            <h3 className="text-2xl font-semibold mb-6" data-testid="text-contact-form-title">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  data-testid="input-contact-name"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  data-testid="input-contact-email"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input
                  id="subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  required
                  data-testid="input-contact-subject"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  required
                  data-testid="input-contact-message"
                />
              </div>
              <Button type="submit" className="w-full" data-testid="button-send-message">
                <Send className="h-4 w-4 mr-2" />
                Send Message
              </Button>
            </form>
          </Card>

          <div className="space-y-6">
            <Card className="p-8">
              <h3 className="text-2xl font-semibold mb-6" data-testid="text-contact-info-title">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium">Email</p>
                    <a
                      href="mailto:saitejaalasyam@gmail.com"
                      className="text-muted-foreground hover:text-primary"
                      data-testid="link-contact-email"
                    >
                      saitejaalasyam@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <a
                      href="tel:+16025767785"
                      className="text-muted-foreground hover:text-primary"
                      data-testid="link-contact-phone"
                    >
                      +1 (602) 576-7785
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-muted-foreground" data-testid="text-contact-location">Tempe, AZ</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-3 mt-6 pt-6 border-t border-border">
                <Button variant="outline" size="icon" asChild data-testid="link-contact-github">
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                    <Github className="h-5 w-5" />
                  </a>
                </Button>
                <Button variant="outline" size="icon" asChild data-testid="link-contact-linkedin">
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-5 w-5" />
                  </a>
                </Button>
              </div>
            </Card>

            <Card className="p-8 bg-primary/5 border-primary/20">
              <div className="text-center space-y-4">
                <Calendar className="h-12 w-12 text-primary mx-auto" />
                <div>
                  <h3 className="text-xl font-semibold mb-2" data-testid="text-book-call-title">
                    Prefer to schedule a call?
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Book a time that works best for you
                  </p>
                  <Button onClick={onBookingOpen} size="lg" className="w-full" data-testid="button-contact-book">
                    <Calendar className="h-4 w-4 mr-2" />
                    Schedule Appointment
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
