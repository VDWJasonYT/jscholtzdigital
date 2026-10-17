import { ArrowRight } from "lucide-react";
import { BadgeRow } from "./ui";

const VIDEO_1 =
  "/media/demo-narrativ.mp4";
const VIDEO_2 =
  "/media/demo-luminar.mp4";

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
      className="bg-[#F5F5F5] pt-16 sm:pt-20 lg:pt-28 pb-16 sm:pb-20 lg:pb-28"
    >
      <div className="mx-auto w-full max-w-[1440px]">
        <div className="px-5 sm:px-8 lg:px-12">
          <BadgeRow number="4" label="Demo projects" border="border-gray-300" />
          <h2
            className="font-medium leading-[1.08] tracking-[-0.03em] text-gray-900 mb-10 sm:mb-14 lg:mb-16"
            style={{ fontSize: "clamp(2.5rem, 5vw, 4.2rem)" }}
          >
            <span className="sm:hidden" style={{ fontSize: "clamp(1.75rem,7vw,4.2rem)" }}>
              Demo projects
            </span>
            <span className="hidden sm:inline">Demo projects</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 lg:gap-7 px-5 sm:px-8 lg:px-12">
          {/* Card 1 — Narrativ */}
          <div>
            <div className="group relative aspect-[329/246] rounded-2xl overflow-hidden bg-[#1a1d2e] cursor-pointer">
              <video
                src={VIDEO_1}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              />
              <span className="absolute top-4 left-4 bg-white/90 text-gray-900 text-[11px] font-semibold uppercase tracking-wide rounded-full px-3 py-1">Demo project</span>
              <div className="absolute bottom-4 left-4 h-9 w-9 group-hover:w-[148px] bg-white rounded-full flex items-center overflow-hidden transition-all duration-300 ease-in-out">
                <span className="h-9 w-9 shrink-0 flex items-center justify-center">
                  <LinkIcon className="text-gray-900 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                </span>
                <span className="text-[13px] font-medium text-gray-900 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 pr-4">
                  Learn more
                </span>
              </div>
            </div>
            <p className="text-[12px] text-gray-500 mt-4">Demo project · not a client site</p>
            <p className="text-[13px] sm:text-[14px] text-gray-600 mt-1 leading-relaxed">
              A concept build showing an interactive, animated showcase page.
            </p>
            <h3 className="text-[14px] sm:text-[15px] font-semibold text-gray-900 mt-1">
              Narrativ
            </h3>
          </div>

          {/* Card 2 — Luminar */}
          <div>
            <div className="group relative aspect-square rounded-2xl overflow-hidden bg-[#6b6b6b] cursor-pointer">
              <video
                src={VIDEO_2}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              />
              <span className="absolute top-4 left-4 bg-white/90 text-gray-900 text-[11px] font-semibold uppercase tracking-wide rounded-full px-3 py-1">Demo project</span>
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
            <p className="text-[12px] text-gray-500 mt-4">Demo project · not a client site</p>
            <p className="text-[13px] sm:text-[14px] text-gray-600 mt-1 leading-relaxed">
              A concept build showing a clean, fast brand landing page.
            </p>
            <h3 className="text-[14px] sm:text-[15px] font-semibold text-gray-900 mt-1">
              Luminar
            </h3>
          </div>
        </div>
        <p className="px-5 sm:px-8 lg:px-12 mt-8 text-[13px] text-gray-600">
          These are demo projects that show our style and skills. They are not paid client work.
        </p>
      </div>
    </section>
  );
}
