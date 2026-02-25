import { formatMoney } from "../../lib/booking";

const rowClass = "flex items-center justify-between text-sm text-[var(--color-ink-600)]";

export const BookingSummaryCard = ({ selectedRoom, pricing, addOns }) => {
  return (
    <aside className="rounded-2xl border border-[var(--color-stroke)] bg-[var(--color-surface)] p-5 md:p-6 shadow-[var(--shadow-soft)]">
      <h3 className="text-base font-semibold text-[var(--color-ink-900)]">Stay Summary</h3>
      <p className="mt-1 text-sm text-[var(--color-ink-600)]">{selectedRoom.name}</p>

      <div className="mt-5 space-y-3">
        <div className={rowClass}>
          <span>Nights</span>
          <span>{pricing.nights}</span>
        </div>
        <div className={rowClass}>
          <span>Rate per night</span>
          <span>{formatMoney(selectedRoom.price)}</span>
        </div>
        <div className={rowClass}>
          <span>Room subtotal</span>
          <span>{formatMoney(pricing.roomSubtotal)}</span>
        </div>
        <div className={rowClass}>
          <span>Add-ons</span>
          <span>{formatMoney(pricing.addOnSubtotal)}</span>
        </div>
        <div className={rowClass}>
          <span>Taxes and fees</span>
          <span>{formatMoney(pricing.taxesAndFees)}</span>
        </div>
      </div>

      <div className="mt-4 border-t border-[var(--color-stroke)] pt-4 flex items-center justify-between">
        <span className="text-sm font-medium text-[var(--color-ink-800)]">Estimated total</span>
        <strong className="text-xl font-semibold text-[var(--color-ink-900)]">{formatMoney(pricing.total)}</strong>
      </div>

      <ul className="mt-4 text-xs text-[var(--color-ink-500)] space-y-1">
        {addOns.breakfast && <li>Breakfast package included.</li>}
        {addOns.airportPickup && <li>Airport pickup included.</li>}
        <li>Free cancellation up to 48 hours before check-in.</li>
      </ul>
    </aside>
  );
};
