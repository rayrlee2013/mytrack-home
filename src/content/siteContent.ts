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
        home: "Home",
        products: "Products",
        philosophy: "Philosophy",
        about: "About",
        contact: "Contact",
      },
      localeLabel: "Language",
      subproductCta: "Open iTrackDaily",
      heroBadge: "AI meets your life, helps every day.",
      heroTitleA: "Smart tracking,",
      heroTitleB: "simple living",
      heroSubtitle:
        "Empowering individuals through AI-powered products and services, turning daily data into meaningful insights, because your privacy matters.",
      heroPrimaryCta: "Try iTrackDaily",
      heroSecondaryCta: "Read philosophy",
      tagline: "AI meets your life, helps every day.",
    },
    home: {
      stats: [
        { value: "1", label: "Live subproduct" },
        { value: "4", label: "Core domains" },
        { value: "100%", label: "Privacy-first direction" },
      ],
      chips: ["Personal tools", "AI assistance", "Data analytics", "Daily records"],
      panel: {
        title: "SUBPRODUCT SNAPSHOT",
        subtitle: "iTrackDaily",
        desc: "MyTrack's first subproduct focused on private daily records and clear progress insights.",
        highlights: [
          "AI-powered daily assistance",
          "Meaningful progress insights",
          "Privacy-first by design",
        ],
        cta: "Visit daily.mytrack.club",
      },
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
      useCaseTitle: "How this philosophy works in daily life",
      useCases: [
        "Track routines and habits without complexity",
        "Review mood, health, and productivity patterns",
        "Get AI-assisted summaries for weekly reflection",
        "Make better decisions with privacy-preserving data insights",
      ],
      finalTitle: "AI meets your data, privately",
      finalDesc:
        "MyTrack builds AI-powered products and services that transform daily data into clear, meaningful insights while keeping your privacy at the center.",
      finalCta: "Explore all products",
    },
    products: {
      title: "Product Portfolio",
      subtitle:
        "Current and future products under MyTrack, all aligned with one philosophy for personal AI and data insight.",
      detailCta: "Why this product",
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
      roadmapTitle: "Next product direction",
      roadmapItems: [
        "Private personal insight tools",
        "Low-friction interfaces for daily usage",
        "Actionable analytics with warm UX",
      ],
    },
    philosophy: {
      title: "Product Philosophy",
      subtitle: "AI meets your data, with privacy and clarity.",
      statement:
        "MyTrack exists to empower individuals through AI-powered products and services, turning daily data into meaningful insights while keeping privacy at the center.",
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
      guardrailsTitle: "Design and engineering guardrails",
      doTitle: "Always do",
      dos: [
        "Keep interfaces calm, readable, and predictable",
        "Use AI outputs that are explainable and actionable",
        "Prioritize user-owned data and privacy defaults",
        "Iterate with measurable behavior outcomes",
      ],
      dontTitle: "Never optimize for",
      donts: [
        "Feature volume over user clarity",
        "Dark patterns or attention traps",
        "Data collection without clear user value",
        "Complex workflows that break daily consistency",
      ],
      cta: "Open iTrackDaily",
    },
    about: {
      title: "About MyTrack",
      subtitle: "Smart tracking, simple living",
      brand: {
        heading: "About MyTrack",
        intro:
          "MyTrack is a personal brand dedicated to building AI-powered products and services that help individuals transform their daily data into clear, meaningful insights.",
        vision:
          "In an era of data abundance, everyone deserves to understand their own patterns and make informed decisions, without trading away their privacy.",
        approach:
          "Every product under MyTrack follows a simple philosophy: powerful AI should be accessible, private by design, and a joy to use every single day.",
      },
      founder: {
        heading: "Meet the Founder",
        greeting: "Hi, I'm Ray",
        role: "Senior Full-Stack Engineer",
        experience: "10+ years in mobile & web development",
        signature: "Strong individual execution with full-stack capability for AI application development.",
        bio:
          "I build scalable products across frontend, backend, cloud, and engineering systems with a strong focus on performance and maintainability.",
        highlights: [
          "Deep expertise in AI, computer vision, and autonomous driving systems",
          "Built production-scale solutions serving millions of users",
          "Now channeling that experience into creating everyday tools that respect your privacy",
        ],
        cycleHeading: "End-to-End Product Cycle Capability",
        cycleStages: [
          {
            title: "1. Discover",
            desc: "Translate user pain points and behavioral data into a clear product opportunity.",
          },
          {
            title: "2. Define",
            desc: "Set product direction, success metrics, and a focused roadmap.",
          },
          {
            title: "3. Design",
            desc: "Craft UX flows and interaction systems that stay simple and practical in daily use.",
          },
          {
            title: "4. Build",
            desc: "Implement full-stack architecture from frontend experience to backend services.",
          },
          {
            title: "5. Launch",
            desc: "Ship production-ready releases with quality gates, monitoring, and feedback loops.",
          },
          {
            title: "6. Iterate",
            desc: "Continuously improve the product through real usage insights and measurable outcomes.",
          },
        ],
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
      title: "Contact",
      subtitle: "Feedback, collaboration, or product ideas",
      name: "Your Name",
      email: "Email",
      message: "Message",
      placeholder: {
        name: "Enter your name",
        email: "Enter your email",
        message: "Write your message",
      },
      submit: "Send message",
      sending: "Sending...",
      success: "Message sent successfully.",
      error: "Failed to send message. Please try again.",
      emailError: "Please enter a valid email address.",
    },
    footer: {
      sentence: "MyTrack: personal brand for future product development.",
      copyright: "© 2026 MyTrack.",
      products: "Products",
      philosophy: "Philosophy",
      contact: "Contact",
    },
    common: {
      backHome: "Back home",
      subproductName: "iTrackDaily",
      subproductUrlLabel: "daily.mytrack.club",
    },
  },
  zh: {
    brand: {
      name: "MyTrack",
      subName: "个人产品品牌",
      nav: {
        home: "首页",
        products: "产品",
        philosophy: "理念",
        about: "关于",
        contact: "联系",
      },
      localeLabel: "语言",
      subproductCta: "打开 iTrackDaily",
      heroBadge: "AI 遇见你的生活，每天都能帮上你。",
      heroTitleA: "智能追踪，",
      heroTitleB: "简单生活",
      heroSubtitle:
        "通过 AI 驱动的产品和服务赋能个人，将日常数据转化为有意义的洞察，因为你的隐私很重要。",
      heroPrimaryCta: "体验 iTrackDaily",
      heroSecondaryCta: "查看产品理念",
      tagline: "AI 遇见你的生活，每天都能帮上你。",
    },
    home: {
      stats: [
        { value: "1", label: "已上线子产品" },
        { value: "4", label: "核心方向" },
        { value: "100%", label: "隐私优先方向" },
      ],
      chips: ["个人工具", "AI 助手", "数据分析", "日常记录"],
      panel: {
        title: "子产品快照",
        subtitle: "iTrackDaily",
        desc: "MyTrack 的首个子产品，聚焦私密日常记录与清晰进展洞察。",
        highlights: [
          "AI 驱动的日常辅助",
          "有意义的进展洞察",
          "默认隐私优先",
        ],
        cta: "访问 daily.mytrack.club",
      },
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
      useCaseTitle: "这套理念如何落地到日常",
      useCases: [
        "低负担记录习惯与日常节律",
        "复盘健康、情绪与效率模式",
        "用 AI 做每周总结与反思",
        "在隐私前提下获得可执行的数据洞察",
      ],
      finalTitle: "AI 与你的数据相遇，同时守住隐私",
      finalDesc:
        "MyTrack 持续打造 AI 驱动的产品与服务，让日常数据转化为清晰、有意义的洞察，同时把隐私放在中心。",
      finalCta: "查看全部产品",
    },
    products: {
      title: "产品矩阵",
      subtitle: "MyTrack 旗下当前与未来产品，统一服务个人 AI 与数据洞察场景。",
      detailCta: "为什么做这个产品",
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
      roadmapTitle: "下一阶段产品方向",
      roadmapItems: [
        "隐私优先的个人洞察工具",
        "面向日常使用的低负担交互",
        "可执行的数据分析反馈",
      ],
    },
    philosophy: {
      title: "产品理念",
      subtitle: "AI 与你的数据相遇，同时保持隐私与清晰。",
      statement:
        "MyTrack 的目标是通过 AI 驱动的产品与服务赋能个人，把日常数据转化为有意义的洞察，并始终把隐私放在中心。",
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
      guardrailsTitle: "设计与工程约束",
      doTitle: "必须做到",
      dos: [
        "界面克制、清晰、可预期",
        "AI 输出可解释、可执行",
        "隐私优先与数据归属用户",
        "围绕可度量行为结果持续迭代",
      ],
      dontTitle: "避免追求",
      donts: [
        "功能堆叠大于用户清晰度",
        "诱导式交互与注意力陷阱",
        "缺乏价值前提的数据采集",
        "破坏日常连续性的复杂流程",
      ],
      cta: "查看首个子产品",
    },
    about: {
      title: "关于 MyTrack",
      subtitle: "智能记录，简单生活",
      brand: {
        heading: "关于 MyTrack",
        intro:
          "MyTrack 是一个个人品牌，致力于打造 AI 驱动的产品和服务，帮助个人将日常数据转化为清晰、有意义的洞察。",
        vision:
          "在数据爆炸的时代，每个人都值得理解自己的行为模式，并在不牺牲隐私的前提下做出更明智的决策。",
        approach:
          "MyTrack 旗下每个产品都遵循一个简单理念：强大的 AI 应该可访问、隐私优先，并且每天都好用。",
      },
      founder: {
        heading: "认识创始人",
        greeting: "你好，我是 Ray",
        role: "高级全栈工程师",
        experience: "10+ 年移动端与 Web 开发经验",
        signature: "具备超强个人战斗力，能够独立完成 AI 应用的全栈开发。",
        bio:
          "长期在前端、后端、云与工程体系之间协同构建可扩展产品，重点关注性能与可维护性。",
        highlights: [
          "在 AI、计算机视觉与自动驾驶系统方向有深度经验",
          "构建过服务数百万用户的生产级解决方案",
          "现在将经验投入到打造尊重用户隐私的日常工具中",
        ],
        cycleHeading: "完整产品周期能力",
        cycleStages: [
          {
            title: "1. 洞察发现",
            desc: "把用户痛点与行为数据转化为明确的产品机会。",
          },
          {
            title: "2. 产品定义",
            desc: "明确方向、成功指标与可执行路线图。",
          },
          {
            title: "3. 体验设计",
            desc: "设计适合日常使用的简洁流程与交互系统。",
          },
          {
            title: "4. 全栈研发",
            desc: "从前端体验到后端服务，独立完成可落地架构实现。",
          },
          {
            title: "5. 上线交付",
            desc: "以生产级标准完成发布、监控与反馈闭环。",
          },
          {
            title: "6. 持续迭代",
            desc: "基于真实使用数据持续优化，推动结果增长。",
          },
        ],
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
      title: "联系",
      subtitle: "反馈、合作或产品想法",
      name: "姓名",
      email: "邮箱",
      message: "内容",
      placeholder: {
        name: "请输入姓名",
        email: "请输入邮箱",
        message: "请输入内容",
      },
      submit: "发送消息",
      sending: "发送中...",
      success: "消息发送成功。",
      error: "发送失败，请稍后重试。",
      emailError: "请输入有效邮箱地址。",
    },
    footer: {
      sentence: "MyTrack：面向未来产品开发的个人品牌。",
      copyright: "© 2026 MyTrack。",
      products: "产品",
      philosophy: "理念",
      contact: "联系",
    },
    common: {
      backHome: "返回首页",
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
