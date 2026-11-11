import { Clapperboard, Monitor, Shield, Store } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { BadgeRow } from "./ui";
import Reveal from "./Reveal";

type Service = { icon: LucideIcon; title: string; desc: string };

const SERVICES: Service[] = [
  {
    icon: Clapperboard,
    title: "Meta ads with AI video creatives",
    desc: "Facebook and Instagram campaigns, with short video ads we create using AI video tools. You approve every creative before it runs.",
  },
  {
    icon: Monitor,
    title: "Websites",
    desc: "Fast, mobile-first websites with click-to-call, WhatsApp and clear enquiry paths, so the people your ads reach can act.",
  },
  {
    icon: Shield,
    title: "Website security checks",
    desc: "A passive outside review of your site, written up in plain English. Active testing only with your written permission.",
  },
  {
    icon: Store,
    title: "Google Business Profile setup",
    desc: "Your profile set up properly so customers can find you on Google Search and Maps.",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-[#F5F5F5] pt-16 sm:pt-20 lg:pt-28 pb-16 sm:pb-20 lg:pb-24 scroll-mt-4">
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <BadgeRow number="3" label="What we do" />
        <h2
          className="font-medium leading-[1.12] tracking-[-0.02em] text-gray-900 mb-4 max-w-4xl"
          style={{ fontSize: "clamp(1.5rem, 4vw, 3.2rem)" }}
        >
          Ads that get seen, and a website that turns attention into enquiries.
        </h2>
        <p className="text-[15px] sm:text-[16px] text-gray-600 max-w-2xl mb-10 sm:mb-14">
          JScholtz Digital is an AI-powered digital marketing agency for ambitious South African
          businesses, based in Secunda, Mpumalanga. We bring your ads, website, security and Google
          presence together, so they work as one system.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {SERVICES.map(({ icon: Icon, title, desc }) => (
            <Reveal key={title}>
              <div className="group grad-card rounded-2xl p-6 h-full transition-colors duration-300">
                <div className="w-11 h-11 rounded-xl bg-[#F5F5F5] flex items-center justify-center mb-5">
                  <Icon size={20} className="text-[#1A6FD0]" />
                </div>
                <h3 className="text-[16px] font-semibold text-gray-900 group-hover:text-white transition-colors mb-2">
                  {title}
                </h3>
                <p className="text-[13px] sm:text-[14px] leading-relaxed text-gray-600 group-hover:text-gray-300 transition-colors">
                  {desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
