import { useState } from "react";
import type { FormEvent } from "react";
import { CheckCircle2, MessageCircle } from "lucide-react";
import { WHATSAPP_E164 } from "../site";

const inputClass =
  "w-full rounded-xl border-2 border-gray-200 bg-white px-4 py-3 min-h-[52px] text-[16px] outline-none focus:border-[#1E7FEB] transition-colors";

export default function SiteCheck() {
  const [business, setBusiness] = useState("");
  const [url, setUrl] = useState("");
  const [noSite, setNoSite] = useState(false);
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const [sentLink, setSentLink] = useState("");

  function submit(e: FormEvent) {
    e.preventDefault();
    if (!business.trim()) return setError("Please add your business name.");
    if (phone.replace(/\D/g, "").length < 9) return setError("Please add a valid WhatsApp number.");
    setError("");
    const text = [
      "Hi Jason, I'd like a free 1-minute site check.",
      `Business: ${business.trim()}`,
      `Website: ${noSite || !url.trim() ? "No website yet" : url.trim()}`,
      `My WhatsApp: ${phone.trim()}`,
    ].join("\n");
    const link = `https://wa.me/${WHATSAPP_E164}?text=${encodeURIComponent(text)}`;
    setSentLink(link);
    window.open(link, "_blank", "noopener");
  }

  return (
    <section id="site-check" className="bg-white px-5 sm:px-8 lg:px-12 py-14 sm:py-20 scroll-mt-4">
      <div className="mx-auto max-w-[640px]">
        <p className="text-[13px] font-medium text-[#1E7FEB] tracking-wide uppercase">Free, no obligation</p>
        <h2 className="mt-2 text-[30px] sm:text-[40px] leading-[1.05] font-medium tracking-[-0.02em] text-gray-900">
          Free 1-minute site check
        </h2>
        <p className="mt-3 text-[16px] leading-relaxed text-gray-700">
          Tell me your business and website. I'll look at it on a phone and WhatsApp you a short, honest check: speed,
          mobile view, security basics and how easy it is to contact you. No website yet? That's fine too.
        </p>

        {sentLink ? (
          <div className="mt-8 rounded-2xl bg-[#EAF3FE] p-6" role="status">
            <CheckCircle2 className="text-[#1E7FEB]" size={32} aria-hidden="true" />
            <p className="mt-3 text-[20px] font-medium text-gray-900">Thanks! Just press send in WhatsApp.</p>
            <p className="mt-2 text-[16px] text-gray-700">We'll WhatsApp you a short check within 1 working day.</p>
            <a
              href={sentLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex min-h-[52px] items-center gap-2 rounded-full bg-[#1E7FEB] px-6 text-[16px] font-medium text-white"
            >
              <MessageCircle size={18} aria-hidden="true" /> WhatsApp didn't open? Tap here
            </a>
          </div>
        ) : (
          <form onSubmit={submit} noValidate className="mt-8 flex flex-col gap-5 rounded-2xl bg-[#F5F5F5] p-5 sm:p-7">
            <label className="flex flex-col gap-2 text-[15px] font-medium text-gray-900">
              Business name
              <input className={inputClass} value={business} onChange={(e) => setBusiness(e.target.value)} autoComplete="organization" placeholder="e.g. Secunda Auto Repairs" />
            </label>
            <label className="flex flex-col gap-2 text-[15px] font-medium text-gray-900">
              Website address <span className="font-normal text-gray-600">(optional)</span>
              <input className={inputClass} value={url} disabled={noSite} onChange={(e) => setUrl(e.target.value)} inputMode="url" autoComplete="url" placeholder="yourbusiness.co.za" />
            </label>
            <label className="flex min-h-[44px] items-center gap-3 text-[16px] text-gray-800">
              <input type="checkbox" className="h-6 w-6 accent-[#1E7FEB]" checked={noSite} onChange={(e) => setNoSite(e.target.checked)} />
              No website yet
            </label>
            <label className="flex flex-col gap-2 text-[15px] font-medium text-gray-900">
              Your WhatsApp number
              <input className={inputClass} value={phone} onChange={(e) => setPhone(e.target.value)} type="tel" inputMode="tel" autoComplete="tel" placeholder="082 123 4567" />
            </label>
            {error && <p className="text-[15px] font-medium text-red-700" role="alert">{error}</p>}
            <button type="submit" className="min-h-[56px] w-full rounded-full bg-[#1E7FEB] hover:bg-[#1663C4] text-[17px] font-medium text-white transition-colors">
              Get my free site check
            </button>
            <p className="text-[14px] text-gray-600">
              This opens WhatsApp with your details ready to send. We only use your details to reply about your website.
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
