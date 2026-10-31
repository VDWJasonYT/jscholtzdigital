import { BadgeRow } from "./ui";
import ProcessPanel, { type ProcessIcon } from "./graphics/ProcessPanel";

const STEPS: { step: string; title: string; line: string; icon: ProcessIcon; tilt: number }[] = [
  {
    step: "01",
    title: "Understand",
    line: "I learn your business, your customers and what the project needs to do.",
    icon: "chat",
    tilt: -7,
  },
  {
    step: "02",
    title: "Build",
    line: "I design and build it, and show you progress before anything goes live.",
    icon: "browser",
    tilt: 6,
  },
  {
    step: "03",
    title: "Launch",
    line: "I put it live, check it on a phone, and hand over the logins.",
    icon: "rocket",
    tilt: -5,
  },
  {
    step: "04",
    title: "Improve",
    line: "After launch I maintain and update it, by agreement.",
    icon: "wrench",
    tilt: 7,
  },
];

export default function Process() {
  return (
    <section id="process" className="bg-white pt-16 sm:pt-20 lg:pt-28 pb-16 sm:pb-20 lg:pb-24">
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <BadgeRow number="3" label="How I work" />
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
          <h3 className="text-[18px] sm:text-[20px] font-semibold text-gray-900">How I work: remote-first</h3>
          <ul className="mt-4 grid sm:grid-cols-2 gap-3 text-[14px] sm:text-[15px] leading-relaxed text-gray-700 list-disc pl-5">
            <li>I handle enquiries online, by WhatsApp, email or the form below.</li>
            <li>Discovery calls take 20 to 30 minutes.</li>
            <li>I send proposals and quotes digitally.</li>
            <li>I meet in person only when there is a good business reason.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
