import { Footer } from "@/components/layout/Footer";
import { CalendarDays, ArrowRight, CalendarCheck, Lock, Zap } from "lucide-react";

type Locale = "en" | "zh";

const content = {
  en: {
    product: "iTrackDaily",
    tagline: "Simple · Private · Effective",
    headline: "Build habits that actually stick.",
    desc: "A simple way to track your daily habits without complexity.",
    features: [
      { icon: CalendarDays, title: "Visual Calendar", desc: "See your progress at a glance" },
      { icon: Lock, title: "Private", desc: "Your data stays on your device" },
      { icon: Zap, title: "Fast", desc: "Open and track in seconds" },
    ],
    cta: "Start Free",
    more: "More products coming soon...",
  },
  zh: {
    product: "iTrackDaily",
    tagline: "简单 · 私密 · 有效",
    headline: "养成真正有效的习惯。",
    desc: "简单的方式追踪您的日常习惯，无需复杂性。",
    features: [
      { icon: CalendarCheck, title: "视觉日历", desc: "一目了然地查看进度" },
      { icon: Lock, title: "隐私保护", desc: "您的数据保存在本地" },
      { icon: Zap, title: "极速体验", desc: "打开即可追踪" },
    ],
    cta: "免费开始",
    more: "更多产品即将推出...",
  },
};

function ProductPage({ locale }: { locale: Locale }) {
  const t = content[locale as keyof typeof content];

  return (
    <div className="min-h-screen flex flex-col pt-14">
      <div className="flex-1 px-4 py-20">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 mb-6">
            <CalendarCheck className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
              {t.product}
            </span>
          </div>

          {/* Tagline */}
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
            {t.tagline}
          </p>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            {t.headline}
          </h1>

          {/* Description */}
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-xl mx-auto">
            {t.desc}
          </p>

          {/* CTA */}
          <a
            href="https://daily.mytrack.club/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-medium rounded-xl hover:opacity-90 transition-opacity mb-16"
          >
            {t.cta}
            <ArrowRight className="w-4 h-4" />
          </a>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {t.features.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <div
                  key={i}
                  className="p-6 rounded-xl bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50"
                >
                  <Icon className="w-6 h-6 text-blue-600 mx-auto mb-3" strokeWidth={2} />
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {feature.desc}
                  </p>
                </div>
              );
            })}
          </div>

          {/* More Products */}
          <div className="pt-8 border-t border-gray-200 dark:border-gray-800">
            <p className="text-gray-500 dark:text-gray-400">
              {t.more}
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ProductPage;
