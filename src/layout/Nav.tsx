import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/strategy", label: "Strategy" },
  { to: "/contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div
        style={{
          background: scrolled ? "rgba(10,10,10,0.95)" : "transparent",
          backdropFilter: scrolled ? "blur(24px)" : "none",
          borderBottom: scrolled
            ? "1px solid rgba(255,255,255,0.07)"
            : "1px solid transparent",
          transition: "all 0.5s ease",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-20">
          {/* Logo */}
          <NavLink
            to="/"
            className="flex flex-col leading-none select-none group"
          >
            {/* <span
              className="text-2xl tracking-widest uppercase text-white transition-colors duration-300 group-hover:text-[var(--silver)]"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 500,
              }}
            >
              BGC
            </span>
            <span
              className="text-[10px] tracking-[0.3em] uppercase mt-0.5"
              style={{ color: "var(--silver-dim)" }}
            >
              Holdings
            </span> */}

            <img src="/images/company_logo.png" alt="" className="h-20" />
          </NavLink>

          {/* Desktop links */}
          <nav className="hidden md:flex items-center gap-10">
            {links.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                end={to === "/"}
                className={({ isActive }) =>
                  `text-[13px] tracking-[0.12em] uppercase transition-colors duration-300 ${
                    isActive
                      ? "text-white"
                      : "text-white/40 hover:text-white/75"
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
            <NavLink
              to="/contact"
              className="text-[11px] tracking-widest uppercase px-5 py-2.5 border transition-all duration-300 text-white/60 hover:text-white hover:border-white/40"
              style={{ borderColor: "rgba(255,255,255,0.2)" }}
            >
              Get in Touch
            </NavLink>
          </nav>

          {/* Mobile burger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <motion.span
              animate={open ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              className="block w-6 h-px bg-white origin-center"
            />
            <motion.span
              animate={open ? { opacity: 0 } : { opacity: 1 }}
              className="block w-6 h-px bg-white"
            />
            <motion.span
              animate={open ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
              className="block w-6 h-px bg-white origin-center"
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] as const }}
            className="overflow-hidden md:hidden"
            style={{
              background: "rgba(10,10,10,0.98)",
              backdropFilter: "blur(24px)",
              borderBottom: "1px solid rgba(255,255,255,0.07)",
            }}
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {links.map(({ to, label }) => (
                <NavLink
                  key={to}
                  to={to}
                  end={to === "/"}
                  className={({ isActive }) =>
                    `text-lg tracking-widest uppercase ${isActive ? "text-white" : "text-white/40"}`
                  }
                >
                  {label}
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
