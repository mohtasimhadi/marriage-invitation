// components/BioCard.tsx
"use client";

import React from "react";
import { bnFont } from "@/components/theme";

export default function BioCard({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-l bg-white/5 ring-1 ring-white/15 p-5">
      <h4 className="text-xl font-semibold text-white text-center" style={{ fontFamily: bnFont }}>
        {title}
      </h4>
      <p className="mt-3 text-white/90 leading-relaxed" style={{ fontFamily: bnFont }}>
        {text}
      </p>
    </div>
  );
}
