import { Link } from "react-router-dom";
import { Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-gray-100 dark:border-gray-800 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-center gap-2 text-xs text-gray-400">
        <Link
          to="/contact"
          className="flex items-center gap-1 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
        >
          <Mail className="w-3 h-3" />
          Contact
        </Link>
        <span>·</span>
        <span>© 2026 MyTrack. All rights reserved.</span>
      </div>
    </footer>
  );
}
