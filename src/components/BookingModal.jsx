import { rooms } from "../data/rooms";
import { useBooking } from "../context/BookingContext";

export default function BookingModal() {
  const {
    isOpen,
    closeBooking,
    form,
    updateField,
    submitBooking,
    confirmation,
    summary,
    clearConfirmation,
  } = useBooking();

  if (!isOpen) return null;

  const handleSubmit = (event) => {
    event.preventDefault();
    submitBooking();
  };

  return (
    <div className="fixed inset-0 z-[60] bg-black/45">
      <button
        type="button"
        aria-label="Close booking"
        className="absolute inset-0 h-full w-full cursor-default"
        onClick={closeBooking}
      />

      <aside className="absolute right-0 top-0 h-full w-full max-w-2xl overflow-y-auto bg-[#fbf7f0] p-6 shadow-[0_24px_70px_rgba(0,0,0,0.35)] transition-transform duration-300 motion-reduce:transition-none md:p-8">
        <div className="flex items-center justify-between">
          <h2 className="text-4xl font-semibold text-[#111111]">Book your stay</h2>
          <button
            type="button"
            onClick={closeBooking}
            className="rounded-full border border-black/15 px-4 py-2 text-sm font-medium text-[#222222]"
          >
            Close
          </button>
        </div>

        {confirmation ? (
          <div className="mt-8 rounded-[1.5rem] bg-[#121212] p-7 text-[#f7f2ea]">
            <p className="text-xs uppercase tracking-[0.22em] text-[#f7f2ea]/75">Reservation confirmed</p>
            <p className="mt-4 text-2xl font-semibold">Reference: {confirmation.reference}</p>
            <p className="mt-3 text-sm text-[#f7f2ea]/85">
              A confirmation has been prepared for {confirmation.email}. Your booking is now saved.
            </p>
            <button
              type="button"
              onClick={() => {
                clearConfirmation();
                closeBooking();
              }}
              className="mt-6 rounded-full bg-[#f7f2ea] px-6 py-3 text-sm font-semibold text-[#111111]"
            >
              Done
            </button>
          </div>
        ) : (
          <form className="mt-8 grid gap-6 md:grid-cols-[1.1fr_0.9fr]" onSubmit={handleSubmit}>
            <div className="space-y-4">
              <label className="block">
                <span className="mb-2 block text-xs uppercase tracking-[0.18em] text-[#6a655e]">Full name</span>
                <input
                  required
                  value={form.name}
                  onChange={(event) => updateField("name", event.target.value)}
                  className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm outline-none focus:border-black/35"
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-xs uppercase tracking-[0.18em] text-[#6a655e]">Email</span>
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(event) => updateField("email", event.target.value)}
                  className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm outline-none focus:border-black/35"
                />
              </label>

              <div className="grid grid-cols-2 gap-3">
                <label className="block">
                  <span className="mb-2 block text-xs uppercase tracking-[0.18em] text-[#6a655e]">Check-in</span>
                  <input
                    required
                    type="date"
                    value={form.checkIn}
                    onChange={(event) => updateField("checkIn", event.target.value)}
                    className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm outline-none focus:border-black/35"
                  />
                </label>
                <label className="block">
                  <span className="mb-2 block text-xs uppercase tracking-[0.18em] text-[#6a655e]">Check-out</span>
                  <input
                    required
                    type="date"
                    value={form.checkOut}
                    onChange={(event) => updateField("checkOut", event.target.value)}
                    className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm outline-none focus:border-black/35"
                  />
                </label>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <label className="block">
                  <span className="mb-2 block text-xs uppercase tracking-[0.18em] text-[#6a655e]">Guests</span>
                  <select
                    value={form.guests}
                    onChange={(event) => updateField("guests", Number(event.target.value))}
                    className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm outline-none focus:border-black/35"
                  >
                    {[1, 2, 3, 4, 5, 6].map((count) => (
                      <option key={count} value={count}>
                        {count}
                      </option>
                    ))}
                  </select>
                </label>

                <label className="block">
                  <span className="mb-2 block text-xs uppercase tracking-[0.18em] text-[#6a655e]">Room</span>
                  <select
                    value={form.roomId}
                    onChange={(event) => updateField("roomId", event.target.value)}
                    className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm outline-none focus:border-black/35"
                  >
                    {rooms.map((room) => (
                      <option key={room.id} value={room.id}>
                        {room.name}
                      </option>
                    ))}
                  </select>
                </label>
              </div>
            </div>

            <div className="rounded-[1.4rem] bg-[#121212] p-5 text-[#f5f0e8]">
              <p className="text-xs uppercase tracking-[0.2em] text-[#f5f0e8]/75">Price summary</p>
              <div className="mt-4 space-y-2 text-sm">
                <div className="flex items-center justify-between">
                  <span>Room rate</span>
                  <span>${summary.roomRate}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Nights</span>
                  <span>{summary.nights}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Room total</span>
                  <span>${summary.roomTotal}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Service fee</span>
                  <span>${summary.serviceFee}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Taxes</span>
                  <span>${summary.taxes}</span>
                </div>
              </div>
              <div className="mt-5 border-t border-white/15 pt-4">
                <div className="flex items-center justify-between text-lg font-semibold">
                  <span>Total</span>
                  <span>${summary.total}</span>
                </div>
              </div>
              <button
                type="submit"
                className="mt-5 w-full rounded-full bg-[#f5f0e8] px-6 py-3 text-sm font-semibold text-[#111111]"
              >
                Confirm booking
              </button>
            </div>
          </form>
        )}
      </aside>
    </div>
  );
}
