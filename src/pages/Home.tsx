import { Link } from "react-router-dom";
import {
  ArrowRight,
  BrainCircuit,
  CheckCircle2,
  Database,
  NotebookPen,
  Sparkles,
  UserRound,
} from "lucide-react";
import { Footer } from "@/components/layout/Footer";
import { type Locale, dashboardUrl, siteContent } from "@/content/siteContent";

const focusIcons = [UserRound, BrainCircuit, Database, NotebookPen];

function BrandPanel({ locale }: { locale: Locale }) {
  const panel = siteContent[locale].home.panel;

  return (
    <div className="calendar-panel card-lift animate-rise relative">
      <div className="px-4 pt-4">
        <img
          src="/illustrations/mytrack-hero-ai-life.svg"
          alt="MyTrack personal AI and data analysis illustration"
          className="w-full rounded-xl border border-[#d8e6f2] bg-white animate-pulse-soft"
        />
      </div>
      <div className="calendar-header px-6 py-4">
        <p className="text-xs tracking-[0.16em] opacity-90">{panel.title}</p>
        <p className="mt-1 font-semibold text-lg leading-none">{panel.subtitle}</p>
      </div>

      <div className="px-6 py-5">
        <p className="text-slate-700 leading-7">{panel.desc}</p>

        <div className="mt-4 space-y-2.5">
          {panel.highlights.map((item) => (
            <div key={item} className="task-row p-3 flex items-center gap-2.5">
              <span className="w-5 h-5 rounded-full inline-flex items-center justify-center bg-[var(--brand-blue)] text-white">
                <CheckCircle2 className="w-3.5 h-3.5" />
              </span>
              <span className="font-medium text-slate-800">{item}</span>
            </div>
          ))}
        </div>

        <div className="mt-4 flex items-center justify-between gap-3">
          <div className="info-note inline-flex items-center gap-1.5 px-3 py-1 text-xs text-[#2d577f]">
            <Sparkles className="w-3.5 h-3.5" />
            {siteContent[locale].common.subproductName}
          </div>
          <span className="text-xs text-slate-500">{siteContent[locale].common.subproductUrlLabel}</span>
        </div>

        <a
          href={dashboardUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-2 rounded-xl px-4 py-2.5 font-semibold btn-primary btn-motion"
        >
          {panel.cta}
          <ArrowRight className="w-4 h-4 motion-arrow" />
        </a>
      </div>
    </div>
  );
}

export default function HomePage({ locale }: { locale: Locale }) {
  const brand = siteContent[locale].brand;
  const home = siteContent[locale].home;

  return (
    <div className="min-h-screen flex flex-col page-shell pt-16">
      <main className="flex-1 hero-bg">
        <section className="site-container section-shell">
          <div className="grid gap-14 xl:grid-cols-[0.95fr_1.05fr] items-start">
            <div className="animate-rise">
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 border border-slate-200 text-sm font-semibold text-[var(--brand-blue)]">
                <Sparkles className="w-4 h-4" />
                {brand.heroBadge}
              </div>

              <h1 className="text-display mt-6 text-[clamp(2.2rem,6vw,4.8rem)] font-semibold leading-[0.95] text-slate-900">
                {brand.heroTitleA}
                <br />
                <span className="text-brand">{brand.heroTitleB}</span>
              </h1>

              <p className="mt-5 max-w-xl text-[1.2rem] leading-8 text-[var(--brand-muted)]">
                {brand.heroSubtitle}
              </p>

              <p className="mt-4 text-sm font-semibold text-[var(--brand-blue)]">{brand.tagline}</p>

              <div className="mt-7 flex flex-col sm:flex-row gap-3">
                <a
                  href={dashboardUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 font-semibold btn-primary btn-motion"
                >
                  {brand.heroPrimaryCta}
                  <ArrowRight className="w-4 h-4 motion-arrow" />
                </a>
                <Link
                  to="/philosophy"
                  className="inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 font-semibold btn-secondary btn-motion"
                >
                  {brand.heroSecondaryCta}
                  <ArrowRight className="w-4 h-4 motion-arrow" />
                </Link>
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {home.stats.map((item, idx) => (
                  <div
                    key={item.label}
                    className="stat-card card-lift p-4 text-center animate-fade-soft"
                    style={{ animationDelay: `${idx * 80}ms` }}
                  >
                    <p className="text-4xl font-semibold text-slate-900 leading-none">{item.value}</p>
                    <p className="text-sm text-slate-500 mt-2">{item.label}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {home.chips.map((chip) => (
                  <span key={chip} className="pill-chip text-sm px-3 py-1.5 rounded-full">
                    {chip}
                  </span>
                ))}
              </div>
            </div>

            <BrandPanel locale={locale} />
          </div>
        </section>

        <section className="site-container pb-12">
          <div className="surface-card card-lift p-7 md:p-9">
            <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 text-display">{home.focusTitle}</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {home.focusAreas.map((item, index) => {
                const Icon = focusIcons[index] ?? Sparkles;
                return (
                  <article
                    key={item.title}
                    className={`feature-tone ${item.tone} animate-fade-soft`}
                    style={{ animationDelay: `${index * 90}ms` }}
                  >
                    <Icon className="w-4 h-4" />
                    <h3 className="mt-3 font-semibold text-base">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 opacity-90">{item.desc}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="site-container pb-20">
          <div className="surface-card card-lift p-8 md:p-11 animate-fade-soft">
            <h2 className="text-3xl font-semibold text-slate-900 text-display">{home.finalTitle}</h2>
            <p className="mt-3 text-lg text-[var(--brand-muted)] max-w-3xl">{home.finalDesc}</p>

            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {home.useCases.map((item, idx) => (
                <div
                  key={item}
                  className="surface-soft card-lift px-4 py-3 text-slate-700 animate-fade-soft"
                  style={{ animationDelay: `${idx * 80}ms` }}
                >
                  {item}
                </div>
              ))}
            </div>

            <Link
              to="/products"
              className="mt-6 inline-flex items-center gap-2 rounded-xl px-5 py-3 font-semibold btn-primary btn-motion"
            >
              {home.finalCta}
              <ArrowRight className="w-4 h-4 motion-arrow" />
            </Link>
          </div>
        </section>
      </main>
      <Footer locale={locale} />
    </div>
  );
}
