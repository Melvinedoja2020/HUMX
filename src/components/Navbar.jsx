import { useState } from "react";
import { motion } from "framer-motion";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { useBooking } from "../context/BookingContext";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

const navItems = [
  { label: "Home", to: "/" },
  { label: "Suites", to: "/rooms" },
  { label: "Amenities", to: "/#amenities", anchorId: "amenities" },
  { label: "Location", to: "/#location", anchorId: "location" },
  { label: "Contact", to: "/contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const reducedMotion = usePrefersReducedMotion();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { openBooking } = useBooking();

  const scrollToId = (id) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleBookNow = () => {
    if (pathname === "/") {
      scrollToId("booking-section");
      return;
    }

    openBooking({}, true);
  };

  const handleRoomsAnchor = () => {
    if (pathname === "/") {
      scrollToId("featured-rooms");
    } else {
      navigate("/?section=rooms");
    }
  };

  const navigateItem = (item) => {
    setMenuOpen(false);

    if (item.anchorId) {
      if (pathname === "/") {
        scrollToId(item.anchorId);
      } else {
        navigate(item.to);
      }
      return;
    }

    navigate(item.to);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-[var(--color-stroke)] bg-[color-mix(in_oklab,var(--color-bg)_88%,white)]/95 backdrop-blur-xl">
      <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-10">
        <Link to="/" className="text-lg font-semibold tracking-[0.2em] text-[var(--color-ink-900)]">
          GRANDORIA
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => (
            <button
              key={item.label}
              type="button"
              onClick={() => navigateItem(item)}
              className="text-sm font-medium text-[var(--color-ink-700)] transition hover:text-[var(--color-ink-900)]"
            >
              {item.label}
            </button>
          ))}

            <button
              onClick={handleRoomsAnchor}
              className="text-sm font-medium text-[var(--color-ink-700)] transition hover:text-[var(--color-ink-900)]"
            >
              Rooms
            </button>
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <NavLink
            to="/booking/view"
            className="rounded-xl border border-[var(--color-stroke-strong)] px-4 py-2 text-sm font-semibold text-[var(--color-ink-800)]"
          >
            View booking
          </NavLink>
          <motion.button
            type="button"
            onClick={handleBookNow}
            whileHover={reducedMotion ? undefined : { y: -1 }}
            whileTap={reducedMotion ? undefined : { scale: 0.98 }}
            className="rounded-xl bg-[var(--color-ink-900)] px-5 py-2.5 text-sm font-semibold text-white"
          >
            Book Now
          </motion.button>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((value) => !value)}
          className="rounded-lg border border-[var(--color-stroke)] p-2 text-[var(--color-ink-700)] lg:hidden"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-[var(--color-stroke)] bg-[var(--color-bg)] px-4 py-4 lg:hidden">
          <div className="flex flex-col gap-3">
            {navItems.map((item) => (
              <button
                key={item.label}
                type="button"
                onClick={() => navigateItem(item)}
                className="rounded-lg px-3 py-2 text-left text-sm font-medium text-[var(--color-ink-700)] hover:bg-[var(--color-surface)]"
              >
                {item.label}
              </button>
            ))}

            <button
              type="button"
              onClick={handleRoomsAnchor}
              className="rounded-lg px-3 py-2 text-left text-sm font-medium text-[var(--color-ink-700)] hover:bg-[var(--color-surface)]"
            >
              Rooms
            </button>

            <button
              type="button"
              onClick={() => {
                setMenuOpen(false);
                handleBookNow();
              }}
              className="mt-2 rounded-xl bg-[var(--color-ink-900)] px-4 py-3 text-sm font-semibold text-white"
            >
              Book Now
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
