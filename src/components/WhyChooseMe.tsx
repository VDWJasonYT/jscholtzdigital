import { Clapperboard, Layers, ShieldCheck, MessageCircle } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { BadgeRow } from "./ui";

type Benefit = { icon: LucideIcon; title: string; desc: string };

const BENEFITS: Benefit[] = [
  {
    icon: Clapperboard,
    title: "AI video creatives",
    desc: "We make short video ads with AI video tools, so fresh creatives are part of every package.",
  },
  {
    icon: Layers,
    title: "One team, one system",
    desc: "Ads, website, security and Google profile handled together, not by four different suppliers.",
  },
  {
    icon: ShieldCheck,
    title: "Security built in",
    desc: "Every package includes a website security check, written up in plain English.",
  },
  {
    icon: MessageCircle,
    title: "Honest reporting",
    desc: "Clear scope before we start, and plain-language reports on what ran. No promises of guaranteed leads.",
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
          Built for businesses
          <br />
          that want to grow.
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
