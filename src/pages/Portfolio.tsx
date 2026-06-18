import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { EASE_OUT } from "../lib/easing";

const HERO_IMG =
  "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1800&q=85&auto=format&fit=crop";
const SYS_IMG = "/images/logo_light.png";

const features = [
  "Separate portfolio with independent accounting",
  "Risk-tiered capital across low, medium, and high buckets",
  "Quarterly performance reports and reinvestment recommendations",
  "Active selection across stocks, bonds, private deals, and alternatives",
];

export default function Portfolio() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[65vh] overflow-hidden flex items-end">
        <motion.img
          src={HERO_IMG}
          alt="Markets"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: "grayscale(20%)" }}
          initial={{ scale: 1.06 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.4, ease: EASE_OUT }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(10,10,10,1) 0%, rgba(10,10,10,0.85) 30%, rgba(10,10,10,0.3) 100%)",
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pb-24 w-full">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: EASE_OUT }}
            className="text-[11px] tracking-[0.4em] uppercase mb-4"
            style={{ color: "var(--silver-dim)" }}
          >
            Investments
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: EASE_OUT }}
            className="text-6xl md:text-8xl font-light text-white leading-none"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Our Portfolio
          </motion.h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-28 max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: EASE_OUT }}
          className="mb-16"
        >
          <p
            className="text-[11px] tracking-[0.4em] uppercase mb-4"
            style={{ color: "var(--silver-dim)" }}
          >
            Right Now
          </p>
          <h2
            className="text-4xl font-light text-white max-w-xl leading-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            One client. We're doing it right.
          </h2>
          <p className="text-white/40 text-sm mt-4 max-w-lg leading-relaxed">
            BGC Holdings currently manages one registered firm. Before we grow,
            we're making sure we do this properly.
          </p>
        </motion.div>

        {/* SYS Empire card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: EASE_OUT }}
          className="grid md:grid-cols-12 overflow-hidden group"
          style={{ border: "1px solid rgba(255,255,255,0.12)" }}
          whileHover={{
            borderColor: "rgba(255,255,255,0.22)",
            transition: { duration: 0.3 },
          }}
        >
          {/* Image */}
          <div className="md:col-span-5 h-64 md:h-auto overflow-hidden">
            <motion.img
              src={SYS_IMG}
              alt="SYS Empire"
              className="w-full h-full object-cover"
              style={{ filter: "grayscale(15%)" }}
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 0.6, ease: EASE_OUT }}
            />
          </div>

          {/* Content */}
          <div
            className="md:col-span-7 p-10 md:p-12 flex flex-col justify-between"
            style={{ backgroundColor: "var(--dark-2)" }}
          >
            <div>
              <div className="flex items-center gap-4 mb-6">
                <span
                  className="text-[10px] tracking-[0.3em] uppercase px-3 py-1 text-white/45"
                  style={{ border: "1px solid rgba(255,255,255,0.15)" }}
                >
                  Fund Management
                </span>
                <span className="text-[10px] tracking-widest uppercase text-white/20">
                  Active
                </span>
              </div>

              <h3
                className="text-4xl font-light text-white mb-5"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                SYS Empire
              </h3>

              <p className="text-white/40 text-sm leading-relaxed max-w-lg mb-8">
                SYS Empire trusted BGC Holdings first. We manage their entire
                investment portfolio, deciding where their money goes, how much
                risk they're taking on, and delivering a full report every
                quarter. No guesswork. No black boxes. They always know exactly
                what's happening with their capital.
              </p>

              <motion.div
                className="space-y-3"
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                {features.map((item, i) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: i * 0.08,
                      duration: 0.5,
                      ease: EASE_OUT,
                    }}
                    className="flex items-start gap-3"
                  >
                    <span
                      className="mt-2 w-1 h-1 rounded-full shrink-0"
                      style={{ backgroundColor: "var(--silver-dim)" }}
                    />
                    <p className="text-white/35 text-sm">{item}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            <div
              className="flex gap-12 mt-10 pt-8"
              style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
            >
              {[
                { label: "Status", value: "Active" },
                { label: "Structure", value: "Registered Subsidiary" },
                { label: "Risk Profile", value: "Low · Medium · High" },
              ].map(({ label, value }) => (
                <div key={label}>
                  <p className="text-[10px] tracking-[0.25em] uppercase text-white/25 mb-1">
                    {label}
                  </p>
                  <p className="text-white/65 text-sm">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Future teaser */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: EASE_OUT, delay: 0.15 }}
          className="mt-5 p-10 flex flex-col md:flex-row items-center justify-between gap-6"
          style={{
            border: "1px solid rgba(255,255,255,0.06)",
            backgroundColor: "var(--dark-3)",
          }}
        >
          <div>
            <p className="text-[11px] tracking-[0.3em] uppercase text-white/25 mb-2">
              Coming Next
            </p>
            <p className="text-white/50 text-sm leading-relaxed">
              We're onboarding 3–5 more companies in the next 12 months. Want
              your firm to be one of them?
            </p>
          </div>
          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="shrink-0"
          >
            <Link
              to="/contact"
              className="text-[11px] tracking-widest uppercase px-7 py-3 border border-white/15 text-white/40 hover:border-white/35 hover:text-white/80 transition-all duration-300 inline-block whitespace-nowrap"
            >
              Register Your Firm
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}
