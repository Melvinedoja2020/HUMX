import { useEffect } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
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

export default function BookingPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const roomFromQuery = searchParams.get("room");

  const { form, updateField, summary, submitBooking } = useBooking();

  useEffect(() => {
    if (roomFromQuery && rooms.some((room) => room.id === roomFromQuery)) {
      updateField("roomId", roomFromQuery);
    }
  }, [roomFromQuery, updateField]);

  useEffect(() => {
    loadGSAP().then((gsap) => {
      gsap.fromTo(
        ".booking-title",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9, ease: "power3.out" },
      );

      gsap.utils.toArray(".booking-reveal").forEach((el, index) => {
        gsap.fromTo(
          el,
          { y: 42, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.85,
            delay: index * 0.06,
            ease: "power3.out",
          },
        );
      });
    });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const booking = submitBooking();
    navigate(`/confirmation?ref=${booking.reference}`);
  };

  return (
    <div style={{ fontFamily: "'Jost', sans-serif", background: CREAM, minHeight: "100vh" }}>
      <section className="relative w-full overflow-hidden" style={{ height: 320 }}>
        <img
          src="https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=1600&q=80"
          alt="Booking banner"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/60" />
        <HotelNavbar tone="light" />
        <div className="absolute bottom-10 left-12">
          <h1
            className="booking-title text-white"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(40px,4.7vw,58px)", fontWeight: 300 }}
          >
            Book Your Stay
          </h1>
        </div>
      </section>

      <section className="px-12 py-16">
        <form onSubmit={handleSubmit} className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="booking-reveal rounded-[4px] bg-white px-8 py-8 shadow-[0_20px_50px_rgba(0,0,0,0.08)]">
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 36, fontWeight: 400, color: "#1a1208" }}>
              Reservation Details
            </h2>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              <label className="booking-field text-sm" style={{ color: "#4a3a28" }}>
                Full Name
                <input
                  required
                  value={form.name}
                  onChange={(event) => updateField("name", event.target.value)}
                  className="mt-2 w-full rounded-[4px] border px-4 py-3 text-sm outline-none focus:border-[#C9A96E]"
                  style={{ borderColor: "#e8e0d4" }}
                />
              </label>
              <label className="booking-field text-sm" style={{ color: "#4a3a28" }}>
                Email
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(event) => updateField("email", event.target.value)}
                  className="mt-2 w-full rounded-[4px] border px-4 py-3 text-sm outline-none focus:border-[#C9A96E]"
                  style={{ borderColor: "#e8e0d4" }}
                />
              </label>
              <label className="booking-field text-sm" style={{ color: "#4a3a28" }}>
                Check-in
                <input
                  type="date"
                  required
                  value={form.checkIn}
                  onChange={(event) => updateField("checkIn", event.target.value)}
                  className="mt-2 w-full rounded-[4px] border px-4 py-3 text-sm outline-none focus:border-[#C9A96E]"
                  style={{ borderColor: "#e8e0d4" }}
                />
              </label>
              <label className="booking-field text-sm" style={{ color: "#4a3a28" }}>
                Check-out
                <input
                  type="date"
                  required
                  value={form.checkOut}
                  onChange={(event) => updateField("checkOut", event.target.value)}
                  className="mt-2 w-full rounded-[4px] border px-4 py-3 text-sm outline-none focus:border-[#C9A96E]"
                  style={{ borderColor: "#e8e0d4" }}
                />
              </label>
              <label className="booking-field text-sm" style={{ color: "#4a3a28" }}>
                Guests
                <select
                  value={form.guests}
                  onChange={(event) => updateField("guests", Number(event.target.value))}
                  className="mt-2 w-full rounded-[4px] border px-4 py-3 text-sm outline-none focus:border-[#C9A96E]"
                  style={{ borderColor: "#e8e0d4" }}
                >
                  {[1, 2, 3, 4, 5, 6].map((count) => (
                    <option key={count} value={count}>{count}</option>
                  ))}
                </select>
              </label>
              <label className="booking-field text-sm" style={{ color: "#4a3a28" }}>
                Room
                <select
                  value={form.roomId}
                  onChange={(event) => updateField("roomId", event.target.value)}
                  className="mt-2 w-full rounded-[4px] border px-4 py-3 text-sm outline-none focus:border-[#C9A96E]"
                  style={{ borderColor: "#e8e0d4" }}
                >
                  {rooms.map((room) => (
                    <option key={room.id} value={room.id}>{room.name}</option>
                  ))}
                </select>
              </label>
            </div>
          </div>

          <aside className="booking-reveal rounded-[4px] bg-white px-8 py-8 shadow-[0_20px_50px_rgba(0,0,0,0.08)]">
            <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 34, fontWeight: 400, color: "#1a1208" }}>
              Price Summary
            </h3>

            <div className="mt-6 space-y-3 text-sm" style={{ color: "#4a3a28", fontWeight: 300 }}>
              <div className="flex justify-between"><span>Room rate</span><span>${summary.roomRate}</span></div>
              <div className="flex justify-between"><span>Nights</span><span>{summary.nights}</span></div>
              <div className="flex justify-between"><span>Room total</span><span>${summary.roomTotal}</span></div>
              <div className="flex justify-between"><span>Service fee</span><span>${summary.serviceFee}</span></div>
              <div className="flex justify-between"><span>Taxes</span><span>${summary.taxes}</span></div>
            </div>

            <div className="my-6" style={{ borderTop: "1px solid #e8e0d4" }} />

            <div className="flex items-end justify-between">
              <p className="text-sm uppercase tracking-wide" style={{ color: "#a89070" }}>Total</p>
              <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 42, fontWeight: 400, color: "#1a1208", lineHeight: 1 }}>
                ${summary.total}
              </p>
            </div>

            <button
              type="submit"
              className="mt-8 w-full rounded-full px-8 py-3 text-sm transition-all hover:opacity-90"
              style={{ background: GOLD, color: "#2a1f10", letterSpacing: "0.04em" }}
            >
              Confirm Reservation
            </button>

            <Link
              to="/rooms"
              className="mt-3 block w-full rounded-full border px-8 py-3 text-center text-sm transition-colors hover:bg-neutral-50"
              style={{ borderColor: GOLD, color: "#8B6914" }}
            >
              Back to Rooms
            </Link>
          </aside>
        </form>
      </section>
      <HotelFooter />
    </div>
  );
}
