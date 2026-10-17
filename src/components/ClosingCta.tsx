import { MessageCircle } from "lucide-react";
import { WHATSAPP_QUOTE_URL } from "../site";

export default function ClosingCta() {
  return (
    <section className="bg-[#EFEFEF] pt-16 sm:pt-20 lg:pt-28 pb-16 sm:pb-20 lg:pb-24">
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <h2
          className="font-medium leading-[1.12] tracking-[-0.02em] text-gray-900 max-w-4xl"
          style={{ fontSize: "clamp(1.75rem, 4.4vw, 3.6rem)" }}
        >
          Ready for a website you can confidently send customers to?
        </h2>
        <a
          href={WHATSAPP_QUOTE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center justify-center gap-2 bg-[#1E7FEB] hover:bg-[#1663C4] text-white text-[14px] sm:text-[15px] font-medium rounded-full px-6 py-3.5 transition-colors duration-300 text-center"
        >
          <MessageCircle size={18} aria-hidden="true" />
          Prefer a quick conversation? Chat on WhatsApp
        </a>
      </div>
    </section>
  );
}
