/** Single source of truth for company contact details. */
export const EMAIL = "sales@jscholtzdigital.com";

export const WHATSAPP_NUMBER = "+27 61 599 0085";
export const WHATSAPP_URL = "https://wa.me/27615990085";

export const LINKEDIN_URL = "https://www.linkedin.com/company/jscholtz-digital/";
export const LINKEDIN_HANDLE = "jscholtz-digital";

/**
 * Endpoint the contact form posts to. FormSubmit relays the submission
 * straight to EMAIL without a backend of your own.
 *
 * IMPORTANT — one-time activation: the very first submission triggers a
 * confirmation email to sales@jscholtzdigital.com. Click the link in it once
 * and every submission after that arrives in the inbox automatically.
 *
 * Swapping providers later (Formspree, Resend, your own API) only means
 * changing this one line.
 */
export const FORM_ENDPOINT = `https://formsubmit.co/ajax/${EMAIL}`;
