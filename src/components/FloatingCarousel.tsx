import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  Newspaper, Sparkles, BookOpen, Award,
  ArrowRight, Minus, ChevronUp,
} from 'lucide-react'

const ICONS = {
  Newspaper, Sparkles, BookOpen, Award,
}

const SLIDES = [
  {
    gradient: 'linear-gradient(135deg, #7C3AED, #2D6CDF)',
    icon: 'Newspaper' as keyof typeof ICONS,
    label: 'ACTUALITÉS',
    title: 'Suivez l\'évolution\nde B2A Groupe',
    description: 'Lancements, annonces et nouveautés directement.',
    cta: 'Voir les actualités',
    ctaHref: '/actualites',
  },
  {
    gradient: 'linear-gradient(135deg, #DC2626, #F87171)',
    icon: 'Sparkles' as keyof typeof ICONS,
    label: 'BIENTÔT',
    title: 'Revigo arrive\ntrès bientôt',
    description: 'L\'application de révision propulsée par l\'IA.',
    cta: 'Être notifié',
    ctaHref: '#produits',
  },
  {
    gradient: 'linear-gradient(135deg, #1A2E4A, #2D6CDF)',
    icon: 'BookOpen' as keyof typeof ICONS,
    label: 'BLOG',
    title: 'Guides et\nressources',
    description: 'Articles SEO, comparatifs et tutoriels.',
    cta: 'Lire le blog',
    ctaHref: '/blog',
  },
  {
    gradient: 'linear-gradient(135deg, #065F46, #10B981)',
    icon: 'Award' as keyof typeof ICONS,
    label: 'CONFIANCE',
    title: '15+ sites\ne-commerce',
    description: 'B2A Groupe propulse plus de 15 sites marchands.',
    cta: 'Notre histoire',
    ctaHref: '#about',
  },
]

export default function FloatingCarousel() {
  const [current, setCurrent] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [isDragging, setIsDragging] = useState(false)
  const [collapsed, setCollapsed] = useState(false)
  const startXRef = useRef(0)
  const [showWidget, setShowWidget] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setShowWidget(true), 2000)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (isHovered || isDragging || collapsed) return
    const timer = setInterval(() => {
      setCurrent(c => (c + 1) % SLIDES.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [isHovered, isDragging, collapsed])

  const next = () => setCurrent(c => (c + 1) % SLIDES.length)
  const prev = () => setCurrent(c => (c - 1 + SLIDES.length) % SLIDES.length)

  const handleStart = (clientX: number) => {
    startXRef.current = clientX
    setIsDragging(true)
  }

  const handleEnd = (clientX: number) => {
    if (!isDragging) return
    const delta = clientX - startXRef.current
    if (delta > 50) prev()
    if (delta < -50) next()
    setIsDragging(false)
  }

  const slide = SLIDES[current]
  const Icon = ICONS[slide.icon]

  if (!showWidget) return null

  if (collapsed) {
    return (
      <motion.div
        initial={{ scale: 0.6, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', duration: 0.4 }}
        onClick={() => setCollapsed(false)}
        style={{
          position: 'fixed',
          bottom: 32, right: 32,
          zIndex: 50,
          width: 48, height: 48,
          borderRadius: '50%',
          background: 'var(--accent-gradient)',
          boxShadow: 'var(--shadow-purple)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
        }}
        className="floating-carousel-collapsed"
      >
        <ChevronUp size={20} color="white" />
      </motion.div>
    )
  }

  return (
    <motion.div
      initial={{ y: 80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', duration: 0.6 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        position: 'fixed',
        bottom: 32, right: 32,
        zIndex: 50,
        width: 320,
      }}
      className="floating-carousel"
    >
      <div
        onMouseDown={e => handleStart(e.clientX)}
        onMouseUp={e => handleEnd(e.clientX)}
        onTouchStart={e => handleStart(e.touches[0].clientX)}
        onTouchEnd={e => handleEnd(e.changedTouches[0].clientX)}
        style={{
          background: 'white',
          border: '1px solid var(--border)',
          borderRadius: 20,
          boxShadow: '0 20px 60px rgba(0,0,0,0.12), 0 0 0 1px rgba(124,58,237,0.08)',
          overflow: 'hidden',
          cursor: isDragging ? 'grabbing' : 'grab',
          userSelect: 'none',
          position: 'relative',
        }}
      >
        {/* Minimize button */}
        <button
          onClick={() => setCollapsed(true)}
          aria-label="Réduire"
          style={{
            position: 'absolute',
            top: 12, right: 12,
            zIndex: 2,
            width: 24, height: 24,
            borderRadius: '50%',
            background: 'rgba(0,0,0,0.15)',
            border: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            padding: 0,
          }}
        >
          <Minus size={10} color="white" />
        </button>

        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Gradient header */}
            <div style={{
              background: slide.gradient,
              padding: '16px 20px',
              position: 'relative',
              overflow: 'hidden',
              minHeight: 100,
            }}>
              <div style={{
                width: 80, height: 80,
                borderRadius: '50%',
                background: 'rgba(255,255,255,0.1)',
                position: 'absolute',
                top: -20, right: -20,
              }} />

              <div style={{
                background: 'rgba(255,255,255,0.2)',
                border: '1px solid rgba(255,255,255,0.3)',
                borderRadius: 9999,
                padding: '3px 10px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: 6,
                position: 'relative',
              }}>
                <Icon size={12} color="white" />
                <span style={{
                  fontSize: 10,
                  fontWeight: 700,
                  color: 'white',
                  letterSpacing: '0.08em',
                }}>
                  {slide.label}
                </span>
              </div>

              <div style={{
                marginTop: 8,
                fontFamily: 'Syne, sans-serif',
                fontWeight: 700,
                fontSize: 18,
                color: 'white',
                letterSpacing: '-0.03em',
                lineHeight: 1.2,
                whiteSpace: 'pre-line',
                position: 'relative',
              }}>
                {slide.title}
              </div>
            </div>

            {/* Body */}
            <div style={{ padding: '14px 20px 18px' }}>
              <p style={{
                fontSize: 13,
                color: 'var(--text-2)',
                lineHeight: 1.6,
                marginBottom: 14,
              }}>
                {slide.description}
              </p>

              {slide.ctaHref.startsWith('/') ? (
                <Link
                  to={slide.ctaHref}
                  className="floating-carousel-cta"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 6,
                    background: 'var(--accent-gradient)',
                    color: 'white',
                    padding: '8px 16px',
                    borderRadius: 9999,
                    fontSize: 13,
                    fontWeight: 700,
                    textDecoration: 'none',
                  }}
                >
                  {slide.cta}
                  <ArrowRight size={12} />
                </Link>
              ) : (
                <a
                  href={slide.ctaHref}
                  className="floating-carousel-cta"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 6,
                    background: 'var(--accent-gradient)',
                    color: 'white',
                    padding: '8px 16px',
                    borderRadius: 9999,
                    fontSize: 13,
                    fontWeight: 700,
                    textDecoration: 'none',
                  }}
                >
                  {slide.cta}
                  <ArrowRight size={12} />
                </a>
              )}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Dots + navigation */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 20px 14px',
        }}>
          <div style={{ display: 'flex', gap: 6 }}>
            {SLIDES.map((_, i) => (
              <div
                key={i}
                onClick={() => setCurrent(i)}
                style={{
                  width: i === current ? 20 : 7,
                  height: 7,
                  borderRadius: 9999,
                  background: i === current ? 'var(--accent-gradient)' : 'var(--border-2)',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                }}
              />
            ))}
          </div>

          <div style={{ display: 'flex', gap: 6 }}>
            <button
              onClick={prev}
              aria-label="Précédent"
              className="floating-carousel-arrow"
              style={{
                width: 28, height: 28,
                borderRadius: '50%',
                background: 'var(--bg-2)',
                border: '1px solid var(--border)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--text-2)',
                fontSize: 14,
              }}
            >
              ‹
            </button>
            <button
              onClick={next}
              aria-label="Suivant"
              className="floating-carousel-arrow"
              style={{
                width: 28, height: 28,
                borderRadius: '50%',
                background: 'var(--bg-2)',
                border: '1px solid var(--border)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--text-2)',
                fontSize: 14,
              }}
            >
              ›
            </button>
          </div>
        </div>
      </div>

      <style>{`
        .floating-carousel-cta:hover {
          transform: scale(1.03);
          box-shadow: var(--shadow-purple);
        }
        .floating-carousel-arrow:hover {
          background: var(--bg-3) !important;
        }
        @media (max-width: 768px) {
          .floating-carousel {
            bottom: 20px !important;
            right: 16px !important;
            left: 16px !important;
            width: auto !important;
          }
          .floating-carousel-collapsed {
            bottom: 20px !important;
            right: 16px !important;
          }
        }
      `}</style>
    </motion.div>
  )
}
