import { ArrowRight } from "lucide-react";
import { BadgeRow } from "./ui";
import LazyVideo from "./LazyVideo";

const VIDEO_1 = "/media/demo-narrativ.mp4";
const VIDEO_2 = "/media/demo-luminar.mp4";

const ALTYD_LEKKER_URL = "https://altydlekker.co.za";

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
          A live client site,
          <br />
          plus concept demos.
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

        <div className="mt-16 sm:mt-20 lg:mt-24">
          <h3
            className="font-medium leading-[1.12] tracking-[-0.02em] text-gray-900 mb-6 sm:mb-8"
            style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)" }}
          >
            Demo projects
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 lg:gap-7">
            {/* Narrativ demo */}
            <div>
              <div className="group relative aspect-[329/246] rounded-2xl overflow-hidden bg-[#1a1d2e]">
                <LazyVideo
                  src={VIDEO_1}
                  poster="/media/demo-narrativ-poster.webp"
                  label="Narrativ demo project: animated 3D showcase page"
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-4 left-4 bg-white text-gray-900 text-[11px] font-semibold uppercase tracking-wide rounded-full px-3 py-1">
                  Demo project
                </span>
                <div className="absolute bottom-4 left-4 h-9 w-9 group-hover:w-[148px] bg-white rounded-full flex items-center overflow-hidden transition-all duration-300 ease-in-out">
                  <span className="h-9 w-9 shrink-0 flex items-center justify-center">
                    <LinkIcon className="text-gray-900 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                  </span>
                  <span className="text-[13px] font-medium text-gray-900 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 pr-4">
                    Learn more
                  </span>
                </div>
              </div>
              <p className="text-[12px] text-gray-600 mt-4">
                Demo project. Not a client site.
              </p>
              <p className="text-[13px] sm:text-[14px] text-gray-600 mt-1 leading-relaxed">
                A concept build showing an interactive, animated showcase page.
              </p>
              <h4 className="text-[14px] sm:text-[15px] font-semibold text-gray-900 mt-1">
                Narrativ
              </h4>
            </div>

            {/* Luminar demo */}
            <div>
              <div className="group relative aspect-square rounded-2xl overflow-hidden bg-[#6b6b6b]">
                <LazyVideo
                  src={VIDEO_2}
                  poster="/media/demo-luminar-poster.webp"
                  label="Luminar demo project: brand landing page"
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-4 left-4 bg-white text-gray-900 text-[11px] font-semibold uppercase tracking-wide rounded-full px-3 py-1">
                  Demo project
                </span>
                <div className="absolute bottom-4 left-4 h-9 w-9 group-hover:w-[150px] bg-[#1E7FEB] rounded-full flex items-center overflow-hidden transition-all duration-300 ease-in-out">
                  <span className="h-9 w-9 shrink-0 flex items-center justify-center">
                    <ArrowRight
                      size={14}
                      className="text-white -rotate-45 group-hover:rotate-0 transition-transform duration-300"
                    />
                  </span>
                  <span className="text-[13px] font-medium text-white whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 pr-4">
                    Demo project
                  </span>
                </div>
              </div>
              <p className="text-[12px] text-gray-600 mt-4">
                Demo project. Not a client site.
              </p>
              <p className="text-[13px] sm:text-[14px] text-gray-600 mt-1 leading-relaxed">
                A concept build showing a clean, fast brand landing page.
              </p>
              <h4 className="text-[14px] sm:text-[15px] font-semibold text-gray-900 mt-1">
                Luminar
              </h4>
            </div>
          </div>

          <p className="mt-8 text-[13px] text-gray-600">
            Narrativ and Luminar are demo projects that show style and skills.
            They are not paid client work.
          </p>
        </div>
      </div>
    </section>
  );
}
