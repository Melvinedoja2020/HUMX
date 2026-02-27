import { Link, NavLink } from "react-router-dom";
import { useBooking } from "../../context/BookingContext";
import { FiMenu, FiX } from "react-icons/fi";
import { useState } from "react";

const navItems = [
  { label: "Home", to: "/" },
  { label: "Rooms", to: "/rooms" },
  { label: "Amenities", to: "#amenities" },
  { label: "Location", to: "#location" },
];

export function StickyNavbar() {
  const { openDrawer } = useBooking();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleBookingClick = () => {
    openDrawer();
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed left-0 right-0 top-0 z-40 h-20 bg-white/88 border-b border-border backdrop-blur-sm">
      <div className="container-custom flex h-full items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="font-manrope font-semibold text-lg tracking-wide text-text-primary"
        >
          GRANDORIA
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-1">
          {navItems.map((item) => (
            <NavLink
              key={item.label}
              to={item.to}
              className={({ isActive }) =>
                `px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
                  isActive
                    ? "bg-light border border-border"
                    : "text-text-secondary hover:text-text-primary"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden md:flex gap-3">
          <button className="btn-sm border border-border bg-white text-text-secondary hover:bg-light">
            View booking
          </button>
          <button onClick={handleBookingClick} className="btn-primary">
            Book Now
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg hover:bg-light transition-colors"
        >
          {mobileMenuOpen ? (
            <FiX className="w-5 h-5 text-text-primary" />
          ) : (
            <FiMenu className="w-5 h-5 text-text-primary" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-white">
          <nav className="container-custom flex flex-col py-4 gap-1">
            {navItems.map((item) => (
              <NavLink
                key={item.label}
                to={item.to}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                    isActive
                      ? "bg-light"
                      : "text-text-secondary hover:text-text-primary"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <div className="flex flex-col gap-2 mt-2 pt-2 border-t border-border">
              <button className="btn-sm w-full border border-border bg-white text-text-secondary hover:bg-light">
                View booking
              </button>
              <button
                onClick={handleBookingClick}
                className="btn-primary w-full"
              >
                Book Now
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
