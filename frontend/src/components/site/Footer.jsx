import { Button } from "@/components/ui/button";
import { useDemo } from "@/context/DemoContext";
import { LOGO_URL } from "@/components/site/primitives";

const COLS = [
  {
    title: "Platform",
    links: ["Command Center", "Sales Performance", "Delivery", "Analytics"],
  },
  {
    title: "Resources",
    links: ["Product Tour", "FAQ", "Contact", "Status"],
  },
];

export default function Footer() {
  const { openDemo } = useDemo();

  return (
    <footer className="border-t border-white/[0.08] bg-[#0B0F17]">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 2xl:max-w-[1600px]">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-5">
          <div className="col-span-2">
            <div className="flex items-center gap-2.5">
              <img src={LOGO_URL} alt="Synqora" className="h-9 w-9 rounded-lg" />
              <span className="font-heading text-lg font-semibold text-white">
                Synqora
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-gray-500">
              The Leadership Operating System. Complete visibility across sales,
              delivery, teams and business health.
            </p>
            <Button
              data-testid="footer-book-demo-button"
              onClick={openDemo}
              className="mt-6 bg-[#6D5EF5] text-white hover:bg-[#594CE0]"
            >
              Book Demo
            </Button>
          </div>

          {COLS.map((c) => (
            <div key={c.title}>
              <p className="font-heading text-sm font-semibold text-white">
                {c.title}
              </p>
              <ul className="mt-4 space-y-3">
                {c.links.map((l) => (
                  <li key={l}>
                    <a
                      href="#top"
                      className="text-sm text-gray-500 transition-colors hover:text-gray-300"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/[0.06] pt-8 sm:flex-row">
          <p className="text-xs text-gray-600">
            © {new Date().getFullYear()} Synqora. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-xs text-gray-600">
            <a href="#top" className="hover:text-gray-400">Privacy</a>
            <a href="#top" className="hover:text-gray-400">Terms</a>
            <a href="#top" className="hover:text-gray-400">Security</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
