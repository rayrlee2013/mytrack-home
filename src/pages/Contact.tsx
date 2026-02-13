import { useState } from "react";
import { AlertCircle, CheckCircle2, Send } from "lucide-react";
import { Footer } from "@/components/layout/Footer";
import { type Locale, siteContent } from "@/content/siteContent";

const WEBHOOK_URL =
  "https://discord.com/api/webhooks/1425707156161691660/dsEnk_Xrafr1DOWJe_nl3R52tZujy5uSwp5xGeHb6U3wqItocJ-d_YG9cFdJmpyDGb3e";

export default function ContactPage({ locale }: { locale: Locale }) {
  const t = siteContent[locale].contact;
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [emailError, setEmailError] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const validateEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const onEmailChange = (value: string) => {
    setFormData((prev) => ({ ...prev, email: value }));
    setEmailError(value && !validateEmail(value) ? t.emailError : "");
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

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
          content: `**MyTrack Contact**\n\n**Name**: ${formData.name}\n**Email**: ${formData.email}\n\n**Message**:\n${formData.message}`,
          username: "MyTrack Contact",
        }),
      });

      if (!response.ok) {
        setStatus("error");
        return;
      }

      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setEmailError("");
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="min-h-screen flex flex-col page-shell pt-16">
      <main className="flex-1 site-container section-shell">
        <header className="max-w-3xl animate-rise">
          <h1 className="text-display text-5xl font-semibold text-slate-900">{t.title}</h1>
          <p className="mt-4 text-lg text-[var(--brand-muted)]">{t.subtitle}</p>
        </header>

        <form onSubmit={onSubmit} className="mt-8 surface-card p-6 md:p-7 space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1.5">{t.name}</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
              placeholder={t.placeholder.name}
              required
              className="w-full rounded-xl border border-slate-200 bg-white/90 px-4 py-3 text-sm focus:border-[#1086d2] focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1.5">{t.email}</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => onEmailChange(e.target.value)}
              placeholder={t.placeholder.email}
              required
              className={`w-full rounded-xl border bg-white/90 px-4 py-3 text-sm focus:outline-none ${
                emailError ? "border-rose-300 focus:border-rose-500" : "border-slate-200 focus:border-[#1086d2]"
              }`}
            />
            {emailError && <p className="mt-1 text-xs text-rose-600">{emailError}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1.5">{t.message}</label>
            <textarea
              value={formData.message}
              onChange={(e) => setFormData((prev) => ({ ...prev, message: e.target.value }))}
              placeholder={t.placeholder.message}
              rows={6}
              required
              className="w-full rounded-xl border border-slate-200 bg-white/90 px-4 py-3 text-sm resize-none focus:border-[#1086d2] focus:outline-none"
            />
          </div>

          <button
            type="submit"
            disabled={status === "sending" || status === "success" || Boolean(emailError)}
            className="w-full inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold btn-primary disabled:cursor-not-allowed disabled:opacity-60"
          >
            {status === "sending" ? (
              <>
                <span className="w-4 h-4 rounded-full border-2 border-white/70 border-t-transparent animate-spin" />
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
            <div className="inline-flex items-center gap-1.5 text-sm text-rose-600">
              <AlertCircle className="w-4 h-4" />
              {t.error}
            </div>
          )}
        </form>
      </main>
      <Footer locale={locale} />
    </div>
  );
}
