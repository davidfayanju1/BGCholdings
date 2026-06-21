import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { EASE_OUT } from "../lib/easing";

const HERO_IMG =
  "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1800&q=90&auto=format&fit=crop";
const CITY_IMG =
  "https://images.unsplash.com/photo-1444653614773-995cb1ef9efa?w=1400&q=85&auto=format&fit=crop";

const fadeIn = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, ease: EASE_OUT, delay },
});

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const staggerItem = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE_OUT } },
};

const services = [
  {
    number: "01",
    title: "Portfolio Structuring",
    desc: "We split your capital into three buckets, low risk, medium risk, and high growth, based on what your company actually needs.",
  },
  {
    number: "02",
    title: "Active Investment",
    desc: "We pick every investment ourselves. Stocks, bonds, private deals, alternatives. Nothing goes in without a proper review.",
  },
  {
    number: "03",
    title: "Quarterly Reports",
    desc: "Every three months you get a clear breakdown, where your money is, how it performed, and what we're doing next.",
  },
];

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <>
      {/* ── Hero ── */}
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
          {/* Strong bottom gradient so text is always readable */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to top, rgba(10,10,10,1) 0%, rgba(10,10,10,0.98) 22%, rgba(10,10,10,0.75) 50%, rgba(10,10,10,0.1) 100%)",
            }}
          />
        </motion.div>

        <motion.div
          className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pt-24 pb-16 sm:pb-20 lg:pb-24 w-full"
          style={{ opacity: heroOpacity }}
        >
          <motion.p
            {...fadeIn(0.2)}
            className="text-[11px] tracking-[0.4em] uppercase mb-4 sm:mb-6"
            style={{ color: "var(--silver-dim)" }}
          >
            Nigeria · Fund Management
          </motion.p>

          <motion.h1
            {...fadeIn(0.35)}
            className="text-4xl sm:text-5xl md:text-6xl xl:text-8xl font-light leading-[1.05] mb-5 sm:mb-8 text-white"
            style={{
              fontFamily: "'Playfair Display', serif",
              letterSpacing: "-0.02em",
            }}
          >
            We invest your
            <br />
            <em style={{ color: "var(--silver)" }}>company's money.</em>
            <br />
            Properly.
          </motion.h1>

          <motion.p
            {...fadeIn(0.55)}
            className="text-white/55 text-sm sm:text-base lg:text-lg max-w-lg leading-relaxed mb-8 sm:mb-12"
          >
            BGC Holdings takes profits from companies registered under us and
            puts them into structured, risk-managed investments. Your books stay
            separate. Your returns stay yours.
          </motion.p>

          <motion.div
            {...fadeIn(0.7)}
            className="flex flex-col sm:flex-row gap-4"
          >
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}>
              <Link
                to="/portfolio"
                className="text-[12px] tracking-widest uppercase px-8 py-4 bg-white text-black transition-all duration-300 hover:bg-white/85 inline-block w-full sm:w-auto text-center"
              >
                See Our Portfolio
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}>
              <Link
                to="/strategy"
                className="text-[12px] tracking-widest uppercase px-8 py-4 border border-white/20 text-white/60 hover:text-white hover:border-white/50 transition-all duration-300 inline-block w-full sm:w-auto text-center"
              >
                How We Do It
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 1 }}
          className="absolute bottom-8 right-12 z-10"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="w-px h-16 bg-linear-to-b from-white/30 to-transparent"
          />
        </motion.div>
      </section>

      {/* ── Three services ── */}
      <section className="py-32 max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: EASE_OUT }}
          className="mb-20"
        >
          <p
            className="text-[11px] tracking-[0.4em] uppercase mb-4"
            style={{ color: "var(--silver-dim)" }}
          >
            What We Do
          </p>
          <h2
            className="text-4xl md:text-6xl font-light text-white leading-tight max-w-2xl"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Three things we do for every registered firm.
          </h2>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
        >
          {services.map(({ number, title, desc }) => (
            <motion.div
              key={number}
              variants={staggerItem}
              className="py-10 grid grid-cols-1 md:grid-cols-12 gap-6 group cursor-default"
              style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}
              whileHover={{
                x: 6,
                transition: { type: "spring", stiffness: 400, damping: 30 },
              }}
            >
              <span className="md:col-span-1 text-xs tracking-widest text-white/20">
                {number}
              </span>
              <h3
                className="md:col-span-4 text-2xl font-light text-white/75 group-hover:text-white transition-colors duration-300"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {title}
              </h3>
              <p className="md:col-span-6 text-white/35 leading-relaxed text-sm self-center">
                {desc}
              </p>
              <div className="md:col-span-1 flex justify-end items-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-2">
                <span className="text-white/40 text-lg">→</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ── SYS Empire spotlight ── */}
      <section className="relative h-[55vh] overflow-hidden">
        <motion.img
          src={CITY_IMG}
          alt="SYS Empire"
          className="w-full h-full object-cover"
          style={{ filter: "grayscale(20%)" }}
          whileInView={{ scale: 1 }}
          initial={{ scale: 1.05 }}
          transition={{ duration: 1.2, ease: EASE_OUT }}
        />
        <div
          className="absolute inset-0 flex items-center"
          style={{
            background:
              "linear-gradient(to right, rgba(10,10,10,0.97) 45%, rgba(10,10,10,0.2) 100%)",
          }}
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: EASE_OUT }}
              className="max-w-lg"
            >
              <p
                className="text-[11px] tracking-[0.4em] uppercase mb-4"
                style={{ color: "var(--silver-dim)" }}
              >
                Our Current Client
              </p>
              <h2
                className="text-5xl font-light text-white mb-5"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                SYS Empire
              </h2>
              <p className="text-white/40 leading-relaxed mb-8 text-sm">
                SYS Empire was the first company to register under BGC Holdings.
                We manage their entire portfolio, deciding where their money
                goes, how much risk they're taking on, and delivering a full
                report every quarter. No guesswork. No black boxes.
              </p>
              <motion.div
                whileHover={{ x: 6 }}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              >
                <Link
                  to="/portfolio"
                  className="text-[12px] tracking-widest uppercase inline-flex items-center gap-3 text-white/50 hover:text-white transition-colors duration-300"
                >
                  See Full Portfolio
                  <span>→</span>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-40 max-w-7xl mx-auto px-6 lg:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: EASE_OUT }}
        >
          <p className="text-[11px] tracking-[0.4em] uppercase mb-6 text-white/25">
            Get Started
          </p>
          <h2
            className="text-5xl md:text-7xl font-light text-white leading-tight mb-8"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Want your profits
            <br />
            <em style={{ color: "var(--silver)" }}>working harder?</em>
          </h2>
          <p className="text-white/35 max-w-md mx-auto mb-12 leading-relaxed text-sm">
            BGC only works with companies registered under the holding company.
            If that's you, or if you want to find out more, reach out.
          </p>
          <motion.div
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="inline-block"
          >
            <Link
              to="/contact"
              className="text-[13px] tracking-widest uppercase px-10 py-5 border border-white/25 text-white/55 hover:bg-white hover:border-white hover:text-black transition-all duration-400 inline-block"
            >
              Let's Talk
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}
