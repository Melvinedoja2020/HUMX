import { useEffect, useRef, useState } from "react";

// Load Google Fonts
const fontLink = document.createElement("link");
fontLink.href = "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600&family=Jost:wght@300;400;500&display=swap";
fontLink.rel = "stylesheet";
if (!document.head.querySelector('[href*="Cormorant"]')) document.head.appendChild(fontLink);

// Load GSAP
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

// ── Icons (SVG inline) ─────────────────────────────────────────────────────────
const BedIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke={GOLD} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 18V10a2 2 0 0 1 2-2h18a2 2 0 0 1 2 2v8"/>
    <path d="M3 18h22v3H3z"/>
    <path d="M7 8v4h6V8"/>
  </svg>
);
const MoonIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke={GOLD} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
  </svg>
);
const ForkIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke={GOLD} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 3v11m0 0a3 3 0 0 0 6 0V3M12 25V14"/>
    <path d="M19 3v22"/>
  </svg>
);
const PotIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke={GOLD} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 10h16v10a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V10z"/>
    <path d="M10 10V8a2 2 0 0 1 4 0v2"/>
    <path d="M3 10h4M21 10h4"/>
    <path d="M10 5.5c0-.5.5-1 1-1h2c.5 0 1 .5 1 1"/>
  </svg>
);
const BathIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke={GOLD} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 14h20v2a8 8 0 0 1-16 0v-2z"/>
    <path d="M7 14V7a2 2 0 0 1 4 0v1"/>
    <path d="M6 22l-1 3M22 22l1 3"/>
  </svg>
);
const TvIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke={GOLD} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="6" width="22" height="15" rx="2"/>
    <path d="M8 25h12M14 21v4"/>
    <path d="M7 10l3 2.5L7 15"/>
  </svg>
);

const amenities = [
  { icon: <MoonIcon />, title: "Premium Linens", desc: "Enjoy restful nights on a plush king-sized bed adorned with high-thread-count sheets and luxurious pillows." },
  { icon: <BedIcon />, title: "Spacious Living Area", desc: "Relax in a generously sized living space with designer furnishings and elegant decor." },
  { icon: <ForkIcon />, title: "Private Dining Room", desc: "Host intimate dinners in a secluded dining area, complete with a comfortable seating." },
  { icon: <PotIcon />, title: "Fully Equipped Kitchenette", desc: "Prepare snacks and meals in a kitchenette fitted with modern appliances." },
  { icon: <BathIcon />, title: "Luxurious Marble Bathroom", desc: "Pamper yourself in a lavish bathroom featuring a Jacuzzi tub, a rain shower, and premium toiletries." },
  { icon: <TvIcon />, title: "High-Speed Wi-Fi and Smart TV", desc: "Stay connected and entertained with complimentary high-speed internet and a smart television." },
];

const rooms = [
  {
    name: "Royal Penthouse",
    beds: "3 King Beds",
    guests: "6 Person",
    img: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=900&q=80",
    desc: "A crown jewel of luxury, the Royal Penthouse offers sweeping panoramic views and bespoke furnishings.",
  },
  {
    name: "Presidential Suite",
    beds: "2 King Beds",
    guests: "4 Person",
    img: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=900&q=80",
    desc: "Experience unparalleled luxury in our Presidential Suite, designed for the discerning traveler.",
  },
];

export default function HotelBeachHome() {
  const heroRef = useRef(null);
  const navRef = useRef(null);
  const titleRef = useRef(null);
  const dividerRef = useRef(null);
  const subRef = useRef(null);
  const btnRef = useRef(null);
  const circleRef = useRef(null);
  const [hoveredRoom, setHoveredRoom] = useState(null);

  useEffect(() => {
    loadGSAP().then((gsap) => {
      // Hero entrance
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.fromTo(navRef.current, { y: -40, opacity: 0 }, { y: 0, opacity: 1, duration: 1 })
        .fromTo(".hero-word", { y: 70, opacity: 0 }, { y: 0, opacity: 1, duration: 1.1, stagger: 0.1 }, "-=0.4")
        .fromTo(dividerRef.current, { scaleX: 0 }, { scaleX: 1, duration: 0.8, ease: "power2.inOut", transformOrigin: "left" }, "-=0.3")
        .fromTo(subRef.current, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, "-=0.4")
        .fromTo(btnRef.current, { x: 30, opacity: 0 }, { x: 0, opacity: 1, duration: 0.7 }, "-=0.6")
        .fromTo(circleRef.current, { scale: 0.5, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.9, ease: "back.out(1.4)" }, "-=0.5");

      gsap.to(circleRef.current, { y: -10, duration: 2.5, ease: "sine.inOut", yoyo: true, repeat: -1, delay: 2 });

      // Scroll reveals
      gsap.utils.toArray(".reveal-up").forEach((el) => {
        gsap.fromTo(el, { y: 50, opacity: 0 }, {
          y: 0, opacity: 1, duration: 0.9, ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 85%" }
        });
      });

      gsap.utils.toArray(".reveal-left").forEach((el) => {
        gsap.fromTo(el, { x: -50, opacity: 0 }, {
          x: 0, opacity: 1, duration: 0.9, ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 80%" }
        });
      });

      gsap.utils.toArray(".reveal-right").forEach((el) => {
        gsap.fromTo(el, { x: 50, opacity: 0 }, {
          x: 0, opacity: 1, duration: 0.9, ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 80%" }
        });
      });

      gsap.utils.toArray(".amenity-card").forEach((el, i) => {
        gsap.fromTo(el, { y: 40, opacity: 0 }, {
          y: 0, opacity: 1, duration: 0.7, ease: "power3.out", delay: i * 0.1,
          scrollTrigger: { trigger: el, start: "top 88%" }
        });
      });
    });
  }, []);

  return (
    <div style={{ fontFamily: "'Jost', sans-serif", margin: 0, padding: 0 }}>

      {/* ══════════════════════════════════════════════════════
          SECTION 1: HERO
      ══════════════════════════════════════════════════════ */}
      <section ref={heroRef} className="relative w-full overflow-hidden" style={{ height: "100vh" }}>
        {/* BG Image — replace src with your own */}
        <img
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920&q=80"
          alt="Beach"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-black/60" />

        {/* NAV */}
        <nav ref={navRef} className="absolute top-0 left-0 right-0 z-30 flex items-center justify-between px-12 py-7">
          <div className="text-white text-xl tracking-wide" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            <span className="font-light">Hotel</span><span className="font-semibold">Beach.</span>
          </div>
          <div className="flex items-center gap-10">
            {["Home", "Our Hotel", "Rooms", "Contact"].map((l) => (
              <a key={l} href="#" className="text-white/90 text-sm hover:text-white transition-colors" style={{ fontWeight: 400 }}>{l}</a>
            ))}
            <button className="flex flex-col gap-[5px] group">
              <span className="block w-6 h-px bg-white transition-all group-hover:w-8" />
              <span className="block w-6 h-px bg-white transition-all group-hover:w-4" />
            </button>
          </div>
        </nav>

        {/* TITLE */}
        <div ref={titleRef} className="absolute z-20 left-12 bottom-44" style={{ maxWidth: 520 }}>
          <h1 className="text-white font-light leading-tight" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(44px, 5.5vw, 68px)", letterSpacing: "-0.01em" }}>
            {[["Your", "Gateway", "to"], ["Unforgettable"], ["Memories"]].map((line, li) => (
              <div key={li} className="overflow-hidden">
                <div className="flex gap-[0.3em]">
                  {line.map((w, wi) => <span key={wi} className="hero-word inline-block">{w}</span>)}
                </div>
              </div>
            ))}
          </h1>
        </div>

        {/* DIVIDER */}
        <div ref={dividerRef} className="absolute z-20 left-12 right-12 h-px bg-white/40" style={{ bottom: 118 }} />

        {/* BOTTOM ROW */}
        <div className="absolute z-20 left-12 right-12 flex items-end justify-between" style={{ bottom: 36 }}>
          <p ref={subRef} className="text-white/85 text-sm leading-relaxed" style={{ fontWeight: 300, maxWidth: 340 }}>
            Experience exquisite accommodations, world-class amenities, and<br />personalized service tailored to exceed your expectations.
          </p>
          <button ref={btnRef} className="flex items-center gap-4 bg-white rounded-full pl-7 pr-3 py-3 text-sm text-neutral-800 hover:bg-neutral-100 transition-colors group">
            View Rooms
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-neutral-900 text-white group-hover:bg-neutral-700 transition-colors">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 12L12 2M12 2H4M12 2V10" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </span>
          </button>
        </div>

        {/* BOOK CIRCLE */}
        <button ref={circleRef} className="absolute z-20 flex items-center justify-center rounded-full cursor-pointer hover:scale-105 transition-transform duration-300"
          style={{ width: 148, height: 148, bottom: 90, right: 80, background: "rgba(210,195,155,0.92)", fontFamily: "'Cormorant Garamond', serif", fontSize: 17, fontWeight: 500, color: "#2a2015", lineHeight: 1.3, boxShadow: "0 8px 40px rgba(0,0,0,0.25)", border: "none" }}>
          Book Your<br />Stay
        </button>
      </section>

      {/* ══════════════════════════════════════════════════════
          SECTION 2: OUR LUXURY ROOMS
      ══════════════════════════════════════════════════════ */}
      <section className="bg-white py-16 px-12">
        {/* Header row */}
        <div className="reveal-up flex items-start justify-between mb-10">
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 44, fontWeight: 400, color: "#1a1208", lineHeight: 1.1 }}>
            Our Luxury Rooms
          </h2>
          <button className="mt-3 px-6 py-2.5 rounded-full border text-sm text-neutral-700 hover:bg-neutral-50 transition-colors" style={{ borderColor: "#C9A96E", color: "#8B6914" }}>
            View All Rooms
          </button>
        </div>

        {/* Room cards grid */}
        <div className="grid grid-cols-2 gap-4">
          {rooms.map((room, i) => (
            <div
              key={i}
              className="relative overflow-hidden cursor-pointer"
              style={{ borderRadius: 4, height: 560 }}
              onMouseEnter={() => setHoveredRoom(i)}
              onMouseLeave={() => setHoveredRoom(null)}
            >
              <img
                src={room.img}
                alt={room.name}
                className="w-full h-full object-cover transition-transform duration-700"
                style={{ transform: hoveredRoom === i ? "scale(1.04)" : "scale(1)" }}
              />
              {/* Bottom overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent p-6">
                <div className="flex items-end justify-between">
                  <div>
                    <p className="text-white text-lg mb-1" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400 }}>{room.name}</p>
                    {hoveredRoom === i && (
                      <p className="text-white/80 text-xs leading-relaxed" style={{ maxWidth: 260, fontWeight: 300 }}>{room.desc}</p>
                    )}
                  </div>
                  <div className="flex items-center gap-5 text-white/90 text-xs" style={{ fontWeight: 300 }}>
                    <span className="flex items-center gap-1.5">
                      <svg width="14" height="14" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.3"><path d="M3 18V10a2 2 0 0 1 2-2h18a2 2 0 0 1 2 2v8"/><path d="M3 18h22v3H3z"/><path d="M7 8v4h6V8"/></svg>
                      {room.beds}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <svg width="14" height="14" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.3"><circle cx="14" cy="8" r="4"/><path d="M6 24c0-4.4 3.6-8 8-8s8 3.6 8 8"/></svg>
                      {room.guests}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          SECTION 3: SPECIAL ACTIVITIES
      ══════════════════════════════════════════════════════ */}
      <section style={{ background: CREAM }} className="py-20 px-12 flex items-center gap-0 overflow-hidden">
        {/* Left text */}
        <div className="reveal-left flex-shrink-0" style={{ width: "42%" }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 44, fontWeight: 400, color: "#2a1f10", lineHeight: 1.15, marginBottom: 24 }}>
            Special Activities<br />in our Hotel
          </h2>
          <p className="text-sm leading-relaxed mb-10" style={{ color: "#5a4a35", fontWeight: 300, maxWidth: 380 }}>
            Discover a realm where opulence meets tranquility, where every moment is a symphony of relaxation and refinement. Our sanctuary of luxury and comfort awaits your arrival.
          </p>
          <button className="px-8 py-3 rounded-full border text-sm hover:bg-white/60 transition-colors" style={{ borderColor: "#C9A96E", color: "#6b4f1a" }}>
            Learn More
          </button>
        </div>

        {/* Right collage */}
        <div className="reveal-right flex-1 relative" style={{ height: 520 }}>
          {/* Back image — aerial divers */}
          <div className="absolute right-0 top-0 bottom-0" style={{ width: "72%", borderRadius: 4, overflow: "hidden" }}>
            <img
              src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80"
              alt="Diving"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Front image — overwater bungalow */}
          <div className="absolute" style={{ width: "50%", top: 40, left: "8%", bottom: 40, borderRadius: 4, overflow: "hidden", boxShadow: "0 20px 60px rgba(0,0,0,0.25)", zIndex: 2 }}>
            <img
              src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=700&q=80"
              alt="Overwater bungalow"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          SECTION 4: ROOM AMENITIES
      ══════════════════════════════════════════════════════ */}
      <section style={{ background: CREAM }} className="py-20 px-16">
        <h2 className="reveal-up text-center mb-16" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 48, fontWeight: 400, color: "#2a1f10" }}>
          Room Amenities
        </h2>
        <div className="grid grid-cols-3 gap-4">
          {amenities.map((a, i) => (
            <div
              key={i}
              className="amenity-card bg-white/60 flex flex-col items-center text-center px-10 py-12"
              style={{ borderRadius: 4 }}
            >
              <div className="mb-6">{a.icon}</div>
              <h3 className="mb-4 text-base" style={{ color: "#2a1f10", fontWeight: 400, fontFamily: "'Cormorant Garamond', serif", fontSize: 20 }}>
                {a.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "#6b5a45", fontWeight: 300, maxWidth: 280 }}>
                {a.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          SECTION 5: FOOTER / CONTACT
      ══════════════════════════════════════════════════════ */}
      <footer>
        {/* Footer hero band */}
        <div className="relative" style={{ height: 220, overflow: "hidden" }}>
          <img
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920&q=60"
            alt="Beach footer"
            className="w-full h-full object-cover object-top"
            style={{ filter: "brightness(0.55)" }}
          />
          <div className="absolute inset-0 flex items-center px-16">
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(48px, 7vw, 96px)", fontWeight: 400, color: GOLD, letterSpacing: "-0.02em" }}>
              <span style={{ fontWeight: 300 }}>Hotel</span>Beach.
            </h2>
          </div>
          {/* Book Your Stay circle */}
          <div className="absolute flex items-center justify-center rounded-full cursor-pointer hover:scale-105 transition-transform"
            style={{ width: 130, height: 130, top: "50%", right: 80, transform: "translateY(-50%)", background: "rgba(210,195,155,0.92)", fontFamily: "'Cormorant Garamond', serif", fontSize: 16, fontWeight: 500, color: "#2a2015", lineHeight: 1.3, textAlign: "center" }}>
            Book Your<br />Stay
          </div>
        </div>

        {/* Footer links/info */}
        <div className="grid grid-cols-2" style={{ background: CREAM }}>
          {/* Left — pages */}
          <div className="px-16 py-14 border-r border-stone-200">
            <div className="grid grid-cols-2 gap-8">
              <div>
                <p className="text-xs mb-5 tracking-wider uppercase" style={{ color: "#a89070", fontWeight: 400 }}>Pages</p>
                {["Home", "Rooms", "Services", "Contact"].map((l) => (
                  <a key={l} href="#" className="block mb-3 text-sm hover:underline" style={{ color: "#3a2a18", fontWeight: 300 }}>{l}</a>
                ))}
              </div>
              <div>
                <p className="text-xs mb-5 tracking-wider uppercase" style={{ color: "#a89070", fontWeight: 400 }}>Pages</p>
                {["Our Hotel", "Events", "Restaurant"].map((l) => (
                  <a key={l} href="#" className="block mb-3 text-sm hover:underline" style={{ color: "#3a2a18", fontWeight: 300 }}>{l}</a>
                ))}
              </div>
            </div>
          </div>

          {/* Right — contact */}
          <div className="bg-white px-16 py-14">
            <div className="grid grid-cols-2 gap-10">
              <div>
                <p className="text-xs mb-3 tracking-wider uppercase" style={{ color: "#a89070", fontWeight: 400 }}>Email</p>
                <p className="text-sm mb-8" style={{ color: "#2a1f10", fontWeight: 400 }}>info@hotelbeach.com</p>
                <p className="text-xs mb-3 tracking-wider uppercase" style={{ color: "#a89070", fontWeight: 400 }}>Phone</p>
                <p className="text-sm" style={{ color: "#2a1f10", fontWeight: 400 }}>(603) 555-0123</p>
              </div>
              <div>
                <p className="text-xs mb-3 tracking-wider uppercase" style={{ color: "#a89070", fontWeight: 400 }}>Address</p>
                <p className="text-sm leading-relaxed" style={{ color: "#2a1f10", fontWeight: 400 }}>
                  3891 Ranchview Dr.<br />Richardson, California<br />62639
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer bottom bar */}
        <div className="bg-white flex items-center justify-between px-16 py-5 border-t border-stone-100">
          <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 18, fontWeight: 400, color: "#2a1f10" }}>
            <span style={{ fontWeight: 300 }}>Hotel</span>Beach.
          </p>
          <div className="flex items-center gap-8 text-sm" style={{ color: "#5a4a35", fontWeight: 300 }}>
            {["X", "Instagram", "Facebook"].map((s) => (
              <a key={s} href="#" className="hover:underline">{s}</a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}