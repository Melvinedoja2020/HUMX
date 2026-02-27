import heroImage from "../assets/img1.webp";
import Navbar from "../components/Navbar";

export default function HomePage() {
  return (
    <div id="top" className="min-h-screen bg-[#f7f2ea] text-[#151515]">
      <Navbar />

      <main>
        <section className="relative flex min-h-[100svh] items-end overflow-hidden pt-20">
          <img
            src={heroImage}
            alt="Luxury hotel suite"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/45 to-black/70" />

          <div className="relative mx-auto w-full max-w-7xl px-5 pb-16 pt-24 md:px-8 md:pb-24">
            <div className="max-w-3xl rounded-[2rem] bg-black/30 p-8 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-[2px] md:p-12">
              <p className="text-xs uppercase tracking-[0.28em] text-[#f5f0e8]/85">Lodr Hotel</p>
              <h1 className="mt-5 text-4xl font-semibold leading-tight text-[#f5f0e8] md:text-6xl">
                Quiet luxury in the heart of the city.
              </h1>
              <p className="mt-5 max-w-2xl text-base text-[#f5f0e8]/85 md:text-lg">
                Thoughtful suites, refined dining, and a calm atmosphere designed for deep rest.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  className="rounded-full bg-[#f5f0e8] px-6 py-3 text-sm font-semibold text-[#111111] shadow-[0_16px_34px_rgba(0,0,0,0.3)] transition-transform duration-300 hover:-translate-y-0.5"
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
      </main>
    </div>
  );
}
