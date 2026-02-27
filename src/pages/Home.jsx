import heroImage from "../assets/img1.webp";
import aboutImage from "../assets/Gallery11.webp";
import Navbar from "../components/Navbar";
import RoomCard from "../components/RoomCard";
import BookingModal from "../components/BookingModal";
import { rooms } from "../data/rooms";
import { useBooking } from "../context/BookingContext";

export default function HomePage() {
  const { openBooking } = useBooking();

  return (
    <div id="top" className="min-h-screen bg-[#f7f2ea] text-[#151515]">
      <Navbar onBookNow={() => openBooking()} />

      <main>
        <section className="relative flex min-h-[100svh] items-end overflow-hidden pt-20">
          <img
            src={heroImage}
            alt="Luxury hotel suite"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/50 to-black/72" />

          <div className="relative mx-auto w-full max-w-7xl px-5 pb-16 pt-24 md:px-8 md:pb-24">
            <div className="max-w-3xl rounded-[2rem] bg-black/35 p-8 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-[2px] md:p-12">
              <p className="text-xs uppercase tracking-[0.28em] text-[#f5f0e8]/85">Lodr Hotel</p>
              <h1 className="mt-5 text-4xl font-semibold leading-tight text-[#f5f0e8] md:text-6xl">
                Quiet luxury in the heart of the city.
              </h1>
              <p className="mt-5 max-w-2xl text-base text-[#f5f0e8]/85 md:text-lg">
                Thoughtful suites, refined dining, and calm spaces designed for deep rest.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={() => openBooking()}
                  className="rounded-full bg-[#f5f0e8] px-6 py-3 text-sm font-semibold text-[#111111] shadow-[0_16px_34px_rgba(0,0,0,0.3)] transition-transform duration-300 motion-reduce:transition-none hover:-translate-y-0.5"
                >
                  Book your stay
                </button>
                <a
                  href="#rooms"
                  className="rounded-full border border-[#f5f0e8]/55 px-6 py-3 text-sm font-semibold text-[#f5f0e8] transition-colors duration-300 hover:bg-[#f5f0e8]/10"
                >
                  Explore rooms
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="rooms" className="mx-auto max-w-7xl px-5 py-20 md:px-8">
          <p className="text-xs uppercase tracking-[0.24em] text-[#7d776f]">Featured rooms</p>
          <h2 className="mt-3 text-5xl font-semibold text-[#171717]">Stay categories</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {rooms.map((room) => (
              <RoomCard key={room.id} room={room} onBook={(roomId) => openBooking({ roomId })} />
            ))}
          </div>
        </section>

        <section id="experience" className="mx-auto max-w-7xl px-5 pb-20 md:px-8">
          <div className="grid items-center gap-8 rounded-[2rem] bg-[#fffaf3] p-5 shadow-[0_20px_45px_rgba(15,10,5,0.06)] md:grid-cols-2 md:p-8">
            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-[#7d776f]">About the experience</p>
              <h2 className="mt-3 text-5xl font-semibold text-[#171717]">Designed with intention.</h2>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-[#4f4a43]">
                Warm textures, soft light, and discreet hospitality shape every floor. LODR is crafted
                for guests who appreciate privacy, detail, and timeless comfort.
              </p>
            </div>
            <div className="overflow-hidden rounded-[1.6rem]">
              <img src={aboutImage} alt="Hotel lobby interior" className="h-[360px] w-full object-cover" />
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 pb-20 md:px-8">
          <div className="rounded-[2rem] bg-[#111111] p-8 text-[#f5f0e8] md:flex md:items-center md:justify-between md:px-12 md:py-10">
            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-[#f5f0e8]/70">Reservations</p>
              <h2 className="mt-3 text-4xl font-semibold">Ready to reserve your suite?</h2>
            </div>
            <button
              type="button"
              onClick={() => openBooking()}
              className="mt-6 rounded-full bg-[#f5f0e8] px-7 py-3 text-sm font-semibold text-[#111111] transition-transform duration-300 motion-reduce:transition-none md:mt-0 hover:-translate-y-0.5"
            >
              Book now
            </button>
          </div>
        </section>
      </main>

      <footer id="footer" className="border-t border-black/10 px-5 py-8 text-sm text-[#59544d] md:px-8">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <p className="font-semibold tracking-[0.2em] text-[#1b1b1b]">LODR</p>
          <p>22 Langford Avenue, New York, NY · +1 (212) 555-0191 · concierge@lodrhotel.com</p>
        </div>
      </footer>

      <BookingModal />
    </div>
  );
}
