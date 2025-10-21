import { Hero } from "../Hero";

export default function HeroExample() {
  return (
    <Hero
      onSearchOpen={() => console.log("Search opened")}
      onBookingOpen={() => console.log("Booking opened")}
    />
  );
}
