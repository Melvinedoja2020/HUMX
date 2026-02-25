import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { featuredRooms } from "../../data/rooms";
import { useBooking } from "../../context/BookingContext";
import { Reveal } from "../ui/Reveal";
import { RoomCard } from "./RoomCard";
import { BookingForm } from "../booking/BookingForm";
import galleryMap from "../../assets/Gallery11.webp";

const amenities = [
  { title: "Wellness Spa", copy: "Restorative treatments, thermal rooms, and guided recovery sessions." },
  { title: "Chef-led Dining", copy: "Seasonal menus with local produce and private tasting options." },
  { title: "Concierge Service", copy: "24/7 guest support for transport, reservations, and local itineraries." },
  { title: "Business Lounge", copy: "Quiet work suites, private calls, and premium high-speed connectivity." },
];

const testimonials = [
  { name: "Elena M.", quote: "The booking experience was seamless, and every detail of the stay felt intentional." },
  { name: "Marcus T.", quote: "Clean design, calm rooms, and exceptional service without unnecessary formality." },
  { name: "Priya R.", quote: "Best city hotel experience this year. The room quality and staff were consistently excellent." },
];

export const HeroSection = () => {
  const { openBooking } = useBooking();

  return (
    <section className="relative overflow-hidden px-4 pb-20 pt-28 sm:px-6 lg:px-10">
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_top_right,#d9ddd6_0%,#f5f4f0_38%,#eeede7_100%)]" />
      <div className="absolute -right-24 top-20 -z-10 h-72 w-72 rounded-full bg-[var(--color-accent-muted)] blur-3xl" />

      <div className="mx-auto grid w-full max-w-7xl items-end gap-10 lg:grid-cols-[1.2fr_1fr]">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[var(--color-ink-600)]">Grandoria Hotel</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight text-[var(--color-ink-900)] sm:text-5xl lg:text-6xl">
            Refined city stays with effortless booking.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-[var(--color-ink-600)] sm:text-lg">
            A premium, modern hotel experience designed around calm interiors, reliable service, and a booking flow that stays out of your way.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <button
              onClick={() => openBooking({}, true)}
              className="rounded-xl bg-[var(--color-ink-900)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-black"
            >
              Book now
            </button>
            <Link
              to="/rooms"
              className="rounded-xl border border-[var(--color-stroke-strong)] px-6 py-3 text-sm font-semibold text-[var(--color-ink-800)] transition hover:bg-[var(--color-surface)]"
            >
              Explore rooms
            </Link>
          </div>
        </Reveal>

        <Reveal className="rounded-3xl border border-[var(--color-stroke)] bg-[var(--color-surface)] p-6 shadow-[var(--shadow-soft)]" delay={0.15}>
          <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--color-ink-600)]">Guest sentiment</h2>
          <p className="mt-4 text-4xl font-semibold text-[var(--color-ink-900)]">4.9/5</p>
          <p className="mt-2 text-sm text-[var(--color-ink-600)]">Based on 2,100+ verified stays this year.</p>

          <dl className="mt-6 grid grid-cols-2 gap-4 text-sm">
            <div className="rounded-xl border border-[var(--color-stroke)] p-4">
              <dt className="text-[var(--color-ink-600)]">Suites</dt>
              <dd className="mt-1 text-xl font-semibold text-[var(--color-ink-900)]">62</dd>
            </div>
            <div className="rounded-xl border border-[var(--color-stroke)] p-4">
              <dt className="text-[var(--color-ink-600)]">Avg. check-in</dt>
              <dd className="mt-1 text-xl font-semibold text-[var(--color-ink-900)]">4 min</dd>
            </div>
            <div className="rounded-xl border border-[var(--color-stroke)] p-4">
              <dt className="text-[var(--color-ink-600)]">Concierge</dt>
              <dd className="mt-1 text-xl font-semibold text-[var(--color-ink-900)]">24/7</dd>
            </div>
            <div className="rounded-xl border border-[var(--color-stroke)] p-4">
              <dt className="text-[var(--color-ink-600)]">City transfer</dt>
              <dd className="mt-1 text-xl font-semibold text-[var(--color-ink-900)]">On demand</dd>
            </div>
          </dl>
        </Reveal>
      </div>
    </section>
  );
};

export const AmenitiesSection = () => (
  <section id="amenities" className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-10">
    <Reveal className="max-w-2xl">
      <p className="section-kicker">Amenities</p>
      <h2 className="section-title">Designed for focused work and complete rest.</h2>
    </Reveal>

    <div className="mt-8 grid gap-4 md:grid-cols-2">
      {amenities.map((amenity, index) => (
        <Reveal key={amenity.title} delay={index * 0.06} className="rounded-2xl border border-[var(--color-stroke)] bg-[var(--color-surface)] p-6 shadow-[var(--shadow-soft)]">
          <h3 className="text-lg font-semibold text-[var(--color-ink-900)]">{amenity.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-[var(--color-ink-600)]">{amenity.copy}</p>
        </Reveal>
      ))}
    </div>
  </section>
);

export const FeaturedRoomsSection = () => (
  <section id="featured-rooms" className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-10">
    <Reveal className="flex flex-wrap items-end justify-between gap-3">
      <div>
        <p className="section-kicker">Featured Rooms</p>
        <h2 className="section-title">Room categories with character and comfort.</h2>
      </div>
      <Link to="/rooms" className="text-sm font-semibold text-[var(--color-ink-700)] underline-offset-4 hover:underline">
        See all rooms
      </Link>
    </Reveal>

    <div className="mt-8 grid gap-6 lg:grid-cols-3">
      {featuredRooms.map((room, index) => (
        <Reveal key={room.id} delay={index * 0.08}>
          <RoomCard room={room} compact />
        </Reveal>
      ))}
    </div>
  </section>
);

export const TestimonialsSection = () => (
  <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-10">
    <Reveal>
      <p className="section-kicker">Testimonials</p>
      <h2 className="section-title">Trusted by frequent travelers and teams.</h2>
    </Reveal>

    <div className="mt-8 grid gap-4 md:grid-cols-3">
      {testimonials.map((item, index) => (
        <Reveal key={item.name} delay={index * 0.07} className="rounded-2xl border border-[var(--color-stroke)] bg-[var(--color-surface)] p-6 shadow-[var(--shadow-soft)]">
          <p className="text-sm leading-relaxed text-[var(--color-ink-700)]">"{item.quote}"</p>
          <p className="mt-4 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-ink-600)]">{item.name}</p>
        </Reveal>
      ))}
    </div>
  </section>
);

export const LocationSection = () => (
  <section id="location" className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-10">
    <Reveal className="grid gap-6 overflow-hidden rounded-3xl border border-[var(--color-stroke)] bg-[var(--color-surface)] p-6 shadow-[var(--shadow-soft)] lg:grid-cols-[1fr_1.1fr] lg:p-8">
      <div>
        <p className="section-kicker">Location</p>
        <h2 className="section-title">In the center, away from the noise.</h2>
        <p className="mt-4 text-sm leading-relaxed text-[var(--color-ink-600)]">
          Grandoria Hotel is located in the city core with direct transit links, private transfer options, and walkable access to culture and dining.
        </p>
        <ul className="mt-5 space-y-2 text-sm text-[var(--color-ink-700)]">
          <li>10 min to central station</li>
          <li>30 min to international airport</li>
          <li>24/7 concierge-supported transfers</li>
        </ul>
      </div>
      <div className="min-h-[260px] overflow-hidden rounded-2xl border border-[var(--color-stroke)]">
        <img
          src={galleryMap}
          alt="City map preview"
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </div>
    </Reveal>
  </section>
);

export const BookingSection = () => (
  <section id="booking-section" className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-10">
    <Reveal>
      <p className="section-kicker">Booking</p>
      <h2 className="section-title">Secure your stay in under two minutes.</h2>
    </Reveal>

    <div className="mt-8">
      <BookingForm mode="section" />
    </div>
  </section>
);
