import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import HotelNavbar from "../components/site/HotelNavbar";
import HotelFooter from "../components/site/HotelFooter";

const fontLink = document.createElement("link");
fontLink.href = "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600&family=Jost:wght@300;400;500&display=swap";
fontLink.rel = "stylesheet";
if (!document.head.querySelector('[href*="Cormorant"]')) document.head.appendChild(fontLink);

function loadGSAP() {
  return new Promise((resolve) => {
    if (window.gsap) return resolve(window.gsap);
    const s = document.createElement("script");
    s.src = "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js";
    s.onload = () => {
      const s2 = document.createElement("script");
      s2.src = "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js";
      s2.onload = () => { window.gsap.registerPlugin(window.ScrollTrigger); resolve(window.gsap); };
      document.head.appendChild(s2);
    };
    document.head.appendChild(s);
  });
}

const GOLD = "#C9A96E";
const CREAM = "#F5EFE6";

const BedIcon = ({ size = 22, color = GOLD }) => (
  <svg width={size} height={size} viewBox="0 0 28 28" fill="none" stroke={color} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 18V10a2 2 0 0 1 2-2h18a2 2 0 0 1 2 2v8"/><path d="M3 18h22v3H3z"/><path d="M7 8v4h6V8"/>
  </svg>
);
const PersonIcon = ({ size = 22, color = GOLD }) => (
  <svg width={size} height={size} viewBox="0 0 28 28" fill="none" stroke={color} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="14" cy="8" r="4"/><path d="M6 24c0-4.4 3.6-8 8-8s8 3.6 8 8"/>
  </svg>
);
const MoonIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke={GOLD} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
  </svg>
);
const ForkIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke={GOLD} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 3v11m0 0a3 3 0 0 0 6 0V3M12 25V14"/><path d="M19 3v22"/>
  </svg>
);
const PotIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke={GOLD} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 10h16v10a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V10z"/><path d="M10 10V8a2 2 0 0 1 4 0v2"/><path d="M3 10h4M21 10h4"/>
  </svg>
);
const BathIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke={GOLD} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 14h20v2a8 8 0 0 1-16 0v-2"/><path d="M7 14V7a2 2 0 0 1 4 0v1"/><path d="M6 22l-1 3M22 22l1 3"/>
  </svg>
);
const TvIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke={GOLD} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="6" width="22" height="15" rx="2"/><path d="M8 25h12M14 21v4"/>
  </svg>
);

const amenities = [
  { icon: <MoonIcon />, title: "Premium Linens", desc: "Enjoy restful nights on a plush king-sized bed adorned with high-thread-count sheets and luxurious pillows." },
  { icon: <BedIcon size={28} color={GOLD}/>, title: "Spacious Living Area", desc: "Relax in a generously sized living space with designer furnishings and elegant decor." },
  { icon: <ForkIcon />, title: "Private Dining Room", desc: "Host intimate dinners in a secluded dining area, complete with a comfortable seating." },
  { icon: <PotIcon />, title: "Fully Equipped Kitchenette", desc: "Prepare snacks and meals in a kitchenette fitted with modern appliances." },
  { icon: <BathIcon />, title: "Luxurious Marble Bathroom", desc: "Pamper yourself in a lavish bathroom featuring a Jacuzzi tub, a rain shower, and premium toiletries." },
  { icon: <TvIcon />, title: "High-Speed Wi-Fi and Smart TV", desc: "Stay connected and entertained with complimentary high-speed internet and a smart television." },
];

const roomsData = [
  {
    id: "royal-penthouse",
    name: "Royal Penthouse",
    beds: "3 King Beds",
    guests: "6 Person",
    price: 1899,
    sleeping: "3 King Beds",
    numGuests: "6 Person",
    description: "A crown jewel of luxury, the Royal Penthouse offers sweeping panoramic views, bespoke furnishings, and unmatched service. A grand living area, private terrace, and exclusive amenities define this pinnacle of hospitality.",
    bannerImg: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1920&q=80",
    detailImg: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=900&q=80",
    thumbImg: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=900&q=80",
  },
  {
    id: "presidential-suite",
    name: "Presidential Suite",
    beds: "2 King Beds",
    guests: "4 Person",
    price: 1199,
    sleeping: "2 King Beds",
    numGuests: "4 Person",
    description: "Experience unparalleled luxury in our Presidential Suite, designed for the discerning traveler. This expansive suite features a grand living area, a private dining room, and panoramic views of the city skyline. Every detail is curated to offer you the ultimate in comfort and sophistication.",
    bannerImg: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=1920&q=80",
    detailImg: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=900&q=80",
    thumbImg: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=900&q=80",
  },
];

export default function HotelBeachRooms() {
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [hoveredRoom, setHoveredRoom] = useState(null);
  const bannerRef = useRef(null);

  useEffect(() => {
    loadGSAP().then((gsap) => {
      gsap.fromTo(
        ".rooms-banner-title",
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.1, ease: "power3.out", delay: 0.3 },
      );
      gsap.utils.toArray(".reveal-up").forEach((el) => {
        gsap.fromTo(el, { y: 50, opacity: 0 }, {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 85%" },
        });
      });
      gsap.utils.toArray(".amenity-card").forEach((el, i) => {
        gsap.fromTo(el, { y: 40, opacity: 0 }, {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: "power3.out",
          delay: i * 0.08,
          scrollTrigger: { trigger: el, start: "top 88%" },
        });
      });
    });
  }, [selectedRoom]);

  const room = selectedRoom !== null ? roomsData[selectedRoom] : null;

  return (
    <div style={{ fontFamily: "'Jost', sans-serif" }}>
      <section ref={bannerRef} className="relative w-full overflow-hidden" style={{ height: 420 }}>
        <img
          src="https://images.unsplash.com/photo-1540518614846-7eded433c457?w=1920&q=80"
          alt="Rooms banner"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/55" />
        <HotelNavbar tone="light" />
        <div className="absolute bottom-10 left-12">
          <h1 className="rooms-banner-title text-white font-light" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(44px, 5vw, 64px)", fontWeight: 300 }}>
            Rooms
          </h1>
        </div>
      </section>

      <section className="bg-white py-16 px-12">
        <div className="grid grid-cols-2 gap-5">
          {roomsData.map((r, i) => (
            <div
              key={r.id}
              className="reveal-up relative overflow-hidden cursor-pointer group"
              style={{ borderRadius: 4, height: 580 }}
              onMouseEnter={() => setHoveredRoom(i)}
              onMouseLeave={() => setHoveredRoom(null)}
              onClick={() => setSelectedRoom(i)}
            >
              <img
                src={r.thumbImg}
                alt={r.name}
                className="w-full h-full object-cover transition-transform duration-700"
                style={{ transform: hoveredRoom === i ? "scale(1.04)" : "scale(1)" }}
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/65 via-black/25 to-transparent p-6">
                <div className="flex items-end justify-between">
                  <div>
                    <p className="text-white text-lg mb-1" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400 }}>{r.name}</p>
                    {hoveredRoom === i && (
                      <p className="text-white/80 text-xs leading-relaxed" style={{ maxWidth: 280, fontWeight: 300 }}>
                        {r.description.split(".")[0]}.
                      </p>
                    )}
                  </div>
                  <div className="flex items-center gap-5 text-white/90 text-xs" style={{ fontWeight: 300 }}>
                    <span className="flex items-center gap-1.5"><BedIcon size={14} color="white" />{r.beds}</span>
                    <span className="flex items-center gap-1.5"><PersonIcon size={14} color="white" />{r.guests}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {selectedRoom !== null && (
          <p className="text-center mt-6 text-xs" style={{ color: "#a89070" }}>
            Scroll down to view details for <strong>{room.name}</strong>
          </p>
        )}
      </section>

      {(() => {
        const r = room || roomsData[1];
        return (
          <>
            <section className="relative w-full overflow-hidden" style={{ height: 420 }}>
              <img src={r.bannerImg} alt={r.name} className="w-full h-full object-cover object-center" style={{ filter: "brightness(0.5)" }} />
              <div className="absolute bottom-10 left-12">
                <h2 className="text-white font-light" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(36px, 4vw, 54px)", fontWeight: 300 }}>
                  {r.name}
                </h2>
              </div>
            </section>

            <section className="bg-white flex" style={{ minHeight: 480 }}>
              <div className="reveal-up flex flex-col justify-center px-16 py-16" style={{ width: "50%", borderRight: "1px solid #f0ebe2" }}>
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 44, fontWeight: 400, color: "#1a1208", marginBottom: 32 }}>Room Details</h3>

                <div className="flex gap-12 mb-8">
                  <div>
                    <div className="mb-2"><BedIcon size={24} color={GOLD} /></div>
                    <p className="text-xs mb-1" style={{ color: "#a89070", fontWeight: 400 }}>Sleeping Arrangements</p>
                    <p className="text-base font-medium" style={{ color: "#1a1208" }}>{r.sleeping}</p>
                  </div>
                  <div>
                    <div className="mb-2"><PersonIcon size={24} color={GOLD} /></div>
                    <p className="text-xs mb-1" style={{ color: "#a89070", fontWeight: 400 }}>Number of Guests</p>
                    <p className="text-base font-medium" style={{ color: "#1a1208" }}>{r.numGuests}</p>
                  </div>
                </div>

                <div className="mb-8" style={{ borderTop: "1px solid #e8e0d4" }} />

                <p className="text-sm leading-relaxed mb-10" style={{ color: "#4a3a28", fontWeight: 300, maxWidth: 420 }}>{r.description}</p>

                <div className="mb-2">
                  <p className="text-xs mb-1" style={{ color: "#a89070", fontWeight: 400 }}>Starting at</p>
                  <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 44, fontWeight: 400, color: "#1a1208", lineHeight: 1 }}>
                    ${r.price.toLocaleString()}
                  </p>
                  <p className="text-sm mt-1" style={{ color: "#a89070", fontWeight: 300 }}>/ night</p>
                </div>

                <Link
                  to={`/booking?room=${r.id}`}
                  className="mt-8 w-full py-4 rounded-full text-sm transition-all hover:opacity-90 text-center"
                  style={{ background: GOLD, color: "#2a1f10", fontWeight: 400, letterSpacing: "0.04em", border: "none", maxWidth: 380 }}
                >
                  Book a Stay
                </Link>
              </div>

              <div className="reveal-up" style={{ width: "50%", overflow: "hidden" }}>
                <img src={r.detailImg} alt={r.name} className="w-full h-full object-cover" style={{ minHeight: 480 }} />
              </div>
            </section>
          </>
        );
      })()}

      <section style={{ background: CREAM }} className="py-20 px-16">
        <h2 className="reveal-up text-center mb-16" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 48, fontWeight: 400, color: "#2a1f10" }}>
          Room Amenities
        </h2>
        <div className="grid grid-cols-3 gap-4">
          {amenities.map((a) => (
            <div key={a.title} className="amenity-card bg-white/60 flex flex-col items-center text-center px-10 py-12" style={{ borderRadius: 4 }}>
              <div className="mb-6">{a.icon}</div>
              <h3 className="mb-4" style={{ color: "#2a1f10", fontWeight: 400, fontFamily: "'Cormorant Garamond', serif", fontSize: 20 }}>{a.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: "#6b5a45", fontWeight: 300, maxWidth: 280 }}>{a.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <HotelFooter />
    </div>
  );
}
