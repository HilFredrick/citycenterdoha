"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const HERO_SLIDES = [
  {
    src: "/images/hero/slide-1.webp",
    alt: "City Center Doha Interior Atrium",
  },
  {
    src: "/images/hero/slide-2.jpg",
    alt: "City Center Doha Shopping Mall",
  },
  {
    src: "/images/hero/slide-3.webp",
    alt: "City Center Doha Architecture and Experience",
  },
];

export default function HeroSlideshow() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      aria-label="City Center Doha Highlights"
      className="relative min-h-[52vh] w-full overflow-hidden bg-footer sm:min-h-[68vh] lg:min-h-[90vh]"
    >
      {HERO_SLIDES.map((slide, idx) => {
        const isActive = idx === activeIndex;
        return (
          <div
            key={slide.src}
            aria-hidden={!isActive}
            className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
              isActive ? "z-10 opacity-100" : "z-0 opacity-0"
            }`}
          >
            <div
              className={`relative h-full w-full ${
                isActive ? "animate-ken-burns" : ""
              }`}
            >
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                priority={idx === 0}
                sizes="100vw"
                className="object-cover object-center"
              />
            </div>
          </div>
        );
      })}

      {/* Slide Indicator Dots (44x44px Accessible Tap Targets) */}
      <div className="absolute bottom-3 left-1/2 z-20 flex -translate-x-1/2 items-center gap-1 rounded-full bg-footer/75 px-2">
        {HERO_SLIDES.map((slide, idx) => {
          const isActive = idx === activeIndex;
          return (
            <button
              key={slide.src}
              type="button"
              aria-label={`Show slide ${idx + 1}`}
              aria-current={isActive ? "true" : undefined}
              onClick={() => setActiveIndex(idx)}
              className="flex h-11 w-11 min-h-[44px] min-w-[44px] items-center justify-center"
            >
              <span
                className={`block h-2.5 rounded-full bg-inverse transition-all ${
                  isActive ? "w-6 opacity-100" : "w-2.5 opacity-60"
                }`}
              />
            </button>
          );
        })}
      </div>
    </section>
  );
}
