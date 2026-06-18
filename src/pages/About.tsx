import { motion } from "framer-motion";
import { EASE_OUT } from "../lib/easing";

const ABOUT_IMG =
  "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1400&q=85&auto=format&fit=crop";
const LAGOS_IMG =
  "https://images.unsplash.com/photo-1618828665347-d870c38c95c7?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};
const staggerItem = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE_OUT } },
};

const values = [
  {
    title: "Integrity",
    desc: "You always know where your money is and what it's doing. No surprises, no hidden moves.",
  },
  {
    title: "Patience",
    desc: "We don't chase short-term wins. We build portfolios that compound steadily over years.",
  },
  {
    title: "Discipline",
    desc: "Every investment decision goes through the same structured review. No gut calls.",
  },
  {
    title: "Alignment",
    desc: "We earn more when you earn more. That's how we keep our incentives honest.",
  },
];

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[70vh] overflow-hidden flex items-end">
        <motion.img
          src={ABOUT_IMG}
          alt="BGC Holdings"
          className="absolute inset-0 w-full h-full object-cover"
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
            Who We Are
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: EASE_OUT }}
            className="text-6xl md:text-8xl font-light text-white leading-none"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            About BGC
          </motion.h1>
        </div>
      </section>

      {/* Mission */}
      <section className="py-32 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-2 gap-20 items-start">
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
              Why We Exist
            </p>
            <h2
              className="text-4xl md:text-5xl font-light text-white leading-tight mb-8"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Most companies make profits and let them sit. We help them grow.
            </h2>
            <div className="space-y-5 text-white/40 text-sm leading-relaxed">
              <p>
                BGC Holdings is a Nigerian LLC that manages the investment
                portfolios of companies registered directly under it. Think of
                us as the investment arm of a group of companies, your money is
                handled professionally, kept completely separate from other
                clients, and reported on every quarter.
              </p>
              <p>
                We don't sell investment products. We manage your actual
                capital, allocating it across a structured risk spectrum that
                fits your company's goals, and reporting back on exactly how
                it's performing.
              </p>
              <p>
                We're currently in the development stage, building the
                processes, compliance framework, and reporting tools that will
                underpin every client relationship.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: EASE_OUT }}
            className="relative aspect-4/5 overflow-hidden"
            whileHover={{ scale: 1.015, transition: { duration: 0.5 } }}
          >
            <img
              src={LAGOS_IMG}
              alt="Lagos, Nigeria"
              className="w-full h-full object-cover"
              style={{ filter: "grayscale(25%)" }}
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to top, rgba(10,10,10,0.8) 0%, transparent 55%)",
              }}
            />
            <div className="absolute bottom-0 left-0 p-8">
              <p className="text-white/40 text-xs tracking-widest uppercase">
                Headquartered in
              </p>
              <p
                className="text-white text-xl font-light mt-1"
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
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: EASE_OUT }}
              className="md:col-span-5"
            >
              <p
                className="text-[11px] tracking-[0.4em] uppercase mb-5"
                style={{ color: "var(--silver-dim)" }}
              >
                The Founder
              </p>
              <h3
                className="text-3xl font-light text-white mb-2"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Oluwafemi Oluwayanju
              </h3>
              <p className="text-white/25 text-xs tracking-widest uppercase mb-6">
                Founder & Managing Director
              </p>
              <p className="text-white/40 text-sm leading-relaxed">
                Oluwafemi built BGC Holdings because he saw that small and
                medium businesses rarely have a dedicated team managing their
                retained profits. He handles everything himself, investment
                strategy, client relationships, regulatory setup, and the
                day-to-day decisions that shape each portfolio.
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
                { label: "Based In", value: "Lagos, Nigeria" },
                { label: "Current Firms", value: "SYS Empire" },
              ].map(({ label, value }) => (
                <motion.div
                  key={label}
                  className="border-l pl-4"
                  style={{ borderColor: "rgba(255,255,255,0.1)" }}
                  whileHover={{
                    x: 4,
                    transition: { type: "spring", stiffness: 400, damping: 30 },
                  }}
                >
                  <p className="text-[10px] tracking-[0.25em] uppercase text-white/25 mb-1">
                    {label}
                  </p>
                  <p className="text-white/70 text-sm">{value}</p>
                </motion.div>
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
            How We Operate
          </p>
          <h2
            className="text-4xl font-light text-white"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            The principles behind every decision we make.
          </h2>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-px"
          style={{ backgroundColor: "rgba(255,255,255,0.06)" }}
        >
          {values.map(({ title, desc }) => (
            <motion.div
              key={title}
              variants={staggerItem}
              className="p-10 group cursor-default"
              style={{ backgroundColor: "var(--dark)" }}
              whileHover={{
                backgroundColor: "rgba(255,255,255,0.03)",
                y: -4,
                transition: { duration: 0.3 },
              }}
            >
              <p
                className="text-2xl font-light text-white/80 mb-4 group-hover:text-white transition-colors duration-300"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {title}
              </p>
              <p className="text-white/35 text-sm leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </>
  );
}
