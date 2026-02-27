import { useEffect } from "react";
import { Link } from "react-router-dom";
import RoomTypeCard from "../components/rooms/RoomTypeCard";
import HotelNavbar from "../components/site/HotelNavbar";
import HotelFooter from "../components/site/HotelFooter";
import { rooms } from "../data/rooms";

const CREAM = "#F5EFE6";

function loadGSAP() {
  return new Promise((resolve) => {
    if (window.gsap) return resolve(window.gsap);
    const s = document.createElement("script");
    s.src = "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js";
    s.onload = () => {
      const s2 = document.createElement("script");
      s2.src = "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js";
      s2.onload = () => {
        window.gsap.registerPlugin(window.ScrollTrigger);
        resolve(window.gsap);
      };
      document.head.appendChild(s2);
    };
    document.head.appendChild(s);
  });
}

export default function RoomsPage() {
  useEffect(() => {
    loadGSAP().then((gsap) => {
      gsap.fromTo(
        ".rooms-banner-title",
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.1, ease: "power3.out", delay: 0.3 },
      );

      gsap.utils.toArray(".room-card-reveal").forEach((el, i) => {
        gsap.fromTo(
          el,
          { y: 42, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            delay: i * 0.08,
            ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 88%" },
          },
        );
      });
    });
  }, []);

  return (
    <div style={{ fontFamily: "'Jost', sans-serif", background: CREAM }}>
      <section className="fixed top-0 left-0 right-0 z-0 overflow-hidden" style={{ height: 420 }}>
        <img
          src="https://images.unsplash.com/photo-1540518614846-7eded433c457?w=1920&q=80"
          alt="Rooms banner"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/60" />
        <HotelNavbar tone="light" />
        <div className="absolute bottom-10 left-12">
          <h1
            className="rooms-banner-title text-white"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(44px,5vw,64px)", fontWeight: 300 }}
          >
            Room Types
          </h1>
          <p className="mt-2 text-sm text-white/85">Regular, Deluxe, Suite, Presidential</p>
        </div>
      </section>

      <main className="relative z-20 bg-white pt-[420px]">
        <section className="px-12 py-16">
          <div className="mb-8 flex items-end justify-between">
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 44, fontWeight: 400, color: "#1a1208" }}>
              Available Rooms
            </h2>
            <Link to="/booking/view" className="rounded-full border px-7 py-2.5 text-sm" style={{ borderColor: "#C9A96E", color: "#8B6914" }}>
              View My Bookings
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {rooms.map((room) => (
              <div key={room.id} className="room-card-reveal">
                <RoomTypeCard room={room} />
              </div>
            ))}
          </div>

          <p className="mt-8 text-sm" style={{ color: "#6b5a45" }}>
            Click any room to view full details and book that exact room type.
          </p>
        </section>

        <HotelFooter />
      </main>
    </div>
  );
}
