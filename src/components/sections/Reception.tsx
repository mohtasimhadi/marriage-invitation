// components/sections/DateTimeVenueSection.tsx
"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { Calendar, Clock, MapPin, MapPinned } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import SectionHeader from "@/components/SectionHeader";
import { AButton } from "@/components/ui/Button";
import { bnFont } from "@/components/theme";

export default function Reception() {
  const targetDate = useMemo(() => new Date("2025-12-28T13:30:00+06:00"), []);
  const [now, setNow] = useState<Date>(new Date());

  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(t);
  }, []);

  const diff = Math.max(0, targetDate.getTime() - now.getTime());
  const days = Math.floor(diff / 86400000);
  const hours = Math.floor((diff / 3600000) % 24);
  const minutes = Math.floor((diff / 60000) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  const bnDigits = (s: string | number) =>
    String(s).replace(/[0-9]/g, (d) => "০১২৩৪৫৬৭৮৯"[Number(d)]);
  const bnDateStr = targetDate.toLocaleString("bn-BD", { dateStyle: "full" });

  const venueName = "লুইজ ভিলেজ রিসোর্ট এন্ড পার্ক";
  const venueAddr = "বেলটিয়া, জামালপুর";
  const venueQuery = `${venueName}, ${venueAddr}`;

  return (
    <Section id="datetime-venue">
      <Card>
        <SectionHeader
          eyebrow="অনুষ্ঠান"
          title="বৌভাত"
          icon={<Calendar className="size-6 text-white/80" />}
        />

        <div
          className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch"
          style={{ fontFamily: bnFont }}
        >
          {/* Left panel: Date + Countdown */}
          <div className="rounded-2xl bg-white/10 ring-1 ring-white/20 backdrop-blur p-6 flex flex-col">
            <div className="flex items-center gap-2 text-white/95 text-lg md:text-xl font-semibold">
              <Calendar className="size-5" />
              <span>{bnDateStr}</span>
            </div>

            <div className="mt-5 grid grid-cols-4 gap-3 sm:gap-4">
              <TimeBox label="দিন" value={bnDigits(days)} />
              <TimeBox label="ঘন্টা" value={bnDigits(hours)} />
              <TimeBox label="মিনিট" value={bnDigits(minutes)} />
              <TimeBox label="সেকেন্ড" value={bnDigits(seconds)} />
            </div>

            <div className="mt-5 flex items-center gap-2 text-white/90">
              <Clock className="size-5" />
              <span>
                অনুষ্ঠান শুরু:{" "}
                {targetDate.toLocaleTimeString("bn-BD", {
                  hour: "2-digit",
                  minute: "2-digit",
                  hour12: false,
                })}
              </span>
            </div>
            <div className="mt-auto" />
          </div>

          {/* Right panel: Venue info */}
          <div className="rounded-2xl bg-white/10 ring-1 ring-white/20 backdrop-blur p-6 flex flex-col">
            <div className="flex items-center justify-between gap-2">
              <div className="text-left">
                <div className="flex items-center gap-2 text-xl md:text-2xl font-semibold text-white">
                  <MapPin className="size-5" />
                  <span>স্থান</span>
                </div>
                <div className="mt-2 text-white/90">{venueName}</div>
                <div className="mt-1 text-white/80">{venueAddr}</div>
              </div>
              <div className="shrink-0">
                <AButton
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                    venueQuery
                  )}`}
                  icon={<MapPinned className="size-4" />}
                >
                  Google ম্যাপ
                </AButton>
              </div>
            </div>
            <div className="mt-auto" />
          </div>
        </div>

        {/* Photo + Map side by side */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Photo */}
          <div className="w-full aspect-[16/9] rounded-2xl overflow-hidden ring-1 ring-white/25">
            <Image
              src="/lv.jpg"
              alt="Luis Village Resort &amp; Park, Beltia, Jamalpur"
              width={1600}
              height={900}
              className="w-full h-full object-cover scale-110 transition-transform duration-700 hover:scale-125"
              priority
            />
          </div>

          {/* Map */}
          <div className="w-full aspect-[16/9] rounded-2xl overflow-hidden ring-1 ring-white/25">
            <iframe
              className="h-full w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src={`https://www.google.com/maps?q=${encodeURIComponent(
                venueQuery
              )}&output=embed`}
              allowFullScreen
            />
          </div>
        </div>
      </Card>
    </Section>
  );
}

/* Countdown box component */
function TimeBox({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="min-w-16 px-3 py-2 rounded-lg bg-white/15 backdrop-blur text-2xl md:text-3xl font-bold tracking-wider">
        {value}
      </div>
      <div className="mt-1 text-sm md:text-base text-white/80">{label}</div>
    </div>
  );
}
