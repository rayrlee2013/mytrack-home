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
      heroTitleA: "Smart tracking,",
      heroTitleB: "simple living",
      heroSubtitle:
        "AI-powered tools that turn your everyday moments into clear self-understanding — while keeping your data entirely yours.",
      heroHighlights: [
        "AI-driven personal insights",
        "Privacy you can trust",
        "Built for real daily life",
      ],
    },
    home: {
      focusTitle: "Four pillars of a better daily loop",
      focusAreas: [
        {
          title: "Personal Context",
          desc: "Design around individual goals, energy, and routines.",
          tone: "tone-blue",
        },
        {
          title: "AI Assistance",
          desc: "Summarize behavior and surface practical next steps automatically.",
          tone: "tone-teal",
        },
        {
          title: "Data Clarity",
          desc: "Transform raw logs into trend-level understanding you can act on.",
          tone: "tone-violet",
        },
        {
          title: "Effortless Habit",
          desc: "Keep the recording friction so low it becomes second nature.",
          tone: "tone-amber",
        },
      ],
    },
    products: {
      title: "Products",
      subtitle:
        "Tools built under one roof, each solving a real piece of the personal data puzzle.",
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
      title: "Why We Build This Way",
      subtitle: "Principles that shape every product decision.",
      principles: [
        {
          title: "Intelligence that serves you",
          desc: "AI should clarify, not complicate. Every insight must be explainable and worth your attention.",
          tone: "tone-blue",
        },
        {
          title: "Your data, your rules",
          desc: "Minimal collection, no invasive defaults, no monetisation of personal information — ever.",
          tone: "tone-teal",
        },
        {
          title: "Light enough to last",
          desc: "If a workflow can't survive a busy Tuesday morning, it isn't ready to ship.",
          tone: "tone-violet",
        },
      ],
      workflowTitle: "From idea to product",
      workflowSteps: [
        {
          title: "Observe real behavior",
          desc: "Understand how people actually record, reflect, and decide day-to-day.",
        },
        {
          title: "Ship the smallest loop",
          desc: "Deliver a capture → insight → action cycle before adding any complexity.",
        },
        {
          title: "Add intelligence gradually",
          desc: "Introduce AI and analytics only when they measurably improve clarity.",
        },
      ],
    },
    about: {
      title: "About MyTrack",
      subtitle: "A one-person studio with a full-stack mindset",
      brand: {
        intro:
          "MyTrack is a personal product studio born from a simple belief: the data you generate every day holds patterns that can genuinely improve your life — if the right tools exist to surface them.",
        vision:
          "Most personal-data tools demand too much input and return too little understanding. We set out to reverse that equation: minimal effort in, maximum clarity out.",
        approach:
          "Each product starts from a real daily friction, not a feature list. We prototype with live behavior, validate with measurable outcomes, and only add complexity when it earns its place.",
        mission:
          "Close the gap between raw personal data and actionable self-understanding, so that better habits, decisions, and well-being become natural outcomes of daily life.",
      },
      founder: {
        greeting: "Hi, I'm Ray",
        role: "Senior Full-Stack Engineer",
        experience: "10+ years in mobile & web development",
        signature:
          "I build end-to-end products across frontend, backend, cloud infrastructure, and AI systems — with a strong focus on performance, maintainability, and user experience.",
        highlights: [
          "Deep expertise in AI, computer vision, and autonomous driving systems",
          "Built production-scale solutions serving millions of users",
          "Now channeling that experience into privacy-first everyday tools",
        ],
      },
      principles: {
        heading: "What We Value",
        items: [
          {
            title: "Calm Interfaces",
            desc: "Reduce visual noise to the minimum. The best tool is the one you barely notice using.",
            tone: "tone-blue",
          },
          {
            title: "Honest Data Practice",
            desc: "Collect only what's needed, explain why, and never share it without explicit consent.",
            tone: "tone-teal",
          },
          {
            title: "Purposeful Automation",
            desc: "Automate the tedious, but leave the meaningful decisions to the person who owns the data.",
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
      heroTitleA: "智能追踪，",
      heroTitleB: "简单生活",
      heroSubtitle:
        "用 AI 驱动的工具，把你的日常碎片变成清晰的自我认知——同时让数据完全属于你自己。",
      heroHighlights: [
        "AI 驱动的个人洞察",
        "值得信赖的隐私保护",
        "为真实日常而生",
      ],
    },
    home: {
      focusTitle: "日常闭环的四个支柱",
      focusAreas: [
        {
          title: "个人语境",
          desc: "围绕个体目标、精力状态与真实习惯设计。",
          tone: "tone-blue",
        },
        {
          title: "AI 助手",
          desc: "自动提炼行为信息并给出可执行的下一步建议。",
          tone: "tone-teal",
        },
        {
          title: "数据清晰度",
          desc: "把原始记录转成可行动的趋势层面反馈。",
          tone: "tone-violet",
        },
        {
          title: "无感习惯",
          desc: "让记录负担低到像呼吸一样自然。",
          tone: "tone-amber",
        },
      ],
    },
    products: {
      title: "产品",
      subtitle: "同一屋檐下的工具，每一个都在解决个人数据拼图中的真实问题。",
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
      title: "为什么这样做产品",
      subtitle: "影响每一个产品决策的原则。",
      principles: [
        {
          title: "为你服务的智能",
          desc: "AI 应该带来清晰而非复杂，每条洞察都必须可解释、值得你关注。",
          tone: "tone-blue",
        },
        {
          title: "你的数据，你做主",
          desc: "最小化采集，不设侵入式默认，永远不变现个人信息。",
          tone: "tone-teal",
        },
        {
          title: "轻到可以持续",
          desc: "如果一个流程扛不住忙碌的周二早晨，它还没准备好上线。",
          tone: "tone-violet",
        },
      ],
      workflowTitle: "从想法到产品",
      workflowSteps: [
        {
          title: "观察真实行为",
          desc: "先理解用户如何记录、复盘和做决策。",
        },
        {
          title: "交付最小闭环",
          desc: "打通记录 → 洞察 → 行动的最短路径，再扩展功能。",
        },
        {
          title: "渐进引入智能",
          desc: "只有当 AI 和分析能可度量地提升清晰度时才增加复杂度。",
        },
      ],
    },
    about: {
      title: "关于 MyTrack",
      subtitle: "一个人的工作室，全栈的思维方式",
      brand: {
        intro:
          "MyTrack 源自一个简单的信念：你每天产生的数据中隐藏着能真正改善生活的规律——只要有合适的工具把它们呈现出来。",
        vision:
          "大多数个人数据工具要求太多输入，却回报太少理解。我们要翻转这个等式：最少的投入，最大的清晰度。",
        approach:
          "每个产品都从一个真实的日常摩擦点出发，而不是功能清单。我们用真实行为做原型，用可度量的结果做验证，只有复杂度「值得」时才引入。",
        mission:
          "弥合原始个人数据与可执行自我认知之间的鸿沟，让更好的习惯、决策和身心状态成为日常生活的自然结果。",
      },
      founder: {
        greeting: "你好，我是 Ray",
        role: "高级全栈工程师",
        experience: "10+ 年移动端与 Web 开发经验",
        signature:
          "长期在前端、后端、云基础设施与 AI 系统之间协同构建端到端产品，重点关注性能、可维护性与用户体验。",
        highlights: [
          "在 AI、计算机视觉与自动驾驶系统方向有深度经验",
          "构建过服务数百万用户的生产级解决方案",
          "现在将经验投入到打造隐私优先的日常工具中",
        ],
      },
      principles: {
        heading: "我们看重什么",
        items: [
          {
            title: "克制的界面",
            desc: "把视觉噪音降到最低。最好的工具是你几乎感觉不到在用的那个。",
            tone: "tone-blue",
          },
          {
            title: "诚实的数据实践",
            desc: "只采集必要的，说明原因，未经明确同意绝不分享。",
            tone: "tone-teal",
          },
          {
            title: "有目的的自动化",
            desc: "把繁琐的事交给机器，把有意义的决定留给数据的主人。",
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
