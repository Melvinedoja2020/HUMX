export default function RoomCard({ room, onBook }) {
  return (
    <article className="overflow-hidden rounded-[1.6rem] bg-[#fffaf3] shadow-[0_18px_45px_rgba(12,10,7,0.08)]">
      <button type="button" onClick={() => onBook(room.id)} className="group block w-full text-left">
        <div className="h-64 overflow-hidden">
          <img
            src={room.image}
            alt={room.name}
            className="h-full w-full object-cover transition-transform duration-500 motion-reduce:transition-none group-hover:scale-105"
          />
        </div>
        <div className="p-6">
          <div className="flex items-start justify-between gap-4">
            <h3 className="text-3xl font-semibold text-[#161616]">{room.name}</h3>
            <p className="text-sm font-semibold text-[#282828]">${room.price}/night</p>
          </div>
          <p className="mt-3 text-sm leading-relaxed text-[#514e49]">{room.description}</p>
          <p className="mt-4 text-xs uppercase tracking-[0.2em] text-[#7b766f]">
            {room.size} · up to {room.capacity} guests
          </p>
        </div>
      </button>
    </article>
  );
}
