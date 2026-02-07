import { Footer } from "@/components/layout/Footer";
import { Sparkles, Smartphone, Github, BarChart3, Cpu, Lock, Fingerprint, ArrowRight } from "lucide-react";

type Locale = "en" | "zh";

const features = [
  {
    icon: Cpu,
    titleKey: "aiTitle",
    descKey: "aiDesc",
    color: "from-blue-500 to-cyan-500",
    bgLight: "bg-blue-50",
    bgDark: "dark:bg-blue-950/30",
  },
  {
    icon: Lock,
    titleKey: "privacyTitle",
    descKey: "privacyDesc",
    color: "from-green-500 to-emerald-500",
    bgLight: "bg-green-50",
    bgDark: "dark:bg-green-950/30",
  },
  {
    icon: Fingerprint,
    titleKey: "delightfulTitle",
    descKey: "delightfulDesc",
    color: "from-yellow-500 to-orange-500",
    bgLight: "bg-yellow-50",
    bgDark: "dark:bg-yellow-950/30",
  },
  {
    icon: Smartphone,
    titleKey: "crossTitle",
    descKey: "crossDesc",
    color: "from-purple-500 to-pink-500",
    bgLight: "bg-purple-50",
    bgDark: "dark:bg-purple-950/30",
  },
  {
    icon: Github,
    titleKey: "openTitle",
    descKey: "openDesc",
    color: "from-gray-500 to-gray-600",
    bgLight: "bg-gray-50",
    bgDark: "dark:bg-gray-800/50",
  },
  {
    icon: BarChart3,
    titleKey: "insightsTitle",
    descKey: "insightsDesc",
    color: "from-indigo-500 to-blue-500",
    bgLight: "bg-indigo-50",
    bgDark: "dark:bg-indigo-950/30",
  },
];

const content = {
  en: {
    title: "Features",
    subtitle: "Smart tracking, powerful insights",
    headerTitle: "Core Features",
    headerDesc: "Everything you need to understand your data, privately.",
    aiTitle: "AI Powered",
    aiDesc: "Cutting-edge AI delivers smart experiences and personalized insights tailored just for you.",
    privacyTitle: "Privacy First",
    privacyDesc: "Your data stays on your device. We never collect personal information — true privacy.",
    delightfulTitle: "Delightful Experience",
    delightfulDesc: "Every interaction is thoughtfully designed — minimal yet powerful, a joy to use daily.",
    crossTitle: "Cross Platform",
    crossDesc: "Available on iOS, Android, and Web. Access your data anywhere with a seamless experience.",
    openTitle: "Open Source",
    openDesc: "Core components are open source. Transparent code, community reviewed and contributions welcome.",
    insightsTitle: "Data Insights",
    insightsDesc: "Beautiful visualizations and analytics help you uncover patterns and understand your behavior.",
    ctaTitle: "Ready to get started?",
    ctaDesc: "Join thousands who are taking control of their data.",
    ctaButton: "Start Now",
  },
  zh: {
    title: "功能特性",
    subtitle: "智能追踪，强力洞察",
    headerTitle: "核心功能",
    headerDesc: "了解您数据的一切，尽在掌握。",
    aiTitle: "AI 驱动",
    aiDesc: "前沿 AI 技术提供智能体验和个性化洞察，专为您量身定制。",
    privacyTitle: "隐私优先",
    privacyDesc: "您的数据保存在本地。我们绝收集个人信息——真正的隐私保护。",
    delightfulTitle: "愉悦体验",
    delightfulDesc: "精心设计的每一次交互——极简而强大，使用就是一种享受。",
    crossTitle: "跨平台支持",
    crossDesc: "支持 iOS、Android 和 Web。随时随地访问您的数据，体验无缝衔接。",
    openTitle: "开源透明",
    openDesc: "核心组件开源。代码透明，接受社区审查，欢迎贡献。",
    insightsTitle: "数据洞察",
    insightsDesc: "精美的可视化和分析帮助您发现模式，了解自己的行为。",
    ctaTitle: "准备好开始了吗？",
    ctaDesc: "加入数千名用户的行列，掌握自己的数据。",
    ctaButton: "立即开始",
  },
};

function FeatureCard({ feature, locale }: { feature: typeof features[0]; locale: Locale }) {
  const t = content[locale as keyof typeof content];
  const Icon = feature.icon;

  return (
    <div className="group relative overflow-hidden rounded-2xl bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 p-6 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/5">
      {/* Gradient accent */}
      <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.color}`} />

      {/* Icon */}
      <div className={`w-12 h-12 rounded-xl ${feature.bgLight} ${feature.bgDark} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
        <Icon className={`w-6 h-6 ${feature.color.split(" ")[0].replace("from-", "text-")}`} strokeWidth={2} />
      </div>

      {/* Title */}
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
        {feature.titleKey in t ? t[feature.titleKey as keyof typeof t] : ""}
      </h3>

      {/* Description */}
      <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
        {feature.descKey in t ? t[feature.descKey as keyof typeof t] : ""}
      </p>

      {/* Hover arrow */}
      <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
        <ArrowRight className="w-5 h-5 text-blue-500" />
      </div>
    </div>
  );
}

function FeaturesPage({ locale }: { locale: Locale }) {
  const t = content[locale as keyof typeof content];

  return (
    <div className="min-h-screen flex flex-col pt-14">
      <div className="flex-1 px-4 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 mb-6">
              <Sparkles className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                {t.subtitle}
              </span>
            </div>
          </div>

          {/* Features Grid */}
          <div className="mb-16">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              {t.headerTitle}
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              {t.headerDesc}
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {features.map((feature, i) => (
                <FeatureCard key={i} feature={feature} locale={locale} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default FeaturesPage;
