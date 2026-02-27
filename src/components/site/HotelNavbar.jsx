import { forwardRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const navItems = [
  { label: "Home", type: "route", to: "/" },
  { label: "Our Hotel", type: "section", section: "activities" },
  { label: "Rooms", type: "route", to: "/rooms" },
  { label: "Contact", type: "section", section: "contact" },
];

const HotelNavbar = forwardRef(function HotelNavbar({ tone = "light" }, ref) {
  const navigate = useNavigate();
  const location = useLocation();
  const isLight = tone === "light";

  const textClass = isLight ? "text-white/90 hover:text-white" : "text-[#3a2a18] hover:text-[#1a1208]";
  const lineClass = isLight ? "bg-white" : "bg-[#3a2a18]";
  const brandClass = isLight ? "text-white" : "text-[#1a1208]";

  const handleSectionClick = (sectionId) => {
    if (location.pathname === "/") {
      const target = document.getElementById(sectionId);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
      return;
    }

    navigate("/", { state: { scrollTo: sectionId } });
  };

  return (
    <nav ref={ref} className="absolute top-0 left-0 right-0 z-40 flex items-center justify-between px-12 py-7">
      <Link to="/" className={`text-xl tracking-wide ${brandClass}`} style={{ fontFamily: "'Cormorant Garamond', serif" }}>
        <span className="font-light">Hotel</span>
        <span className="font-semibold">Beach.</span>
      </Link>

      <div className="flex items-center gap-10">
        {navItems.map((item) =>
          item.type === "route" ? (
            <Link
              key={item.label}
              to={item.to}
              className={`${textClass} text-sm transition-colors`}
              style={{ fontWeight: 400 }}
            >
              {item.label}
            </Link>
          ) : (
            <button
              key={item.label}
              type="button"
              onClick={() => handleSectionClick(item.section)}
              className={`${textClass} text-sm transition-colors`}
              style={{ fontWeight: 400 }}
            >
              {item.label}
            </button>
          ),
        )}

        <button type="button" className="flex flex-col gap-[5px] group" aria-label="Menu">
          <span className={`block w-6 h-px transition-all group-hover:w-8 ${lineClass}`} />
          <span className={`block w-6 h-px transition-all group-hover:w-4 ${lineClass}`} />
        </button>
      </div>
    </nav>
  );
});

export default HotelNavbar;
