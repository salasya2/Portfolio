import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { AppointmentBooking } from "@/components/AppointmentBooking";
import { ChatWidget } from "@/components/ChatWidget";
import { SearchModal } from "@/components/SearchModal";

export default function Home() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <Navigation onSearchOpen={() => setSearchOpen(true)} onBookingOpen={() => setBookingOpen(true)} />
      <Hero onSearchOpen={() => setSearchOpen(true)} onBookingOpen={() => setBookingOpen(true)} />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Contact onBookingOpen={() => setBookingOpen(true)} />
      <Footer />
      <ChatWidget />
      <AppointmentBooking open={bookingOpen} onOpenChange={setBookingOpen} />
      <SearchModal open={searchOpen} onOpenChange={setSearchOpen} />
    </div>
  );
}
