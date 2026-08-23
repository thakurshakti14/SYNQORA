import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  LayoutGrid,
  Handshake,
  FolderKanban,
  ListChecks,
  Users,
  LineChart,
  ChevronRight,
} from "lucide-react";
import { Reveal, SectionLabel } from "@/components/site/primitives";
import DashboardMockup from "@/components/site/DashboardMockup";

function months(vals) {
  const m = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"];
  return vals.map((v, i) => ({ m: m[i], v }));
}

const MODULES = [
  {
    icon: LayoutGrid,
    title: "Leadership Command Center",
    desc: "One live view of the entire business.",
    view: {
      title: "Leadership Command Center",
      subtitle: "Executive Overview",
      active: 0,
      kpis: [
        { label: "Revenue", value: "$4.82M", delta: "+18.4%", tone: "success" },
        { label: "Business Health", value: "92", delta: "+6 pts", tone: "success" },
        { label: "Active Units", value: "6", delta: "+1", tone: "success" },
        { label: "Open Alerts", value: "7", delta: "-3", tone: "warning" },
      ],
      trend: months([30, 42, 38, 55, 60, 78, 74, 92]),
      chartLabel: "Company Momentum",
      healthLabel: "Business Health",
      health: [
        { label: "Sales Pipeline", value: 88, tone: "success" },
        { label: "Delivery Health", value: 71, tone: "warning" },
        { label: "Team Utilization", value: 94, tone: "success" },
      ],
      alerts: [
        { text: "Q3 forecast trending +12% above plan", tone: "success" },
        { text: "Project Atlas margin below target", tone: "error" },
        { text: "2 accounts pending renewal", tone: "warning" },
      ],
    },
  },
  {
    icon: Handshake,
    title: "Built-in CRM & Sales",
    desc: "Leads, accounts, deals and pipeline—native, not bolted on.",
    view: {
      title: "CRM & Sales",
      subtitle: "Pipeline & Accounts",
      active: 1,
      kpis: [
        { label: "Pipeline", value: "$11.4M", delta: "+9.2%", tone: "success" },
        { label: "Win Rate", value: "34%", delta: "+4.1%", tone: "success" },
        { label: "Accounts", value: "128", delta: "+6", tone: "success" },
        { label: "Open Deals", value: "42", delta: "+5", tone: "success" },
      ],
      trend: months([20, 35, 30, 48, 52, 64, 70, 85]),
      chartLabel: "Bookings by Month",
      healthLabel: "Stage Conversion",
      health: [
        { label: "Discovery → Proposal", value: 62, tone: "warning" },
        { label: "Proposal → Won", value: 41, tone: "warning" },
        { label: "Renewal Rate", value: 91, tone: "success" },
      ],
      alerts: [
        { text: "3 enterprise deals entering final stage", tone: "success" },
        { text: "West region 14% behind quota", tone: "error" },
        { text: "New account added · Halden Group", tone: "success" },
      ],
    },
  },
  {
    icon: FolderKanban,
    title: "Project Management",
    desc: "Plans, timelines and delivery health in one place.",
    view: {
      title: "Project Management",
      subtitle: "Delivery & Timelines",
      active: 2,
      kpis: [
        { label: "On-Track", value: "82%", delta: "+5%", tone: "success" },
        { label: "Avg Margin", value: "38%", delta: "-2%", tone: "warning" },
        { label: "Active", value: "37", delta: "+3", tone: "success" },
        { label: "At Risk", value: "4", delta: "+1", tone: "error" },
      ],
      trend: months([60, 58, 62, 55, 66, 70, 68, 74]),
      chartLabel: "Delivery Throughput",
      healthLabel: "Portfolio Health",
      health: [
        { label: "On Schedule", value: 82, tone: "success" },
        { label: "On Budget", value: 76, tone: "warning" },
        { label: "Client Satisfaction", value: 93, tone: "success" },
      ],
      alerts: [
        { text: "Project Atlas: 12% over budget", tone: "error" },
        { text: "Meridian rollout ahead of schedule", tone: "success" },
        { text: "2 projects awaiting sign-off", tone: "warning" },
      ],
    },
  },
  {
    icon: ListChecks,
    title: "Task Assignment",
    desc: "Clear ownership and follow-through on every task.",
    view: {
      title: "Task Assignment",
      subtitle: "Ownership & Follow-through",
      active: 3,
      kpis: [
        { label: "Open Tasks", value: "312", delta: "+18", tone: "success" },
        { label: "On-Time", value: "89%", delta: "+4%", tone: "success" },
        { label: "Overdue", value: "9", delta: "-5", tone: "warning" },
        { label: "Unassigned", value: "3", delta: "-2", tone: "error" },
      ],
      trend: months([70, 72, 75, 80, 82, 86, 88, 91]),
      chartLabel: "Completion Rate",
      healthLabel: "Team Follow-through",
      health: [
        { label: "Commitments Met", value: 91, tone: "success" },
        { label: "Review Cadence", value: 84, tone: "success" },
        { label: "Blockers Cleared", value: 69, tone: "warning" },
      ],
      alerts: [
        { text: "COO cleared 5 overdue action items", tone: "success" },
        { text: "3 tasks without a named owner", tone: "warning" },
        { text: "Escalation resolved · Client SLA", tone: "success" },
      ],
    },
  },
  {
    icon: Users,
    title: "Resource Management",
    desc: "Capacity, allocation and utilization across teams.",
    view: {
      title: "Resource Management",
      subtitle: "Capacity & Allocation",
      active: 4,
      kpis: [
        { label: "Utilization", value: "89%", delta: "+3%", tone: "success" },
        { label: "Billable", value: "76%", delta: "+2%", tone: "success" },
        { label: "On Bench", value: "8", delta: "-2", tone: "warning" },
        { label: "Overallocated", value: "5", delta: "+1", tone: "error" },
      ],
      trend: months([64, 66, 70, 68, 74, 78, 82, 89]),
      chartLabel: "Utilization Trend",
      healthLabel: "Resource Health",
      health: [
        { label: "Capacity Coverage", value: 88, tone: "success" },
        { label: "Allocation Balance", value: 74, tone: "warning" },
        { label: "Skills Coverage", value: 82, tone: "success" },
      ],
      alerts: [
        { text: "5 people overallocated next sprint", tone: "error" },
        { text: "Advisory team freeing up capacity", tone: "success" },
        { text: "2 skill gaps flagged for hiring", tone: "warning" },
      ],
    },
  },
  {
    icon: LineChart,
    title: "Analytics & Business Units",
    desc: "Operational intelligence across every unit.",
    view: {
      title: "Analytics & Business Units",
      subtitle: "Operational Intelligence",
      active: 5,
      kpis: [
        { label: "Live KPIs", value: "312", delta: "+18", tone: "success" },
        { label: "Business Units", value: "6", delta: "+1", tone: "success" },
        { label: "Refresh", value: "Real-time", delta: "", tone: "success" },
        { label: "Anomalies", value: "3", delta: "+1", tone: "warning" },
      ],
      trend: months([40, 46, 52, 50, 63, 71, 78, 88]),
      chartLabel: "Signal Trend",
      healthLabel: "Unit Health",
      health: [
        { label: "Advisory", value: 91, tone: "success" },
        { label: "Digital Workplace", value: 88, tone: "success" },
        { label: "Research", value: 74, tone: "warning" },
      ],
      alerts: [
        { text: "Revenue anomaly detected · EMEA", tone: "warning" },
        { text: "Forecast model accuracy 94%", tone: "success" },
        { text: "Research unit margin compressing", tone: "warning" },
      ],
    },
  },
];

export default function PlatformOverview() {
  const [active, setActive] = useState(0);

  return (
    <section id="platform" className="overflow-hidden py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8 2xl:max-w-[1600px]">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <SectionLabel>Platform overview</SectionLabel>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-4 font-heading text-3xl font-medium tracking-tight text-white sm:text-4xl lg:text-5xl">
              One platform. Everything built in.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-5 max-w-2xl text-lg text-gray-400">
              CRM, sales, project management, task assignment, resource management and
              leadership visibility—all native to Synqora. Nothing to integrate,
              nothing to stitch together.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-12">
          {/* Module list */}
          <div className="flex flex-col gap-2 lg:col-span-4">
            {MODULES.map((m, i) => (
              <button
                key={m.title}
                data-testid={`platform-module-${i}`}
                onClick={() => setActive(i)}
                className={`group flex items-center gap-4 rounded-xl border p-4 text-left transition-all ${
                  active === i
                    ? "border-[#6D5EF5]/40 bg-[#131A24]"
                    : "border-white/[0.06] bg-transparent hover:bg-white/[0.02]"
                }`}
              >
                <div
                  className={`grid h-10 w-10 shrink-0 place-items-center rounded-lg transition-colors ${
                    active === i
                      ? "bg-[#6D5EF5] text-white"
                      : "bg-[#131A24] text-[#9F8BFF]"
                  }`}
                >
                  <m.icon className="h-4.5 w-4.5" />
                </div>
                <div className="flex-1">
                  <p className="font-heading text-sm font-medium text-white">
                    {m.title}
                  </p>
                  <p className="mt-0.5 text-xs text-gray-500">{m.desc}</p>
                </div>
                <ChevronRight
                  className={`h-4 w-4 shrink-0 transition-all ${
                    active === i
                      ? "translate-x-0 text-[#9F8BFF]"
                      : "-translate-x-1 text-gray-600 opacity-0 group-hover:opacity-100"
                  }`}
                />
              </button>
            ))}
          </div>

          {/* Preview */}
          <div className="lg:col-span-8">
            <div className="relative">
              <div className="pointer-events-none absolute -inset-4 -z-10 rounded-3xl bg-[#6D5EF5]/10 blur-3xl" />
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.4 }}
                >
                  <DashboardMockup view={MODULES[active].view} />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
