import { motion } from "framer-motion";
import { EASE_OUT } from "../lib/easing";

const BG_IMG =
  "https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?q=80&w=1600&auto=format&fit=crop";

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09 } },
};
const staggerItem = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE_OUT } },
};

const pillars = [
  {
    num: "01",
    title: "Your Money Stays Yours",
    body: "Your portfolio is 100% separate from every other company under BGC Holdings. Your capital, your records, your results. Nothing is shared or mixed.",
  },
  {
    num: "02",
    title: "Three Risk Levels",
    body: "We split every portfolio into three buckets — low risk (safe, steady), medium risk (balanced growth), and high risk (higher reward potential). You decide how much goes into each.",
  },
  {
    num: "03",
    title: "We Pick Every Investment",
    body: "We actively choose where your money goes. Stocks, bonds, private placements, alternatives. Every position is intentional and reviewed. Nothing goes in on autopilot.",
  },
  {
    num: "04",
    title: "Clear Quarterly Reports",
    body: "Every three months, you get a straightforward breakdown — what's in your portfolio, how it performed, and exactly what we're recommending next. No finance jargon.",
  },
  {
    num: "05",
    title: "Built to Be Compliant",
    body: "We're constructing our framework to meet Nigerian financial regulations from the start — and preparing for cross-border investment mandates as we grow.",
  },
  {
    num: "06",
    title: "We Think Long-Term",
    body: "We're not chasing this quarter's gains. We build portfolios that compound steadily over years. Patient money grows. That's the philosophy.",
  },
];

const roadmap = [
  {
    phase: "Phase 1 · Now",
    label: "Getting Set Up Right",
    desc: "Building our investment framework, compliance processes, and the pilot portfolio for SYS Empire. No shortcuts.",
  },
  {
    phase: "Phase 2 · 12 Months",
    label: "Growing Our Client List",
    desc: "Onboarding 3–5 registered companies. Refining our reporting tools. Expanding what we can invest in, including cross-border.",
  },
  {
    phase: "Phase 3 · 3–5 Years",
    label: "Going Multi-Jurisdictional",
    desc: "Managing funds across borders. Becoming a recognised name in professional fund management for affiliated firms.",
  },
];

export default function Strategy() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[65vh] overflow-hidden flex items-end">
        <motion.img
          src={BG_IMG}
          alt="Strategy"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: "grayscale(30%)" }}
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
            How We Work
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: EASE_OUT }}
            className="text-6xl md:text-8xl font-light text-white leading-none"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Our Strategy
          </motion.h1>
        </div>
      </section>

      {/* Intro */}
      <section className="py-28 max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: EASE_OUT }}
          className="grid md:grid-cols-2 gap-20 mb-24"
        >
          <h2
            className="text-4xl md:text-5xl font-light text-white leading-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            No jargon. No black boxes. Just a clear system.
          </h2>
          <p className="text-white/40 text-sm leading-loose self-center">
            BGC Holdings doesn't manage external money or sell investment
            products. We manage capital for companies registered directly under
            the holding company — giving each one access to serious portfolio
            management, with their books kept completely separate. It's
            straightforward by design.
          </p>
        </motion.div>

        {/* Pillars */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-px"
          style={{ backgroundColor: "rgba(255,255,255,0.06)" }}
        >
          {pillars.map(({ num, title, body }) => (
            <motion.div
              key={num}
              variants={staggerItem}
              className="p-10 group cursor-default"
              style={{ backgroundColor: "var(--dark)" }}
              whileHover={{
                backgroundColor: "rgba(255,255,255,0.025)",
                y: -4,
                transition: { duration: 0.25 },
              }}
            >
              <p className="text-xs tracking-widest mb-6 text-white/20">{num}</p>
              <h3
                className="text-xl font-light text-white/75 mb-4 group-hover:text-white transition-colors duration-300"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {title}
              </h3>
              <p className="text-white/35 text-sm leading-relaxed">{body}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Roadmap */}
      <section
        className="py-24"
        style={{
          borderTop: "1px solid rgba(255,255,255,0.07)",
          backgroundColor: "var(--dark-2)",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
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
              Where We're Headed
            </p>
            <h2
              className="text-4xl font-light text-white"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              A clear roadmap, honestly stated.
            </h2>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-px"
            style={{ backgroundColor: "rgba(255,255,255,0.06)" }}
          >
            {roadmap.map(({ phase, label, desc }) => (
              <motion.div
                key={phase}
                variants={staggerItem}
                className="p-10"
                style={{ backgroundColor: "var(--dark-2)" }}
                whileHover={{
                  backgroundColor: "rgba(255,255,255,0.02)",
                  transition: { duration: 0.25 },
                }}
              >
                <p className="text-[10px] tracking-[0.3em] uppercase text-white/25 mb-4">
                  {phase}
                </p>
                <p
                  className="text-xl font-light text-white mb-4"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {label}
                </p>
                <p className="text-white/35 text-sm leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
