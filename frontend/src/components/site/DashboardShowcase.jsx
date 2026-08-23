import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MousePointerClick } from "lucide-react";
import { Reveal, SectionLabel } from "@/components/site/primitives";
import RoleWorkspace, { WORKSPACES } from "@/components/site/RoleWorkspace";

export default function DashboardShowcase() {
  const [active, setActive] = useState(0);
  const activeRole = WORKSPACES[active];

  return (
    <section id="showcase" className="overflow-hidden border-y border-white/[0.06] bg-[#0d1119] py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-5 lg:px-8 xl:max-w-7xl 2xl:max-w-[1500px]">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <SectionLabel>Dashboard showcase</SectionLabel>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-4 font-heading text-3xl font-medium tracking-tight text-white sm:text-4xl lg:text-5xl">
              One platform. Every leadership lens.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-5 max-w-xl text-lg text-gray-400">
              Explore how each team experiences Synqora—four role-based workspaces,
              built on the same source of truth.
            </p>
          </Reveal>
        </div>

        {/* Discovery cue */}
        <Reveal delay={0.12}>
          <div className="mt-10 flex items-center justify-center gap-2 text-sm text-[#9F8BFF]">
            <MousePointerClick className="h-4 w-4" />
            <span className="font-medium">Select a role to preview its dashboard</span>
          </div>
        </Reveal>

        {/* Role selector */}
        <Reveal delay={0.15}>
          <div
            role="tablist"
            aria-label="Role-based dashboards"
            className="mt-5 flex flex-wrap items-center justify-center gap-2.5"
          >
            {WORKSPACES.map((r, i) => {
              const isActive = active === i;
              return (
                <button
                  key={r.key}
                  role="tab"
                  aria-selected={isActive}
                  data-testid={`role-tab-${r.key}`}
                  onClick={() => setActive(i)}
                  className={`group flex items-center gap-2.5 rounded-full border px-5 py-2.5 text-sm font-medium transition-all ${
                    isActive
                      ? "border-[#6D5EF5] bg-[#6D5EF5] text-white shadow-[0_10px_30px_-10px_rgba(109,94,245,0.7)]"
                      : "border-white/12 bg-[#131A24] text-gray-300 hover:border-[#6D5EF5]/50 hover:text-white"
                  }`}
                >
                  <r.icon
                    className={`h-4 w-4 ${isActive ? "text-white" : "text-[#9F8BFF]"}`}
                  />
                  {r.label}
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Active role caption */}
        <Reveal delay={0.18}>
          <div className="mt-4 flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.25 }}
                className="flex items-center gap-2 rounded-full border border-white/[0.06] bg-[#131A24] px-4 py-1.5 text-xs text-gray-400"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-[#2ECC71]" />
                <span className="font-medium text-gray-200">{activeRole.label}</span>
                <span className="hidden text-gray-600 sm:inline">·</span>
                <span className="hidden sm:inline">{activeRole.purpose}</span>
              </motion.div>
            </AnimatePresence>
          </div>
        </Reveal>

        <div className="relative mt-8">
          <div className="pointer-events-none absolute -inset-6 -z-10 rounded-3xl bg-[#6D5EF5]/10 blur-3xl" />
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
            >
              <RoleWorkspace role={WORKSPACES[active]} />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
