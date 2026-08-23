import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useDemo } from "@/context/DemoContext";
import { LOGO_URL } from "@/components/site/primitives";

const LINKS = [
  { label: "Platform", href: "#platform" },
  { label: "Solution", href: "#solution"},
  { label: "Dashboards", href: "#showcase" },
  { label: "Why Synqora", href: "#why" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const { openDemo } = useDemo();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      data-testid="navbar"
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/[0.06] sq-glass"
          : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8 2xl:max-w-[1600px]">
        <a
          href="#top"
          data-testid="nav-logo"
          className="flex items-center gap-2.5"
        >
          <img src={LOGO_URL} alt="Synqora" className="h-9 w-9 rounded-lg" />
          <span className="font-heading text-lg font-semibold tracking-tight text-white">
            Synqora
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              data-testid={`nav-link-${l.label.toLowerCase().replace(/\s+/g, "-")}`}
              className="text-sm text-gray-400 transition-colors hover:text-white"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <Button
            data-testid="nav-book-demo-button"
            onClick={openDemo}
            className="rounded-md bg-[#6D5EF5] px-5 text-white hover:bg-[#594CE0]"
          >
            Book Demo
          </Button>
        </div>

        <button
          data-testid="nav-mobile-toggle"
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 text-white md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div
          data-testid="nav-mobile-menu"
          className="border-t border-white/[0.06] sq-glass px-5 py-4 md:hidden"
        >
          <div className="flex flex-col gap-3">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-1 text-sm text-gray-300"
              >
                {l.label}
              </a>
            ))}
            <Button
              data-testid="nav-mobile-book-demo-button"
              onClick={() => {
                setOpen(false);
                openDemo();
              }}
              className="mt-1 h-11 w-full bg-[#6D5EF5] text-white hover:bg-[#594CE0]"
            >
              Book Demo
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
