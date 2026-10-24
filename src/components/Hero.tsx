import { useEffect, useState } from "react";
import { ArrowRight, Clock, MapPin, Menu, X } from "lucide-react";
import { Shader, Swirl, ChromaFlow, FlutedGlass, FilmGrain } from "shaders/react";
import HeroDashboard from "./graphics/HeroDashboard";

const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Pricing", href: "#pricing" },
  { label: "Work", href: "#portfolio" },
  { label: "FAQ", href: "#faq" },
];

const MENU_LINKS = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Pricing", href: "#pricing" },
  { label: "Work", href: "#portfolio" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

const EASE = "ease-[cubic-bezier(0.25,0.1,0.25,1)]";

function useLocalTime() {
  const [time, setTime] = useState("");
  useEffect(() => {
    const update = () =>
      setTime(
        new Date().toLocaleTimeString("en-GB", {
          timeZone: "Africa/Johannesburg",
          hour: "2-digit",
          minute: "2-digit",
        })
      );
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);
  return time;
}

/** Logo: dark circle with white "JS". */
function LogoMark() {
  return (
    <div className="w-9 h-9 sm:w-10 sm:h-10 bg-gray-900 rounded-full flex items-center justify-center shrink-0">
      <span className="text-white text-[10px] sm:text-[11px] font-bold tracking-tight">
        JS
      </span>
    </div>
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
  const time = useLocalTime();

  return (
    <section className="relative w-full bg-[#EFEFEF] overflow-hidden lg:min-h-screen lg:flex lg:flex-col">
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
          <div className="flex items-center gap-6 pl-1">
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
            <span className="hidden lg:inline text-[13px] text-gray-600">
              Taking on new projects
            </span>
            <span className="flex items-center gap-1.5 text-[13px] text-gray-600">
              <Clock size={14} />
              {time} in Secunda
            </span>
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
        {...(!menuOpen ? { inert: "" } : {})}
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
          <span className="inline-flex items-center gap-1.5 text-[13px] text-gray-600 border border-gray-200 rounded-full px-3 py-1.5">
            <Clock size={14} />
            {time} in Secunda
          </span>
          <div className="mt-6 flex flex-col gap-4">
            {MENU_LINKS.map((l) => (
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

      <div className="relative z-20 mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12 pt-8 sm:pt-10 pb-14 sm:pb-16 lg:pt-4 lg:pb-16 lg:flex-1 lg:flex lg:items-center">
        <div className="grid w-full items-center gap-8 lg:grid-cols-2 lg:gap-6">
          <div>
            <p className="text-[13px] sm:text-[14px] text-gray-900 tracking-wide mb-4 sm:mb-6">
              JScholtz Digital
            </p>

            <h1
              className="font-medium leading-[0.98] tracking-[-0.03em] text-gray-900"
              style={{ fontSize: "clamp(2.7rem, 10vw, 4.8rem)" }}
            >
              Secure. Simple. Local.
            </h1>

            <p className="mt-4 text-[15px] sm:text-[18px] leading-snug text-gray-800">
              For small businesses in Secunda, Mpumalanga.
            </p>

            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-5">
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

              <div className="flex items-center gap-2 bg-white rounded-[4px] px-3 py-2 shadow-[0_2px_8px_rgba(0,0,0,0.08)]">
                <MapPin size={16} className="text-[#1E7FEB]" aria-hidden="true" />
                <span className="text-[13px] sm:text-[14px] font-medium text-gray-900">
                  Based in Secunda, Mpumalanga
                </span>
              </div>
            </div>
          </div>

          <div aria-hidden="true">
            <HeroDashboard />
          </div>
        </div>
      </div>
    </section>
  );
}
