import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Sparkles } from "lucide-react";
import AboutPage from "@/pages/About";
import FeaturesPage from "@/pages/Features";
import ProductPage from "@/pages/Products";
import ContactPage from "@/pages/Contact";

type Locale = "en" | "zh";

function Hero({ locale }: { locale: Locale }) {
  return (
    <div className="relative flex-1 flex flex-col items-center justify-center px-4 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Glowing orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-400/20 rounded-full blur-3xl animate-float" />
        <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-indigo-400/20 rounded-full blur-2xl animate-pulse-glow" style={{ animationDelay: "1s" }} />
        <div className="absolute bottom-1/4 left-1/3 w-40 h-40 bg-cyan-400/15 rounded-full blur-xl animate-float" style={{ animationDelay: "2s" }} />
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-50" />

      {/* Abstract AI/Data elements as background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Data dots scattered */}
        <div className="absolute top-[20%] left-[15%] w-1 h-1 bg-blue-400/60 rounded-full animate-pulse" />
        <div className="absolute top-[25%] left-[18%] w-1.5 h-1.5 bg-blue-400/40 rounded-full animate-pulse" style={{ animationDelay: "0.3s" }} />
        <div className="absolute top-[18%] left-[12%] w-1 h-1 bg-blue-400/50 rounded-full animate-pulse" style={{ animationDelay: "0.6s" }} />

        <div className="absolute top-[30%] right-[12%] w-1 h-1 bg-indigo-400/60 rounded-full animate-pulse" style={{ animationDelay: "0.2s" }} />
        <div className="absolute top-[35%] right-[18%] w-1.5 h-1.5 bg-indigo-400/40 rounded-full animate-pulse" style={{ animationDelay: "0.5s" }} />
        <div className="absolute top-[28%] right-[15%] w-1 h-1 bg-indigo-400/50 rounded-full animate-pulse" style={{ animationDelay: "0.8s" }} />

        <div className="absolute bottom-[35%] left-[20%] w-1 h-1 bg-cyan-400/60 rounded-full animate-pulse" style={{ animationDelay: "0.4s" }} />
        <div className="absolute bottom-[40%] left-[25%] w-1.5 h-1.5 bg-cyan-400/40 rounded-full animate-pulse" style={{ animationDelay: "0.7s" }} />
        <div className="absolute bottom-[32%] left-[17%] w-1 h-1 bg-cyan-400/50 rounded-full animate-pulse" style={{ animationDelay: "1s" }} />

        <div className="absolute bottom-[25%] right-[25%] w-1 h-1 bg-blue-400/60 rounded-full animate-pulse" style={{ animationDelay: "0.9s" }} />
        <div className="absolute bottom-[20%] right-[20%] w-1.5 h-1.5 bg-indigo-400/40 rounded-full animate-pulse" style={{ animationDelay: "1.2s" }} />

        {/* Abstract lines */}
        <svg className="absolute inset-0 w-full h-full opacity-30">
          <path
            d="M10% 30% Q 25% 35%, 40% 30%"
            fill="none"
            stroke="url(#gradient1)"
            strokeWidth="0.5"
            className="animate-pulse"
          />
          <path
            d="M60% 25% Q 75% 30%, 90% 25%"
            fill="none"
            stroke="url(#gradient2)"
            strokeWidth="0.5"
            className="animate-pulse"
            style={{ animationDelay: "0.5s" }}
          />
          <path
            d="M15% 70% Q 30% 65%, 45% 70%"
            fill="none"
            stroke="url(#gradient3)"
            strokeWidth="0.5"
            className="animate-pulse"
            style={{ animationDelay: "1s" }}
          />
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#60a5fa" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#818cf8" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#818cf8" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#22d3ee" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>

        {/* Floating particles */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-0.5 h-0.5 bg-white/40 rounded-full animate-float"
            style={{
              left: `${15 + Math.random() * 70}%`,
              top: `${20 + Math.random() * 60}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${4 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-2xl">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm border border-gray-200 dark:border-gray-700 mb-8 animate-fade-in">
          <Sparkles className="w-4 h-4 text-blue-600" />
          <span className="text-sm text-gray-600 dark:text-gray-300">
            {locale === "en" ? "AI meets your data" : "AI 与你的数据相遇"}
          </span>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4 leading-tight animate-slide-up">
          {locale === "en" ? (
            <>
              Smart tracking,<br />
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                simple living
              </span>
            </>
          ) : (
            "智能记录，简单生活"
          )}
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-xl mx-auto leading-relaxed animate-slide-up" style={{ animationDelay: "0.1s" }}>
          {locale === "en"
            ? "Empowering individuals through AI-powered products and services, turning daily data into meaningful insights, because your privacy matters."
            : "通过 AI 驱动的产品和服务赋能个人，将日常数据转化为有意义的洞察，因为您的隐私至关重要。"}
        </p>
      </div>
    </div>
  );
}

function Home({ locale }: { locale: Locale }) {
  return (
    <div className="min-h-screen flex flex-col pt-14">
      <Hero locale={locale} />
      <Footer />
    </div>
  );
}

export default function App() {
  const [locale, setLocale] = useState<Locale>("en");

  return (
    <BrowserRouter>
      <Navbar locale={locale} onLocaleChange={setLocale} />
      <Routes>
        <Route path="/" element={<Home locale={locale} />} />
        <Route path="/products" element={<ProductPage locale={locale} />} />
        <Route path="/features" element={<FeaturesPage locale={locale} />} />
        <Route path="/about" element={<AboutPage locale={locale} />} />
        <Route path="/contact" element={<ContactPage locale={locale} />} />
      </Routes>
    </BrowserRouter>
  );
}
