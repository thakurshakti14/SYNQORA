import {
  Eye,
  Database,
  Zap,
  Link2,
  ShieldCheck,
  BrainCircuit,
} from "lucide-react";
import { Reveal, SectionLabel } from "@/components/site/primitives";

const BENEFITS = [
  {
    icon: Eye,
    title: "Complete Business Visibility",
    body: "See sales, delivery, teams and health in a single frame—no more piecing the story together.",
  },
  {
    icon: Database,
    title: "One Source of Truth",
    body: "Every number reconciles to the same system, so leadership debates decisions, not data.",
  },
  {
    icon: Zap,
    title: "Faster Executive Decisions",
    body: "Real-time signals replace weekly reporting cycles. Act while it still moves the outcome.",
  },
  {
    icon: Link2,
    title: "Connected Sales & Delivery",
    body: "What sales sells and delivery ships stay linked—margins and promises never drift apart.",
  },
  {
    icon: ShieldCheck,
    title: "Real-Time Accountability",
    body: "Every metric has an owner. Follow-through is visible, not assumed.",
  },
  {
    icon: BrainCircuit,
    title: "Operational Intelligence",
    body: "Surface risk and opportunity automatically—before it reaches the client or the board.",
  },
];

export default function WhySynqora() {
  return (
    <section id="why" className="border-y border-white/[0.06] bg-[#0d1119] py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8 2xl:max-w-[1600px]">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <SectionLabel>Why Synqora</SectionLabel>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-4 font-heading text-3xl font-medium tracking-tight text-white sm:text-4xl lg:text-5xl">
              Outcomes leadership can feel.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-5 max-w-xl text-lg text-gray-400">
              Not another feature list. These are the shifts leaders notice in the first
              quarter with Synqora.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.06] sm:grid-cols-2 lg:grid-cols-3">
          {BENEFITS.map((b, i) => (
            <Reveal key={b.title} delay={(i % 3) * 0.08}>
              <div
                data-testid={`benefit-${i}`}
                className="group h-full bg-[#0d1119] p-8 transition-colors hover:bg-[#131A24]"
              >
                <div className="mb-5 grid h-12 w-12 place-items-center rounded-xl bg-[#6D5EF5]/12 text-[#9F8BFF] transition-transform group-hover:scale-110">
                  <b.icon className="h-5 w-5" />
                </div>
                <h3 className="font-heading text-lg font-medium text-white">
                  {b.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-400">{b.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
