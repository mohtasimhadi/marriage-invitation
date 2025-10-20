// components/SectionHeader.tsx
"use client";

import React from "react";

export default function SectionHeader({
  eyebrow,
  title,
  icon,
}: {
  eyebrow?: string;
  title: string;
  icon?: React.ReactNode;
}) {
  return (
    <div className="flex flex-col items-center gap-2 text-center">
      {eyebrow && (
        <div className="inline-flex items-center gap-2 rounded-full bg-white/10 ring-1 ring-white/20 px-3 py-1 text-xs uppercase tracking-widest text-white/80">
          {icon}
          <span>{eyebrow}</span>
        </div>
      )}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">{title}</h2>
    </div>
  );
}
