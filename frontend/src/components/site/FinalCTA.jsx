import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { useDemo } from "@/context/DemoContext";

export default function FinalCTA() {
  const { openDemo, openTour } = useDemo();

  return (
    <section className="px-5 py-16 sm:py-24 lg:px-8 lg:py-32">
      <div className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl border border-white/[0.08] bg-[#0d1119] px-6 py-16 text-center sm:py-20 lg:px-8 2xl:max-w-6xl">
        <div className="pointer-events-none absolute inset-0 sq-grid-lines opacity-40" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-full sq-radial-glow" />
        <div className="pointer-events-none absolute left-1/2 top-0 -z-0 h-72 w-72 -translate-x-1/2 rounded-full bg-[#6D5EF5]/25 blur-[120px]" />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <h2 className="mx-auto max-w-2xl font-heading text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Ready to lead with{" "}
            <span className="sq-text-gradient">complete visibility?</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-gray-400">
            See your business the way leadership should one platform, one source of
            truth, in real time.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button
              data-testid="final-book-demo-button"
              onClick={openDemo}
              className="group h-12 w-full rounded-md bg-[#6D5EF5] px-8 text-base font-medium text-white hover:bg-[#594CE0] sm:w-auto"
            >
              Book Your Demo
              <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              data-testid="final-watch-tour-button"
              onClick={openTour}
              variant="outline"
              className="h-12 w-full rounded-md border-white/15 bg-transparent px-8 text-base font-medium text-white hover:bg-white/5 hover:text-white sm:w-auto"
            >
              <Play className="mr-1.5 h-4 w-4" />
              Watch Product Tour
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
