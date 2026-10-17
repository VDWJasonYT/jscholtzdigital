import { useState } from "react";
import { Mail, MessageCircle, Linkedin, ArrowRight, Send } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const EMAIL = "Mrjasonscholtz@gmail.com";
const WHATSAPP_URL = "https://wa.me/27615990085";
const LINKEDIN_URL = "https://www.linkedin.com/company/jscholtz-digital/";

type Method = {
  icon: LucideIcon;
  label: string;
  value: string;
  href: string;
  external?: boolean;
};

const METHODS: Method[] = [
  { icon: Mail, label: "Email", value: EMAIL, href: `mailto:${EMAIL}` },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+27 61 599 0085",
    href: WHATSAPP_URL,
    external: true,
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "JScholtz Digital",
    href: LINKEDIN_URL,
    external: true,
  },
];

const inputClass =
  "w-full rounded-xl border border-gray-200 px-4 py-3 text-[14px] outline-none focus:border-[#1E7FEB] transition-colors";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const buildText = () =>
    `Hi Jason, I'm ${name || "(name)"}${email ? ` (${email})` : ""}.\n\n${message}`;

  const openWhatsApp = () => {
    window.open(`${WHATSAPP_URL}?text=${encodeURIComponent(buildText())}`, "_blank", "noopener");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `New project enquiry${name ? ` from ${name}` : ""}`
    );
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${encodeURIComponent(buildText())}`;
  };

  return (
    <section
      id="contact"
      className="bg-gray-900 text-white pt-16 sm:pt-20 lg:pt-28 pb-16 sm:pb-20 lg:pb-24"
    >
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12">
        {/* Badge row (light variant) */}
        <div className="flex items-center gap-3 mb-6 sm:mb-8">
          <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-white text-gray-900 text-[11px] sm:text-[12px] font-semibold flex items-center justify-center">
            6
          </span>
          <span className="text-[12px] sm:text-[13px] font-medium border border-white/20 text-white rounded-full px-3 sm:px-4 py-1 sm:py-1.5">
            Get in touch
          </span>
        </div>

        <h2
          className="font-medium leading-[1.08] tracking-[-0.03em] text-white mb-6"
          style={{ fontSize: "clamp(2.5rem, 5vw, 4.2rem)" }}
        >
          <span className="sm:hidden" style={{ fontSize: "clamp(1.75rem,7vw,4.2rem)" }}>
            Let's build something great.
          </span>
          <span className="hidden sm:inline">
            Let's build
            <br />
            something great.
          </span>
        </h2>

        <p className="text-[15px] sm:text-[16px] text-gray-400 max-w-xl mb-10 sm:mb-14">
          Tell me about your business and what you need, and I'll reply with a fixed quote.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Left — contact methods */}
          <div className="flex flex-col gap-3">
            {METHODS.map(({ icon: Icon, label, value, href, external }) => (
              <a
                key={label}
                href={href}
                {...(external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="group flex items-center gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors duration-300"
              >
                <span className="w-11 h-11 rounded-xl bg-[#1E7FEB] flex items-center justify-center shrink-0">
                  <Icon size={20} className="text-white" />
                </span>
                <span className="flex flex-col">
                  <span className="text-[12px] text-gray-400">{label}</span>
                  <span className="text-[14px] sm:text-[15px] font-medium text-white">
                    {value}
                  </span>
                </span>
                <ArrowRight
                  size={16}
                  className="ml-auto text-gray-500 group-hover:text-white group-hover:translate-x-1 transition"
                />
              </a>
            ))}
          </div>

          {/* Right — form */}
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl p-6 sm:p-8 text-gray-900"
          >
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-[13px] font-medium text-gray-700 mb-1.5"
              >
                Name
              </label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={inputClass}
                placeholder="Your name"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-[13px] font-medium text-gray-700 mb-1.5"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={inputClass}
                placeholder="you@example.com"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="block text-[13px] font-medium text-gray-700 mb-1.5"
              >
                What do you need?
              </label>
              <textarea
                id="message"
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className={`${inputClass} resize-none`}
                placeholder="A quick note about your project…"
              />
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                onClick={openWhatsApp}
                className="flex-1 bg-[#1E7FEB] hover:bg-[#1663C4] text-white rounded-full py-3 text-[13px] sm:text-[14px] font-medium flex items-center justify-center gap-2 transition-colors"
              >
                Send on WhatsApp
                <MessageCircle size={15} />
              </button>
              <button
                type="submit"
                className="flex-1 bg-gray-900 hover:bg-gray-700 text-white rounded-full py-3 text-[13px] sm:text-[14px] font-medium flex items-center justify-center gap-2 transition-colors"
              >
                Send by email
                <Send size={15} />
              </button>
            </div>
            <p className="mt-4 text-[12px] leading-relaxed text-gray-500">
              This form doesn't store anything. It opens WhatsApp or your email
              app with your details filled in, and you choose whether to send.
              We only use your details to reply to your enquiry, in line with POPIA.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
