import { Link, useLocation, useNavigate } from "react-router-dom";

const GOLD = "#C9A96E";
const CREAM = "#F5EFE6";

export default function HotelFooter() {
  const navigate = useNavigate();
  const location = useLocation();

  const goToSection = (sectionId) => {
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
    <footer id="contact">
      <div className="relative" style={{ height: 220, overflow: "hidden" }}>
        <img
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920&q=60"
          alt="Beach footer"
          className="w-full h-full object-cover object-top"
          style={{ filter: "brightness(0.55)" }}
        />
        <div className="absolute inset-0 flex items-center px-16">
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(48px, 7vw, 96px)", fontWeight: 400, color: GOLD, letterSpacing: "-0.02em" }}>
            <span style={{ fontWeight: 300 }}>Hotel</span>Beach.
          </h2>
        </div>
        <Link
          to="/booking"
          className="absolute flex items-center justify-center rounded-full cursor-pointer hover:scale-105 transition-transform"
          style={{ width: 130, height: 130, top: "50%", right: 80, transform: "translateY(-50%)", background: "rgba(210,195,155,0.92)", fontFamily: "'Cormorant Garamond', serif", fontSize: 16, fontWeight: 500, color: "#2a2015", lineHeight: 1.3, textAlign: "center" }}
        >
          Book Your
          <br />
          Stay
        </Link>
      </div>

      <div className="grid grid-cols-2" style={{ background: CREAM }}>
        <div className="px-16 py-14 border-r border-stone-200">
          <div className="grid grid-cols-2 gap-8">
            <div>
              <p className="text-xs mb-5 tracking-wider uppercase" style={{ color: "#a89070", fontWeight: 400 }}>Pages</p>
              <Link to="/" className="block mb-3 text-sm hover:underline" style={{ color: "#3a2a18", fontWeight: 300 }}>Home</Link>
              <Link to="/rooms" className="block mb-3 text-sm hover:underline" style={{ color: "#3a2a18", fontWeight: 300 }}>Rooms</Link>
              <button type="button" onClick={() => goToSection("activities")} className="block mb-3 text-sm hover:underline" style={{ color: "#3a2a18", fontWeight: 300 }}>
                Services
              </button>
              <button type="button" onClick={() => goToSection("contact")} className="block mb-3 text-sm hover:underline" style={{ color: "#3a2a18", fontWeight: 300 }}>
                Contact
              </button>
            </div>
            <div>
              <p className="text-xs mb-5 tracking-wider uppercase" style={{ color: "#a89070", fontWeight: 400 }}>Explore</p>
              <button type="button" onClick={() => goToSection("activities")} className="block mb-3 text-sm hover:underline" style={{ color: "#3a2a18", fontWeight: 300 }}>
                Our Hotel
              </button>
              <Link to="/booking/view" className="block mb-3 text-sm hover:underline" style={{ color: "#3a2a18", fontWeight: 300 }}>Bookings</Link>
              <Link to="/booking" className="block mb-3 text-sm hover:underline" style={{ color: "#3a2a18", fontWeight: 300 }}>Reservations</Link>
            </div>
          </div>
        </div>

        <div className="bg-white px-16 py-14">
          <div className="grid grid-cols-2 gap-10">
            <div>
              <p className="text-xs mb-3 tracking-wider uppercase" style={{ color: "#a89070", fontWeight: 400 }}>Email</p>
              <p className="text-sm mb-8" style={{ color: "#2a1f10", fontWeight: 400 }}>info@hotelbeach.com</p>
              <p className="text-xs mb-3 tracking-wider uppercase" style={{ color: "#a89070", fontWeight: 400 }}>Phone</p>
              <p className="text-sm" style={{ color: "#2a1f10", fontWeight: 400 }}>(603) 555-0123</p>
            </div>
            <div>
              <p className="text-xs mb-3 tracking-wider uppercase" style={{ color: "#a89070", fontWeight: 400 }}>Address</p>
              <p className="text-sm leading-relaxed" style={{ color: "#2a1f10", fontWeight: 400 }}>
                3891 Ranchview Dr.
                <br />
                Richardson, California
                <br />
                62639
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white flex items-center justify-between px-16 py-5 border-t border-stone-100">
        <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 18, fontWeight: 400, color: "#2a1f10" }}>
          <span style={{ fontWeight: 300 }}>Hotel</span>Beach.
        </p>
        <div className="flex items-center gap-8 text-sm" style={{ color: "#5a4a35", fontWeight: 300 }}>
          {["X", "Instagram", "Facebook"].map((social) => (
            <a key={social} href="#" className="hover:underline">{social}</a>
          ))}
        </div>
      </div>
    </footer>
  );
}
