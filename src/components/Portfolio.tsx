import { ArrowRight, Clock3, Tag, Wallet } from "lucide-react";
import { BadgeRow } from "./ui";

const VIDEO_1 =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260516_122702_390f5305-8719-41d5-ae80-d23ab3796c28.mp4";
const VIDEO_2 =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260516_123323_f909c2b8-ff6c-4edf-882b-8ebcdbe389b5.mp4";

type Project = {
  title: string;
  subtitle: string;
  image: string;
  desc: string;
  price?: string;
  duration?: string;
  industries?: string;
};

const PROJECTS: Project[] = [
  {
    title: "TinyTales",
    subtitle: "AI Stories Mobile App",
    image: "/assets/tinytales.webp",
    desc: "An AI-powered children's story generator mobile app that creates short illustrated stories with narration. The concept is easy to understand and has a clear emotional use case: parents can quickly create personalised bedtime stories, teachers can generate creative prompts, and kids can enjoy custom stories based on their imagination.",
    price: "$50,000 – $100,000",
    duration: "1–3 months",
    industries: "Kids Games +2",
  },
  {
    title: "Veterio",
    subtitle: "Veterinary Clinics Marketplace",
    image: "/assets/veterio.webp",
    desc: "A marketplace that connects veterinary clinics with qualified vets and nurses, including hiring, contracts, payments and in-app communication. It links clinics and hospitals with locum veterinarians and vet nurses across Australia and New Zealand, solving a real staffing problem: clinics often need trusted short-term professionals quickly, while vets and nurses want flexible work.",
    price: "$10,000+",
    duration: "1–3 months",
    industries: "Veterinary +1",
  },
  {
    title: "Surplus-Pro",
    subtitle: "Surplus Inventory Marketplace",
    image: "/assets/surplus-pro.webp",
    desc: "A practical marketplace helping builders, contractors, tradies and DIY users list or claim leftover construction materials instead of letting them go to waste. Construction sites often have excess usable materials that are hard to store, resell or dispose of responsibly — Surplus-Pro gives users a simple way to post materials, connect with collectors, arrange pickup and clear space.",
    price: "$5,000 – $10,000",
    duration: "1–3 months",
    industries: "Construction +1",
  },
  {
    title: "Med Vault",
    subtitle: "AI Health Tracker · React Native",
    image: "/assets/med-vault.webp",
    desc: "A React Native health tracking app for monitoring vital signs including blood pressure, heart rate and blood sugar. Users log daily readings, view trend charts over time and receive AI-generated informational summaries to better understand their health patterns. Features a clean personal dashboard, smart reminders, health history logs and a calm UX designed for everyday use. Built for informational use, not medical diagnosis.",
    industries: "Health & Wellness",
  },
  {
    title: "Review Wolf",
    subtitle: "Reputation Management Platform",
    image: "/assets/review-wolf.webp",
    desc: "An automated reputation management platform that helps local businesses — especially contractors — generate more 5-star Google reviews. It automates review requests through smart timing and follow-ups, includes an AI reply generator and integrates with your CRM. The result: better local SEO rankings, stronger customer trust and more leads from every completed job.",
    industries: "Local Services · SaaS",
  },
];

function Meta({
  icon: Icon,
  label,
}: {
  icon: typeof Wallet;
  label: string;
}) {
  return (
    <span className="inline-flex items-center gap-1.5 text-[12px] text-gray-700 bg-white border border-gray-200 rounded-full px-3 py-1.5">
      <Icon size={13} className="text-[#1E7FEB]" />
      {label}
    </span>
  );
}

function ProjectCard({ p }: { p: Project }) {
  return (
    <article className="flex flex-col">
      <div className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-gray-200">
        <img
          src={p.image}
          alt={`${p.title} — ${p.subtitle}`}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
        />
      </div>

      <h3 className="text-[17px] sm:text-[19px] font-semibold text-gray-900 mt-5">
        {p.title}
        <span className="block text-[13px] sm:text-[14px] font-normal text-gray-500 mt-0.5">
          {p.subtitle}
        </span>
      </h3>

      <p className="text-[13px] sm:text-[14px] text-gray-600 leading-relaxed mt-3">
        {p.desc}
      </p>

      <div className="flex flex-wrap gap-2 mt-5">
        {p.price && <Meta icon={Wallet} label={p.price} />}
        {p.duration && <Meta icon={Clock3} label={p.duration} />}
        {p.industries && <Meta icon={Tag} label={p.industries} />}
      </div>
    </article>
  );
}

/** lucide "Link" icon, drawn manually with two arc paths. */
function LinkIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </svg>
  );
}

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="bg-[#F5F5F5] pt-16 sm:pt-20 lg:pt-28 pb-16 sm:pb-20 lg:pb-28"
    >
      <div className="mx-auto w-full max-w-[1440px]">
        <div className="px-5 sm:px-8 lg:px-12">
          <BadgeRow number="3" label="Selected work" border="border-gray-300" />
          <h2
            className="font-medium leading-[1.08] tracking-[-0.03em] text-gray-900 mb-10 sm:mb-14 lg:mb-16"
            style={{ fontSize: "clamp(2.5rem, 5vw, 4.2rem)" }}
          >
            <span
              className="sm:hidden"
              style={{ fontSize: "clamp(1.75rem,7vw,4.2rem)" }}
            >
              Recent projects
            </span>
            <span className="hidden sm:inline">Recent projects</span>
          </h2>
        </div>

        {/* Client projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 px-5 sm:px-8 lg:px-12">
          {PROJECTS.map((p) => (
            <ProjectCard key={p.title} p={p} />
          ))}
        </div>

        {/* Earlier work */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 lg:gap-7 px-5 sm:px-8 lg:px-12 mt-8 sm:mt-10 lg:mt-12">
          {/* Card 1 — Narrativ */}
          <div>
            <div className="group relative aspect-[329/246] rounded-2xl overflow-hidden bg-[#1a1d2e] cursor-pointer">
              <video
                src={VIDEO_1}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 left-4 h-9 w-9 group-hover:w-[148px] bg-white rounded-full flex items-center overflow-hidden transition-all duration-300 ease-in-out">
                <span className="h-9 w-9 shrink-0 flex items-center justify-center">
                  <LinkIcon className="text-gray-900 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                </span>
                <span className="text-[13px] font-medium text-gray-900 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 pr-4">
                  Learn more
                </span>
              </div>
            </div>
            <p className="text-[13px] sm:text-[14px] text-gray-600 mt-4 leading-relaxed">
              An interactive 3D showcase built for record engagement and
              time-on-site.
            </p>
            <h3 className="text-[14px] sm:text-[15px] font-semibold text-gray-900 mt-1">
              Narrativ
            </h3>
          </div>

          {/* Card 2 — Luminar */}
          <div>
            <div className="group relative aspect-square rounded-2xl overflow-hidden bg-[#6b6b6b] cursor-pointer">
              <video
                src={VIDEO_2}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 left-4 h-9 w-9 group-hover:w-[168px] bg-[#1E7FEB] rounded-full flex items-center overflow-hidden transition-all duration-300 ease-in-out">
                <span className="h-9 w-9 shrink-0 flex items-center justify-center">
                  <ArrowRight
                    size={14}
                    className="text-white -rotate-45 group-hover:rotate-0 transition-transform duration-300"
                  />
                </span>
                <span className="text-[13px] font-medium text-white whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 pr-4">
                  View case study
                </span>
              </div>
            </div>
            <p className="text-[13px] sm:text-[14px] text-gray-600 mt-4 leading-relaxed">
              A dated platform rebuilt into a fast, conversion-focused brand
              experience.
            </p>
            <h3 className="text-[14px] sm:text-[15px] font-semibold text-gray-900 mt-1">
              Luminar
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}
