import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import HomePage from "@/pages/Home";
import { type Locale } from "@/content/siteContent";

export default function App() {
  const locale: Locale = "en";

  return (
    <BrowserRouter>
      <Navbar locale={locale} />
      <Routes>
        <Route path="/" element={<HomePage locale={locale} />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
