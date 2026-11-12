import { Repeat, Layers, ShieldCheck, MessageCircle } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { BadgeRow } from "./ui";

type Benefit = { icon: LucideIcon; title: string; desc: string };

const BENEFITS: Benefit[] = [
  {
    icon: Repeat,
    title: "A monthly retainer",
    desc: "Website care, your Google Business Profile, booking and enquiry flows, and ads, looked after together each month.",
  },
  {
    icon: Layers,
    title: "One partner",
    desc: "The website, the profile, the ads and a custom app can sit with one team, instead of four suppliers.",
  },
  {
    icon: ShieldCheck,
    title: "POPIA-aware",
    desc: "We only use the details you send to reply to your enquiry, in line with POPIA. We do not sell or share them.",
  },
  {
    icon: MessageCircle,
    title: "Plain-language reporting",
    desc: "Clear scope before we start, and reports on what ran. No promises of guaranteed bookings.",
  },
];

export default function WhyChooseMe() {
  return (
    <section id="why" className="bg-[#F5F5F5] pt-16 sm:pt-20 lg:pt-28 pb-16 sm:pb-20 lg:pb-24">
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <BadgeRow number="5" label="Why JScholtz Digital" />
        <h2
          className="font-medium leading-[1.12] tracking-[-0.02em] text-gray-900 mb-10 sm:mb-14"
          style={{ fontSize: "clamp(1.5rem, 4vw, 3.2rem)" }}
        >
          Built for practices
          <br />
          that are with patients.
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {BENEFITS.map(({ icon: Icon, title, desc }) => (
            <div key={title}>
              <div className="w-10 h-10 rounded-xl bg-[#EAF2FE] flex items-center justify-center mb-4">
                <Icon size={18} className="text-[#1A6FD0]" />
              </div>
              <h3 className="text-[15px] sm:text-[16px] font-semibold text-gray-900 mb-2">{title}</h3>
              <p className="text-[13px] sm:text-[14px] leading-relaxed text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
