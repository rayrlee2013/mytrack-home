import { ArrowRight, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { Footer } from "@/components/layout/Footer";
import { type Locale, productCatalog, siteContent } from "@/content/siteContent";

export default function ProductsPage({ locale }: { locale: Locale }) {
  const t = siteContent[locale].products;
  const products = productCatalog[locale];

  return (
    <div className="min-h-screen flex flex-col page-shell pt-16">
      <main className="flex-1 site-container section-shell">
        <header className="max-w-3xl animate-rise">
          <h1 className="text-display text-5xl font-semibold text-slate-900">{t.title}</h1>
          <p className="mt-4 text-lg text-[var(--brand-muted)]">{t.subtitle}</p>
        </header>

        <section className="mt-10 grid gap-5">
          {products.map((product, idx) => (
            <article
              key={product.slug}
              className="surface-card card-lift p-6 md:p-7 animate-fade-soft"
              style={{ animationDelay: `${idx * 90}ms` }}
            >
              <div className="flex items-start justify-between gap-4 flex-wrap">
                <div>
                  <p className="text-xs uppercase tracking-[0.16em] text-[var(--brand-blue)]">{product.status}</p>
                  <h2 className="mt-2 text-3xl font-semibold text-slate-900">{product.name}</h2>
                  <p className="mt-2 text-sm font-semibold text-slate-700">{product.oneLiner}</p>
                  <p className="mt-3 text-slate-600 max-w-2xl">{product.summary}</p>
                </div>
                <div className="surface-soft px-3 py-2 text-xs text-slate-600">{product.audience}</div>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {product.highlights.map((item) => (
                  <span key={item} className="pill-chip text-xs px-3 py-1 rounded-full">
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <Link
                  to="/philosophy"
                  className="inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 font-semibold btn-secondary btn-motion"
                >
                  {t.detailCta}
                  <ArrowRight className="w-4 h-4 motion-arrow" />
                </Link>
                <a
                  href={product.externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 font-semibold btn-primary btn-motion"
                >
                  {t.openCta}
                  <ExternalLink className="w-4 h-4 motion-arrow" />
                </a>
              </div>
            </article>
          ))}
        </section>

        <section className="mt-10 surface-card card-lift p-7 md:p-9">
          <h3 className="text-2xl font-semibold text-slate-900">{t.domainsTitle}</h3>
          <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {t.domains.map((item, idx) => (
              <article
                key={item.title}
                className={`feature-tone ${item.tone} animate-fade-soft`}
                style={{ animationDelay: `${idx * 90}ms` }}
              >
                <h4 className="font-semibold">{item.title}</h4>
                <p className="mt-2 text-sm leading-6 opacity-90">{item.desc}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-10 surface-card card-lift p-7 md:p-9">
          <h3 className="text-2xl font-semibold text-slate-900">{t.roadmapTitle}</h3>
          <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {t.roadmapItems.map((item, idx) => {
              const tones = ["tone-blue", "tone-teal", "tone-violet"] as const;
              return (
                <div
                  key={item}
                  className={`feature-tone ${tones[idx % tones.length]} animate-fade-soft`}
                  style={{ animationDelay: `${idx * 80}ms` }}
                >
                  {item}
                </div>
              );
            })}
          </div>
        </section>
      </main>
      <Footer locale={locale} />
    </div>
  );
}
