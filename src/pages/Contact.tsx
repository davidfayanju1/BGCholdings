import { motion } from 'framer-motion'
import { useState } from 'react'
import { EASE_OUT } from '../lib/easing'

const BG_IMG = 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1600&q=85&auto=format&fit=crop'

const inputClass = "w-full bg-transparent border-b py-3 text-white/80 text-sm outline-none transition-colors duration-300 placeholder:text-white/15"
const inputStyle = { borderColor: 'rgba(255,255,255,0.1)' }

export default function Contact() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e: { preventDefault: () => void }) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <>
      {/* Hero */}
      <section className="relative h-[55vh] overflow-hidden flex items-end">
        <img src={BG_IMG} alt="Contact" className="absolute inset-0 w-full h-full object-cover" style={{ filter: 'grayscale(40%)' }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(10,10,10,1) 0%, rgba(10,10,10,0.5) 100%)' }} />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pb-24 w-full">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: EASE_OUT }}
            className="text-[11px] tracking-[0.4em] uppercase mb-4"
            style={{ color: 'var(--silver-dim)' }}
          >
            Get in Touch
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.35, ease: EASE_OUT }}
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
              Firms looking to register under BGC Holdings are welcome to reach out
            </h2>
            <p className="text-white/35 text-sm leading-relaxed mb-14">
              BGC Holdings works exclusively with firms registered directly under the holding company. All enquiries are reviewed by the founder personally.
            </p>

            <div className="space-y-8">
              {[
                { label: 'Founder', value: 'Oluwafemi Oluwayanju' },
                { label: 'Email', value: 'fayanjufemi@gmail.com' },
                { label: 'Phone', value: '+234 816 152 5506' },
                { label: 'Address', value: 'No. 3 Daina Okolo Close, Even Estate, Ajah, Lagos' },
              ].map(({ label, value }) => (
                <div
                  key={label}
                  className="pb-6"
                  style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}
                >
                  <p className="text-[10px] tracking-[0.3em] uppercase text-white/25 mb-2">{label}</p>
                  <p className="text-white/60 text-sm">{value}</p>
                </div>
              ))}
            </div>
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
                <p
                  className="text-4xl font-light mb-4 text-white"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Message received.
                </p>
                <p className="text-white/35 text-sm leading-relaxed">
                  Oluwafemi will review your enquiry and respond directly. Thank you for reaching out.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                {[
                  { id: 'name', label: 'Your Name', type: 'text', placeholder: 'Full name' },
                  { id: 'org', label: 'Company / Firm Name', type: 'text', placeholder: 'Organisation' },
                  { id: 'email', label: 'Email Address', type: 'email', placeholder: 'your@email.com' },
                ].map(({ id, label, type, placeholder }) => (
                  <div key={id}>
                    <label htmlFor={id} className="block text-[10px] tracking-[0.3em] uppercase mb-3 text-white/25">
                      {label}
                    </label>
                    <input
                      id={id}
                      name={id}
                      type={type}
                      required
                      className={inputClass}
                      style={inputStyle}
                      placeholder={placeholder}
                      onFocus={e => (e.target.style.borderColor = 'rgba(255,255,255,0.35)')}
                      onBlur={e => (e.target.style.borderColor = 'rgba(255,255,255,0.1)')}
                    />
                  </div>
                ))}

                <div>
                  <label htmlFor="enquiry" className="block text-[10px] tracking-[0.3em] uppercase mb-3 text-white/25">
                    Nature of Enquiry
                  </label>
                  <select
                    id="enquiry"
                    name="enquiry"
                    className={inputClass}
                    style={{ ...inputStyle, backgroundColor: 'var(--dark)' }}
                  >
                    <option value="" style={{ backgroundColor: '#111' }}>Select category</option>
                    <option value="register" style={{ backgroundColor: '#111' }}>Register a firm under BGC</option>
                    <option value="fund" style={{ backgroundColor: '#111' }}>Fund Management Enquiry</option>
                    <option value="partnership" style={{ backgroundColor: '#111' }}>Partnership / Advisory</option>
                    <option value="other" style={{ backgroundColor: '#111' }}>Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-[10px] tracking-[0.3em] uppercase mb-3 text-white/25">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className={inputClass + ' resize-none'}
                    style={inputStyle}
                    placeholder="Brief description of your enquiry"
                    onFocus={e => (e.target.style.borderColor = 'rgba(255,255,255,0.35)')}
                    onBlur={e => (e.target.style.borderColor = 'rgba(255,255,255,0.1)')}
                  />
                </div>

                <button
                  type="submit"
                  className="text-[12px] tracking-widest uppercase px-10 py-4 border transition-all duration-500 hover:bg-white hover:text-black w-full"
                  style={{ borderColor: 'rgba(255,255,255,0.25)', color: 'rgba(255,255,255,0.55)' }}
                >
                  Send Enquiry
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </section>
    </>
  )
}
