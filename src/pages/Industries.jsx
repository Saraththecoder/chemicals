import { Link } from 'react-router-dom'
import { useScrollReveal } from '../hooks/useAnimations'

const industries = [
  {
    title: 'Power Plants',
    desc: 'Surface condensers, turbine coolers, boiler water treatment, and cooling tower programs for thermal and gas power stations.',
    icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>,
    tags: ['Surface Condensers', 'Turbine Coolers', 'Boiler Treatment'],
  },
  {
    title: 'Pharmaceuticals',
    desc: 'RO membrane treatment, pure water system maintenance, and cooling system management meeting GMP and regulatory requirements.',
    icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v11m0 0H5m4 0h4m5-11v11m0 0h-4m4 0h4"/><rect x="5" y="14" width="14" height="7" rx="1"/></svg>,
    tags: ['RO Treatment', 'Pure Water Systems', 'GMP Compliant'],
  },
  {
    title: 'Chemical Industries',
    desc: 'Heat exchanger maintenance, process cooling tower treatment, and specialized chemical programs for process industry equipment.',
    icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M9 3v11l-4 6h14l-4-6V3"/><line x1="6" y1="3" x2="18" y2="3"/></svg>,
    tags: ['Heat Exchangers', 'Process Cooling', 'Specialized Chemicals'],
  },
  {
    title: 'Food Processing',
    desc: 'Food-safe water treatment chemicals and cleaning programs that maintain equipment hygiene and meet food safety standards.',
    icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></svg>,
    tags: ['Food-Safe Chemicals', 'Equipment Hygiene', 'FSSAI Compliance'],
  },
  {
    title: 'Manufacturing',
    desc: 'Complete water treatment solutions for manufacturing plants — from process cooling to boiler systems and hydraulic systems.',
    icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/><line x1="12" y1="12" x2="12" y2="16"/><line x1="10" y1="14" x2="14" y2="14"/></svg>,
    tags: ['Process Cooling', 'Boiler Systems', 'Plant Water Management'],
  },
  {
    title: 'Commercial Facilities',
    desc: 'HVAC chiller treatment, cooling tower maintenance, and building water system management for commercial and institutional buildings.',
    icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>,
    tags: ['HVAC Chillers', 'Cooling Towers', 'Building Systems'],
  },
]

export default function Industries() {
  useScrollReveal()

  return (
    <main>
      <section className="page-hero">
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <span className="eyebrow">Who We Serve</span>
          <h1>Industries We Serve</h1>
          <p>Trusted by industrial facilities across Hyderabad and Telangana — from power generation to food processing, we understand the unique water treatment needs of each sector.</p>
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link><span className="sep">›</span><span className="current">Industries</span>
          </nav>
        </div>
      </section>

      {/* Industry Cards */}
      <section className="section" style={{ paddingBottom: '48px' }}>
        <div className="container">
          <div className="two-col" style={{ gap: '56px', alignItems: 'center', marginBottom: '48px' }}>
            <div className="reveal">
              <span className="eyebrow">Sector Expertise</span>
              <h2 style={{ marginTop: '8px', marginBottom: '16px' }}>Water Treatment for Diverse Industries</h2>
              <p style={{ marginBottom: '16px' }}>Our 21+ years of industry experience spans a wide range of industrial and commercial sectors. We understand the specific water purity regulations, heat transfer limits, and compliance specifications of each sector.</p>
              <p>From power generation cooling towers to pharmaceutical RO pretreatment, we supply chemicals and service programs tailored to your plant requirements.</p>
            </div>
            <div className="reveal reveal-delay-2">
              <div style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-xl)' }}>
                <img src="/industry-sectors.png" alt="Industrial Manufacturing Facilities" style={{ width: '100%', height: '280px', objectFit: 'cover', display: 'block' }} />
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {industries.map((ind, i) => (
              <div
                key={ind.title}
                className={`row-card reveal reveal-delay-${(i % 3) + 1}`}
              >
                <div className="v-icon-box">
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    {ind.icon.props.children}
                  </svg>
                </div>
                <div>
                  <h3 style={{ marginBottom: '8px' }}>{ind.title}</h3>
                  <p style={{ marginBottom: '16px' }}>{ind.desc}</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {ind.tags.map(t => (
                      <span key={t} className="service-tag">{t}</span>
                    ))}
                  </div>
                </div>
                <Link to="/contact" className="btn btn-outline-blue r-cta" id={`ind${i + 1}Inquiry`}>
                  Get Quote
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Trust Us */}
      <section className="section section--grey">
        <div className="container">
          <div className="section-header reveal">
            <span className="eyebrow">Our Approach</span>
            <h2>Industry-Specific Expertise</h2>
            <p>We don't use a one-size-fits-all approach. Every industry and facility gets a tailored water treatment program based on their equipment, water quality, and operational requirements.</p>
          </div>
          <div className="grid-3" style={{ gap: '24px' }}>
            {[
              { title: 'Site Assessment', desc: 'We begin with a thorough assessment of your facility, equipment, and existing water quality data to understand your specific challenges.', icon: '🔍' },
              { title: 'Custom Program Design', desc: 'Based on the assessment, we design a tailored chemical treatment program and service schedule optimized for your system.', icon: '📋' },
              { title: 'Ongoing Support', desc: 'We provide regular monitoring, testing, and program adjustments to ensure consistent performance and protection throughout the year.', icon: '🛠️' },
            ].map((step, i) => (
              <div key={step.title} className={`card reveal reveal-delay-${i + 1}`}>
                <div style={{ fontSize: '2.2rem', marginBottom: '16px' }}>{step.icon}</div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-strip">
        <div className="container">
          <div className="reveal">
            <h2>Serving Your Industry Since 2002</h2>
            <p>Contact us to discuss your facility's specific water treatment requirements.</p>
            <div className="cta-btns">
              <a href="tel:+919390477702" className="btn btn-copper" id="indCtaCall">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.37 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.63A16 16 0 0 0 15.37 16.09l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                Call: 93904 77702
              </a>
              <a href="https://wa.me/919390477702" className="btn btn-whatsapp" id="indCtaWa">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
                WhatsApp Us
              </a>
              <Link to="/contact" className="btn btn-outline" id="indCtaContact">Send Inquiry</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
