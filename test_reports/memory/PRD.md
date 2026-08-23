# Synqora — Leadership Operating System (Landing Page) — PRD

## Original Problem
Premium B2B SaaS landing page for "Synqora", a Leadership Operating System (not CRM/PM/BI). Category-defining feel (Linear/Stripe/Vercel). Dark theme, 12 sections, executive copy, dashboard mockups.

## User Choices (defaults confirmed)
- Functional lead-capture "Book Demo" form → saved to MongoDB, success confirmation
- Premium dark theme throughout (#0B0F17 / primary #6D5EF5 / cards #131A24)
- "Watch Product Tour" opens a modal
- DB-only lead storage (no email integration)

## Personas
CEO, COO, Managing Director, Operations Head, Business Unit Head at consulting/research/professional-services firms (50–1000 employees).

## Architecture
- Backend (FastAPI + Mongo): `POST /api/demo-requests` (name/email/company required; role/team_size/message optional), `GET /api/demo-requests`. Pydantic EmailStr validation.
- Frontend (React + Tailwind + shadcn + framer-motion + recharts): single Landing page composed of 14 components under `src/components/site/`. DemoContext controls Demo + Tour modals. Dashboard visuals are code-built (Recharts + shadcn), not images.
- Fonts: Outfit (headings) + Manrope (body).

## Implemented (2025-12)
- All 12 sections: Hero (floating metric cards + dashboard mockup), Trust Bar (marquee), Problem (4 cards), Solution (animated flow), Platform Overview (interactive module switch), Why Synqora (6 benefits), How It Works (4-step timeline), Dashboard Showcase (5 role tabs), Feature Grid (bento 9), Social Proof (testimonials + trust badges), FAQ (accordion), Final CTA.
- Working Book Demo lead form (validation + success + toast + DB persistence), Product Tour modal.
- Sticky glass navbar w/ smooth scroll + mobile menu.
- Tested: backend 100% (6/6), frontend 100% (all flows). iteration_1.json.

## Backlog / Next
- P1: Email confirmation on demo booking (Resend integration) + internal notification.
- P1: Admin view / auth to read demo requests securely (currently public GET).
- P2: Real customer logos, case studies, blog/resources pages.
- P2: Fix Recharts hidden-container console warnings; add scroll-margin polish.
