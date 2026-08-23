import {
  LayoutGrid,
  Building2,
  Users,
  Handshake,
  FolderKanban,
  LineChart,
  ListChecks,
  Contact,
  TrendingUp,
  Target,
  FileText,
  CalendarDays,
  Flag,
  Bell,
  Search,
  Clock,
  MessageSquare,
  ShieldAlert,
  ArrowUpRight,
  Plus,
  UserPlus,
  Phone,
  CheckCircle2,
  ShieldCheck,
  FlaskConical,
} from "lucide-react";

/* ---------------- shared atoms ---------------- */
const tone = (t) =>
  t === "success"
    ? "#2ECC71"
    : t === "warning"
    ? "#F59E0B"
    : t === "error"
    ? "#EF4444"
    : t === "primary"
    ? "#6D5EF5"
    : "#9F8BFF";

const Stat = ({ label, value, meta, t = "success" }) => (
  <div className="rounded-xl border border-white/[0.06] bg-[#131A24] p-3">
    <p className="text-[11px] text-gray-400">{label}</p>
    <p className="mt-1 font-heading text-lg font-semibold text-white">{value}</p>
    {meta && (
      <p className="mt-0.5 text-[11px] font-medium" style={{ color: tone(t) }}>
        {meta}
      </p>
    )}
  </div>
);

const Panel = ({ title, right, children, className = "" }) => (
  <div
    className={`rounded-xl border border-white/[0.06] bg-[#131A24] p-3 ${className}`}
  >
    <div className="mb-2.5 flex items-center justify-between">
      <p className="text-xs font-medium text-gray-300">{title}</p>
      {right}
    </div>
    {children}
  </div>
);

const StatusPill = ({ label, t }) => (
  <span
    className="shrink-0 rounded-full px-2 py-0.5 text-[10px] font-medium"
    style={{ backgroundColor: `${tone(t)}1f`, color: tone(t) }}
  >
    {label}
  </span>
);

const Bar = ({ value, t }) => (
  <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/[0.06]">
    <div
      className="h-full rounded-full"
      style={{ width: `${value}%`, backgroundColor: tone(t) }}
    />
  </div>
);

const UnitRow = ({ name, value, t, deals, projects }) => (
  <div className="rounded-lg border border-white/[0.04] bg-[#0B0F17]/50 px-2.5 py-2">
    <div className="flex items-center justify-between gap-2">
      <p className="truncate text-xs font-medium text-white">{name}</p>
      <span className="shrink-0 text-[11px] font-semibold" style={{ color: tone(t) }}>
        {value}%
      </span>
    </div>
    <div className="mt-1.5">
      <Bar value={value} t={t} />
    </div>
    {(deals || projects) && (
      <div className="mt-1.5 flex items-center gap-3 text-[10px] text-gray-500">
        {deals && <span>{deals}</span>}
        {projects && <span>{projects}</span>}
      </div>
    )}
  </div>
);

const Priority = ({ tag, tagTone, title, meta }) => (
  <div
    className="rounded-lg border-l-2 bg-[#0B0F17]/50 px-3 py-2.5"
    style={{ borderColor: tone(tagTone) }}
  >
    <span
      className="rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide"
      style={{ backgroundColor: `${tone(tagTone)}1f`, color: tone(tagTone) }}
    >
      {tag}
    </span>
    <p className="mt-1.5 text-xs font-medium leading-snug text-white">{title}</p>
    <p className="mt-0.5 text-[11px] text-gray-500">{meta}</p>
  </div>
);

const AlertRow = ({ text, t }) => (
  <div className="flex items-center gap-2.5 rounded-lg border border-white/[0.04] bg-[#0B0F17]/50 px-2.5 py-2 text-[11px] text-gray-300">
    <span
      className="h-1.5 w-1.5 shrink-0 rounded-full"
      style={{ backgroundColor: tone(t) }}
    />
    {text}
  </div>
);

const Activity = ({ initials, text, time, t = "accent" }) => (
  <div className="flex items-start gap-2.5">
    <span
      className="grid h-6 w-6 shrink-0 place-items-center rounded-full text-[9px] font-semibold"
      style={{ backgroundColor: `${tone(t)}22`, color: tone(t) }}
    >
      {initials}
    </span>
    <div className="min-w-0 flex-1">
      <p className="truncate text-[11px] text-gray-200">{text}</p>
      <p className="text-[10px] text-gray-500">{time}</p>
    </div>
  </div>
);

const TaskRow = ({ name, value, t, due }) => (
  <div className="rounded-lg border border-white/[0.04] bg-[#0B0F17]/50 px-2.5 py-2">
    <div className="flex items-center justify-between gap-2">
      <p className="truncate text-xs text-gray-200">{name}</p>
      {due && <span className="shrink-0 text-[10px] text-gray-500">{due}</span>}
    </div>
    <div className="mt-1.5">
      <Bar value={value} t={t} />
    </div>
  </div>
);

const ListRow = ({ icon: Icon, primary, secondary, right, rightTone }) => (
  <div className="flex items-center gap-2.5 rounded-lg border border-white/[0.04] bg-[#0B0F17]/50 px-2.5 py-2">
    {Icon && (
      <span className="grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-[#6D5EF5]/12 text-[#9F8BFF]">
        <Icon className="h-3.5 w-3.5" />
      </span>
    )}
    <div className="min-w-0 flex-1">
      <p className="truncate text-[11px] font-medium text-gray-200">{primary}</p>
      {secondary && <p className="truncate text-[10px] text-gray-500">{secondary}</p>}
    </div>
    {right &&
      (rightTone ? (
        <StatusPill label={right} t={rightTone} />
      ) : (
        <span className="shrink-0 text-[10px] text-gray-500">{right}</span>
      ))}
  </div>
);

const Action = ({ icon: Icon, children }) => (
  <span className="flex items-center gap-2 rounded-lg border border-white/[0.06] bg-[#0B0F17] px-3 py-2 text-[11px] text-gray-200 transition-colors hover:border-[#6D5EF5]/40 hover:text-white">
    <Icon className="h-3.5 w-3.5 text-[#9F8BFF]" />
    {children}
  </span>
);

/* ---------------- role config ---------------- */
export const WORKSPACES = [
  {
    key: "super-admin",
    label: "Super Admin",
    icon: ShieldCheck,
    purpose: "Complete organizational visibility",
    url: "app.synqora.com/command-center",
    subtitle: "Leadership Command Center",
    title: "What needs attention today",
    nav: [
      { icon: LayoutGrid, label: "Command Center", active: true },
      { icon: Building2, label: "Business Units" },
      { icon: Users, label: "Accounts" },
      { icon: Handshake, label: "Deals" },
      { icon: FolderKanban, label: "Projects" },
      { icon: LineChart, label: "Analytics" },
    ],
  },
  {
    key: "bu-head",
    label: "Business Unit Head",
    icon: Building2,
    purpose: "Operational view of one business unit",
    url: "app.synqora.com/digital-workplace",
    subtitle: "Business Unit Workspace",
    title: "Digital Workplace & Collaboration",
    nav: [
      { icon: LayoutGrid, label: "Overview", active: true },
      { icon: Building2, label: "Sub Units" },
      { icon: Users, label: "Accounts" },
      { icon: Handshake, label: "Deals" },
      { icon: FolderKanban, label: "Projects" },
      { icon: ListChecks, label: "Tasks" },
    ],
  },
  {
    key: "sales",
    label: "Sales",
    icon: TrendingUp,
    purpose: "Daily sales execution",
    url: "app.synqora.com/sales",
    subtitle: "Sales Workspace",
    title: "Your day at a glance",
    nav: [
      { icon: Target, label: "Leads", active: true },
      { icon: Users, label: "Accounts" },
      { icon: Contact, label: "Contacts" },
      { icon: Handshake, label: "Deals" },
      { icon: TrendingUp, label: "Pipeline" },
      { icon: ListChecks, label: "Tasks" },
    ],
  },
  {
    key: "research",
    label: "Research",
    icon: FlaskConical,
    purpose: "Daily project execution",
    url: "app.synqora.com/research",
    subtitle: "Research Workspace",
    title: "Your projects today",
    nav: [
      { icon: FolderKanban, label: "Projects", active: true },
      { icon: ListChecks, label: "Tasks" },
      { icon: CalendarDays, label: "Timeline" },
      { icon: Flag, label: "Deliverables" },
      { icon: FileText, label: "Documents" },
    ],
  },
];

/* ---------------- role bodies ---------------- */
function SuperAdminBody() {
  return (
    <div className="space-y-3">
      <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
        <Stat label="Business Units" value="6" meta="+1 this quarter" t="accent" />
        <Stat label="Open Deals" value="$11.4M" meta="42 active" t="success" />
        <Stat label="Projects at Risk" value="4" meta="needs review" t="warning" />
        <Stat label="Critical Alerts" value="3" meta="2 high priority" t="error" />
      </div>

      <div className="grid grid-cols-1 gap-3 lg:grid-cols-3">
        <Panel title="What needs attention today" className="lg:col-span-2">
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
            <Priority
              tag="Delivery"
              tagTone="error"
              title="Project Atlas margin dropped to 12%"
              meta="Digital Workplace · decision needed"
            />
            <Priority
              tag="Sales"
              tagTone="warning"
              title="West region 14% behind quota"
              meta="Advisory · reassign pipeline"
            />
            <Priority
              tag="Approval"
              tagTone="primary"
              title="2 enterprise deals await sign-off"
              meta="$1.8M combined · due today"
            />
          </div>
        </Panel>
        <Panel title="Critical Alerts">
          <div className="space-y-2">
            <AlertRow text="SLA breach risk · Client Halden" t="error" />
            <AlertRow text="Research unit margin compressing" t="warning" />
            <AlertRow text="Q3 forecast +12% above plan" t="success" />
          </div>
        </Panel>
      </div>

      <div className="grid grid-cols-1 gap-3 lg:grid-cols-3">
        <Panel
          title="Business Units Overview"
          right={<span className="text-[10px] text-gray-500">health · status</span>}
          className="lg:col-span-2"
        >
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
            <UnitRow name="Digital Workplace & Collab." value={88} t="success" deals="12 deals" projects="9 projects" />
            <UnitRow name="Advisory" value={91} t="success" deals="18 deals" projects="7 projects" />
            <UnitRow name="Research" value={74} t="warning" deals="6 deals" projects="11 projects" />
            <UnitRow name="Implementation" value={66} t="warning" deals="6 deals" projects="10 projects" />
          </div>
        </Panel>
        <Panel title="Recent Activities">
          <div className="space-y-2.5">
            <Activity initials="AK" text="Aisha closed a deal · $420K" time="12m ago" t="success" />
            <Activity initials="TM" text="New project created · Meridian" time="1h ago" t="primary" />
            <Activity initials="JD" text="Task flagged overdue · Atlas" time="2h ago" t="error" />
            <Activity initials="RS" text="BU report approved · Advisory" time="3h ago" t="accent" />
          </div>
        </Panel>
      </div>

      <div className="grid grid-cols-1 gap-3 lg:grid-cols-3">
        <Panel title="Operational Status" className="lg:col-span-2">
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
            <div className="rounded-lg border border-white/[0.04] bg-[#0B0F17]/50 px-2.5 py-2">
              <p className="text-[10px] text-gray-500">Accounts</p>
              <p className="font-heading text-sm font-semibold text-white">128</p>
            </div>
            <div className="rounded-lg border border-white/[0.04] bg-[#0B0F17]/50 px-2.5 py-2">
              <p className="text-[10px] text-gray-500">Open Deals</p>
              <p className="font-heading text-sm font-semibold text-white">42</p>
            </div>
            <div className="rounded-lg border border-white/[0.04] bg-[#0B0F17]/50 px-2.5 py-2">
              <p className="text-[10px] text-gray-500">Projects</p>
              <p className="font-heading text-sm font-semibold text-white">
                37 <span className="text-[10px] font-medium text-[#F59E0B]">· 4 risk</span>
              </p>
            </div>
            <div className="rounded-lg border border-white/[0.04] bg-[#0B0F17]/50 px-2.5 py-2">
              <p className="text-[10px] text-gray-500">Tasks</p>
              <p className="font-heading text-sm font-semibold text-white">
                312 <span className="text-[10px] font-medium text-[#2ECC71]">· 89% on-time</span>
              </p>
            </div>
          </div>
        </Panel>
        <Panel title="Quick Actions">
          <div className="flex flex-wrap gap-2">
            <Action icon={CheckCircle2}>Approve deals</Action>
            <Action icon={ShieldAlert}>Review risks</Action>
            <Action icon={Building2}>Add unit</Action>
          </div>
        </Panel>
      </div>
    </div>
  );
}

function BUHeadBody() {
  return (
    <div className="space-y-3">
      <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
        <Stat label="Business Unit Health" value="88" meta="+4 pts" t="success" />
        <Stat label="Accounts" value="24" meta="+2 new" t="accent" />
        <Stat label="Open Deals" value="$3.2M" meta="12 active" t="success" />
        <Stat label="Projects" value="9" meta="2 at risk" t="warning" />
      </div>

      <div className="grid grid-cols-1 gap-3 lg:grid-cols-3">
        <Panel
          title="Sub Business Units"
          right={<span className="text-[10px] text-gray-500">3 units</span>}
          className="lg:col-span-2"
        >
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
            <UnitRow name="XYZ" value={92} t="success" deals="5 deals" projects="3 projects" />
            <UnitRow name="ABC" value={78} t="warning" deals="4 deals" projects="4 projects" />
            <UnitRow name="MNO" value={69} t="warning" deals="3 deals" projects="2 projects" />
          </div>
        </Panel>
        <Panel title="Operational Alerts">
          <div className="space-y-2">
            <AlertRow text="ABC deliverable due in 2 days" t="warning" />
            <AlertRow text="MNO project over budget" t="error" />
            <AlertRow text="XYZ hit quarterly target" t="success" />
          </div>
        </Panel>
      </div>

      <div className="grid grid-cols-1 gap-3 lg:grid-cols-3">
        <Panel
          title="Projects & Tasks"
          right={<StatusPill label="On track" t="success" />}
          className="lg:col-span-2"
        >
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
            <TaskRow name="Client onboarding · XYZ" value={80} t="success" due="Due Fri" />
            <TaskRow name="Platform rollout · ABC" value={55} t="warning" due="Due Mon" />
            <TaskRow name="Migration · MNO" value={38} t="error" due="Overdue" />
            <TaskRow name="QBR prep · XYZ" value={65} t="primary" due="Due Wed" />
          </div>
        </Panel>
        <Panel title="Recent Activities">
          <div className="space-y-2.5">
            <Activity initials="PM" text="Priya updated ABC status" time="20m ago" t="primary" />
            <Activity initials="SK" text="Deal moved to negotiation" time="1h ago" t="success" />
            <Activity initials="NR" text="MNO task reassigned" time="2h ago" t="accent" />
          </div>
        </Panel>
      </div>

      <Panel title="Recommended Actions">
        <div className="flex flex-wrap gap-2">
          <Action icon={ShieldAlert}>Address MNO budget</Action>
          <Action icon={Handshake}>Follow up 3 deals</Action>
          <Action icon={ListChecks}>Clear overdue task</Action>
        </div>
      </Panel>
    </div>
  );
}

function SalesBody() {
  return (
    <div className="space-y-3">
      <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
        <Stat label="Today's Leads" value="14" meta="6 hot" t="error" />
        <Stat label="Accounts" value="86" meta="+3 new" t="accent" />
        <Stat label="Contacts" value="212" meta="active" t="primary" />
        <Stat label="Open Deals" value="$4.1M" meta="18 active" t="success" />
      </div>

      <div className="grid grid-cols-1 gap-3 lg:grid-cols-3">
        <Panel
          title="Sales Pipeline"
          right={<span className="text-[10px] text-gray-500">by stage</span>}
          className="lg:col-span-2"
        >
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
            <UnitRow name="Discovery" value={70} t="accent" deals="$1.2M" projects="9 deals" />
            <UnitRow name="Proposal" value={55} t="primary" deals="$1.4M" projects="7 deals" />
            <UnitRow name="Negotiation" value={40} t="warning" deals="$0.9M" projects="4 deals" />
            <UnitRow name="Closing" value={28} t="success" deals="$0.6M" projects="3 deals" />
          </div>
        </Panel>
        <Panel title="Upcoming Follow-ups">
          <div className="space-y-2">
            <ListRow icon={Phone} primary="Call · Halden Group" secondary="Renewal discussion" right="10:30" />
            <ListRow icon={Phone} primary="Demo · Meridian" secondary="Technical review" right="1:00" />
            <ListRow icon={Phone} primary="Check-in · Corvus" secondary="Proposal sent" right="4:15" />
          </div>
        </Panel>
      </div>

      <div className="grid grid-cols-1 gap-3 lg:grid-cols-3">
        <Panel title="My Tasks" className="lg:col-span-2">
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
            <ListRow icon={ListChecks} primary="Send proposal · Verado" right="High" rightTone="error" />
            <ListRow icon={ListChecks} primary="Update CRM notes" right="Today" rightTone="warning" />
            <ListRow icon={ListChecks} primary="Prep QBR deck" right="Med" rightTone="primary" />
            <ListRow icon={ListChecks} primary="Log meeting outcomes" right="Done" rightTone="success" />
          </div>
        </Panel>
        <Panel title="Performance Summary">
          <div className="space-y-2.5">
            <div>
              <div className="mb-1 flex justify-between text-[11px]"><span className="text-gray-300">Win Rate</span><span className="font-semibold text-[#2ECC71]">34%</span></div>
              <Bar value={34} t="success" />
            </div>
            <div>
              <div className="mb-1 flex justify-between text-[11px]"><span className="text-gray-300">Quota Attained</span><span className="font-semibold text-[#9F8BFF]">78%</span></div>
              <Bar value={78} t="accent" />
            </div>
            <div>
              <div className="mb-1 flex justify-between text-[11px]"><span className="text-gray-300">MTD Bookings</span><span className="font-semibold text-white">$820K</span></div>
              <Bar value={64} t="primary" />
            </div>
          </div>
        </Panel>
      </div>

      <div className="grid grid-cols-1 gap-3 lg:grid-cols-3">
        <Panel title="Recent Meetings" className="lg:col-span-2">
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
            <ListRow icon={CalendarDays} primary="Halden Group · Renewal" secondary="Yesterday · 45m" right="Notes" />
            <ListRow icon={CalendarDays} primary="Verado · Discovery" secondary="Yesterday · 30m" right="Notes" />
          </div>
        </Panel>
        <Panel title="Activities">
          <div className="space-y-2.5">
            <Activity initials="You" text="Moved Corvus to Proposal" time="30m ago" t="primary" />
            <Activity initials="You" text="Added 4 new leads" time="2h ago" t="success" />
          </div>
        </Panel>
      </div>
    </div>
  );
}

function ResearchBody() {
  return (
    <div className="space-y-3">
      <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
        <Stat label="Assigned Projects" value="7" meta="2 active now" t="primary" />
        <Stat label="Assigned Tasks" value="23" meta="5 due today" t="warning" />
        <Stat label="Deliverables Due" value="4" meta="this week" t="error" />
        <Stat label="Documents" value="18" meta="+3 recent" t="accent" />
      </div>

      <div className="grid grid-cols-1 gap-3 lg:grid-cols-3">
        <Panel
          title="Project Timeline"
          right={<span className="text-[10px] text-gray-500">phase · progress</span>}
          className="lg:col-span-2"
        >
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
            <TaskRow name="Market Study · Alpha" value={72} t="success" due="Analysis" />
            <TaskRow name="Sector Report · Beta" value={45} t="warning" due="Drafting" />
            <TaskRow name="Data Model · Gamma" value={30} t="primary" due="Research" />
            <TaskRow name="Whitepaper · Delta" value={88} t="success" due="Review" />
          </div>
        </Panel>
        <Panel title="Upcoming Deliverables">
          <div className="space-y-2">
            <ListRow icon={Flag} primary="Alpha findings deck" secondary="Wed" right="Due" rightTone="warning" />
            <ListRow icon={Flag} primary="Beta draft v2" secondary="Thu" right="Due" rightTone="warning" />
            <ListRow icon={Flag} primary="Delta final" secondary="Fri" right="Review" rightTone="primary" />
          </div>
        </Panel>
      </div>

      <div className="grid grid-cols-1 gap-3 lg:grid-cols-3">
        <Panel title="Task Progress" className="lg:col-span-2">
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
            <TaskRow name="Interview synthesis" value={80} t="success" due="On track" />
            <TaskRow name="Competitive scan" value={55} t="warning" due="Due Thu" />
            <TaskRow name="Survey analysis" value={40} t="primary" due="In progress" />
            <TaskRow name="Source validation" value={25} t="error" due="Blocked" />
          </div>
        </Panel>
        <Panel title="Recent Documents">
          <div className="space-y-2">
            <ListRow icon={FileText} primary="Alpha_market_v3.pdf" secondary="Edited 20m ago" />
            <ListRow icon={FileText} primary="Beta_interviews.docx" secondary="Edited 1h ago" />
            <ListRow icon={FileText} primary="Gamma_dataset.xlsx" secondary="Edited 3h ago" />
          </div>
        </Panel>
      </div>

      <div className="grid grid-cols-1 gap-3 lg:grid-cols-3">
        <Panel title="Project Activities" className="lg:col-span-2">
          <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
            <Activity initials="You" text="Completed Alpha analysis phase" time="25m ago" t="success" />
            <Activity initials="LM" text="Lead assigned you Delta review" time="1h ago" t="primary" />
            <Activity initials="You" text="Uploaded Beta interview notes" time="2h ago" t="accent" />
            <Activity initials="RS" text="Requested edits on Gamma model" time="4h ago" t="warning" />
          </div>
        </Panel>
        <Panel title="Comments">
          <div className="space-y-2">
            <ListRow icon={MessageSquare} primary="Refine methodology section" secondary="on Alpha · from Lead" />
            <ListRow icon={MessageSquare} primary="Add 2023 comparison" secondary="on Beta · from Reviewer" />
          </div>
        </Panel>
      </div>
    </div>
  );
}

const BODIES = {
  "super-admin": SuperAdminBody,
  "bu-head": BUHeadBody,
  sales: SalesBody,
  research: ResearchBody,
};

/* ---------------- workspace shell (same visual language) ---------------- */
export default function RoleWorkspace({ role }) {
  const Body = BODIES[role.key];
  return (
    <div
      data-testid={`role-workspace-${role.key}`}
      className="w-full overflow-hidden rounded-2xl border border-white/10 bg-[#0d131c] shadow-[0_40px_120px_-40px_rgba(109,94,245,0.55)]"
    >
      {/* Window chrome */}
      <div className="flex items-center gap-2 border-b border-white/[0.06] bg-[#0B0F17] px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-[#EF4444]/70" />
        <span className="h-3 w-3 rounded-full bg-[#F59E0B]/70" />
        <span className="h-3 w-3 rounded-full bg-[#2ECC71]/70" />
        <div className="mx-auto flex items-center gap-2 rounded-md border border-white/[0.06] bg-[#131A24] px-3 py-1 text-[11px] text-gray-400">
          <LayoutGrid className="h-3 w-3 text-[#9F8BFF]" />
          {role.url}
        </div>
      </div>

      <div className="flex">
        {/* Sidebar */}
        <div className="hidden w-48 shrink-0 flex-col gap-1 border-r border-white/[0.06] bg-[#0B0F17]/50 p-3 sm:flex">
          <div className="mb-3 flex items-center gap-2 px-2">
            <div className="grid h-7 w-7 place-items-center rounded-lg bg-gradient-to-br from-[#6D5EF5] to-[#9F8BFF] font-heading text-[13px] font-bold text-white">
              S
            </div>
            <span className="font-heading text-sm font-semibold text-white">Synqora</span>
          </div>
          {role.nav.map((n) => (
            <div
              key={n.label}
              className={`flex items-center gap-2.5 rounded-lg px-2.5 py-2 text-[12px] transition-colors ${
                n.active ? "bg-[#6D5EF5]/15 text-white" : "text-gray-400"
              }`}
            >
              <n.icon className={`h-3.5 w-3.5 ${n.active ? "text-[#9F8BFF]" : ""}`} />
              {n.label}
            </div>
          ))}
          <div className="mt-auto rounded-lg border border-white/[0.06] bg-[#131A24] px-2.5 py-2 text-[10px] text-gray-500">
            {role.label} workspace
          </div>
        </div>

        {/* Main */}
        <div className="min-w-0 flex-1 p-4 sm:p-5">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <p className="text-[11px] uppercase tracking-[0.18em] text-[#9F8BFF]">
                {role.subtitle}
              </p>
              <h4 className="font-heading text-base font-semibold text-white sm:text-lg">
                {role.title}
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

          <Body />
        </div>
      </div>
    </div>
  );
}
