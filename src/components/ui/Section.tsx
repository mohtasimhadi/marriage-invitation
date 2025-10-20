// components/ui/Section.tsx
"use client";

import React from "react";

export function Section({ id, children }: { id?: string; children: React.ReactNode }) {
  return (
    <section
      id={id}
      className="min-h-screen relative bg-cover bg-center bg-no-repeat py-14 sm:py-16 md:py-24"
      style={{ backgroundImage: "url('/bg.png')" }}
    >
      <div className="absolute inset-0 bg-black/45" />
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">{children}</div>
    </section>
  );
}
