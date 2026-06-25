import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import './styles/components.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import FloatingCTAs from './components/FloatingCTAs'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Chemicals from './pages/Chemicals'
import Industries from './pages/Industries'
import Contact from './pages/Contact'
import Estimate from './pages/Estimate'
import { SEO_TITLES, SEO_DESCRIPTIONS, SEO_KEYWORDS, SEO_SCHEMAS } from './utils/seo'

function SplashScreen() {
  const [visible, setVisible] = useState(true)
  const [fadeOut, setFadeOut] = useState(false)

  useEffect(() => {
    // start fade out after 1.8s
    const fadeTimer = setTimeout(() => {
      setFadeOut(true)
    }, 1800)

    // completely hide/remove component after transition (2.4s)
    const removeTimer = setTimeout(() => {
      setVisible(false)
    }, 2400)

    return () => {
      clearTimeout(fadeTimer)
      clearTimeout(removeTimer)
    }
  }, [])

  if (!visible) return null

  return (
    <div className={`splash-screen${fadeOut ? ' fade-out' : ''}`} aria-hidden="true">
      <div className="splash-logo-container">
        <img src="/logo.png" alt="SV Industrial Watertech Logo" className="splash-logo" />
        <div className="splash-brand">
          <div className="splash-brand-title">Sri Viranjaneya Industrial Watertech</div>
          <div className="splash-brand-subtitle">&amp; Services</div>
        </div>
      </div>
      <div className="splash-loader">
        <div className="splash-loader-bar"></div>
      </div>
    </div>
  )
}

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
    
    // Set title
    document.title = SEO_TITLES[pathname] || 'SV Industrial Watertech & Services'

    // Set meta description
    const desc = SEO_DESCRIPTIONS[pathname] || SEO_DESCRIPTIONS['/']
    let metaDesc = document.querySelector('meta[name="description"]')
    if (!metaDesc) {
      metaDesc = document.createElement('meta')
      metaDesc.name = 'description'
      document.head.appendChild(metaDesc)
    }
    metaDesc.content = desc

    // Set meta keywords
    const keywords = SEO_KEYWORDS[pathname] || SEO_KEYWORDS['/']
    let metaKeywords = document.querySelector('meta[name="keywords"]')
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta')
      metaKeywords.name = 'keywords'
      document.head.appendChild(metaKeywords)
    }
    metaKeywords.content = keywords

    // Set canonical link
    let canonical = document.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.rel = 'canonical'
      document.head.appendChild(canonical)
    }
    canonical.href = `https://svindustrialwatertech.com${pathname === '/' ? '' : pathname}`

    // Set JSON-LD Schema structured data
    const existingSchemas = document.querySelectorAll('script[type="application/ld+json"]')
    existingSchemas.forEach(el => el.remove())

    const schema = SEO_SCHEMAS[pathname] || SEO_SCHEMAS['/']
    if (schema) {
      const script = document.createElement('script')
      script.type = 'application/ld+json'
      script.text = JSON.stringify(schema)
      document.head.appendChild(script)
    }
  }, [pathname])
  return null
}

export default function App() {
  return (
    <>
      <SplashScreen />
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/chemicals" element={<Chemicals />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/estimate" element={<Estimate />} />
        </Routes>
        <Footer />
        <FloatingCTAs />
      </BrowserRouter>
    </>
  )
}
