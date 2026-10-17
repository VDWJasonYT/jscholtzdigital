import { Mail, MessageCircle, Linkedin } from "lucide-react";

const EMAIL = "Mrjasonscholtz@gmail.com";
const WHATSAPP_URL = "https://wa.me/27615990085";
const LINKEDIN_URL = "https://www.linkedin.com/company/jscholtz-digital/";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white border-t border-white/10">
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-gray-900 ring-1 ring-white/15 rounded-full flex items-center justify-center">
            <span className="text-white text-[11px] font-bold tracking-tight">
              JS
            </span>
          </div>
          <span className="text-[14px] font-semibold">JScholtz Digital</span>
        </div>

        <div className="text-[12px] text-gray-500 text-center max-w-md">
          <p>© 2026 JScholtz Digital · Secunda, Mpumalanga, South Africa · Not VAT registered</p>
          <p className="mt-1">
            Privacy: we only use the details you send us to respond to your
            enquiry, and we don't sell or share them, in line with POPIA.
          </p>
        </div>

        <div className="flex items-center gap-4">
          <a
            href={`mailto:${EMAIL}`}
            aria-label="Email"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Mail size={16} />
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <MessageCircle size={16} />
          </a>
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Linkedin size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
