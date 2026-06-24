import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
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
    }
    document.title = titles[pathname] || 'SV Industrial Watertech & Services'
  }, [pathname])
  return null
}

export default function App() {
  return (
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
      </Routes>
      <Footer />
      <FloatingCTAs />
    </BrowserRouter>
  )
}
