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
    const titles = {
      '/': 'SV Industrial Watertech & Services | Water Treatment & Descaling Hyderabad',
      '/about': 'About Us | SV Industrial Watertech & Services',
      '/services': 'Industrial Water Treatment Services | SV Industrial Watertech',
      '/chemicals': 'Water Treatment Chemicals Portfolio | SV Industrial Watertech',
      '/industries': 'Industries Served | SV Industrial Watertech & Services',
      '/contact': 'Request a Quote & Contact | SV Industrial Watertech',
      '/estimate': 'Instant Service Price Estimate | SV Industrial Watertech',
    }
    document.title = titles[pathname] || 'SV Industrial Watertech & Services'
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
