import { BadgeRow } from "./ui";

type Plan = {
  title: string;
  price: string;
  desc: string;
  featured?: boolean;
};

const PLANS: Plan[] = [
  {
    title: "One-page website",
    price: "from R4,500",
    featured: true,
    desc: "A focused page for your business, with a way for customers to enquire.",
  },
  {
    title: "Google Business listing setup",
    price: "R1,200",
    desc: "Your Google listing set up so people can find you on Search and Maps.",
  },
  {
    title: "Custom apps and security work",
    price: "Quoted per project",
    desc: "Apps and security work, scoped to the outcome you actually need.",
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="bg-[#F5F5F5] pt-16 sm:pt-20 lg:pt-28 pb-16 sm:pb-20 lg:pb-24">
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <BadgeRow number="4" label="Prices" />
        <h2
          className="font-medium leading-[1.12] tracking-[-0.02em] text-gray-900 mb-10 sm:mb-14"
          style={{ fontSize: "clamp(1.5rem, 4vw, 3.2rem)" }}
        >
          Clear prices,
          <br />
          in rand.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {PLANS.map((plan) => (
            <div
              key={plan.title}
              className={`rounded-2xl p-6 sm:p-7 flex flex-col ${
                plan.featured ? "bg-gray-900 text-white" : "bg-white text-gray-900"
              }`}
            >
              <h3 className="text-[16px] sm:text-[17px] font-semibold mb-3">{plan.title}</h3>
              <p className="text-[28px] font-medium tracking-[-0.02em] mb-3 leading-tight">
                {plan.price}
              </p>
              <p
                className={`text-[13px] sm:text-[14px] leading-relaxed ${
                  plan.featured ? "text-gray-300" : "text-gray-600"
                }`}
              >
                {plan.desc}
              </p>
            </div>
          ))}
        </div>
        <p className="mt-8 text-[14px] sm:text-[15px] font-medium text-gray-900 max-w-3xl">
          Each quote sets out the scope, hosting and domain costs before work starts.
        </p>
      </div>
    </section>
  );
}
