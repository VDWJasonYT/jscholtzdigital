import { Mail, MessageCircle, Linkedin } from "lucide-react";
import { EMAIL, WHATSAPP_URL, LINKEDIN_URL } from "../lib/contact";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white border-t border-white/10">
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <img
          src="/assets/wordmark-light.png"
          alt="JScholtz Digital"
          className="h-5 w-auto"
        />

        <p className="text-[12px] text-gray-500 text-center">
          © 2026 JScholtz Digital. Cybersecurity &amp; Software Development
          Technologies.
        </p>

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
