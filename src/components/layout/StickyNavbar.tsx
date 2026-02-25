import { Link, NavLink, useLocation } from "react-router-dom";
import { useBooking } from "../../context/BookingContext";
import { FiMenu, FiX } from "react-icons/fi";
import { useState } from "react";

const navItems = [
  { label: "Home", to: "/" },
  { label: "Rooms", to: "/rooms" },
  { label: "Bookings", to: "/bookings" },
];

const darkRoutes = new Set(["/"]);

export function StickyNavbar() {
  const location = useLocation();
  const { openDrawer } = useBooking();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isDark = darkRoutes.has(location.pathname);

  const wrapperClass = isDark
    ? "bg-black/40 text-white border-white/10 backdrop-blur-xl"
    : "bg-white/95 text-[#1a1a1a] border-[#e0e0e0] backdrop-blur-xl";

  const centerPillClass = isDark
    ? "bg-white/15 border border-white/20 text-white"
    : "bg-[#f5f5f5] border border-[#e0e0e0] text-[#1a1a1a]";

  const ctaClass = isDark
    ? "bg-[#d4af37] text-[#1a1a1a] hover:bg-[#d4af37]/90 font-semibold"
    : "bg-[#1a1a1a] text-white hover:bg-[#1a1a1a]/90 font-semibold";

  const handleBookingClick = () => {
    openDrawer();
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 border-b ${wrapperClass}`}
    >
      <div className="container-custom flex h-[70px] md:h-[80px] w-full items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="inline-flex min-w-[100px] items-center gap-2 font-manrope font-bold text-[18px] md:text-[20px]"
        >
          <span className="text-[20px] md:text-[24px]">✺</span>
          <span>Grandoria</span>
        </Link>

        {/* Desktop Navigation */}
        <nav
          className={`hidden md:flex h-[50px] items-center rounded-full px-8 gap-1 ${centerPillClass}`}
        >
          {navItems.map((item) => (
            <NavLink
              key={item.label}
              to={item.to}
              className={({ isActive }) =>
                `px-4 py-2 text-[14px] font-medium transition-all duration-200 rounded-full ${
                  isActive
                    ? `${
                        isDark
                          ? "bg-white/20"
                          : "bg-white border border-[#d4af37]"
                      }`
                    : `opacity-80 hover:opacity-100`
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Desktop CTA */}
        <button
          onClick={handleBookingClick}
          className={`hidden md:block h-[46px] px-6 rounded-full text-[13px] font-semibold transition-all duration-200 ${ctaClass}`}
        >
          Book your stay
        </button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={`md:hidden p-2 rounded-lg transition-colors ${
            isDark ? "hover:bg-white/10" : "hover:bg-[#f5f5f5]"
          }`}
        >
          {mobileMenuOpen ? (
            <FiX className="w-6 h-6" />
          ) : (
            <FiMenu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div
          className={`md:hidden border-t ${isDark ? "bg-black/60" : "bg-white/90"}`}
        >
          <nav className="container-custom flex flex-col py-4 gap-2">
            {navItems.map((item) => (
              <NavLink
                key={item.label}
                to={item.to}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `px-4 py-3 text-[14px] font-medium rounded-lg transition-colors ${
                    isActive ? (isDark ? "bg-white/10" : "bg-[#f5f5f5]") : ""
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <button
              onClick={handleBookingClick}
              className={`w-full mt-2 px-4 py-3 rounded-lg text-[14px] font-semibold transition-colors ${ctaClass}`}
            >
              Book your stay
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
