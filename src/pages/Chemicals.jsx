import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useScrollReveal } from '../hooks/useAnimations'

const categories = [
  {
    id: 'boiler',
    label: 'Boiler Chemicals',
    icon: '🔥',
    products: ['Antiscalants', 'pH Boosters', 'Oxygen Scavengers', 'Furnace Oil Additives', 'Online Descaling Chemicals'],
    desc: 'Our boiler chemical programs are designed to prevent scale formation, control corrosion, and scavenge dissolved oxygen — protecting your boiler investment and maintaining peak steam generation efficiency.',
    applications: ['Fire Tube Boilers', 'Water Tube Boilers', 'Steam Boilers', 'Hot Water Boilers'],
  },
  {
    id: 'cooling',
    label: 'Cooling Tower Chemicals',
    icon: '🌊',
    products: ['Antiscalants', 'Biocides', 'Dealkalizers', 'Corrosion Inhibitors', 'Online Descaling Chemicals'],
    desc: 'Cooling towers operate in demanding evaporative conditions that concentrate minerals and promote biological growth. Our cooling tower chemical programs control scale, corrosion, and microbiological activity to maintain system efficiency and protect equipment.',
    applications: ['Crossflow Cooling Towers', 'Counterflow Towers', 'Induced Draft Towers', 'Forced Draft Towers'],
  },
  {
    id: 'ro',
    label: 'RO Chemicals',
    icon: '💧',
    products: ['RO Antiscalants', 'pH Boosters', 'Algae Control Chemicals', 'Membrane Cleaning Chemicals'],
    desc: 'Reverse Osmosis membranes require specialized treatment to prevent scaling, biofouling, and chemical degradation. Our RO chemical range extends membrane life, maintains permeate quality, and reduces cleaning frequency.',
    applications: ['Industrial RO Plants', 'Pharmaceutical RO', 'Food & Beverage RO', 'Process Water RO'],
  },
  {
    id: 'chiller',
    label: 'Chiller Chemicals',
    icon: '❄️',
    products: ['Antiscalants', 'Corrosion Inhibitors'],
    desc: 'Chiller water circuits require careful chemical management to prevent scale on heat transfer surfaces and corrosion of metallic components. Our chiller chemical programs are formulated for compatibility with copper, steel, and aluminum alloys common in chiller systems.',
    applications: ['Centrifugal Chillers', 'Screw Chillers', 'Absorption Chillers', 'HVAC Systems'],
  },
  {
    id: 'evaporative',
    label: 'Evaporative Condenser Chemicals',
    icon: '🌡️',
    products: ['Scale & Corrosion Inhibitors', 'Oxidizing & Non-Oxidizing Biocides', 'Passivation Chemicals', 'Online Descaling Chemicals'],
    desc: 'Evaporative condensers combine the challenges of heat exchange and evaporative cooling. We analyze your coil material (galvanized steel, copper, stainless) and local water quality to recommend customized chemical treatment programs that protect your specific system.',
    applications: ['Industrial Refrigeration', 'Process Cooling', 'HVAC Condensers', 'Cold Storage Plants'],
  },
]

export default function Chemicals() {
  const [active, setActive] = useState('boiler')
  useScrollReveal()

  const current = categories.find(c => c.id === active)

  return (
    <main>
      <section className="page-hero">
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <span className="eyebrow">Chemical Solutions</span>
          <h1>Industrial Water Treatment Chemicals</h1>
          <p>High-performance chemical products for boilers, cooling towers, RO systems, chillers, and evaporative condensers — sourced and supplied with expert guidance.</p>
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link><span className="sep">›</span><span className="current">Chemical Solutions</span>
          </nav>
        </div>
      </section>

      <section className="section" style={{ paddingBottom: '48px' }}>
        <div className="container">
          <div className="two-col" style={{ gap: '64px', alignItems: 'center', marginBottom: '40px' }}>
            <div className="reveal">
              <span className="eyebrow">Product Sourcing</span>
              <h2 style={{ marginTop: '8px', marginBottom: '16px' }}>High-Grade Water Treatment Formulations</h2>
              <p style={{ marginBottom: '16px' }}>We source and supply high-performance chemicals designed to solve complex scaling, corrosion, and biological fouling issues in industrial facilities. All products are tested for compliance and packaged securely with full MSDS documentation.</p>
              <p>Select a category below to explore specific products, applications, and formulations matching your utility specs.</p>
            </div>
            <div className="reveal reveal-delay-2">
              <div style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-lg)' }}>
                <img src="/chemical-solutions.png" alt="Industrial Water Treatment Chemicals" style={{ width: '100%', height: '280px', objectFit: 'cover', display: 'block' }} />
              </div>
            </div>
          </div>

          {/* Category Tabs */}
          <div className="chem-tabs reveal reveal-delay-1">
            {categories.map(c => (
              <button
                key={c.id}
                className={`chem-tab${active === c.id ? ' active' : ''}`}
                onClick={() => setActive(c.id)}
                id={`tab-${c.id}`}
              >
                {c.icon} {c.label}
              </button>
            ))}
          </div>

          {/* Active Panel */}
          <div style={{ animation: 'fadeInUp .35s ease' }}>
            <div style={{ marginBottom: '32px' }}>
              <h3 style={{ marginBottom: '12px' }}>{current.icon} {current.label}</h3>
              <p style={{ maxWidth: '780px', marginBottom: '32px' }}>{current.desc}</p>

              <h4 style={{ marginBottom: '16px', color: 'var(--grey-900)', fontSize: '1rem' }}>Available Products</h4>
              <div className="products-grid">
                {current.products.map(p => (
                  <span className="product-chip" key={p}>{p}</span>
                ))}
              </div>
            </div>

            <div className="grid-2" style={{ gap: '28px' }}>
              <div style={{ background: 'var(--grey-50)', border: '1px solid var(--grey-100)', borderRadius: 'var(--radius-lg)', padding: '28px' }}>
                <h4 style={{ marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--blue-700)" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22,4 12,14.01 9,11.01"/></svg>
                  Applications
                </h4>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {current.applications.map(a => (
                    <li key={a} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '.9rem', color: 'var(--grey-700)' }}>
                      <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--copper-500)', flexShrink: 0 }} />
                      {a}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="chem-panel-info">
                <h3>Need Custom Chemical Solutions?</h3>
                <p style={{ marginBottom: '24px' }}>Every facility has unique water chemistry and equipment specifications. Our technical team will analyze your requirements and recommend the most effective treatment program for your specific needs.</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <a href="https://wa.me/919390477702?text=Hello%2C%20I%20need%20chemical%20solutions%20for%20my%20facility." className="btn btn-whatsapp" id={`chemWa-${active}`} style={{ justifyContent: 'center' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
                    WhatsApp for Custom Quote
                  </a>
                  <Link to="/contact" className="btn btn-outline-blue" id={`chemContact-${active}`} style={{ justifyContent: 'center' }}>Request Formal Quote</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Categories Overview */}
      <section className="section section--grey">
        <div className="container">
          <div className="section-header reveal">
            <span className="eyebrow">Complete Portfolio</span>
            <h2>All Chemical Categories at a Glance</h2>
          </div>
          <div className="grid-3" style={{ gap: '24px' }}>
            {categories.map((c, i) => (
              <div
                key={c.id}
                className={`card reveal reveal-delay-${(i % 3) + 1}`}
                style={{ cursor: 'pointer' }}
                onClick={() => { setActive(c.id); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              >
                <div style={{ fontSize: '2rem', marginBottom: '16px' }}>{c.icon}</div>
                <h3>{c.label}</h3>
                <p style={{ marginBottom: '16px' }}>{c.products.length} product{c.products.length !== 1 ? 's' : ''} available</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {c.products.slice(0, 3).map(p => (
                    <span key={p} style={{ background: 'var(--blue-50)', color: 'var(--blue-700)', padding: '3px 10px', borderRadius: 'var(--radius-full)', fontSize: '.75rem', fontWeight: 600, border: '1px solid var(--blue-100)' }}>{p}</span>
                  ))}
                  {c.products.length > 3 && <span style={{ background: 'var(--copper-50)', color: 'var(--copper-600)', padding: '3px 10px', borderRadius: 'var(--radius-full)', fontSize: '.75rem', fontWeight: 600, border: '1px solid var(--copper-100)' }}>+{c.products.length - 3} more</span>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-strip">
        <div className="container">
          <div className="reveal">
            <h2>Get the Right Chemicals for Your Facility</h2>
            <p>Talk to our water treatment experts for a customized chemical program recommendation.</p>
            <div className="cta-btns">
              <a href="tel:+919390477702" className="btn btn-copper" id="chemCtaCall">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.37 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.63A16 16 0 0 0 15.37 16.09l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                Call: 93904 77702
              </a>
              <Link to="/contact" className="btn btn-outline" id="chemCtaContact">Request a Quote</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
