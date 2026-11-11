import { MessageCircle } from "lucide-react";
import { WHATSAPP_QUOTE_URL } from "../site";
import SectionTexture from "./SectionTexture";
import Reveal from "./Reveal";

export default function ClosingCta() {
  return (
    <section className="relative overflow-hidden bg-[#EFEFEF] pt-16 sm:pt-20 lg:pt-28 pb-16 sm:pb-20 lg:pb-24">
      <SectionTexture
        src="/media/cta-flow.webp"
        alt="Abstract navy and blue data-flow pattern"
        className="opacity-[0.12]"
      />
      <div className="relative mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <Reveal>
        <h2
          className="font-medium leading-[1.12] tracking-[-0.02em] text-gray-900 max-w-4xl"
          style={{ fontSize: "clamp(1.75rem, 4.4vw, 3.6rem)" }}
        >
          Ready to grow with AI-powered marketing?
        </h2>
        <a
          href={WHATSAPP_QUOTE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center justify-center gap-2 bg-[#1A6FD0] hover:bg-[#155BB0] text-white text-[14px] sm:text-[15px] font-medium rounded-full px-6 py-3.5 transition-colors duration-300 text-center"
        >
          <MessageCircle size={18} aria-hidden="true" />
          Prefer a quick conversation? Chat on WhatsApp
        </a>
        </Reveal>
      </div>
    </section>
  );
}
