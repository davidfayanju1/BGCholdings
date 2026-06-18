import { NavLink } from 'react-router-dom'

export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid rgba(255,255,255,0.07)', backgroundColor: 'var(--dark)' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <p
              className="text-3xl tracking-widest uppercase mb-3 text-white"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              BGC Holdings
            </p>
            <p className="text-white/35 text-sm leading-relaxed max-w-xs">
              A Nigeria-based investment holding company that manages and invests the funds of firms registered directly under it.
            </p>
            <p className="text-white/20 text-xs mt-6 tracking-widest uppercase">
              Portfolio member: SYS Empire
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-[11px] tracking-[0.25em] uppercase text-white/25 mb-5">Navigate</p>
            <ul className="space-y-3">
              {[
                { to: '/', label: 'Home' },
                { to: '/about', label: 'About' },
                { to: '/portfolio', label: 'Portfolio' },
                { to: '/strategy', label: 'Strategy' },
                { to: '/contact', label: 'Contact' },
              ].map(({ to, label }) => (
                <li key={to}>
                  <NavLink
                    to={to}
                    end={to === '/'}
                    className="text-sm text-white/35 hover:text-white/70 transition-colors tracking-wide"
                  >
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-[11px] tracking-[0.25em] uppercase text-white/25 mb-5">Contact</p>
            <ul className="space-y-3 text-sm text-white/35">
              <li className="text-white/50">Oluwafemi Oluwayanju</li>
              <li>Lagos, Nigeria</li>
              <li className="mt-4 hover:text-white/60 transition-colors cursor-pointer">
                fayanjufemi@gmail.com
              </li>
              <li className="hover:text-white/60 transition-colors cursor-pointer">
                +234 816 152 5506
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-16 pt-8 flex flex-col md:flex-row items-center justify-between gap-4"
          style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}
        >
          <p className="text-white/20 text-xs tracking-wider">
            © {new Date().getFullYear()} BGC Holdings. All rights reserved.
          </p>
          <div className="flex gap-8">
            {['Privacy Policy', 'Terms of Use', 'Disclosures'].map((item) => (
              <span key={item} className="text-white/15 text-xs tracking-wide hover:text-white/35 transition-colors cursor-pointer">
                {item}
              </span>
            ))}
          </div>
        </div>

        <p className="text-white/12 text-[11px] leading-relaxed mt-8 max-w-4xl" style={{ color: 'rgba(255,255,255,0.1)' }}>
          BGC Holdings is a Limited Liability Company registered in Nigeria. Information on this website is for informational purposes only and does not constitute an offer to sell or solicitation to buy securities. Investment opportunities are limited to firms registered under the holding company.
        </p>
      </div>
    </footer>
  )
}
