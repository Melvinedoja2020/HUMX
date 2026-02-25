import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useBooking } from "../../context/BookingContext";
import { usePrefersReducedMotion } from "../../hooks/usePrefersReducedMotion";

export const RoomCard = ({ room, compact = false }) => {
  const reducedMotion = usePrefersReducedMotion();
  const { openBooking } = useBooking();

  return (
    <motion.article
      className="group overflow-hidden rounded-2xl border border-[var(--color-stroke)] bg-[var(--color-surface)] shadow-[var(--shadow-soft)]"
      whileHover={reducedMotion ? undefined : { y: -6 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
    >
      <Link to={`/rooms/${room.slug}`} className="block overflow-hidden">
        <img
          src={room.images[0]}
          alt={room.name}
          className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </Link>

      <div className="space-y-4 p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <Link to={`/rooms/${room.slug}`} className="text-xl font-semibold text-[var(--color-ink-900)] hover:underline">
              {room.name}
            </Link>
            <p className="mt-1 text-sm text-[var(--color-ink-600)]">{room.shortDescription}</p>
          </div>
          <span className="rounded-full bg-[var(--color-accent-muted)] px-3 py-1 text-xs font-semibold text-[var(--color-accent)]">
            {room.rating.toFixed(1)} ★
          </span>
        </div>

        <ul className="flex flex-wrap gap-2">
          {room.amenities.slice(0, compact ? 2 : 3).map((amenity) => (
            <li
              key={`${room.id}-${amenity}`}
              className="rounded-full border border-[var(--color-stroke)] px-3 py-1 text-xs text-[var(--color-ink-600)]"
            >
              {amenity}
            </li>
          ))}
        </ul>

        <div className="flex items-center justify-between border-t border-[var(--color-stroke)] pt-4">
          <p className="text-sm text-[var(--color-ink-600)]">
            From <strong className="text-xl text-[var(--color-ink-900)]">${room.price}</strong> / night
          </p>

          <button
            type="button"
            onClick={() => openBooking({ roomSlug: room.slug }, true)}
            className="rounded-xl bg-[var(--color-ink-900)] px-4 py-2 text-sm font-semibold text-white transition hover:bg-black"
          >
            View & Book
          </button>
        </div>
      </div>
    </motion.article>
  );
};
