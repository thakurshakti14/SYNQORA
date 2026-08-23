import { motion } from "framer-motion";
import { Plug, ScanLine, BarChart3, Compass } from "lucide-react";
import { Reveal, SectionLabel } from "@/components/site/primitives";

const STEPS = [
  {
    icon: Plug,
    step: "01",
    title: "Connect",
    body: "Bring sales, projects, tasks and teams onto one platform. Everything lives inside Synqora from day one—no scattered tools.",
  },
  {
    icon: ScanLine,
    step: "02",
    title: "Capture",
    body: "Synqora continuously captures execution signals across sales, projects and teams.",
  },
  {
    icon: BarChart3,
    step: "03",
    title: "Analyze",
    body: "Operational data becomes leadership intelligence—health scores, trends and risk.",
  },
  {
    icon: Compass,
    step: "04",
    title: "Lead",
    body: "Leadership acts on one clear picture, with accountability built into every decision.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-5 lg:px-8 xl:max-w-7xl 2xl:max-w-[1500px]">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <SectionLabel>How it works</SectionLabel>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-4 font-heading text-3xl font-medium tracking-tight text-white sm:text-4xl lg:text-5xl">
              From scattered execution to decisive leadership.
            </h2>
          </Reveal>
        </div>

        <div className="relative mt-16">
          {/* connecting line */}
          <div className="absolute left-0 right-0 top-7 hidden h-px bg-white/[0.08] lg:block">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, ease: "easeInOut" }}
              style={{ transformOrigin: "left" }}
              className="h-full bg-gradient-to-r from-[#6D5EF5] to-[#9F8BFF]"
            />
          </div>

          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {STEPS.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.12}>
                <div className="relative">
                  <div className="mb-6 grid h-14 w-14 place-items-center rounded-2xl border border-white/[0.08] bg-[#131A24] text-[#9F8BFF]">
                    <s.icon className="h-6 w-6" />
                  </div>
                  <span className="font-heading text-xs font-bold tracking-widest text-gray-600">
                    STEP {s.step}
                  </span>
                  <h3 className="mt-1 font-heading text-xl font-medium text-white">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-400">{s.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
