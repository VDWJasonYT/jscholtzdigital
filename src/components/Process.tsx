import { BadgeRow } from "./ui";
import ProcessPanel, { type ProcessIcon } from "./graphics/ProcessPanel";

const STEPS: { step: string; title: string; line: string; icon: ProcessIcon; tilt: number }[] = [
  {
    step: "01",
    title: "Understand",
    line: "We look at your business, your customers, and your current ads, website and Google profile.",
    icon: "chat",
    tilt: -7,
  },
  {
    step: "02",
    title: "Build",
    line: "We set up your website, profile and campaigns, and make AI video creatives for you to approve.",
    icon: "browser",
    tilt: 6,
  },
  {
    step: "03",
    title: "Launch",
    line: "Campaigns go live, the site is checked on a phone, and you get the logins to what you own.",
    icon: "rocket",
    tilt: -5,
  },
  {
    step: "04",
    title: "Improve",
    line: "We review what ran, refresh creatives and adjust, then report back in plain language.",
    icon: "wrench",
    tilt: 7,
  },
];

export default function Process() {
  return (
    <section id="process" className="bg-white pt-16 sm:pt-20 lg:pt-28 pb-16 sm:pb-20 lg:pb-24">
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <BadgeRow number="4" label="How we work" />
        <h2
          className="font-medium leading-[1.12] tracking-[-0.02em] text-gray-900 mb-10 sm:mb-14"
          style={{ fontSize: "clamp(1.5rem, 4vw, 3.2rem)" }}
        >
          Understand, build,
          <br />
          launch, improve.
        </h2>

        <div className="relative">

          <ol className="relative z-10 grid grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-10 list-none p-0 m-0">
            {STEPS.map((item) => (
              <li key={item.title}>
                <ProcessPanel tilt={item.tilt} step={item.step} icon={item.icon} />
                <h3 className="mt-4 text-[16px] sm:text-[17px] font-semibold text-gray-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-[13px] sm:text-[14px] leading-relaxed text-gray-600">
                  {item.line}
                </p>
              </li>
            ))}
          </ol>
        </div>
        <div className="mt-14 sm:mt-16 rounded-2xl bg-[#F5F5F5] p-6 sm:p-8 max-w-4xl">
          <h3 className="text-[18px] sm:text-[20px] font-semibold text-gray-900">How we work: remote-first</h3>
          <ul className="mt-4 grid sm:grid-cols-2 gap-3 text-[14px] sm:text-[15px] leading-relaxed text-gray-700 list-disc pl-5">
            <li>We handle enquiries online, by WhatsApp, email or the form below.</li>
            <li>Discovery calls take 20 to 30 minutes.</li>
            <li>We send proposals and quotes digitally.</li>
            <li>We meet in person only when there is a good business reason.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
