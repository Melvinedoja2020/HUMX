import HotelNavbar from "../components/site/HotelNavbar";
import HotelFooter from "../components/site/HotelFooter";

const CREAM = "#F5EFE6";

export default function ContactPage() {
  return (
    <div style={{ fontFamily: "'Jost', sans-serif", background: CREAM }}>
      <section className="fixed top-0 left-0 right-0 z-0 overflow-hidden" style={{ height: 360 }}>
        <img src="https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=1920&q=80" alt="Contact" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/60" />
        <HotelNavbar tone="light" />
        <div className="absolute bottom-10 left-12">
          <h1 className="text-white" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(44px,5vw,64px)", fontWeight: 300 }}>Contact</h1>
        </div>
      </section>

      <main className="relative z-20 bg-white pt-[360px]">
        <section className="px-12 py-16">
          <div className="mx-auto max-w-5xl rounded-[4px] bg-[#f8f2e8] p-8">
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 38, color: "#1a1208" }}>Let us plan your stay</h2>
            <p className="mt-4 text-sm" style={{ color: "#5b4a34" }}>Email: concierge@hotelbeach.com · Phone: +234 800 000 0000</p>
            <p className="mt-2 text-sm" style={{ color: "#5b4a34" }}>Address: 12 Atlantic View, Victoria Island, Lagos</p>
          </div>
        </section>
        <HotelFooter />
      </main>
    </div>
  );
}
