import { useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import { Shader, Swirl, ChromaFlow, FlutedGlass, FilmGrain } from "shaders/react";

const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const EASE = "ease-[cubic-bezier(0.25,0.1,0.25,1)]";

/** Company wordmark. */
function LogoMark() {
  return (
    <img
      src="/assets/wordmark.png"
      alt="JScholtz Digital"
      className="h-5 sm:h-6 w-auto shrink-0"
    />
  );
}

/** Text that rolls up to a duplicate on group hover. */
function TextRoll({ text }: { text: string }) {
  return (
    <span className="flex flex-col overflow-hidden h-[20px] leading-[20px]">
      <span
        className={`flex flex-col transition-transform duration-500 ${EASE} group-hover:-translate-y-1/2`}
      >
        <span className="h-[20px]">{text}</span>
        <span className="h-[20px]">{text}</span>
      </span>
    </span>
  );
}

/** Fallback gradient shown if the GPU can't run the shader stack. */
function ShaderFallback() {
  return (
    <div
      className="absolute inset-0"
      style={{
        background:
          "radial-gradient(120% 120% at 80% 0%, rgba(30,127,235,0.10), transparent 55%), radial-gradient(120% 120% at 0% 100%, rgba(77,163,255,0.10), transparent 55%), #EFEFEF",
      }}
    />
  );
}

export default function Hero() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [gpuFailed, setGpuFailed] = useState(false);

  return (
    <section className="relative min-h-screen w-full bg-[#EFEFEF] overflow-hidden flex flex-col">
      {/* Animated shader overlay */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {gpuFailed ? (
          <ShaderFallback />
        ) : (
          <Shader
            className="w-full h-full"
            style={{ width: "100%", height: "100%" }}
            onUnavailable={() => setGpuFailed(true)}
          >
            <Swirl colorA="#ffffff" colorB="#f0f0f0" detail={1.7} />
            <ChromaFlow
              baseColor="#ffffff"
              downColor="#1E7FEB"
              leftColor="#1E7FEB"
              rightColor="#1E7FEB"
              upColor="#1E7FEB"
              momentum={13}
              radius={3.5}
            />
            <FlutedGlass
              aberration={0.61}
              angle={31}
              frequency={8}
              highlight={0.12}
              highlightSoftness={0}
              lightAngle={-90}
              refraction={4}
              shape="rounded"
              softness={1}
              speed={0.15}
            />
            <FilmGrain strength={0.05} />
          </Shader>
        )}
      </div>

      {/* Navigation */}
      <div className="relative z-20 mx-auto w-full max-w-[1440px] p-2 sm:p-3">
        <nav className="bg-white rounded-full flex items-center justify-between p-[5px]">
          {/* Left */}
          <div className="flex items-center gap-6 pl-3">
            <LogoMark />
            <div className="hidden md:flex items-center gap-6">
              {NAV_LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="text-[14px] text-gray-900 hover:text-gray-500 transition-colors duration-300"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>

          {/* Right (desktop) */}
          <div className="hidden md:flex items-center gap-4 pr-1">
            <a
              href="#contact"
              className="group flex items-center gap-2 bg-[#1E7FEB] hover:bg-[#1663C4] text-white text-[13px] font-medium rounded-full pl-5 pr-2 py-2 transition-colors duration-300"
            >
              <TextRoll text="Get in touch" />
              <span className="w-6 h-6 rounded-full bg-white flex items-center justify-center">
                <ArrowRight
                  size={14}
                  className={`text-[#1E7FEB] transition-transform duration-500 ${EASE} group-hover:-rotate-45`}
                />
              </span>
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((v) => !v)}
            className="md:hidden bg-gray-900 text-white rounded-full h-9 w-9 flex items-center justify-center mr-1"
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </nav>
      </div>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-50 md:hidden ${
          menuOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
        aria-hidden={!menuOpen}
      >
        <div
          onClick={() => setMenuOpen(false)}
          className={`absolute inset-0 bg-black/60 transition-opacity duration-500 ${
            menuOpen ? "opacity-100" : "opacity-0"
          }`}
        />
        <div
          className={`absolute inset-x-0 bottom-0 mx-3 mb-3 bg-white rounded-2xl p-6 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
            menuOpen ? "translate-y-0" : "translate-y-full"
          }`}
        >
          <img
            src="/assets/wordmark.png"
            alt="JScholtz Digital"
            className="h-5 w-auto"
          />
          <div className="mt-6 flex flex-col gap-4">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="text-[28px] leading-[32px] font-medium text-gray-900"
              >
                {l.label}
              </a>
            ))}
          </div>
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="group mt-8 flex items-center justify-between bg-[#1E7FEB] hover:bg-[#1663C4] text-white text-[15px] font-medium rounded-full pl-6 pr-2 py-3 transition-colors"
          >
            Get started
            <span className="w-9 h-9 rounded-full bg-white flex items-center justify-center">
              <ArrowRight size={16} className="text-[#1E7FEB]" />
            </span>
          </a>
        </div>
      </div>

      {/* Spacer */}
      <div className="flex-1" />

      {/* Hero content */}
      <div className="relative z-20 mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12 pb-14 sm:pb-16 lg:pb-20">
        <p className="text-[13px] sm:text-[14px] text-gray-900 tracking-wide mb-5 sm:mb-8">
          JScholtz Digital: Cybersecurity and Software Development Technologies
        </p>

        <h1
          className="font-medium leading-[1.08] tracking-[-0.03em] text-gray-900 max-w-[20ch] sm:max-w-none"
          style={{ fontSize: "clamp(1.6rem, 6.4vw, 3.4rem)" }}
        >
          <span className="sm:hidden">
            We build Secure High Quality Software for Small, Medium and large
            enterprises and help brands grow internationally.
          </span>
          <span
            className="hidden sm:block"
            style={{ fontSize: "clamp(1.6rem, 3.6vw, 3.4rem)" }}
          >
            We build Secure High Quality Software
            <br />
            for Small, Medium and large enterprises
            <br />
            and help brands grow internationally.
          </span>
        </h1>

        {/* CTA row */}
        <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-5">
          <a
            href="#contact"
            className="group flex items-center gap-2 bg-[#1E7FEB] hover:bg-[#1663C4] text-white text-[13px] sm:text-[14px] rounded-full pl-5 sm:pl-6 pr-2 py-2 transition-colors duration-300"
          >
            <TextRoll text="Get started" />
            <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white flex items-center justify-center">
              <ArrowRight
                size={16}
                className={`text-[#1E7FEB] transition-transform duration-500 ${EASE} group-hover:-rotate-45`}
              />
            </span>
          </a>

          <a
            href="#portfolio"
            className="group flex items-center gap-1.5 text-[13px] sm:text-[14px] text-gray-900 font-medium"
          >
            <span className="group-hover:underline underline-offset-4">
              View work
            </span>
            <ArrowRight
              size={14}
              className="transition-transform group-hover:translate-x-1"
            />
          </a>

          {/* Trust badge */}
          <div className="flex items-center gap-2 bg-white rounded-[4px] px-3 py-2 shadow-[0_2px_8px_rgba(0,0,0,0.08)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.12)] transition-shadow">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 100 100"
              className="w-5 h-5 sm:w-6 sm:h-6 fill-current text-[#1E7FEB]"
              aria-hidden="true"
            >
              <path d="m19.6 66.5 19.7-11 .3-1-.3-.5h-1l-3.3-.2-11.2-.3L14 53l-9.5-.5-2.4-.5L0 49l.2-1.5 2-1.3 2.9.2 6.3.5 9.5.6 6.9.4L38 49.1h1.6l.2-.7-.5-.4-.4-.4L29 41l-10.6-7-5.6-4.1-3-2-1.5-2-.6-4.2 2.7-3 3.7.3.9.2 3.7 2.9 8 6.1L37 36l1.5 1.2.6-.4.1-.3-.7-1.1L33 25l-6-10.4-2.7-4.3-.7-2.6c-.3-1-.4-2-.4-3l3-4.2L28 0l4.2.6L33.8 2l2.6 6 4.1 9.3L47 29.9l2 3.8 1 3.4.3 1h.7v-.5l.5-7.2 1-8.7 1-11.2.3-3.2 1.6-3.8 3-2L61 2.6l2 2.9-.3 1.8-1.1 7.7L59 27.1l-1.5 8.2h.9l1-1.1 4.1-5.4 6.9-8.6 3-3.5L77 13l2.3-1.8h4.3l3.1 4.7-1.4 4.9-4.4 5.6-3.7 4.7-5.3 7.1-3.2 5.7.3.4h.7l12-2.6 6.4-1.1 7.6-1.3 3.5 1.6.4 1.6-1.4 3.4-8.2 2-9.6 2-14.3 3.3-.2.1.2.3 6.4.6 2.8.2h6.8l12.6 1 3.3 2 1.9 2.7-.3 2-5.1 2.6-6.8-1.6-16-3.8-5.4-1.3h-.8v.4l4.6 4.5 8.3 7.5L89 80.1l.5 2.4-1.3 2-1.4-.2-9.2-7-3.6-3-8-6.8h-.5v.7l1.8 2.7 9.8 14.7.5 4.5-.7 1.4-2.6 1-2.7-.6-5.8-8-6-9-4.7-8.2-.5.4-2.9 30.2-1.3 1.5-3 1.2-2.5-2-1.4-3 1.4-6.2 1.6-8 1.3-6.4 1.2-7.9.7-2.6v-.2H49L43 72l-9 12.3-7.2 7.6-1.7.7-3-1.5.3-2.8L24 86l10-12.8 6-7.9 4-4.6-.1-.5h-.3L17.2 77.4l-4.7.6-2-2 .2-3 1-1 8-5.5Z" />
            </svg>
            <span className="text-[13px] sm:text-[14px] font-medium text-gray-900">
              5-star rated
            </span>
            <span className="text-[10px] sm:text-[11px] bg-gray-900 text-white px-1.5 sm:px-2 py-0.5 rounded">
              Verified
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
