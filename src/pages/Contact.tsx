import { motion } from "framer-motion";
import { useState } from "react";
import { EASE_OUT } from "../lib/easing";

const BG_IMG =
  "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1600&q=85&auto=format&fit=crop";

export default function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: { preventDefault: () => void }) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <>
      {/* Hero */}
      <section className="relative h-[55vh] overflow-hidden flex items-end">
        <motion.img
          src={BG_IMG}
          alt="Contact"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: "grayscale(40%)" }}
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
            Get in Touch
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: EASE_OUT }}
            className="text-6xl md:text-8xl font-light text-white leading-none"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Contact Us
          </motion.h1>
        </div>
      </section>

      {/* Form + Info */}
      <section className="py-28 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-2 gap-20">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: EASE_OUT }}
          >
            <h2
              className="text-4xl font-light text-white mb-6 leading-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              We only work with companies registered under BGC Holdings, or
              those looking to join.
            </h2>
            <p className="text-white/35 text-sm leading-relaxed mb-14">
              All messages go straight to the founder. You'll get a personal
              response, not an automated reply.
            </p>

            <motion.div
              className="space-y-8"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {[
                { label: "Email", value: "bgcglobal@gmail.com" },
                { label: "Phone", value: "+234 816 152 5506" },
                {
                  label: "Address",
                  value: "No. 3 Daina Okolo Close, Even Estate, Ajah, Lagos",
                },
              ].map(({ label, value }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.6, ease: EASE_OUT }}
                  className="pb-6"
                  style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}
                >
                  <p className="text-[10px] tracking-[0.3em] uppercase text-white/25 mb-2">
                    {label}
                  </p>
                  <p className="text-white/60 text-sm">{value}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: EASE_OUT }}
          >
            {sent ? (
              <div className="flex flex-col justify-center h-full py-16">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: EASE_OUT }}
                  className="text-4xl font-light mb-4 text-white"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Message received.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="text-white/35 text-sm leading-relaxed"
                >
                  Oluwafemi will read your message and get back to you directly.
                  Thank you for reaching out.
                </motion.p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                {[
                  {
                    id: "name",
                    label: "Your Name",
                    type: "text",
                    placeholder: "Full name",
                  },
                  {
                    id: "org",
                    label: "Company Name",
                    type: "text",
                    placeholder: "Your company",
                  },
                  {
                    id: "email",
                    label: "Email Address",
                    type: "email",
                    placeholder: "your@email.com",
                  },
                ].map(({ id, label, type, placeholder }) => (
                  <motion.div
                    key={id}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, ease: EASE_OUT }}
                  >
                    <label
                      htmlFor={id}
                      className="block text-[10px] tracking-[0.3em] uppercase mb-3 text-white/25"
                    >
                      {label}
                    </label>
                    <input
                      id={id}
                      name={id}
                      type={type}
                      required
                      className="w-full bg-transparent border-b py-3 text-white/80 text-sm outline-none transition-colors duration-300 placeholder:text-white/15 focus:border-white/40"
                      style={{
                        borderColor: "rgba(255,255,255,0.1)",
                        borderBottomWidth: "1px",
                        borderBottomStyle: "solid",
                      }}
                      placeholder={placeholder}
                    />
                  </motion.div>
                ))}

                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, ease: EASE_OUT }}
                >
                  <label
                    htmlFor="enquiry"
                    className="block text-[10px] tracking-[0.3em] uppercase mb-3 text-white/25"
                  >
                    What's This About?
                  </label>
                  <select
                    id="enquiry"
                    name="enquiry"
                    className="w-full bg-transparent border-b py-3 text-white/55 text-sm outline-none focus:border-white/40 transition-colors duration-300"
                    style={{
                      borderColor: "rgba(255,255,255,0.1)",
                      borderBottomWidth: "1px",
                      borderBottomStyle: "solid",
                      backgroundColor: "var(--dark)",
                    }}
                  >
                    <option value="" style={{ backgroundColor: "#111" }}>
                      Select one
                    </option>
                    <option
                      value="register"
                      style={{ backgroundColor: "#111" }}
                    >
                      I want to register my company under BGC
                    </option>
                    <option value="fund" style={{ backgroundColor: "#111" }}>
                      Fund management question
                    </option>
                    <option
                      value="partnership"
                      style={{ backgroundColor: "#111" }}
                    >
                      Partnership or advisory
                    </option>
                    <option value="other" style={{ backgroundColor: "#111" }}>
                      Something else
                    </option>
                  </select>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, ease: EASE_OUT }}
                >
                  <label
                    htmlFor="message"
                    className="block text-[10px] tracking-[0.3em] uppercase mb-3 text-white/25"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full bg-transparent border-b py-3 text-white/80 text-sm outline-none focus:border-white/40 transition-colors duration-300 resize-none placeholder:text-white/15"
                    style={{
                      borderColor: "rgba(255,255,255,0.1)",
                      borderBottomWidth: "1px",
                      borderBottomStyle: "solid",
                    }}
                    placeholder="What would you like to discuss?"
                  />
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <button
                    type="submit"
                    className="text-[12px] tracking-widest uppercase px-10 py-4 border border-white/20 text-white/50 hover:bg-white hover:border-white hover:text-black transition-all duration-400 w-full"
                  >
                    Send Message
                  </button>
                </motion.div>
              </form>
            )}
          </motion.div>
        </div>
      </section>
    </>
  );
}
