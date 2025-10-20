// components/ui/Button.tsx
"use client";

import React from "react";

export function Button({
  children,
  onClick,
  type = "button",
  variant = "primary",
  iconLeft,
  iconRight,
  className = "",
}: {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "ghost" | "outline";
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  className?: string;
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm sm:text-base font-semibold transition focus:outline-none";
  const styles =
    variant === "primary"
      ? "bg-white/95 text-stone-900 hover:bg-white shadow"
      : variant === "outline"
      ? "bg-transparent text-white ring-1 ring-white/50 hover:bg-white/10"
      : "bg-white/15 text-white hover:bg-white/25";
  return (
    <button type={type} onClick={onClick} className={[base, styles, className].join(" ")}>
      {iconLeft}
      {children}
      {iconRight}
    </button>
  );
}

export function AButton({
  href,
  children,
  variant = "primary",
  icon,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "outline";
  icon?: React.ReactNode;
  className?: string;
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm sm:text-base font-semibold transition focus:outline-none";
  const styles =
    variant === "primary"
      ? "bg-white/95 text-stone-900 hover:bg-white shadow"
      : "bg-transparent text-white ring-1 ring-white/50 hover:bg-white/10";
  return (
    <a href={href} className={[base, styles, className].join(" ")}>
      {icon}
      {children}
    </a>
  );
}
