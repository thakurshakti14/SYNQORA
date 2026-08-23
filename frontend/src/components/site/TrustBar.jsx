import { Triangle, Hexagon, Command, Layers, Circle, Diamond } from "lucide-react";

const SEGMENTS = [
  "Research Firms",
  "Consulting Companies",
  "Knowledge Services",
  "Professional Services",
];

const LOGOS = [
  { icon: Triangle, name: "Northpeak" },
  { icon: Hexagon, name: "Verado" },
  { icon: Command, name: "Lumen & Co" },
  { icon: Layers, name: "Strathmore" },
  { icon: Circle, name: "Corvus" },
  { icon: Diamond, name: "Halden" },
];

export default function TrustBar() {
  return (
    <section className="border-y border-white/[0.06] bg-[#0B0F17] py-12">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <p className="text-center text-xs font-medium uppercase tracking-[0.22em] text-gray-500">
          Designed for{" "}
          <span className="text-gray-300">{SEGMENTS.join(" · ")}</span>
        </p>

        <div className="relative mt-8 overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[#0B0F17] to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[#0B0F17] to-transparent" />
          <div className="flex w-max sq-marquee items-center gap-14">
            {[...LOGOS, ...LOGOS].map((l, i) => (
              <div
                key={i}
                className="flex items-center gap-2.5 text-gray-500 transition-colors hover:text-gray-300"
              >
                <l.icon className="h-5 w-5" />
                <span className="font-heading text-lg font-semibold tracking-tight">
                  {l.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
