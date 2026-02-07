import { useState } from "react";
import { Footer } from "@/components/layout/Footer";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";

const WEBHOOK_URL = "https://discord.com/api/webhooks/1425707156161691660/dsEnk_Xrafr1DOWJe_nl3R52tZujy5uSwp5xGeHb6U3wqItocJ-d_YG9cFdJmpyDGb3e";

type Locale = "en" | "zh";

const content = {
  en: {
    title: "Contact",
    name: "Your Name",
    email: "Email",
    message: "Message",
    placeholder: {
      name: "Enter your name",
      email: "Enter your email",
      message: "Write your message...",
    },
    submit: "Send Message",
    sending: "Sending...",
    success: "Message sent successfully!",
    error: "Failed to send message. Please try again.",
    emailError: "Please enter a valid email address",
  },
  zh: {
    title: "联系我们",
    name: "您的姓名",
    email: "邮箱",
    message: "内容",
    placeholder: {
      name: "请输入姓名",
      email: "请输入邮箱",
      message: "请输入内容...",
    },
    submit: "发送消息",
    sending: "发送中...",
    success: "消息发送成功！",
    error: "发送失败，请重试。",
    emailError: "请输入有效的邮箱地址",
  },
};

function ContactPage({ locale }: { locale: Locale }) {
  const t = content[locale as keyof typeof content];
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [emailError, setEmailError] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleEmailChange = (value: string) => {
    setFormData({ ...formData, email: value });
    if (value && !validateEmail(value)) {
      setEmailError(t.emailError);
    } else {
      setEmailError("");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateEmail(formData.email)) {
      setEmailError(t.emailError);
      return;
    }

    setStatus("sending");

    try {
      const response = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          content: `**新消息**\n\n**姓名**: ${formData.name}\n**邮箱**: ${formData.email}\n\n**内容**:\n${formData.message}`,
          username: "MyTrack Contact",
        }),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="min-h-screen flex flex-col pt-14">
      <div className="flex-1 px-4 py-16">
        <div className="max-w-xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3">
              {t.title}
            </h1>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                {t.name}
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder={t.placeholder.name}
                required
                className="w-full px-4 py-3 rounded-xl bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 focus:border-blue-400 focus:outline-none transition-colors"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                {t.email}
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => handleEmailChange(e.target.value)}
                placeholder={t.placeholder.email}
                required
                className={`w-full px-4 py-3 rounded-xl bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm border transition-colors ${
                  emailError
                    ? "border-red-400 focus:border-red-400"
                    : "border-gray-200/50 dark:border-gray-700/50 focus:border-blue-400"
                }`}
              />
              {emailError && (
                <p className="mt-1 text-sm text-red-500">{emailError}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                {t.message}
              </label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder={t.placeholder.message}
                required
                rows={5}
                className="w-full px-4 py-3 rounded-xl bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 focus:border-blue-400 focus:outline-none transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending" || status === "success" || !!emailError}
              className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-medium rounded-xl hover:opacity-90 transition-opacity disabled:opacity-50"
            >
              {status === "sending" ? (
                <>
                  <span className="animate-spin">⏳</span>
                  {t.sending}
                </>
              ) : status === "success" ? (
                <>
                  <CheckCircle2 className="w-4 h-4" />
                  {t.success}
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  {t.submit}
                </>
              )}
            </button>

            {status === "error" && (
              <div className="flex items-center justify-center gap-2 text-red-500 text-sm">
                <AlertCircle className="w-4 h-4" />
                {t.error}
              </div>
            )}
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ContactPage;
