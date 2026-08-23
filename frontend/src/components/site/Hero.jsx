import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, TrendingUp, Activity, Sparkles } from "lucide-react";
import { useDemo } from "@/context/DemoContext";
import DashboardMockup from "@/components/site/DashboardMockup";
import { SectionLabel } from "@/components/site/primitives";

const FloatingCard = ({ className, children, delay = 0, float = "sq-float" }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.8, delay }}
    className={`absolute z-20 hidden rounded-2xl border border-white/10 bg-[#131A24]/90 p-3.5 shadow-2xl backdrop-blur-md lg:block ${float} ${className}`}
  >
    {children}
  </motion.div>
);

export default function Hero() {
  const { openDemo, openTour } = useDemo();

  return (
    <section id="top" className="relative overflow-hidden pt-36 pb-20 lg:pt-44">
      {/* Backdrop */}
      <div className="pointer-events-none absolute inset-0 sq-grid-lines opacity-[0.5]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[720px] sq-radial-glow" />
      <div className="pointer-events-none absolute inset-0 sq-grain" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8 2xl:max-w-[1600px]">
        <div className="mx-auto max-w-5xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5"
          >
            <Sparkles className="h-3.5 w-3.5 text-[#9F8BFF]" />
            <span className="text-xs font-medium tracking-wide text-gray-300">
              One Platform. Complete Business Visibility.
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="font-heading text-4xl font-semibold leading-[1.05] tracking-tighter text-white sm:text-5xl lg:text-6xl"
          >
            Run your business with
            <br className="hidden sm:block" />{" "}
            <span className="sq-text-gradient">complete leadership visibility.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-400"
          >
            Stop switching between spreadsheets, CRMs and project tools. Synqora gives leadership one place to monitor revenue, delivery, execution and business health in real time.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <Button
              data-testid="hero-book-demo-button"
              onClick={openDemo}
              className="group h-12 w-full rounded-md bg-[#6D5EF5] px-7 text-base font-medium text-white hover:bg-[#594CE0] sm:w-auto"
            >
              Book Demo
              <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              data-testid="hero-watch-tour-button"
              onClick={openTour}
              variant="outline"
              className="h-12 w-full rounded-md border-white/15 bg-transparent px-7 text-base font-medium text-white hover:bg-white/5 hover:text-white sm:w-auto"
            >
              <Play className="mr-1.5 h-4 w-4" />
              Watch Product Tour
            </Button>
          </motion.div>
        </div>

        {/* Dashboard */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35 }}
          className="relative mx-auto mt-16 max-w-6xl xl:max-w-7xl"
        >
          <FloatingCard className="-left-6 top-4 xl:-left-14" delay={0.7}>
            <div className="flex items-center gap-3">
              <div className="grid h-9 w-9 place-items-center rounded-lg bg-[#2ECC71]/15">
                <TrendingUp className="h-4 w-4 text-[#2ECC71]" />
              </div>
              <div>
                <p className="text-[11px] text-gray-400">Revenue</p>
                <p className="font-heading text-sm font-semibold text-white">
                  $4.82M{" "}
                  <span className="text-[11px] font-medium text-[#2ECC71]">+18.4%</span>
                </p>
              </div>
            </div>
          </FloatingCard>

          <FloatingCard
            className="-right-6 top-40 xl:-right-12"
            delay={0.85}
            float="sq-float-delayed"
          >
            <div className="flex items-center gap-3">
              <div className="grid h-9 w-9 place-items-center rounded-lg bg-[#6D5EF5]/20">
                <Activity className="h-4 w-4 text-[#9F8BFF]" />
              </div>
              <div>
                <p className="text-[11px] text-gray-400">Business Health</p>
                <p className="font-heading text-sm font-semibold text-white">
                  92 / 100
                </p>
              </div>
            </div>
          </FloatingCard>

          <DashboardMockup />
        </motion.div>
      </div>
    </section>
  );
}
