import { useEffect } from "react";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import HotelNavbar from "../components/site/HotelNavbar";
import HotelFooter from "../components/site/HotelFooter";
import { formatNaira, rooms } from "../data/rooms";
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

export default function RoomDetailsPage() {
  const { roomId } = useParams();
  const navigate = useNavigate();
  const room = rooms.find((item) => item.id === roomId);
  const { form, updateField, summary, submitBooking } = useBooking();

  useEffect(() => {
    if (room) {
      updateField("roomId", room.id);
    }
  }, [room, updateField]);

  useEffect(() => {
    loadGSAP().then((gsap) => {
      gsap.fromTo(".detail-title", { y: 34, opacity: 0 }, { y: 0, opacity: 1, duration: 0.9, ease: "power3.out" });

      gsap.utils.toArray(".detail-reveal").forEach((el) => {
        gsap.fromTo(
          el,
          { y: 42, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.85,
            ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 85%" },
          },
        );
      });
    });
  }, []);

  if (!room) return <Navigate to="/rooms" replace />;

  const handleSubmit = (event) => {
    event.preventDefault();
    const booking = submitBooking();
    navigate(`/confirmation?ref=${booking.reference}`);
  };

  return (
    <div style={{ fontFamily: "'Jost', sans-serif" }}>
      <section className="fixed top-0 left-0 right-0 z-0 overflow-hidden" style={{ height: 420 }}>
        <img src={room.bannerImg} alt={room.name} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/60" />
        <HotelNavbar tone="light" />
        <div className="absolute bottom-10 left-12">
          <p className="text-xs tracking-wider uppercase text-white/80">{room.category}</p>
          <h1 className="detail-title text-white" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(42px,5vw,62px)", fontWeight: 300 }}>
            {room.name}
          </h1>
        </div>
      </section>

      <main className="relative z-20 bg-white pt-[420px]">
        <section className="bg-white" style={{ minHeight: 480 }}>
          <div className="grid lg:grid-cols-2">
            <div className="detail-reveal px-12 py-16 lg:px-16" style={{ borderRight: "1px solid #f0ebe2" }}>
              <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 44, fontWeight: 400, color: "#1a1208" }}>Room Details</h2>

              <div className="mt-8 flex flex-wrap gap-12">
                <div>
                  <p className="text-xs uppercase tracking-wide" style={{ color: "#a89070" }}>Size</p>
                  <p className="mt-1 text-base" style={{ color: "#1a1208" }}>{room.size}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wide" style={{ color: "#a89070" }}>Capacity</p>
                  <p className="mt-1 text-base" style={{ color: "#1a1208" }}>{room.guests}</p>
                </div>
              </div>

              <div className="my-8" style={{ borderTop: "1px solid #e8e0d4" }} />

              <p className="max-w-xl text-sm leading-relaxed" style={{ color: "#4a3a28", fontWeight: 300 }}>{room.longDescription}</p>

              <p className="mt-8 text-xs uppercase tracking-wide" style={{ color: "#a89070" }}>Starting at</p>
              <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 44, fontWeight: 400, color: "#1a1208", lineHeight: 1 }}>
                {formatNaira(room.price)}
              </p>
              <p className="text-sm" style={{ color: "#a89070", fontWeight: 300 }}>/ night</p>

              <a href="#detail-booking" className="mt-8 inline-block rounded-full px-8 py-3 text-sm transition-all hover:opacity-90" style={{ background: GOLD, color: "#2a1f10", letterSpacing: "0.04em" }}>
                Book This Room
              </a>
            </div>

            <div className="detail-reveal h-[420px] lg:h-auto">
              <img src={room.detailImg} alt={room.name} className="h-full w-full object-cover" />
            </div>
          </div>
        </section>

        <section id="detail-booking" style={{ background: CREAM }} className="px-12 py-16">
          <form onSubmit={handleSubmit} className="detail-reveal grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-[4px] bg-white px-8 py-8 shadow-[0_20px_50px_rgba(0,0,0,0.08)]">
              <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 36, color: "#1a1208" }}>Complete Reservation</h3>

              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <label className="text-sm" style={{ color: "#4a3a28" }}>
                  Full Name
                  <input required value={form.name} onChange={(e) => updateField("name", e.target.value)} className="mt-2 w-full rounded-[4px] border px-4 py-3 text-sm outline-none" style={{ borderColor: "#e8e0d4" }} />
                </label>
                <label className="text-sm" style={{ color: "#4a3a28" }}>
                  Email
                  <input type="email" required value={form.email} onChange={(e) => updateField("email", e.target.value)} className="mt-2 w-full rounded-[4px] border px-4 py-3 text-sm outline-none" style={{ borderColor: "#e8e0d4" }} />
                </label>
                <label className="text-sm" style={{ color: "#4a3a28" }}>
                  Check-in
                  <input type="date" required value={form.checkIn} onChange={(e) => updateField("checkIn", e.target.value)} className="mt-2 w-full rounded-[4px] border px-4 py-3 text-sm outline-none" style={{ borderColor: "#e8e0d4" }} />
                </label>
                <label className="text-sm" style={{ color: "#4a3a28" }}>
                  Check-out
                  <input type="date" required value={form.checkOut} onChange={(e) => updateField("checkOut", e.target.value)} className="mt-2 w-full rounded-[4px] border px-4 py-3 text-sm outline-none" style={{ borderColor: "#e8e0d4" }} />
                </label>
                <label className="text-sm" style={{ color: "#4a3a28" }}>
                  Guests
                  <select value={form.guests} onChange={(e) => updateField("guests", Number(e.target.value))} className="mt-2 w-full rounded-[4px] border px-4 py-3 text-sm outline-none" style={{ borderColor: "#e8e0d4" }}>
                    {[1, 2, 3, 4, 5, 6].map((count) => (
                      <option key={count} value={count}>{count}</option>
                    ))}
                  </select>
                </label>
                <label className="text-sm" style={{ color: "#4a3a28" }}>
                  Room Type
                  <input disabled value={room.name} className="mt-2 w-full rounded-[4px] border px-4 py-3 text-sm outline-none bg-[#f8f2e8]" style={{ borderColor: "#e8e0d4" }} />
                </label>
              </div>
            </div>

            <aside className="rounded-[4px] bg-white px-8 py-8 shadow-[0_20px_50px_rgba(0,0,0,0.08)]">
              <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 34, color: "#1a1208" }}>Price Summary</h3>
              <div className="mt-6 space-y-3 text-sm" style={{ color: "#4a3a28" }}>
                <div className="flex justify-between"><span>Room rate</span><span>{formatNaira(summary.roomRate)}</span></div>
                <div className="flex justify-between"><span>Nights</span><span>{summary.nights}</span></div>
                <div className="flex justify-between"><span>Room total</span><span>{formatNaira(summary.roomTotal)}</span></div>
                <div className="flex justify-between"><span>Service fee</span><span>{formatNaira(summary.serviceFee)}</span></div>
                <div className="flex justify-between"><span>Taxes</span><span>{formatNaira(summary.taxes)}</span></div>
              </div>
              <div className="my-6" style={{ borderTop: "1px solid #e8e0d4" }} />
              <div className="flex items-end justify-between">
                <span className="text-sm uppercase tracking-wide" style={{ color: "#a89070" }}>Total</span>
                <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 40, color: "#1a1208" }}>{formatNaira(summary.total)}</p>
              </div>
              <button type="submit" className="mt-6 w-full rounded-full px-8 py-3 text-sm transition-all hover:opacity-90" style={{ background: GOLD, color: "#2a1f10", letterSpacing: "0.04em" }}>
                Confirm Booking
              </button>
              <Link to="/rooms" className="mt-3 block w-full rounded-full border px-8 py-3 text-center text-sm" style={{ borderColor: GOLD, color: "#8B6914" }}>
                Back to Rooms
              </Link>
            </aside>
          </form>
        </section>

        <HotelFooter />
      </main>
    </div>
  );
}
