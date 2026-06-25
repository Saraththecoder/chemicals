import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useScrollReveal } from '../hooks/useAnimations'

const systemConfigs = {
  'service-boiler': {
    id: 'service-boiler',
    title: 'Boiler Water Treatment',
    min: 1, max: 10, step: 1, defaultVal: 3,
    unit: 'TPH (Steam Capacity)',
    calcPrice: (cap) => cap * 3800 + 13000,
    calcChemical: (cap) => Math.round(cap * 28 + 55),
    calcHours: (cap) => Math.ceil(cap * 0.5 + 5),
    calcTechs: (cap) => (cap > 5 ? 4 : 2),
    inclusions: [
      'Boiler scale remover formulation',
      'Sludge conditioner & oxygen scavenger',
      'pH booster compound',
      'Hardness test reagents'
    ]
  },
  'service-cooling': {
    id: 'service-cooling',
    title: 'Cooling Tower Chemicals',
    min: 100, max: 1000, step: 50, defaultVal: 300,
    unit: 'TR (Cooling Capacity)',
    calcPrice: (cap) => cap * 22 + 9000,
    calcChemical: (cap) => Math.round(cap * 0.14 + 20),
    calcHours: (cap) => Math.ceil(cap * 0.006 + 4),
    calcTechs: (cap) => (cap > 500 ? 3 : 2),
    inclusions: [
      'Anti-scalant & silica inhibitor blend',
      'Algae & biological control biocides',
      'Corrosion coupon monitoring setup',
      'Water quality analysis kit'
    ]
  },
  'service-ro': {
    id: 'service-ro',
    title: 'RO Chemicals',
    min: 1, max: 10, step: 1, defaultVal: 3,
    unit: 'm³/hr (Feed Flow)',
    calcPrice: (cap) => cap * 3200 + 11000,
    calcChemical: (cap) => Math.round(cap * 20 + 40),
    calcHours: (cap) => Math.ceil(cap * 0.4 + 4),
    calcTechs: (cap) => (cap > 5 ? 3 : 2),
    inclusions: [
      'RO membrane anti-scalant compound',
      'Membrane cleaning acid wash',
      'pH adjusting dosing chemical',
      'Silt Density Index (SDI) test kit'
    ]
  },
  'service-chiller': {
    id: 'service-chiller',
    title: 'Chiller Water Treatment',
    min: 100, max: 1000, step: 50, defaultVal: 300,
    unit: 'TR (Chiller Capacity)',
    calcPrice: (cap) => cap * 28 + 9500,
    calcChemical: (cap) => Math.round(cap * 0.16 + 22),
    calcHours: (cap) => Math.ceil(cap * 0.007 + 4),
    calcTechs: (cap) => (cap > 600 ? 3 : 2),
    inclusions: [
      'Anti-scalant & corrosion inhibitor blend',
      'Broad-spectrum biocide chemical',
      'System passivation treatment',
      'Corrosion coupon monitoring setup'
    ]
  },
  'service-evaporative': {
    id: 'service-evaporative',
    title: 'Evaporative Condenser Chemicals & Descaling',
    min: 50, max: 500, step: 10, defaultVal: 150,
    unit: 'TR (Capacity)',
    calcPrice: (cap) => cap * 38 + 7500,
    calcChemical: (cap) => Math.round(cap * 0.24 + 10),
    calcHours: (cap) => Math.ceil(cap * 0.01 + 4),
    calcTechs: (cap) => (cap > 250 ? 3 : 2),
    inclusions: [
      'Algae & slime control biocides',
      'Eco-friendly scale inhibitor',
      'Coil cleaning chemical wash',
      'System flushing chemicals'
    ]
  },
  'service-heat-exchanger': {
    id: 'service-heat-exchanger',
    title: 'Heat Exchanger Descaling',
    min: 50, max: 500, step: 10, defaultVal: 150,
    unit: 'TR (Tonnage)',
    calcPrice: (cap) => cap * 45 + 8500,
    calcChemical: (cap) => Math.round(cap * 0.22 + 12),
    calcHours: (cap) => Math.ceil(cap * 0.01 + 4),
    calcTechs: (cap) => (cap > 250 ? 3 : 2),
    inclusions: [
      'Customized Descaling Acid Blend',
      'Base metal corrosion inhibitors',
      'pH neutralization & cleaning kits',
      'Post-service water chemistry test'
    ]
  },
  'service-shell-tube': {
    id: 'service-shell-tube',
    title: 'Shell & Tube Condensers Descaling',
    min: 100, max: 1000, step: 50, defaultVal: 400,
    unit: 'Tubes',
    calcPrice: (cap) => cap * 28 + 8000,
    calcChemical: (cap) => Math.round(cap * 0.09 + 15),
    calcHours: (cap) => Math.ceil(cap * 0.005 + 4),
    calcTechs: (cap) => (cap > 500 ? 3 : 2),
    inclusions: [
      'Eco-safe condenser cleaning chemicals',
      'Scale softener compound',
      'Neutralizing agent',
      'Tube cleaning brush set (Supply mode)'
    ]
  },
  'service-phe': {
    id: 'service-phe',
    title: 'Plate Heat Exchanger (PHE) Descaling',
    min: 20, max: 200, step: 5, defaultVal: 60,
    unit: 'Plates',
    calcPrice: (cap) => cap * 110 + 6500,
    calcChemical: (cap) => Math.round(cap * 0.35 + 10),
    calcHours: (cap) => Math.ceil(cap * 0.02 + 3),
    calcTechs: (cap) => (cap > 100 ? 3 : 2),
    inclusions: [
      'Plate-safe organic acid descalers',
      'Gasket conditioning solution',
      'Alkaline passivating blend',
      'Corrosion monitoring strips'
    ]
  }
}

export default function Estimate() {
  useScrollReveal()
  const location = useLocation()

  // Find system from URL query parameter if available
  const getInitialSystem = () => {
    const params = new URLSearchParams(location.search)
    const serviceParam = params.get('service')
    if (serviceParam && systemConfigs[serviceParam]) {
      return serviceParam
    }
    return 'service-boiler'
  }

  const [systemKey, setSystemKey] = useState(getInitialSystem())
  const activeConfig = systemConfigs[systemKey]

  const [capacity, setCapacity] = useState(activeConfig.defaultVal)
  const [scaleSeverity, setScaleSeverity] = useState('moderate') // light, moderate, heavy
  const [serviceMode, setServiceMode] = useState('end-to-end') // supply, end-to-end

  // Update capacity slider value when system type changes
  useEffect(() => {
    setCapacity(activeConfig.defaultVal)
  }, [systemKey, activeConfig])

  // Pricing Engine Calculations
  const calculateOutput = () => {
    const basePrice = activeConfig.calcPrice(capacity)
    
    // Scale Severity Multiplier: Light = 1.0, Moderate = 1.15, Heavy = 1.3
    let severityMult = 1.0
    if (scaleSeverity === 'moderate') severityMult = 1.15
    if (scaleSeverity === 'heavy') severityMult = 1.30

    // Service Mode Multiplier: Supply Only = 1.0, End-to-End Service = 2.0 (Labor + Equipment + Neutralization)
    let modeMult = 1.0
    if (serviceMode === 'end-to-end') modeMult = 2.0

    const calculatedPrice = basePrice * severityMult * modeMult
    
    // Create a price range (calculated price as lower bound, +15% as upper bound)
    const lowerBound = Math.round(calculatedPrice / 500) * 500
    const upperBound = Math.round((calculatedPrice * 1.15) / 500) * 500

    // Calculate resources
    let chemicalVolume = activeConfig.calcChemical(capacity)
    if (scaleSeverity === 'moderate') chemicalVolume = Math.round(chemicalVolume * 1.15)
    if (scaleSeverity === 'heavy') chemicalVolume = Math.round(chemicalVolume * 1.30)

    let estimatedHours = activeConfig.calcHours(capacity)
    if (scaleSeverity === 'moderate') estimatedHours = Math.ceil(estimatedHours * 1.2)
    if (scaleSeverity === 'heavy') estimatedHours = Math.ceil(estimatedHours * 1.4)

    const technicianCount = serviceMode === 'end-to-end' ? activeConfig.calcTechs(capacity) : 0

    return {
      priceRange: `₹${lowerBound.toLocaleString('en-IN')} - ₹${upperBound.toLocaleString('en-IN')}`,
      chemicals: `${chemicalVolume} Liters`,
      duration: `${estimatedHours} Hours`,
      technicians: technicianCount > 0 ? `${technicianCount} Specialists` : 'N/A (Supply Only)',
      rawLower: lowerBound,
      rawUpper: upperBound
    }
  }

  const result = calculateOutput()

  // Prefilled WhatsApp message
  const getWaLink = () => {
    const modeText = serviceMode === 'end-to-end' ? 'End-to-End Cleaning Service' : 'Chemical Supply Only'
    const severityText = scaleSeverity.charAt(0).toUpperCase() + scaleSeverity.slice(1)
    const message = `Hello! I generated an online price expectation for a project:
- Equipment: ${activeConfig.title}
- Capacity: ${capacity} ${activeConfig.unit}
- Scaling Level: ${severityText} Scale
- Mode: ${modeText}
- Estimated Price Range: ${result.priceRange}

I would like to schedule a free site audit to finalize the quote.`
    return `https://wa.me/919390477702?text=${encodeURIComponent(message)}`
  }

  return (
    <main>
      <section className="page-hero">
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <span className="eyebrow">Price Expectations</span>
          <h1>Service Cost Estimator</h1>
          <p>Get a dynamic cost expectation and resource breakdown for your industrial water treatment and descaling projects instantly.</p>
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link><span className="sep">›</span><span className="current">Cost Estimator</span>
          </nav>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="estimator-grid">
            
            {/* Input Form Card */}
            <div className="estimator-card reveal">
              <h3>Configure Equipment &amp; Treatment Options</h3>

              <div className="form-group" style={{ marginBottom: '24px' }}>
                <label htmlFor="systemType">1. Equipment / System Type</label>
                <select
                  id="systemType"
                  value={systemKey}
                  onChange={(e) => setSystemKey(e.target.value)}
                  style={{ width: '100%', marginTop: '6px' }}
                >
                  {Object.values(systemConfigs).map(cfg => (
                    <option key={cfg.id} value={cfg.id}>{cfg.title}</option>
                  ))}
                </select>
              </div>

              <div className="form-group" style={{ marginBottom: '28px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <label htmlFor="capacity">2. Equipment Capacity</label>
                  <span style={{ fontWeight: '700', color: 'var(--blue-700)', background: 'var(--blue-50)', padding: '4px 10px', borderRadius: 'var(--radius-sm)', fontSize: '0.9rem' }}>
                    {capacity} {activeConfig.unit}
                  </span>
                </div>
                <div className="range-slider-container">
                  <input
                    type="range"
                    id="capacity"
                    min={activeConfig.min}
                    max={activeConfig.max}
                    step={activeConfig.step}
                    value={capacity}
                    onChange={(e) => setCapacity(Number(e.target.value))}
                    className="range-slider"
                  />
                  <div className="slider-limits">
                    <span>Min: {activeConfig.min} {activeConfig.unit.split(' ')[0]}</span>
                    <span>Max: {activeConfig.max} {activeConfig.unit.split(' ')[0]}</span>
                  </div>
                </div>
              </div>

              <div className="form-group" style={{ marginBottom: '28px' }}>
                <label>3. Scaling / Fouling Severity</label>
                <p style={{ fontSize: '0.78rem', color: 'var(--grey-500)', marginBottom: '8px' }}>Select the level of mineral build-up inside the system tubes or plates.</p>
                <div className="tile-group">
                  {[
                    { id: 'light', title: 'Light Scale', desc: 'Thickness < 1mm' },
                    { id: 'moderate', title: 'Moderate Scale', desc: 'Thickness 1mm - 3mm' },
                    { id: 'heavy', title: 'Heavy Scale', desc: 'Thickness > 3mm' }
                  ].map(tile => (
                    <button
                      key={tile.id}
                      type="button"
                      className={`tile-btn${scaleSeverity === tile.id ? ' active' : ''}`}
                      onClick={() => setScaleSeverity(tile.id)}
                    >
                      <span className="tile-title">{tile.title}</span>
                      <span className="tile-desc">{tile.desc}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="form-group" style={{ marginBottom: '12px' }}>
                <label>4. Service Delivery Mode</label>
                <p style={{ fontSize: '0.78rem', color: 'var(--grey-500)', marginBottom: '8px' }}>Select whether you require chemicals supply only or end-to-end on-site execution.</p>
                <div className="tile-group two-col-tiles">
                  {[
                    { id: 'supply', title: 'Chemical Supply Only', desc: 'Formulated chemicals delivered to site, user handles cleaning' },
                    { id: 'end-to-end', title: 'End-to-End Cleaning', desc: 'Technician team, circulation pumps, monitoring & neutralization on-site' }
                  ].map(tile => (
                    <button
                      key={tile.id}
                      type="button"
                      className={`tile-btn${serviceMode === tile.id ? ' active' : ''}`}
                      onClick={() => setServiceMode(tile.id)}
                    >
                      <span className="tile-title">{tile.title}</span>
                      <span className="tile-desc">{tile.desc}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Results expectation card */}
            <div className="price-result-card reveal reveal-delay-2">
              <h3>Expected Estimate Output</h3>
              
              <div className="price-display-wrapper">
                <span className="price-display-label">Expected Price Range</span>
                <div className="price-range-val">{result.priceRange}</div>
                <p className="price-disclaimer">GST Extra. Cost is indicative. Final quote requires a site audit.</p>
              </div>

              <div className="inclusions-title">Resource Expectation Breakdown</div>
              <div className="metrics-row">
                <div className="metric-box">
                  <span className="metric-val">{result.chemicals}</span>
                  <span className="metric-lbl">Chemicals Vol</span>
                </div>
                <div className="metric-box">
                  <span className="metric-val">{result.duration}</span>
                  <span className="metric-lbl">Est. Duration</span>
                </div>
                <div className="metric-box">
                  <span className="metric-val">{result.technicians}</span>
                  <span className="metric-lbl">Staff Crew</span>
                </div>
              </div>

              <div className="inclusions-title">What is Included in this Estimate:</div>
              <ul className="inclusions-list">
                {activeConfig.inclusions.map((inc, index) => (
                  <li key={index} className="inclusion-item">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                    {inc}
                  </li>
                ))}
                {serviceMode === 'end-to-end' && (
                  <>
                    <li className="inclusion-item">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                      Circulating high-flow descaling pump rental &amp; operation
                    </li>
                    <li className="inclusion-item">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                      Professional on-site technicians &amp; operations crew
                    </li>
                    <li className="inclusion-item">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                      On-site chemical safety neutralization (pH scale &lt; 7 restorer)
                    </li>
                  </>
                )}
              </ul>

              <div className="result-ctas">
                <a href={getWaLink()} className="btn btn-whatsapp" id="estimateWaCta" target="_blank" rel="noopener noreferrer">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
                  Share &amp; Request Audit on WhatsApp
                </a>
                <a href="tel:+919390477702" className="btn btn-outline" id="estimateCallCta">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.37 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.63A16 16 0 0 0 15.37 16.09l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  Call Us: 93904 77702
                </a>
                <Link to="/contact" className="btn btn-outline" style={{ border: 'none', textDecoration: 'underline', color: 'rgba(255,255,255,0.75)' }} id="estimateContactLink">
                  Or Send Online Inquiry Form
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Info Section / FAQs */}
      <section className="section section--grey">
        <div className="container">
          <div className="section-header reveal">
            <span className="eyebrow">Important Details</span>
            <h2>Understanding Your Price Expectations</h2>
            <p>Read about the key components that determine your industrial cleaning costs and why site conditions matter.</p>
          </div>

          <div className="faq-grid reveal reveal-delay-2">
            <div className="faq-card">
              <h4>Why is there a price range instead of a flat rate?</h4>
              <p>Industrial water systems have varying pipe designs, elevation levels, scale density, and layout complexity. The lower bound of the range is the standard rate under average conditions, while the upper bound covers more complex site situations.</p>
            </div>
            
            <div className="faq-card">
              <h4>How does scale thickness affect the cost?</h4>
              <p>Heavier scale build-up (above 3mm) blocks water flow and restricts acid penetration. It requires specialized scale softeners, greater chemical volume, and extended circulation times (sometimes spanning multiple days) to fully dissolve without corroding base metals.</p>
            </div>

            <div className="faq-card">
              <h4>Are our chemicals safe for equipment metallurgy?</h4>
              <p>Yes. We use advanced, carefully formulated organic and inorganic descaling acids paired with high-performance corrosion inhibitors. These formulations selectively react with minerals (calcium carbonate, silica, rust) while forming a molecular shield over copper, steel, brass, or stainless steel surfaces.</p>
            </div>

            <div className="faq-card">
              <h4>What happens during the free site audit?</h4>
              <p>Our experienced site engineers will visit your plant or facility, verify piping details, take physical measurements, extract a small scale deposit sample if necessary, and check electrical/water accessibility. Following this audit, we issue a fixed, legally binding proposal.</p>
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: '56px' }} className="reveal reveal-delay-3">
            <p style={{ marginBottom: '24px', fontSize: '1.1rem' }}>Ready to proceed with professional industrial water treatment?</p>
            <Link to="/contact" className="btn btn-primary" id="faqCta">
              Schedule Free Site Audit Now
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
