import { Link, useSearchParams } from "react-router-dom";
import { useBooking } from "../context/BookingContext";
import { formatMoney } from "../lib/booking";

const BookingConfirmation = () => {
  const [searchParams] = useSearchParams();
  const { bookings, lastBooking } = useBooking();
  const reference = searchParams.get("ref");

  const booking = bookings.find((item) => item.reference === reference) ?? lastBooking;

  if (!booking) {
    return (
      <main className="mx-auto min-h-[60vh] w-full max-w-3xl px-4 pt-28 sm:px-6">
        <div className="rounded-2xl border border-[var(--color-stroke)] bg-[var(--color-surface)] p-8 text-center">
          <h1 className="text-2xl font-semibold text-[var(--color-ink-900)]">No recent booking found</h1>
          <p className="mt-3 text-sm text-[var(--color-ink-600)]">Create a booking first to view a confirmation mock.</p>
          <Link to="/" className="mt-5 inline-block rounded-xl bg-[var(--color-ink-900)] px-5 py-3 text-sm font-semibold text-white">
            Back to homepage
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="mx-auto min-h-[60vh] w-full max-w-3xl px-4 pb-16 pt-28 sm:px-6">
      <div className="rounded-2xl border border-[var(--color-stroke)] bg-[var(--color-surface)] p-7 shadow-[var(--shadow-soft)]">
        <p className="section-kicker">Booking Confirmed</p>
        <h1 className="mt-2 text-3xl font-semibold text-[var(--color-ink-900)]">Your stay is reserved.</h1>

        <div className="mt-6 grid gap-4 rounded-xl border border-[var(--color-stroke)] p-5 text-sm">
          <p><span className="text-[var(--color-ink-600)]">Reference:</span> <strong>{booking.reference}</strong></p>
          <p><span className="text-[var(--color-ink-600)]">Room:</span> {booking.roomName}</p>
          <p><span className="text-[var(--color-ink-600)]">Dates:</span> {booking.checkIn} to {booking.checkOut}</p>
          <p><span className="text-[var(--color-ink-600)]">Guests:</span> {booking.guests.adults} adults, {booking.guests.children} children</p>
          <p><span className="text-[var(--color-ink-600)]">Total:</span> {formatMoney(booking.pricing.total)}</p>
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link to="/booking/view" className="rounded-xl bg-[var(--color-ink-900)] px-5 py-3 text-sm font-semibold text-white">
            View bookings
          </Link>
          <Link to="/rooms" className="rounded-xl border border-[var(--color-stroke-strong)] px-5 py-3 text-sm font-semibold text-[var(--color-ink-800)]">
            Browse more rooms
          </Link>
        </div>
      </div>
    </main>
  );
};

export default BookingConfirmation;
