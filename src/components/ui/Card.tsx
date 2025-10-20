// components/ui/Card.tsx
"use client";

import React from "react";

export function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={[
        "rounded-2xl border border-white/20 bg-stone-900/35 backdrop-blur-xl",
        "p-5 sm:p-7 md:p-10 text-white shadow-[0_10px_30px_rgba(0,0,0,0.25)]",
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
}
