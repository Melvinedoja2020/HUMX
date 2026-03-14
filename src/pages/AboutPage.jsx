import { motion as Motion } from "framer-motion";
import { FiCompass, FiPlay, FiEye } from "react-icons/fi";
import {
  FiWifi,
  FiMonitor,
  FiPhone,
  FiCoffee,
  FiStar,
  FiHome,
  FiMapPin,
  FiUsers,
  FiCheckCircle,
  FiArrowRight,
} from "react-icons/fi";
import {
  MdSquareFoot,
  MdWorkOutline,
  MdLocationCity,
  MdFamilyRestroom,
  MdChildCare,
  MdOutlineTrain,
  MdOutlineLocalAirport,
  MdOutlineDirectionsCar,
  MdOutlineExplore,
} from "react-icons/md";
import { TbAirConditioning, TbLayoutGrid } from "react-icons/tb";
import { LuRefrigerator, LuFlower2 } from "react-icons/lu";
import { PiBuildingApartment, PiCarLight } from "react-icons/pi";
import { fadeUp, stagger } from "../utils/animations";
import { COLORS } from "../constants/theme";
import Img from "../components/ui/Img";
import SectionHeader from "../components/ui/SectionHeader";

const TIMELINE = [
  {
    year: "1923",
    title: "Grand Opening",
    sub: "Founded as exclusive mountain retreat",
  },
  {
    year: "1987",
    title: "Major Renovation",
    sub: "Modern amenities while preserving heritage",
  },
  {
    year: "2019",
    title: "Spa & Wellness",
    sub: "Award-winning wellness center addition",
  },
];

const FEATURES = [
  {
    title: "World-Class Spa",
    desc: "Rejuvenating treatments in our award-winning wellness sanctuary.",
    img: "/hotel1.jpg",
  },
  {
    title: "Gourmet Dining",
    desc: "Michelin-starred cuisine crafted by renowned executive chefs.",
    img: "/hotel2.jpg",
  },
  {
    title: "Prime Location",
    desc: "Nestled in the heart of the city with breathtaking panoramic views.",
    img: "/hotel3.jpg",
  },
];

const STATS = [
  { value: "44", label: "Luxury Suites" },
  { value: "83%", label: "Satisfaction Rate" },
  { value: "6", label: "International Awards" },
  { value: "92", label: "Years of Excellence" },
];

const ROOMS_DATA = [
  {
    name: "Grand Presidential Suite",
    tag: "PRESIDENTIAL",
    price: 649,
    guests: 6,
    size: "180m²",
    floor: "Top Floor",
    ratingLabel: "Excellence",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
    amenities: [
      { icon: "wifi", label: "Premium WIFI" },
      { icon: "tv", label: "Smart TV" },
      { icon: "coffee", label: "Coffee Bar" },
      { icon: "climate", label: "Climate Control" },
    ],
    img: "/hotel1.jpg",
  },
  {
    name: "Executive Business Room",
    price: 329,
    description:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores.",
    features: [
      { icon: "work", label: "Work Space" },
      { icon: "city", label: "City Views" },
    ],
    img: "/hotel2.jpg",
  },
  {
    name: "Garden View Deluxe",
    price: 269,
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque.",
    features: [
      { icon: "garden", label: "Garden View" },
      { icon: "terrace", label: "Private Terrace" },
    ],
    img: "/hotel3.jpg",
  },
  {
    name: "Family Comfort Suite",
    price: 419,
    description:
      "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates.",
    features: [
      { icon: "family", label: "Family Space" },
      { icon: "kids", label: "Kids Area" },
    ],
    img: "/hotel4.jpg",
  },
];

const GRID_ROOMS = [
  {
    name: "Classic Double",
    price: 189,
    img: "/hotel1.jpg",
    icons: [FiWifi, FiMonitor, FiPhone],
  },
  {
    name: "Superior King",
    price: 249,
    img: "/hotel2.jpg",
    icons: [FiWifi, FiCoffee, TbAirConditioning],
  },
  {
    name: "Premium Ocean View",
    price: 359,
    img: "/hotel3.jpg",
    icons: [LuRefrigerator, FiHome, FiPhone],
  },
  {
    name: "Luxury Penthouse",
    price: 1199,
    img: "/hotel4.jpg",
    icons: [FiStar, FiHome, FiMapPin],
  },
];

function AmenityIcon({ icon }) {
  const s = 16;
  const map = {
    wifi: FiWifi,
    tv: FiMonitor,
    coffee: FiCoffee,
    climate: TbAirConditioning,
    work: MdWorkOutline,
    city: MdLocationCity,
    garden: LuFlower2,
    terrace: PiBuildingApartment,
    family: MdFamilyRestroom,
    kids: MdChildCare,
  };
  const I = map[icon] || FiWifi;
  return <I size={s} />;
}

function Breadcrumb() {
  return (
    <div className="bg-white border-b" style={{ borderColor: "#eee" }}>
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        <span className="font-semibold text-sm" style={{ color: "#1a1a1a" }}>
          About
        </span>
        <span className="text-sm" style={{ color: "#aaa" }}>
          Home &rsaquo; About
        </span>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-start gap-10 lg:gap-14">
          <Motion.div
            {...fadeUp(0)}
            className="relative w-full lg:w-auto flex-shrink-0 mx-auto lg:mx-0"
          >
            <div className="w-full max-w-[500px] h-[320px] sm:h-[420px] lg:h-[500px] rounded-2xl overflow-hidden shadow-lg">
              <Img
                src="/hotel1.jpg"
                alt="Hotel exterior"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute w-[220px] sm:w-[260px] rounded-xl overflow-hidden shadow-md h-[120px] sm:h-[150px] -bottom-8 sm:-bottom-10 -left-4 sm:-left-10 border-2 border-white">
              <Img
                src="/hotel2.jpg"
                alt="Hotel room"
                className="w-full h-full object-cover"
              />
            </div>
            <div
              className="absolute bg-white rounded-xl shadow-lg px-4 py-3 flex flex-col items-center"
              style={{ top: 28, right: 0, minWidth: 118 }}
            >
              <div
                className="flex items-center justify-center rounded-full mb-1"
                style={{ width: 34, height: 34, background: "#f5b942" }}
              >
                <span style={{ color: "white", fontSize: 17 }}>★</span>
              </div>
              <p
                className="font-bold text-xs text-center"
                style={{ color: "#1a1a1a" }}
              >
                5-Star Excellence
              </p>
              <p
                className="text-xs text-center"
                style={{ color: "#aaa", fontSize: 10 }}
              >
                Rated #1 Luxury Resort
              </p>
            </div>
          </Motion.div>

          <div className="flex-1 pt-2">
            <Motion.div {...fadeUp(0.05)}>
              <span
                className="inline-block px-3 py-1 rounded-full text-xs font-medium mb-5"
                style={{ background: "#eaf2ed", color: "#2d5a3d" }}
              >
                Est. 1923
              </span>
            </Motion.div>

            <Motion.div {...fadeUp(0.1)}>
              <h2
                className="font-bold mb-4 leading-tight"
                style={{
                  fontSize: 34,
                  color: "#1a1a1a",
                }}
              >
                Where Timeless Elegance Meets
                <br />
                Modern Luxury
              </h2>
            </Motion.div>

            <Motion.div {...fadeUp(0.15)}>
              <p
                className="text-sm leading-relaxed mb-3"
                style={{ color: "#888" }}
              >
                Excepteur sint occaecat cupidatat non proident sunt in culpa qui
                officia deserunt mollit anim id est laborum. Sed ut perspiciatis
                unde omnis iste natus error sit voluptatem accusantium.
              </p>
              <p
                className="text-sm leading-relaxed mb-6"
                style={{ color: "#888" }}
              >
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
              </p>
            </Motion.div>

            <Motion.div {...fadeUp(0.2)} className="flex flex-col mb-8">
              {TIMELINE.map((item, i) => (
                <div
                  key={item.year}
                  className="flex items-center gap-4 py-3"
                  style={{
                    borderBottom:
                      i < TIMELINE.length - 1 ? "1px solid #f0f0f0" : "none",
                  }}
                >
                  <div
                    className="flex items-center justify-center rounded-full flex-shrink-0 text-white font-bold"
                    style={{
                      width: 44,
                      height: 44,
                      background: "#2d5a3d",
                      fontSize: 11,
                    }}
                  >
                    {item.year}
                  </div>
                  <div>
                    <p
                      className="font-semibold text-sm"
                      style={{ color: "#1a1a1a" }}
                    >
                      {item.title}
                    </p>
                    <p className="text-xs" style={{ color: "#aaa" }}>
                      {item.sub}
                    </p>
                  </div>
                </div>
              ))}
            </Motion.div>

            <Motion.div {...fadeUp(0.25)} className="flex gap-3">
              <button
                className="flex items-center gap-2 px-3 py-2 md:px-6 md:py-2.5 rounded-full text-white text-sm font-medium"
                style={{ background: "#2d5a3d" }}
              >
                <FiCompass size={14} /> Explore Our Heritage
              </button>
              <button
                className="flex items-center gap-2 px-3 py-2 md:px-6 md:py-2.5 rounded-full text-sm font-medium border"
                style={{ borderColor: "#ccc", color: "#333" }}
              >
                <FiPlay size={13} /> Watch Story
              </button>
            </Motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Features() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <Motion.div {...fadeUp()} className="text-center mb-12">
          <h2
            className="font-bold mb-2"
            style={{
              fontSize: 30,
              color: "#1a1a1a",
            }}
          >
            Exceptional Hospitality Redefined
          </h2>
          <p className="text-sm" style={{ color: "#aaa" }}>
            Discover the amenities and services that make your stay
            unforgettable
          </p>
        </Motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {FEATURES.map((f, i) => (
            <Motion.div key={f.title} {...stagger(i)}>
              <div
                className="rounded-xl overflow-hidden mb-4"
                style={{ height: 195 }}
              >
                <Img
                  src={f.img}
                  alt={f.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <h4
                className="font-semibold mb-1"
                style={{ color: "#1a1a1a", fontSize: 15 }}
              >
                {f.title}
              </h4>
              <p className="text-sm leading-relaxed" style={{ color: "#aaa" }}>
                {f.desc}
              </p>
            </Motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Stats() {
  return (
    <section className="py-10" style={{ background: "#f8f8f6" }}>
      <div className="max-w-6xl mx-auto px-6">
        <Motion.div
          {...fadeUp()}
          className="rounded-2xl px-2 py-2 md:px-10 md:py-10"
          style={{ background: "#f0f4f1" }}
        >
          <div className="grid grid-cols-4">
            {STATS.map((s) => (
              <div key={s.label} className="flex flex-col items-center">
                <span
                  className="font-bold mb-1 text-xl md:text-4xl "
                  style={{ color: "#2d5a3d", lineHeight: 1 }}
                >
                  {s.value}
                </span>
                <span className="text-xs text-center" style={{ color: "#888" }}>
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </Motion.div>
      </div>
    </section>
  );
}

function Rooms() {
  const featured = ROOMS_DATA[0];
  const others = ROOMS_DATA.slice(1);
  return (
    <section className="py-24" style={{ background: "#f8f8f6" }}>
      <div className="max-w-6xl mx-auto px-6">
        <Motion.div {...fadeUp()} className="text-center mb-10">
          <p
            className="text-xs font-semibold tracking-widest uppercase mb-2"
            style={{ color: "#2d5a3d" }}
          >
            ROOMS
          </p>
          <p className="text-sm" style={{ color: "#aaa" }}>
            Necessitatibus eus consequatur ex aliquid fuga eum quidem sint
            consectetur velit
          </p>
        </Motion.div>

        <Motion.div
          {...fadeUp(0.1)}
          className="flex flex-col lg:flex-row gap-5 mb-5"
        >
          <div
            className="bg-white rounded-2xl overflow-hidden shadow-md flex-1"
            style={{ minWidth: 0 }}
          >
            <div className="relative" style={{ height: 310 }}>
              <Img
                src={featured.img}
                alt={featured.name}
                className="w-full h-full object-cover"
              />
              {featured.tag && (
                <span
                  className="absolute top-4 left-4 px-3 py-1 rounded-full font-semibold tracking-widest"
                  style={{
                    background: "white",
                    color: "#1a1a1a",
                    fontSize: 11,
                  }}
                >
                  {featured.tag}
                </span>
              )}
              <div className="absolute bottom-4 left-4 flex gap-2">
                {[
                  {
                    icon: <FiUsers size={13} />,
                    label: `${featured.guests} Guests`,
                  },
                  { icon: <MdSquareFoot size={13} />, label: featured.size },
                  { icon: <FiMapPin size={13} />, label: featured.floor },
                ].map((p) => (
                  <span
                    key={p.label}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium"
                    style={{
                      background: "rgba(255,255,255,0.92)",
                      color: "#333",
                    }}
                  >
                    {p.icon} {p.label}
                  </span>
                ))}
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-start justify-between mb-3">
                <h3
                  className="text-xl md:text-2xl font-light"
                  style={{ color: "#1a1a1a" }}
                >
                  {featured.name}
                </h3>
                <div className="flex flex-col items-end" style={{ gap: 2 }}>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} style={{ color: "#f5b942", fontSize: 16 }}>
                        ★
                      </span>
                    ))}
                  </div>
                  <span className="text-xs text-gray-400">
                    5.0 {featured.ratingLabel}
                  </span>
                </div>
              </div>
              <p
                className="text-sm leading-relaxed mb-5"
                style={{ color: "#888" }}
              >
                {featured.description}
              </p>
              <div
                className="flex gap-2 pb-5 mb-5"
                style={{ borderBottom: "1px solid #efefef" }}
              >
                {featured.amenities.map((a) => (
                  <div
                    key={a.label}
                    className="flex items-center gap-2 text-sm"
                    style={{ color: "#666" }}
                  >
                    <AmenityIcon icon={a.icon} /> <span className="text-[10px]">{a.label}</span>
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-baseline gap-0.5">
                  <span className="text-sm text-gray-400">$</span>
                  <span
                    className="font-bold text-2xl md:text-4xl"
                    style={{ color: "#1a1a1a", lineHeight: 1 }}
                  >
                    {featured.price}
                  </span>
                  <span className="text-sm text-gray-400 ml-1">per night</span>
                </div>
                <button
                  className="px-6 py-2.5 rounded-lg text-white text-sm font-medium"
                  style={{ background: "#2d5a3d" }}
                >
                  Reserve Suite
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4 w-full lg:w-[300px] flex-shrink-0">
            {others.map((room, i) => (
              <Motion.div
                key={room.name}
                {...stagger(i)}
                className="bg-white rounded-xl overflow-hidden shadow-sm flex"
                style={{ minHeight: 135 }}
              >
                <div style={{ width: 95, flexShrink: 0 }}>
                  <Img
                    src={room.img}
                    alt={room.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4 flex flex-col justify-between flex-1 min-w-0">
                  <div>
                    <h4
                      className="font-semibold text-sm mb-1"
                      style={{ color: "#1a1a1a" }}
                    >
                      {room.name}
                    </h4>
                    <p
                      className="leading-snug mb-2"
                      style={{ color: "#999", fontSize: 11 }}
                    >
                      {room.description}
                    </p>
                    <div className="flex gap-3 mb-1">
                      {room.features.map((f) => (
                        <span
                          key={f.label}
                          className="flex items-center gap-1"
                          style={{ color: "#aaa", fontSize: 11 }}
                        >
                          <AmenityIcon icon={f.icon} /> {f.label}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-baseline gap-0.5">
                      <span
                        className="font-bold text-base"
                        style={{ color: "#1a1a1a" }}
                      >
                        ${room.price}
                      </span>
                      <span className="text-gray-400" style={{ fontSize: 11 }}>
                        /night
                      </span>
                    </div>
                    <button
                      className="px-4 py-1.5 rounded border text-xs font-medium"
                      style={{ borderColor: "#d0d0d0", color: "#333" }}
                    >
                      Book
                    </button>
                  </div>
                </div>
              </Motion.div>
            ))}
          </div>
        </Motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-5">
          {GRID_ROOMS.map((room, i) => (
            <Motion.div
              key={room.name}
              {...stagger(i)}
              className="flex flex-col items-center"
            >
              <div
                className="w-full rounded-xl overflow-hidden mb-3"
                style={{ aspectRatio: "4/3" }}
              >
                <Img
                  src={room.img}
                  alt={room.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <p
                className="text-sm mb-1 text-center"
                style={{ color: "#1a1a1a" }}
              >
                {room.name}
              </p>
              <p className="mb-2 text-center">
                <span
                  className="font-semibold"
                  style={{ color: "#4ab5a0", fontSize: 16 }}
                >
                  ${room.price.toLocaleString()}
                </span>
                <span style={{ color: "#4ab5a0", fontSize: 11 }}>/night</span>
              </p>
              <div className="flex gap-3">
                {room.icons.map((Icon, j) => (
                  <Icon key={j} size={16} style={{ color: "#bbb" }} />
                ))}
              </div>
            </Motion.div>
          ))}
        </div>

        <Motion.div {...fadeUp(0.3)} className="flex justify-center mt-8">
          <a
            href="/rooms"
            className="flex items-center gap-2 text-sm font-medium"
            style={{ color: "#2d5a3d" }}
          >
            Explore All Accommodations <FiArrowRight size={14} />
          </a>
        </Motion.div>
      </div>
    </section>
  );
}

export default function AboutPage() {
  return (
    <div style={{ background: "#fff" }}>
      <Breadcrumb />
      <Hero />
      <Features />
      <Stats />
      <Rooms />
    </div>
  );
}
