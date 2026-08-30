# JScholtz Digital — Landing Page

Marketing site for **JScholtz Digital — Cybersecurity and Software Development
Technologies**. Built with React 18 + TypeScript + Vite + Tailwind CSS, with an
animated WebGPU/WebGL hero background from the `shaders` package.

## Sections

Hero · About · Services · Portfolio · Why Work With Us · Client Reviews · Contact · Footer
(plus a floating WhatsApp button on every screen)

## Run it locally

Requires Node.js 18+.

```bash
npm install
npm run dev        # start the dev server (http://localhost:5173)
npm run build      # type-check + production build into /dist
npm run preview    # preview the production build
```

## Going live

See **[SETUP.md](SETUP.md)** for the full step-by-step: GitHub Pages hosting,
GoDaddy DNS, Zoho Mail, and activating the contact form.

Deployment is automatic — every push to `main` triggers
`.github/workflows/deploy.yml`, which builds the site and publishes `dist/` to
GitHub Pages. The custom domain lives in `public/CNAME`.

## Contact form — one-time activation

The form posts to [FormSubmit](https://formsubmit.co), which relays submissions
to **sales@jscholtzdigital.com** without needing a backend.

**Before it works you must activate it once:**

1. Deploy the site (or run `npm run dev`) and submit the form once yourself.
2. FormSubmit emails sales@jscholtzdigital.com a confirmation link.
3. Click that link. Every submission from then on lands in the inbox
   automatically.

If the relay is ever unreachable, the form shows an error and offers a
`mailto:` fallback plus the WhatsApp number, so an enquiry is never lost.

To switch providers later (Formspree, Resend, your own API), change
`FORM_ENDPOINT` in `src/lib/contact.ts` — that's the only place it's referenced.

## Deploy

The build is a static site in `dist/`. Drop it on any static host:

- **Vercel / Netlify:** connect the repo, framework preset "Vite", build
  command `npm run build`, output directory `dist`.
- **Cloudflare Pages / GitHub Pages:** same build command and `dist` output.

## Things you'll want to edit

| What | Where |
| --- | --- |
| Email, WhatsApp, LinkedIn, form endpoint | `src/lib/contact.ts` — single source of truth |
| Client reviews | `src/components/Testimonials.tsx` — swap in verbatim quotes as clients send them |
| Portfolio projects | `src/components/Portfolio.tsx` — the `PROJECTS` array (screenshots live in `public/assets/`) |
| Services & benefits copy | `src/components/Services.tsx`, `src/components/WhyChooseMe.tsx` |
| Headline / hero copy | `src/components/Hero.tsx` |
| Logo files | `public/assets/` — `logo.png`, `logo-light.png`, `wordmark.png`, `wordmark-light.png` |

## Logo assets

| File | Use |
| --- | --- |
| `wordmark.png` | Nav bar — wordmark only, transparent background, for light surfaces |
| `wordmark-light.png` | Footer — white/blue version for dark surfaces |
| `logo.png` | Full lock-up with the tagline (social previews, decks, email signatures) |
| `logo-light.png` | Full lock-up for dark backgrounds |

## Brand tokens

Single electric-blue accent from the logo — no orange anywhere.

- Primary blue `#1E7FEB` · hover `#1663C4`
- Highlight `#4DA3FF` · deep `#0B4F9E` · logo ink `#0A0F2C`
- Surfaces: `#EFEFEF` (hero), `#FFFFFF` (about/services), `#F5F5F5` (portfolio/reviews)
- Ink: `gray-900`

## Notes

- The hero uses the `shaders` package (`Swirl` → `ChromaFlow` → `FlutedGlass`
  → `FilmGrain`, layered inside `<Shader>`). On devices whose GPU can't run it,
  the `onUnavailable` callback swaps in a static blue gradient automatically.
- The `shaders` bundle is large; the single-chunk size warning at build time is
  expected and harmless for a static marketing site.
