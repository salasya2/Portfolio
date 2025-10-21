import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import { useToast } from "@/hooks/use-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { Clock, Calendar as CalendarIcon } from "lucide-react";

interface AppointmentBookingProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const timeSlots = [
  "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM",
  "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM",
  "02:00 PM", "02:30 PM", "03:00 PM", "03:30 PM",
  "04:00 PM", "04:30 PM", "05:00 PM"
];

export function AppointmentBooking({ open, onOpenChange }: AppointmentBookingProps) {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    purpose: ""
  });

  const createAppointmentMutation = useMutation({
    mutationFn: async (data: any) => {
      const res = await apiRequest("POST", "/api/appointments", data);
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/appointments"] });
      toast({
        title: "Appointment Booked!",
        description: `Your appointment has been scheduled for ${selectedDate?.toLocaleDateString()} at ${selectedTime}.`,
      });
      setFormData({ name: "", email: "", phone: "", purpose: "" });
      setSelectedTime("");
      onOpenChange(false);
    },
    onError: (error: any) => {
      toast({
        title: "Booking Failed",
        description: error.message || "Failed to book appointment. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedDate || !selectedTime) {
      toast({
        title: "Incomplete Selection",
        description: "Please select both a date and time slot.",
        variant: "destructive"
      });
      return;
    }
    
    createAppointmentMutation.mutate({
      ...formData,
      date: selectedDate.toISOString(),
      time: selectedTime,
    });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle data-testid="text-booking-title">Book an Appointment</DialogTitle>
          <DialogDescription>
            Schedule a time to discuss your project or idea
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label className="flex items-center gap-2">
                  <CalendarIcon className="h-4 w-4" />
                  Select Date
                </Label>
                <Calendar
                  mode="single"
                  selected={selectedDate}
                  onSelect={setSelectedDate}
                  disabled={(date) => date < new Date(new Date().setHours(0, 0, 0, 0))}
                  className="rounded-md border border-border"
                  data-testid="calendar-booking"
                />
              </div>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <Label className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  Select Time
                </Label>
                <div className="grid grid-cols-2 gap-2 max-h-[300px] overflow-y-auto p-2 border rounded-md">
                  {timeSlots.map((time) => (
                    <Button
                      key={time}
                      type="button"
                      variant={selectedTime === time ? "default" : "outline"}
                      className="w-full"
                      onClick={() => setSelectedTime(time)}
                      data-testid={`button-time-${time.replace(/\s+/g, '-').toLowerCase()}`}
                    >
                      {time}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="booking-name">Name</Label>
                <Input
                  id="booking-name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  data-testid="input-booking-name"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="booking-email">Email</Label>
                <Input
                  id="booking-email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  data-testid="input-booking-email"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="booking-phone">Phone (Optional)</Label>
              <Input
                id="booking-phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                data-testid="input-booking-phone"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="booking-purpose">Purpose of Meeting</Label>
              <Textarea
                id="booking-purpose"
                value={formData.purpose}
                onChange={(e) => setFormData({ ...formData, purpose: e.target.value })}
                rows={3}
                required
                data-testid="input-booking-purpose"
              />
            </div>
          </div>

          <div className="flex gap-3 justify-end">
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
              data-testid="button-booking-cancel"
            >
              Cancel
            </Button>
            <Button 
              type="submit" 
              disabled={createAppointmentMutation.isPending}
              data-testid="button-booking-confirm"
            >
              {createAppointmentMutation.isPending ? "Booking..." : "Confirm Appointment"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
