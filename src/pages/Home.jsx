import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import HotelNavbar from "../components/site/HotelNavbar";
import HotelFooter from "../components/site/HotelFooter";
import {
  HomeActivities,
  HomeAmenities,
  HomeGuestStories,
  HomeLuxuryRooms,
} from "../components/home/HomeSections";

const fontLink = document.createElement("link");
fontLink.href = "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600&family=Jost:wght@300;400;500&display=swap";
fontLink.rel = "stylesheet";
if (!document.head.querySelector('[href*="Cormorant"]')) document.head.appendChild(fontLink);

function loadGSAP() {
  return new Promise((resolve) => {
    if (window.gsap) return resolve(window.gsap);
    const s = document.createElement("script");
    s.src = "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js";
    s.onload = () => {
      const s2 = document.createElement("script");
      s2.src = "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js";
      s2.onload = () => {
        window.gsap.registerPlugin(window.ScrollTrigger);
        resolve(window.gsap);
      };
      document.head.appendChild(s2);
    };
    document.head.appendChild(s);
  });
}

export default function HomePage() {
  const navigate = useNavigate();
  const navRef = useRef(null);
  const dividerRef = useRef(null);
  const subRef = useRef(null);
  const btnRef = useRef(null);
  const circleRef = useRef(null);

  useEffect(() => {
    loadGSAP().then((gsap) => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.fromTo(navRef.current, { y: -40, opacity: 0 }, { y: 0, opacity: 1, duration: 1 })
        .fromTo(".hero-word", { y: 70, opacity: 0 }, { y: 0, opacity: 1, duration: 1.1, stagger: 0.1 }, "-=0.4")
        .fromTo(dividerRef.current, { scaleX: 0 }, { scaleX: 1, duration: 0.8, ease: "power2.inOut", transformOrigin: "left" }, "-=0.3")
        .fromTo(subRef.current, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, "-=0.4")
        .fromTo(btnRef.current, { x: 30, opacity: 0 }, { x: 0, opacity: 1, duration: 0.7 }, "-=0.6")
        .fromTo(circleRef.current, { scale: 0.5, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.9, ease: "back.out(1.4)" }, "-=0.5");

      gsap.to(circleRef.current, { y: -10, duration: 2.5, ease: "sine.inOut", yoyo: true, repeat: -1, delay: 2 });

      gsap.utils.toArray(".reveal-up").forEach((el) => {
        gsap.fromTo(el, { y: 50, opacity: 0 }, {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 85%" },
        });
      });

      gsap.utils.toArray(".reveal-left").forEach((el) => {
        gsap.fromTo(el, { x: -50, opacity: 0 }, {
          x: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 80%" },
        });
      });

      gsap.utils.toArray(".reveal-right").forEach((el) => {
        gsap.fromTo(el, { x: 50, opacity: 0 }, {
          x: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 80%" },
        });
      });

      gsap.utils.toArray(".amenity-card").forEach((el, i) => {
        gsap.fromTo(el, { y: 40, opacity: 0 }, {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: "power3.out",
          delay: i * 0.1,
          scrollTrigger: { trigger: el, start: "top 88%" },
        });
      });
    });
  }, []);

  return (
    <div style={{ fontFamily: "'Jost', sans-serif", margin: 0, padding: 0 }}>
      <section className="fixed top-0 left-0 right-0 z-0 overflow-hidden" style={{ height: "100vh" }}>
        <img
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920&q=80"
          alt="Beach"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-black/60" />

        <HotelNavbar ref={navRef} tone="light" />

        <div className="absolute z-20 left-12 bottom-44" style={{ maxWidth: 520 }}>
          <h1 className="text-white font-light leading-tight" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(44px, 5.5vw, 68px)", letterSpacing: "-0.01em" }}>
            {[['Your', 'Gateway', 'to'], ['Unforgettable'], ['Memories']].map((line, li) => (
              <div key={li} className="overflow-hidden">
                <div className="flex gap-[0.3em]">
                  {line.map((word, wi) => (
                    <span key={wi} className="hero-word inline-block">{word}</span>
                  ))}
                </div>
              </div>
            ))}
          </h1>
        </div>

        <div ref={dividerRef} className="absolute z-20 left-12 right-12 h-px bg-white/40" style={{ bottom: 118 }} />

        <div className="absolute z-20 left-12 right-12 flex items-end justify-between" style={{ bottom: 36 }}>
          <p ref={subRef} className="text-white/85 text-sm leading-relaxed" style={{ fontWeight: 300, maxWidth: 340 }}>
            Experience exquisite accommodations, world-class amenities, and
            <br />
            personalized service tailored to exceed your expectations.
          </p>
          <button
            ref={btnRef}
            type="button"
            onClick={() => navigate("/rooms")}
            className="flex items-center gap-4 bg-white rounded-full pl-7 pr-3 py-3 text-sm text-neutral-800 hover:bg-neutral-100 transition-colors group"
          >
            View Rooms
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-neutral-900 text-white group-hover:bg-neutral-700 transition-colors">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 12L12 2M12 2H4M12 2V10" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </span>
          </button>
        </div>

        <button
          ref={circleRef}
          type="button"
          onClick={() => navigate("/rooms")}
          className="absolute z-20 flex items-center justify-center rounded-full cursor-pointer hover:scale-105 transition-transform duration-300"
          style={{ width: 148, height: 148, bottom: 90, right: 80, background: "rgba(210,195,155,0.92)", fontFamily: "'Cormorant Garamond', serif", fontSize: 17, fontWeight: 500, color: "#2a2015", lineHeight: 1.3, boxShadow: "0 8px 40px rgba(0,0,0,0.25)", border: "none" }}
        >
          Select
          <br />
          Room
        </button>
      </section>

      <main className="relative z-20 bg-white pt-[100vh]">
        <HomeLuxuryRooms />
        <HomeActivities />
        <HomeAmenities />
        <HomeGuestStories />
        <HotelFooter />
      </main>
    </div>
  );
}
