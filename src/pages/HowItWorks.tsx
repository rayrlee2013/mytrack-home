import { ArrowRight, CheckCircle2, MinusCircle } from "lucide-react";
import { Footer } from "@/components/layout/Footer";
import { type Locale, dashboardUrl, siteContent } from "@/content/siteContent";

export default function PhilosophyPage({ locale }: { locale: Locale }) {
  const t = siteContent[locale].philosophy;

  return (
    <div className="min-h-screen flex flex-col page-shell pt-16">
      <main className="flex-1 site-container py-20">
        <header className="animate-rise">
          <div className="inline-flex rounded-full bg-white px-3 py-1.5 border border-slate-200 text-xs font-semibold tracking-[0.14em] text-[var(--brand-blue)]">
            PHILOSOPHY
          </div>
          <h1 className="mt-4 text-display text-4xl md:text-5xl font-semibold text-slate-900">{t.title}</h1>
          <p className="mt-4 text-lg leading-8 text-[var(--brand-muted)]">{t.subtitle}</p>
        </header>

        <section className="mt-10 rounded-2xl border border-slate-200 bg-white p-6 md:p-8 border-l-4 border-l-[var(--brand-blue)]">
          <p className="text-base md:text-lg leading-8 text-slate-700">{t.statement}</p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold text-slate-900">Principles</h2>
          <div className="mt-4 rounded-2xl border border-slate-200 bg-white divide-y divide-slate-100">
          {t.principles.map((item, idx) => (
              <article key={item.title} className="p-5 md:p-6">
                <div className="flex items-start gap-4">
                  <span className="w-8 h-8 shrink-0 inline-flex items-center justify-center rounded-full bg-slate-50 text-[var(--brand-blue)] text-sm font-semibold">
                    {idx + 1}
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                    <p className="mt-2 text-slate-600 leading-7">{item.desc}</p>
                  </div>
                </div>
              </article>
          ))}
          </div>
        </section>

        <section className="mt-12 rounded-2xl border border-slate-200 bg-white p-6 md:p-8">
          <h3 className="text-2xl font-semibold text-slate-900">{t.workflowTitle}</h3>
          <div className="mt-5 divide-y divide-slate-100 rounded-xl border border-slate-100">
            {t.workflowSteps.map((item, idx) => (
              <article key={item.title} className="px-5 py-4 bg-white">
                <p className="text-xs font-semibold tracking-[0.16em] text-[var(--brand-blue)]">STEP {idx + 1}</p>
                <h4 className="mt-1.5 font-semibold text-slate-900">{item.title}</h4>
                <p className="mt-2 text-sm leading-6 text-slate-600">{item.desc}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-12 rounded-2xl border border-slate-200 bg-white p-6 md:p-8">
          <h3 className="text-2xl font-semibold text-slate-900">{t.guardrailsTitle}</h3>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <article className="rounded-xl border border-slate-100 bg-slate-50 p-5">
              <h4 className="font-semibold text-slate-900">{t.doTitle}</h4>
              <ul className="mt-3 grid gap-2">
                {t.dos.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 mt-0.5 text-emerald-600" />
                    <span className="text-sm leading-6 text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </article>

            <article className="rounded-xl border border-slate-100 bg-slate-50 p-5">
              <h4 className="font-semibold text-slate-900">{t.dontTitle}</h4>
              <ul className="mt-3 grid gap-2">
                {t.donts.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <MinusCircle className="w-4 h-4 mt-0.5 text-orange-600" />
                    <span className="text-sm leading-6 text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>

          <a
            href={dashboardUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex items-center gap-2 rounded-xl px-5 py-3 font-semibold btn-primary btn-motion"
          >
            {t.cta}
            <ArrowRight className="w-4 h-4 motion-arrow" />
          </a>
        </section>
      </main>
      <Footer locale={locale} />
    </div>
  );
}
