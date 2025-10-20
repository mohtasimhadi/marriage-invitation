// components/ui/Inputs.tsx
"use client";

import React from "react";
import { bnFont } from "@/components/theme";

export function Input({
  className = "",
  ...props
}: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className={[
        "w-full rounded-xl bg-white/90 text-stone-900 px-4 py-3 placeholder-stone-600",
        "focus:outline-none focus:ring-2 focus:ring-white/70",
        className,
      ].join(" ")}
      style={{ fontFamily: bnFont }}
    />
  );
}

export function Textarea({
  className = "",
  ...props
}: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      {...props}
      className={[
        "w-full rounded-xl bg-white/90 text-stone-900 px-4 py-3 h-32 resize-y placeholder-stone-600",
        "focus:outline-none focus:ring-2 focus:ring-white/70",
        className,
      ].join(" ")}
      style={{ fontFamily: bnFont }}
    />
  );
}
