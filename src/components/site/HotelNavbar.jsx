import React, { forwardRef, useState } from "react";
import { NavLink } from "react-router-dom";

const navItems = [
  { label: "Home", to: "/" },
  { label: "Our Hotel", to: "/our-hotel" },
  { label: "Rooms", to: "/rooms" },
  { label: "Contact", to: "/contact" },
];

const HotelNavbar = forwardRef(function HotelNavbar({ tone = "light" }, ref) {
  const [menuOpen, setMenuOpen] = useState(false);
  const isLight = tone === "light";
  

  const navTextClass = isLight ? "text-white/90 hover:text-white" : "text-[#3a2a18] hover:text-[#1a1208]";
  const brandClass = isLight ? "text-white" : "text-[#1a1208]";
  const lineClass = isLight ? "bg-white" : "bg-[#3a2a18]";
  const drawerClass = isLight ? "bg-black/80 border-white/20 text-white" : "bg-white border-[#e8e0d4] text-[#1a1208]";

  return (
    <>
      <nav
        ref={ref}
        className="absolute left-0 right-0 top-0 z-40 flex items-center justify-between px-4 py-5 sm:px-6 lg:px-12 lg:py-7"
      >
        <NavLink to="/" className={`text-xl tracking-wide ${brandClass}`} style={{ fontFamily: "'Cormorant Garamond', serif" }}>
          <span className="font-light">HUMX</span>
        </NavLink>

        <div className="hidden items-center gap-10 md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.label}
              to={item.to}
              className={({ isActive }) =>
                `${navTextClass} text-sm tracking-wide transition-colors duration-200 ${isActive ? (isLight ? "text-white" : "text-[#1a1208]") : ""}`
              }
              style={{ fontFamily: "'Jost', sans-serif", fontWeight: 400 }}
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            className="group ml-2 flex flex-col gap-[5px] md:hidden"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span className={`block h-px w-6 transition-all duration-300 group-hover:w-8 ${lineClass} ${menuOpen ? "translate-y-[6px] rotate-45" : ""}`} />
            <span className={`block h-px w-6 transition-all duration-300 group-hover:w-4 ${lineClass} ${menuOpen ? "-translate-y-[4px] -rotate-45" : ""}`} />
          </button>
        </div>
      </nav>

      <div className={`fixed inset-0 z-50 md:hidden ${menuOpen ? "pointer-events-auto" : "pointer-events-none"}`}>
        <button
          type="button"
          aria-label="Close menu"
          onClick={() => setMenuOpen(false)}
          className={`absolute inset-0 bg-black/35 transition-opacity duration-300 ${menuOpen ? "opacity-100" : "opacity-0"}`}
        />
        <aside
          className={`absolute right-0 top-0 h-full w-[82%] max-w-[320px] border-l px-6 py-8 shadow-[0_20px_50px_rgba(0,0,0,0.24)] backdrop-blur-xl transition-transform duration-300 ${drawerClass} ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          <div className="mb-8 flex items-center justify-between">
            <p className="text-lg tracking-wide" style={{ fontFamily: "'Cormorant Garamond', serif" }}>HUMX</p>
            <button type="button" onClick={() => setMenuOpen(false)} className="text-sm opacity-80">Close</button>
          </div>
          <div className="grid gap-4">
            {navItems.map((item) => (
              <NavLink
                key={`mobile-${item.label}`}
                to={item.to}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `text-sm tracking-wide transition-colors ${isActive ? (isLight ? "text-white" : "text-[#1a1208]") : isLight ? "text-white/85 hover:text-white" : "text-[#3a2a18] hover:text-[#1a1208]"}`
                }
                style={{ fontFamily: "'Jost', sans-serif", fontWeight: 400 }}
              >
                {item.label}
              </NavLink>
            ))}
            <NavLink
              to="/rooms"
              onClick={() => setMenuOpen(false)}
              className={`mt-3 inline-flex w-fit rounded-full px-5 py-2.5 text-xs uppercase tracking-[0.16em] transition-colors ${isLight ? "bg-white text-[#1a1208] hover:bg-white/90" : "bg-[#1a1208] text-white hover:bg-[#2a1f10]"}`}
            >
              Book now
            </NavLink>
          </div>
        </aside>
      </div>
    </>
  );
});

export default HotelNavbar;
