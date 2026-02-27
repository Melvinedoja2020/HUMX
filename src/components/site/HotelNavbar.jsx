import { forwardRef } from "react";
import { Link, NavLink } from "react-router-dom";

const navItems = [
  { label: "Home", to: "/" },
  { label: "Our Hotel", to: "/our-hotel" },
  { label: "Rooms", to: "/rooms" },
  { label: "Booking", to: "/rooms" },
  { label: "Contact", to: "/contact" },
];

const HotelNavbar = forwardRef(function HotelNavbar({ tone = "light" }, ref) {
  const isLight = tone === "light";

  const textClass = isLight ? "text-white/90 hover:text-white" : "text-[#3a2a18] hover:text-[#1a1208]";
  const lineClass = isLight ? "bg-white" : "bg-[#3a2a18]";
  const brandClass = isLight ? "text-white" : "text-[#1a1208]";

  return (
    <nav ref={ref} className="absolute top-0 left-0 right-0 z-40 flex items-center justify-between px-12 py-7">
      <Link to="/" className={`text-xl tracking-wide ${brandClass}`} style={{ fontFamily: "'Cormorant Garamond', serif" }}>
        <span className="font-light">Hotel</span>
        <span className="font-semibold">Beach.</span>
      </Link>

      <div className="flex items-center gap-10">
        {navItems.map((item) => (
          <NavLink
            key={item.label}
            to={item.to}
            className={({ isActive }) =>
              `${textClass} text-sm transition-colors ${isActive ? (isLight ? "text-white" : "text-[#1a1208]") : ""}`
            }
            style={{ fontWeight: 400 }}
          >
            {item.label}
          </NavLink>
        ))}

        <button type="button" className="flex flex-col gap-[5px] group" aria-label="Menu">
          <span className={`block w-6 h-px transition-all group-hover:w-8 ${lineClass}`} />
          <span className={`block w-6 h-px transition-all group-hover:w-4 ${lineClass}`} />
        </button>
      </div>
    </nav>
  );
});

export default HotelNavbar;
