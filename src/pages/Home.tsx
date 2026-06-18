import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { EASE_OUT } from "../lib/easing";

const HERO_IMG =
  "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1800&q=90&auto=format&fit=crop";
const CITY_IMG =
  "https://images.unsplash.com/photo-1444653614773-995cb1ef9efa?w=1400&q=85&auto=format&fit=crop";

const fadeIn = (delay = 0) => ({
  initial: { opacity: 0, y: 36 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, ease: EASE_OUT, delay },
});

const services = [
  {
    number: "01",
    title: "Portfolio Structuring",
    desc: "Each registered firm's capital is allocated across low-, medium-, and high-risk buckets, preserving independent accounting while pursuing risk-adjusted growth.",
  },
  {
    number: "02",
    title: "Active Investment Selection",
    desc: "Disciplined selection across equities, fixed income, private placements, and alternative assets suited to each firm's objectives and timeline.",
  },
  {
    number: "03",
    title: "Performance Reporting",
    desc: "Quarterly reporting, risk analytics, and reinvestment recommendations delivered with full transparency to each client firm.",
  },
];

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <>
      {/* Hero */}
      <section
        ref={heroRef}
        className="relative h-screen overflow-hidden flex items-end"
      >
        <motion.div className="absolute inset-0" style={{ y: heroY }}>
          <img
            src={HERO_IMG}
            alt="BGC Holdings"
            className="w-full h-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to top, rgba(10,10,10,1) 0%, rgba(10,10,10,0.6) 50%, rgba(10,10,10,0.7) 100%)",
            }}
          />
        </motion.div>

        <motion.div
          className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pb-16 sm:pb-20 md:pb-24 w-full"
          style={{ opacity: heroOpacity }}
        >
          <motion.p
            {...fadeIn(0.2)}
            className="text-[10px] sm:text-[11px] tracking-[0.3em] sm:tracking-[0.4em] uppercase mb-4 sm:mb-6"
            style={{ color: "var(--silver-dim)" }}
          >
            Nigeria · Structured Fund Management
          </motion.p>

          <motion.h1
            {...fadeIn(0.4)}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-light leading-[1.1] sm:leading-none mb-4 sm:mb-6 md:mb-8 text-white"
            style={{
              fontFamily: "'Playfair Display', serif",
              letterSpacing: "-0.02em",
            }}
          >
            Capital managed
            <br className="hidden sm:block" />
            <span className="block sm:inline">
              <em style={{ color: "var(--silver)" }}>with discipline.</em>
            </span>
          </motion.h1>

          <motion.p
            {...fadeIn(0.6)}
            className="text-white/45 text-base sm:text-lg max-w-md leading-relaxed mb-8 sm:mb-10 md:mb-12"
          >
            BGC Holdings manages and invests the funds of firms registered
            directly under it maintaining separate portfolios and delivering
            risk-adjusted returns across every allocation.
          </motion.p>

          <motion.div
            {...fadeIn(0.8)}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6"
          >
            <Link
              to="/portfolio"
              className="text-[11px] sm:text-[12px] tracking-widest uppercase px-6 sm:px-8 py-3.5 sm:py-4 bg-white text-black transition-all duration-300 hover:bg-white/85 text-center"
            >
              Our Portfolio
            </Link>
            <Link
              to="/strategy"
              className="text-[11px] sm:text-[12px] tracking-widest uppercase px-6 sm:px-8 py-3.5 sm:py-4 border transition-all duration-300 text-white/60 hover:text-white hover:border-white/40 text-center"
              style={{ borderColor: "rgba(255,255,255,0.2)" }}
            >
              Our Strategy
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-6 sm:bottom-8 right-4 sm:right-8 md:right-12 flex flex-col items-center gap-3 z-10"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
            className="w-px h-12 sm:h-16 bg-linear-to-b from-white/25 to-transparent"
          />
        </motion.div>
      </section>

      {/* Thin rule between hero and content */}
      <div
        style={{ height: "1px", backgroundColor: "rgba(255,255,255,0.06)" }}
      />

      {/* What we do */}
      <section className="py-20 sm:py-24 md:py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: EASE_OUT }}
          className="mb-12 sm:mb-16 md:mb-20"
        >
          <p
            className="text-[10px] sm:text-[11px] tracking-[0.3em] sm:tracking-[0.4em] uppercase mb-3 sm:mb-4"
            style={{ color: "var(--silver-dim)" }}
          >
            What We Do
          </p>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white leading-[1.15] sm:leading-tight max-w-2xl"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            One holding structure. Separate portfolios. Full accountability.
          </h2>
        </motion.div>

        <div style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}>
          {services.map(({ number, title, desc }, i) => (
            <motion.div
              key={number}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.8, ease: EASE_OUT }}
              className="py-8 sm:py-10 grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6 group cursor-default"
              style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}
            >
              <span className="md:col-span-1 text-xs tracking-widest text-white/25">
                {number}
              </span>
              <h3
                className="md:col-span-4 text-xl sm:text-2xl font-light text-white/80 group-hover:text-white transition-colors duration-300"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {title}
              </h3>
              <p className="md:col-span-6 text-white/35 leading-relaxed text-sm">
                {desc}
              </p>
              <div className="md:col-span-1 flex justify-end items-center opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-white/30">→</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SYS Empire spotlight */}
      <section className="relative h-[60vh] sm:h-[55vh] overflow-hidden">
        <img
          src={CITY_IMG}
          alt="SYS Empire"
          className="w-full h-full object-cover"
        />
        <div
          className="absolute inset-0 flex items-center"
          style={{
            background:
              "linear-gradient(to right, rgba(10,10,10,0.97) 30%, rgba(10,10,10,0.25) 100%)",
          }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 w-full">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: EASE_OUT }}
              className="max-w-xs sm:max-w-sm md:max-w-lg"
            >
              <p
                className="text-[10px] sm:text-[11px] tracking-[0.3em] sm:tracking-[0.4em] uppercase mb-3 sm:mb-4"
                style={{ color: "var(--silver-dim)" }}
              >
                Portfolio Firm
              </p>
              <h2
                className="text-3xl sm:text-4xl md:text-5xl font-light text-white mb-3 sm:mb-4"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                SYS Empire
              </h2>
              <p className="text-white/40 leading-relaxed mb-6 sm:mb-8 text-sm">
                BGC Holdings manages fund strategy, capital allocation, and risk
                oversight for SYS Empire, its first registered portfolio firm,
                with a dedicated investment framework built around SYS's
                specific growth objectives.
              </p>
              <Link
                to="/portfolio"
                className="text-[11px] sm:text-[12px] tracking-widest uppercase inline-flex items-center gap-3 transition-all duration-300 group text-white/50 hover:text-white"
              >
                View Portfolio
                <span className="group-hover:translate-x-2 transition-transform duration-300">
                  →
                </span>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 sm:py-32 md:py-40 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: EASE_OUT }}
        >
          <p className="text-[10px] sm:text-[11px] tracking-[0.3em] sm:tracking-[0.4em] uppercase mb-4 sm:mb-6 text-white/30">
            Register Under BGC
          </p>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-light text-white leading-[1.15] sm:leading-tight mb-6 sm:mb-8"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Ready to grow your
            <br className="hidden sm:block" />
            <em style={{ color: "var(--silver)" }}>firm's capital?</em>
          </h2>
          <p className="text-white/35 max-w-md mx-auto mb-8 sm:mb-10 md:mb-12 leading-relaxed text-sm px-4 sm:px-0">
            BGC Holdings works exclusively with firms registered directly under
            the holding company. Reach out to begin a conversation.
          </p>
          <Link
            to="/contact"
            className="text-[12px] sm:text-[13px] tracking-widest uppercase px-8 sm:px-10 py-4 sm:py-5 border transition-all duration-500 hover:bg-white hover:text-black inline-block"
            style={{
              borderColor: "rgba(255,255,255,0.25)",
              color: "rgba(255,255,255,0.6)",
            }}
          >
            Get in Touch
          </Link>
        </motion.div>
      </section>
    </>
  );
}
