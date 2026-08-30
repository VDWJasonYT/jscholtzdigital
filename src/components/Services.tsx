import {
  Code2,
  Smartphone,
  ShieldCheck,
  Cloud,
  Search,
  Wrench,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { BadgeRow } from "./ui";

type Service = {
  icon: LucideIcon;
  title: string;
  desc: string;
};

const SERVICES: Service[] = [
  {
    icon: Code2,
    title: "Custom Software Development",
    desc: "Web platforms, marketplaces and internal tools engineered around your business logic — not squeezed into a template.",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    desc: "Cross-platform iOS and Android apps in React Native, from first concept through to store release.",
  },
  {
    icon: ShieldCheck,
    title: "Cybersecurity Engineering",
    desc: "Secure architecture, authentication, encryption and access control built in from day one rather than bolted on later.",
  },
  {
    icon: Search,
    title: "Security Testing & Audits",
    desc: "Authorised penetration testing, code review and vulnerability assessments with clear, prioritised remediation reports.",
  },
  {
    icon: Cloud,
    title: "Cloud & DevSecOps",
    desc: "Hardened cloud infrastructure, CI/CD pipelines and monitoring so releases stay fast, stable and compliant.",
  },
  {
    icon: Wrench,
    title: "Support & Maintenance",
    desc: "Ongoing updates, patching, performance tuning and feature work to keep your product current and protected.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="bg-white border-t border-gray-100 pt-16 sm:pt-20 lg:pt-28 pb-16 sm:pb-20 lg:pb-24"
    >
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <BadgeRow number="2" label="What we do" />
        <h2
          className="font-medium leading-[1.12] tracking-[-0.02em] text-gray-900 mb-10 sm:mb-14"
          style={{ fontSize: "clamp(1.5rem, 4vw, 3.2rem)" }}
        >
          Software development and
          <br />
          cybersecurity, under one roof.
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
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
