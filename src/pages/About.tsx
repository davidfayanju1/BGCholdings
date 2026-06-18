import { motion } from "framer-motion";
import { EASE_OUT } from "../lib/easing";

const ABOUT_IMG =
  "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1400&q=85&auto=format&fit=crop";
const LAGOS_IMG =
  "https://images.unsplash.com/photo-1618828665347-d870c38c95c7?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

const values = [
  {
    title: "Integrity",
    desc: "Every portfolio decision is made with full transparency to the registered firm it serves. No asset comminglement, no hidden allocation.",
  },
  {
    title: "Patience",
    desc: "We invest on a long arc. Our frameworks are built for compounding over time, not short-cycle speculation.",
  },
  {
    title: "Discipline",
    desc: "Each capital deployment goes through a structured review against the firm's risk tier, objectives, and reporting cycle.",
  },
  {
    title: "Alignment",
    desc: "Our fee structure is tied to performance. When our clients grow, BGC grows with them.",
  },
];

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[70vh] overflow-hidden flex items-end">
        <img
          src={ABOUT_IMG}
          alt="BGC Holdings"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(10,10,10,1) 0%, rgba(10,10,10,0.4) 100%)",
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
            Who We Are
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.35, ease: EASE_OUT }}
            className="text-6xl md:text-8xl font-light text-white leading-none"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            About BGC
          </motion.h1>
        </div>
      </section>

      {/* Mission */}
      <section className="py-32 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: EASE_OUT }}
          >
            <p
              className="text-[11px] tracking-[0.4em] uppercase mb-6"
              style={{ color: "var(--silver-dim)" }}
            >
              Our Mission
            </p>
            <h2
              className="text-4xl md:text-5xl font-light text-white leading-tight mb-8"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Centralised fund management for the firms that trust us
            </h2>
            <div className="space-y-5 text-white/40 text-sm leading-relaxed">
              <p>
                BGC Holdings was founded with a clear premise: firms that
                reinvest profits deserve the same calibre of portfolio
                management as large institutions, without losing the
                independence of their own books.
              </p>
              <p>
                Operating as a Limited Liability Company headquartered in Lagos,
                Nigeria, BGC manages the capital of firms registered directly
                under it. Each client firm holds a fully separate portfolio,
                allocated across a risk spectrum that fits its own objectives.
              </p>
              <p>
                We are at the development stage, building the frameworks,
                compliance structures, and reporting infrastructure that will
                underpin every client relationship we take on.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: EASE_OUT }}
            className="relative aspect-4/5 overflow-hidden"
          >
            <img
              src={LAGOS_IMG}
              alt="Lagos, Nigeria"
              className="w-full h-full object-cover"
              style={{ filter: "grayscale(30%)" }}
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to top, rgba(10,10,10,0.7) 0%, transparent 60%)",
              }}
            />
            <div className="absolute bottom-0 left-0 p-8">
              <p className="text-white/40 text-xs tracking-widest uppercase">
                Headquartered in
              </p>
              <p
                className="text-white text-lg font-light mt-1"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Lagos, Nigeria
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Founder */}
      <section
        className="py-24"
        style={{
          borderTop: "1px solid rgba(255,255,255,0.07)",
          borderBottom: "1px solid rgba(255,255,255,0.07)",
          backgroundColor: "var(--dark-2)",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-1">
              <p className="text-[11px] tracking-[0.3em] uppercase text-white/25 -rotate-90 origin-left translate-y-8 hidden md:block">
                Founder
              </p>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: EASE_OUT }}
              className="md:col-span-5"
            >
              <p
                className="text-[11px] tracking-[0.4em] uppercase mb-4 md:hidden"
                style={{ color: "var(--silver-dim)" }}
              >
                Founder
              </p>
              <h3
                className="text-3xl font-light text-white mb-2"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Oluwafemi Oluwayanju
              </h3>
              <p className="text-white/30 text-xs tracking-widest uppercase mb-6">
                Founder & Managing Director
              </p>
              <p className="text-white/40 text-sm leading-relaxed">
                Oluwafemi built BGC Holdings around the belief that small and
                medium enterprises deserve institutional-grade fund management.
                His responsibilities span investment strategy, client
                onboarding, regulatory setup, and the day-to-day decisions that
                shape each portfolio.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: EASE_OUT, delay: 0.15 }}
              className="md:col-span-5 md:col-start-8 grid grid-cols-2 gap-6"
            >
              {[
                { label: "Stage", value: "Development" },
                { label: "Structure", value: "LLC" },
                { label: "Base", value: "Lagos, Nigeria" },
                { label: "Portfolio Firms", value: "1 (SYS Empire)" },
              ].map(({ label, value }) => (
                <div
                  key={label}
                  className="border-l pl-4"
                  style={{ borderColor: "rgba(255,255,255,0.1)" }}
                >
                  <p className="text-[10px] tracking-[0.25em] uppercase text-white/25 mb-1">
                    {label}
                  </p>
                  <p className="text-white/70 text-sm">{value}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-28 max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: EASE_OUT }}
          className="mb-16"
        >
          <p
            className="text-[11px] tracking-[0.4em] uppercase mb-4"
            style={{ color: "var(--silver-dim)" }}
          >
            Core Principles
          </p>
          <h2
            className="text-4xl font-light text-white"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            What guides every decision
          </h2>
        </motion.div>

        <div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-px"
          style={{ backgroundColor: "rgba(255,255,255,0.06)" }}
        >
          {values.map(({ title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.7, ease: EASE_OUT }}
              className="p-10 group hover:bg-white/2 transition-colors duration-500"
              style={{ backgroundColor: "var(--dark)" }}
            >
              <p
                className="text-2xl font-light text-white mb-4 group-hover:text-(--silver) transition-colors duration-300"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {title}
              </p>
              <p className="text-white/35 text-sm leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
