import { Link } from "react-router-dom";
import { type Locale, siteContent } from "@/content/siteContent";

export function Footer({ locale }: { locale: Locale }) {
  const t = siteContent[locale].footer;

  return (
    <footer className="border-t border-slate-200/80 bg-[#e8f0f6] mt-10">
      <div className="site-container py-5 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between text-sm text-slate-600">
        <p>
          {t.copyright} {t.sentence}
        </p>
        <div className="flex items-center gap-5">
          <Link to="/products" className="hover:text-slate-900 transition-colors">
            {t.products}
          </Link>
          <Link to="/philosophy" className="hover:text-slate-900 transition-colors">
            {t.philosophy}
          </Link>
          <Link to="/contact" className="hover:text-slate-900 transition-colors">
            {t.contact}
          </Link>
        </div>
      </div>
    </footer>
  );
}
