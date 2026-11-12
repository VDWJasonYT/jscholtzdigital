import { EMAIL, WHATSAPP_DISPLAY, WHATSAPP_URL } from "../site";
import SectionTexture from "./SectionTexture";

const LINKS = [
    { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Packages", href: "#packages" },
  { label: "Case study", href: "#portfolio" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gray-900 text-white">
      <SectionTexture
        src="/media/cta-flow.webp"
        alt="Abstract navy and blue data-flow pattern"
        className="opacity-25"
      />
      <div className="relative mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12 pt-12 pb-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-gray-900 neon-ring rounded-full flex items-center justify-center">
                <span className="text-white text-[11px] font-bold tracking-tight">JS</span>
              </div>
              <span className="text-[16px] font-semibold">JScholtz Digital</span>
            </div>
            <p className="mt-4 text-[14px] text-gray-300 max-w-xs">
              Digital partner for medical and dental practices across South Africa. Monthly retainers for website care, Google Business Profile, patient booking and ads, plus custom practice apps. Based in Secunda.
            </p>
          </div>

          <nav aria-label="Page">
            <ul className="flex flex-col gap-2">
              {LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-[14px] text-gray-300 hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex flex-col gap-3 text-[14px]">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#4DA3FF] transition-colors"
            >
              WhatsApp {WHATSAPP_DISPLAY}
            </a>
            <a href={`mailto:${EMAIL}`} className="text-white hover:text-[#4DA3FF] transition-colors break-all">
              {EMAIL}
            </a>
          </div>
        </div>

        <div className="mt-10 text-[12px] text-gray-500 max-w-xl">
          <p>© 2026 JScholtz Digital. Secunda, Mpumalanga, South Africa. Not VAT registered.</p>
          <p className="mt-2">
            We only use the details you send to reply to your enquiry, and we do not sell or share
            them, in line with POPIA.
          </p>
        </div>
      </div>
    </footer>
  );
}
