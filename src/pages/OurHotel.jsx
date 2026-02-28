import React, { useEffect } from "react";
import HotelNavbar from "../components/site/HotelNavbar";
import HotelFooter from "../components/site/HotelFooter";

const CREAM = "#F5EFE6";

function loadGSAP() {
  return new Promise((resolve) => {
    if (window.gsap) return resolve(window.gsap);
    const s = document.createElement("script");
    s.src = "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js";
    s.onload = () => {
      const s2 = document.createElement("script");
      s2.src =
        "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js";
      s2.onload = () => {
        window.gsap.registerPlugin(window.ScrollTrigger);
        resolve(window.gsap);
      };
      document.head.appendChild(s2);
    };
    document.head.appendChild(s);
  });
}

export default function OurHotelPage() {
  useEffect(() => {
    loadGSAP().then((gsap) => {
      gsap.utils.toArray(".hotel-reveal").forEach((el, i) => {
        gsap.fromTo(
          el,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.85,
            delay: i * 0.08,
            ease: "power3.out",
          },
        );
      });
    });
  }, []);

  return (
    <div style={{ fontFamily: "'Jost', sans-serif", background: CREAM }}>
      <section
        className="fixed left-0 right-0 top-0 z-0 overflow-hidden"
        style={{ height: 360 }}
      >
        <img
          src="https://images.unsplash.com/photo-1590490360182-c33d57733427?w=1920&q=80"
          alt="HUMX hotel"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/60" />
        <HotelNavbar tone="light" />
        <div className="absolute bottom-8 left-4 sm:left-6 lg:left-12">
          <h1
            className="text-white"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(40px,5vw,62px)",
              fontWeight: 300,
            }}
          >
            Our Hotel
          </h1>
        </div>
      </section>

      <main className="relative z-20 mt-[360px]" style={{ background: CREAM }}>
        <section className="px-4 py-12 sm:px-6 lg:px-12 lg:py-16">
          <div className="hotel-reveal grid gap-5 md:grid-cols-2">
            <article className="rounded-[8px] bg-[#f8f2e8] p-6 sm:p-8">
              <h2
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "clamp(30px,4.2vw,38px)",
                  color: "#1a1208",
                }}
              >
                Intentional Luxury
              </h2>
              <p
                className="mt-4 text-sm leading-relaxed"
                style={{ color: "#5b4a34" }}
              >
                Every floor at HUMX is designed around calm textures, layered
                lighting, and discreet service to deliver timeless comfort.
              </p>
            </article>
            <article className="rounded-[8px] bg-[#f8f2e8] p-6 sm:p-8">
              <h2
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "clamp(30px,4.2vw,38px)",
                  color: "#1a1208",
                }}
              >
                Personal Hospitality
              </h2>
              <p
                className="mt-4 text-sm leading-relaxed"
                style={{ color: "#5b4a34" }}
              >
                From check-in to departure, our team shapes each stay around
                your rhythm with seamless support.
              </p>
            </article>
          </div>
        </section>
        <HotelFooter />
      </main>
    </div>
  );
}
