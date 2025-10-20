// components/sections/ContactSection.tsx
"use client";

import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import SectionHeader from "@/components/SectionHeader";
import { Phone, Send } from "lucide-react";

function InfoPill({
  name,
  number,
}: {
  name: string;
  number: string;
}) {
  return (
    <div className="rounded-2xl bg-white/10 ring-1 ring-white/20 backdrop-blur p-6 flex flex-col items-center text-center text-white">
      <Phone className="size-5 text-white/70 mb-3" />
      <h3 className="text-lg md:text-xl font-semibold mb-1">{name}</h3>
      <a
        href={`tel:${number.replace(/\s+/g, "")}`}
        className="text-base underline underline-offset-4 hover:text-white/90"
      >
        {number}
      </a>
    </div>
  );
}

export default function ContactSection() {
  return (
    <Section id="contact">
      <Card>
        <SectionHeader
          eyebrow="Contact"
          title="যোগাযোগ"
          icon={<Send className="size-6 text-white/80" />}
        />

        {/* Contact Info Boxes */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <InfoPill
            name="ফারিয়া বিনতে কাদের"
            number="+1 407 923 8694"
          />
          <InfoPill
            name="মোহতাসিম হাদী রাফী"
            number="+1 334 559 9369"
          />
        </div>
      </Card>
    </Section>
  );
}
