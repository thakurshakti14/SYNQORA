import { motion } from "framer-motion";
import {
  Unlink,
  FileSpreadsheet,
  Mail,
  Presentation,
  Database,
  TrendingUp,
  Briefcase,
  Users,
  Truck,
  Gauge,
  Eye,
  Check,
  X,
} from "lucide-react";
import { Reveal, SectionLabel } from "@/components/site/primitives";

/* ---------------- BEFORE: disconnected fragments ---------------- */
const FRAGMENTS = [
  { icon: Database, label: "Sales", sub: "in a CRM", pos: "left-3 top-4 -rotate-6" },
  { icon: Briefcase, label: "Projects", sub: "in a PM tool", pos: "right-4 top-8 rotate-3" },
  { icon: FileSpreadsheet, label: "Resourcing", sub: "in spreadsheets", pos: "left-5 top-[120px] rotate-2" },
  { icon: Mail, label: "Delivery", sub: "over email", pos: "right-5 top-[132px] -rotate-3" },
  { icon: Presentation, label: "Performance", sub: "in slide decks", pos: "left-1/2 top-[224px] -translate-x-1/2 rotate-1" },
];

function BeforePanel() {
  return (
    <div className="relative flex h-full flex-col rounded-2xl border border-[#EF4444]/20 bg-[#131A24] p-6">
      <div className="flex items-center gap-2">
        <span className="grid h-6 w-6 place-items-center rounded-md bg-[#EF4444]/15 text-[#EF4444]">
          <X className="h-3.5 w-3.5" />
        </span>
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#EF4444]/80">
          Without Synqora
        </span>
      </div>

      {/* Mobile: clean 2-col grid (no overlap) */}
      <div className="mt-4 grid grid-cols-2 gap-2.5 sm:hidden">
        {FRAGMENTS.map((f) => (
          <div
            key={f.label}
            className="relative flex items-center gap-2.5 rounded-xl border border-dashed border-white/15 bg-[#0B0F17]/80 px-3 py-2.5"
          >
            <div className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-white/[0.04] text-gray-400">
              <f.icon className="h-4 w-4" />
            </div>
            <div className="min-w-0">
              <p className="truncate text-xs font-medium text-gray-200">{f.label}</p>
              <p className="truncate text-[10px] text-gray-500">{f.sub}</p>
            </div>
            <span className="absolute -right-1 -top-1 h-2 w-2 rounded-full bg-[#EF4444] sq-pulse-dot" />
          </div>
        ))}
      </div>

      {/* Desktop / tablet: scattered disconnected fragments */}
      <div className="relative mt-4 hidden h-[280px] w-full sm:block">
        {/* broken connectors */}
        {[0, 1, 2].map((i) => (
          <Unlink
            key={i}
            className="absolute h-4 w-4 text-gray-600"
            style={{
              left: `${25 + i * 25}%`,
              top: `${30 + (i % 2) * 30}%`,
            }}
          />
        ))}

        {FRAGMENTS.map((f, i) => (
          <motion.div
            key={f.label}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.5 }}
            className={`absolute flex w-36 items-center gap-2.5 rounded-xl border border-dashed border-white/15 bg-[#0B0F17]/80 px-3 py-2.5 ${f.pos}`}
          >
            <div className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-white/[0.04] text-gray-400">
              <f.icon className="h-4 w-4" />
            </div>
            <div className="min-w-0">
              <p className="truncate text-xs font-medium text-gray-200">{f.label}</p>
              <p className="truncate text-[10px] text-gray-500">{f.sub}</p>
            </div>
            <span className="absolute -right-1 -top-1 h-2 w-2 rounded-full bg-[#EF4444] sq-pulse-dot" />
          </motion.div>
        ))}
      </div>

      <p className="mt-auto pt-4 text-sm leading-relaxed text-gray-400">
        Five tools. Zero shared truth. Leadership stitches reports together by hand—and
        only ever sees the past.
      </p>
    </div>
  );
}

/* ---------------- AFTER: one connected operating system ---------------- */
const PIPELINE = [
  { icon: TrendingUp, label: "Sales & CRM", sub: "Pipeline to close" },
  { icon: Briefcase, label: "Project Execution", sub: "Plans, tasks, status" },
  { icon: Users, label: "Resource Management", sub: "Capacity & utilization" },
  { icon: Truck, label: "Delivery", sub: "Health, margin, risk" },
  { icon: Gauge, label: "Business Performance", sub: "KPIs & health scores" },
];

function AfterPanel() {
  return (
    <div className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-[#6D5EF5]/40 bg-[#131A24] p-6">
      <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[#6D5EF5]/20 blur-3xl" />

      <div className="relative flex items-center gap-2">
        <span className="grid h-6 w-6 place-items-center rounded-md bg-[#2ECC71]/15 text-[#2ECC71]">
          <Check className="h-3.5 w-3.5" />
        </span>
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#9F8BFF]">
          With Synqora
        </span>
      </div>

      <div className="relative mt-6 pl-6">
        {/* animated spine */}
        <div className="absolute bottom-6 left-[10px] top-1 w-[2px] overflow-hidden rounded-full bg-white/10">
          <motion.div
            initial={{ height: "0%" }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="w-full bg-gradient-to-b from-[#6D5EF5] to-[#9F8BFF]"
          />
          <motion.span
            className="absolute left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-white shadow-[0_0_8px_2px_rgba(159,139,255,0.8)]"
            animate={{ top: ["0%", "100%"] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <div className="space-y-2.5">
          {PIPELINE.map((p, i) => (
            <motion.div
              key={p.label}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 + i * 0.1, duration: 0.4 }}
              className="relative flex items-center gap-3"
            >
              <span className="absolute -left-6 h-2.5 w-2.5 rounded-full border-2 border-[#0d1119] bg-[#6D5EF5]" />
              <div className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-[#6D5EF5]/15 text-[#9F8BFF]">
                <p.icon className="h-4 w-4" />
              </div>
              <div>
                <p className="text-sm font-medium text-white">{p.label}</p>
                <p className="text-[11px] text-gray-500">{p.sub}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Leadership hub */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.75, duration: 0.5 }}
        className="relative mt-5 flex items-center gap-3 rounded-xl border border-[#6D5EF5]/40 bg-gradient-to-r from-[#6D5EF5]/25 to-transparent p-4"
      >
        <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[#6D5EF5] text-white">
          <Eye className="h-5 w-5" />
        </div>
        <div>
          <p className="font-heading text-base font-semibold text-white">
            Complete Leadership Visibility
          </p>
          <p className="text-xs text-gray-400">
            One live source of truth—the whole business, right now.
          </p>
        </div>
      </motion.div>
    </div>
  );
}

export default function Solution() {
  return (
    <section
      id="solution"
      className="relative overflow-hidden border-y border-white/[0.06] bg-[#0d1119] py-16 sm:py-24 lg:py-32"
    >
      <div className="pointer-events-none absolute inset-0 sq-grid-lines opacity-40" />
      <div className="relative mx-auto max-w-6xl px-5 lg:px-8 xl:max-w-7xl 2xl:max-w-[1500px]">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <SectionLabel>The solution</SectionLabel>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-4 font-heading text-3xl font-medium tracking-tight text-white sm:text-4xl lg:text-5xl">
              From scattered tools to{" "}
              <span className="sq-text-gradient">one operating system.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-5 max-w-2xl text-lg text-gray-400">
              Synqora replaces the patchwork. Sales, project execution, resource
              management and business performance all live in one system—so leadership
              finally sees everything, as it happens.
            </p>
          </Reveal>
        </div>

        {/* Before / After */}
        <div className="mt-14 grid grid-cols-1 items-stretch gap-4 lg:grid-cols-[1fr_auto_1fr]">
          <Reveal>
            <BeforePanel />
          </Reveal>

          <Reveal delay={0.15} className="flex items-center justify-center">
            <div className="flex items-center gap-2 rounded-full border border-white/10 bg-[#131A24] px-4 py-2 text-xs font-medium text-gray-300 lg:flex-col lg:px-2 lg:py-4">
              <span className="hidden lg:block">→</span>
              <span className="lg:hidden">↓</span>
              <span className="lg:[writing-mode:vertical-rl] lg:rotate-180">Unified</span>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <AfterPanel />
          </Reveal>
        </div>

        {/* Outcome strip */}
        <Reveal delay={0.25}>
          <div className="mt-6 grid grid-cols-1 gap-4 rounded-2xl border border-white/[0.06] bg-[#131A24] p-6 sm:grid-cols-3">
            {[
              { v: "1", k: "system, not five", tone: "#9F8BFF" },
              { v: "Real-time", k: "not next week's report", tone: "#2ECC71" },
              { v: "100%", k: "of the business, one view", tone: "#6D5EF5" },
            ].map((s) => (
              <div key={s.k} className="text-center sm:text-left">
                <p
                  className="font-heading text-2xl font-semibold"
                  style={{ color: s.tone }}
                >
                  {s.v}
                </p>
                <p className="mt-1 text-sm text-gray-400">{s.k}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
