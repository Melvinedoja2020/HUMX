import { useState, useEffect } from "react";
import { motion as Motion } from "framer-motion";
import { CiSearch } from "react-icons/ci";
import { FiMenu, FiUser, FiX } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import { COLORS } from "../../constants/theme";
import { NAV_LINKS } from "../../constants/content";

const ROUTE_BY_LABEL = {
  Home: "/",
  About: "/about",
  Rooms: "/rooms",
  Amenities: "/amenities",
  Location: "/location",
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 768px)");
    const onChange = () => {
      if (media.matches) setMobileOpen(false);
    };

    onChange();
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  return (
    <Motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(27,67,50,0.97)" : "transparent",
        backdropFilter: scrolled ? "blur(10px)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        <NavLink
          to="/"
          className="text-white font-bold text-xl tracking-wider"
          onClick={() => setMobileOpen(false)}
        >
          HUMX
        </NavLink>
        <ul className="hidden md:flex gap-6">
          {NAV_LINKS.map((l) => (
            <li key={l}>
              {ROUTE_BY_LABEL[l] ? (
                <NavLink
                  to={ROUTE_BY_LABEL[l]}
                  className={({ isActive }) =>
                    [
                      "text-sm transition-colors duration-200",
                      isActive ? "text-white" : "text-white/80 hover:text-white",
                    ].join(" ")
                  }
                >
                  {l}
                </NavLink>
              ) : (
                <a
                  href="#"
                  className="text-white/80 hover:text-white text-sm transition-colors duration-200"
                >
                  {l}
                </a>
              )}
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-3">
          <a
            href="#"
            className="hidden md:inline-flex text-white/80 hover:text-white text-lg transition-colors"
          >
            <CiSearch size={20} />
          </a>
          <a
            href="#"
            className="hidden md:inline-flex text-white/80 hover:text-white text-lg transition-colors"
          >
            <FiUser size={20} />
          </a>
          <button
            className="hidden sm:inline-flex text-sm px-4 py-2 rounded text-white font-medium transition-all"
            style={{ background: COLORS.GREEN_LIGHT }}
          >
            Book Now
          </button>
          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded text-white/90 hover:text-white hover:bg-white/10 transition-colors"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <FiX size={20} /> : <FiMenu size={20} />}
          </button>
        </div>
      </div>

      <Motion.div
        initial={false}
        animate={mobileOpen ? "open" : "closed"}
        variants={{
          open: { height: "auto", opacity: 1 },
          closed: { height: 0, opacity: 0 },
        }}
        transition={{ duration: 0.2 }}
        className="md:hidden overflow-hidden"
        style={{
          background: scrolled ? "rgba(27,67,50,0.97)" : "rgba(27,67,50,0.92)",
          backdropFilter: "blur(10px)",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 py-3">
          <div className="grid gap-1">
            {Object.entries(ROUTE_BY_LABEL).map(([label, to]) => (
              <NavLink
                key={label}
                to={to}
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) =>
                  [
                    "py-2 px-2 rounded text-sm transition-colors",
                    isActive ? "text-white bg-white/10" : "text-white/80",
                  ].join(" ")
                }
              >
                {label}
              </NavLink>
            ))}
          </div>

          <button
            type="button"
            className="mt-3 w-full text-sm px-4 py-2 rounded text-white font-medium"
            style={{ background: COLORS.GREEN_LIGHT }}
            onClick={() => setMobileOpen(false)}
          >
            Book Now
          </button>
        </div>
      </Motion.div>
    </Motion.nav>
  );
}
