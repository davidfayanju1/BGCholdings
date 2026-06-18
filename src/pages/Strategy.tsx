import { motion } from "framer-motion";
import { EASE_OUT } from "../lib/easing";

const BG_IMG =
  "https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

const pillars = [
  {
    num: "01",
    title: "Separate Portfolios",
    body: "Every registered firm under BGC Holdings holds a fully independent portfolio. Capital is never commingled. Accounting, reporting, and performance tracking are kept distinct for each entity.",
  },
  {
    num: "02",
    title: "Risk-Tiered Allocation",
    body: "Capital is deployed across three tiers, low, medium, and high risk — calibrated to match each firm's growth objectives, cash flow needs, and appetite for volatility.",
  },
  {
    num: "03",
    title: "Active Selection",
    body: "BGC actively selects across equities, fixed income, private placements, and alternative assets. No passive drift — every position is intentional and monitored.",
  },
  {
    num: "04",
    title: "Quarterly Reporting",
    body: "Each firm receives quarterly performance reports, risk analytics, and reinvestment recommendations. Transparency is a structural commitment, not a courtesy.",
  },
  {
    num: "05",
    title: "Regulatory Compliance",
    body: "Operating under the LLC structure, BGC builds its compliance framework ahead of client onboarding, meeting Nigerian regulatory requirements and preparing for cross-border investment mandates.",
  },
  {
    num: "06",
    title: "Long-Term Orientation",
    body: "BGC is not built for quarterly wins. Our frameworks favour compounding, capital preservation, and opportunistic reinvestment over time horizons that allow ideas to mature.",
  },
];

const roadmap = [
  {
    phase: "Phase 1 · Now",
    label: "Framework Build",
    desc: "Investment policy statements, compliance processes, reporting templates, and the pilot portfolio for SYS Empire.",
  },
  {
    phase: "Phase 2 · 12 Months",
    label: "Client Growth",
    desc: "Onboard 3–5 registered firms. Refine proprietary reporting tools. Expand cross-border investment access.",
  },
  {
    phase: "Phase 3 · 3–5 Years",
    label: "Multi-Jurisdictional",
    desc: "Establish BGC as a recognised multi-jurisdictional fund manager. Pursue selective external capital partnerships.",
  },
];

export default function Strategy() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[65vh] overflow-hidden flex items-end">
        <img
          src={BG_IMG}
          alt="Strategy"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: "grayscale(30%)" }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(10,10,10,1) 0%, rgba(10,10,10,0.5) 100%)",
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pb-24 w-full">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: EASE_OUT }}
            className="text-[11px] tracking-[0.4em] uppercase mb-4"
            style={{ color: "var(--silver-dim)" }}
          >
            Investment Philosophy
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.35, ease: EASE_OUT }}
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
            Disciplined. Transparent. Built for affiliated firms.
          </h2>
          <p className="text-white/40 text-sm leading-loose self-center">
            BGC Holdings does not manage external money. We manage capital for
            firms registered directly under the holding company — giving each
            one access to institutional-grade portfolio management while keeping
            their books completely separate. Our strategy is not a product of
            market fashion. It is a framework built to last.
          </p>
        </motion.div>

        {/* Pillars */}
        <div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-px"
          style={{ backgroundColor: "rgba(255,255,255,0.06)" }}
        >
          {pillars.map(({ num, title, body }, i) => (
            <motion.div
              key={num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.7, ease: EASE_OUT }}
              className="p-10 group hover:bg-white/2 transition-colors duration-500"
              style={{ backgroundColor: "var(--dark)" }}
            >
              <p className="text-xs tracking-widest mb-6 text-white/25">
                {num}
              </p>
              <h3
                className="text-xl font-light text-white/80 mb-4 group-hover:text-white transition-colors duration-300"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {title}
              </h3>
              <p className="text-white/35 text-sm leading-relaxed">{body}</p>
            </motion.div>
          ))}
        </div>
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
              Roadmap
            </p>
            <h2
              className="text-4xl font-light text-white"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Where we are headed
            </h2>
          </motion.div>

          <div
            className="grid md:grid-cols-3 gap-px"
            style={{ backgroundColor: "rgba(255,255,255,0.06)" }}
          >
            {roadmap.map(({ phase, label, desc }, i) => (
              <motion.div
                key={phase}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.7, ease: EASE_OUT }}
                className="p-10"
                style={{ backgroundColor: "var(--dark-2)" }}
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
          </div>
        </div>
      </section>
    </>
  );
}
