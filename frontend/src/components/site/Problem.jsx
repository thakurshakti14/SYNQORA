import { Unplug, FileSpreadsheet, EyeOff, Crown } from "lucide-react";
import { Reveal, SectionLabel } from "@/components/site/primitives";

const PROBLEMS = [
  {
    icon: Unplug,
    title: "Disconnected Sales",
    body: "Pipeline lives in one tool, delivery in another. Leadership stitches the truth together manually—too late to act.",
  },
  {
    icon: FileSpreadsheet,
    title: "Manual Reporting",
    body: "Executives wait days for slides built from stale spreadsheets. By the time reports land, the numbers have moved.",
  },
  {
    icon: EyeOff,
    title: "Delivery Blind Spots",
    body: "Projects drift off-margin and off-schedule without warning. Risk surfaces only after it becomes a client problem.",
  },
  {
    icon: Crown,
    title: "No Leadership Visibility",
    body: "The people accountable for the business have the least real-time insight into how it's actually performing.",
  },
];

export default function Problem() {
  return (
    <section id="problem" className="relative py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8 2xl:max-w-[1600px]">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <SectionLabel>The problem</SectionLabel>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-4 font-heading text-3xl font-medium tracking-tight text-white sm:text-4xl lg:text-5xl">
              Growing businesses don&apos;t lack data.
              <br />
              <span className="text-gray-500">They lack visibility.</span>
            </h2>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PROBLEMS.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08}>
              <div
                data-testid={`problem-card-${i}`}
                className="sq-card group h-full p-6"
              >
                <div className="mb-5 grid h-11 w-11 place-items-center rounded-xl border border-white/[0.06] bg-[#0B0F17] text-[#9F8BFF] transition-colors group-hover:border-[#6D5EF5]/40">
                  <p.icon className="h-5 w-5" />
                </div>
                <h3 className="font-heading text-lg font-medium text-white">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-400">
                  {p.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
