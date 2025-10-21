import { useState } from "react";
import { AppointmentBooking } from "../AppointmentBooking";
import { Button } from "@/components/ui/button";
import { Toaster } from "@/components/ui/toaster";

export default function AppointmentBookingExample() {
  const [open, setOpen] = useState(true);

  return (
    <div className="p-8">
      <Button onClick={() => setOpen(true)}>Open Booking Modal</Button>
      <AppointmentBooking open={open} onOpenChange={setOpen} />
      <Toaster />
    </div>
  );
}
