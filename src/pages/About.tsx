import { Footer } from "@/components/layout/Footer";
import { type Locale, siteContent } from "@/content/siteContent";
import { Brain, Shield, Target } from "lucide-react";

export default function AboutPage({ locale }: { locale: Locale }) {
  const t = siteContent[locale].about;

  return (
    <div className="min-h-screen flex flex-col page-shell pt-16">
      <main className="flex-1 site-container section-shell">
        <header className="max-w-3xl animate-rise">
          <h1 className="text-display text-5xl font-semibold text-slate-900">{t.title}</h1>
          <p className="mt-4 text-lg text-[var(--brand-muted)]">{t.subtitle}</p>
        </header>

        <section className="mt-8 surface-card card-lift p-6 md:p-8 animate-fade-soft">
          <h2 className="text-2xl font-semibold text-slate-900 inline-flex items-center gap-2">
            <Target className="w-5 h-5 text-[var(--brand-blue)]" />
            {t.brand.heading}
          </h2>
          <div className="mt-4 space-y-4 text-slate-700 leading-8">
            <p>{t.brand.intro}</p>
            <p>{t.brand.vision}</p>
            <p>{t.brand.approach}</p>
          </div>
        </section>

        <section className="mt-6 surface-card card-lift p-6 md:p-8 animate-fade-soft">
          <h2 className="text-2xl font-semibold text-slate-900 inline-flex items-center gap-2">
            <Brain className="w-5 h-5 text-[var(--brand-blue)]" />
            {t.founder.heading}
          </h2>
          <div className="mt-4">
            <p className="text-lg font-semibold text-slate-900">{t.founder.greeting}</p>
            <p className="mt-1 text-base text-slate-700">{t.founder.role}</p>
            <p className="mt-1 text-sm text-slate-500">{t.founder.experience}</p>
            <div className="mt-3 feature-tone tone-violet">
              <p className="text-sm font-semibold">{t.founder.signature}</p>
            </div>
            <p className="mt-3 text-slate-700 leading-7">{t.founder.bio}</p>
          </div>
          <ul className="mt-4 grid gap-2">
            {t.founder.highlights.map((item) => (
              <li key={item} className="surface-soft px-4 py-3 text-slate-700 leading-7">
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-6">
            <h3 className="text-lg font-semibold text-slate-900">{t.founder.cycleHeading}</h3>
            <div className="mt-4 relative">
              <div className="absolute left-3 top-3 bottom-3 w-px bg-slate-200" />
              <div className="grid gap-3">
                {t.founder.cycleStages.map((stage, idx) => (
                  <article
                    key={stage.title}
                    className="relative surface-soft pl-12 pr-4 py-4 animate-fade-soft"
                    style={{ animationDelay: `${idx * 70}ms` }}
                  >
                    <span className="absolute left-0.5 top-4 w-6 h-6 rounded-full bg-blue-50 border border-blue-200 text-[var(--brand-blue)] text-xs font-semibold inline-flex items-center justify-center">
                      {idx + 1}
                    </span>
                    <h4 className="font-semibold text-slate-900">{stage.title}</h4>
                    <p className="mt-2 text-sm text-slate-600 leading-6">{stage.desc}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mt-6 surface-card card-lift p-6 md:p-8 animate-fade-soft">
          <h2 className="text-2xl font-semibold text-slate-900 inline-flex items-center gap-2">
            <Shield className="w-5 h-5 text-[var(--brand-blue)]" />
            {t.principles.heading}
          </h2>
          <div className="mt-4 grid gap-3 md:grid-cols-3">
            {t.principles.items.map((item, idx) => (
              <article
                key={item.title}
                className={`feature-tone ${item.tone} animate-fade-soft`}
                style={{ animationDelay: `${idx * 85}ms` }}
              >
                <h3 className="font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 opacity-90">{item.desc}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer locale={locale} />
    </div>
  );
}
