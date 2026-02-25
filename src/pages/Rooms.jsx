import { useMemo, useState } from "react";
import { rooms } from "../data/rooms";
import { Reveal } from "../components/ui/Reveal";
import { RoomCard } from "../components/sections/RoomCard";

const Rooms = () => {
  const [maxPrice, setMaxPrice] = useState(500);
  const [capacity, setCapacity] = useState("all");

  const filteredRooms = useMemo(() => {
    return rooms.filter((room) => {
      const withinPrice = room.price <= maxPrice;
      const capacityPass = capacity === "all" ? true : room.capacity >= Number(capacity);
      return withinPrice && capacityPass;
    });
  }, [capacity, maxPrice]);

  return (
    <main className="mx-auto w-full max-w-7xl px-4 pb-16 pt-28 sm:px-6 lg:px-10">
      <Reveal>
        <p className="section-kicker">Rooms</p>
        <h1 className="section-title">Find the room profile that fits your trip.</h1>
      </Reveal>

      <Reveal className="mt-7 grid gap-4 rounded-2xl border border-[var(--color-stroke)] bg-[var(--color-surface)] p-5 shadow-[var(--shadow-soft)] sm:grid-cols-2">
        <label className="space-y-2 text-sm text-[var(--color-ink-700)]">
          <span>Max budget per night: ${maxPrice}</span>
          <input
            type="range"
            min={180}
            max={520}
            step={10}
            value={maxPrice}
            onChange={(event) => setMaxPrice(Number(event.target.value))}
            className="w-full accent-[var(--color-accent)]"
          />
        </label>

        <label className="space-y-2 text-sm text-[var(--color-ink-700)]">
          <span>Guest capacity</span>
          <select
            value={capacity}
            onChange={(event) => setCapacity(event.target.value)}
            className="w-full rounded-xl border border-[var(--color-stroke)] bg-white px-4 py-3 outline-none focus:border-[var(--color-accent)]"
          >
            <option value="all">Any capacity</option>
            <option value="2">2+ guests</option>
            <option value="3">3+ guests</option>
            <option value="4">4+ guests</option>
          </select>
        </label>
      </Reveal>

      <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {filteredRooms.map((room, index) => (
          <Reveal key={room.id} delay={index * 0.06}>
            <RoomCard room={room} />
          </Reveal>
        ))}
      </div>

      {filteredRooms.length === 0 && (
        <p className="mt-10 rounded-xl border border-[var(--color-stroke)] bg-[var(--color-surface)] p-6 text-sm text-[var(--color-ink-600)]">
          No room matched your filters. Increase the price cap or reduce required capacity.
        </p>
      )}
    </main>
  );
};

export default Rooms;
