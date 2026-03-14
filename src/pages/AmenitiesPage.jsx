import { motion as Motion } from "framer-motion";
import {
  FiWifi,
  FiClock,
  FiHeart,
  FiShield,
  FiBell,
  FiUsers,
} from "react-icons/fi";
import {
  MdOutlineLocalBar,
  MdOutlineLocalAirport,
  MdOutlineHeadsetMic,
  MdOutlinePets,
  MdOutlineWineBar,
} from "react-icons/md";
import {
  TbDroplet,
  TbLeaf,
  TbChefHat,
  TbCar,
  TbBolt,
  TbBook,
} from "react-icons/tb";
import { LuBriefcase } from "react-icons/lu";
import { PiHeartbeatBold } from "react-icons/pi";
import { fadeUp, stagger } from "../utils/animations";
import Img from "../components/ui/Img";
import { BiSpeaker } from "react-icons/bi";

const MAIN_AMENITIES = [
  {
    title: "Infinity Pool & Sun Deck",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
    features: [
      { icon: FiClock, label: "Open 6 AM - 10 PM" },
      { icon: TbDroplet, label: "Heated pool year-round" },
      { icon: MdOutlineLocalBar, label: "Poolside bar service" },
    ],
    img: "/hotel4.jpg",
  },
  {
    title: "Luxury Spa & Wellness",
    desc: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.",
    features: [
      { icon: TbBook, label: "Book treatments online" },
      { icon: FiHeart, label: "Couples massage rooms" },
      { icon: TbLeaf, label: "Organic spa products" },
    ],
    img: "/hotel3.jpg",
  },
  {
    title: "Signature Restaurant",
    desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.",
    features: [
      { icon: TbChefHat, label: "Michelin-starred chef" },
      { icon: MdOutlineWineBar, label: "Award-winning wine cellar" },
      { icon: FiClock, label: "Open Tuesday - Sunday" },
    ],
    img: "/hotel1.jpg",
  },
  {
    title: "24/7 Fitness Center",
    desc: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi.",
    features: [
      { icon: TbBolt, label: "State-of-the-art equipment" },
      { icon: FiUsers, label: "Personal trainers available" },
      { icon: FiShield, label: "Complimentary towels" },
    ],
    img: "/hotel2.jpg",
  },
];

const EXTRA_SERVICES = [
  {
    icon: FiWifi,
    label: "Free Wi-Fi",
    desc: "High-speed internet throughout the property",
  },
  {
    icon: TbCar,
    label: "Valet Parking",
    desc: "Complimentary valet service for all guests",
  },
  {
    icon: MdOutlineLocalAirport,
    label: "Airport Shuttle",
    desc: "Scheduled transfers to major airports",
  },
  {
    icon: MdOutlineHeadsetMic,
    label: "Concierge",
    desc: "24/7 assistance for reservations and tours",
  },
  {
    icon: FiBell,
    label: "Room Service",
    desc: "Gourmet dining delivered to your room",
  },
  {
    icon: LuBriefcase,
    label: "Safe Deposit",
    desc: "Secure storage for your valuables",
  },
  {
    icon: BiSpeaker,
    label: "Multilingual Staff",
    desc: "Service in English, Spanish, French, and more",
  },
  {
    icon: MdOutlinePets,
    label: "Pet Friendly",
    desc: "Welcome amenities for your furry friends",
  },
];

export default function AmenitiesPage() {
  return (
    <div style={{ background: "#f8f9fa", minHeight: "100vh" }}>
      <div className="bg-white border-b" style={{ borderColor: "#eee" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
          <span className="font-semibold text-sm" style={{ color: "#1a1a1a" }}>
            Amenities
          </span>
          <span className="text-sm" style={{ color: "#aaa" }}>
            Home &rsaquo; Amenities
          </span>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-0 mb-10"
          style={{
            border: "1px solid #e8e8e8",
            borderRadius: 16,
            overflow: "hidden",
            background: "white",
          }}
        >
          {MAIN_AMENITIES.map((a, i) => {
            const isRight = i % 2 === 1;
            const isBottom = i >= 2;
            return (
              <Motion.div
                key={a.title}
                {...stagger(i)}
                style={{
                  borderRight: !isRight ? "1px solid #e8e8e8" : "none",
                  borderBottom: !isBottom ? "1px solid #e8e8e8" : "none",
                }}
              >
                <div style={{ height: 200 }}>
                  <Img
                    src={a.img}
                    alt={a.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-6">
                  <h3
                    className="font-bold mb-3"
                    style={{ color: "#1a1a1a", fontSize: 17 }}
                  >
                    {a.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed mb-5"
                    style={{ color: "#888" }}
                  >
                    {a.desc}
                  </p>

                  <ul className="flex flex-col gap-2.5">
                    {a.features.map((f) => {
                      const Icon = f.icon;
                      return (
                        <li
                          key={f.label}
                          className="flex items-center gap-2.5 text-sm"
                          style={{ color: "#555" }}
                        >
                          <Icon
                            size={15}
                            style={{ color: "#888", flexShrink: 0 }}
                          />
                          {f.label}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </Motion.div>
            );
          })}
        </div>

        <Motion.div
          {...fadeUp(0.2)}
          className="rounded-2xl px-6 sm:px-10 py-12"
          style={{ background: "#f0f4f1" }}
        >
          <h2
            className="text-center font-bold mb-10"
            style={{
              fontSize: 26,
              color: "#1a1a1a",
            }}
          >
            Additional Hotel Services
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-10">
            {EXTRA_SERVICES.map((s, i) => {
              const Icon = s.icon;
              return (
                <Motion.div
                  key={s.label}
                  {...stagger(i)}
                  className="flex flex-col items-center text-center"
                >
                  <div
                    className="flex items-center justify-center rounded-full mb-3"
                    style={{
                      width: 64,
                      height: 64,
                      background: "#2d5a3d",
                    }}
                  >
                    <Icon size={26} color="white" />
                  </div>
                  <p
                    className="font-semibold mb-1"
                    style={{ color: "#1a1a1a", fontSize: 14 }}
                  >
                    {s.label}
                  </p>
                  <p
                    className="text-xs leading-relaxed"
                    style={{ color: "#888", maxWidth: 160 }}
                  >
                    {s.desc}
                  </p>
                </Motion.div>
              );
            })}
          </div>
        </Motion.div>
      </div>
    </div>
  );
}
