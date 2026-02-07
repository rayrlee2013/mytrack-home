import { Footer } from "@/components/layout/Footer";
import { Sparkles, Shield, Brain, Target, ArrowRight } from "lucide-react";

type Locale = "en" | "zh";

interface Principle {
  title: string;
  desc: string;
}

const content = {
  en: {
    title: "About",
    subtitle: "Smart tracking, simple living",
    brand: {
      heading: "About MyTrack",
      intro: "MyTrack is a personal brand dedicated to building AI-powered products and services that help individuals transform their daily data into clear, meaningful insights.",
      vision: "In an era of data abundance, everyone deserves to understand their own patterns and make informed decisions, without trading away their privacy.",
      approach: "Every product under MyTrack follows a simple philosophy: powerful AI should be accessible, private by design, and a joy to use every single day.",
    },
    founder: {
      heading: "Meet the Founder",
      role: "Hi, I'm Ray",
      title: "Senior Full-Stack Engineer",
      experience: "10+ years in mobile & web development",
      background: [
        "Deep expertise in AI, computer vision, and autonomous driving systems",
        "Built production-scale solutions serving millions of users",
        "Now channeling that experience into creating everyday tools that respect your privacy",
      ],
    },
    principles: {
      heading: "Core Principles",
      minimal: {
        title: "Minimal Design",
        desc: "Less noise, more clarity. Great tools should blend into your life, not complicate it.",
      },
      privacy: {
        title: "Privacy First",
        desc: "Your data stays yours. We never sell, share, or monetise your personal information.",
      },
      ai: {
        title: "AI with Purpose",
        desc: "Intelligent tools that enhance understanding, not replace human judgment.",
      },
    },
    cta: {
      heading: "Let's Connect",
      desc: "Have feedback or suggestions? I'd love to hear from you.",
      button: "Get in Touch",
    },
  },
  zh: {
    title: "关于",
    subtitle: "智能记录，简单生活",
    brand: {
      heading: "关于 MyTrack",
      intro: "MyTrack 是一个个人品牌，致力于打造 AI 驱动的产品和服务，帮助个人将日常数据转化为清晰、有意义的洞察。",
      vision: "在这个数据爆炸的时代，每个人都有权了解自己的模式并做出明智的决定，同时不必牺牲隐私。",
      approach: "MyTrack 旗下每款产品都秉持一个简单的理念：强大的 AI 应该是可访问的，设计上隐私优先的、并且每天使用都令人愉悦的。",
    },
    founder: {
      heading: "认识创始人",
      role: "你好，我是 Ray",
      title: "高级全栈工程师",
      experience: "10+ 年移动端和 Web 开发经验",
      background: [
        "在 AI、计算机视觉和自动驾驶系统领域拥有深厚 expertise",
        "构建过服务数百万用户的生产级解决方案",
        "现在将这份经验投入到打造尊重用户隐私的日常工具中",
      ],
    },
    principles: {
      heading: "核心理念",
      minimal: {
        title: "极简设计",
        desc: "更少的噪音，更清晰的体验。优秀的工具应该融入生活，而非增加复杂性。",
      },
      privacy: {
        title: "隐私优先",
        desc: "您的数据只属于您。我们绝不出售、分享或变现您的个人信息。",
      },
      ai: {
        title: "有温度的 AI",
        desc: "智能工具增强人类理解，而非取代它。",
      },
    },
    cta: {
      heading: "建立联系",
      desc: "有任何反馈或建议？期待与您交流。",
      button: "联系我",
    },
  },
};

function AboutPage({ locale }: { locale: Locale }) {
  const t = content[locale as keyof typeof content];

  return (
    <div className="min-h-screen flex flex-col pt-14">
      <div className="flex-1 px-4 py-16">
        <div className="max-w-3xl mx-auto space-y-16">
          {/* Header */}
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800">
              <Sparkles className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                {t.subtitle}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
              {t.title}
            </h1>
          </div>

          {/* About MyTrack */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <Target className="w-5 h-5 text-blue-600" />
              {t.brand.heading}
            </h2>
            <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
              <p>{t.brand.intro}</p>
              <p>{t.brand.vision}</p>
              <p>{t.brand.approach}</p>
            </div>
          </section>

          {/* Founder */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <Brain className="w-5 h-5 text-indigo-600" />
              {t.founder.heading}
            </h2>
            <div className="p-6 rounded-2xl bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 space-y-4">
              <div>
                <p className="text-sm font-medium text-blue-600 dark:text-blue-400 mb-1">
                  {t.founder.role}
                </p>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {t.founder.title}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  {t.founder.experience}
                </p>
              </div>
              <ul className="space-y-2">
                {t.founder.background.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Core Principles */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <Shield className="w-5 h-5 text-green-600" />
              {t.principles.heading}
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              {(Object.keys(t.principles) as Array<keyof typeof t.principles>).map((key) => {
                if (key === "heading") return null;
                const principle = t.principles[key] as Principle;
                return (
                  <div
                    key={key}
                    className="p-5 rounded-xl bg-white/40 dark:bg-gray-900/40 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50"
                  >
                    <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-2">
                      {principle.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {principle.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </section>

          {/* CTA */}
          <section className="text-center pt-8">
            <div className="inline-flex flex-col items-center gap-3 p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border border-blue-100 dark:border-blue-800/50">
              <div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                  {t.cta.heading}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {t.cta.desc}
                </p>
              </div>
              <a
                href="mailto:hello@mytrack.club"
                className="inline-flex items-center gap-2 px-5 py-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-medium rounded-lg hover:opacity-90 transition-opacity"
              >
                {t.cta.button}
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AboutPage;
