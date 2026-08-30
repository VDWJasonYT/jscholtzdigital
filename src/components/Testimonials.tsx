import { Star } from "lucide-react";
import { BadgeRow } from "./ui";

type Review = {
  quote: string;
  name: string;
  role: string;
  initials: string;
};

/**
 * Client reviews. Replace the copy below with verbatim testimonials as
 * clients send them through.
 */
const REVIEWS: Review[] = [
  {
    quote:
      "They took a rough idea for a bedtime story app and turned it into something our testers didn't want to put down. Clear scoping, weekly builds, and the app shipped inside three months.",
    name: "Amelia R.",
    role: "Founder, TinyTales",
    initials: "AR",
  },
  {
    quote:
      "Veterio handles contracts and payouts for clinics across two countries, so security was non-negotiable. They walked us through the architecture, tested it properly, and gave us a report we could hand to our insurers.",
    name: "Daniel K.",
    role: "Director, Veterio",
    initials: "DK",
  },
  {
    quote:
      "We came in with a small budget and left with a marketplace that actually works. They were honest about what we should build now versus later, which saved us a fortune.",
    name: "Marcus T.",
    role: "Co-founder, Surplus-Pro",
    initials: "MT",
  },
  {
    quote:
      "Health data means real responsibility. Encryption, access control and a proper security review were part of the build from day one rather than an afterthought.",
    name: "Priya S.",
    role: "Product Lead, Med Vault",
    initials: "PS",
  },
  {
    quote:
      "Review Wolf now runs our review requests on autopilot and our Google rating climbed within weeks. The CRM integration was the part I expected to break, and it just worked.",
    name: "Mike Anderson",
    role: "Owner, Apex Roofing",
    initials: "MA",
  },
  {
    quote:
      "We asked them to pen-test a platform another agency built. The findings were specific, prioritised and written so our team could actually act on them. Everything was closed out in a fortnight.",
    name: "Nadia P.",
    role: "Operations Manager, Logistics SME",
    initials: "NP",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="bg-[#F5F5F5] pt-16 sm:pt-20 lg:pt-28 pb-16 sm:pb-20 lg:pb-24"
    >
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <BadgeRow number="5" label="Client reviews" border="border-gray-300" />
        <h2
          className="font-medium leading-[1.12] tracking-[-0.02em] text-gray-900 mb-10 sm:mb-14"
          style={{ fontSize: "clamp(1.5rem, 4vw, 3.2rem)" }}
        >
          What clients say.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {REVIEWS.map((r) => (
            <div
              key={r.name}
              className="bg-white rounded-2xl p-6 sm:p-7 shadow-[0_2px_8px_rgba(0,0,0,0.05)] flex flex-col"
            >
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={15}
                    className="fill-[#1E7FEB] text-[#1E7FEB]"
                  />
                ))}
              </div>
              <p className="text-[14px] sm:text-[15px] leading-relaxed text-gray-800 mt-4 flex-1">
                {r.quote}
              </p>
              <div className="mt-6 flex items-center gap-3">
                <span className="w-9 h-9 rounded-full bg-gray-900 text-white text-[12px] font-semibold flex items-center justify-center">
                  {r.initials}
                </span>
                <div>
                  <p className="text-[13px] font-semibold text-gray-900">
                    {r.name}
                  </p>
                  <p className="text-[12px] text-gray-500">{r.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
