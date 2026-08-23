import { useMemo } from "react";
import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  Bar,
  BarChart,
  Cell,
} from "recharts";
import {
  LayoutGrid,
  TrendingUp,
  Users,
  FolderKanban,
  ListChecks,
  ShieldCheck,
  LineChart,
  Bell,
  Search,
  ArrowUpRight,
} from "lucide-react";

const NAV = [
  { icon: LayoutGrid, label: "Command Center" },
  { icon: TrendingUp, label: "CRM & Sales" },
  { icon: FolderKanban, label: "Projects" },
  { icon: ListChecks, label: "Tasks" },
  { icon: Users, label: "Resources" },
  { icon: LineChart, label: "Analytics" },
];

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="rounded-lg border border-white/10 bg-[#0B0F17] px-3 py-2 text-xs text-white shadow-xl">
        <span className="text-gray-400">Value </span>
        <span className="font-semibold text-[#9F8BFF]">{payload[0].value}</span>
      </div>
    );
  }
  return null;
};

const HealthBar = ({ label, value, tone }) => {
  const color =
    tone === "success" ? "#2ECC71" : tone === "warning" ? "#F59E0B" : "#EF4444";
  return (
    <div className="space-y-1.5">
      <div className="flex items-center justify-between text-xs">
        <span className="text-gray-300">{label}</span>
        <span className="font-semibold" style={{ color }}>
          {value}%
        </span>
      </div>
      <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/[0.06]">
        <div
          className="h-full rounded-full"
          style={{ width: `${value}%`, backgroundColor: color }}
        />
      </div>
    </div>
  );
};

export default function DashboardMockup({ view, compact = false }) {
  const data = view || {
    title: "Leadership Command Center",
    active: 0,
    kpis: [
      { label: "Revenue", value: "$4.82M", delta: "+18.4%", tone: "success" },
      { label: "Business Health", value: "92", delta: "+6 pts", tone: "success" },
      { label: "Win Rate", value: "34%", delta: "+4.1%", tone: "success" },
      { label: "Open Alerts", value: "7", delta: "-3", tone: "warning" },
    ],
    trend: [
      { m: "Jan", v: 30 },
      { m: "Feb", v: 42 },
      { m: "Mar", v: 38 },
      { m: "Apr", v: 55 },
      { m: "May", v: 60 },
      { m: "Jun", v: 78 },
      { m: "Jul", v: 74 },
      { m: "Aug", v: 92 },
    ],
    health: [
      { label: "Sales Pipeline", value: 88, tone: "success" },
      { label: "Delivery Health", value: 71, tone: "warning" },
      { label: "Team Utilization", value: 94, tone: "success" },
    ],
    alerts: [
      { text: "Project Atlas margin below target", tone: "error" },
      { text: "Q3 forecast updated · +12%", tone: "success" },
      { text: "2 accounts pending renewal", tone: "warning" },
    ],
  };

  const bars = useMemo(
    () => data.trend.map((d) => ({ ...d })),
    [data.trend]
  );

  return (
    <div className="w-full overflow-hidden rounded-2xl border border-white/10 bg-[#0d131c] shadow-[0_40px_120px_-40px_rgba(109,94,245,0.55)]">
      {/* Window chrome */}
      <div className="flex items-center gap-2 border-b border-white/[0.06] bg-[#0B0F17] px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-[#EF4444]/70" />
        <span className="h-3 w-3 rounded-full bg-[#F59E0B]/70" />
        <span className="h-3 w-3 rounded-full bg-[#2ECC71]/70" />
        <div className="mx-auto flex items-center gap-2 rounded-md border border-white/[0.06] bg-[#131A24] px-3 py-1 text-[11px] text-gray-400">
          <ShieldCheck className="h-3 w-3 text-[#9F8BFF]" />
          app.synqora.com/command-center
        </div>
      </div>

      <div className="flex">
        {/* Sidebar */}
        {!compact && (
          <div className="hidden w-48 shrink-0 flex-col gap-1 border-r border-white/[0.06] bg-[#0B0F17]/50 p-3 sm:flex">
            <div className="mb-3 flex items-center gap-2 px-2">
              <div className="grid h-7 w-7 place-items-center rounded-lg bg-gradient-to-br from-[#6D5EF5] to-[#9F8BFF] text-[13px] font-bold text-white font-heading">
                S
              </div>
              <span className="font-heading text-sm font-semibold text-white">
                Synqora
              </span>
            </div>
            {NAV.map((n, i) => (
              <div
                key={n.label}
                className={`flex items-center gap-2.5 rounded-lg px-2.5 py-2 text-[12px] transition-colors ${
                  i === data.active
                    ? "bg-[#6D5EF5]/15 text-white"
                    : "text-gray-400"
                }`}
              >
                <n.icon
                  className={`h-3.5 w-3.5 ${
                    i === data.active ? "text-[#9F8BFF]" : ""
                  }`}
                />
                {n.label}
              </div>
            ))}
          </div>
        )}

        {/* Main */}
        <div className="min-w-0 flex-1 p-4 sm:p-5">
          {/* Top bar */}
          <div className="mb-4 flex items-center justify-between">
            <div>
              <p className="text-[11px] uppercase tracking-[0.18em] text-[#9F8BFF]">
                {data.subtitle || "Live Overview"}
              </p>
              <h4 className="font-heading text-base font-semibold text-white sm:text-lg">
                {data.title}
              </h4>
            </div>
            <div className="flex items-center gap-2">
              <div className="hidden items-center gap-2 rounded-lg border border-white/[0.06] bg-[#131A24] px-2.5 py-1.5 text-[11px] text-gray-500 sm:flex">
                <Search className="h-3 w-3" /> Search
              </div>
              <div className="relative grid h-8 w-8 place-items-center rounded-lg border border-white/[0.06] bg-[#131A24]">
                <Bell className="h-3.5 w-3.5 text-gray-300" />
                <span className="absolute right-1.5 top-1.5 h-1.5 w-1.5 rounded-full bg-[#EF4444] sq-pulse-dot" />
              </div>
            </div>
          </div>

          {/* KPI cards */}
          <div className="mb-4 grid grid-cols-2 gap-3 lg:grid-cols-4">
            {data.kpis.map((k) => {
              const tone =
                k.tone === "success"
                  ? "#2ECC71"
                  : k.tone === "warning"
                  ? "#F59E0B"
                  : "#EF4444";
              return (
                <div
                  key={k.label}
                  className="rounded-xl border border-white/[0.06] bg-[#131A24] p-3"
                >
                  <p className="text-[11px] text-gray-400">{k.label}</p>
                  <p className="mt-1 font-heading text-lg font-semibold text-white">
                    {k.value}
                  </p>
                  <p
                    className="mt-0.5 flex items-center gap-1 text-[11px] font-medium"
                    style={{ color: tone }}
                  >
                    <ArrowUpRight className="h-3 w-3" /> {k.delta}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="grid grid-cols-1 gap-3 lg:grid-cols-3">
            {/* Chart */}
            <div className="rounded-xl border border-white/[0.06] bg-[#131A24] p-3 lg:col-span-2">
              <div className="mb-2 flex items-center justify-between">
                <p className="text-xs font-medium text-gray-300">
                  {data.chartLabel || "Revenue Momentum"}
                </p>
                <span className="rounded-full border border-[#6D5EF5]/30 bg-[#6D5EF5]/10 px-2 py-0.5 text-[10px] text-[#9F8BFF]">
                  YTD
                </span>
              </div>
              <div className="h-32">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={data.trend} margin={{ left: 0, right: 0, top: 6, bottom: 0 }}>
                    <defs>
                      <linearGradient id="sqArea" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#6D5EF5" stopOpacity={0.5} />
                        <stop offset="100%" stopColor="#6D5EF5" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <XAxis
                      dataKey="m"
                      tick={{ fill: "#6b7280", fontSize: 10 }}
                      axisLine={false}
                      tickLine={false}
                    />
                    <Tooltip content={<CustomTooltip />} cursor={{ stroke: "#6D5EF5", strokeOpacity: 0.2 }} />
                    <Area
                      type="monotone"
                      dataKey="v"
                      stroke="#9F8BFF"
                      strokeWidth={2}
                      fill="url(#sqArea)"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Business health */}
            <div className="rounded-xl border border-white/[0.06] bg-[#131A24] p-3">
              <p className="mb-3 text-xs font-medium text-gray-300">
                {data.healthLabel || "Business Health"}
              </p>
              <div className="space-y-3">
                {data.health.map((h) => (
                  <HealthBar key={h.label} {...h} />
                ))}
              </div>
            </div>
          </div>

          {/* Alerts + mini bars */}
          <div className="mt-3 grid grid-cols-1 gap-3 lg:grid-cols-3">
            <div className="rounded-xl border border-white/[0.06] bg-[#131A24] p-3 lg:col-span-2">
              <p className="mb-2 text-xs font-medium text-gray-300">
                Leadership Alerts
              </p>
              <div className="space-y-2">
                {data.alerts.map((a, i) => {
                  const tone =
                    a.tone === "success"
                      ? "#2ECC71"
                      : a.tone === "warning"
                      ? "#F59E0B"
                      : "#EF4444";
                  return (
                    <div
                      key={i}
                      className="flex items-center gap-2.5 rounded-lg border border-white/[0.04] bg-[#0B0F17]/50 px-2.5 py-2 text-[11px] text-gray-300"
                    >
                      <span
                        className="h-1.5 w-1.5 shrink-0 rounded-full"
                        style={{ backgroundColor: tone }}
                      />
                      {a.text}
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="rounded-xl border border-white/[0.06] bg-[#131A24] p-3">
              <p className="mb-2 text-xs font-medium text-gray-300">Delivery Load</p>
              <div className="h-20">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={bars.slice(0, 6)}>
                    <Bar dataKey="v" radius={[3, 3, 0, 0]}>
                      {bars.slice(0, 6).map((_, i) => (
                        <Cell
                          key={i}
                          fill={i % 2 === 0 ? "#6D5EF5" : "#9F8BFF"}
                          fillOpacity={0.85}
                        />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
