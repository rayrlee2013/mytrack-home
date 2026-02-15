import { type Locale, siteContent } from "@/content/siteContent";

export function Footer({ locale }: { locale: Locale }) {
  const t = siteContent[locale].footer;

  return (
    <footer className="py-6 text-center text-sm text-slate-500">
      <p>
        {t.copyright} {t.author}
      </p>
    </footer>
  );
}
