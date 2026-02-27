import { useEffect } from "react";
import { Link } from "react-router-dom";
import { rooms } from "../data/rooms";
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

export default function ViewBookingsPage() {
  const { bookings } = useBooking();

  useEffect(() => {
    loadGSAP().then((gsap) => {
      gsap.utils.toArray(".booking-item").forEach((el, index) => {
        gsap.fromTo(
          el,
          { y: 32, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.75, delay: index * 0.06, ease: "power3.out" },
        );
      });
    });
  }, [bookings.length]);

  const recent = bookings.slice(0, 6);

  return (
    <main style={{ background: CREAM, minHeight: "100vh", fontFamily: "'Jost', sans-serif" }} className="px-12 py-16">
      <div className="mx-auto max-w-5xl">
        <p className="text-xs uppercase tracking-wider" style={{ color: "#a89070" }}>Reservations</p>
        <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 50, fontWeight: 400, color: "#1a1208", lineHeight: 1.05 }}>
          Recent Bookings
        </h1>

        {recent.length === 0 ? (
          <div className="booking-item mt-8 rounded-[4px] bg-white px-8 py-8 shadow-[0_20px_50px_rgba(0,0,0,0.08)]">
            <p className="text-sm" style={{ color: "#6b5a45", fontWeight: 300 }}>
              No bookings yet. Start with a room selection to create your first reservation.
            </p>
            <Link
              to="/rooms"
              className="mt-6 inline-block rounded-full px-8 py-3 text-sm transition-all hover:opacity-90"
              style={{ background: GOLD, color: "#2a1f10", letterSpacing: "0.04em" }}
            >
              Browse Rooms
            </Link>
          </div>
        ) : (
          <div className="mt-8 grid gap-4">
            {recent.map((booking) => {
              const room = rooms.find((item) => item.id === booking.roomId);
              return (
                <article
                  key={booking.reference}
                  className="booking-item rounded-[4px] bg-white px-7 py-7 shadow-[0_20px_50px_rgba(0,0,0,0.08)]"
                >
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div>
                      <p className="text-xs uppercase tracking-wider" style={{ color: "#a89070" }}>
                        {booking.reference}
                      </p>
                      <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 32, fontWeight: 400, color: "#1a1208" }}>
                        {room?.name ?? booking.roomId}
                      </h2>
                      <p className="text-sm" style={{ color: "#6b5a45", fontWeight: 300 }}>
                        {booking.checkIn} to {booking.checkOut} · {booking.guests} guests
                      </p>
                    </div>
                    <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 38, fontWeight: 400, color: "#1a1208" }}>
                      ${booking.total}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </div>
    </main>
  );
}
