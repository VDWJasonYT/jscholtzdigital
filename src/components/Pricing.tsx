import { BadgeRow } from "./ui";

type Plan = { title: string; price: string; from?: boolean; per?: string; desc: string; note?: string; featured?: boolean };

const PLANS: Plan[] = [
  { title: "Google listing", price: "R1 200", desc: "Create and verify your Google Maps/Search listing with photos, hours, services and a review link." },
  { title: "Starter", price: "R1 800", desc: "Your Google Business Profile set up and verified, plus your Facebook page tidied up: intro text, logo, Message/Call button and business email." },
  { title: "Security Check", price: "R2 500", desc: "Passive review plus a written plain-English report: HTTPS, outdated CMS/plugins, exposed login and POPIA form notices." },
  { title: "One-page website", price: "R4 500", from: true, featured: true, desc: "A mobile-friendly page with an enquiry form and basic SEO." },
  { title: "5-page website", price: "R12 000", from: true, desc: "Custom design with HTTPS and basic security hardening, local SEO and a Google Business link." },
  { title: "Basic Care", price: "R850", per: "/ month", desc: "Updates with backup first, uptime and security monitoring, 1 hour of changes.", note: "No contract, 30 days' notice to cancel." },
  { title: "Secure Care", price: "R1 800", per: "/ month", desc: "Basic Care plus firewall, login protection, a monthly security report and 3 hours of changes." },
];

export default function Pricing() {
  return (
    <section id="pricing" className="bg-white border-t border-gray-100 pt-16 sm:pt-20 lg:pt-28 pb-16 sm:pb-20 lg:pb-24">
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <BadgeRow number="3" label="Prices" />
        <h2 className="font-medium leading-[1.12] tracking-[-0.02em] text-gray-900 mb-10 sm:mb-14" style={{ fontSize: "clamp(1.5rem, 4vw, 3.2rem)" }}>
          Clear prices,
          <br />
          in rand.
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {PLANS.map((p) => (
            <div key={p.title} className={`rounded-2xl p-6 sm:p-7 flex flex-col ${p.featured ? "bg-gray-900 text-white" : "bg-[#F5F5F5] text-gray-900"}`}>
              <h3 className="text-[16px] sm:text-[17px] font-semibold mb-3">{p.title}</h3>
              <p className="text-[28px] font-medium tracking-[-0.02em] mb-3">
                {p.from && <span className={`text-[13px] font-normal mr-1 ${p.featured ? "text-gray-400" : "text-gray-600"}`}>from</span>}
                {p.price}
                {p.per && <span className={`text-[13px] font-normal ml-1 ${p.featured ? "text-gray-400" : "text-gray-600"}`}>{p.per}</span>}
              </p>
              <p className={`text-[13px] sm:text-[14px] leading-relaxed ${p.featured ? "text-gray-300" : "text-gray-600"}`}>{p.desc}</p>
              {p.note && <p className="text-[12px] mt-3 text-gray-600">{p.note}</p>}
            </div>
          ))}
        </div>
        <div className="mt-8 flex flex-col sm:flex-row gap-2 sm:gap-6 text-[14px] font-medium text-gray-900">
          <span>50% deposit before work starts, the rest on handover.</span>
          <span>Not VAT registered.</span>
        </div>
      </div>
    </section>
  );
}
