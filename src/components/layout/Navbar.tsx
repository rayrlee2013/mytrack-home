import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Layers3, Menu, X } from "lucide-react";
import { siteContent } from "@/content/siteContent";
import { cn } from "@/lib/cn";

export function Navbar() {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const t = siteContent.en.brand;

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  const navItems = [
    { to: "/", label: t.nav.home },
    { to: "/products", label: t.nav.products },
    { to: "/philosophy", label: t.nav.philosophy },
    { to: "/about", label: t.nav.about },
    { to: "/contact", label: t.nav.contact },
  ];

  return (
    <header className="top-nav fixed top-0 left-0 right-0 z-50">
      <div className="site-container h-16 flex items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-2">
          <span className="w-8 h-8 rounded-lg bg-[var(--brand-blue)] text-white inline-flex items-center justify-center">
            <Layers3 className="w-4 h-4" />
          </span>
          <div className="leading-none">
            <p className="text-lg font-semibold text-slate-900">{t.name}</p>
            <p className="text-[11px] text-slate-500">{t.subName}</p>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-4 ml-auto">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={cn(
                "text-sm font-semibold px-2 py-1 rounded-md transition-colors",
                location.pathname === item.to
                  ? "text-slate-900"
                  : "text-slate-600 hover:text-slate-900"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          className="lg:hidden p-2 rounded-lg border border-slate-300 bg-white"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle mobile menu"
        >
          {open ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-slate-200 bg-white/95">
          <div className="site-container py-3 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={cn(
                  "block rounded-lg px-3 py-2 text-sm font-medium",
                  location.pathname === item.to
                    ? "bg-slate-100 text-slate-900"
                    : "text-slate-700 bg-slate-50"
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
