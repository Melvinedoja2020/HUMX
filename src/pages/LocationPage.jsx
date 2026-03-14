import { motion as Motion } from "framer-motion";
import {
  FiMapPin,
  FiPhone,
  FiClock,
} from "react-icons/fi";
import {
  MdOutlineAirplanemodeActive,
  MdOutlineDirectionsCar,
  MdOutlineTrain,
  MdOutlineAirportShuttle,
  MdOutlineShareLocation,
} from "react-icons/md";
import { fadeUp, stagger } from "../utils/animations";
import Img from "../components/ui/Img";

const TRANSPORT = [
  {
    icon: MdOutlineDirectionsCar,
    title: "By Car",
    subtitle: "Most Convenient",
    subtitleColor: "#2ea8a0",
    desc: "Complimentary valet service available. Premium parking garage with direct hotel access and EV charging stations.",
    tags: ["Valet Service", "EV Charging"],
  },
  {
    icon: MdOutlineTrain,
    title: "By Metro",
    subtitle: "5 min walk",
    subtitleColor: "#2ea8a0",
    desc: "State Street Station directly connects to all major lines. Blue line to airports. Red line to suburbs and entertainment districts.",
    tags: ["Blue Line", "Red Line"],
  },
  {
    icon: MdOutlineAirportShuttle,
    title: "Airport Shuttle",
    subtitle: "Every 30 min",
    subtitleColor: "#2ea8a0",
    desc: "Luxury shuttle service to both major airports. Premium comfort with WiFi, refreshments, and luggage assistance included.",
    tags: ["WiFi", "Refreshments"],
  },
  {
    icon: MdOutlineShareLocation,
    title: "Ride Share",
    subtitle: "24/7 Available",
    subtitleColor: "#2ea8a0",
    desc: "Dedicated pickup zones for all ride sharing services. Professional concierge assistance for booking and special requests.",
    tags: ["Concierge Help", "Express Pickup"],
  },
];

const NEIGHBORHOOD = [
  {
    name: "Millennium Park",
    distance: "2 blocks",
    walk: "8 minute walk",
    desc: "Cras ultrices ligula sed magna dictum porta. Donec sollicitudin molestie malesuada. Experience iconic Cloud Gate sculpture.",
    img: "/hotel1.jpg",
  },
  {
    name: "Art Institute",
    distance: "4 blocks",
    walk: "12 minute walk",
    desc: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas world renowned collection.",
    img: "/hotel2.jpg",
  },
  {
    name: "Navy Pier",
    distance: "1.2 miles",
    walk: "18 minute walk",
    desc: "Vivamus magna justo lacinia eget consectetur sed convallis at tellus. Entertainment, dining, and stunning lake views.",
    img: "/hotel3.jpg",
  },
  {
    name: "Theater District",
    distance: "3 blocks",
    walk: "10 minute walk",
    desc: "Mauris blandit aliquet elit eget tincidunt nibh pulvinar. Broadway shows and world-class performances nightly.",
    img: "/hotel1.jpg",
  },
  {
    name: "Magnificent Mile",
    distance: "1 block",
    walk: "5 minute walk",
    desc: "Donec rutrum congue leo eget malesuada. Premium shopping, luxury brands, and upscale dining experiences.",
    img: "/hotel4.jpg",
  },
  {
    name: "Lake Michigan Shore",
    distance: "6 blocks",
    walk: "15 minute walk",
    desc: "Sed porttitor lectus nibh mauris blandit aliquet elit. Beach access, recreational trails, and scenic waterfront dining.",
    img: "/hotel2.jpg",
  },
];

export default function LocationPage() {
  return (
    <div style={{ background: "#f8f9fa", minHeight: "100vh" }}>
      <div className="bg-white border-b" style={{ borderColor: "#eee" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
          <span className="font-semibold text-sm" style={{ color: "#1a1a1a" }}>
            Location
          </span>
          <span className="text-sm" style={{ color: "#aaa" }}>
            Home &rsaquo; Location
          </span>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
        <Motion.div
          {...fadeUp()}
          className="flex flex-col lg:flex-row gap-8 mb-16"
        >
          <div className="flex-1">
            <span
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium mb-4"
              style={{ background: "#eaf2ed", color: "#2d5a3d" }}
            >
              <FiMapPin size={11} /> Prime Location
            </span>

            <h2
              className="font-bold mb-4 leading-tight"
              style={{
                fontFamily: "'Georgia', serif",
                fontSize: 30,
                color: "#1a1a1a",
              }}
            >
              Luxury Downtown Experience
            </h2>

            <p
              className="text-sm leading-relaxed mb-6"
              style={{ color: "#888", maxWidth: 440 }}
            >
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia curae. Donec rutrum congue leo eget malesuada.
              Proin eget tortor risus cras ultrices ligula sed magna dictum
              porta.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-5 mb-7">
              <div className="flex gap-3">
                <div
                  className="flex items-center justify-center rounded-lg flex-shrink-0"
                  style={{ width: 36, height: 36, background: "#f0f4f1" }}
                >
                  <FiMapPin size={16} style={{ color: "#2d5a3d" }} />
                </div>
                <div>
                  <p
                    className="font-semibold text-sm mb-0.5"
                    style={{ color: "#1a1a1a" }}
                  >
                    Address
                  </p>
                  <p
                    className="text-xs leading-relaxed"
                    style={{ color: "#888" }}
                  >
                    789 Madison Street
                    <br />
                    Chicago, IL 60601
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <div
                  className="flex items-center justify-center rounded-lg flex-shrink-0"
                  style={{ width: 36, height: 36, background: "#f0f4f1" }}
                >
                  <MdOutlineAirplanemodeActive
                    size={18}
                    style={{ color: "#2d5a3d" }}
                  />
                </div>
                <div>
                  <p
                    className="font-semibold text-sm mb-0.5"
                    style={{ color: "#1a1a1a" }}
                  >
                    Airport Access
                  </p>
                  <p
                    className="text-xs leading-relaxed"
                    style={{ color: "#888" }}
                  >
                    O'Hare · 25 min
                    <br />
                    Midway · 75 min
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <div
                  className="flex items-center justify-center rounded-lg flex-shrink-0"
                  style={{ width: 36, height: 36, background: "#f0f4f1" }}
                >
                  <FiPhone size={15} style={{ color: "#2d5a3d" }} />
                </div>
                <div>
                  <p
                    className="font-semibold text-sm mb-0.5"
                    style={{ color: "#1a1a1a" }}
                  >
                    Contact
                  </p>
                  <p
                    className="text-xs leading-relaxed"
                    style={{ color: "#888" }}
                  >
                    +1 (555) 876-5432
                    <br />
                    reservations@example.com
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <div
                  className="flex items-center justify-center rounded-lg flex-shrink-0"
                  style={{ width: 36, height: 36, background: "#f0f4f1" }}
                >
                  <FiClock size={15} style={{ color: "#2d5a3d" }} />
                </div>
                <div>
                  <p
                    className="font-semibold text-sm mb-0.5"
                    style={{ color: "#1a1a1a" }}
                  >
                    Check-in
                  </p>
                  <p
                    className="text-xs leading-relaxed"
                    style={{ color: "#888" }}
                  >
                    3:00 PM - 11:00 PM
                    <br />
                    Check out: 11:00 AM
                  </p>
                </div>
              </div>
            </div>

            <div className="flex gap-3">
              <button
                className="flex items-center gap-2 px-5 py-2.5 rounded-full text-white text-sm font-medium"
                style={{ background: "#2d5a3d" }}
              >
                <FiMapPin size={13} /> View on Map
              </button>
              <button
                className="px-5 py-2.5 rounded-full text-sm font-medium border"
                style={{
                  borderColor: "#ccc",
                  color: "#333",
                  background: "white",
                }}
              >
                Book Now
              </button>
            </div>
          </div>

          <div
            className="w-full lg:w-auto rounded-2xl overflow-hidden flex-shrink-0"
            style={{ width: "100%", maxWidth: 420, height: 340 }}
          >
            <iframe
              title="Hotel Location"
              width="100%"
              height="100%"
              loading="lazy"
              style={{ border: 0 }}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.4!2d-74.006!3d40.7128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQyJzQ2LjEiTiA3NMKwMDAnMjEuNiJX!5e0!3m2!1sen!2sus!4v1234567890"
              allowFullScreen
            />
          </div>
        </Motion.div>

        <div className="mb-16">
          <Motion.div {...fadeUp()} className="text-center mb-8">
            <h2
              className="font-bold mb-2"
              style={{
                fontFamily: "'Georgia', serif",
                fontSize: 28,
                color: "#1a1a1a",
              }}
            >
              Getting Here is Easy
            </h2>
            <p className="text-sm" style={{ color: "#aaa" }}>
              Multiple convenient transportation options to reach our hotel
            </p>
          </Motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {TRANSPORT.map((t, i) => {
              const Icon = t.icon;
              return (
                <Motion.div
                  key={t.title}
                  {...stagger(i)}
                  className="bg-white rounded-2xl p-5"
                  style={{ boxShadow: "0 1px 8px rgba(0,0,0,0.06)" }}
                >
                  <div className="flex items-start gap-4 mb-3">
                    <div
                      className="flex items-center justify-center rounded-xl flex-shrink-0"
                      style={{ width: 48, height: 48, background: "#f0f4f1" }}
                    >
                      <Icon size={22} style={{ color: "#2d5a3d" }} />
                    </div>
                    <div>
                      <h4
                        className="font-bold text-sm"
                        style={{ color: "#1a1a1a" }}
                      >
                        {t.title}
                      </h4>
                      <p
                        className="text-xs font-medium"
                        style={{ color: t.subtitleColor }}
                      >
                        {t.subtitle}
                      </p>
                    </div>
                  </div>
                  <p
                    className="text-sm leading-relaxed mb-3"
                    style={{ color: "#888" }}
                  >
                    {t.desc}
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    {t.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full text-xs font-medium"
                        style={{ background: "#f0f4f1", color: "#555" }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </Motion.div>
              );
            })}
          </div>
        </div>

        <div>
          <Motion.div {...fadeUp()} className="text-center mb-8">
            <h2
              className="font-bold mb-2"
              style={{
                fontFamily: "'Georgia', serif",
                fontSize: 28,
                color: "#1a1a1a",
              }}
            >
              Explore the Neighborhood
            </h2>
            <p className="text-sm" style={{ color: "#aaa" }}>
              World-class attractions and entertainment right at your doorstep
            </p>
          </Motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {NEIGHBORHOOD.map((place, i) => (
              <Motion.div
                key={place.name}
                {...stagger(i)}
                className="bg-white rounded-2xl overflow-hidden"
                style={{ boxShadow: "0 1px 8px rgba(0,0,0,0.06)" }}
              >
                <div className="relative" style={{ height: 170 }}>
                  <Img
                    src={place.img}
                    alt={place.name}
                    className="w-full h-full object-cover"
                  />
                  <span
                    className="absolute top-3 left-3 flex items-center gap-1 px-2.5 py-1 rounded-full text-white text-xs font-medium"
                    style={{
                      background: "rgba(0,0,0,0.5)",
                      backdropFilter: "blur(4px)",
                    }}
                  >
                    <FiMapPin size={10} /> {place.distance}
                  </span>
                </div>

                <div className="p-4">
                  <h4
                    className="font-bold mb-1"
                    style={{ color: "#1a1a1a", fontSize: 15 }}
                  >
                    {place.name}
                  </h4>
                  <p
                    className="flex items-center gap-1 text-xs mb-2"
                    style={{ color: "#2ea8a0" }}
                  >
                    <FiClock size={11} /> {place.walk}
                  </p>
                  <p
                    className="text-xs leading-relaxed"
                    style={{ color: "#999" }}
                  >
                    {place.desc}
                  </p>
                </div>
              </Motion.div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}
