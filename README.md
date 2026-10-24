# JScholtz Digital: Landing Page

Marketing site for **JScholtz Digital: Web Development & Digital Solutions**
(Jason Scholtz). Built with React 18 + TypeScript + Vite + Tailwind CSS, with an
animated WebGPU/WebGL hero background from the `shaders` package.

## Sections

Hero, About, Services, Process, Pricing, Work, Why work with me, FAQ, Contact, Footer

## Run it locally

Requires Node.js 18+.

```bash
npm install
npm run dev        # start the dev server (http://localhost:5173)
npm run build      # type-check + production build into /dist
npm run preview    # preview the production build
```

## Deploy

The build is a static site in `dist/`. Drop it on any static host:

- **Vercel / Netlify:** connect the repo, framework preset "Vite", build
  command `npm run build`, output directory `dist`.
- **Cloudflare Pages / GitHub Pages:** same build command and `dist` output.

## Things you'll want to edit

| What | Where |
| --- | --- |
| Contact details (email, WhatsApp, LinkedIn) | `src/site.ts` |
| Portfolio projects (Altyd Lekker, Narrativ, Luminar) | `src/components/Portfolio.tsx`: live client link, demo videos, titles, descriptions |
| About images | `src/components/About.tsx` (`SMALL_IMG` / `LARGE_IMG`) |
| Services & benefits copy | `src/components/Services.tsx`, `src/components/WhyChooseMe.tsx` |
| Headline / hero copy | `src/components/Hero.tsx` |

## Brand tokens

Single electric-blue accent from the logo: no orange anywhere.

- Primary blue `#1E7FEB` · hover `#1663C4`
- Highlight `#4DA3FF` · deep `#0B4F9E`
- Surfaces: `#EFEFEF` (hero), `#FFFFFF` (about), `#F5F5F5` (portfolio/testimonials)
- Ink: `gray-900`

## Notes

- The hero uses the `shaders` package (`Swirl` → `ChromaFlow` → `FlutedGlass`
  → `FilmGrain`, layered inside `<Shader>`). On devices whose GPU can't run it,
  the `onUnavailable` callback swaps in a static blue gradient automatically, so
  the hero always looks intentional.
- The enquiry form opens the visitor's email app or WhatsApp with the details
  filled in. Nothing is stored on a server.
- The `shaders` bundle is large; that single-chunk size warning at build time is
  expected and harmless for a static marketing site.
