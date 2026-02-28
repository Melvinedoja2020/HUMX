import React from "react";
import HotelNavbar from "../components/site/HotelNavbar";
import HotelFooter from "../components/site/HotelFooter";

const CREAM = "#F5EFE6";

export default function ContactPage() {
  return (
    <div style={{ fontFamily: "'Jost', sans-serif", background: CREAM }}>
      <section className="fixed left-0 right-0 top-0 z-0 overflow-hidden" style={{ height: 320 }}>
        <img src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1920&q=80" alt="HUMX contact" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/60" />
        <HotelNavbar tone="light" />
        <div className="absolute bottom-8 left-4 sm:left-6 lg:left-12">
          <h1 className="text-white" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(38px,5vw,60px)", fontWeight: 300 }}>Contact HUMX</h1>
        </div>
      </section>

      <main className="relative z-20 mt-[320px]">
        <section className="px-4 py-12 sm:px-6 lg:px-12 lg:py-16">
          <div className="mx-auto max-w-5xl rounded-[8px] bg-[#f8f2e8] p-6 sm:p-8">
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(30px,4.2vw,38px)", color: "#1a1208" }}>Let us plan your HUMX stay</h2>
            <p className="mt-4 text-sm leading-relaxed" style={{ color: "#5b4a34" }}>Email: concierge@humxhotel.com · Phone: +234 800 4869 000</p>
            <p className="mt-2 text-sm leading-relaxed" style={{ color: "#5b4a34" }}>Address: 18 Ahmadu Bello Way, Victoria Island, Lagos</p>
          </div>
        </section>
        <HotelFooter />
      </main>
    </div>
  );
}
