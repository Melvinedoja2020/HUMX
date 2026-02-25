import { Link } from "react-router-dom";
import { useBooking } from "../context/BookingContext";
import { formatMoney } from "../lib/booking";

const ViewBookings = () => {
  const { bookings } = useBooking();
  const recent = bookings.slice(0, 3);

  return (
    <main className="mx-auto min-h-[60vh] w-full max-w-5xl px-4 pb-16 pt-28 sm:px-6 lg:px-10">
      <p className="section-kicker">Recent Bookings</p>
      <h1 className="section-title">Last 3 reservations</h1>

      {recent.length === 0 ? (
        <div className="mt-6 rounded-2xl border border-[var(--color-stroke)] bg-[var(--color-surface)] p-6">
          <p className="text-sm text-[var(--color-ink-600)]">No bookings found yet.</p>
          <Link to="/" className="mt-4 inline-block rounded-xl bg-[var(--color-ink-900)] px-5 py-3 text-sm font-semibold text-white">
            Start booking
          </Link>
        </div>
      ) : (
        <div className="mt-6 grid gap-4">
          {recent.map((booking) => (
            <article key={booking.reference} className="rounded-2xl border border-[var(--color-stroke)] bg-[var(--color-surface)] p-5 shadow-[var(--shadow-soft)]">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <p className="text-xs uppercase tracking-[0.14em] text-[var(--color-ink-600)]">{booking.reference}</p>
                  <h2 className="mt-1 text-lg font-semibold text-[var(--color-ink-900)]">{booking.roomName}</h2>
                  <p className="mt-1 text-sm text-[var(--color-ink-600)]">{booking.checkIn} to {booking.checkOut}</p>
                </div>
                <p className="text-lg font-semibold text-[var(--color-ink-900)]">{formatMoney(booking.pricing.total)}</p>
              </div>
            </article>
          ))}
        </div>
      )}
    </main>
  );
};

export default ViewBookings;
