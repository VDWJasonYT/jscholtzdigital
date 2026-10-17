import { useEffect, useRef, useState } from "react";
import type { MouseEvent, ReactNode } from "react";
import { Mail, MessageCircle, Linkedin, ArrowRight, Send } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import {
  EMPTY_ENQUIRY,
  SERVICE_OPTIONS,
  enquiryMailto,
  enquiryWhatsApp,
  isEmail,
  type Enquiry,
  type ServiceOption,
} from "../enquiry";
import { EMAIL, LINKEDIN_URL, WHATSAPP_DISPLAY, WHATSAPP_URL } from "../site";

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
    value: WHATSAPP_DISPLAY,
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

const STEP_TITLES = ["", "What do you need?", "Your business", "The project", "How I reach you"];

const inputClass =
  "w-full rounded-xl border border-gray-200 px-4 py-3 text-[14px] outline-none focus:border-[#1E7FEB] transition-colors";

export default function Contact() {
  const [step, setStep] = useState(1);
  const [enquiry, setEnquiry] = useState<Enquiry>(EMPTY_ENQUIRY);
  const [error, setError] = useState("");
  const headingRef = useRef<HTMLHeadingElement>(null);
  const skipFocus = useRef(true);

  useEffect(() => {
    if (skipFocus.current) {
      skipFocus.current = false;
      return;
    }
    headingRef.current?.focus();
  }, [step]);

  const set = <K extends keyof Enquiry>(key: K, value: Enquiry[K]) => {
    setEnquiry((prev) => ({ ...prev, [key]: value }));
    setError("");
  };

  const validate = (current: number): string => {
    if (current === 1 && !enquiry.service) return "Choose the service you need.";
    if (current === 2 && (!enquiry.business.trim() || !enquiry.town.trim() || !enquiry.about.trim())) {
      return "Add your business name, town and what you do.";
    }
    if (current === 3 && !enquiry.details.trim()) return "Tell me a little about the project.";
    if (current === 4) {
      if (!enquiry.name.trim() || !enquiry.email.trim() || !enquiry.consent) {
        return "Add your name, email and consent so I can reply.";
      }
      if (!isEmail(enquiry.email)) return "Enter an email address I can reply to.";
    }
    return "";
  };

  const goNext = () => {
    const problem = validate(step);
    if (problem) {
      setError(problem);
      return;
    }
    setError("");
    setStep((value) => Math.min(4, value + 1));
  };

  const trapped = enquiry.companyWebsite.trim().length > 0;
  const ready = step === 4 && validate(4) === "" && !trapped;
  const mailto = ready ? enquiryMailto(EMAIL, enquiry) : undefined;
  const whatsapp = ready ? enquiryWhatsApp(enquiry) : undefined;

  const blockIfNotReady = (event: MouseEvent<HTMLAnchorElement>) => {
    const problem = validate(4);
    if (problem || trapped) {
      event.preventDefault();
      if (problem) setError(problem);
    }
  };

  return (
    <section
      id="contact"
      className="bg-gray-900 text-white pt-16 sm:pt-20 lg:pt-28 pb-16 sm:pb-20 lg:pb-24"
    >
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <div className="flex items-center gap-3 mb-6 sm:mb-8">
          <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-white text-gray-900 text-[11px] sm:text-[12px] font-semibold flex items-center justify-center">
            8
          </span>
          <span className="text-[12px] sm:text-[13px] font-medium border border-white/20 text-white rounded-full px-3 sm:px-4 py-1 sm:py-1.5">
            Get in touch
          </span>
        </div>

        <h2
          className="font-medium leading-[1.08] tracking-[-0.03em] text-white mb-6"
          style={{ fontSize: "clamp(2.25rem, 5vw, 4.2rem)" }}
        >
          Tell me what you need.
        </h2>

        <p className="text-[15px] sm:text-[16px] text-gray-400 max-w-xl mb-10 sm:mb-14">
          Share a few details and I will reply with a quote. Or message me directly.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          <div>
            <p className="text-[13px] font-medium uppercase tracking-wide text-gray-400 mb-3">
              WhatsApp or email
            </p>
            <div className="flex flex-col gap-3">
              {METHODS.map(({ icon: Icon, label, value, href, external }) => (
                <a
                  key={label}
                  href={href}
                  {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="group flex items-center gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors duration-300"
                >
                  <span className="w-11 h-11 rounded-xl bg-[#1E7FEB] flex items-center justify-center shrink-0">
                    <Icon size={20} className="text-white" />
                  </span>
                  <span className="flex flex-col min-w-0">
                    <span className="text-[12px] text-gray-400">{label}</span>
                    <span className="text-[14px] sm:text-[15px] font-medium text-white break-all">
                      {value}
                    </span>
                  </span>
                  <ArrowRight
                    size={16}
                    className="ml-auto shrink-0 text-gray-500 group-hover:text-white group-hover:translate-x-1 transition"
                  />
                </a>
              ))}
            </div>
          </div>

          <div>
            <form
              className="relative bg-white rounded-2xl p-6 sm:p-8 text-gray-900"
              onSubmit={(event) => {
                event.preventDefault();
                if (step < 4) {
                  goNext();
                  return;
                }
                const problem = validate(4);
                if (problem) {
                  setError(problem);
                  return;
                }
                if (trapped) return;
                window.location.href = enquiryMailto(EMAIL, enquiry);
              }}
            >
              <p className="text-[13px] font-medium text-[#1E7FEB]">Step {step} of 4</p>
              <div className="mt-3 mb-6 flex gap-2" aria-hidden="true">
                {[1, 2, 3, 4].map((n) => (
                  <span
                    key={n}
                    className={`h-2 flex-1 rounded-full ${n <= step ? "bg-[#1E7FEB]" : "bg-gray-200"}`}
                  />
                ))}
              </div>

              <h3
                ref={headingRef}
                tabIndex={-1}
                className="text-[18px] font-semibold text-gray-900 outline-none mb-5"
              >
                {STEP_TITLES[step]}
              </h3>

              {step === 1 && (
                <fieldset>
                  <legend className="sr-only">Service</legend>
                  <div className="grid grid-cols-2 gap-3">
                    {SERVICE_OPTIONS.map((option) => {
                      const selected = enquiry.service === option;
                      return (
                        <label
                          key={option}
                          className={`cursor-pointer rounded-2xl px-4 py-4 text-[14px] font-medium ${
                            selected ? "bg-gray-900 text-white" : "bg-[#F5F5F5] text-gray-900"
                          }`}
                        >
                          <input
                            type="radio"
                            name="service"
                            value={option}
                            checked={selected}
                            onChange={() => set("service", option as ServiceOption)}
                            className="sr-only"
                          />
                          {option}
                        </label>
                      );
                    })}
                  </div>
                </fieldset>
              )}

              {step === 2 && (
                <div className="flex flex-col gap-4">
                  <Field label="Business name" id="business">
                    <input
                      id="business"
                      value={enquiry.business}
                      onChange={(e) => set("business", e.target.value)}
                      className={inputClass}
                      autoComplete="organization"
                      placeholder="The business name"
                    />
                  </Field>
                  <Field label="Town or area" id="town">
                    <input
                      id="town"
                      value={enquiry.town}
                      onChange={(e) => set("town", e.target.value)}
                      className={inputClass}
                      autoComplete="address-level2"
                      placeholder="Secunda"
                    />
                  </Field>
                  <Field label="What does the business do?" id="business-about">
                    <input
                      id="business-about"
                      value={enquiry.about}
                      onChange={(e) => set("about", e.target.value)}
                      className={inputClass}
                      placeholder="A short description"
                    />
                  </Field>
                </div>
              )}

              {step === 3 && (
                <div className="flex flex-col gap-4">
                  <Field label="What do you need?" id="details">
                    <textarea
                      id="details"
                      rows={4}
                      value={enquiry.details}
                      onChange={(e) => set("details", e.target.value)}
                      className={`${inputClass} resize-none`}
                      placeholder="The pages, the app, or the problem to look at"
                    />
                  </Field>
                  <Field label="Current website, if you have one" id="website">
                    <input
                      id="website"
                      value={enquiry.website}
                      onChange={(e) => set("website", e.target.value)}
                      className={inputClass}
                      placeholder="https://"
                      autoComplete="url"
                    />
                  </Field>
                  <Field label="When would you like to launch?" id="timing">
                    <input
                      id="timing"
                      value={enquiry.timing}
                      onChange={(e) => set("timing", e.target.value)}
                      className={inputClass}
                      placeholder="No rush, or a date you have in mind"
                    />
                  </Field>
                </div>
              )}

              {step === 4 && (
                <div className="flex flex-col gap-4">
                  <Field label="Your name" id="name">
                    <input
                      id="name"
                      value={enquiry.name}
                      onChange={(e) => set("name", e.target.value)}
                      className={inputClass}
                      autoComplete="name"
                      placeholder="Your name"
                    />
                  </Field>
                  <Field label="Email" id="email">
                    <input
                      id="email"
                      type="email"
                      value={enquiry.email}
                      onChange={(e) => set("email", e.target.value)}
                      className={inputClass}
                      autoComplete="email"
                      placeholder="you@example.com"
                    />
                  </Field>
                  <Field label="Phone, if you want a call back" id="phone">
                    <input
                      id="phone"
                      type="tel"
                      value={enquiry.phone}
                      onChange={(e) => set("phone", e.target.value)}
                      className={inputClass}
                      autoComplete="tel"
                      placeholder="Optional"
                    />
                  </Field>
                  <label className="flex items-start gap-3 text-[13px] leading-relaxed text-gray-700">
                    <input
                      type="checkbox"
                      checked={enquiry.consent}
                      onChange={(e) => set("consent", e.target.checked)}
                      className="mt-1 h-4 w-4 accent-[#1E7FEB]"
                    />
                    <span>
                      I agree that JScholtz Digital may use these details only to reply to this
                      enquiry, in line with POPIA.
                    </span>
                  </label>
                </div>
              )}

              <div aria-hidden="true" className="absolute left-[-10000px] h-px w-px overflow-hidden">
                <label>
                  Company website
                  <input
                    type="text"
                    name="company_website"
                    tabIndex={-1}
                    autoComplete="off"
                    value={enquiry.companyWebsite}
                    onChange={(e) => set("companyWebsite", e.target.value)}
                  />
                </label>
              </div>

              {error && (
                <p className="mt-4 text-[13px] text-red-600" role="alert">
                  {error}
                </p>
              )}

              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                {step > 1 && (
                  <button
                    type="button"
                    onClick={() => {
                      setError("");
                      setStep((value) => value - 1);
                    }}
                    className="sm:w-auto rounded-full px-5 py-3 text-[14px] font-medium text-gray-700 bg-[#F5F5F5] hover:bg-gray-200 transition-colors"
                  >
                    Back
                  </button>
                )}
                {step < 4 ? (
                  <button
                    type="submit"
                    className="flex-1 bg-[#1E7FEB] hover:bg-[#1663C4] text-white rounded-full py-3 text-[14px] font-medium transition-colors"
                  >
                    Continue
                  </button>
                ) : (
                  <>
                    <a
                      href={mailto ?? "#contact"}
                      onClick={blockIfNotReady}
                      className="flex-1 bg-gray-900 hover:bg-gray-700 text-white rounded-full py-3 text-[13px] sm:text-[14px] font-medium flex items-center justify-center gap-2 transition-colors"
                    >
                      Send by email
                      <Send size={15} aria-hidden="true" />
                    </a>
                    <a
                      href={whatsapp ?? "#contact"}
                      target={whatsapp ? "_blank" : undefined}
                      rel={whatsapp ? "noopener noreferrer" : undefined}
                      onClick={blockIfNotReady}
                      className="flex-1 bg-[#1E7FEB] hover:bg-[#1663C4] text-white rounded-full py-3 text-[13px] sm:text-[14px] font-medium flex items-center justify-center gap-2 transition-colors"
                    >
                      Send on WhatsApp
                      <MessageCircle size={15} aria-hidden="true" />
                    </a>
                  </>
                )}
              </div>

              <p className="mt-4 text-[12px] leading-relaxed text-gray-500">
                This form does not store anything. It opens your email or WhatsApp with the
                details filled in, and you choose whether to send. I only use your details to
                reply to your enquiry, in line with POPIA.
              </p>
            </form>

            <p className="mt-4 text-[14px] sm:text-[15px] text-gray-300">
              Prefer email? Write to{" "}
              <a href={`mailto:${EMAIL}`} className="text-white font-medium underline underline-offset-4">
                {EMAIL}
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  id,
  children,
}: {
  label: string;
  id: string;
  children: ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-[13px] font-medium text-gray-700 mb-1.5">
        {label}
      </label>
      {children}
    </div>
  );
}
