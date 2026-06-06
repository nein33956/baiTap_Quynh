import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/", label: "Giới thiệu", end: true },
  { to: "/du-an", label: "Dự án" },
  { to: "/tong-ket", label: "Tổng kết" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 glass">
      <div className="container-x">
        <nav className="flex items-center justify-between py-4">
          <Link to="/" className="flex items-baseline gap-2" onClick={() => setOpen(false)}>
            <span className="grid h-9 w-9 place-items-center rounded-full border border-brand-700 font-display text-lg font-bold text-brand-800">
              P
            </span>
            <span className="font-display text-xl font-semibold tracking-tight text-ink">
              Portfolio <span className="gradient-text">Năng lực số</span>
            </span>
          </Link>

          {/* Desktop links */}
          <ul className="hidden items-center gap-8 md:flex">
            {links.map((l) => (
              <li key={l.to}>
                <NavLink
                  to={l.to}
                  end={l.end}
                  className={({ isActive }) =>
                    `relative text-xs font-semibold uppercase tracking-[0.18em] transition-colors after:absolute after:-bottom-1.5 after:left-0 after:h-px after:bg-brand-700 after:transition-all ${
                      isActive
                        ? "text-brand-800 after:w-full"
                        : "text-ink-muted hover:text-brand-700 after:w-0 hover:after:w-full"
                    }`
                  }
                >
                  {l.label}
                </NavLink>
              </li>
            ))}
          </ul>

          <button
            className="grid h-10 w-10 place-items-center rounded-full text-ink hover:bg-brand-50 md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Mở menu"
            type="button"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-brand-100 bg-paper md:hidden"
          >
            <ul className="container-x space-y-1 py-3">
              {links.map((l) => (
                <li key={l.to}>
                  <NavLink
                    to={l.to}
                    end={l.end}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `block py-2 text-sm font-semibold uppercase tracking-[0.16em] ${
                        isActive ? "text-brand-800" : "text-ink-muted"
                      }`
                    }
                  >
                    {l.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
