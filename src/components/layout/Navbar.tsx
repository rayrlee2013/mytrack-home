import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import * as Dialog from "@radix-ui/react-dialog";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { Menu, Globe, ChevronDown, Sparkles, Mail } from "lucide-react";
import { cn } from "@/lib/cn";

type Locale = "en" | "zh";

interface NavbarProps {
  locale: Locale;
  onLocaleChange: (locale: Locale) => void;
}

const navConfig = {
  en: {
    products: "Products",
    features: "Features",
    about: "About",
    cta: "Contact",
    tagline: "AI meets your data",
  },
  zh: {
    products: "产品",
    features: "功能",
    about: "关于",
    cta: "联系",
    tagline: "AI 与你的数据相遇",
  },
};

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      to={href}
      className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
    >
      {children}
    </Link>
  );
}

function MobileMenu({
  locale,
  onLocaleChange,
  isOpen,
  onClose,
}: {
  locale: Locale;
  onLocaleChange: (l: Locale) => void;
  isOpen: boolean;
  onClose: () => void;
}) {
  const t = navConfig[locale as keyof typeof navConfig];

  return (
    <Dialog.Root open={isOpen} onOpenChange={onClose}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50 z-50" />
        <Dialog.Content className="fixed bottom-0 left-0 right-0 p-4 bg-white dark:bg-gray-900 rounded-t-2xl z-50 animate-slide-up max-h-[80vh] overflow-y-auto">
          <Dialog.Title className="sr-only">
            {locale === "en" ? "Navigation Menu" : "导航菜单"}
          </Dialog.Title>
          <div className="text-center pb-4 border-b border-gray-100 dark:border-gray-800 mb-4">
            <p className="text-sm text-gray-500 dark:text-gray-400">{t.tagline}</p>
          </div>

          <div className="flex flex-col gap-2">
            <Link
              to="/products"
              onClick={onClose}
              className="px-3 py-3 text-base font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg"
            >
              {t.products}
            </Link>
            <Link
              to="/features"
              onClick={onClose}
              className="px-3 py-3 text-base font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg"
            >
              {t.features}
            </Link>
            <Link
              to="/about"
              onClick={onClose}
              className="px-3 py-3 text-base font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg"
            >
              {t.about}
            </Link>

            <div className="border-t border-gray-100 dark:border-gray-800 my-2 pt-4">
              <div className="flex gap-2 px-3 mb-3">
                {(Object.keys(navConfig) as Locale[]).map((l) => (
                  <button
                    key={l}
                    onClick={() => {
                      onLocaleChange(l);
                      onClose();
                    }}
                    className={cn(
                      "flex-1 py-2 text-sm font-medium rounded-lg transition-colors",
                      l === locale
                        ? "bg-gray-900 text-white dark:bg-white dark:text-gray-900"
                        : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                    )}
                  >
                    {l === "en" ? "EN" : "中文"}
                  </button>
                ))}
              </div>
              <Link
                to="/contact"
                onClick={onClose}
                className="flex items-center justify-center gap-2 w-full py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-lg hover:opacity-90 transition-opacity"
              >
                <Mail className="w-4 h-4" />
                {t.cta}
              </Link>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

export function Navbar({ locale, onLocaleChange }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const t = navConfig[locale as keyof typeof navConfig];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-40 left-20 w-48 h-48 bg-indigo-400/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-cyan-400/10 rounded-full blur-2xl animate-float" style={{ animationDelay: "2s" }} />
      </div>

      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-white/80 backdrop-blur-md border-b border-gray-100 dark:bg-gray-900/80 dark:border-gray-800"
            : "bg-transparent"
        )}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center justify-between h-16">
            <Link
              to="/"
              className="flex items-center gap-1.5 text-xl font-bold hover:opacity-80 transition-opacity"
            >
              <Sparkles className="w-5 h-5 text-blue-600" />
              <span className="bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                MY TRACK
              </span>
            </Link>

            <div className="flex items-center gap-6">
              <div className="hidden md:flex items-center gap-6">
                <NavLink href="/products">{t.products}</NavLink>
                <NavLink href="/features">{t.features}</NavLink>
                <NavLink href="/about">{t.about}</NavLink>
                <NavLink href="/contact">{t.cta}</NavLink>
              </div>

              <DropdownMenu.Root>
                <DropdownMenu.Trigger asChild>
                  <button
                    className="hidden md:flex items-center gap-1 px-3 py-1.5 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
                    aria-label="Switch language"
                  >
                    <Globe className="w-4 h-4" />
                    <span>{locale === "en" ? "EN" : "中文"}</span>
                    <ChevronDown className="w-3 h-3" />
                  </button>
                </DropdownMenu.Trigger>
                <DropdownMenu.Portal>
                  <DropdownMenu.Content
                    className="min-w-[80px] py-1 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-100 dark:border-gray-700"
                    sideOffset={5}
                  >
                    {(Object.keys(navConfig) as Locale[]).map((l) => (
                      <DropdownMenu.Item
                        key={l}
                        onClick={() => onLocaleChange(l)}
                        className={cn(
                          "px-3 py-1.5 text-sm cursor-pointer outline-none transition-colors",
                          l === locale
                            ? "text-gray-900 dark:text-white bg-gray-50 dark:bg-gray-700"
                            : "text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
                        )}
                      >
                        {l === "en" ? "English" : "中文"}
                      </DropdownMenu.Item>
                    ))}
                  </DropdownMenu.Content>
                </DropdownMenu.Portal>
              </DropdownMenu.Root>

              <button
                className="md:hidden p-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                onClick={() => setIsMobileOpen(true)}
                aria-label="Toggle menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </nav>
      </header>

      <MobileMenu
        locale={locale}
        onLocaleChange={onLocaleChange}
        isOpen={isMobileOpen}
        onClose={() => setIsMobileOpen(false)}
      />
    </>
  );
}
