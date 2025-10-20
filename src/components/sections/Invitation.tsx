// components/sections/CoupleInviteSection.tsx
"use client";

import Image from "next/image";
import { Heart, MapPinned, Send } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { AButton } from "@/components/ui/Button";
import { bnFont } from "@/components/theme";

export default function Invitation() {
  return (
    <Section id="couple">
      <Card className="relative overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left: Invitation Text */}
          <div className="text-white leading-relaxed text-lg md:text-xl p-4 md:p-6 flex flex-col justify-center">
            <p className="whitespace-pre-line mb-8" style={{ fontFamily: bnFont }}>
              আমাদের বিয়েতে আপনি আসবেন, আনন্দ হিল্লোল তুলবেন।{"\n"}আমন্ত্রণ নয়, অধিকার!
            </p>

            {/* Signature */}
            <div
              className="text-right text-white/90 text-base md:text-lg leading-relaxed"
              style={{ fontFamily: bnFont }}
            >
              <p className="font-semibold">বিনীত</p>
              <p>নিসা ও রাফী</p>
            </div>
          </div>

          {/* Right: Couple Photo */}
          <div className="flex flex-col items-center">
            <div className="relative w-full rounded-3xl overflow-hidden shadow-2xl ring-1 ring-white/20">
              <Image
                src="/couple.jpg"
                alt="Bride and Groom"
                width={1600}
                height={1000}
                className="w-full h-auto object-cover transition-transform duration-700 hover:scale-105"
                priority
              />
            </div>

            {/* Buttons BELOW the photo */}
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
              <AButton href="#datetime-venue" icon={<MapPinned className="size-4" />}>
                তারিখ ও স্থান দেখুন
              </AButton>
              <AButton
                href="#contact"
                variant="outline"
                icon={<Send className="size-4" />}
              >
                যোগাযোগ
              </AButton>
            </div>
          </div>
        </div>

        {/* Subtle Heart Accents */}
        <div className="absolute -top-8 right-10 opacity-20">
          <Heart className="size-32 text-white" />
        </div>
        <div className="absolute -bottom-8 left-10 opacity-20 rotate-180">
          <Heart className="size-32 text-white" />
        </div>
      </Card>
    </Section>
  );
}
