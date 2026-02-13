import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import HomePage from "@/pages/Home";
import ProductsPage from "@/pages/Products";
import PhilosophyPage from "@/pages/HowItWorks";
import AboutPage from "@/pages/About";
import ContactPage from "@/pages/Contact";
import { type Locale } from "@/content/siteContent";

export default function App() {
  const locale: Locale = "en";

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage locale={locale} />} />
        <Route path="/products" element={<ProductsPage locale={locale} />} />
        <Route path="/philosophy" element={<PhilosophyPage locale={locale} />} />
        <Route path="/about" element={<AboutPage locale={locale} />} />
        <Route path="/contact" element={<ContactPage locale={locale} />} />

        <Route path="/how-it-works" element={<Navigate to="/philosophy" replace />} />
        <Route path="/features" element={<Navigate to="/philosophy" replace />} />
        <Route path="/products/:slug" element={<Navigate to="/products" replace />} />
        <Route path="/privacy" element={<Navigate to="/about" replace />} />
        <Route path="/terms" element={<Navigate to="/about" replace />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
