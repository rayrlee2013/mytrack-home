import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Footer } from "@/components/layout/Footer";
import { type Locale } from "@/content/siteContent";

export default function FeaturesPage({ locale }: { locale: Locale }) {
  return (
    <div className="min-h-screen flex flex-col page-shell pt-20">
      <main className="flex-1 mx-auto w-full max-w-4xl px-4 py-12">
        <div className="brand-glass card-border rounded-3xl p-8 soft-shadow">
          <h1 className="text-3xl font-semibold text-slate-900">Features moved</h1>
          <p className="mt-3 text-slate-600">
            Product capability details are now organized under the products section.
          </p>
          <Link
            to="/products"
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white"
          >
            Go to products
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </main>
      <Footer locale={locale} />
    </div>
  );
}
