import { Contact } from "../Contact";
import { Toaster } from "@/components/ui/toaster";

export default function ContactExample() {
  return (
    <>
      <Contact onBookingOpen={() => console.log("Booking opened")} />
      <Toaster />
    </>
  );
}
