import { Link } from 'react-router-dom'
import { useScrollReveal } from '../hooks/useAnimations'

const services = [
  {
    num: '01', id: 'service-boiler',
    title: 'Boiler Water Treatment',
    img: '/services/boiler.png',
    desc: 'Comprehensive chemical treatment programs designed to prevent scale formation, corrosion, and carryover in industrial boilers. We provide online and offline descaling, pH management, oxygen scavenging, and complete treatment audits to maintain optimal boiler performance year-round.',
    tags: ['Scale Prevention', 'Corrosion Control', 'pH Management'],
  },
  {
    num: '02', id: 'service-cooling',
    title: 'Cooling Tower Chemicals',
    img: '/services/cooling.png',
    desc: 'High-performance cooling tower chemical programs to control mineral scaling, metallic corrosion, and biological fouling. We source and supply customized formulations that maintain heat rejection efficiency and extend equipment lifespan.',
    tags: ['Scale Control', 'Biocide Programs', 'Corrosion Inhibitors'],
  },
  {
    num: '03', id: 'service-ro',
    title: 'RO Chemicals',
    img: '/services/ro.png',
    desc: 'Specialized reverse osmosis water treatment chemicals, including high-efficiency antiscalants, membrane cleaning acids, and biocides. Our products prevent biofouling and scale deposition, maintaining permeate flow and quality.',
    tags: ['RO Antiscalants', 'Membrane Cleaners', 'Biofouling Control'],
  },
  {
    num: '04', id: 'service-chiller',
    title: 'Chiller Water Treatment',
    img: '/services/chiller.png',
    desc: 'Customized chemical treatment solutions to improve chiller performance, reduce energy consumption, and minimize maintenance costs. We analyze your chiller water quality, assess corrosion and scale risk, and design a tailored treatment program that keeps your HVAC or process chiller system running at peak efficiency.',
    tags: ['HVAC Chillers', 'Energy Savings', 'Process Cooling'],
  },
  {
    num: '05', id: 'service-evaporative',
    title: 'Evaporative Condenser Chemicals & Descaling',
    img: '/services/evaporative.png',
    desc: 'Tailored chemical treatment and maintenance solutions for evaporative condensers, based on coil material composition and water quality analysis. We recommend and supply customized chemical blends to prevent scale, corrosion, and biological growth on coils.',
    tags: ['Coil Protection', 'Biofouling Control', 'Custom Chemicals'],
  },
  {
    num: '06', id: 'service-heat-exchanger',
    title: 'Descaling of Heat Exchangers',
    img: '/services/heat-exchanger.png',
    desc: 'Professional chemical descaling services to remove stubborn scale deposits — including calcium carbonate, silica, and biological fouling — from heat exchanger surfaces. Our treatments improve heat transfer efficiency, restore thermal performance, and significantly extend equipment life. We use industry-safe descaling chemicals matched to your specific tube material and scale composition.',
    tags: ['Scale Removal', 'Thermal Efficiency', 'Chemical Descaling'],
  },
  {
    num: '07', id: 'service-shell-tube',
    title: 'Shell & Tube Condensers Descaling',
    img: '/services/shell-tube.png',
    desc: 'Efficient chemical and mechanical cleaning services for shell and tube condensers to maximize performance and extend equipment life. We remove fouling, biofilm, and mineral scale from both shell and tube sides, restoring rated heat exchange capacity and preventing unplanned shutdowns.',
    tags: ['Fouling Removal', 'Condenser Cleaning', 'Biofilm Control'],
  },
  {
    num: '08', id: 'service-phe',
    title: 'Plate Heat Exchanger (PHE) Descaling',
    img: '/services/phe.png',
    desc: 'Chemical cleaning and descaling of Plate Heat Exchanger (PHE) systems for improved thermal efficiency. PHEs are prone to tight-channel fouling that restricts flow and drops efficiency dramatically. Our targeted chemical protocols restore plates to near-original condition without damage.',
    tags: ['PHE Cleaning', 'Flow Restoration', 'Plate Protection'],
  },
  {
    num: '09', id: 'service-surface-condenser',
    title: 'Surface Condenser Services',
    img: '/services/surface-condenser.png',
    desc: 'Comprehensive removal of scaling, fouling, and biological deposits from surface condensers to fully restore operational efficiency. We assess the type and severity of deposit, design a targeted treatment plan, and execute the cleaning with minimal downtime impact — critical for power plant and process industry applications.',
    tags: ['Power Plants', 'Fouling Removal', 'Minimal Downtime'],
  },
  {
    num: '10', id: 'service-turbine',
    title: 'Turbine Generator Cooler Cleaning',
    img: '/services/turbine.png',
    desc: 'Specialized cleaning services for turbine generator cooling systems. Our team has experience with hydrogen-cooled and air-cooled systems, using carefully formulated chemical treatments and validated procedures to ensure safe, effective results without disrupting critical power generation equipment.',
    tags: ['Turbine Cooling', 'Specialist Service', 'Power Generation'],
  },
]

export default function Services() {
  useScrollReveal()

  return (
    <main>
      <section className="page-hero">
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <span className="eyebrow">What We Do</span>
          <h1>Industrial Water Treatment Services</h1>
          <p>Expert descaling, cleaning, and chemical treatment services for all major industrial water systems — delivered with 21+ years of field expertise.</p>
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link><span className="sep">›</span><span className="current">Services</span>
          </nav>
        </div>
      </section>

      <section className="section" style={{ paddingBottom: '48px' }}>
        <div className="container">
          <div className="two-col" style={{ gap: '64px', alignItems: 'center' }}>
            <div className="reveal">
              <span className="eyebrow">Professional Execution</span>
              <h2 style={{ marginTop: '8px', marginBottom: '20px' }}>Field-Proven Descaling &amp; Cleaning Services</h2>
              <p style={{ marginBottom: '16px' }}>Our service teams are fully equipped with specialized descaling pumps, neutralization units, and water analysis test kits to execute chemical cleaning safely on site. We match descaling solutions to the exact metallurgy of your system, ensuring zero damage to base metals.</p>
              <p style={{ marginBottom: '24px' }}>We serve major utility systems across Hyderabad and Telangana, minimizing operational downtime and restoring designed thermal transmission metrics immediately.</p>
              <a href="tel:+918247292504" className="btn btn-primary" id="svcIntroCall">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.37 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.63A16 16 0 0 0 15.37 16.09l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                Call for Site Audit
              </a>
            </div>
            <div className="reveal reveal-delay-2">
              <div style={{ position: 'relative', borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-xl)' }}>
                <img src="/descaling-service.png" alt="SV Technician Descaling Heat Exchanger" style={{ width: '100%', height: 'auto', display: 'block', maxHeight: '380px', objectFit: 'cover' }} />
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '20px', background: 'linear-gradient(to top, rgba(6,44,61,0.9), transparent)', color: '#fff' }}>
                  <h4 style={{ color: '#fff', marginBottom: '4px' }}>On-Site Chemical Cleaning</h4>
                  <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.8rem' }}>Technician executing Heat Exchanger descaling restoration</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--grey">
        <div className="container">
          <div className="section-header reveal">
            <span className="eyebrow">Our Core Solutions</span>
            <h2>10 Water Treatment Services</h2>
            <p>From chemical supply to physical cleaning, we maintain your HVAC and process utility systems at peak performance.</p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            {services.map((s, i) => (
              <div className={`row-card service-row-card reveal reveal-delay-${(i % 3) + 1}`} key={s.id} id={s.id}>
                <div className="service-row-img-wrapper" style={{ position: 'relative' }}>
                  <img src={s.img} alt={s.title} className="service-row-img" />
                  <span className="s-num" style={{ position: 'absolute', top: '12px', left: '12px', background: 'rgba(6, 44, 61, 0.85)', color: '#fff', padding: '4px 10px', borderRadius: 'var(--radius-sm)', fontSize: '0.9rem', fontWeight: 'bold', zIndex: 2 }}>{s.num}</span>
                </div>
                <div>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                  <div className="service-tags">
                    {s.tags.map(t => <span className="service-tag" key={t}>{t}</span>)}
                  </div>
                </div>
                <div className="service-actions-group">
                  <a href="tel:+918247292504" className="btn btn-outline-blue" id={`svc${s.num}Call`}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.37 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.63A16 16 0 0 0 15.37 16.09l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                    Call Us
                  </a>
                  <a href={`https://wa.me/918247292504?text=Hello,%20I%20am%20interested%20in%20your%20${encodeURIComponent(s.title)}%20services.`} className="btn btn-whatsapp" id={`svc${s.num}Wa`}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
                    WhatsApp
                  </a>
                  <Link to={`/estimate?service=${s.id}`} className="btn btn-copper" id={`svc${s.num}Estimate`}>
                    Get Estimate
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-strip">
        <div className="container">
          <div className="reveal">
            <h2>Need a Service Quote?</h2>
            <p>Contact us today for a site assessment and customized service proposal.</p>
            <div className="cta-btns">
              <a href="tel:+918247292504" className="btn btn-copper" id="svcCtaCall">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.37 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.63A16 16 0 0 0 15.37 16.09l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                Call: 82472 92504
              </a>
              <a href="https://wa.me/918247292504?text=Hello%2C%20I%20need%20a%20service%20quote." className="btn btn-whatsapp" id="svcCtaWa">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
                WhatsApp Us
              </a>
              <Link to="/contact" className="btn btn-outline" id="svcCtaForm">Send Inquiry</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
