import React from "react";
import { useDemo } from "@/context/DemoContext";

const implementationItems = [
  "Workflow setup",
  "Personalized forms",
  "Custom fields",
  "Lead configuration",
  "Account configuration",
  "Project configuration",
  "Task configuration",
  "Team onboarding",
  "Initial workspace customization",
];

export default function Pricing() {
  const { openDemo } = useDemo();

  return (
    <section
      id="pricing"
      className="border-t border-white/10 bg-[#0B0F17] px-6 py-24 text-white md:px-10 lg:px-16"
    >
      <div className="mx-auto max-w-6xl">

        {/* Section Header */}
        <div className="mb-12 text-center">
          <div className="inline-flex items-center rounded-full border border-violet-400/20 bg-violet-500/10 px-4 py-2">
            <span className="text-xs font-semibold tracking-[0.16em] text-violet-300">
              FOUNDING PILOT PROGRAM
            </span>
          </div>
          <h2 className="mt-5 text-3xl font-semibold tracking-tight text-white md:text-5xl">
            Built around your workflow.
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-400 md:text-lg">
            A structured implementation and simple platform subscription
            designed for early Synqora partners.
          </p>
        </div>

        {/* Pricing Container */}
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#111722] shadow-2xl shadow-black/20">
          <div className="grid lg:grid-cols-2">

            {/* LEFT - Implementation & Onboarding */}
            <div className="border-b border-white/10 p-7 md:p-10 lg:border-b-0 lg:border-r lg:border-white/10">
              <p className="text-xs font-semibold tracking-[0.16em] text-violet-300">
                IMPLEMENTATION & ONBOARDING
              </p>

              <div className="mt-6">
                <div className="flex items-end gap-3">
                  <span className="text-4xl font-semibold tracking-tight text-white md:text-5xl">
                    $2,000–$3,000
                  </span>
                </div>

                <p className="mt-2 text-sm text-slate-400">
                  One-time implementation fee
                </p>
              </div>

              <p className="mt-7 max-w-lg text-base leading-relaxed text-slate-300">
                A structured implementation process to configure Synqora
                around your team's existing workflows.
              </p>

              {/* Included Items */}
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {implementationItems.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 text-sm text-slate-300"
                  >
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-violet-400/30 bg-violet-500/10 text-xs text-violet-300">
                      ✓
                    </span>

                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-10 border-t border-white/10 pt-5">
                <p className="text-xs leading-relaxed text-slate-500">
                  Final implementation fee depends on workflow complexity and
                  configuration requirements.
                </p>
              </div>
            </div>

            {/* RIGHT - Platform Subscription */}
            <div className="flex flex-col p-7 md:p-10">
              <p className="text-xs font-semibold tracking-[0.16em] text-violet-300">
                PLATFORM SUBSCRIPTION
              </p>

              <div className="mt-6">
                <div className="flex items-end gap-3">
                  <span className="text-4xl font-semibold tracking-tight text-white md:text-5xl">
                    $5
                  </span>
                </div>

                <p className="mt-2 text-sm text-slate-400">
                  per active user / month
                </p>
              </div>

              <p className="mt-7 max-w-md text-base leading-relaxed text-slate-300">
                Pay only for team members actively using the Synqora platform.
              </p>

              {/* Active User Explanation */}
              <div className="mt-10 rounded-xl border border-white/10 bg-white/[0.02] p-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  What is an active user?
                </p>

                <p className="mt-3 text-sm leading-relaxed text-slate-400">
                  An active user is a team member who actively accesses or uses
                  Synqora during the monthly billing period.
                </p>
              </div>

              {/* Subscription Benefits */}
              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-3 text-sm text-slate-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-violet-400" />
                  Pay based on active platform usage
                </div>

                <div className="flex items-center gap-3 text-sm text-slate-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-violet-400" />
                  Simple per-user monthly pricing
                </div>

                <div className="flex items-center gap-3 text-sm text-slate-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-violet-400" />
                  Designed for growing teams
                </div>
              </div>

              <div className="mt-auto pt-10">
                <div className="h-px w-full bg-white/10" />
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <button
            type="button"
            onClick={openDemo}
            className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 px-7 py-3.5 text-sm font-medium text-white shadow-lg shadow-violet-900/20 transition hover:scale-[1.02] hover:from-violet-500 hover:to-indigo-500"
          >
            Apply for Founding Pilot
          </button>

          <p className="mt-4 text-sm text-slate-500">
            Founding customer pricing is available for a limited number of
            early partners.
          </p>
        </div>
      </div>
    </section>
  );
}