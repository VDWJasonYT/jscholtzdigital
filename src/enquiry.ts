import { WHATSAPP_E164 } from "./site";

export const SERVICE_OPTIONS = [
  "Website",
  "Google listing",
  "App",
  "Security check",
] as const;

export type ServiceOption = (typeof SERVICE_OPTIONS)[number];

export type Enquiry = {
  service: ServiceOption | "";
  business: string;
  town: string;
  about: string;
  details: string;
  website: string;
  timing: string;
  name: string;
  email: string;
  phone: string;
  consent: boolean;
  /** Honeypot. People never see this. */
  companyWebsite: string;
};

export const EMPTY_ENQUIRY: Enquiry = {
  service: "",
  business: "",
  town: "",
  about: "",
  details: "",
  website: "",
  timing: "",
  name: "",
  email: "",
  phone: "",
  consent: false,
  companyWebsite: "",
};

export function enquiryBody(enquiry: Enquiry): string {
  const lines = [
    "Hi Jason,",
    "",
    `Service: ${enquiry.service}`,
    `Business: ${enquiry.business}`,
    `Town: ${enquiry.town}`,
    `About the business: ${enquiry.about}`,
    `Project: ${enquiry.details}`,
  ];
  if (enquiry.website.trim()) lines.push(`Current website: ${enquiry.website.trim()}`);
  if (enquiry.timing.trim()) lines.push(`Timing: ${enquiry.timing.trim()}`);
  lines.push(`Name: ${enquiry.name}`, `Email: ${enquiry.email}`);
  if (enquiry.phone.trim()) lines.push(`Phone: ${enquiry.phone.trim()}`);
  return lines.join("\n");
}

export function enquiryMailto(email: string, enquiry: Enquiry): string {
  const subject = `Enquiry: ${enquiry.service} from ${enquiry.business || enquiry.name}`;
  return `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(enquiryBody(enquiry))}`;
}

export function enquiryWhatsApp(enquiry: Enquiry): string {
  return `https://wa.me/${WHATSAPP_E164}?text=${encodeURIComponent(enquiryBody(enquiry))}`;
}

export function isEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}
