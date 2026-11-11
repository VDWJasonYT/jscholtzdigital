import { Minus, Plus } from "lucide-react";
import { BadgeRow } from "./ui";

export const QUESTIONS: { q: string; a: string }[] = [
  {
    q: "What is an AI video creative?",
    a: "A short video ad for Facebook and Instagram that we create with AI video tools, based on your business, products and offers. You approve every creative before it runs.",
  },
  {
    q: "How much do the packages cost?",
    a: "Starter is R9,500 setup then R8,500/mo, Growth is R18,000 setup then R9,500/mo, and Premium is R38,000 setup then R15,000/mo. Every package has a 50% deposit on setup, the first month paid upfront and a 3-month minimum.",
  },
  {
    q: "What do Basic Care and Secure Care include?",
    a: "Basic Care covers hosting checks, updates, backups and small text edits. Secure Care is everything in Basic Care, plus a monthly security scan, malware cleanup and priority support. Starter includes Basic Care; Growth and Premium include Secure Care.",
  },
  {
    q: "Is ad spend included?",
    a: "No. Ad spend is always extra and paid by you straight to Meta. We suggest at least R3,000 a month.",
  },
  {
    q: "Do you guarantee leads or sales?",
    a: "No. Nobody can honestly guarantee results from ads. We agree clear goals with you, track them, and report on what ran in plain language.",
  },
  {
    q: "Can you take over my existing website or ad account?",
    a: "Yes. We first check that you own and can access the site and accounts. Then we explain what to keep, what to fix, and whether a rebuild is the better path.",
  },
  {
    q: "What is a website security check?",
    a: "A passive review of your site from the outside, written up in plain English. We only do active testing if you give us written permission first.",
  },
  {
    q: "Where are you based?",
    a: "We are based in Secunda, Mpumalanga, and work remote-first with businesses across South Africa.",
  },
];

export default function Faq() {
  return (
    <section id="faq" className="bg-white pt-16 sm:pt-20 lg:pt-28 pb-16 sm:pb-20 lg:pb-24">
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <BadgeRow number="6" label="FAQ" />
        <h2
          className="font-medium leading-[1.12] tracking-[-0.02em] text-gray-900 mb-10 sm:mb-14 max-w-3xl"
          style={{ fontSize: "clamp(1.5rem, 4vw, 3.2rem)" }}
        >
          Questions before the next step
        </h2>

        <div className="flex flex-col gap-3 max-w-3xl">
          {QUESTIONS.map((item, index) => (
            <details
              key={item.q}
              open={index === 0}
              className="group rounded-2xl bg-[#F5F5F5] px-5 sm:px-6 py-1"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-4 text-left text-[16px] sm:text-[17px] font-medium text-gray-900 [&::-webkit-details-marker]:hidden">
                <span>{item.q}</span>
                <Plus size={18} className="shrink-0 text-[#1A6FD0] group-open:hidden" aria-hidden="true" />
                <Minus size={18} className="hidden shrink-0 text-[#1A6FD0] group-open:block" aria-hidden="true" />
              </summary>
              <p className="pb-5 text-[14px] sm:text-[15px] leading-relaxed text-gray-600 max-w-2xl">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
