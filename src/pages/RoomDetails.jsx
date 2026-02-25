import { Link, Navigate, useParams } from "react-router-dom";
import { Reveal } from "../components/ui/Reveal";
import { getRoomBySlug } from "../data/rooms";
import { useBooking } from "../context/BookingContext";

const RoomDetails = () => {
  const { slug } = useParams();
  const room = getRoomBySlug(slug);
  const { openBooking } = useBooking();

  if (!room) return <Navigate to="/rooms" replace />;

  return (
    <main className="mx-auto w-full max-w-7xl px-4 pb-16 pt-28 sm:px-6 lg:px-10">
      <Reveal className="grid gap-8 lg:grid-cols-[1.2fr_1fr]">
        <div>
          <img src={room.images[0]} alt={room.name} className="h-[380px] w-full rounded-2xl object-cover" />
          <div className="mt-4 grid grid-cols-2 gap-4">
            {room.images.slice(1).map((image, index) => (
              <img
                key={`${room.id}-${index}`}
                src={image}
                alt={`${room.name} preview ${index + 2}`}
                className="h-44 w-full rounded-2xl object-cover"
              />
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-[var(--color-stroke)] bg-[var(--color-surface)] p-6 shadow-[var(--shadow-soft)]">
          <p className="section-kicker">Room Details</p>
          <h1 className="mt-2 text-3xl font-semibold text-[var(--color-ink-900)]">{room.name}</h1>
          <p className="mt-4 text-sm leading-relaxed text-[var(--color-ink-600)]">{room.description}</p>

          <dl className="mt-5 grid grid-cols-2 gap-4 text-sm">
            <div className="rounded-xl border border-[var(--color-stroke)] p-3">
              <dt className="text-[var(--color-ink-600)]">Capacity</dt>
              <dd className="mt-1 font-semibold text-[var(--color-ink-900)]">{room.capacity} guests</dd>
            </div>
            <div className="rounded-xl border border-[var(--color-stroke)] p-3">
              <dt className="text-[var(--color-ink-600)]">Size</dt>
              <dd className="mt-1 font-semibold text-[var(--color-ink-900)]">{room.size}</dd>
            </div>
            <div className="rounded-xl border border-[var(--color-stroke)] p-3">
              <dt className="text-[var(--color-ink-600)]">Rating</dt>
              <dd className="mt-1 font-semibold text-[var(--color-ink-900)]">{room.rating} / 5</dd>
            </div>
            <div className="rounded-xl border border-[var(--color-stroke)] p-3">
              <dt className="text-[var(--color-ink-600)]">Price</dt>
              <dd className="mt-1 font-semibold text-[var(--color-ink-900)]">${room.price}/night</dd>
            </div>
          </dl>

          <ul className="mt-5 flex flex-wrap gap-2">
            {room.amenities.map((amenity) => (
              <li key={amenity} className="rounded-full border border-[var(--color-stroke)] px-3 py-1 text-xs text-[var(--color-ink-700)]">
                {amenity}
              </li>
            ))}
          </ul>

          <div className="mt-7 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => openBooking({ roomSlug: room.slug }, true)}
              className="rounded-xl bg-[var(--color-ink-900)] px-5 py-3 text-sm font-semibold text-white transition hover:bg-black"
            >
              View & Book
            </button>
            <Link
              to={`/?booking=open&room=${room.slug}`}
              className="rounded-xl border border-[var(--color-stroke-strong)] px-5 py-3 text-sm font-semibold text-[var(--color-ink-800)]"
            >
              Book on homepage
            </Link>
          </div>
        </div>
      </Reveal>
    </main>
  );
};

export default RoomDetails;
