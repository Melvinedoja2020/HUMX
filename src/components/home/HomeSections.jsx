import { Link } from "react-router-dom";

const GOLD = "#C9A96E";
const CREAM = "#F5EFE6";

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

export function HomeLuxuryRooms({ hoveredRoom, onHoverChange }) {
  return (
    <section id="rooms" className="bg-white py-16 px-12">
      <div className="reveal-up flex items-start justify-between mb-10">
        <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 44, fontWeight: 400, color: "#1a1208", lineHeight: 1.1 }}>
          Our Luxury Rooms
        </h2>
        <Link to="/rooms" className="mt-3 px-6 py-2.5 rounded-full border text-sm text-neutral-700 hover:bg-neutral-50 transition-colors" style={{ borderColor: "#C9A96E", color: "#8B6914" }}>
          View All Rooms
        </Link>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {rooms.map((room, index) => (
          <Link
            key={room.name}
            to="/rooms"
            className="relative overflow-hidden cursor-pointer block"
            style={{ borderRadius: 4, height: 560 }}
            onMouseEnter={() => onHoverChange(index)}
            onMouseLeave={() => onHoverChange(null)}
          >
            <img
              src={room.img}
              alt={room.name}
              className="w-full h-full object-cover transition-transform duration-700"
              style={{ transform: hoveredRoom === index ? "scale(1.04)" : "scale(1)" }}
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent p-6">
              <div className="flex items-end justify-between">
                <div>
                  <p className="text-white text-lg mb-1" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400 }}>{room.name}</p>
                  {hoveredRoom === index && (
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
          </Link>
        ))}
      </div>
    </section>
  );
}

export function HomeActivities() {
  return (
    <section id="activities" style={{ background: CREAM }} className="py-20 px-12 flex items-center gap-0 overflow-hidden">
      <div className="reveal-left flex-shrink-0" style={{ width: "42%" }}>
        <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 44, fontWeight: 400, color: "#2a1f10", lineHeight: 1.15, marginBottom: 24 }}>
          Special Activities
          <br />
          in our Hotel
        </h2>
        <p className="text-sm leading-relaxed mb-10" style={{ color: "#5a4a35", fontWeight: 300, maxWidth: 380 }}>
          Discover a realm where opulence meets tranquility, where every moment is a symphony of relaxation and refinement. Our sanctuary of luxury and comfort awaits your arrival.
        </p>
        <button className="px-8 py-3 rounded-full border text-sm hover:bg-white/60 transition-colors" style={{ borderColor: "#C9A96E", color: "#6b4f1a" }}>
          Learn More
        </button>
      </div>

      <div className="reveal-right flex-1 relative" style={{ height: 520 }}>
        <div className="absolute right-0 top-0 bottom-0" style={{ width: "72%", borderRadius: 4, overflow: "hidden" }}>
          <img src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80" alt="Diving" className="w-full h-full object-cover" />
        </div>
        <div className="absolute" style={{ width: "50%", top: 40, left: "8%", bottom: 40, borderRadius: 4, overflow: "hidden", boxShadow: "0 20px 60px rgba(0,0,0,0.25)", zIndex: 2 }}>
          <img src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=700&q=80" alt="Overwater bungalow" className="w-full h-full object-cover" />
        </div>
      </div>
    </section>
  );
}

export function HomeAmenities() {
  return (
    <section style={{ background: CREAM }} className="py-20 px-16">
      <h2 className="reveal-up text-center mb-16" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 48, fontWeight: 400, color: "#2a1f10" }}>
        Room Amenities
      </h2>
      <div className="grid grid-cols-3 gap-4">
        {amenities.map((amenity) => (
          <div key={amenity.title} className="amenity-card bg-white/60 flex flex-col items-center text-center px-10 py-12" style={{ borderRadius: 4 }}>
            <div className="mb-6">{amenity.icon}</div>
            <h3 className="mb-4 text-base" style={{ color: "#2a1f10", fontWeight: 400, fontFamily: "'Cormorant Garamond', serif", fontSize: 20 }}>
              {amenity.title}
            </h3>
            <p className="text-sm leading-relaxed" style={{ color: "#6b5a45", fontWeight: 300, maxWidth: 280 }}>
              {amenity.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function HomeGuestStories() {
  const stories = [
    "A seamless, calm stay from check-in to check-out.",
    "The suite design and service were exceptional.",
    "Beautiful atmosphere with refined attention to detail.",
  ];

  return (
    <section className="bg-white px-12 py-20">
      <div className="reveal-up mb-10 flex items-end justify-between">
        <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 44, fontWeight: 400, color: "#1a1208", lineHeight: 1.1 }}>
          Guest Stories
        </h2>
        <Link to="/booking" className="px-8 py-3 rounded-full border text-sm hover:bg-neutral-50 transition-colors" style={{ borderColor: "#C9A96E", color: "#8B6914" }}>
          Reserve Now
        </Link>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {stories.map((story, index) => (
          <article key={story} className="reveal-up bg-[#F5EFE6] px-8 py-9" style={{ borderRadius: 4 }}>
            <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 30, lineHeight: 1, color: "#C9A96E" }}>“</p>
            <p className="mt-3 text-sm leading-relaxed" style={{ color: "#4a3a28", fontWeight: 300 }}>{story}</p>
            <p className="mt-6 text-xs uppercase tracking-wider" style={{ color: "#a89070" }}>Guest {index + 1}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
