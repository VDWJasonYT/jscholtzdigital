import { ArrowRight } from "lucide-react";
import { BadgeRow } from "./ui";

const ALTYD_LEKKER_URL = "https://altydlekker.co.za";
const MODERN_DENTAL_URL = "https://moderndental.co.za/";

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
    <section
      id="portfolio"
      className="bg-white pt-16 sm:pt-20 lg:pt-28 pb-16 sm:pb-20 lg:pb-28"
    >
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <BadgeRow number="5" label="Work" border="border-gray-300" />
        <h2
          className="font-medium leading-[1.08] tracking-[-0.03em] text-gray-900 mb-10 sm:mb-14 lg:mb-16"
          style={{ fontSize: "clamp(1.75rem, 4vw, 3.4rem)" }}
        >
          Live client sites.
        </h2>

        <a
          href={ALTYD_LEKKER_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 lg:gap-8 items-center rounded-2xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1E7FEB]"
        >
          <div className="relative aspect-[3/2] rounded-2xl overflow-hidden bg-[#245c49]">
            <img
              src="/media/altyd-lekker.webp"
              alt="Outdoor pool and thatched house at Altyd Lekker in Marloth Park"
              width={1200}
              height={800}
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover"
            />
            <span className="absolute top-4 left-4 bg-white text-gray-900 text-[11px] font-semibold uppercase tracking-wide rounded-full px-3 py-1">
              Client project
            </span>
            <div className="absolute bottom-4 left-4 h-9 w-9 group-hover:w-[132px] group-focus-visible:w-[132px] bg-[#1E7FEB] rounded-full flex items-center overflow-hidden transition-all duration-300 ease-in-out">
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

          <div className="md:pr-4 lg:pr-10">
            <p className="text-[12px] text-gray-600">Client project</p>
            <h3 className="text-[22px] sm:text-[28px] font-semibold tracking-[-0.02em] text-gray-900 mt-1">
              Altyd Lekker
            </h3>
            <p className="text-[13px] sm:text-[15px] text-gray-600 mt-3 leading-relaxed max-w-md">
              Paid self-catering website build for a Marloth Park stay: booking
              paths, mobile-first, live on altydlekker.co.za.
            </p>
            <p className="mt-4 inline-flex items-center gap-2 text-[13px] sm:text-[14px] font-medium text-[#1E7FEB]">
              <LinkIcon />
              altydlekker.co.za
              <span className="sr-only"> (opens in a new tab)</span>
            </p>
          </div>
        </a>

        <a
          href={MODERN_DENTAL_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group mt-12 sm:mt-16 lg:mt-20 grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 lg:gap-8 items-center rounded-2xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1E7FEB]"
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
              Completed client website
            </span>
            <div className="absolute bottom-4 left-4 h-9 w-9 group-hover:w-[132px] group-focus-visible:w-[132px] bg-[#1E7FEB] rounded-full flex items-center overflow-hidden transition-all duration-300 ease-in-out">
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
            <p className="text-[12px] text-gray-600">Completed client website</p>
            <h3 className="text-[22px] sm:text-[28px] font-semibold tracking-[-0.02em] text-gray-900 mt-1">
              Modern Dental
            </h3>
            <p className="text-[13px] sm:text-[15px] text-gray-600 mt-3 leading-relaxed max-w-md">
              I built this completed client website for Modern Dental, Dr Christo
              Brecher's practice in Secunda. It has service pages, a gallery, and
              a contact page with click-to-call, a WhatsApp link, and a Google
              Maps link to the address.
            </p>
            <p className="mt-4 inline-flex max-w-full items-center gap-2 text-[13px] sm:text-[14px] font-medium text-[#1E7FEB]">
              <LinkIcon />
              <span className="min-w-0 break-words">moderndental.co.za</span>
              <span className="sr-only"> (opens in a new tab)</span>
            </p>
          </div>
        </a>

      </div>
    </section>
  );
}
