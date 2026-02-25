import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useBooking } from "../context/BookingContext";
import {
  AmenitiesSection,
  BookingSection,
  FeaturedRoomsSection,
  HeroSection,
  LocationSection,
  TestimonialsSection,
} from "../components/sections/HomeSections";

const Home = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { openBooking } = useBooking();

  useEffect(() => {
    const room = searchParams.get("room");
    const shouldScroll = searchParams.get("booking") === "open";
    const section = searchParams.get("section");

    if (!room && !shouldScroll && !section) return;

    if (room) {
      openBooking({ roomSlug: room }, false);
    }

    const targetId = section === "rooms" ? "featured-rooms" : "booking-section";
    const sectionElement = document.getElementById(targetId);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    setSearchParams((current) => {
      current.delete("booking");
      current.delete("room");
      current.delete("section");
      return current;
    });
  }, [openBooking, searchParams, setSearchParams]);

  return (
    <main>
      <HeroSection />
      <AmenitiesSection />
      <FeaturedRoomsSection />
      <TestimonialsSection />
      <LocationSection />
      <BookingSection />
    </main>
  );
};

export default Home;
