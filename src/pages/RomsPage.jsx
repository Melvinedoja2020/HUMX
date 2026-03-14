import { useState } from "react";
import { motion as Motion } from "framer-motion";
import {
  FiUsers,
  FiWifi,
  FiMonitor,
  FiPhone,
  FiHeart,
  FiRefreshCw,
  FiChevronDown,
} from "react-icons/fi";
import {
  MdOutlineKitchen,
  MdOutlineSportsEsports,
  MdOutlineLocalParking,
  MdOutlineCoffee,
  MdOutlineLock,
  MdOutlineHotTub,
} from "react-icons/md";
import { fadeUp, stagger } from "../utils/animations";
import Img from "../components/ui/Img";

const ROOMS = [
  {
    name: "Deluxe Ocean Suite",
    stars: 5,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    guests: "Up to 4 guests",
    features: [
      { icon: FiWifi, label: "Free WiFi" },
      { icon: FiMonitor, label: "Smart TV" },
    ],
    price: 289,
    img: "/hotel1.jpg",
    badges: [
      { label: "Ocean View", color: "#2ea8a0" },
      { label: "Popular", color: "#f06a1a" },
    ],
  },
  {
    name: "Executive Business Suite",
    stars: 4.5,
    desc: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    guests: "Up to 2 guests",
    features: [
      { icon: FiMonitor, label: "Work Desk" },
      { icon: FiPhone, label: "Business Phone" },
    ],
    price: 199,
    img: "/hotel1.jpg",
    badges: [{ label: "Business", color: "#6b7280" }],
  },
  {
    name: "Family Garden Room",
    stars: 4,
    desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    guests: "Up to 5 guests",
    features: [
      { icon: MdOutlineKitchen, label: "Mini Kitchen" },
      { icon: MdOutlineSportsEsports, label: "Game Console" },
    ],
    price: 159,
    img: "/hotel4.jpg",
    badges: [
      { label: "Family Friendly", color: "#2d5a3d" },
      { label: "Garden View", color: "#2ea8a0" },
    ],
  },
  {
    name: "Romantic Honeymoon Suite",
    stars: 5,
    desc: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.",
    guests: "Up to 2 guests",
    features: [
      { icon: FiHeart, label: "King Bed" },
      { icon: MdOutlineHotTub, label: "Jacuzzi" },
    ],
    price: 349,
    img: "/hotel3.jpg",
    badges: [
      { label: "Romantic", color: "#9333ea" },
      { label: "Premium", color: "#f06a1a" },
    ],
  },
  {
    name: "Standard City Room",
    stars: 3.5,
    desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    guests: "Up to 2 guests",
    features: [
      { icon: FiWifi, label: "Free WiFi" },
      { icon: MdOutlineLocalParking, label: "Parking" },
    ],
    price: 129,
    img: "/hotel1.jpg",
    badges: [{ label: "City View", color: "#2ea8a0" }],
  },
  {
    name: "Premium Ocean View",
    stars: 5,
    desc: "Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt.",
    guests: "Up to 3 guests",
    features: [
      { icon: MdOutlineCoffee, label: "Coffee Machine" },
      { icon: MdOutlineLock, label: "Safe" },
    ],
    price: 259,
    img: "/hotel2.jpg",
    badges: [
      { label: "Ocean View", color: "#2ea8a0" },
      { label: "Luxury", color: "#2d5a3d" },
    ],
  },
];

function Stars({ count }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => {
        const filled = count >= i;
        const half = !filled && count >= i - 0.5;
        return (
          <span
            key={i}
            style={{ color: "#f5b942", fontSize: 14, lineHeight: 1 }}
          >
            {filled ? "★" : half ? "⯨" : "☆"}
          </span>
        );
      })}
    </div>
  );
}

function FilterSelect({ label, options }) {
  const [val, setVal] = useState(options[0]);
  return (
    <div className="flex-1 min-w-0">
      <label
        className="block text-xs font-medium mb-1.5"
        style={{ color: "#555" }}
      >
        {label}
      </label>
      <div className="relative">
        <select
          value={val}
          onChange={(e) => setVal(e.target.value)}
          className="w-full appearance-none rounded border px-3 py-2 text-sm pr-8 focus:outline-none"
          style={{ borderColor: "#ddd", color: "#444", background: "white" }}
        >
          {options.map((o) => (
            <option key={o}>{o}</option>
          ))}
        </select>
        <FiChevronDown
          size={14}
          className="absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none"
          style={{ color: "#999" }}
        />
      </div>
    </div>
  );
}

function RoomCard({ room, i }) {
  return (
    <Motion.div
      {...stagger(i)}
      className="bg-white rounded-2xl overflow-hidden"
      style={{ boxShadow: "0 1px 10px rgba(0,0,0,0.08)" }}
    >
      <div className="relative" style={{ height: 200 }}>
        <Img
          src={room.img}
          alt={room.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-3 left-3 flex flex-col gap-1.5">
          {room.badges.map((b) => (
            <span
              key={b.label}
              className="px-2.5 py-1 rounded-full text-white font-medium"
              style={{ background: b.color, fontSize: 11 }}
            >
              {b.label}
            </span>
          ))}
        </div>
      </div>

      <div className="p-5">
        <div className="flex items-start justify-between mb-2 gap-2">
          <h3
            className="font-bold leading-tight"
            style={{ color: "#1a1a1a", fontSize: 16 }}
          >
            {room.name}
          </h3>
          <Stars count={room.stars} />
        </div>

        <p
          className="text-sm leading-relaxed mb-3"
          style={{ color: "#999", minHeight: 52 }}
        >
          {room.desc}
        </p>

        <div
          className="flex flex-wrap gap-x-4 gap-y-1 pb-4 mb-4"
          style={{ borderBottom: "1px solid #f0f0f0" }}
        >
          <span
            className="flex items-center gap-1.5 text-xs"
            style={{ color: "#777" }}
          >
            <FiUsers size={13} /> {room.guests}
          </span>
          {room.features.map((f) => {
            const Icon = f.icon;
            return (
              <span
                key={f.label}
                className="flex items-center gap-1.5 text-xs"
                style={{ color: "#777" }}
              >
                <Icon size={13} /> {f.label}
              </span>
            );
          })}
        </div>

        <div className="flex items-center justify-between">
          <div>
            <span className="text-xs" style={{ color: "#aaa" }}>
              From{" "}
            </span>
            <span
              className="font-bold"
              style={{ fontSize: 22, color: "#1a1a1a" }}
            >
              ${room.price}
            </span>
            <span className="text-xs" style={{ color: "#aaa" }}>
              {" "}
              / night
            </span>
          </div>
          <button
            className="px-4 py-2 rounded-lg text-white text-sm font-medium transition-opacity hover:opacity-90"
            style={{ background: "#2d5a3d" }}
          >
            View Details
          </button>
        </div>
      </div>
    </Motion.div>
  );
}

export default function RoomsPage() {
  return (
    <div style={{ background: "#f8f9fa", minHeight: "100vh" }}>
      <div className="bg-white border-b" style={{ borderColor: "#eee" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
          <span className="font-semibold text-sm" style={{ color: "#1a1a1a" }}>
            Rooms
          </span>
          <span className="text-sm" style={{ color: "#aaa" }}>
            Home &rsaquo; Rooms
          </span>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
        <Motion.div
          {...fadeUp()}
          className="bg-white rounded-2xl p-5 mb-8"
          style={{ boxShadow: "0 1px 8px rgba(0,0,0,0.06)" }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <FilterSelect
              label="Price Range"
              options={["All Prices", "Under $150", "$150–$300", "Over $300"]}
            />
            <FilterSelect
              label="Guest Capacity"
              options={[
                "Any Capacity",
                "1–2 Guests",
                "3–4 Guests",
                "5+ Guests",
              ]}
            />
            <FilterSelect
              label="View Type"
              options={["All Views", "Ocean View", "Garden View", "City View"]}
            />
            <FilterSelect
              label="Sort By"
              options={[
                "Popularity",
                "Price: Low–High",
                "Price: High–Low",
                "Rating",
              ]}
            />
          </div>
        </Motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {ROOMS.map((room, i) => (
            <RoomCard key={room.name} room={room} i={i} />
          ))}
        </div>

        <Motion.div {...fadeUp(0.3)} className="flex justify-start">
          <button
            className="flex items-center gap-2 px-6 py-3 rounded-full border text-sm font-medium transition-colors hover:bg-gray-50"
            style={{ borderColor: "#ccc", color: "#444" }}
          >
            <FiRefreshCw size={14} />
            Load More Rooms
          </button>
        </Motion.div>
      </div>
    </div>
  );
}
