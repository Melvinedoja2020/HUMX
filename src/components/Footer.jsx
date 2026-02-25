import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="mt-16 border-t border-[var(--color-stroke)] bg-[var(--color-surface)]">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-4 lg:px-10">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-ink-600)]">Grandoria Hotel</p>
          <p className="mt-4 text-sm leading-relaxed text-[var(--color-ink-600)]">
            Premium city hospitality with thoughtful service, modern rooms, and a booking flow designed for clarity.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-[var(--color-ink-900)]">Explore</h3>
          <ul className="mt-3 space-y-2 text-sm text-[var(--color-ink-600)]">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/rooms">Rooms</Link></li>
            <li><Link to="/location">Location</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-[var(--color-ink-900)]">Booking</h3>
          <ul className="mt-3 space-y-2 text-sm text-[var(--color-ink-600)]">
            <li><Link to="/booking/view">View bookings</Link></li>
            <li><Link to="/booking/confirmation">Confirmation mock</Link></li>
            <li><Link to="/?booking=open">Book your stay</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-[var(--color-ink-900)]">Contact</h3>
          <p className="mt-3 text-sm text-[var(--color-ink-600)]">789 Madison Street, Chicago, IL</p>
          <p className="mt-1 text-sm text-[var(--color-ink-600)]">+1 (555) 876-5432</p>
          <p className="mt-1 text-sm text-[var(--color-ink-600)]">reservations@grandoria.com</p>
        </div>
      </div>

      <div className="border-t border-[var(--color-stroke)] px-4 py-5 text-center text-xs text-[var(--color-ink-600)] sm:px-6">
        © {new Date().getFullYear()} Grandoria Hotel. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
