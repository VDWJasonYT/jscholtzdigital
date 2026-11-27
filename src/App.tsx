import { useEffect, useState, type FormEvent, type ReactNode } from "react";
import {
  ArrowRight, ArrowUpRight, CalendarDays, Check, FileText, Files, LayoutDashboard, LifeBuoy,
  Mail, MapPin, Megaphone, Menu, MessageCircle, Plus, Search, ShieldCheck, X, Linkedin, Globe2,
} from "lucide-react";
import {
  CALENDLY_URL, EMAIL, GOOGLE_PROFILE_URL, LINKEDIN_URL, WHATSAPP_DISPLAY, WHATSAPP_QUOTE_URL, WHATSAPP_URL,
} from "./site";
import {
  CARE_PLANS, getFaqs, INDUSTRIES, PACKAGES, PACKAGE_TERMS, PROCESS, PROJECTS, SERVICES, STANDALONE, type Project,
} from "./data";
import { CurrencyProvider, currencyLabel, formatPrice, useCurrency, type Currency } from "./currency";

const ICONS: Record<string, typeof FileText> = {
  page: FileText, pages: Files, app: LayoutDashboard, care: LifeBuoy, pin: MapPin, search: Search, ads: Megaphone, shield: ShieldCheck,
};

const wrap = "mx-auto w-full max-w-site px-5 sm:px-8 lg:px-10";

function CurrencyToggle({ variant = "light", size = "default" }: { variant?: "light" | "dark"; size?: "default" | "compact" }) {
  const { currency, setCurrency } = useCurrency();
  const options: { id: Currency; label: string; name: string }[] = [
    { id: "ZAR", label: "R", name: "Show prices in South African rand" },
    { id: "USD", label: "$", name: "Show prices in US dollars" },
  ];
  const compact = size === "compact";
  return (
    <div role="group" aria-label="Price currency" className={`inline-flex rounded-full p-1 ${variant === "dark" ? "bg-white/10" : "bg-ink/5"}`}>
      {options.map((o) => {
        const active = currency === o.id;
        return (
          <button
            key={o.id}
            type="button"
            aria-pressed={active}
            aria-label={o.name}
            onClick={() => setCurrency(o.id)}
            className={`rounded-full font-bold transition ${compact ? "h-8 min-w-8 px-2.5 text-[13px]" : "h-10 min-w-10 px-3.5 text-[15px]"} ${
              active
                ? variant === "dark" ? "bg-white text-ink" : "bg-ink text-white"
                : variant === "dark" ? "text-white/70 hover:text-white" : "text-ink/55 hover:text-ink"
            }`}
          >
            {o.label}
          </button>
        );
      })}
    </div>
  );
}

function useReveal() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    if (!("IntersectionObserver" in window) || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      els.forEach((el) => el.classList.add("is-in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("is-in"); io.unobserve(e.target); } }),
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function Eyebrow({ children, dark = false }: { children: ReactNode; dark?: boolean }) {
  return (
    <p className={`inline-flex items-center gap-2 text-[12px] sm:text-[13px] font-semibold uppercase tracking-[0.16em] ${dark ? "text-brand-light" : "text-brand"}`}>
      <span className={`h-2 w-2 rounded-[3px] ${dark ? "bg-brand-light" : "bg-brand"}`} aria-hidden="true" />
      {children}
    </p>
  );
}

function PrimaryBtn({ href, children, external = false }: { href: string; children: ReactNode; external?: boolean }) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="group inline-flex items-center justify-center gap-2 rounded-full bg-brand px-6 py-3.5 text-[15px] font-semibold text-white shadow-[0_8px_0_-2px_#0B4F9E] transition hover:-translate-y-0.5 hover:bg-brand-dark active:translate-y-0"
    >
      {children}
      <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" aria-hidden="true" />
    </a>
  );
}

function Logo({ light = false }: { light?: boolean }) {
  return (
    <a href="#top" className="flex items-center gap-2.5" aria-label="JScholtz Digital, back to top">
      <span className="flex h-9 w-9 items-center justify-center whitespace-nowrap rounded-[10px] bg-ink text-[15px] font-extrabold tracking-[-0.06em] ring-1 ring-white/15">
        <span className="text-white">J</span><span className="text-brand-light">S</span>
      </span>
      <span className={`text-[16px] font-bold tracking-[-0.02em] ${light ? "text-white" : "text-ink"}`}>
        JScholtz <span className={light ? "text-brand-light" : "text-brand"}>Digital</span>
      </span>
    </a>
  );
}

const NAV = [
  { href: "#work", label: "Work" },
  { href: "#services", label: "Services" },
  { href: "#industries", label: "Industries" },
  { href: "#process", label: "Process" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
];

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 24);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  const solid = scrolled || open;
  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${solid ? "bg-ink shadow-[0_10px_30px_-18px_rgba(0,0,0,0.6)]" : "bg-transparent"}`}>
      <div className={`${wrap} flex h-[68px] items-center justify-between gap-4`}>
        <Logo light />
        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {NAV.map((n) => (
              <li key={n.href}>
                <a href={n.href} className="rounded-full px-3.5 py-2 text-[14px] font-medium text-white/80 transition hover:bg-white/10 hover:text-white">{n.label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-2">
          <CurrencyToggle variant="dark" size="compact" />
          <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="hidden sm:inline-flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-[14px] font-semibold text-ink transition hover:bg-brand hover:text-white">
            <CalendarDays className="h-4 w-4" aria-hidden="true" /> Book a call
          </a>
          <button
            type="button"
            className="lg:hidden grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="lg:hidden bg-ink pb-6">
          <ul className={`${wrap} grid gap-1`}>
            {NAV.map((n) => (
              <li key={n.href}>
                <a href={n.href} onClick={() => setOpen(false)} className="block rounded-xl px-3 py-3 text-[18px] font-semibold text-white hover:bg-white/10">{n.label}</a>
              </li>
            ))}
            <li className="pt-3"><PrimaryBtn href={CALENDLY_URL} external>Book a 15-min call</PrimaryBtn></li>
          </ul>
        </nav>
      )}
    </header>
  );
}

function BrowserFrame({ src, alt, label, className = "", eager = false }: { src: string; alt: string; label: string; className?: string; eager?: boolean }) {
  return (
    <figure className={`overflow-hidden rounded-[14px] bg-[#1C2740] ring-1 ring-white/10 shadow-[0_30px_60px_-30px_rgba(0,0,0,0.65)] ${className}`}>
      <div className="flex items-center gap-2 px-3.5 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" /><span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" /><span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
        <span className="ml-2 truncate rounded-md bg-ink/70 px-2.5 py-1 text-[11px] font-medium text-white/70">{label}</span>
      </div>
      <img src={src} alt={alt} width={1200} height={750} loading={eager ? "eager" : "lazy"} decoding="async" className="block w-full h-auto" />
    </figure>
  );
}

function PhoneFrame({ src, alt, className = "", eager = false }: { src: string; alt: string; className?: string; eager?: boolean }) {
  return (
    <figure className={`overflow-hidden rounded-[26px] bg-ink p-[7px] ring-1 ring-white/15 shadow-[0_30px_60px_-24px_rgba(0,0,0,0.7)] ${className}`}>
      <img src={src} alt={alt} width={390} height={844} loading={eager ? "eager" : "lazy"} decoding="async" className="block w-full h-auto rounded-[20px]" />
    </figure>
  );
}

function Hero() {
  const { currency } = useCurrency();
  return (
    <section id="top" className="relative overflow-hidden bg-ink text-white">
      <div className="dot-grid absolute inset-0" aria-hidden="true" />
      <div className="absolute -right-40 top-24 h-[520px] w-[520px] rounded-full border border-white/[0.06]" aria-hidden="true" />
      <div className="absolute -right-10 top-56 h-[300px] w-[300px] rounded-full border border-brand/30" aria-hidden="true" />
      <div className={`${wrap} relative grid items-center gap-14 pt-32 pb-20 sm:pt-36 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:pt-40 lg:pb-28`}>
        <div>
          <Eyebrow dark>Web agency · Based in South Africa · Working worldwide</Eyebrow>
          <h1 className="display mt-6 text-[clamp(2.9rem,8.4vw,6.4rem)]">
            Websites that bring in <span className="text-brand-light">business.</span>
          </h1>
          <p className="mt-7 max-w-[34rem] text-[17px] leading-relaxed text-white/75 sm:text-[19px]">
            We design, build and look after fast, secure websites and web apps for small businesses anywhere. Clear prices, real work you can click through, and one team from first call to launch and beyond.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <PrimaryBtn href={CALENDLY_URL} external>Book a 15-min call</PrimaryBtn>
            <a href={WHATSAPP_QUOTE_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-[15px] font-semibold text-white ring-2 ring-white/25 transition hover:bg-white hover:text-ink">
              <MessageCircle className="h-4 w-4" aria-hidden="true" /> WhatsApp us
            </a>
          </div>
          <ul className="mt-10 grid max-w-xl grid-cols-1 gap-3 text-[14px] text-white/70 sm:grid-cols-3">
            {["Real client sites, live now", "Mobile first, secure by default", currency === "USD" ? "Prices in US dollars" : "Prices in South African rand"].map((t) => (
              <li key={t} className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-light" aria-hidden="true" />{t}</li>
            ))}
          </ul>
        </div>
        <div className="relative mx-auto w-full max-w-[640px] lg:max-w-none">
          <BrowserFrame eager src="/media/work/sithembe-yena-desktop.webp" alt="Sithembe Yena Trading & Projects website, built by JScholtz Digital" label="sithembeyena.co.za" className="reveal" />
          <PhoneFrame eager src="/media/work/altyd-lekker-mobile.webp" alt="Altyd Lekker holiday house website on a phone" className="floaty absolute -bottom-10 -left-3 w-[30%] sm:-left-8 lg:-left-12" />
          <div className="absolute -top-5 right-4 rounded-2xl bg-white px-4 py-3 text-ink shadow-[0_18px_40px_-20px_rgba(0,0,0,0.6)] sm:right-8">
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brand">Live client work</p>
            <p className="text-[15px] font-bold tracking-[-0.01em]">4 projects you can open</p>
          </div>
        </div>
      </div>
      <Marquee />
    </section>
  );
}

function Marquee() {
  const items = ["Websites", "Web apps", "SEO", "Google Business Profile", "Ads management", "Security checks", "Care plans", "Payment pages"];
  const row = [...items, ...items];
  return (
    <div className="relative bg-brand py-4 text-white" aria-hidden="true">
      <div className="overflow-hidden">
        <div className="marquee flex w-max gap-10 whitespace-nowrap text-[15px] font-bold uppercase tracking-[0.12em] sm:text-[17px]">
          {row.map((t, i) => (
            <span key={i} className="flex items-center gap-10">{t}<span className="h-1.5 w-1.5 rounded-full bg-white/70" /></span>
          ))}
        </div>
      </div>
    </div>
  );
}

function SectionHead({ eyebrow, title, intro, dark = false }: { eyebrow: string; title: ReactNode; intro?: ReactNode; dark?: boolean }) {
  return (
    <div className="reveal max-w-3xl">
      <Eyebrow dark={dark}>{eyebrow}</Eyebrow>
      <h2 className={`h2 mt-5 ${dark ? "text-white" : "text-ink"}`}>{title}</h2>
      {intro && <p className={`mt-5 text-[17px] leading-relaxed sm:text-[18px] ${dark ? "text-white/70" : "text-slate-600"}`}>{intro}</p>}
    </div>
  );
}

function ProjectCard({ p, i }: { p: Project; i: number }) {
  const flip = i % 2 === 1;
  return (
    <article className={`reveal grid items-center gap-8 lg:grid-cols-2 lg:gap-16`}>
      <div className={`relative rounded-[28px] bg-paper p-5 pb-10 sm:p-8 sm:pb-12 ${flip ? "lg:order-2" : ""}`}>
        <div className="dot-grid-dark absolute inset-0 rounded-[28px]" aria-hidden="true" />
        <BrowserFrame src={`/media/work/${p.slug}-desktop.webp`} alt={`${p.name} website on desktop`} label={p.urlLabel ?? "Private preview"} className="relative" />
        <PhoneFrame src={`/media/work/${p.slug}-mobile.webp`} alt={`${p.name} website on a phone`} className="absolute -bottom-6 right-4 w-[24%] sm:right-8" />
      </div>
      <div className={flip ? "lg:order-1" : ""}>
        <p className="text-[13px] font-semibold uppercase tracking-[0.14em] text-brand">{p.industry}</p>
        <h3 className="mt-3 text-[clamp(1.75rem,3.4vw,2.6rem)] font-extrabold leading-[1.05] tracking-[-0.035em] text-ink">{p.name}</h3>
        <p className="mt-2 flex items-center gap-1.5 text-[14px] font-medium text-slate-500"><MapPin className="h-4 w-4" aria-hidden="true" />{p.place}</p>
        <p className="mt-5 text-[17px] leading-relaxed text-slate-600">{p.summary}</p>
        <ul className="mt-6 flex flex-wrap gap-2">
          {p.built.map((b) => (
            <li key={b} className="rounded-full bg-paper px-3.5 py-2 text-[13px] font-semibold text-ink">{b}</li>
          ))}
        </ul>
        <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3">
          {p.url && (
            <a href={p.url} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-1.5 text-[15px] font-bold text-ink underline decoration-brand decoration-2 underline-offset-[6px] hover:text-brand">
              Visit {p.urlLabel}<ArrowUpRight className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
            </a>
          )}
          {p.extraLink && (
            <a href={p.extraLink.href} className="inline-flex items-center gap-1.5 text-[15px] font-semibold text-slate-600 hover:text-brand">{p.extraLink.label}<ArrowRight className="h-4 w-4" aria-hidden="true" /></a>
          )}
          {p.note && <p className="text-[14px] font-medium text-slate-500">{p.note}</p>}
        </div>
      </div>
    </article>
  );
}

function Work() {
  return (
    <section id="work" className="scroll-mt-16 bg-white py-24 sm:py-32">
      <div className={wrap}>
        <SectionHead
          eyebrow="Selected work"
          title={<>Real clients. <span className="text-brand">Real sites.</span></>}
          intro="Every project here is real client work, shown with fresh screenshots of the live site. No mock-ups and no made-up logos."
        />
        <div className="mt-16 grid gap-24 sm:mt-20 sm:gap-32">
          {PROJECTS.map((p, i) => <ProjectCard key={p.slug} p={p} i={i} />)}
        </div>
      </div>
    </section>
  );
}

function Services() {
  const { currency } = useCurrency();
  return (
    <section id="services" className="scroll-mt-16 bg-paper py-24 sm:py-32">
      <div className={wrap}>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHead eyebrow="Services" title={<>Everything your business needs <span className="text-brand">online.</span></>} />
          <p className="reveal max-w-md text-[17px] leading-relaxed text-slate-600">Start with one service or combine them in a monthly package. {currencyLabel(currency)}</p>
        </div>
        <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s) => {
            const Icon = ICONS[s.icon];
            const price = s.priceId ? formatPrice(s.priceId, currency) : "Ask for a quote";
            return (
              <li key={s.title} className="reveal group flex flex-col rounded-[22px] bg-white p-6 shadow-[0_1px_0_rgba(11,18,32,0.04),0_18px_40px_-28px_rgba(11,18,32,0.35)] transition hover:-translate-y-1 hover:bg-ink">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-brand/10 text-brand transition group-hover:bg-brand group-hover:text-white">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="mt-6 text-[19px] font-bold tracking-[-0.02em] text-ink transition group-hover:text-white">{s.title}</h3>
                <p className="mt-2 flex-1 text-[15px] leading-relaxed text-slate-600 transition group-hover:text-white/70">{s.body}</p>
                <p className="mt-6 text-[15px] font-bold text-brand transition group-hover:text-brand-light">{price}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

function Industries() {
  return (
    <section id="industries" className="relative scroll-mt-16 overflow-hidden bg-ink py-24 text-white sm:py-32">
      <div className="dot-grid absolute inset-0" aria-hidden="true" />
      <div className={`${wrap} relative`}>
        <SectionHead
          dark
          eyebrow="Industries"
          title={<>Built for businesses <span className="text-brand-light">like yours.</span></>}
          intro="We work with small businesses in any industry. These are the ones we have live work in today."
        />
        <ul className="mt-14 grid gap-4 md:grid-cols-2">
          {INDUSTRIES.map((ind, i) => (
            <li key={ind.title} className={`reveal flex flex-col rounded-[24px] p-7 sm:p-9 ${ind.featured ? "bg-brand" : "bg-ink-3"}`}>
              <div className="flex items-start justify-between gap-4">
                <span className="text-[14px] font-bold text-white/60">0{i + 1}</span>
                {ind.featured && <span className="rounded-full bg-white px-3 py-1 text-[12px] font-bold uppercase tracking-[0.1em] text-brand">Featured</span>}
              </div>
              <h3 className="mt-8 text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold leading-[1.05] tracking-[-0.03em]">{ind.title}</h3>
              <p className={`mt-3 flex-1 text-[16px] leading-relaxed ${ind.featured ? "text-white/85" : "text-white/70"}`}>{ind.body}</p>
              <p className="mt-6 text-[14px] font-semibold text-white">Live example: <span className={ind.featured ? "text-white" : "text-brand-light"}>{ind.example}</span></p>
              {ind.links.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {ind.links.map((l) => (
                    <a key={l.href} href={l.href} className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3.5 py-2 text-[13px] font-semibold text-white hover:bg-white hover:text-brand">{l.label}<ArrowRight className="h-3.5 w-3.5" aria-hidden="true" /></a>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section id="process" className="scroll-mt-16 bg-white py-24 sm:py-32">
      <div className={wrap}>
        <SectionHead eyebrow="How we work" title={<>From first call to <span className="text-brand">launch day.</span></>} intro="Five clear steps, so you always know what happens next and what it costs." />
        <ol className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          {PROCESS.map((s, i) => (
            <li key={s.title} className="reveal relative rounded-[22px] bg-paper p-6">
              <span className="text-[56px] font-extrabold leading-none tracking-[-0.06em] text-brand">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-5 text-[20px] font-bold tracking-[-0.02em] text-ink">{s.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-slate-600">{s.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function pkgLink(name: string) {
  return `${WHATSAPP_URL}?text=${encodeURIComponent(`Hi JScholtz Digital, I'm interested in the ${name} package.`)}`;
}

function Pricing() {
  const { currency } = useCurrency();
  return (
    <section id="pricing" className="scroll-mt-16 bg-paper py-24 sm:py-32">
      <span id="packages" className="sr-only" aria-hidden="true" />
      <div className={wrap}>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between sm:gap-8">
          <SectionHead
            eyebrow="Pricing"
            title={<>Clear prices. <span className="text-brand">No surprises.</span></>}
            intro={<>Monthly packages combine a website, security, your Google presence and ads. {currencyLabel(currency)}</>}
          />
          <div className="reveal shrink-0 sm:pt-8">
            <CurrencyToggle />
          </div>
        </div>
        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {PACKAGES.map((p) => {
            const dark = p.featured;
            return (
              <article key={p.name} className={`reveal relative flex flex-col rounded-[26px] p-7 sm:p-8 ${dark ? "bg-ink text-white shadow-[0_30px_60px_-30px_rgba(11,18,32,0.7)] lg:-my-4 lg:py-12" : "bg-white text-ink"}`}>
                {dark && <span className="absolute right-6 top-6 rounded-full bg-brand px-3 py-1 text-[12px] font-bold uppercase tracking-[0.1em] text-white">Most popular</span>}
                <h3 className="text-[24px] font-extrabold tracking-[-0.03em]">{p.name}</h3>
                <p className={`mt-1 text-[15px] ${dark ? "text-white/70" : "text-slate-600"}`}>{p.tagline}</p>
                <p className="mt-8 flex items-baseline gap-1.5">
                  <span className="text-[44px] font-extrabold leading-none tracking-[-0.05em]">{formatPrice(p.monthlyId, currency, { period: false })}</span>
                  <span className={`text-[15px] font-semibold ${dark ? "text-white/60" : "text-slate-500"}`}>/mo</span>
                </p>
                <p className={`mt-2 text-[14px] font-medium ${dark ? "text-white/70" : "text-slate-600"}`}>{formatPrice(p.setupId, currency)} once-off setup</p>
                <ul className="mt-8 grid flex-1 gap-3">
                  {p.includes.map((inc) => (
                    <li key={inc} className="flex items-start gap-3 text-[15px]">
                      <span className={`mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full ${dark ? "bg-brand text-white" : "bg-brand/10 text-brand"}`}><Check className="h-3.5 w-3.5" aria-hidden="true" /></span>
                      {inc}
                    </li>
                  ))}
                </ul>
                <a href={pkgLink(p.name)} target="_blank" rel="noopener noreferrer" className={`mt-9 inline-flex items-center justify-center gap-2 rounded-full px-5 py-3.5 text-[15px] font-semibold transition ${dark ? "bg-brand text-white hover:bg-brand-light" : "bg-ink text-white hover:bg-brand"}`}>
                  Ask about {p.name}<ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </article>
            );
          })}
        </div>
        <ul className="reveal mt-8 flex flex-wrap gap-2">
          {[...PACKAGE_TERMS, `Ad spend extra, paid to Meta (${formatPrice("adSpend", currency)} suggested minimum)`].map((t) => (
            <li key={t} className="rounded-full bg-white px-3.5 py-2 text-[13px] font-semibold text-ink">{t}</li>
          ))}
        </ul>

        <div className="mt-20 grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          <div className="reveal">
            <h3 className="text-[clamp(1.6rem,3vw,2.3rem)] font-extrabold leading-[1.05] tracking-[-0.03em] text-ink">Care plans</h3>
            <p className="mt-3 text-[16px] text-slate-600">Every package includes ongoing care for your website.</p>
            <ul className="mt-6 grid gap-4">
              {CARE_PLANS.map((c) => (
                <li key={c.name} className="rounded-[20px] bg-white p-6">
                  <p className="text-[18px] font-bold tracking-[-0.02em] text-ink">{c.name}</p>
                  <p className="text-[13px] font-semibold text-brand">{c.where}</p>
                  <p className="mt-2 text-[15px] leading-relaxed text-slate-600">{c.detail}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="reveal">
            <h3 className="text-[clamp(1.6rem,3vw,2.3rem)] font-extrabold leading-[1.05] tracking-[-0.03em] text-ink">Standalone services</h3>
            <p className="mt-3 text-[16px] text-slate-600">Need one part on its own? These are available outside a package.</p>
            <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
              {STANDALONE.map((s) => (
                <li key={s.title} className={`flex items-center justify-between gap-4 rounded-[18px] bg-white px-5 py-4 ${s.note ? "sm:col-span-2" : ""}`}>
                  <span className="min-w-0">
                    <span className="block text-[15px] font-bold text-ink">{s.title}</span>
                    {s.note && <span className="mt-0.5 block text-[13px] text-slate-500">{s.note}</span>}
                  </span>
                  <span className="shrink-0 text-right">
                    <span className="block text-[15px] font-bold text-brand">{formatPrice(s.priceId, currency)}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className={`${wrap} grid gap-12 lg:grid-cols-2 lg:items-center`}>
        <div className="reveal">
          <Eyebrow>Why JScholtz Digital</Eyebrow>
          <h2 className="h2 mt-5 text-ink">Agency quality, <span className="text-brand">small-business</span> pricing.</h2>
        </div>
        <ul className="reveal grid gap-4 sm:grid-cols-2">
          {[
            { t: "Based in South Africa", b: "Founded by Jason Scholtz in Secunda, Mpumalanga, and working remote-first with clients anywhere." },
            { t: "Security built in", b: "HTTPS, security headers and a security check on every launch. POPIA-aware enquiry forms." },
            { t: "Fast on every phone", b: "Mobile-first builds with compressed images and lean code, so pages load quickly on data." },
            { t: "Straight answers", b: "Plain-language quotes and reports. No lead guarantees, no hidden fees, no jargon." },
          ].map((x) => (
            <li key={x.t} className="rounded-[22px] bg-paper p-6">
              <p className="text-[18px] font-bold tracking-[-0.02em] text-ink">{x.t}</p>
              <p className="mt-2 text-[15px] leading-relaxed text-slate-600">{x.b}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Faq() {
  const { currency } = useCurrency();
  return (
    <section id="faq" className="scroll-mt-16 bg-paper py-24 sm:py-32">
      <div className={`${wrap} grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16`}>
        <SectionHead eyebrow="FAQ" title={<>Questions, <span className="text-brand">answered.</span></>} intro={<>Something else? <a className="font-semibold text-brand underline underline-offset-4" href={WHATSAPP_QUOTE_URL} target="_blank" rel="noopener noreferrer">Ask us on WhatsApp</a>.</>} />
        <div className="reveal grid gap-3">
          {getFaqs(currency).map((f) => (
            <details key={f.q} className="group rounded-[20px] bg-white px-6 py-5 open:shadow-[0_18px_40px_-30px_rgba(11,18,32,0.45)]">
              <summary className="flex items-center justify-between gap-6 text-[17px] font-bold tracking-[-0.01em] text-ink">
                {f.q}
                <span className="faq-icon grid h-9 w-9 shrink-0 place-items-center rounded-full bg-paper text-brand transition"><Plus className="h-4 w-4" aria-hidden="true" /></span>
              </summary>
              <p className="mt-3 pr-10 text-[16px] leading-relaxed text-slate-600">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

const SERVICE_OPTIONS = ["One-page website", "Multi-page website", "Custom web app", "Monthly package", "Care and maintenance", "Google Business Profile", "SEO", "Ads management", "Website security check", "Not sure yet"];

function Contact() {
  const [error, setError] = useState("");
  function build(form: HTMLFormElement) {
    const d = new FormData(form);
    const get = (k: string) => String(d.get(k) ?? "").trim();
    const name = get("name"), email = get("email"), business = get("business"), service = get("service"), message = get("message");
    if (!name || !message) { setError("Please add your name and a short message."); return null; }
    setError("");
    const lines = [
      "Hi JScholtz Digital,",
      "",
      message,
      "",
      `Name: ${name}`,
      business && `Business: ${business}`,
      email && `Email: ${email}`,
      service && `Interested in: ${service}`,
    ].filter(Boolean) as string[];
    return { text: lines.join("\n"), subject: `Website enquiry from ${business || name}` };
  }
  function onWhatsApp(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const r = build(e.currentTarget);
    if (r) window.open(`${WHATSAPP_URL}?text=${encodeURIComponent(r.text)}`, "_blank", "noopener,noreferrer");
  }
  function onEmail(form: HTMLFormElement | null) {
    if (!form) return;
    const r = build(form);
    if (r) window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(r.subject)}&body=${encodeURIComponent(r.text)}`;
  }
  const input = "mt-2 block w-full rounded-2xl bg-white/[0.07] px-4 py-3.5 text-[16px] text-white placeholder:text-white/40 ring-1 ring-white/15 transition focus:bg-white/10 focus:outline-none focus:ring-2 focus:ring-brand-light";
  return (
    <section id="contact" className="relative scroll-mt-16 overflow-hidden bg-ink py-24 text-white sm:py-32">
      <div className="dot-grid absolute inset-0" aria-hidden="true" />
      <div className={`${wrap} relative grid gap-14 lg:grid-cols-2 lg:gap-20`}>
        <div className="reveal">
          <Eyebrow dark>Start a project</Eyebrow>
          <h2 className="h2 mt-5">Let's build something <span className="text-brand-light">that works.</span></h2>
          <p className="mt-5 max-w-lg text-[18px] leading-relaxed text-white/70">Book a free 15-minute call, or send a message. We reply with clear next steps and a quote in rand or US dollars.</p>
          <div className="mt-9"><PrimaryBtn href={CALENDLY_URL} external>Book a 15-min call</PrimaryBtn></div>
          <ul className="mt-12 grid gap-3 sm:grid-cols-2">
            <li><a href={WHATSAPP_QUOTE_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 rounded-2xl bg-white/[0.06] p-4 hover:bg-white/10"><MessageCircle className="h-5 w-5 text-brand-light" aria-hidden="true" /><span><span className="block text-[12px] font-semibold uppercase tracking-[0.12em] text-white/50">WhatsApp</span><span className="font-semibold">{WHATSAPP_DISPLAY}</span></span></a></li>
            <li className="sm:col-span-2"><a href={`mailto:${EMAIL}`} className="flex items-center gap-3 rounded-2xl bg-white/[0.06] p-4 hover:bg-white/10"><Mail className="h-5 w-5 text-brand-light" aria-hidden="true" /><span className="min-w-0"><span className="block text-[12px] font-semibold uppercase tracking-[0.12em] text-white/50">Email</span><span className="block truncate font-semibold">{EMAIL}</span></span></a></li>
            <li><a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 rounded-2xl bg-white/[0.06] p-4 hover:bg-white/10"><Linkedin className="h-5 w-5 text-brand-light" aria-hidden="true" /><span><span className="block text-[12px] font-semibold uppercase tracking-[0.12em] text-white/50">LinkedIn</span><span className="font-semibold">JScholtz Digital</span></span></a></li>
            <li><a href={GOOGLE_PROFILE_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 rounded-2xl bg-white/[0.06] p-4 hover:bg-white/10"><Globe2 className="h-5 w-5 text-brand-light" aria-hidden="true" /><span><span className="block text-[12px] font-semibold uppercase tracking-[0.12em] text-white/50">Google</span><span className="font-semibold">Business profile</span></span></a></li>
          </ul>
        </div>
        <form id="enquiry-form" onSubmit={onWhatsApp} noValidate className="reveal rounded-[28px] bg-ink-3 p-6 sm:p-9" aria-describedby="form-note">
          <h3 className="text-[24px] font-extrabold tracking-[-0.03em]">Send a message</h3>
          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            <label className="text-[14px] font-semibold text-white/80">Your name *<input name="name" autoComplete="name" required className={input} placeholder="Jane Smith" /></label>
            <label className="text-[14px] font-semibold text-white/80">Email<input name="email" type="email" autoComplete="email" className={input} placeholder="you@business.com" /></label>
            <label className="text-[14px] font-semibold text-white/80">Business<input name="business" autoComplete="organization" className={input} placeholder="Business name" /></label>
            <label className="text-[14px] font-semibold text-white/80">Interested in
              <select name="service" defaultValue="" className={`${input} [&>option]:text-ink`}>
                <option value="">Choose a service</option>
                {SERVICE_OPTIONS.map((o) => <option key={o}>{o}</option>)}
              </select>
            </label>
            <label className="text-[14px] font-semibold text-white/80 sm:col-span-2">Message *<textarea name="message" required rows={4} className={input} placeholder="Tell us about your business and what you need." /></label>
          </div>
          {error && <p role="alert" className="mt-4 rounded-xl bg-[#3A1620] px-4 py-3 text-[14px] font-semibold text-[#FFB4C0]">{error}</p>}
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <button type="submit" className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-brand px-5 py-3.5 text-[15px] font-semibold text-white hover:bg-brand-light"><MessageCircle className="h-4 w-4" aria-hidden="true" />Send on WhatsApp</button>
            <button type="button" onClick={(e) => onEmail(e.currentTarget.form)} className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-white px-5 py-3.5 text-[15px] font-semibold text-ink hover:bg-paper"><Mail className="h-4 w-4" aria-hidden="true" />Send by email</button>
          </div>
          <p id="form-note" className="mt-5 text-[13px] leading-relaxed text-white/50">This opens WhatsApp or your email app with your message filled in. Nothing is stored on our server. We only use your details to reply, in line with POPIA. <a href="/privacy/" className="font-semibold text-white/80 underline underline-offset-4">Privacy policy</a>.</p>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  const { currency } = useCurrency();
  return (
    <footer className="bg-[#060A13] py-16 text-white/70">
      <div className={`${wrap} grid gap-12 md:grid-cols-[1.3fr_1fr_1fr_1fr]`}>
        <div>
          <Logo light />
          <p className="mt-4 max-w-xs text-[14px] leading-relaxed">A web agency for small businesses anywhere. Based in Secunda, Mpumalanga, South Africa.</p>
        </div>
        <div>
          <p className="text-[13px] font-bold uppercase tracking-[0.14em] text-white">Explore</p>
          <ul className="mt-4 grid gap-2.5 text-[14px]">
            {NAV.map((n) => <li key={n.href}><a href={n.href} className="hover:text-white">{n.label}</a></li>)}
          </ul>
        </div>
        <div>
          <p className="text-[13px] font-bold uppercase tracking-[0.14em] text-white">Guides</p>
          <ul className="mt-4 grid gap-2.5 text-[14px]">
            <li><a href="/work/modern-dental/" className="hover:text-white">Modern Dental case study</a></li>
            <li><a href="/dental-website-design/" className="hover:text-white">Dental website design</a></li>
            <li><a href="/medical-practice-website-design/" className="hover:text-white">Medical practice websites</a></li>
            <li><a href="/dental-marketing-south-africa/" className="hover:text-white">Dental marketing in South Africa</a></li>
            <li><a href="/popia-websites-for-practices/" className="hover:text-white">POPIA and practice websites</a></li>
          </ul>
        </div>
        <div>
          <p className="text-[13px] font-bold uppercase tracking-[0.14em] text-white">Contact</p>
          <ul className="mt-4 grid gap-2.5 text-[14px]">
            <li><a href={WHATSAPP_QUOTE_URL} target="_blank" rel="noopener noreferrer" className="hover:text-white">WhatsApp {WHATSAPP_DISPLAY}</a></li>
            <li><a href={`mailto:${EMAIL}`} className="break-all hover:text-white">{EMAIL}</a></li>
            <li><a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="hover:text-white">Book a 15-min call</a></li>
            <li><a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="hover:text-white">LinkedIn</a></li>
            <li><a href="/privacy/" className="hover:text-white">Privacy policy</a></li>
          </ul>
        </div>
      </div>
      <div className={`${wrap} mt-14 flex flex-col gap-2 text-[13px] text-white/45 sm:flex-row sm:justify-between`}>
        <p>© {new Date().getFullYear()} JScholtz Digital. All rights reserved.</p>
        <p>{currencyLabel(currency)}</p>
      </div>
    </footer>
  );
}

export default function App() {
  useReveal();
  return (
    <CurrencyProvider>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-ink">Skip to content</a>
      <Header />
      <main id="main">
        <Hero />
        <Work />
        <Services />
        <Industries />
        <Process />
        <Pricing />
        <About />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </CurrencyProvider>
  );
}
