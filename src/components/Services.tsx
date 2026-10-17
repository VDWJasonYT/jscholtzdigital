import { Monitor, Shield, Smartphone, Wrench } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { BadgeRow } from "./ui";
import ServicesStack from "./graphics/ServicesStack";

type Service = {
  icon: LucideIcon;
  title: string;
  desc: string;
};

const SERVICES: Service[] = [
  {
    icon: Monitor,
    title: "Websites",
    desc: "A mobile-friendly site with a clear way for customers to get in touch, and the security basics built in.",
  },
  {
    icon: Smartphone,
    title: "Apps",
    desc: "Web and mobile apps shaped around how your business actually works.",
  },
  {
    icon: Shield,
    title: "Security checks",
    desc: "A passive outside review of your site, written up in plain English.",
  },
  {
    icon: Wrench,
    title: "Maintenance",
    desc: "Updates and fixes after launch, agreed before I start.",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-[#F5F5F5] pt-16 sm:pt-20 lg:pt-28 pb-16 sm:pb-20 lg:pb-24">
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <BadgeRow number="2" label="What I do" />
        <h2
          className="font-medium leading-[1.12] tracking-[-0.02em] text-gray-900 mb-4"
          style={{ fontSize: "clamp(1.5rem, 4vw, 3.2rem)" }}
        >
          Websites, apps and
          <br />
          security checks.
        </h2>
        <p className="text-[15px] sm:text-[16px] text-gray-600 max-w-xl mb-10 sm:mb-14">
          You deal directly with me, from the first conversation through to launch.
        </p>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <div className="order-1 lg:order-2" aria-hidden="true">
            <ServicesStack />
          </div>
          <div className="order-2 lg:order-1 grid sm:grid-cols-2 gap-4">
            {SERVICES.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="group bg-white rounded-2xl p-6 transition-colors duration-300 hover:bg-gray-900"
              >
                <div className="w-11 h-11 rounded-xl bg-[#F5F5F5] flex items-center justify-center mb-5 group-hover:bg-white">
                  <Icon size={20} className="text-[#1E7FEB]" />
                </div>
                <h3 className="text-[16px] font-semibold text-gray-900 group-hover:text-white transition-colors mb-2">
                  {title}
                </h3>
                <p className="text-[13px] sm:text-[14px] leading-relaxed text-gray-600 group-hover:text-gray-300 transition-colors">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
