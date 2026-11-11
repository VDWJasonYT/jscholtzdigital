import { Check } from "lucide-react";
import { BadgeRow } from "./ui";
import Reveal from "./Reveal";
import SectionTexture from "./SectionTexture";
import { WHATSAPP_URL } from "../site";

/*
 * Package scope and rand prices approved by Jason (11 Nov 2026).
 * ZAR only on this agency site. Ad spend is always extra, paid by the client to Meta.
 */
type Package = {
  name: string;
  tagline: string;
  setup: string;
  monthly: string;
  featured?: boolean;
  includes: string[];
};

const PACKAGES: Package[] = [
  {
    name: "Starter",
    tagline: "Get found and start advertising.",
    setup: "R9,500",
    monthly: "R8,500",
    includes: [
      "Landing page",
      "Website security check",
      "Google Business Profile setup",
      "Meta ads on Facebook and Instagram",
      "6 AI video creatives a month",
      "Basic Care website support",
    ],
  },
  {
    name: "Growth",
    tagline: "More pages, plus retargeting.",
    setup: "R18,000",
    monthly: "R9,500",
    featured: true,
    includes: [
      "5-page website",
      "Website security check",
      "Google Business Profile setup",
      "Meta ads plus retargeting",
      "6 AI video creatives a month",
      "Secure Care website support",
    ],
  },
  {
    name: "Premium",
    tagline: "The full system, actively managed.",
    setup: "R38,000",
    monthly: "R15,000",
    includes: [
      "Website with booking",
      "Full security audit",
      "12 AI video creatives a month",
      "Up to 3 Meta ad campaigns",
      "Secure Care website support",
      "Monthly strategy call",
    ],
  },
];

const PACKAGE_TERMS = [
  "50% deposit on setup",
  "First month paid upfront",
  "3-month minimum",
  "No lead guarantees",
];

const STANDALONE: { title: string; price: string; note?: string }[] = [
  { title: "One-Page Website", price: "from R4,500" },
  { title: "Multi-Page Website", price: "from R12,000" },
  { title: "Google Business Profile Setup", price: "R1,200" },
  { title: "Ad management", price: "R4,000/mo" },
  { title: "Website security check", price: "R2,500" },
  { title: "Facebook Ad Generation", price: "R7,500/mo", note: "Ad spend excluded, 3-month minimum" },
  { title: "Maintenance", price: "R700/mo" },
  { title: "Apps", price: "Quoted per project" },
];

function packageLink(name: string) {
  const text = `Hi JScholtz Digital, I'm interested in the ${name} package.`;
  return `${WHATSAPP_URL}?text=${encodeURIComponent(text)}`;
}

const CARE_PLANS = [
  {
    name: "Basic Care (Starter)",
    detail: "Hosting checks, updates, backups and small text edits.",
  },
  {
    name: "Secure Care (Growth and Premium)",
    detail: "Everything in Basic Care, plus a monthly security scan, malware cleanup and priority support.",
  },
];

export default function Pricing() {
  return (
    <section
      id="packages"
      className="relative overflow-hidden bg-[#F5F5F5] pt-16 sm:pt-20 lg:pt-28 pb-16 sm:pb-20 lg:pb-24 scroll-mt-4"
    >
      <span id="pricing" className="absolute top-0" aria-hidden="true" />
      <SectionTexture
        src="/media/pricing-circuit.webp"
        alt=""
        className="opacity-[0.12]"
      />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(245,245,245,0.88) 0%, rgba(245,245,245,0.96) 40%, #F5F5F5 100%)",
        }}
      />
      <div className="relative mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <BadgeRow number="1" label="Packages" />
        <h2
          className="font-medium leading-[1.12] tracking-[-0.02em] text-gray-900 mb-4 max-w-3xl"
          style={{ fontSize: "clamp(1.5rem, 4vw, 3.2rem)" }}
        >
          Starter, Growth and Premium.
        </h2>
        <p className="text-[15px] sm:text-[16px] text-gray-600 max-w-2xl mb-10 sm:mb-14">
          Every package combines ads, website, security and Google presence. All prices in rand.
          Ad spend is always extra and paid by you straight to Meta, with R3,000 a month suggested as
          the minimum.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 sm:gap-6">
          {PACKAGES.map((pkg) => {
            const dark = pkg.featured;
            return (
              <Reveal key={pkg.name} className="h-full">
                <article
                  className={`h-full rounded-2xl p-6 sm:p-7 flex flex-col ${
                    dark ? "grad-card-dark text-white" : "grad-card text-gray-900"
                  }`}
                >
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="text-[22px] sm:text-[24px] font-semibold tracking-[-0.02em]">{pkg.name}</h3>
                    {dark ? (
                      <span className="rounded-full bg-[#1A6FD0] px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-white">
                        Recommended
                      </span>
                    ) : null}
                  </div>
                  <p className={`mt-1 text-[14px] ${dark ? "text-gray-300" : "text-gray-600"}`}>{pkg.tagline}</p>
                  <div className="mt-5">
                    <p className="font-mono text-[30px] sm:text-[34px] font-medium tracking-[-0.02em] leading-none">
                      {pkg.monthly}
                      <span className={`text-[15px] ${dark ? "text-gray-300" : "text-gray-600"}`}>/mo</span>
                    </p>
                    <p className={`mt-2 font-mono text-[14px] ${dark ? "text-gray-300" : "text-gray-600"}`}>
                      plus {pkg.setup} once-off setup
                    </p>
                  </div>
                  <ul className="mt-6 space-y-3 flex-1">
                    {pkg.includes.map((item) => (
                      <li key={item} className="flex gap-3 text-[14px] sm:text-[15px] leading-snug">
                        <Check size={18} className="mt-0.5 shrink-0 text-[#1A6FD0]" aria-hidden="true" />
                        <span className={dark ? "text-gray-100" : "text-gray-800"}>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href={packageLink(pkg.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`mt-7 inline-flex min-h-[48px] items-center justify-center rounded-full px-5 text-[14px] sm:text-[15px] font-medium transition-colors ${
                      dark
                        ? "bg-[#1A6FD0] text-white hover:bg-[#155BB0]"
                        : "bg-white text-[#1A6FD0] border-2 border-[#1A6FD0] hover:bg-[#EAF3FE]"
                    }`}
                  >
                    Start with {pkg.name}
                  </a>
                </article>
              </Reveal>
            );
          })}
        </div>

        <div id="care-plans" className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-3">
          {CARE_PLANS.map((plan) => (
            <div key={plan.name} className="rounded-2xl grad-card p-5 sm:p-6">
              <h3 className="text-[15px] sm:text-[16px] font-semibold text-gray-900">{plan.name}</h3>
              <p className="mt-2 text-[14px] sm:text-[15px] leading-relaxed text-gray-700">{plan.detail}</p>
            </div>
          ))}
        </div>

        <div className="mt-3 rounded-2xl grad-card p-5 sm:p-6">
          <h3 className="text-[15px] sm:text-[16px] font-semibold text-gray-900">On every package</h3>
          <ul className="mt-3 flex flex-wrap gap-2">
            {PACKAGE_TERMS.map((term) => (
              <li key={term} className="rounded-full bg-[#F5F5F5] px-3 py-1.5 text-[13px] sm:text-[14px] font-medium text-gray-900">
                {term}
              </li>
            ))}
            <li className="rounded-full bg-[#F5F5F5] px-3 py-1.5 text-[13px] sm:text-[14px] font-medium text-gray-900">
              Ad spend extra, paid to Meta (R3,000/mo suggested minimum)
            </li>
          </ul>
        </div>

        <div className="mt-14 sm:mt-16">
          <h3
            className="font-medium leading-[1.15] tracking-[-0.02em] text-gray-900"
            style={{ fontSize: "clamp(1.3rem, 3vw, 2.2rem)" }}
          >
            Standalone services
          </h3>
          <p className="mt-2 text-[14px] sm:text-[15px] text-gray-600 max-w-2xl">
            Need just one thing? These are available on their own.
          </p>
          <ul className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-3">
            {STANDALONE.map((item) => (
              <li
                key={item.title}
                className="grad-card rounded-2xl px-4 sm:px-5 py-4 flex items-center justify-between gap-4"
              >
                <span className="min-w-0">
                  <span className="block text-[15px] font-semibold text-gray-900">{item.title}</span>
                  {item.note ? (
                    <span className="mt-0.5 block text-[13px] text-gray-600">{item.note}</span>
                  ) : null}
                </span>
                <span className="shrink-0 text-right font-mono text-[14px] sm:text-[15px] font-medium text-gray-900">
                  {item.price}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
