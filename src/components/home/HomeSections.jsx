import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import RoomTypeCard from "../rooms/RoomTypeCard";
import { rooms } from "../../data/rooms";

const GOLD = "#C9A96E";
const CREAM = "#F5EFE6";

// ── Icons ─────────────────────────────────────────────────────────────────────
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
    <path d="M4 14h20v2a8 8 0 0 1-16 0v-2"/>
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

// ══════════════════════════════════════════════════════════════════════════════
// 1. WELCOME / ABOUT  — first section after hero
//    Two equal images side by side, centered headline + body text above them
// ══════════════════════════════════════════════════════════════════════════════
export function HomeWelcome() {
  return (
    <section className="bg-white px-4 py-14 sm:px-6 lg:px-12 lg:py-20">
      {/* Centred heading + copy */}
      <div className="reveal-up mx-auto mb-10 max-w-5xl text-center md:mb-12">
        <h2
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(38px, 5vw, 48px)",
            fontWeight: 400,
            color: "#1a1208",
            lineHeight: 1.08,
          }}
        >
          Welcome to The World of
          <br />
          Luxury and Comfort
        </h2>
        <p
          className="mx-auto mt-6 max-w-[860px] text-sm leading-relaxed"
          style={{ color: "#5a4a35", fontWeight: 300 }}
        >
          Experience a stay like no other, where indulgence knows no bounds and
          your every desire is our priority. Join us in redefining the art of
          hospitality, and let us pamper you in a world where luxury and comfort
          intertwine seamlessly. Welcome to a journey of elegance, welcome to
          your extraordinary escape.
        </p>
      </div>

      {/* Two equal images side-by-side */}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <div className="reveal-left overflow-hidden rounded-[16px] shadow-[0_20px_55px_rgba(0,0,0,0.16)]">
          <img
            src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1400&q=80"
            alt="Hotel exterior"
            className="h-[300px] w-full object-cover md:h-[420px]"
          />
        </div>
        <div className="reveal-right overflow-hidden rounded-[16px] shadow-[0_20px_55px_rgba(0,0,0,0.16)]">
          <img
            src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1400&q=80"
            alt="Hotel lounge"
            className="h-[300px] w-full object-cover md:h-[420px]"
          />
        </div>
      </div>
    </section>
  );
}

// ══════════════════════════════════════════════════════════════════════════════
// 2. SPECIAL ACTIVITIES
//    Left: headline + body + "Learn More" pill
//    Right: overlapping image collage (back = aerial/ocean, front = bungalow)
// ══════════════════════════════════════════════════════════════════════════════
export function HomeActivities() {
  return (
    <section
      id="activities"
      style={{ background: CREAM }}
      className="overflow-hidden px-4 py-14 sm:px-6 lg:px-12 lg:py-20"
    >
      <div className="grid items-center gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        {/* Left */}
        <div className="reveal-left">
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(36px, 4.8vw, 44px)",
              fontWeight: 400,
              color: "#2a1f10",
              lineHeight: 1.15,
              marginBottom: 20,
            }}
          >
            Special Activities
            <br />
            in our Hotel
          </h2>
          <p
            className="mb-8 max-w-sm text-sm leading-relaxed"
            style={{ color: "#5a4a35", fontWeight: 300 }}
          >
            Discover a realm where opulence meets tranquility, where every
            moment is a symphony of relaxation and refinement. Our sanctuary of
            luxury and comfort awaits your arrival.
          </p>
          <Link
            to="/our-hotel"
            className="inline-block rounded-full border px-8 py-3 text-sm transition-colors hover:bg-white/60"
            style={{ borderColor: GOLD, color: "#6b4f1a" }}
          >
            Learn More
          </Link>
        </div>

        {/* Right — overlapping collage exactly matching screenshot */}
        <div className="reveal-right relative h-[380px] sm:h-[460px] lg:h-[520px]">
          {/* Back image: aerial ocean / divers — fills right ~74% */}
          <div className="absolute right-0 top-0 bottom-0 w-[74%] overflow-hidden rounded-[8px]">
            <img
              src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=900&q=80"
              alt="Ocean diving"
              className="h-full w-full object-cover"
            />
          </div>
          {/* Front image: overwater bungalow — overlaps left, slightly inset top/bottom */}
          <div
            className="absolute z-10 overflow-hidden rounded-[8px] shadow-[0_20px_60px_rgba(0,0,0,0.28)]"
            style={{ width: "54%", top: "5%", bottom: "5%", left: "4%" }}
          >
            <img
              src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=700&q=80"
              alt="Overwater bungalow"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

// ══════════════════════════════════════════════════════════════════════════════
// 3. FACILITIES  — auto-scrolling horizontal strip of cards
// ══════════════════════════════════════════════════════════════════════════════
export function HomeFacilities() {
  const trackRef = useRef(null);

  const facilities = [
    {
      title: "Infinity Pool Deck",
      desc: "Sunset-facing pool with private cabanas and evening service.",
      image: "https://images.unsplash.com/photo-1576675784201-0e142b423952?w=1200&q=80",
    },
    {
      title: "Signature Spa",
      desc: "Thermal rituals and bespoke wellness treatments for deep reset.",
      image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=1200&q=80",
    },
    {
      title: "Private Dining",
      desc: "Chef-led tasting experiences in intimate, curated spaces.",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&q=80",
    },
    {
      title: "Grand Lounge",
      desc: "Elegant social spaces for tea, cocktails, and quiet work.",
      image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=1200&q=80",
    },
    {
      title: "Fitness Studio",
      desc: "Modern equipment and guided sessions with professional trainers.",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&q=80",
    },
  ];

  const loopItems = [...facilities, ...facilities];

  // CSS marquee via inline keyframe injected once
  useEffect(() => {
    if (document.getElementById("marquee-style")) return;
    const style = document.createElement("style");
    style.id = "marquee-style";
    style.textContent = `
      @keyframes marquee {
        0%   { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }
      .facility-track {
        animation: marquee 32s linear infinite;
      }
      .facility-track:hover {
        animation-play-state: paused;
      }
    `;
    document.head.appendChild(style);
  }, []);

  return (
    <section
      style={{ background: CREAM }}
      className="overflow-hidden py-14 lg:py-20"
    >
      <div className="reveal-up mb-8 px-4 text-center sm:px-6 lg:mb-10 lg:px-12">
        <h2
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(36px, 5vw, 46px)",
            fontWeight: 400,
            color: "#2a1f10",
            lineHeight: 1.1,
          }}
        >
          Our Facilities and Services
        </h2>
      </div>

      {/* Marquee wrapper */}
      <div className="overflow-hidden">
        <div ref={trackRef} className="facility-track flex gap-5 px-4 sm:px-6 lg:px-8" style={{ width: "max-content" }}>
          {loopItems.map((item, index) => (
            <article
              key={`${item.title}-${index}`}
              className="relative shrink-0 overflow-hidden rounded-[16px] shadow-[0_14px_36px_rgba(0,0,0,0.16)]"
              style={{ width: 300, height: 350 }}
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent px-5 pb-5 pt-14 text-left">
                <h3
                  className="text-[21px] leading-none text-white"
                  style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 500 }}
                >
                  {item.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-white/85">
                  {item.desc}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

// ══════════════════════════════════════════════════════════════════════════════
// 4. GUEST STORIES  — 3-column quote cards
// ══════════════════════════════════════════════════════════════════════════════
export function HomeGuestStories() {
  const stories = [
    { quote: "A seamless, calm stay from check-in to check-out.", guest: "Guest 1" },
    { quote: "The suite design and service were exceptional.", guest: "Guest 2" },
    { quote: "Beautiful atmosphere with refined attention to detail.", guest: "Guest 3" },
  ];

  return (
    <section className="bg-white px-4 py-14 sm:px-6 lg:px-12 lg:py-20">
      <div className="reveal-up mb-8 flex flex-col items-start justify-between gap-3 sm:mb-10 sm:flex-row sm:items-end">
        <h2
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(36px, 4.8vw, 44px)",
            fontWeight: 400,
            color: "#1a1208",
            lineHeight: 1.1,
          }}
        >
          Guest Stories
        </h2>
        <Link
          to="/rooms"
          className="rounded-full border px-8 py-3 text-sm transition-colors hover:bg-neutral-50"
          style={{ borderColor: GOLD, color: "#8B6914" }}
        >
          Choose Room
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        {stories.map(({ quote, guest }) => (
          <article
            key={guest}
            className="reveal-up rounded-[8px] px-8 py-9"
            style={{ background: CREAM }}
          >
            <p
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 34,
                lineHeight: 1,
                color: GOLD,
              }}
            >
              "
            </p>
            <p
              className="mt-3 text-sm leading-relaxed"
              style={{ color: "#4a3a28", fontWeight: 300 }}
            >
              {quote}
            </p>
            <p
              className="mt-6 text-xs uppercase tracking-wider"
              style={{ color: "#a89070" }}
            >
              {guest}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

// ══════════════════════════════════════════════════════════════════════════════
// 5. ROOM AMENITIES  — cream bg, 3×2 icon cards
// ══════════════════════════════════════════════════════════════════════════════
export function HomeAmenities() {
  return (
    <section style={{ background: CREAM }} className="px-4 py-14 sm:px-6 lg:px-16 lg:py-20">
      <h2
        className="reveal-up mb-12 text-center lg:mb-16"
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "clamp(36px, 5vw, 48px)",
          fontWeight: 400,
          color: "#2a1f10",
        }}
      >
        Room Amenities
      </h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {amenities.map((amenity) => (
          <div
            key={amenity.title}
            className="amenity-card flex flex-col items-center rounded-[4px] bg-white/60 px-8 py-10 text-center sm:px-10 sm:py-12"
          >
            <div className="mb-6">{amenity.icon}</div>
            <h3
              className="mb-4"
              style={{
                color: "#2a1f10",
                fontWeight: 400,
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 20,
              }}
            >
              {amenity.title}
            </h3>
            <p
              className="max-w-[280px] text-sm leading-relaxed"
              style={{ color: "#6b5a45", fontWeight: 300 }}
            >
              {amenity.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

// ══════════════════════════════════════════════════════════════════════════════
// 6. LUXURY ROOMS  — immediately above footer
//    Headline left, "View All Rooms" pill right, 2-col room card grid below
// ══════════════════════════════════════════════════════════════════════════════
export function HomeLuxuryRooms() {
  return (
    <section id="rooms" className="bg-white px-4 py-12 sm:px-6 lg:px-12 lg:py-16">
      {/* Header row */}
      <div className="reveal-up mb-8 flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-end sm:mb-10">
        <h2
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(36px, 4.8vw, 44px)",
            fontWeight: 400,
            color: "#1a1208",
            lineHeight: 1.1,
          }}
        >
          Our Luxury Rooms
        </h2>
        <Link
          to="/rooms"
          className="rounded-full border px-6 py-2.5 text-sm transition-colors hover:bg-neutral-50"
          style={{ borderColor: GOLD, color: "#8B6914" }}
        >
          View All Rooms
        </Link>
      </div>

      {/* Room cards — 2 column grid, full bleed images with bottom overlay */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {rooms.slice(0, 4).map((room) => (
          <RoomTypeCard key={room.id} room={room} />
        ))}
      </div>
    </section>
  );
}