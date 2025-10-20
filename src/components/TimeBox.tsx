// components/TimeBox.tsx
"use client";

import React from "react";
import { bnFont } from "@/components/theme";

export default function TimeBox({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="min-w-16 px-3 py-2 rounded-xl bg-white/15 backdrop-blur text-2xl md:text-3xl font-extrabold tracking-wider">
        {value}
      </div>
      <div className="mt-1 text-xs sm:text-sm md:text-base text-white/80" style={{ fontFamily: bnFont }}>
        {label}
      </div>
    </div>
  );
}
