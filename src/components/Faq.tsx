import { Minus, Plus } from "lucide-react";
import { BadgeRow } from "./ui";

const QUESTIONS: { q: string; a: string }[] = [
  {
    q: "What does a website from R4,500 include?",
    a: "From R4,500 is the starting point for a focused business site. Before I quote, you and I agree the pages, content, features and the ways customers can reach you. The quote sets out that scope, plus any hosting, domain or support costs, before work begins.",
  },
  {
    q: "Can you take over or fix my existing website?",
    a: "Yes. I first check that you can access the site, that you own it, and how it is set up. Then I explain what to keep, what to fix, and whether a rebuild is the better path.",
  },
  {
    q: "How long does a project take?",
    a: "It depends on the scope, how ready your content is, and how quickly approvals come back. The proposal includes a practical timeline.",
  },
  {
    q: "Do you offer support after launch?",
    a: "Yes. I offer maintenance and updates after launch, by agreement.",
  },
  {
    q: "How is a custom app or security work priced?",
    a: "I quote after I understand the workflow, who will use it, and the outcome you want. You do not pay for features you do not need.",
  },
  {
    q: "What is a website security check?",
    a: "It is a passive review from outside your site. I only do active testing if you give me written permission first.",
  },
];

export default function Faq() {
  return (
    <section id="faq" className="bg-white pt-16 sm:pt-20 lg:pt-28 pb-16 sm:pb-20 lg:pb-24">
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <BadgeRow number="7" label="FAQ" />
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
                <Plus size={18} className="shrink-0 text-[#1E7FEB] group-open:hidden" aria-hidden="true" />
                <Minus size={18} className="hidden shrink-0 text-[#1E7FEB] group-open:block" aria-hidden="true" />
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
