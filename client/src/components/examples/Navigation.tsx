import { Navigation } from "../Navigation";

export default function NavigationExample() {
  return (
    <Navigation
      onSearchOpen={() => console.log("Search opened")}
      onBookingOpen={() => console.log("Booking opened")}
    />
  );
}
