export type Locale = "en" | "zh";

export interface ProductSummary {
  slug: string;
  name: string;
  oneLiner: string;
  summary: string;
  audience: string;
  highlights: string[];
  ctaLabel: string;
  externalUrl: string;
  status: string;
}

const SUBPRODUCT_URL = "https://daily.mytrack.club/";

export const siteContent = {
  en: {
    brand: {
      name: "MyTrack",
      subName: "Personal Product Studio",
      nav: {
        features: "Features",
        products: "Products",
        philosophy: "Philosophy",
        about: "About",
        contact: "Contact",
      },
      heroBadge: "AI meets your life, helps every day.",
      heroTitleA: "Smart tracking,",
      heroTitleB: "simple living",
      heroSubtitle:
        "Empowering individuals through AI-powered products and services, turning daily data into meaningful insights, because your privacy matters.",
      heroPrimaryCta: "Try iTrackDaily",
      heroSecondaryCta: "Learn More",
      tagline: "AI meets your life, helps every day.",
    },
    home: {
      focusTitle: "From daily data to meaningful insights",
      focusAreas: [
        {
          title: "Personal Context",
          desc: "Design around individual goals, energy, and routines.",
          tone: "tone-blue",
        },
        {
          title: "AI Assistance",
          desc: "Use AI to summarize behavior and suggest practical next steps.",
          tone: "tone-teal",
        },
        {
          title: "Data Analysis",
          desc: "Turn raw daily logs into trend-level clarity.",
          tone: "tone-violet",
        },
        {
          title: "Daily Life Loop",
          desc: "Make records simple enough to sustain every day.",
          tone: "tone-amber",
        },
      ],
    },
    products: {
      title: "Product Portfolio",
      subtitle:
        "Current and future products under MyTrack, all aligned with one philosophy for personal AI and data insight.",
      openCta: "Open product",
      domainsTitle: "Core product domains",
      domains: [
        {
          title: "Life Logging",
          desc: "Capture daily events with low friction and clear structure.",
          tone: "tone-blue",
        },
        {
          title: "Personal AI",
          desc: "Context-aware suggestions that stay understandable and actionable.",
          tone: "tone-teal",
        },
        {
          title: "Behavior Analytics",
          desc: "Weekly and monthly pattern analysis for better decisions.",
          tone: "tone-violet",
        },
      ],
    },
    philosophy: {
      title: "Product Philosophy",
      subtitle: "AI meets your data, with privacy and clarity.",
      principles: [
        {
          title: "AI meets your data",
          desc: "Use AI to transform raw daily records into understandable, meaningful insights.",
          tone: "tone-blue",
        },
        {
          title: "Privacy by design",
          desc: "Protect user control by minimizing collection and avoiding invasive defaults.",
          tone: "tone-teal",
        },
        {
          title: "Smart tracking, simple living",
          desc: "Keep workflows light so people can sustain better habits in real daily life.",
          tone: "tone-violet",
        },
      ],
      workflowTitle: "How philosophy becomes product",
      workflowSteps: [
        {
          title: "Start from real daily behavior",
          desc: "Observe how people actually record, reflect, and decide in daily life.",
        },
        {
          title: "Build the smallest useful loop",
          desc: "Ship a simple capture → insight → action cycle before adding complexity.",
        },
        {
          title: "Scale with AI + analytics",
          desc: "Add intelligence only when it improves clarity, confidence, and actionability.",
        },
      ],
    },
    about: {
      title: "About MyTrack",
      subtitle: "Smart tracking, simple living",
      brand: {
        intro:
          "MyTrack is a personal brand dedicated to building AI-powered products and services that help individuals transform their daily data into clear, meaningful insights.",
        vision:
          "In an era of data abundance, everyone deserves to understand their own patterns and make informed decisions, without trading away their privacy.",
      },
      founder: {
        greeting: "Hi, I'm Ray",
        role: "Senior Full-Stack Engineer",
        experience: "10+ years in mobile & web development",
        signature: "Strong individual execution with full-stack capability for AI application development.",
      },
      principles: {
        heading: "Core Principles",
        items: [
          {
            title: "Minimal Design",
            desc: "Less noise, more clarity. Great tools should blend into your life, not complicate it.",
            tone: "tone-blue",
          },
          {
            title: "Privacy First",
            desc: "Your data stays yours. We never sell, share, or monetise your personal information.",
            tone: "tone-teal",
          },
          {
            title: "AI with Purpose",
            desc: "Intelligent tools that enhance understanding, not replace human judgment.",
            tone: "tone-violet",
          },
        ],
      },
    },
    contact: {
      heading: "HAVE SOMETHING TO SAY?",
      emailLabel: "Send us an email",
      email: "lilei7684@gmail.com",
    },
    footer: {
      copyright: "© 2026 MyTrack",
      author: "@ray",
    },
    common: {
      subproductName: "iTrackDaily",
      subproductUrlLabel: "daily.mytrack.club",
    },
  },
  zh: {
    brand: {
      name: "MyTrack",
      subName: "个人产品品牌",
      nav: {
        features: "特性",
        products: "产品",
        philosophy: "理念",
        about: "关于",
        contact: "联系",
      },
      heroBadge: "AI 遇见你的生活，每天都能帮上你。",
      heroTitleA: "智能追踪，",
      heroTitleB: "简单生活",
      heroSubtitle:
        "通过 AI 驱动的产品和服务赋能个人，将日常数据转化为有意义的洞察，因为你的隐私很重要。",
      heroPrimaryCta: "体验 iTrackDaily",
      heroSecondaryCta: "了解更多",
      tagline: "AI 遇见你的生活，每天都能帮上你。",
    },
    home: {
      focusTitle: "从日常数据到有意义洞察",
      focusAreas: [
        {
          title: "个人语境",
          desc: "围绕个体目标、精力状态与真实习惯设计。",
          tone: "tone-blue",
        },
        {
          title: "AI 助手",
          desc: "用 AI 提炼行为信息并给出可执行建议。",
          tone: "tone-teal",
        },
        {
          title: "数据分析",
          desc: "把日常记录转成趋势层面的清晰反馈。",
          tone: "tone-violet",
        },
        {
          title: "日常闭环",
          desc: "让记录足够轻量，才能每天持续发生。",
          tone: "tone-amber",
        },
      ],
    },
    products: {
      title: "产品矩阵",
      subtitle: "MyTrack 旗下当前与未来产品，统一服务个人 AI 与数据洞察场景。",
      openCta: "进入产品",
      domainsTitle: "核心产品域",
      domains: [
        {
          title: "生活记录",
          desc: "以低负担方式记录日常并形成结构化信息。",
          tone: "tone-blue",
        },
        {
          title: "个人 AI",
          desc: "结合语境给出可理解、可执行的建议。",
          tone: "tone-teal",
        },
        {
          title: "行为分析",
          desc: "提供周/月趋势分析，支持更好决策。",
          tone: "tone-violet",
        },
      ],
    },
    philosophy: {
      title: "产品理念",
      subtitle: "AI 与你的数据相遇，同时保持隐私与清晰。",
      principles: [
        {
          title: "AI 与你的数据相遇",
          desc: "用 AI 把原始日常记录转化为可理解、有意义的洞察。",
          tone: "tone-blue",
        },
        {
          title: "隐私优先，设计内建",
          desc: "最小化不必要采集，避免侵入式默认设置，保证用户数据控制权。",
          tone: "tone-teal",
        },
        {
          title: "智能追踪，简单生活",
          desc: "保持流程轻量，让用户在真实日常中持续获得进展反馈。",
          tone: "tone-violet",
        },
      ],
      workflowTitle: "理念如何落地为产品",
      workflowSteps: [
        {
          title: "从真实日常行为出发",
          desc: "先理解用户如何记录、复盘和做决策，再定义产品起点。",
        },
        {
          title: "先做最小可用闭环",
          desc: "优先打通记录 → 洞察 → 行动的最短路径，再扩展功能。",
        },
        {
          title: "再引入 AI 与分析能力",
          desc: "只有当 AI/分析能提升清晰度与可执行性时才增加复杂度。",
        },
      ],
    },
    about: {
      title: "关于 MyTrack",
      subtitle: "智能记录，简单生活",
      brand: {
        intro:
          "MyTrack 是一个个人品牌，致力于打造 AI 驱动的产品和服务，帮助个人将日常数据转化为清晰、有意义的洞察。",
        vision:
          "在数据爆炸的时代，每个人都值得理解自己的行为模式，并在不牺牲隐私的前提下做出更明智的决策。",
      },
      founder: {
        greeting: "你好，我是 Ray",
        role: "高级全栈工程师",
        experience: "10+ 年移动端与 Web 开发经验",
        signature: "具备超强个人战斗力，能够独立完成 AI 应用的全栈开发。",
      },
      principles: {
        heading: "核心原则",
        items: [
          {
            title: "极简设计",
            desc: "更少噪音，更高清晰度。好的工具应融入生活，而不是增加复杂度。",
            tone: "tone-blue",
          },
          {
            title: "隐私优先",
            desc: "你的数据属于你。我们不会出售、分享或变现你的个人信息。",
            tone: "tone-teal",
          },
          {
            title: "有目的的 AI",
            desc: "AI 的价值是增强理解，而不是替代人的判断。",
            tone: "tone-violet",
          },
        ],
      },
    },
    contact: {
      heading: "有什么想说的？",
      emailLabel: "发送邮件给我们",
      email: "lilei7684@gmail.com",
    },
    footer: {
      copyright: "© 2026 MyTrack",
      author: "@ray",
    },
    common: {
      subproductName: "iTrackDaily",
      subproductUrlLabel: "daily.mytrack.club",
    },
  },
} as const;

export const productCatalog: Record<Locale, ProductSummary[]> = {
  en: [
    {
      slug: "itrackdaily",
      name: "iTrackDaily",
      oneLiner: "Track life privately. Understand progress instantly.",
      summary:
        "The first MyTrack subproduct, focused on private daily tracking and instant progress awareness.",
      audience: "Personal users",
      highlights: ["Private by default", "Simple calendar flow", "Weekly clarity"],
      ctaLabel: "Open iTrackDaily",
      externalUrl: SUBPRODUCT_URL,
      status: "Live",
    },
  ],
  zh: [
    {
      slug: "itrackdaily",
      name: "iTrackDaily",
      oneLiner: "Track life privately. Understand progress instantly.",
      summary: "MyTrack 第一个子产品，聚焦私密日常记录与即时进展反馈。",
      audience: "个人用户",
      highlights: ["默认隐私优先", "简洁日历流程", "每周清晰反馈"],
      ctaLabel: "打开 iTrackDaily",
      externalUrl: SUBPRODUCT_URL,
      status: "已上线",
    },
  ],
};

export const dashboardUrl = SUBPRODUCT_URL;
