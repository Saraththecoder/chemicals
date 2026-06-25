import { Link } from 'react-router-dom'
import { useScrollReveal, useCounter } from '../hooks/useAnimations'

const services = [
  { icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 22C6.48 22 2 17.52 2 12S6.48 2 12 2s10 4.48 10 10"/><path d="M18 14v8M22 18h-8"/></svg>, title: 'Boiler Water Treatment', img: '/services/boiler.png', desc: 'Chemical treatment programs to prevent scale, corrosion, and efficiency losses in boilers.' },
  { icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M2 17c.6 0 1.2-.2 1.6-.6.8-.8 2-.8 2.8 0l.6.6c.8.8 2 .8 2.8 0l.6-.6c.8-.8 2-.8 2.8 0l.6.6c.8.8 2 .8 2.8 0l.6-.6c.8-.8 2-.8 2.8 0l.6.6c.4.4 1 .6 1.6.6M2 12c.6 0 1.2-.2 1.6-.6.8-.8 2-.8 2.8 0l.6.6c.8.8 2 .8 2.8 0l.6-.6c.8-.8 2-.8 2.8 0l.6.6c.8.8 2 .8 2.8 0l.6-.6c.8-.8 2-.8 2.8 0l.6.6c.4.4 1 .6 1.6.6M2 7c.6 0 1.2-.2 1.6-.6.8-.8 2-.8 2.8 0l.6.6c.8.8 2 .8 2.8 0l.6-.6c.8-.8 2-.8 2.8 0l.6.6c.8.8 2 .8 2.8 0l.6-.6c.8-.8 2-.8 2.8 0l.6.6c.4.4 1 .6 1.6.6"/></svg>, title: 'Cooling Tower Chemicals', img: '/services/cooling.png', desc: 'Chemical programs to control mineral scaling, metallic corrosion, and biofouling in cooling towers.' },
  { icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 22a7 7 0 0 0 7-7c0-4.3-7-11-7-11S5 10.7 5 15a7 7 0 0 0 7 7z"/></svg>, title: 'RO Chemicals', img: '/services/ro.png', desc: 'Specialized reverse osmosis antiscalants, membrane cleaners, and biocides to extend membrane life.' },
  { icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 2v20M2 12h20"/><circle cx="12" cy="12" r="4"/></svg>, title: 'Chiller Water Treatment', img: '/services/chiller.png', desc: 'Customized treatment solutions to improve chiller performance and reduce maintenance costs.' },
  { icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M3 15a4 4 0 0 0 4 4h9a5 5 0 0 0 1.8-9.65A6 6 0 0 0 6.4 7.8 4 4 0 0 0 3 15z"/></svg>, title: 'Evaporative Condenser Chemicals & Descaling', img: '/services/evaporative.png', desc: 'Chemical treatment and maintenance solutions based on coil material and water quality.' },
  { icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="2" y="7" width="20" height="10" rx="2"/><line x1="7" y1="7" x2="7" y2="17"/><line x1="12" y1="7" x2="12" y2="17"/><line x1="17" y1="7" x2="17" y2="17"/></svg>, title: 'Heat Exchanger Descaling', img: '/services/heat-exchanger.png', desc: 'Professional chemical descaling to remove scale deposits and improve heat transfer efficiency.' },
  { icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="12" r="9"/><path d="M12 8v4l2 2"/></svg>, title: 'Shell & Tube Condensers Descaling', img: '/services/shell-tube.png', desc: 'Efficient cleaning and maintenance to maximize condenser performance and equipment life.' },
  { icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M2 20h20M4 20V10l8-6 8 6v10"/><rect x="9" y="14" width="6" height="6"/></svg>, title: 'PHE Descaling', img: '/services/phe.png', desc: 'Chemical cleaning and descaling of Plate Heat Exchanger systems for improved thermal efficiency.' },
  { icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><ellipse cx="12" cy="12" rx="10" ry="6"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 6v12"/></svg>, title: 'Surface Condenser Services', img: '/services/surface-condenser.png', desc: 'Removal of scaling, fouling, and deposits to restore operational efficiency.' },
  { icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 2a10 10 0 1 0 10 10"/><path d="M12 6v6l4 2"/></svg>, title: 'Turbine Generator Cooler', img: '/services/turbine.png', desc: 'Specialized cleaning services for turbine generator cooling systems.' },
]

const features = [
  { title: '21+ Years of Industry Experience', desc: 'Over two decades of hands-on expertise in industrial water treatment, chemical supply, and descaling services across Telangana and beyond.', icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="8" r="6"/><path d="M12 14v7M9 18h6"/></svg> },
  { title: 'Quality Chemicals', desc: 'We supply only high-grade, tested chemicals — antiscalants, biocides, corrosion inhibitors, and more — that meet industry standards.', icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg> },
  { title: 'Technical Expertise', desc: 'Our team includes specialists who understand the chemistry and engineering behind each treatment program for maximum effectiveness.', icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9.663 17h4.673M12 3v1m6.364 1.636-.707.707M21 12h-1M4 12H3m3.343-5.657-.707-.707m2.828 9.9a5 5 0 1 1 7.072 0l-.548.547A3.374 3.374 0 0 0 14 18.469V19a2 2 0 1 1-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/></svg> },
  { title: 'Reliable & On-Time Service', desc: 'Downtime costs money. We commit to prompt scheduling, reliable execution, and service delivery that keeps your operations running.', icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20,6 9,17 4,12"/></svg> },
  { title: 'Customized Solutions', desc: 'Every plant is different. We tailor our chemical programs and service protocols to your specific equipment, water quality, and operational needs.', icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 9h6M9 12h6M9 15h4"/></svg> },
  { title: 'Multi-Industry Experience', desc: 'From Power Plants to Pharmaceutical facilities, we understand the unique compliance, safety, and operational requirements of each sector.', icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg> },
]

const industries = ['⚡ Power Plants', '💊 Pharmaceuticals', '🧪 Chemical Industries', '🍽️ Food Processing', '🏭 Manufacturing', '🏢 Commercial Facilities']

export default function Home() {
  useScrollReveal()
  useCounter()

  return (
    <main>
      {/* ── Hero ───────────────────────────────────────────── */}
      <section className="hero" aria-label="Hero">
        <div className="hero-bg" aria-hidden="true" />
        <div className="hero-overlay" aria-hidden="true" />
        <div className="container">
          <div className="hero-grid">
            <div className="hero-visual reveal">
              <div className="hero-img-card">
                <img src="/about-industrial.png" alt="SV Industrial Watertech Facility" className="hero-img" />
                <div className="hero-img-overlay" />
                <div className="floating-badge badge-experience">
                  <div className="badge-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                  </div>
                  <div className="badge-info">
                    <span className="badge-num">21+ Yrs</span>
                    <span className="badge-lbl">Experience</span>
                  </div>
                </div>
                <div className="floating-badge badge-quality">
                  <div className="badge-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                  </div>
                  <div className="badge-info">
                    <span className="badge-num">Premium</span>
                    <span className="badge-lbl">Chemicals</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="hero-text reveal reveal-delay-2">
              <div className="hero-eyebrow">Expert Industrial Water Solutions</div>
              <h1>Expert Water Treatment &amp; <span className="text-gradient">Descaling Solutions</span></h1>
              <p className="hero-sub">Maximize equipment efficiency and prevent scale buildup with custom-engineered chemicals and 21+ years of expert service.</p>
              <div className="hero-ctas">
                <Link to="/contact" className="btn btn-copper" id="heroQuote">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14,2 14,8 20,8"/></svg>
                  Get Free Quote
                </Link>
                <a href="tel:+918247292504" className="btn btn-outline" id="heroCall">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.37 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.63A16 16 0 0 0 15.37 16.09l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  Call Specialist
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── About Summary ───────────────────────────────────── */}
      <section className="section" id="about-summary">
        <div className="container">
          <div className="two-col" style={{ gap: '56px' }}>
            <div className="reveal">
              <div style={{ marginBottom: '32px' }}>
                <span className="eyebrow">About Us</span>
                <h2 style={{ marginTop: '8px', marginBottom: '16px' }}>Two Decades of Water Treatment Excellence</h2>
              </div>
              <p style={{ marginBottom: '20px' }}>Sri Viranjaneya (SV) Industrial Watertech &amp; Services brings over 21 years of combined expertise in industrial water treatment. We supply high-performance chemicals and deliver professional descaling services to some of Hyderabad's most demanding industrial facilities.</p>
              <p style={{ marginBottom: '32px' }}>Operating as SV Industrial Watertech &amp; Services for the past 2 years, we have built a reputation for quality, reliability, and technical excellence across Power Plants, Pharmaceutical, Food Processing, and Manufacturing sectors.</p>
              <Link to="/about" className="btn btn-primary" id="homeAboutLink">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12,5 19,12 12,19"/></svg>
                Learn More About Us
              </Link>
            </div>
            <div className="reveal reveal-delay-2">
              <div className="grid-2" style={{ gap: '16px' }}>
                {[
                  { bg: 'linear-gradient(135deg,#0B4F6C,#062c3d)', color: '#fff', numColor: 'var(--copper-300)', count: 21, suffix: '+', label: 'Years Experience' },
                  { bg: 'var(--copper-50)', border: '1px solid var(--copper-100)', color: 'var(--grey-900)', numColor: 'var(--copper-500)', count: 10, suffix: '+', label: 'Core Services' },
                  { bg: 'var(--blue-50)', border: '1px solid var(--blue-100)', color: 'var(--grey-900)', numColor: 'var(--blue-700)', count: 500, suffix: '+', label: 'Projects Done' },
                  { bg: 'linear-gradient(135deg,var(--copper-500),var(--copper-700))', color: '#fff', numColor: '#fff', count: 6, suffix: '+', label: 'Industries' },
                ].map(s => (
                  <div key={s.label} style={{ background: s.bg, border: s.border, borderRadius: 'var(--radius-lg)', padding: '32px 24px', textAlign: 'center' }}>
                    <div style={{ fontFamily: 'var(--font-head)', fontSize: '2.5rem', fontWeight: 800, color: s.numColor, lineHeight: 1 }} data-count={s.count} data-suffix={s.suffix}>
                      {s.count}{s.suffix}
                    </div>
                    <div style={{ fontSize: '.82rem', marginTop: '8px', color: s.color === '#fff' ? 'rgba(255,255,255,.8)' : 'var(--grey-700)', textTransform: 'uppercase', letterSpacing: '.06em' }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Services Overview ────────────────────────────────── */}
      <section className="section section--grey" aria-label="Services Overview">
        <div className="container">
          <div className="section-header reveal">
            <span className="eyebrow">Our Services</span>
            <h2>Comprehensive Water Treatment Solutions</h2>
            <p>From heat exchanger descaling to complete boiler treatment programs, we offer end-to-end industrial water treatment services.</p>
          </div>
          <div className="grid-4">
            {services.map((s, i) => (
              <div className={`card service-card reveal reveal-delay-${(i % 4) + 1}`} key={s.title}>
                <div className="service-card-img-wrapper">
                  <img src={s.img} alt={s.title} className="service-card-img" />
                  <div className="service-card-icon-floating">{s.icon}</div>
                </div>
                <div className="service-card-body">
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '48px' }}>
            <Link to="/services" className="btn btn-primary" id="homeServicesLink">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12,5 19,12 12,19"/></svg>
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ───────────────────────────────────── */}
      <section className="section" aria-label="Why Choose Us">
        <div className="container">
          <div className="section-header reveal">
            <span className="eyebrow">Why Choose Us</span>
            <h2>The SV Advantage</h2>
            <p>We combine decades of field experience with advanced chemical expertise to deliver solutions that actually work.</p>
          </div>
          <div className="grid-2" style={{ gap: '12px' }}>
            {features.map((f, i) => (
              <div className={`feature-item reveal reveal-delay-${(i % 5) + 1}`} key={f.title}>
                <div className="feature-icon">{f.icon}</div>
                <div className="feature-body">
                  <h4>{f.title}</h4>
                  <p>{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Industries Strip ─────────────────────────────────── */}
      <section className="section section--grey" aria-label="Industries">
        <div className="container">
          <div className="section-header reveal">
            <span className="eyebrow">Industries Served</span>
            <h2>Trusted Across Multiple Sectors</h2>
          </div>
          <div className="reveal reveal-delay-1" style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', justifyContent: 'center' }}>
            {industries.map((ind, i) => (
              <Link
                key={ind} to="/industries"
                style={{ background: i === 0 ? 'var(--blue-700)' : 'var(--white)', color: i === 0 ? '#fff' : 'var(--grey-900)', border: i === 0 ? 'none' : '1.5px solid var(--grey-200)', padding: '12px 24px', borderRadius: 'var(--radius-full)', fontWeight: 600, fontSize: '.88rem', transition: 'var(--transition)' }}
                onMouseEnter={e => { if (i !== 0) { e.currentTarget.style.borderColor = 'var(--blue-700)'; e.currentTarget.style.color = 'var(--blue-700)' } }}
                onMouseLeave={e => { if (i !== 0) { e.currentTarget.style.borderColor = 'var(--grey-200)'; e.currentTarget.style.color = 'var(--grey-900)' } }}
              >
                {ind}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Strip ───────────────────────────────────────── */}
      <section className="cta-strip" aria-label="Contact CTA">
        <div className="container">
          <div className="reveal">
            <h2>Ready to Improve Your Water Treatment?</h2>
            <p>Get in touch with our experts today for a free consultation and customized quote.</p>
            <div className="cta-btns">
              <a href="tel:+918247292504" className="btn btn-copper" id="ctaCall">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.37 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.63A16 16 0 0 0 15.37 16.09l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                Call: 82472 92504
              </a>
              <a href="https://wa.me/918247292504?text=Hello%2C%20I%20need%20a%20quote%20for%20water%20treatment%20services." className="btn btn-whatsapp" id="ctaWa">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
                WhatsApp Us
              </a>
              <Link to="/contact" className="btn btn-outline" id="ctaSendInquiry">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                Send Inquiry
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
