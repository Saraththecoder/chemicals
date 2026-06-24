import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const PhoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.37 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.63A16 16 0 0 0 15.37 16.09l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
)
const WaIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
  </svg>
)

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/chemicals', label: 'Chemicals' },
  { to: '/industries', label: 'Industries' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setMenuOpen(false) }, [location])

  return (
    <>
      <nav className={`nav${scrolled ? ' scrolled' : ''}`} aria-label="Main Navigation">
        <div className="nav-inner">
          <Link to="/" className="nav-logo" aria-label="SV Industrial Watertech Home">
            <img src="/logo.png" alt="SV Logo" />
            <div className="nav-logo-text">
              <span className="brand-sv">SV Industrial Watertech</span>
              <span className="brand-full">&amp; Services</span>
            </div>
          </Link>

          <div className="nav-links" role="menubar">
            {navLinks.map(l => (
              <Link
                key={l.to} to={l.to} role="menuitem"
                className={location.pathname === l.to ? 'active' : ''}
              >
                {l.label}
              </Link>
            ))}
          </div>

          <div className="nav-cta">
            <a
              href="https://wa.me/918247292504?text=Hello%2C%20I%20am%20interested%20in%20your%20water%20treatment%20services."
              className="btn btn-whatsapp-outline" id="navWhatsapp"
            >
              <WaIcon /> WhatsApp
            </a>
            <Link to="/contact" className="btn btn-copper" id="navQuote" style={{ padding: '10px 22px', fontSize: '0.9rem' }}>Get Quote</Link>
          </div>

          <button
            className="nav-hamburger"
            id="hamburger"
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(o => !o)}
          >
            <span style={menuOpen ? { transform: 'translateY(7px) rotate(45deg)' } : {}} />
            <span style={menuOpen ? { opacity: 0 } : {}} />
            <span style={menuOpen ? { transform: 'translateY(-7px) rotate(-45deg)' } : {}} />
          </button>
        </div>
      </nav>

      <div className={`nav-mobile${menuOpen ? ' open' : ''}${scrolled ? ' scrolled' : ''}`} aria-label="Mobile Navigation">
        {navLinks.map(l => (
          <Link key={l.to} to={l.to}>{l.label}</Link>
        ))}
        <div className="mobile-cta">
          <a href="tel:+918247292504" className="btn btn-primary" style={{ flex: 1, justifyContent: 'center' }} id="mobileCall">
            <PhoneIcon /> Call Now
          </a>
          <a href="https://wa.me/918247292504" className="btn btn-whatsapp" style={{ flex: 1, justifyContent: 'center' }} id="mobileWa">
            <WaIcon /> WhatsApp
          </a>
        </div>
      </div>
    </>
  )
}
