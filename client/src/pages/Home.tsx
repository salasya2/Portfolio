import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { ChatWidget } from "@/components/ChatWidget";
import { SearchModal } from "@/components/SearchModal";

export default function Home() {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <Navigation onSearchOpen={() => setSearchOpen(true)} />
      <Hero onSearchOpen={() => setSearchOpen(true)} />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
      <ChatWidget />
      <SearchModal open={searchOpen} onOpenChange={setSearchOpen} />
    </div>
  );
}
