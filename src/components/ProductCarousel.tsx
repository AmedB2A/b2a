import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react'

const PRODUCTS = [
  {
    name: 'AssoDoc',
    tagline: 'La gestion associative réinventée',
    description: 'La plateforme tout-en-un pour les associations françaises. Dons, CERFA automatiques, membres, comptabilité, site internet et bien plus.',
    url: 'https://assodoc.fr',
    category: 'SaaS B2C',
    year: '2025',
    stats: [
      { value: '20+', label: 'Outils intégrés' },
      { value: '0%', label: 'Commission' },
      { value: 'PCG', label: 'Comptabilité' },
    ],
    gradient: 'linear-gradient(135deg, #1A2E4A 0%, #2D6CDF 50%, #7C3AED 100%)',
    comingSoon: false,
  },
  {
    name: 'ViralScriptia',
    tagline: "L'IA au service du contenu viral",
    description: "Plateforme d'intelligence artificielle pour la création de scripts et contenus viraux. Optimisé pour tous les réseaux sociaux.",
    url: 'https://viralscriptia.com',
    category: 'IA Platform',
    year: '2024',
    stats: [
      { value: 'IA', label: 'Propulsé par' },
      { value: '∞', label: 'Générations' },
      { value: 'API', label: 'Intégrations' },
    ],
    gradient: 'linear-gradient(135deg, #4C1D95 0%, #7C3AED 50%, #9F67FF 100%)',
    comingSoon: false,
  },
  {
    name: 'Revigo',
    tagline: 'Révisez mieux, réussissez plus',
    description: "L'application de révision intelligente propulsée par l'IA. Fiches, quiz adaptatifs et suivi de progression pour tous les apprenants.",
    url: '#',
    category: 'Application Mobile',
    year: '2026',
    stats: [
      { value: 'IA', label: 'Propulsé par' },
      { value: 'iOS', label: 'App Store' },
      { value: 'Soon', label: 'Disponible' },
    ],
    gradient: 'linear-gradient(135deg, #7F1D1D 0%, #DC2626 50%, #F87171 100%)',
    accentColor: '#DC2626',
    comingSoon: true,
  },
]

function NotifyForm() {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [sent, setSent] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      await fetch('/api/notify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, product: 'Revigo' }),
      })
      setSent(true)
    } catch {
      setSent(true)
    } finally {
      setLoading(false)
    }
  }

  if (sent) {
    return (
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <CheckCircle2 size={18} style={{ color: '#DC2626' }} />
        <span style={{ fontSize: 13, color: '#DC2626', fontWeight: 600 }}>
          Vous serez notifié au lancement !
        </span>
      </div>
    )
  }

  return (
    <div>
      <p style={{ fontSize: 14, color: 'var(--text-2)', marginBottom: 12 }}>
        Soyez notifié du lancement
      </p>
      <form onSubmit={handleSubmit} style={{ display: 'flex' }}>
        <input
          type="email"
          required
          placeholder="Votre email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          style={{
            background: 'var(--bg-2)',
            border: '1px solid var(--border)',
            borderRadius: '10px 0 0 10px',
            padding: '10px 14px',
            fontSize: 14,
            color: 'var(--text-1)',
            outline: 'none',
            flex: 1,
            fontFamily: 'inherit',
          }}
        />
        <button
          type="submit"
          disabled={loading}
          style={{
            background: 'linear-gradient(135deg, #7F1D1D, #DC2626)',
            color: 'white',
            border: 'none',
            borderRadius: '0 10px 10px 0',
            padding: '10px 18px',
            fontSize: 13,
            fontWeight: 700,
            cursor: loading ? 'not-allowed' : 'pointer',
            whiteSpace: 'nowrap',
            fontFamily: 'inherit',
          }}
        >
          {loading ? '...' : 'Me notifier'}
        </button>
      </form>
    </div>
  )
}

export default function ProductCarousel() {
  const [current, setCurrent] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const startTimer = () => {
    timerRef.current = setInterval(() => {
      setCurrent(c => (c + 1) % PRODUCTS.length)
    }, 4000)
  }

  const stopTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current)
    }
  }

  useEffect(() => {
    if (!isHovered) startTimer()
    else stopTimer()
    return () => stopTimer()
  }, [isHovered])

  const prev = () => {
    stopTimer()
    setCurrent(c => (c - 1 + PRODUCTS.length) % PRODUCTS.length)
    startTimer()
  }

  const next = () => {
    stopTimer()
    setCurrent(c => (c + 1) % PRODUCTS.length)
    startTimer()
  }

  const product = PRODUCTS[current]

  return (
    <section
      id="produits"
      style={{
        padding: '120px 48px',
        background: 'var(--bg-2)',
        borderTop: '1px solid var(--border)',
        borderBottom: '1px solid var(--border)',
      }}
    >
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{ marginBottom: 64, textAlign: 'center' }}
        >
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            background: 'var(--accent-gradient-soft)',
            border: '1px solid rgba(124,58,237,0.15)',
            borderRadius: 9999,
            padding: '5px 14px',
            marginBottom: 20,
          }}>
            <span style={{
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              background: 'var(--accent-gradient)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>
              Nos produits
            </span>
          </div>

          <h2 style={{
            fontSize: 'clamp(32px,5vw,56px)',
            fontWeight: 900,
            letterSpacing: '-0.04em',
            lineHeight: 1.0,
            color: 'var(--text-1)',
          }}>
            Des solutions{' '}
            <span className="gradient-text">en production</span>
            <br />
            <span style={{
              color: 'var(--text-3)',
              fontWeight: 300,
              fontStyle: 'italic',
              fontFamily: 'Georgia, serif',
            }}>
              chaque jour.
            </span>
          </h2>
        </motion.div>

        {/* Carousel */}
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={{ position: 'relative' }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="carousel-card"
              style={{
                background: 'white',
                borderRadius: 28,
                overflow: 'hidden',
                boxShadow: 'var(--shadow-lg)',
                border: '1px solid var(--border)',
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                minHeight: 400,
              }}
            >
              {/* Left — gradient visual */}
              <div style={{
                background: product.gradient,
                padding: 48,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative',
                overflow: 'hidden',
              }}>
                {/* Decorative circles */}
                <div style={{
                  position: 'absolute',
                  top: -80, right: -80,
                  width: 300, height: 300,
                  borderRadius: '50%',
                  background: 'rgba(255,255,255,0.06)',
                }} />
                <div style={{
                  position: 'absolute',
                  bottom: -60, left: -60,
                  width: 200, height: 200,
                  borderRadius: '50%',
                  background: 'rgba(255,255,255,0.04)',
                }} />

                {/* Bientôt disponible badge */}
                {product.comingSoon && (
                  <div style={{
                    position: 'absolute',
                    top: 20, right: 20,
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 8,
                    background: 'rgba(255,255,255,0.15)',
                    border: '1px solid rgba(255,255,255,0.3)',
                    backdropFilter: 'blur(8px)',
                    borderRadius: 9999,
                    padding: '5px 14px',
                    zIndex: 2,
                  }}>
                    <motion.div
                      animate={{ scale: [1, 1.4, 1] }}
                      transition={{ repeat: Infinity, duration: 2 }}
                      style={{
                        width: 6, height: 6,
                        borderRadius: '50%',
                        background: 'white',
                      }}
                    />
                    <span style={{
                      fontSize: 11,
                      fontWeight: 700,
                      color: 'white',
                    }}>
                      Bientôt disponible
                    </span>
                  </div>
                )}

                <div style={{ position: 'relative', zIndex: 1 }}>
                  {/* Category */}
                  <div style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 6,
                    background: 'rgba(255,255,255,0.15)',
                    backdropFilter: 'blur(8px)',
                    borderRadius: 9999,
                    padding: '4px 12px',
                    marginBottom: 24,
                  }}>
                    <div style={{
                      width: 5, height: 5,
                      borderRadius: '50%',
                      background: 'rgba(255,255,255,0.8)',
                    }} />
                    <span style={{
                      fontSize: 11,
                      fontWeight: 600,
                      color: 'rgba(255,255,255,0.9)',
                      letterSpacing: '0.06em',
                      textTransform: 'uppercase',
                    }}>
                      {product.category}
                    </span>
                  </div>

                  {/* Product name */}
                  <h3 style={{
                    fontSize: 52,
                    fontWeight: 900,
                    letterSpacing: '-0.05em',
                    color: 'white',
                    lineHeight: 0.95,
                    marginBottom: 12,
                  }}>
                    {product.name}
                  </h3>

                  <p style={{
                    fontSize: 16,
                    color: 'rgba(255,255,255,0.65)',
                    fontStyle: 'italic',
                    fontFamily: 'Georgia, serif',
                    fontWeight: 300,
                  }}>
                    {product.tagline}
                  </p>
                </div>

                {/* Stats */}
                <div style={{
                  position: 'relative', zIndex: 1,
                  display: 'flex',
                  gap: 24,
                }}>
                  {product.stats.map(stat => (
                    <div key={stat.label}>
                      <div style={{
                        fontSize: 22,
                        fontWeight: 800,
                        color: 'white',
                        letterSpacing: '-0.03em',
                      }}>
                        {stat.value}
                      </div>
                      <div style={{
                        fontSize: 11,
                        color: 'rgba(255,255,255,0.5)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.06em',
                        marginTop: 2,
                      }}>
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right — content */}
              <div style={{
                padding: 48,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}>
                <div>
                  <div style={{
                    fontSize: 11,
                    fontWeight: 700,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    background: 'var(--accent-gradient)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    marginBottom: 16,
                  }}>
                    {product.year}
                  </div>

                  <p style={{
                    fontSize: 17,
                    color: 'var(--text-2)',
                    lineHeight: 1.7,
                    marginBottom: 32,
                    fontWeight: 400,
                  }}>
                    {product.description}
                  </p>

                  {product.comingSoon ? (
                    <NotifyForm />
                  ) : (
                    <motion.a
                      href={product.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.02, y: -1 }}
                      whileTap={{ scale: 0.98 }}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: 8,
                        background: 'var(--accent-gradient)',
                        color: 'white',
                        padding: '12px 24px',
                        borderRadius: 9999,
                        fontSize: 14,
                        fontWeight: 600,
                        textDecoration: 'none',
                        boxShadow: 'var(--shadow-purple)',
                      }}
                    >
                      Visiter {product.name}
                      <ExternalLink size={14} />
                    </motion.a>
                  )}
                </div>

                {/* Status badge */}
                {product.comingSoon ? (
                  <div style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 8,
                    background: 'rgba(220,38,38,0.08)',
                    border: '1px solid rgba(220,38,38,0.2)',
                    borderRadius: 9999,
                    padding: '6px 14px',
                    width: 'fit-content',
                  }}>
                    <motion.div
                      animate={{ scale: [1, 1.4, 1] }}
                      transition={{ repeat: Infinity, duration: 2 }}
                      style={{
                        width: 6, height: 6,
                        borderRadius: '50%',
                        background: '#DC2626',
                      }}
                    />
                    <span style={{
                      fontSize: 12,
                      fontWeight: 600,
                      color: '#DC2626',
                    }}>
                      En développement
                    </span>
                  </div>
                ) : (
                  <div style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 8,
                    background: 'rgba(16,185,129,0.08)',
                    border: '1px solid rgba(16,185,129,0.2)',
                    borderRadius: 9999,
                    padding: '6px 14px',
                    width: 'fit-content',
                  }}>
                    <motion.div
                      animate={{ scale: [1, 1.4, 1] }}
                      transition={{ repeat: Infinity, duration: 2 }}
                      style={{
                        width: 6, height: 6,
                        borderRadius: '50%',
                        background: '#10B981',
                      }}
                    />
                    <span style={{
                      fontSize: 12,
                      fontWeight: 600,
                      color: '#059669',
                    }}>
                      En production
                    </span>
                  </div>
                )}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 16,
            marginTop: 32,
          }}>
            {/* Prev */}
            <motion.button
              onClick={prev}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              style={{
                width: 40, height: 40,
                borderRadius: '50%',
                background: 'white',
                border: '1px solid var(--border)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: 'var(--shadow-sm)',
                color: 'var(--text-2)',
              }}
            >
              <ChevronLeft size={18} />
            </motion.button>

            {/* Dots */}
            <div style={{ display: 'flex', gap: 8 }}>
              {PRODUCTS.map((_, i) => (
                <motion.button
                  key={i}
                  onClick={() => {
                    stopTimer()
                    setCurrent(i)
                    startTimer()
                  }}
                  whileHover={{ scale: 1.2 }}
                  style={{
                    width: i === current ? 24 : 8,
                    height: 8,
                    borderRadius: 9999,
                    background: i === current
                      ? 'var(--accent-gradient)'
                      : 'var(--border-2)',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                  }}
                />
              ))}
            </div>

            {/* Next */}
            <motion.button
              onClick={next}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              style={{
                width: 40, height: 40,
                borderRadius: '50%',
                background: 'white',
                border: '1px solid var(--border)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: 'var(--shadow-sm)',
                color: 'var(--text-2)',
              }}
            >
              <ChevronRight size={18} />
            </motion.button>
          </div>

          {/* Progress bar */}
          <div style={{
            height: 2,
            background: 'var(--border)',
            borderRadius: 9999,
            marginTop: 20,
            overflow: 'hidden',
          }}>
            <motion.div
              key={current}
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: 4, ease: 'linear' }}
              style={{
                height: '100%',
                background: 'var(--accent-gradient)',
                borderRadius: 9999,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
