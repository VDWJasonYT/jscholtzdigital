import { useState } from "react";
import { BadgeRow } from "./ui";
import Reveal from "./Reveal";
import SectionTexture from "./SectionTexture";

type Row = {
  title: string;
  price: string;
  desc?: string;
  placeholderComment?: string;
};

const ZAR_ROWS: Row[] = [
  {
    title: "One-page website",
    price: "from R4,500",
    desc: "A focused page for your business, with a way for customers to enquire.",
  },
  {
    title: "Multi-page website",
    price: "from R12,000",
    desc: "A full site with separate pages for your services, about, gallery and contact, built to be found on Google.",
  },
  {
    title: "Google Business Profile setup",
    price: "R1,200",
    desc: "Your Google listing set up so people can find you on Search and Maps.",
  },
  {
    title: "Ad management",
    price: "R4,000/mo",
    desc: "I plan and run ads for your business, with a clear scope before I start.",
  },
  {
    title: "Website security checks",
    price: "R2,500",
    desc: "A passive outside review of your site, written up in plain English.",
  },
  {
    title: "Apps",
    price: "Quoted for project requirements",
    desc: "Web and mobile apps shaped around how your business actually works.",
  },
  {
    title: "Maintenance",
    price: "R700",
    desc: "Updates and fixes after launch, agreed before I start.",
  },
  {
    title: "Facebook Ad Generation",
    price: "R7,500/mo",
    desc: "Ad spend excluded, 3-month minimum.",
  },
];

const USD_ROWS: Row[] = [
  { title: "Landing page", price: "$850" },
  { title: "5-page website", price: "$1,800" },
  { title: "Website + booking", price: "from $2,800" },
  { title: "Website security check", price: "$399" },
  { title: "Security audit", price: "from $1,500" },
  { title: "Basic Care", price: "$99/mo" },
  { title: "Secure Care", price: "$249/mo" },
  { title: "Hourly", price: "$75" },
  { title: "Google Business Profile setup", price: "$299" },
  { title: "Facebook tidy-up", price: "$149" },
  { title: "Google Business Profile + Facebook bundle", price: "$399" },
  { title: "Facebook Ad Generation", price: "$2,000/mo" },
  { title: "E-commerce, web app and mobile app", price: "Quote only" },
];

const TABS = [
  { id: "zar" as const, label: "South Africa (ZAR)" },
  { id: "usd" as const, label: "International / US (USD)" },
];

export default function Pricing() {
  const [tab, setTab] = useState<"zar" | "usd">("zar");

  return (
    <section
      id="pricing"
      className="relative overflow-hidden bg-[#F5F5F5] pt-16 sm:pt-20 lg:pt-28 pb-16 sm:pb-20 lg:pb-24"
    >
      <SectionTexture
        src="/media/pricing-circuit.webp"
        alt="Abstract navy and blue circuit pattern"
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
        <BadgeRow number="4" label="Prices" />
        <h2
          className="font-medium leading-[1.12] tracking-[-0.02em] text-gray-900 mb-8 sm:mb-10"
          style={{ fontSize: "clamp(1.5rem, 4vw, 3.2rem)" }}
        >
          Clear prices.
        </h2>

        <div
          role="tablist"
          aria-label="Price currency"
          className="mb-8 flex flex-col sm:flex-row gap-2 sm:gap-3"
        >
          {TABS.map((item) => {
            const selected = tab === item.id;
            return (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={selected}
                aria-controls={`pricing-panel-${item.id}`}
                id={`pricing-tab-${item.id}`}
                onClick={() => setTab(item.id)}
                className={`min-h-[44px] rounded-full px-5 py-2.5 text-[14px] sm:text-[15px] font-medium text-left sm:text-center transition-colors ${
                  selected
                    ? "bg-gray-900 text-white neon-ring"
                    : "bg-white text-gray-900 hover:bg-[#EAF3FE]"
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </div>

        <Reveal>
          {tab === "zar" ? (
            <div
              role="tabpanel"
              id="pricing-panel-zar"
              aria-labelledby="pricing-tab-zar"
            >
              <PriceTable
                caption="South Africa prices in rand"
                rows={ZAR_ROWS}
              />
            </div>
          ) : (
            <div
              role="tabpanel"
              id="pricing-panel-usd"
              aria-labelledby="pricing-tab-usd"
            >
              <PriceTable
                caption="International US dollar prices"
                rows={USD_ROWS}
              />
            </div>
          )}
        </Reveal>

        <p className="mt-8 text-[14px] sm:text-[15px] font-medium text-gray-900 max-w-3xl">
          Each quote sets out the scope, hosting and domain costs before work starts.
        </p>
      </div>
    </section>
  );
}

function PriceTable({ caption, rows }: { caption: string; rows: Row[] }) {
  return (
    <table className="w-full text-left border-separate border-spacing-y-3">
      <caption className="sr-only">{caption}</caption>
      <thead>
        <tr className="text-[12px] sm:text-[13px] uppercase tracking-wide text-gray-600 font-mono">
          <th scope="col" className="px-1 pb-1 font-medium">
            Service
          </th>
          <th scope="col" className="px-1 pb-1 font-medium text-right">
            Price
          </th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row, i) => (
          <tr key={row.title}>
            <td colSpan={2} className="p-0">
              {row.placeholderComment ? (
                <span
                  dangerouslySetInnerHTML={{
                    __html: `<!-- ${row.placeholderComment} -->`,
                  }}
                />
              ) : null}
              <div
                className={`rounded-2xl px-4 sm:px-5 py-4 sm:py-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-6 ${
                  i === 0 ? "grad-card-dark text-white" : "grad-card text-gray-900"
                }`}
              >
                <div className="min-w-0">
                  <p className="text-[15px] sm:text-[16px] font-semibold">{row.title}</p>
                  {row.desc ? (
                    <p
                      className={`mt-1 text-[13px] sm:text-[14px] leading-relaxed ${
                        i === 0 ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      {row.desc}
                    </p>
                  ) : null}
                </div>
                <p className="font-mono text-[15px] sm:text-[16px] font-medium sm:text-right shrink-0">
                  {row.price}
                </p>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
