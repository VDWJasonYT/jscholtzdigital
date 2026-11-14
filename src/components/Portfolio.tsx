import { ArrowRight } from "lucide-react";
import { BadgeRow } from "./ui";

const MODERN_DENTAL_URL = "https://moderndental.co.za/";

/** Only features visible on the live moderndental.co.za site. */
const MODERN_DENTAL_BUILT = [
  "Service pages for each treatment",
  "Photo gallery",
  "Contact page with click-to-call",
  "WhatsApp button",
  "Google Maps link to the practice",
  "Reviews section linking to Google and Facebook",
  "Facebook page link",
];

/** lucide "Link" icon, drawn manually with two arc paths. */
function LinkIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </svg>
  );
}

export default function Portfolio() {
  return (
    <section className="bg-white pt-16 sm:pt-20 lg:pt-28 pb-16 sm:pb-20 lg:pb-28">
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <h2
          className="font-medium leading-[1.08] tracking-[-0.03em] text-gray-900 max-w-3xl"
          style={{ fontSize: "clamp(1.75rem, 4vw, 3.4rem)" }}
        >
          Why I do this
        </h2>
        <blockquote className="mt-5 max-w-3xl">
          <p className="text-[16px] sm:text-[18px] leading-relaxed text-gray-800">
            I've worked with Modern Dental and seen their practice running day to day. GPs and dentists are with patients all day, so there's no time to post on social media, keep the website updated or keep up with new tech. That's the part I take off their plate.
          </p>
          <footer className="mt-5 text-[15px] font-semibold text-gray-900">Jason Scholtz</footer>
        </blockquote>

        <div id="portfolio" className="scroll-mt-4 mt-16 sm:mt-20 lg:mt-24">
        <BadgeRow number="2" label="Case study" border="border-gray-300" />
        <h2
          className="font-medium leading-[1.08] tracking-[-0.03em] text-gray-900 mb-10 sm:mb-14 lg:mb-16"
          style={{ fontSize: "clamp(1.75rem, 4vw, 3.4rem)" }}
        >
          A completed practice website.
        </h2>

        <a
          href={MODERN_DENTAL_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 lg:gap-8 items-center rounded-2xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1A6FD0]"
        >
          <div className="relative aspect-[3/2] rounded-2xl overflow-hidden bg-[#1b2836]">
            <img
              src="/media/modern-dental.webp"
              alt="Homepage of the Modern Dental website for Dr Christo Brecher in Secunda"
              width={1200}
              height={800}
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover object-top"
            />
            <span className="absolute top-4 left-4 max-w-[calc(100%-2rem)] bg-white text-gray-900 text-[11px] font-semibold uppercase tracking-wide rounded-full px-3 py-1 shadow-sm">
              Case study
            </span>
            <div className="absolute bottom-4 left-4 h-9 w-9 group-hover:w-[132px] group-focus-visible:w-[132px] bg-[#1A6FD0] rounded-full flex items-center overflow-hidden transition-all duration-300 ease-in-out">
              <span className="h-9 w-9 shrink-0 flex items-center justify-center">
                <ArrowRight
                  size={14}
                  className="text-white -rotate-45 group-hover:rotate-0 group-focus-visible:rotate-0 transition-transform duration-300"
                />
              </span>
              <span className="text-[13px] font-medium text-white whitespace-nowrap opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity duration-300 delay-100 pr-4">
                Visit site
              </span>
            </div>
          </div>

          <div className="min-w-0 md:pr-4 lg:pr-10">
            <p className="text-[12px] text-gray-600">Case study · Completed client website</p>
            <h3 className="text-[22px] sm:text-[28px] font-semibold tracking-[-0.02em] text-gray-900 mt-1">
              Modern Dental
            </h3>
            <p className="text-[13px] sm:text-[15px] text-gray-600 mt-3 leading-relaxed max-w-md">
              A completed website for Modern Dental, Dr Christo Brecher's dental practice in Secunda.
              What we built:
            </p>
            <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2 max-w-lg">
              {MODERN_DENTAL_BUILT.map((item) => (
                <li key={item} className="flex gap-2 text-[13px] sm:text-[14px] text-gray-800">
                  <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#1A6FD0]" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-4 inline-flex max-w-full items-center gap-2 text-[13px] sm:text-[14px] font-medium text-[#1A6FD0]">
              <LinkIcon />
              <span className="min-w-0 break-words">moderndental.co.za</span>
              <span className="sr-only"> (opens in a new tab)</span>
            </p>
          </div>
        </a>
        </div>

      </div>
    </section>
  );
}
