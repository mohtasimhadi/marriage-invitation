import "./globals.css";
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Nisa weds Rafi",
  description: "Join us for our celebration",
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-dvh bg-zinc-50 text-zinc-900 antialiased">{children}</body>
    </html>
  );
}