# Institutional Website – João Borges Vieira Urban Quilombola Community

![Institutional Website – Quilombo JBV](https://github.com/user-attachments/assets/62aeb1dc-46fc-43af-bbe5-e5837aaab28f)

> [Versão em Português (pt-BR)](README.md)

---

## About the project

This institutional website was built during **Extension Project II – Software Engineering** in partnership with the **João Borges Vieira Urban Quilombola Community Association**, located in Uruaçu‑GO, Brazil.  
The application strengthens the community’s digital presence, showcases cultural and social initiatives, encourages donations and increases transparency for members, supporters and public bodies.

**UN SDGs addressed:** 10 – Reduced Inequalities • 11 – Sustainable Cities & Communities • 16 – Peace, Justice & Strong Institutions.

---

## Table of Contents

- [Tech stack](#tech-stack)
- [Project goals](#project-goals)
- [Key features](#key-features)
- [Deploy & CI/CD](#deploy--cicd)
- [Performance](#performance)
- [Future improvements](#future-improvements)
- [Contact](#contact)

---

## Tech stack

| Tool / Library | Version |
|---------------|---------|
| **Next.js** | 15.2.7 |
| **TypeScript** | 5.8.3 |
| **Tailwind CSS** | 4.1.3 |
| **next-intl** (i18n) | 4.1.0 |
| **GSAP + ScrollTrigger** | 3.12.7 |
| **Zod** (validation) | 3.24.2 |
| **Nodemailer** | 6.10.0 |
| **Vercel** | — |
| **Figma & GIMP** | — |

---

## Project goals

- **Visibility** – provide an official channel that centralises the association’s history, news and areas of action.  
- **Transparency** – streamline reporting and project disclosure to the community and sponsors.  
- **Fund‑raising** – include a donation section and partnership contact options.  
- **Digital inclusion** – content currently in pt‑BR with a structure ready for English and Spanish pages.  
- **Hands‑on learning** – apply Software Engineering, DevOps and UX concepts in a real‑world scenario.

---

## Key features

|  | Description |
|----|-------------|
| **Dynamic Home page** | News highlights, photo carousel and donation CTA. |
| **Internationalisation** | Next.js middleware + `next-intl` with automatic locale detection. |
| **Secure contact** | Form validated by Zod, sent via Nodemailer and protected by reCAPTCHA v3. |
| **Smooth animations** | GSAP + ScrollTrigger transitions with no LCP impact. |
| **Advanced SEO** | Structured metadata (`<meta>` / OpenGraph), image optimisation, automatic sitemap. |
| **Accessibility** | AAA colour palette, full keyboard navigation, Lighthouse‑verified contrast. |
| **CI with GitHub Actions** | Linting, type‑checking and preview build on every PR. |

---

## Deploy & CI/CD

| Stage | Service | Details |
|-------|---------|---------|
| **Preview** | Vercel | Every push / PR gets a unique URL. |
| **Production** | Vercel | Deployment triggered via GitHub Action `main → production`. |
| **Domain** | Hostinger | DNS points to Vercel. |
| **Monitoring** | Vercel Analytics + Lighthouse CI | Tracks performance and errors. |

---

## Performance

![Mobile Performance Screenshot](https://github.com/user-attachments/assets/7b8ea201-4219-4daa-9c7d-4cd37f143116)

![Mobile Insights Screenshot](https://github.com/user-attachments/assets/cf8eeb45-3f44-4820-8993-3f64e3342b77)

---

## Future improvements

- Integrate a **headless CMS** (e.g. Sanity) so the team can manage content easily.  
- Reach at least **96 points in accessibility** on Lighthouse.

---

## Contact

**Author:** Rafael Oliveira Lopes  
✉️ **Email:** rafaellopes.dev@email.com  
🔗 **LinkedIn:** <https://www.linkedin.com/in/rafael-lopes-desenvolvedor-fullstack/>  
🌐 **Website:** <https://rafaellopes.dev>
