import { motion } from "framer-motion";
import { EASE_OUT } from "../lib/easing";

const HERO_IMG =
  "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1800&q=85&auto=format&fit=crop";
const SYS_IMG = "/images/logo_light.png";

export default function Portfolio() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[50vh] md:h-[65vh] overflow-hidden flex items-end">
        <img
          src={HERO_IMG}
          alt="Markets"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: "grayscale(20%)" }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(10,10,10,1) 0%, rgba(10,10,10,0.45) 100%)",
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pb-16 md:pb-24 w-full">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: EASE_OUT }}
            className="text-[10px] sm:text-[11px] tracking-[0.3em] sm:tracking-[0.4em] uppercase mb-3 sm:mb-4"
            style={{ color: "var(--silver-dim)" }}
          >
            Investments
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.35, ease: EASE_OUT }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-light text-white leading-none"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Our Portfolio
          </motion.h1>
        </div>
      </section>

      {/* Single client */}
      <section className="py-16 sm:py-20 md:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: EASE_OUT }}
          className="mb-10 md:mb-16"
        >
          <p
            className="text-[10px] sm:text-[11px] tracking-[0.3em] sm:tracking-[0.4em] uppercase mb-3 sm:mb-4"
            style={{ color: "var(--silver-dim)" }}
          >
            Portfolio Firm
          </p>
          <h2
            className="text-2xl sm:text-3xl md:text-4xl font-light text-white max-w-xl leading-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Currently managing one registered firm
          </h2>
        </motion.div>

        {/* SYS Empire card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: EASE_OUT }}
          className="grid md:grid-cols-12 overflow-hidden group"
          style={{ border: "1px solid rgba(255,255,255,0.12)" }}
        >
          {/* Image */}
          <div className="md:col-span-5 h-48 sm:h-56 md:h-auto overflow-hidden order-first md:order-none">
            <img
              src={SYS_IMG}
              alt="SYS Empire"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              style={{ filter: "grayscale(15%)" }}
            />
          </div>

          {/* Content */}
          <div
            className="md:col-span-7 p-6 sm:p-8 md:p-12 flex flex-col"
            style={{ backgroundColor: "var(--dark-2)" }}
          >
            <div>
              <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                <span
                  className="text-[9px] sm:text-[10px] tracking-[0.2em] sm:tracking-[0.3em] uppercase px-2 sm:px-3 py-1 text-white/50"
                  style={{ border: "1px solid rgba(255,255,255,0.15)" }}
                >
                  Fund Management
                </span>
                <span className="text-[9px] sm:text-[10px] tracking-widest uppercase text-white/25">
                  Active — Current
                </span>
              </div>

              <h3
                className="text-2xl sm:text-3xl md:text-4xl font-light text-white mb-3 sm:mb-4"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                SYS Empire
              </h3>

              <p className="text-white/40 text-sm leading-relaxed max-w-lg">
                SYS Empire is the first firm registered under BGC Holdings. BGC
                manages SYS's portfolio across low-, medium-, and high-risk
                allocation tiers — maintaining fully independent accounting
                while applying the same rigorous investment framework that will
                be extended to future registered firms.
              </p>

              <div className="mt-6 sm:mt-8 space-y-3 sm:space-y-4">
                {[
                  "Dedicated portfolio with independent accounting",
                  "Risk-tiered allocation across low, medium, and high buckets",
                  "Quarterly performance reporting and reinvestment advisory",
                  "Active investment selection across equities, fixed income, and alternatives",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <span
                      className="mt-1.5 w-1 h-1 rounded-full shrink-0"
                      style={{ backgroundColor: "var(--silver-dim)" }}
                    />
                    <p className="text-white/35 text-sm leading-relaxed">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats - responsive grid on mobile */}
            <div
              className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 md:gap-12 mt-8 sm:mt-10 md:mt-12 pt-6 sm:pt-8"
              style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
            >
              <div>
                <p className="text-[9px] sm:text-[10px] tracking-[0.2em] sm:tracking-[0.25em] uppercase text-white/25 mb-1">
                  Status
                </p>
                <p className="text-white/70 text-sm">Active</p>
              </div>
              <div>
                <p className="text-[9px] sm:text-[10px] tracking-[0.2em] sm:tracking-[0.25em] uppercase text-white/25 mb-1">
                  Structure
                </p>
                <p className="text-white/70 text-sm">Registered Subsidiary</p>
              </div>
              <div>
                <p className="text-[9px] sm:text-[10px] tracking-[0.2em] sm:tracking-[0.25em] uppercase text-white/25 mb-1">
                  Risk Profile
                </p>
                <p className="text-white/70 text-sm">Low · Medium · High</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Future firms teaser */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: EASE_OUT, delay: 0.15 }}
          className="mt-6 p-6 sm:p-8 md:p-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
          style={{
            border: "1px solid rgba(255,255,255,0.06)",
            backgroundColor: "var(--dark-3)",
          }}
        >
          <div>
            <p className="text-[10px] sm:text-[11px] tracking-[0.2em] sm:tracking-[0.3em] uppercase text-white/25 mb-2">
              Onboarding Soon
            </p>
            <p className="text-white/50 text-sm leading-relaxed max-w-lg">
              BGC Holdings is formalising its investment framework ahead of
              onboarding 3–5 additional registered firms in the next 12 months.
            </p>
          </div>
          <a
            href="/contact"
            className="shrink-0 text-[10px] sm:text-[11px] tracking-widest uppercase px-5 sm:px-7 py-2.5 sm:py-3 border transition-all duration-300 text-white/40 hover:text-white hover:border-white/30 whitespace-nowrap w-full sm:w-auto text-center"
            style={{ borderColor: "rgba(255,255,255,0.15)" }}
          >
            Register Your Firm
          </a>
        </motion.div>
      </section>
    </>
  );
}
