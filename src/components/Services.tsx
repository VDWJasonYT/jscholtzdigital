import { CalendarCheck, Monitor, Repeat, Smartphone, Store } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { BadgeRow } from "./ui";
import Reveal from "./Reveal";

type Service = { icon: LucideIcon; title: string; desc: string };

const SERVICES: Service[] = [
  {
    icon: Monitor,
    title: "Practice websites",
    desc: "A fast, mobile-first website for your rooms, with click-to-call, WhatsApp and a clear way for patients to enquire. This is where most practices start.",
  },
  {
    icon: CalendarCheck,
    title: "Patient booking & enquiry flows",
    desc: "Booking and enquiry paths that match how the practice actually works, from a simple form through to a flow built around your diary.",
  },
  {
    icon: Store,
    title: "Google Business Profile & reviews",
    desc: "Your Google Business Profile set up so patients can find the practice on Search and Maps, with a clear link to the reviews you already have.",
  },
  {
    icon: Repeat,
    title: "Monthly growth retainers",
    desc: "Website care, Google Business Profile, patient booking and enquiry flows, and ads management, looked after each month while you are with patients.",
  },
  {
    icon: Smartphone,
    title: "Custom practice apps",
    desc: "Patient booking and reminder apps, practice portals and other software for your rooms. Custom practice apps start from R80,000, quoted per project.",
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
          What a busy practice no longer has to do alone.
        </h2>
        <p className="text-[15px] sm:text-[16px] text-gray-600 max-w-2xl mb-10 sm:mb-14">
          JScholtz Digital is a digital partner for medical and dental practices across South Africa,
          based in Secunda, Mpumalanga. Monthly retainers and custom apps carry the ongoing work.
          A practice website is the usual way in.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
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
