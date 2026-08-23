import {
  LayoutDashboard,
  TrendingUp,
  Briefcase,
  LineChart,
  ShieldCheck,
} from "lucide-react";
import { Reveal, SectionLabel } from "@/components/site/primitives";

const FEATURED = {
  icon: LayoutDashboard,
  title: "Leadership Command Center",
  body: "The single executive view of the entire business—real-time dashboards, KPI monitoring and leadership alerts, all in one place.",
  capabilities: ["Real-time Dashboard", "KPI Monitoring", "Leadership Alerts"],
  stats: [
    { k: "Revenue", v: "$4.82M" },
    { k: "Health", v: "92" },
    { k: "Alerts", v: "7" },
  ],
};

const GROUPS = [
  {
    icon: TrendingUp,
    title: "Sales & Revenue",
    body: "Pipeline, forecast and revenue momentum—built in, not bolted on.",
    capabilities: ["CRM & Pipeline", "Revenue Tracking", "Forecasting", "Win Rates"],
  },
  {
    icon: Briefcase,
    title: "Delivery & Execution",
    body: "Keep every project and task on time, on budget and on owner.",
    capabilities: ["Project Health", "Task Ownership", "Margins & Schedule"],
  },
  {
    icon: LineChart,
    title: "Intelligence & Business Units",
    body: "Operational intelligence and cross-unit rollups across the org.",
    capabilities: ["Analytics", "Business Units", "Operational Insight"],
  },
  {
    icon: ShieldCheck,
    title: "Access & Governance",
    body: "The right view for every leader—secure, accountable, controlled.",
    capabilities: ["Role-Based Access", "Accountability", "Enterprise Security"],
  },
];

const Chip = ({ children }) => (
  <span className="rounded-full border border-white/[0.08] bg-[#0B0F17] px-3 py-1 text-xs text-gray-300">
    {children}
  </span>
);

export default function FeatureGrid() {
  return (
    <section className="py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8 2xl:max-w-[1600px]">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <SectionLabel>The platform</SectionLabel>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-4 font-heading text-3xl font-medium tracking-tight text-white sm:text-4xl lg:text-5xl">
              Everything leadership needs, grouped and ready.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-5 max-w-xl text-lg text-gray-400">
              Five connected pillars—one unified platform. No add-ons, no separate
              tools to stitch together.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 lg:grid-cols-3">
          {/* Featured pillar */}
          <Reveal className="lg:col-span-2">
            <div
              data-testid="feature-featured"
              className="sq-card group flex h-full flex-col justify-between p-8"
            >
              <div>
                <div className="grid h-14 w-14 place-items-center rounded-2xl border border-white/[0.06] bg-[#0B0F17] text-[#9F8BFF] transition-colors group-hover:border-[#6D5EF5]/40">
                  <FEATURED.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 font-heading text-2xl font-medium text-white">
                  {FEATURED.title}
                </h3>
                <p className="mt-2 max-w-lg text-sm leading-relaxed text-gray-400">
                  {FEATURED.body}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {FEATURED.capabilities.map((c) => (
                    <Chip key={c}>{c}</Chip>
                  ))}
                </div>
              </div>

              <div className="mt-8 grid grid-cols-3 gap-3">
                {FEATURED.stats.map((s) => (
                  <div
                    key={s.k}
                    className="rounded-xl border border-white/[0.06] bg-[#0B0F17] px-4 py-3"
                  >
                    <p className="text-[11px] text-gray-500">{s.k}</p>
                    <p className="font-heading text-lg font-semibold text-white">
                      {s.v}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* First group sits beside featured */}
          {GROUPS.map((g, i) => (
            <Reveal key={g.title} delay={(i % 3) * 0.08}>
              <div
                data-testid={`feature-group-${i}`}
                className="sq-card group flex h-full flex-col p-6"
              >
                <div className="grid h-11 w-11 place-items-center rounded-xl border border-white/[0.06] bg-[#0B0F17] text-[#9F8BFF] transition-colors group-hover:border-[#6D5EF5]/40">
                  <g.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-heading text-lg font-medium text-white">
                  {g.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-400">{g.body}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {g.capabilities.map((c) => (
                    <Chip key={c}>{c}</Chip>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
