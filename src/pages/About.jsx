import { Link } from 'react-router-dom'
import { useScrollReveal, useCounter } from '../hooks/useAnimations'

const values = [
  { title: 'Quality', desc: 'We source and supply only high-grade chemicals and deliver services that meet the highest industry benchmarks.', icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg> },
  { title: 'Integrity', desc: 'Honest pricing, transparent communication, and genuine advice — always in your best interest.', icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22V12M12 12L7 7M12 12l5-5"/><circle cx="12" cy="5" r="3"/></svg> },
  { title: 'Reliability', desc: 'When you schedule a service or order chemicals, we deliver on time — every time.', icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12,6 12,12 16,14"/></svg> },
  { title: 'Customer Commitment', desc: 'Your operational success is our success. We go the extra mile to ensure complete satisfaction.', icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg> },
  { title: 'Technical Excellence', desc: 'Our deep technical knowledge of water chemistry and treatment technologies sets us apart.', icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9.663 17h4.673M12 3v1m6.364 1.636-.707.707M21 12h-1M4 12H3m3.343-5.657-.707-.707m2.828 9.9a5 5 0 1 1 7.072 0l-.548.547A3.374 3.374 0 0 0 14 18.469V19a2 2 0 1 1-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/></svg> },
  { title: 'Safety', desc: 'All our chemicals and service procedures comply with industry safety standards to protect your personnel and equipment.', icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg> },
]

const stats = [
  { count: 21, suffix: '+', label: 'Years Experience' },
  { count: 8, suffix: '+', label: 'Core Services' },
  { count: 6, suffix: '+', label: 'Industries' },
  { count: 500, suffix: '+', label: 'Projects Done' },
]

export default function About() {
  useScrollReveal()
  useCounter()

  return (
    <main>
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <span className="eyebrow">Our Story</span>
          <h1>About SV Industrial Watertech</h1>
          <p>Over two decades of passion, expertise, and commitment to industrial water treatment excellence in Hyderabad and beyond.</p>
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span className="sep">›</span>
            <span className="current">About Us</span>
          </nav>
        </div>
      </section>

      {/* Company Overview */}
      <section className="section">
        <div className="container">
          <div className="two-col" style={{ gap: '72px' }}>
            <div className="reveal">
              <span className="eyebrow">Company Overview</span>
              <h2 style={{ marginTop: '10px', marginBottom: '20px' }}>Sri Viranjaneya (SV) Industrial Watertech &amp; Services</h2>
              <p style={{ marginBottom: '16px' }}>Sri Viranjaneya (SV) Industrial Watertech &amp; Services is a Hyderabad-based industrial water treatment company with a legacy of excellence spanning over <strong>21 years</strong>. We specialize in the supply of high-performance water treatment chemicals and the delivery of expert descaling and equipment maintenance services.</p>
              <p style={{ marginBottom: '16px' }}>Operating under the SV Industrial Watertech &amp; Services brand for the past 2 years, we have built a focused and dynamic team dedicated to solving complex water treatment challenges for industrial clients across Telangana and the wider region.</p>
              <p style={{ marginBottom: '32px' }}>Our clients range from power generation plants and pharmaceutical manufacturers to food processing units and commercial facilities — each receiving tailored solutions designed for their specific needs, water chemistry, and equipment specifications.</p>
              <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                <Link to="/services" className="btn btn-primary" id="aboutServicesLink">Explore Our Services</Link>
                <Link to="/contact" className="btn btn-outline-blue" id="aboutContactLink">Get In Touch</Link>
              </div>
            </div>
            <div className="reveal reveal-delay-2">
              <div style={{
                position: 'relative',
                backgroundImage: "url('/about-industrial.png')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                borderRadius: 'var(--radius-xl)',
                padding: '48px 36px',
                color: '#fff',
                textAlign: 'center',
                overflow: 'hidden'
              }}>
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(135deg, rgba(6, 44, 61, 0.92), rgba(11, 79, 108, 0.88))',
                  zIndex: 0
                }} />
                <div style={{ position: 'relative', zIndex: 1 }}>
                  <p style={{ color: 'rgba(255,255,255,.85)', marginBottom: '40px', fontStyle: 'italic', fontSize: '1.05rem' }}>
                    "Delivering quality chemicals and reliable services that improve equipment performance and customer productivity."
                  </p>
                  <div className="grid-2" style={{ gap: '24px' }}>
                    {stats.map(s => (
                      <div className="stat-block" key={s.label} style={{ background: 'rgba(255,255,255,.06)' }}>
                        <span className="stat-num" data-count={s.count} data-suffix={s.suffix}>{s.count}{s.suffix}</span>
                        <span className="stat-label">{s.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section section--grey">
        <div className="container">
          <div className="section-header reveal">
            <span className="eyebrow">Purpose &amp; Direction</span>
            <h2>Our Vision &amp; Mission</h2>
          </div>
          <div className="grid-2" style={{ gap: '32px' }}>
            <div className="vm-card reveal reveal-delay-1">
              <div className="vm-label">Our Vision</div>
              <h3>To Be a Trusted Leader in Industrial Water Treatment</h3>
              <p>To become a trusted leader in industrial water treatment solutions by delivering quality chemicals, reliable services, and sustainable water management practices across India's industrial sector.</p>
              <div style={{ marginTop: '24px', paddingTop: '24px', borderTop: '1px solid var(--grey-100)', display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--blue-700)', fontWeight: 600, fontSize: '.88rem' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                Trusted Leader · Quality · Sustainability
              </div>
            </div>
            <div className="vm-card reveal reveal-delay-2">
              <div className="vm-label">Our Mission</div>
              <h3>Efficient, Cost-Effective &amp; Responsible Solutions</h3>
              <p>To provide efficient, cost-effective, and environmentally responsible industrial water treatment services that improve equipment performance and customer productivity — delivered with precision and care.</p>
              <div style={{ marginTop: '24px', paddingTop: '24px', borderTop: '1px solid var(--grey-100)', display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--blue-700)', fontWeight: 600, fontSize: '.88rem' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="22,12 18,12 15,21 9,3 6,12 2,12"/></svg>
                Efficiency · Responsibility · Performance
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section">
        <div className="container">
          <div className="section-header reveal">
            <span className="eyebrow">What Drives Us</span>
            <h2>Our Core Values</h2>
            <p>These principles guide every decision, every service, and every relationship we build with our clients.</p>
          </div>
          <div className="grid-3" style={{ gap: '24px' }}>
            {values.map((v, i) => (
              <div className={`value-card reveal reveal-delay-${(i % 5) + 1}`} key={v.title}>
                <div className="v-icon">{v.icon}</div>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Dark */}
      <section className="section--dark" style={{ padding: '96px 0' }}>
        <div className="container">
          <div className="section-header reveal" style={{ marginBottom: '56px' }}>
            <span className="eyebrow" style={{ color: 'var(--copper-300)', background: 'rgba(199,107,42,.15)', borderColor: 'rgba(199,107,42,.3)' }}>Our Experience</span>
            <h2>Decades of Field-Proven Expertise</h2>
            <p style={{ color: 'rgba(255,255,255,.7)' }}>Our experience spans a broad range of industries and equipment types, giving us unmatched insight into real-world water treatment challenges.</p>
          </div>
          <div className="stats-grid-dark">
            {[
              { count: 21, suffix: '+', label: 'Years in Industry' },
              { count: 500, suffix: '+', label: 'Service Projects' },
              { count: 6, suffix: '+', label: 'Industries Served' },
              { count: 15, suffix: '+', label: 'Chemical Products' },
            ].map((s, i) => (
              <div className={`stat-block reveal reveal-delay-${i + 1}`} key={s.label}>
                <span className="stat-num" data-count={s.count} data-suffix={s.suffix}>{s.count}{s.suffix}</span>
                <span className="stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-strip">
        <div className="container">
          <div className="reveal">
            <h2>Partner with Hyderabad's Trusted Water Treatment Experts</h2>
            <p>Get a customized quote for your facility today.</p>
            <div className="cta-btns">
              <a href="tel:+918247292504" className="btn btn-copper" id="aboutCtaCall">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.37 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.63A16 16 0 0 0 15.37 16.09l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                Call: 82472 92504
              </a>
              <Link to="/contact" className="btn btn-outline" id="aboutCtaContact">Request a Quote</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
