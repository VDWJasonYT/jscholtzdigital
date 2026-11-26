/*
 * Prices: Jason's ZAR list (set 10 Nov 2026) and packages (live 11 Nov 2026).
 * USD only where Jason set one: US Facebook Ad Generation $2,000/mo.
 * Portfolio: real client work only.
 */
export type Project = {
  slug: string;
  name: string;
  industry: string;
  place: string;
  summary: string;
  built: string[];
  url?: string;
  urlLabel?: string;
  extraLink?: { href: string; label: string };
  note?: string;
};

export const PROJECTS: Project[] = [
  {
    slug: "sithembe-yena",
    name: "Sithembe Yena Trading & Projects",
    industry: "Logistics and trade",
    place: "South Africa",
    summary:
      "A bold, fast website for a bulk road freight company serving mining, minerals and industrial supply chains.",
    built: ["Video hero", "Services and industries pages", "Enquiry form to WhatsApp or email", "Domain, HTTPS and security headers"],
    url: "https://sithembeyena.co.za/",
    urlLabel: "sithembeyena.co.za",
  },
  {
    slug: "altyd-lekker",
    name: "Altyd Lekker",
    industry: "Hospitality and tourism",
    place: "Marloth Park, near Kruger",
    summary:
      "A website for a self-catering bushveld holiday house on Kruger's doorstep, built to turn browsers into direct enquiries.",
    built: ["Photo gallery and room guide", "Booking links to LekkeSlaap", "WhatsApp the host in one tap", "Owner dashboard"],
    url: "https://altydlekker.co.za/",
    urlLabel: "altydlekker.co.za",
  },
  {
    slug: "modern-dental",
    name: "Modern Dental Secunda",
    industry: "Medical and dental",
    place: "Secunda, Mpumalanga",
    summary:
      "A website for Dr Christo Brecher's dental practice, with everything a patient needs to call, message or find the practice.",
    built: ["Treatment pages", "Gallery and events", "Click-to-call and WhatsApp", "Google Maps and social links"],
    url: "https://moderndental.co.za/",
    urlLabel: "moderndental.co.za",
    extraLink: { href: "/work/modern-dental/", label: "Read the case study" },
  },
  {
    slug: "happy-days",
    name: "Happy Days Back a Buddy",
    industry: "Education and nonprofits",
    place: "Kinross, Mpumalanga",
    summary:
      "A monthly contribution page for an early childhood development centre, so families and friends can back the school's new website.",
    built: ["Monthly and once-off contributions", "Secure PayFast checkout", "Progress bar that moves on confirmed payments", "Thank-you flow"],
    note: "Private preview. Link on request.",
  },
];

export type Service = { title: string; body: string; price: string; icon: string };

export const SERVICES: Service[] = [
  { icon: "page", title: "One-page websites", body: "A sharp, fast single page that tells people what you do and gets them to call, WhatsApp or book.", price: "from R4,500" },
  { icon: "pages", title: "Multi-page websites", body: "A full site with room for services, galleries, team, FAQs and contact pages, built mobile first.", price: "from R12,000" },
  { icon: "app", title: "Custom web apps", body: "Booking systems, portals, payment pages and dashboards built around how your business actually works.", price: "from R80,000" },
  { icon: "care", title: "Care and maintenance", body: "Monthly hosting checks, updates, backups and small edits, so your site stays fast and safe.", price: "R700/mo" },
  { icon: "pin", title: "Google Business Profile", body: "Set up and tidy your profile so local customers find you on Google Search and Maps.", price: "R1,200" },
  { icon: "search", title: "SEO", body: "Search-ready structure, page titles, sitemaps and Google Search Console, so the right people can find you.", price: "Ask for a quote" },
  { icon: "ads", title: "Ads management", body: "Meta ads on Facebook and Instagram, planned, launched and reported on in plain language.", price: "R4,000/mo" },
  { icon: "shield", title: "Website security checks", body: "A passive outside review of your site, written up in plain English with what to fix first.", price: "R2,500" },
];

export const INDUSTRIES = [
  {
    title: "Medical and dental",
    body: "Practice websites with treatment pages, click-to-call, WhatsApp, maps and POPIA-aware enquiry forms.",
    example: "Modern Dental Secunda",
    links: [
      { href: "/dental-website-design/", label: "Dental websites" },
      { href: "/medical-practice-website-design/", label: "Medical practice websites" },
    ],
    featured: true,
  },
  {
    title: "Hospitality and tourism",
    body: "Holiday homes, lodges and guesthouses that want more direct enquiries and less reliance on listing sites.",
    example: "Altyd Lekker",
    links: [],
  },
  {
    title: "Education and nonprofits",
    body: "Schools, creches and community projects that need clear information and simple, secure online payments.",
    example: "Happy Days Back a Buddy",
    links: [],
  },
  {
    title: "Logistics and trade",
    body: "Transport, trading and industrial businesses that need to look established and win serious enquiries.",
    example: "Sithembe Yena Trading & Projects",
    links: [],
  },
];

export const PROCESS = [
  { title: "Discover", body: "A 15-minute call about your business, your customers and what the site must do. You get a clear quote in rand." },
  { title: "Design", body: "We plan the pages and design the look around your brand. You see it and sign it off before we build." },
  { title: "Build", body: "A fast, mobile-first build. You review everything on a private preview link and ask for changes." },
  { title: "Launch", body: "Domain, HTTPS, security headers, Google Business Profile and Search Console, all set up and checked." },
  { title: "Care", body: "Updates, backups and edits every month, with security scans on Secure Care. Your site keeps working." },
];

export type Package = { name: string; tagline: string; setup: string; monthly: string; featured?: boolean; includes: string[] };

export const PACKAGES: Package[] = [
  {
    name: "Starter",
    tagline: "Get found, and start advertising.",
    setup: "R9,500",
    monthly: "R8,500",
    includes: ["Landing page", "Website security check", "Google Business Profile setup", "Meta ads on Facebook and Instagram", "6 AI video creatives a month", "Basic Care website support"],
  },
  {
    name: "Growth",
    tagline: "More pages, plus retargeting.",
    setup: "R18,000",
    monthly: "R9,500",
    featured: true,
    includes: ["5-page website", "Website security check", "Google Business Profile setup", "Meta ads plus retargeting", "6 AI video creatives a month", "Secure Care website support"],
  },
  {
    name: "Premium",
    tagline: "The full system, actively managed.",
    setup: "R38,000",
    monthly: "R15,000",
    includes: ["Website with booking", "Full security audit", "12 AI video creatives a month", "Up to 3 Meta ad campaigns", "Secure Care website support", "Monthly strategy call"],
  },
];

export const PACKAGE_TERMS = ["50% deposit on setup", "First month paid upfront", "3-month minimum", "No lead guarantees"];

export const STANDALONE: { title: string; price: string; usd?: string; note?: string }[] = [
  { title: "One-page website", price: "from R4,500" },
  { title: "Multi-page website", price: "from R12,000" },
  { title: "Custom web apps", price: "from R80,000", note: "Quoted per project" },
  { title: "Maintenance", price: "R700/mo" },
  { title: "Google Business Profile setup", price: "R1,200" },
  { title: "Ads management", price: "R4,000/mo" },
  { title: "Website security check", price: "R2,500" },
  { title: "Facebook Ad Generation", price: "R7,500/mo", usd: "US clients: $2,000/mo", note: "Ad spend excluded, 3-month minimum" },
];

export const CARE_PLANS = [
  { name: "Basic Care", where: "Included with Starter", detail: "Hosting checks, updates, backups and small text edits." },
  { name: "Secure Care", where: "Included with Growth and Premium", detail: "Everything in Basic Care, plus a monthly security scan, malware cleanup and priority support." },
];

export const FAQS: { q: string; a: string }[] = [
  { q: "Who do you work with?", a: "Small businesses anywhere that need a website that brings in enquiries. Our live work covers a dental practice, a holiday house, a school and a logistics company." },
  { q: "Do you work with clients outside South Africa?", a: "Yes. We are based in South Africa and work remote-first, so calls, design reviews and launch all happen online. Prices are in rand. International clients can ask for a USD quote." },
  { q: "How much does a website cost?", a: "A one-page website starts from R4,500 and a multi-page website from R12,000. Custom web apps start from R80,000 and are quoted per project. Monthly packages start at R9,500 setup then R8,500/mo." },
  { q: "What do Basic Care and Secure Care include?", a: "Basic Care covers hosting checks, updates, backups and small text edits. Secure Care is everything in Basic Care, plus a monthly security scan, malware cleanup and priority support." },
  { q: "Is ad spend included?", a: "No. Ad spend is always extra and paid by you straight to Meta. We suggest at least R3,000 a month." },
  { q: "Do you guarantee leads or sales?", a: "No. Nobody can honestly guarantee sales. We agree clear goals with you, track them, and report on what ran in plain language." },
  { q: "Can you take over our existing website or ad account?", a: "Yes. We first check that you own and can access the site and accounts. Then we explain what to keep, what to fix, and whether a rebuild is the better path." },
  { q: "What is a website security check?", a: "A passive review of your site from the outside, written up in plain English. We only do active testing if you give us written permission first." },
  { q: "What is an AI video creative?", a: "A short video ad for Facebook and Instagram that we create with AI video tools, based on your business. You approve every creative before it runs." },
  { q: "Where are you based?", a: "Secunda, Mpumalanga, South Africa. We work remote-first with clients in South Africa and abroad." },
];
