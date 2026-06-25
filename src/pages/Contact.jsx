import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useScrollReveal } from '../hooks/useAnimations'

const services = [
  'Boiler Water Treatment',
  'Chiller Water Treatment',
  'Evaporative Condenser Services',
  'Heat Exchanger Descaling',
  'Shell & Tube Condenser Cleaning',
  'PHE Descaling',
  'Surface Condenser Services',
  'Turbine Generator Cooler Cleaning',
  'General Inquiry',
]

const MapPin = () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
const Phone = () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.37 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.63A16 16 0 0 0 15.37 16.09l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
const Mail = () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
const WaIcon = () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>

const initialForm = { name: '', company: '', phone: '', email: '', service: '', message: '' }

export default function Contact() {
  useScrollReveal()
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const validate = () => {
    const errs = {}
    if (!form.name.trim())    errs.name    = true
    if (!form.phone.trim())   errs.phone   = true
    if (!form.service)        errs.service = true
    if (!form.message.trim()) errs.message = true
    return errs
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const errs = validate()
    setErrors(errs)
    if (Object.keys(errs).length) return

    setLoading(true)
    await new Promise(r => setTimeout(r, 1000))

    const subject = encodeURIComponent(`Service Inquiry from ${form.name} — ${form.service}`)
    const body = encodeURIComponent(
      `Name: ${form.name}\nCompany: ${form.company}\nPhone: ${form.phone}\nEmail: ${form.email}\nService: ${form.service}\n\nMessage:\n${form.message}`
    )
    window.location.href = `mailto:svindustrialwatertech@gmail.com?subject=${subject}&body=${body}`

    setLoading(false)
    setSuccess(true)
    setForm(initialForm)
    setTimeout(() => setSuccess(false), 6000)
  }

  const handle = (field) => (e) => {
    setForm(f => ({ ...f, [field]: e.target.value }))
    setErrors(er => ({ ...er, [field]: false }))
  }

  return (
    <main>
      <section className="page-hero">
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <span className="eyebrow">Get In Touch</span>
          <h1>Contact Us</h1>
          <p>Ready to discuss your water treatment needs? Reach out via call, WhatsApp, or fill out the inquiry form below.</p>
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link><span className="sep">›</span><span className="current">Contact</span>
          </nav>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="contact-grid">

            {/* Contact Info */}
            <div className="reveal">
              <div className="contact-info-block">
                <h3>SV Industrial Watertech &amp; Services</h3>
                <p>Hyderabad's trusted industrial water treatment partner for 21+ years.</p>

                <div className="contact-detail">
                  <div className="contact-detail-icon"><MapPin /></div>
                  <div className="contact-detail-body">
                    <h4>Our Address</h4>
                    <p>E.W.S-II, Q.No.19, East MCH Colony,<br />Parsigutta, Near Hanuman Temple,<br />Ramnagar, Musheerabad,<br />Hyderabad – 500020, Telangana, India</p>
                  </div>
                </div>

                <div className="contact-detail">
                  <div className="contact-detail-icon"><Phone /></div>
                  <div className="contact-detail-body">
                    <h4>Call Us</h4>
                    <p><a href="tel:+918247292504">82472 92504</a></p>
                    <p><a href="tel:+917799133905">77991 33905</a></p>
                    <p><a href="tel:+917799053359">77990 53359</a></p>
                  </div>
                </div>

                <div className="contact-detail">
                  <div className="contact-detail-icon"><WaIcon /></div>
                  <div className="contact-detail-body">
                    <h4>WhatsApp</h4>
                    <p><a href="https://wa.me/918247292504">82472 92504</a></p>
                    <p><a href="https://wa.me/917799133905">77991 33905</a></p>
                  </div>
                </div>

                <div className="contact-detail">
                  <div className="contact-detail-icon"><Mail /></div>
                  <div className="contact-detail-body">
                    <h4>Email Us</h4>
                    <p><a href="mailto:svindustrialwatertech@gmail.com">svindustrialwatertech@gmail.com</a></p>
                  </div>
                </div>

                <div style={{ marginTop: '32px', paddingTop: '24px', borderTop: '1px solid rgba(255,255,255,.15)' }}>
                  <p style={{ fontSize: '.82rem', color: 'rgba(255,255,255,.55)', marginBottom: '12px' }}>Quick Contact</p>
                  <div style={{ display: 'flex', gap: '10px' }}>
                    <a href="tel:+918247292504" className="btn btn-copper" style={{ flex: 1, justifyContent: 'center', fontSize: '.85rem' }} id="contactCallBtn">
                      <Phone /> Call Now
                    </a>
                    <a href="https://wa.me/918247292504?text=Hello%2C%20I%20need%20a%20quote." className="btn btn-whatsapp" style={{ flex: 1, justifyContent: 'center', fontSize: '.85rem' }} id="contactWaBtn">
                      <WaIcon /> WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Inquiry Form */}
            <div className="reveal reveal-delay-2">
              <div className="contact-form-card">
                <h3>Request a Quote</h3>
                <p>Fill out the form below and we'll get back to you within 24 hours with a customized proposal.</p>

                <form onSubmit={handleSubmit} id="inquiryForm" noValidate>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name">Full Name *</label>
                      <input id="name" type="text" placeholder="Your full name" value={form.name} onChange={handle('name')} className={errors.name ? 'form-error' : ''} required />
                    </div>
                    <div className="form-group">
                      <label htmlFor="company">Company Name</label>
                      <input id="company" type="text" placeholder="Your company" value={form.company} onChange={handle('company')} />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="phone">Phone Number *</label>
                      <input id="phone" type="tel" placeholder="+91 XXXXX XXXXX" value={form.phone} onChange={handle('phone')} className={errors.phone ? 'form-error' : ''} required />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email Address</label>
                      <input id="email" type="email" placeholder="you@company.com" value={form.email} onChange={handle('email')} />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="service">Service Required *</label>
                    <select id="service" value={form.service} onChange={handle('service')} className={errors.service ? 'form-error' : ''} required>
                      <option value="">— Select a service —</option>
                      {services.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">Message *</label>
                    <textarea id="message" placeholder="Describe your requirements, equipment type, facility location, or any specific challenges you're facing..." value={form.message} onChange={handle('message')} className={errors.message ? 'form-error' : ''} required />
                  </div>

                  {success && (
                    <div className="form-success" id="formSuccess">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22,4 12,14.01 9,11.01"/></svg>
                      Thank you! Your inquiry has been sent. We'll contact you within 24 hours.
                    </div>
                  )}

                  <button type="submit" className="btn btn-primary" id="submitForm" disabled={loading} style={{ width: '100%', justifyContent: 'center', marginTop: '8px', padding: '16px' }}>
                    {loading
                      ? <><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="anim-spin"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg> Sending...</>
                      : <><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22,2 15,22 11,13 2,9"/></svg> Request a Quote</>
                    }
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Google Maps */}
          <div className="map-wrapper reveal" style={{ marginTop: '64px' }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.8046583124977!2d78.47547317480286!3d17.435041983467326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91b7e5555555%3A0x5555555555555555!2sParsigutta%2C%20Musheerabad%2C%20Hyderabad%2C%20Telangana%20500020!5e0!3m2!1sen!2sin!4v1705000000000!5m2!1sen!2sin"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="SV Industrial Watertech Location — Parsigutta, Musheerabad, Hyderabad"
              aria-label="Google Maps — Our Location in Hyderabad"
            />
          </div>
        </div>
      </section>

      {/* Quick Contact Strips */}
      <section className="section section--grey">
        <div className="container">
          <div className="section-header reveal">
            <span className="eyebrow">Other Ways to Reach Us</span>
            <h2>Contact Options</h2>
          </div>
          <div className="grid-3" style={{ gap: '20px' }}>
            {[
              { title: 'Call Us Directly', desc: 'Speak with our experts immediately for urgent inquiries or to schedule a site visit.', cta: 'Call Now', href: 'tel:+918247292504', btnClass: 'btn-primary', icon: <Phone /> },
              { title: 'WhatsApp Chat', desc: 'Send us a message on WhatsApp for quick responses, photos of your equipment, or to share technical details.', cta: 'WhatsApp Us', href: 'https://wa.me/918247292504?text=Hello%2C%20I%20need%20water%20treatment%20services.', btnClass: 'btn-whatsapp', icon: <WaIcon /> },
              { title: 'Email Us', desc: 'Send detailed specifications, equipment details, or formal inquiries to our email for a comprehensive proposal.', cta: 'Send Email', href: 'mailto:svindustrialwatertech@gmail.com', btnClass: 'btn-copper', icon: <Mail /> },
            ].map((opt, i) => (
              <div key={opt.title} className={`card reveal reveal-delay-${i + 1}`} style={{ textAlign: 'center' }}>
                <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'linear-gradient(135deg,var(--blue-50),var(--blue-100))', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--blue-700)" strokeWidth="2">
                    {opt.icon.props.children}
                  </svg>
                </div>
                <h3 style={{ marginBottom: '10px', fontSize: '1.1rem' }}>{opt.title}</h3>
                <p style={{ marginBottom: '24px', fontSize: '.9rem' }}>{opt.desc}</p>
                <a href={opt.href} className={`btn ${opt.btnClass}`} id={`opt${i + 1}`} style={{ justifyContent: 'center', width: '100%' }}>
                  {opt.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
