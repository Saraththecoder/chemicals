import { Link } from 'react-router-dom'

const MapPin = () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
const Phone = () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.37 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.63A16 16 0 0 0 15.37 16.09l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
const Mail = () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>

export default function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer-grid">

          {/* Brand */}
          <div className="footer-brand">
            <div className="footer-logo">
              <img src="/logo.png" alt="SV Industrial Watertech Logo" />
              <div>
                <div className="name">SV Industrial Watertech</div>
                <div className="sub">&amp; Services</div>
              </div>
            </div>
            <p>21+ years of expertise in industrial water treatment chemicals and descaling services. Serving Hyderabad, Telangana and across India.</p>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              {[['/', 'Home'], ['/about', 'About Us'], ['/services', 'Services'], ['/chemicals', 'Chemical Solutions'], ['/estimate', 'Cost Estimator'], ['/industries', 'Industries'], ['/contact', 'Contact']].map(([to, label]) => (
                <li key={to}><Link to={to}>{label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="footer-col">
            <h4>Our Services</h4>
            <ul>
              {['Boiler Water Treatment', 'Cooling Tower Chemicals', 'RO Chemicals', 'Chiller Treatment', 'Evaporative Condenser Chemicals & Descaling', 'Heat Exchanger Descaling', 'Shell & Tube Condensers Descaling', 'PHE Descaling'].map(s => (
                <li key={s}><Link to="/services">{s}</Link></li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-col">
            <h4>Contact Us</h4>
            <div className="footer-contact-item">
              <MapPin />
              <span>E.W.S-II, Q.No.19, East MCH Colony, Parsigutta, Ramnagar, Musheerabad, Hyderabad – 500020</span>
            </div>
            <div className="footer-contact-item">
              <Phone />
              <span>
                <a href="tel:+918247292504">82472 92504</a> |{' '}
                <a href="tel:+917799133905">77991 33905</a> |{' '}
                <a href="tel:+917799053359">77990 53359</a>
              </span>
            </div>
            <div className="footer-contact-item">
              <Mail />
              <span><a href="mailto:svindustrialwatertech@gmail.com">svindustrialwatertech@gmail.com</a></span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2025 Sri Viranjaneya (SV) Industrial Watertech &amp; Services. All Rights Reserved.</p>
          <div className="footer-bottom-links">
            <Link to="/contact">Get Quote</Link>
            <Link to="/estimate">Cost Estimator</Link>
            <Link to="/services">Services</Link>
            <Link to="/about">About</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
