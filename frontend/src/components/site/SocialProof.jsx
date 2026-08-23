import { Star, ShieldCheck, Lock, Server } from "lucide-react";
import { Reveal, SectionLabel } from "@/components/site/primitives";

const QUOTES = [
  {
    quote:
      "For the first time, our leadership team debates decisions instead of debating whose numbers are right.",
    name: "Managing Partner",
    role: "Global Advisory Firm",
    initials: "MP",
    tone: "#6D5EF5",
  },
  {
    quote:
      "We saw a margin risk on a flagship engagement two weeks earlier than we ever would have. That's the whole point.",
    name: "Chief Operating Officer",
    role: "Research & Analyst Firm",
    initials: "CO",
    tone: "#9F8BFF",
  },
  {
    quote:
      "Synqora replaced a monday-morning scramble of spreadsheets with one live view the whole board trusts.",
    name: "Founder & CEO",
    role: "Consulting Group",
    initials: "FC",
    tone: "#2ECC71",
  },
];

const BADGES = [
  { icon: ShieldCheck, label: "Enterprise Ready" },
  { icon: Lock, label: "SOC 2 Aligned" },
  { icon: Server, label: "Role-Based Access" },
];

export default function SocialProof() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <SectionLabel>Social proof</SectionLabel>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-4 font-heading text-3xl font-medium tracking-tight text-white sm:text-4xl lg:text-5xl">
              Trusted by leaders building the next category.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-4 max-w-xl text-sm text-gray-500">
              Early access · Pilot cohort now onboarding. Names anonymized at customer
              request.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 lg:grid-cols-3">
          {QUOTES.map((q, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div
                data-testid={`testimonial-${i}`}
                className="sq-card flex h-full flex-col p-7"
              >
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star
                      key={s}
                      className="h-4 w-4 fill-[#F59E0B] text-[#F59E0B]"
                    />
                  ))}
                </div>
                <p className="mt-5 flex-1 text-[15px] leading-relaxed text-gray-200">
                  &ldquo;{q.quote}&rdquo;
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <div
                    className="grid h-10 w-10 place-items-center rounded-full font-heading text-sm font-semibold text-white"
                    style={{ backgroundColor: `${q.tone}33`, color: q.tone }}
                  >
                    {q.initials}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">{q.name}</p>
                    <p className="text-xs text-gray-500">{q.role}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
            {BADGES.map((b) => (
              <div
                key={b.label}
                className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.02] px-4 py-2 text-sm text-gray-300"
              >
                <b.icon className="h-4 w-4 text-[#9F8BFF]" />
                {b.label}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
