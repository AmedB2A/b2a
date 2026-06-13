import { useEffect } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Lenis from 'lenis'
import Navbar from './components/Navbar'
import FloatingCarousel from './components/FloatingCarousel'
import ScrollToHash from './components/ScrollToHash'
import Footer from './components/Footer'
import Home from './pages/Home'
import Blog from './pages/Blog'
import Actualites from './pages/Actualites'
import Legal from './pages/Legal'
import CerfaGuide from './pages/blog/CerfaGuide'
import ComparatifLogiciels from './pages/blog/ComparatifLogiciels'
import HelloAssoAlternative from './pages/blog/HelloAssoAlternative'
import CreerAssociation from './pages/blog/CreerAssociation'
import RecuFiscal from './pages/blog/RecuFiscal'
import AppRevisionIA from './pages/blog/AppRevisionIA'

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    })

    const raf = (time: number) => {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    return () => lenis.destroy()
  }, [])

  return (
    <div style={{ background: 'var(--bg)' }}>
      <Navbar />
      <ScrollToHash />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/cerfa-association-guide" element={<CerfaGuide />} />
        <Route path="/blog/logiciel-gestion-association-comparatif" element={<ComparatifLogiciels />} />
        <Route path="/blog/helloasso-alternative" element={<HelloAssoAlternative />} />
        <Route path="/blog/creer-association-loi-1901" element={<CreerAssociation />} />
        <Route path="/blog/recu-fiscal-don-association" element={<RecuFiscal />} />
        <Route path="/blog/application-revision-ia" element={<AppRevisionIA />} />
        <Route path="/actualites" element={<Actualites />} />
        <Route path="/legal" element={<Legal />} />
        <Route path="/about" element={<Navigate to="/#about" replace />} />
        <Route path="/product" element={<Navigate to="/#produits" replace />} />
        <Route path="/pricing" element={<Navigate to="/?subject=Demande+de+tarif#contact" replace />} />
      </Routes>
      <Footer />
      <FloatingCarousel />
    </div>
  )
}
