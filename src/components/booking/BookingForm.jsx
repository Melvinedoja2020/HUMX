import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { rooms } from "../../data/rooms";
import { countNights } from "../../lib/booking";
import { useBooking } from "../../context/BookingContext";
import { BookingSummaryCard } from "./BookingSummaryCard";

const hotels = ["Grandoria Hotel", "Grandoria Harbor Annex"];

const fieldClass =
  "w-full rounded-xl border border-[var(--color-stroke)] bg-white px-4 py-3 text-sm text-[var(--color-ink-900)] outline-none transition focus:border-[var(--color-accent)] focus:ring-2 focus:ring-[var(--color-accent-muted)]";

export const BookingForm = ({ mode = "section", onCompleted }) => {
  const navigate = useNavigate();
  const { draft, selectedRoom, pricing, updateDraft, submitBooking } = useBooking();
  const [errors, setErrors] = useState({});

  // Keep validation local so the global draft remains reusable by section + drawer UIs.
  const validate = () => {
    const nextErrors = {};

    if (!draft.hotel) nextErrors.hotel = "Select a hotel.";
    if (!draft.checkIn) nextErrors.checkIn = "Choose check-in date.";
    if (!draft.checkOut) nextErrors.checkOut = "Choose check-out date.";

    const nights = countNights(draft.checkIn, draft.checkOut);
    if (draft.checkIn && draft.checkOut && nights <= 0) {
      nextErrors.checkOut = "Check-out must be after check-in.";
    }

    if (!draft.roomSlug) nextErrors.roomSlug = "Select a room type.";
    if (draft.adults < 1) nextErrors.adults = "At least one adult is required.";

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const canSubmit = useMemo(
    () => pricing.nights > 0 && draft.roomSlug && draft.checkIn && draft.checkOut,
    [draft.checkIn, draft.checkOut, draft.roomSlug, pricing.nights]
  );

  const onSubmit = (event) => {
    event.preventDefault();
    if (!validate()) return;

    const booking = submitBooking();
    if (onCompleted) onCompleted(booking);
    navigate(`/booking/confirmation?ref=${booking.reference}`);
  };

  return (
    <form onSubmit={onSubmit} className={mode === "drawer" ? "space-y-6" : "grid gap-7 lg:grid-cols-[1.35fr_1fr]"}>
      <div className="space-y-5 rounded-2xl border border-[var(--color-stroke)] bg-[var(--color-surface)] p-5 md:p-6 shadow-[var(--shadow-soft)]">
        <h3 className="text-lg font-semibold text-[var(--color-ink-900)]">Book your stay</h3>

        <div className="grid gap-4 sm:grid-cols-2">
          <label className="space-y-2 text-sm text-[var(--color-ink-700)]">
            <span>Location / Hotel</span>
            <select
              value={draft.hotel}
              onChange={(event) => updateDraft({ hotel: event.target.value })}
              className={fieldClass}
            >
              {hotels.map((hotel) => (
                <option key={hotel} value={hotel}>
                  {hotel}
                </option>
              ))}
            </select>
            {errors.hotel && <span className="text-xs text-[var(--color-danger)]">{errors.hotel}</span>}
          </label>

          <label className="space-y-2 text-sm text-[var(--color-ink-700)]">
            <span>Room type</span>
            <select
              value={draft.roomSlug}
              onChange={(event) => updateDraft({ roomSlug: event.target.value })}
              className={fieldClass}
            >
              {rooms.map((room) => (
                <option key={room.id} value={room.slug}>
                  {room.name}
                </option>
              ))}
            </select>
            {errors.roomSlug && <span className="text-xs text-[var(--color-danger)]">{errors.roomSlug}</span>}
          </label>

          <label className="space-y-2 text-sm text-[var(--color-ink-700)]">
            <span>Check-in</span>
            <input
              value={draft.checkIn}
              onChange={(event) => updateDraft({ checkIn: event.target.value })}
              min={new Date().toISOString().split("T")[0]}
              type="date"
              className={fieldClass}
            />
            {errors.checkIn && <span className="text-xs text-[var(--color-danger)]">{errors.checkIn}</span>}
          </label>

          <label className="space-y-2 text-sm text-[var(--color-ink-700)]">
            <span>Check-out</span>
            <input
              value={draft.checkOut}
              onChange={(event) => updateDraft({ checkOut: event.target.value })}
              min={draft.checkIn || new Date().toISOString().split("T")[0]}
              type="date"
              className={fieldClass}
            />
            {errors.checkOut && <span className="text-xs text-[var(--color-danger)]">{errors.checkOut}</span>}
          </label>

          <label className="space-y-2 text-sm text-[var(--color-ink-700)]">
            <span>Adults</span>
            <input
              value={draft.adults}
              onChange={(event) => updateDraft({ adults: Number(event.target.value) })}
              min={1}
              max={8}
              type="number"
              className={fieldClass}
            />
            {errors.adults && <span className="text-xs text-[var(--color-danger)]">{errors.adults}</span>}
          </label>

          <label className="space-y-2 text-sm text-[var(--color-ink-700)]">
            <span>Children</span>
            <input
              value={draft.children}
              onChange={(event) => updateDraft({ children: Number(event.target.value) })}
              min={0}
              max={6}
              type="number"
              className={fieldClass}
            />
          </label>
        </div>

        <div className="space-y-3">
          <p className="text-sm font-medium text-[var(--color-ink-800)]">Add-ons</p>

          <label className="flex items-center justify-between rounded-xl border border-[var(--color-stroke)] px-4 py-3 text-sm">
            <span>Breakfast package</span>
            <input
              checked={draft.addOns.breakfast}
              onChange={(event) =>
                updateDraft({ addOns: { breakfast: event.target.checked } })
              }
              type="checkbox"
              className="h-4 w-4 accent-[var(--color-accent)]"
            />
          </label>

          <label className="flex items-center justify-between rounded-xl border border-[var(--color-stroke)] px-4 py-3 text-sm">
            <span>Airport pickup</span>
            <input
              checked={draft.addOns.airportPickup}
              onChange={(event) =>
                updateDraft({ addOns: { airportPickup: event.target.checked } })
              }
              type="checkbox"
              className="h-4 w-4 accent-[var(--color-accent)]"
            />
          </label>
        </div>

        <div className="flex items-center justify-between gap-3 border-t border-[var(--color-stroke)] pt-4">
          <p className="text-xs text-[var(--color-ink-500)]">All rates are mock values for prototype flows.</p>
          <button
            type="submit"
            disabled={!canSubmit}
            className="inline-flex items-center justify-center rounded-xl bg-[var(--color-ink-900)] px-5 py-3 text-sm font-semibold text-white transition hover:bg-black disabled:cursor-not-allowed disabled:opacity-50"
          >
            Confirm booking
          </button>
        </div>
      </div>

      <BookingSummaryCard selectedRoom={selectedRoom} pricing={pricing} addOns={draft.addOns} />
    </form>
  );
};
