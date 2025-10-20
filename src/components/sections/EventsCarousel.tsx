// components/sections/EventsCarousel.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Mehedi from "@/components/sections/Mehedi";
import Reception from "@/components/sections/Reception";
import Wedding from "@/components/sections/Wedding";

type Slide = {
  key: "mehedi" | "reception" | "wedding";
  label: string;
  node: React.ReactNode;
};

const slides: Slide[] = [
  { key: "mehedi", label: "মেহেদী", node: <Mehedi /> },
  { key: "wedding", label: "বিবাহ", node: <Wedding /> },
  { key: "reception", label: "রিসেপশন", node: <Reception /> },
];

export default function EventsCarousel() {
  const [index, setIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length);
  const next = () => setIndex((i) => (i + 1) % slides.length);

  // Keyboard navigation
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Basic touch swipe
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    let startX = 0;
    let endX = 0;

    const onTouchStart = (e: TouchEvent) => (startX = e.touches[0].clientX);
    const onTouchMove = (e: TouchEvent) => (endX = e.touches[0].clientX);
    const onTouchEnd = () => {
      const dx = endX - startX;
      if (Math.abs(dx) > 40) {
        dx > 0 ? prev() : next();
      }
      startX = 0;
      endX = 0;
    };

    el.addEventListener("touchstart", onTouchStart, { passive: true });
    el.addEventListener("touchmove", onTouchMove, { passive: true });
    el.addEventListener("touchend", onTouchEnd);

    return () => {
      el.removeEventListener("touchstart", onTouchStart);
      el.removeEventListener("touchmove", onTouchMove);
      el.removeEventListener("touchend", onTouchEnd);
    };
  }, []);

  return (
    <section id="events-switcher" className="relative">
      {/* Header pills (optional quick jump) */}

      <div
        ref={containerRef}
        className="relative overflow-hidden rounded-2xl"
        aria-roledescription="carousel"
      >
        {/* Slides rail */}
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {slides.map((s) => (
            <div key={s.key} className="min-w-full">
              {/* Your original sections already include their own Section/Card/layouts */}
              {s.node}
            </div>
          ))}
        </div>

        {/* Left/Right controls */}
        <div className="pointer-events-none absolute inset-y-0 left-0 right-0 flex items-center justify-between px-2 sm:px-4">
          <button
            aria-label="Previous"
            onClick={prev}
            className="pointer-events-auto inline-flex items-center justify-center rounded-full bg-white/90 text-stone-900 p-2 shadow hover:bg-white transition"
          >
            <ArrowLeft className="size-5" />
          </button>
          <button
            aria-label="Next"
            onClick={next}
            className="pointer-events-auto inline-flex items-center justify-center rounded-full bg-white/90 text-stone-900 p-2 shadow hover:bg-white transition"
          >
            <ArrowRight className="size-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
