import { Rocket, Smartphone, Gauge, LifeBuoy } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { BadgeRow } from "./ui";

type Benefit = { icon: LucideIcon; title: string; desc: string };

const BENEFITS: Benefit[] = [
  {
    icon: Rocket,
    title: "Fast turnaround",
    desc: "A clear scope and a fixed quote before I start.",
  },
  {
    icon: Smartphone,
    title: "Mobile-first",
    desc: "Every build is built to work well on phones, tablets and desktop.",
  },
  {
    icon: Gauge,
    title: "Built for speed & SEO",
    desc: "Lightweight, optimised code built with search engines and visitors in mind.",
  },
  {
    icon: LifeBuoy,
    title: "One-on-one support",
    desc: "You deal directly with me. No account managers, no runaround.",
  },
];

export default function WhyChooseMe() {
  return (
    <section
      id="why"
      className="bg-[#F5F5F5] pt-16 sm:pt-20 lg:pt-28 pb-16 sm:pb-20 lg:pb-24"
    >
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <BadgeRow number="6" label="Why work with me" />
        <h2
          className="font-medium leading-[1.12] tracking-[-0.02em] text-gray-900 mb-10 sm:mb-14"
          style={{ fontSize: "clamp(1.5rem, 4vw, 3.2rem)" }}
        >
          Direct, dependable,
          <br />
          and detail-obsessed.
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {BENEFITS.map(({ icon: Icon, title, desc }) => (
            <div key={title}>
              <div className="w-10 h-10 rounded-xl bg-[#EAF2FE] flex items-center justify-center mb-4">
                <Icon size={18} className="text-[#1E7FEB]" />
              </div>
              <h3 className="text-[15px] sm:text-[16px] font-semibold text-gray-900 mb-2">
                {title}
              </h3>
              <p className="text-[13px] sm:text-[14px] leading-relaxed text-gray-600">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
