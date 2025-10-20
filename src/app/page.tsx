// app/page.tsx
"use client";

import Image from "next/image";
import { ArrowRight, Calendar } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import Invitation from "@/components/sections/Invitation";
import EventsCarousel from "@/components/sections/EventsCarousel";
import ContactSection from "@/components/sections/ContactSection";
import Wedding from "@/components/sections/Wedding";

export default function Page() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <>
      <Section>
        <Image
          src="/bibaho.png"
          alt="Invitation"
          width={720}
          height={480}
          className="w-full max-w-2xl h-auto"
          priority
        />
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button onClick={() => scrollTo("events-switcher")} variant="primary" iconRight={<ArrowRight className="size-4" />}>
            বিস্তারিত
          </Button>
          <Button onClick={() => scrollTo("datetime-venue")} variant="ghost" iconLeft={<Calendar className="size-4" />}>
            তারিখ ও স্থান
          </Button>
        </div>
      </Section>

      <Invitation />
      <EventsCarousel />
      <ContactSection />
    </>
  );
}
