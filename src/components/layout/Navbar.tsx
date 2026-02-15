import { useCallback, useEffect, useState } from "react";
import { LayersPlus, Menu, X } from "lucide-react";
import { siteContent, type Locale } from "@/content/siteContent";
import { cn } from "@/lib/cn";

const SECTIONS = ["features", "products", "philosophy", "about", "contact"] as const;

export function Navbar({ locale }: { locale: Locale }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const t = siteContent[locale].brand;

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);

      const offsets = SECTIONS.map((id) => {
        const el = document.getElementById(id);
        if (!el) return { id, top: Infinity };
        return { id, top: el.getBoundingClientRect().top };
      });

      const current = offsets
        .filter((o) => o.top <= 120)
        .sort((a, b) => b.top - a.top)[0];

      setActive(current?.id ?? "");
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = useCallback(
    (id: string) => {
      setOpen(false);
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    },
    []
  );

  const navItems = SECTIONS.map((id) => ({
    id,
    label: t.nav[id],
  }));

  return (
    <header className={cn("top-nav fixed top-0 left-0 right-0 z-50", scrolled && "scrolled")}>
      <div className="site-container h-16 flex items-center justify-between gap-4">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="flex items-center gap-2"
        >
          <span className="w-8 h-8 rounded-lg bg-[var(--brand-cyan)] text-white inline-flex items-center justify-center">
            <LayersPlus className="w-4 h-4" />
          </span>
          <div className="leading-none">
            <p className={cn("text-lg font-semibold", scrolled ? "text-slate-900" : "text-white")}>
              {t.name}
            </p>
            <p className={cn("text-[11px]", scrolled ? "text-slate-500" : "text-white/70")}>
              {t.subName}
            </p>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-1 ml-auto">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={cn(
                "text-sm font-semibold px-3 py-1.5 rounded-full transition-colors",
                active === item.id
                  ? scrolled
                    ? "text-[var(--brand-cyan)] bg-[var(--tone-teal-bg)]"
                    : "text-white bg-white/20"
                  : scrolled
                    ? "text-slate-600 hover:text-slate-900"
                    : "text-white/80 hover:text-white"
              )}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <button
          className={cn(
            "lg:hidden p-2 rounded-lg border",
            scrolled ? "border-slate-300 bg-white text-slate-700" : "border-white/40 bg-white/10 text-white"
          )}
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle mobile menu"
        >
          {open ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-slate-200 bg-white/95 backdrop-blur-md">
          <div className="site-container py-3 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={cn(
                  "block w-full text-left rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                  active === item.id
                    ? "bg-[var(--tone-teal-bg)] text-[var(--brand-cyan)]"
                    : "text-slate-700 hover:bg-slate-50"
                )}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
