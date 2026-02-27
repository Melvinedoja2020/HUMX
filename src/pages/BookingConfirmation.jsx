import { useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { rooms } from "../data/rooms";
import HotelNavbar from "../components/site/HotelNavbar";
import HotelFooter from "../components/site/HotelFooter";
import { useBooking } from "../context/BookingContext";

const GOLD = "#C9A96E";
const CREAM = "#F5EFE6";

function loadGSAP() {
  return new Promise((resolve) => {
    if (window.gsap) return resolve(window.gsap);
    const script = document.createElement("script");
    script.src = "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js";
    script.onload = () => {
      const trigger = document.createElement("script");
      trigger.src = "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js";
      trigger.onload = () => {
        window.gsap.registerPlugin(window.ScrollTrigger);
        resolve(window.gsap);
      };
      document.head.appendChild(trigger);
    };
    document.head.appendChild(script);
  });
}

export default function BookingConfirmationPage() {
  const [searchParams] = useSearchParams();
  const { bookings, confirmation } = useBooking();
  const ref = searchParams.get("ref");

  const booking = bookings.find((item) => item.reference === ref) ?? confirmation;
  const room = booking ? rooms.find((item) => item.id === booking.roomId) : null;

  useEffect(() => {
    loadGSAP().then((gsap) => {
      gsap.fromTo(
        ".confirm-card",
        { y: 34, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9, ease: "power3.out" },
      );
    });
  }, []);

  if (!booking) {
    return (
      <div style={{ background: CREAM, minHeight: "100vh", fontFamily: "'Jost', sans-serif" }}>
        <div className="relative h-24">
          <HotelNavbar tone="dark" />
        </div>
        <main className="px-12 py-8">
          <div className="confirm-card mx-auto max-w-3xl rounded-[4px] bg-white px-10 py-10 shadow-[0_20px_50px_rgba(0,0,0,0.08)]">
            <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 44, fontWeight: 400, color: "#1a1208" }}>
              No booking found
            </h1>
            <p className="mt-4 text-sm" style={{ color: "#6b5a45", fontWeight: 300 }}>
              We could not locate a recent reservation. Start a new booking to generate confirmation details.
            </p>
            <Link
              to="/booking"
              className="mt-8 inline-block rounded-full px-8 py-3 text-sm transition-all hover:opacity-90"
              style={{ background: GOLD, color: "#2a1f10", letterSpacing: "0.04em" }}
            >
              Start Booking
            </Link>
          </div>
        </main>
        <HotelFooter />
      </div>
    );
  }

  return (
    <div style={{ background: CREAM, minHeight: "100vh", fontFamily: "'Jost', sans-serif" }}>
      <div className="relative h-24">
        <HotelNavbar tone="dark" />
      </div>
      <main className="px-12 py-8">
        <div className="confirm-card mx-auto max-w-4xl rounded-[4px] bg-white px-10 py-10 shadow-[0_20px_50px_rgba(0,0,0,0.08)]">
          <p className="text-xs uppercase tracking-wider" style={{ color: "#a89070" }}>Booking Confirmed</p>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 48, fontWeight: 400, color: "#1a1208", lineHeight: 1.1 }}>
            Your stay is reserved.
          </h1>

          <div className="mt-8 grid gap-4 rounded-[4px] border px-6 py-6 text-sm md:grid-cols-2" style={{ borderColor: "#e8e0d4", color: "#4a3a28" }}>
            <p><span style={{ color: "#a89070" }}>Reference:</span> <strong>{booking.reference}</strong></p>
            <p><span style={{ color: "#a89070" }}>Room:</span> {room?.name ?? booking.roomId}</p>
            <p><span style={{ color: "#a89070" }}>Dates:</span> {booking.checkIn} to {booking.checkOut}</p>
            <p><span style={{ color: "#a89070" }}>Guests:</span> {booking.guests}</p>
            <p><span style={{ color: "#a89070" }}>Booked by:</span> {booking.name}</p>
            <p><span style={{ color: "#a89070" }}>Total:</span> ${booking.total}</p>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/booking/view"
              className="rounded-full px-8 py-3 text-sm transition-all hover:opacity-90"
              style={{ background: GOLD, color: "#2a1f10", letterSpacing: "0.04em" }}
            >
              View Bookings
            </Link>
            <Link
              to="/rooms"
              className="rounded-full border px-8 py-3 text-sm transition-colors hover:bg-neutral-50"
              style={{ borderColor: GOLD, color: "#8B6914" }}
            >
              Browse Rooms
            </Link>
          </div>
        </div>
      </main>
      <HotelFooter />
    </div>
  );
}
