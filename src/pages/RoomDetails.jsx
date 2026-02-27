import { useEffect } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { rooms } from "../data/rooms";

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
  const room = rooms.find((item) => item.id === roomId);

  useEffect(() => {
    loadGSAP().then((gsap) => {
      gsap.fromTo(
        ".detail-title",
        { y: 34, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9, ease: "power3.out" },
      );

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

  return (
    <div style={{ fontFamily: "'Jost', sans-serif" }}>
      <section className="relative w-full overflow-hidden" style={{ height: 420 }}>
        <img src={room.image} alt={room.name} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/60" />
        <div className="absolute bottom-10 left-12">
          <p className="text-xs tracking-wider uppercase text-white/80">Room Collection</p>
          <h1
            className="detail-title text-white"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(42px,5vw,62px)", fontWeight: 300 }}
          >
            {room.name}
          </h1>
        </div>
      </section>

      <section className="bg-white" style={{ minHeight: 480 }}>
        <div className="grid lg:grid-cols-2">
          <div className="detail-reveal px-12 py-16 lg:px-16" style={{ borderRight: "1px solid #f0ebe2" }}>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 44, fontWeight: 400, color: "#1a1208" }}>
              Room Details
            </h2>

            <div className="mt-8 flex flex-wrap gap-12">
              <div>
                <p className="text-xs uppercase tracking-wide" style={{ color: "#a89070" }}>Size</p>
                <p className="mt-1 text-base" style={{ color: "#1a1208" }}>{room.size}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wide" style={{ color: "#a89070" }}>Capacity</p>
                <p className="mt-1 text-base" style={{ color: "#1a1208" }}>Up to {room.capacity} guests</p>
              </div>
            </div>

            <div className="my-8" style={{ borderTop: "1px solid #e8e0d4" }} />

            <p className="max-w-xl text-sm leading-relaxed" style={{ color: "#4a3a28", fontWeight: 300 }}>
              {room.description}
            </p>

            <p className="mt-8 text-xs uppercase tracking-wide" style={{ color: "#a89070" }}>Starting at</p>
            <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 44, fontWeight: 400, color: "#1a1208", lineHeight: 1 }}>
              ${room.price}
            </p>
            <p className="text-sm" style={{ color: "#a89070", fontWeight: 300 }}>/ night</p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to={`/booking?room=${room.id}`}
                className="rounded-full px-8 py-3 text-sm transition-all hover:opacity-90"
                style={{ background: GOLD, color: "#2a1f10", letterSpacing: "0.04em" }}
              >
                Book a Stay
              </Link>
              <Link
                to="/rooms"
                className="rounded-full border px-8 py-3 text-sm transition-colors hover:bg-neutral-50"
                style={{ borderColor: GOLD, color: "#8B6914" }}
              >
                Back to Rooms
              </Link>
            </div>
          </div>

          <div className="detail-reveal h-[420px] lg:h-auto">
            <img src={room.image} alt={room.name} className="h-full w-full object-cover" />
          </div>
        </div>
      </section>

      <section style={{ background: CREAM }} className="px-12 py-16">
        <div className="detail-reveal rounded-[4px] bg-white/70 px-8 py-10">
          <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 34, fontWeight: 400, color: "#2a1f10" }}>
            Quiet, private, and naturally lit.
          </h3>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed" style={{ color: "#6b5a45", fontWeight: 300 }}>
            Every room is styled with warm material textures, refined surfaces, and subtle ambient lighting for a restful stay.
          </p>
        </div>
      </section>
    </div>
  );
}
