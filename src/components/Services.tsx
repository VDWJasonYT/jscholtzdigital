import { Palette, Code2, LayoutTemplate, Wrench } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { BadgeRow } from "./ui";

type Service = {
  icon: LucideIcon;
  title: string;
  desc: string;
};

const SERVICES: Service[] = [
  {
    icon: Palette,
    title: "Web Design",
    desc: "Clean, modern, mobile-first designs that reflect your brand and build instant trust.",
  },
  {
    icon: Code2,
    title: "Web Development",
    desc: "Fast, responsive, hand-built sites in React and modern frameworks — no bloated templates.",
  },
  {
    icon: LayoutTemplate,
    title: "Landing Pages",
    desc: "High-converting single-page sites built to turn ad clicks and campaigns into leads.",
  },
  {
    icon: Wrench,
    title: "Maintenance & Support",
    desc: "Ongoing updates, hosting, security and tweaks so your site stays fast and current.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="bg-white border-t border-gray-100 pt-16 sm:pt-20 lg:pt-28 pb-16 sm:pb-20 lg:pb-24"
    >
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <BadgeRow number="2" label="What I do" />
        <h2
          className="font-medium leading-[1.12] tracking-[-0.02em] text-gray-900 mb-10 sm:mb-14"
          style={{ fontSize: "clamp(1.5rem, 4vw, 3.2rem)" }}
        >
          Everything you need to
          <br />
          launch and grow online.
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {SERVICES.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group bg-[#F5F5F5] rounded-2xl p-6 sm:p-7 transition-colors duration-300 hover:bg-gray-900"
            >
              <div className="w-11 h-11 rounded-xl bg-white flex items-center justify-center mb-6">
                <Icon size={20} className="text-[#1E7FEB]" />
              </div>
              <h3 className="text-[16px] sm:text-[17px] font-semibold text-gray-900 group-hover:text-white transition-colors mb-2">
                {title}
              </h3>
              <p className="text-[13px] sm:text-[14px] leading-relaxed text-gray-600 group-hover:text-gray-300 transition-colors">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
