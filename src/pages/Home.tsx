import {
  ArrowRight,
  BrainCircuit,
  Database,
  Mail,
  NotebookPen,
  Shield,
  Sparkles,
  UserRound,
  Zap,
} from "lucide-react";
import { Footer } from "@/components/layout/Footer";
import {
  type Locale,
  productCatalog,
  siteContent,
} from "@/content/siteContent";

const focusIcons = [UserRound, BrainCircuit, Database, NotebookPen];
const principleIcons = [Zap, Shield, Sparkles];

export default function HomePage({ locale }: { locale: Locale }) {
  const brand = siteContent[locale].brand;
  const home = siteContent[locale].home;
  const products = siteContent[locale].products;
  const philosophy = siteContent[locale].philosophy;
  const about = siteContent[locale].about;
  const contact = siteContent[locale].contact;
  const product = productCatalog[locale][0];

  return (
    <div className="min-h-screen flex flex-col page-shell">
      {/* ── Hero ── */}
      <section className="hero-gradient min-h-[85vh] flex items-center pt-20 pb-16">
        {/* Animated background */}
        <div className="hero-blob hero-blob-1" />
        <div className="hero-blob hero-blob-2" />
        <div className="hero-blob hero-blob-3" />
        <div className="hero-particles">
          {Array.from({ length: 12 }).map((_, i) => (
            <span
              key={i}
              className="hero-particle"
              style={{
                width: `${4 + (i % 4) * 3}px`,
                height: `${4 + (i % 4) * 3}px`,
                left: `${5 + (i * 8) % 90}%`,
                bottom: `${-10 - (i * 7) % 20}%`,
                animationDuration: `${8 + (i % 5) * 3}s`,
                animationDelay: `${(i * 1.3) % 8}s`,
              }}
            />
          ))}
        </div>
        <div className="site-container relative z-10">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-center">
            <div className="animate-rise">
              <h1 className="text-display text-[clamp(2.5rem,6vw,4.5rem)] font-bold leading-[1.05] text-white">
                {brand.heroTitleA}
                <br />
                {brand.heroTitleB}
              </h1>

              <p className="mt-5 max-w-lg text-lg leading-8 text-white/80">
                {brand.heroSubtitle}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {brand.heroHighlights.map((h, i) => (
                  <span
                    key={h}
                    className="inline-flex items-center gap-2 rounded-full bg-white/15 backdrop-blur-sm border border-white/25 px-4 py-2 text-sm font-medium text-white animate-fade-soft"
                    style={{ animationDelay: `${0.3 + i * 0.15}s` }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-white" />
                    {h}
                  </span>
                ))}
              </div>
            </div>

            <div className="hidden lg:flex justify-center animate-fade-soft">
              <img
                src="/illustrations/mytrack-hero-ai-life.svg"
                alt="MyTrack personal AI illustration"
                className="w-full max-w-md animate-float-soft"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Features ── */}
      <section
        id="features"
        className="section-light geo-triangles section-shell scroll-mt-16"
      >
        <div className="site-container relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-display text-slate-900">
            {home.focusTitle}
          </h2>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {home.focusAreas.map((item, index) => {
              const Icon = focusIcons[index] ?? Sparkles;
              return (
                <article
                  key={item.title}
                  className={`feature-tone ${item.tone} animate-fade-soft bg-white`}
                  style={{ animationDelay: `${index * 90}ms` }}
                >
                  <div className="w-10 h-10 rounded-xl bg-current/10 flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="mt-4 font-semibold text-base">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 opacity-85">{item.desc}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Products ── */}
      <section id="products" className="section-shell scroll-mt-16">
        <div className="site-container">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-display text-slate-900">
            {products.title}
          </h2>
          <p className="mt-3 text-center text-[var(--brand-muted)] max-w-2xl mx-auto">
            {products.subtitle}
          </p>

          {/* Main product card */}
          <div className="mt-10 surface-card card-lift overflow-hidden">
            <div className="grid md:grid-cols-[1fr_1fr] items-center">
              <div className="p-8 md:p-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-semibold border border-emerald-200">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  {product.status}
                </div>
                <h3 className="mt-4 text-2xl font-bold text-slate-900">
                  {product.name}
                </h3>
                <p className="mt-1 text-[var(--brand-muted)]">
                  {product.oneLiner}
                </p>
                <p className="mt-3 text-slate-600 leading-7">{product.summary}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {product.highlights.map((h) => (
                    <span
                      key={h}
                      className="text-xs font-medium px-3 py-1 rounded-full bg-[var(--tone-teal-bg)] text-[var(--tone-teal-text)] border border-[var(--tone-teal-line)]"
                    >
                      {h}
                    </span>
                  ))}
                </div>

                <a
                  href={product.externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 btn-pill btn-pill-cyan btn-motion inline-flex"
                >
                  {product.ctaLabel}
                  <ArrowRight className="w-4 h-4 motion-arrow" />
                </a>
              </div>

              <div className="hidden md:block p-6">
                <img
                  src="/illustrations/itrackdaily-product.svg"
                  alt="iTrackDaily — calendar tracking, habits, and AI insights"
                  className="w-full rounded-xl"
                />
              </div>
            </div>
          </div>

          {/* Domains */}
          <h3 className="mt-14 text-xl font-bold text-slate-900 text-center">
            {products.domainsTitle}
          </h3>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {products.domains.map((d) => (
              <article
                key={d.title}
                className={`feature-tone ${d.tone} card-lift`}
              >
                <h4 className="font-semibold">{d.title}</h4>
                <p className="mt-2 text-sm leading-6 opacity-85">{d.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Philosophy ── */}
      <section
        id="philosophy"
        className="section-light geo-triangles section-shell scroll-mt-16"
      >
        <div className="site-container relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-display text-slate-900">
            {philosophy.title}
          </h2>
          <p className="mt-3 text-center text-[var(--brand-muted)] max-w-2xl mx-auto">
            {philosophy.subtitle}
          </p>

          {/* Principles */}
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {philosophy.principles.map((p, i) => {
              const Icon = principleIcons[i] ?? Sparkles;
              return (
                <article
                  key={p.title}
                  className={`feature-tone ${p.tone} card-lift bg-white`}
                >
                  <div className="w-10 h-10 rounded-xl bg-current/10 flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="mt-4 font-semibold text-base">{p.title}</h3>
                  <p className="mt-2 text-sm leading-6 opacity-85">{p.desc}</p>
                </article>
              );
            })}
          </div>

          {/* Workflow timeline */}
          <h3 className="mt-14 text-xl font-bold text-slate-900 text-center">
            {philosophy.workflowTitle}
          </h3>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {philosophy.workflowSteps.map((step, i) => (
              <div key={step.title} className="text-center">
                <div className="w-10 h-10 rounded-full bg-[var(--brand-cyan)] text-white font-bold text-lg flex items-center justify-center mx-auto">
                  {i + 1}
                </div>
                <h4 className="mt-3 font-semibold text-slate-900">
                  {step.title}
                </h4>
                <p className="mt-2 text-sm text-[var(--brand-muted)] leading-6">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── About ── */}
      <section id="about" className="section-shell scroll-mt-16">
        <div className="site-container">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-display text-slate-900">
            {about.title}
          </h2>
          <p className="mt-3 text-center text-[var(--brand-muted)] max-w-2xl mx-auto">
            {about.subtitle}
          </p>

          {/* Two-column: brand story + founder */}
          <div className="mt-10 grid gap-6 lg:grid-cols-[1.2fr_0.8fr] items-start">
            {/* Left — Brand story */}
            <div className="surface-card p-8 md:p-10 h-full">
              <p className="text-xs font-bold tracking-[0.14em] text-[var(--brand-cyan)] uppercase">
                Our Story
              </p>
              <p className="mt-4 text-lg text-slate-800 leading-8 font-medium">
                {about.brand.intro}
              </p>
              <p className="mt-4 text-slate-600 leading-7">{about.brand.vision}</p>
              <p className="mt-4 text-slate-600 leading-7">{about.brand.approach}</p>

              <div className="mt-6 rounded-xl bg-gradient-to-r from-[var(--tone-teal-bg)] to-[var(--tone-blue-bg)] border border-[var(--tone-teal-line)] p-5">
                <p className="text-slate-700 leading-7 italic">
                  &ldquo;{about.brand.mission}&rdquo;
                </p>
              </div>
            </div>

            {/* Right — Founder */}
            <div className="surface-card p-8 md:p-10 h-full flex flex-col">
              <p className="text-xs font-bold tracking-[0.14em] text-[var(--brand-cyan)] uppercase">
                Founder
              </p>

              <div className="mt-4 flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[var(--brand-cyan)] to-[#4fd1c5] text-white flex items-center justify-center text-xl font-bold shrink-0 shadow-md">
                  R
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">
                    {about.founder.greeting}
                  </h3>
                  <p className="text-sm text-[var(--brand-cyan)] font-semibold">
                    {about.founder.role}
                  </p>
                  <p className="text-xs text-slate-500 mt-0.5">
                    {about.founder.experience}
                  </p>
                </div>
              </div>

              <p className="mt-5 text-slate-600 leading-7 text-sm">
                {about.founder.signature}
              </p>

              <ul className="mt-5 space-y-3 flex-1">
                {about.founder.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-3 text-sm text-slate-600 leading-6">
                    <span className="mt-1 w-5 h-5 rounded-md bg-[var(--tone-teal-bg)] border border-[var(--tone-teal-line)] flex items-center justify-center shrink-0">
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--brand-cyan)]" />
                    </span>
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Core Principles — horizontal cards */}
          <div className="mt-12">
            <h3 className="text-xl font-bold text-slate-900 text-center">
              {about.principles.heading}
            </h3>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {about.principles.items.map((p) => (
                <article
                  key={p.title}
                  className={`feature-tone ${p.tone} card-lift text-center`}
                >
                  <h4 className="font-semibold text-base">{p.title}</h4>
                  <p className="mt-2 text-sm leading-6 opacity-85">{p.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Contact ── */}
      <section
        id="contact"
        className="section-light geo-triangles scroll-mt-16"
      >
        <div className="site-container relative z-10 py-20 text-center">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 rounded-full bg-[var(--deco-pink)] flex items-center justify-center">
              <Mail className="w-9 h-9 text-[#c06080]" />
            </div>
          </div>

          <h2 className="code-heading text-2xl md:text-3xl">
            &lt; {contact.heading} /&gt;
          </h2>

          <hr className="dashed-sep mt-4 mb-6" />

          <p className="text-slate-600">
            {contact.emailLabel}{" "}
            <a
              href={`mailto:${contact.email}`}
              className="font-semibold text-[var(--brand-cyan)] hover:underline"
            >
              {contact.email}
            </a>
          </p>

        </div>

        <Footer locale={locale} />
      </section>
    </div>
  );
}
