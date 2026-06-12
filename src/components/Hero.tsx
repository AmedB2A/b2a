import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'

interface Props { theme: 'dark' | 'light' }

// Magnetic button effect
const MagneticButton = ({ children, href }: { children: React.ReactNode; href: string }) => {
  const ref = useRef<HTMLAnchorElement>(null)
  const [pos, setPos] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = ref.current!.getBoundingClientRect()
    const x = (e.clientX - rect.left - rect.width / 2) * 0.3
    const y = (e.clientY - rect.top - rect.height / 2) * 0.3
    setPos({ x, y })
  }

  return (
    <motion.a
      ref={ref}
      href={href}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setPos({ x: 0, y: 0 })}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      style={{ textDecoration: 'none' }}
    >
      {children}
    </motion.a>
  )
}

const WORDS = ['SaaS.', 'Mobile.', 'Digital.']

export default function Hero({ theme }: Props) {
  const containerRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 0.3], [0, -80])
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0])

  // Particle system
  useEffect(() => {
    const canvas = canvasRef.current!
    const ctx = canvas.getContext('2d')!
    let animId: number
    let w = canvas.width = window.innerWidth
    let h = canvas.height = window.innerHeight

    const particles: {
      x: number; y: number; vx: number; vy: number
      life: number; maxLife: number; size: number
      hue: number
    }[] = []

    for (let i = 0; i < 120; i++) {
      particles.push({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        life: Math.random() * 100,
        maxLife: 80 + Math.random() * 120,
        size: Math.random() * 1.8 + 0.3,
        hue: 150 + Math.random() * 30,
      })
    }

    let mouse = { x: w / 2, y: h / 2 }
    const onMouseMove = (e: MouseEvent) => {
      mouse = { x: e.clientX, y: e.clientY }
    }
    window.addEventListener('mousemove', onMouseMove)

    const draw = () => {
      ctx.clearRect(0, 0, w, h)

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)

          if (dist < 120) {
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = `hsla(${particles[i].hue}, 60%, 50%, ${(1 - dist / 120) * 0.08})`
            ctx.lineWidth = 0.6
            ctx.stroke()
          }
        }
      }

      particles.forEach(p => {
        const dx = mouse.x - p.x
        const dy = mouse.y - p.y
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < 200) {
          p.vx += dx / dist * 0.02
          p.vy += dy / dist * 0.02
        }

        p.vx *= 0.99
        p.vy *= 0.99
        p.x += p.vx
        p.y += p.vy
        p.life++

        if (p.life > p.maxLife) {
          p.life = 0
          p.x = Math.random() * w
          p.y = Math.random() * h
        }

        const alpha = Math.sin((p.life / p.maxLife) * Math.PI) * 0.5

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = `hsla(${p.hue}, 70%, 55%, ${alpha})`
        ctx.fill()

        if (p.x < -10) p.x = w + 10
        if (p.x > w + 10) p.x = -10
        if (p.y < -10) p.y = h + 10
        if (p.y > h + 10) p.y = -10
      })

      animId = requestAnimationFrame(draw)
    }

    draw()

    const resize = () => {
      w = canvas.width = window.innerWidth
      h = canvas.height = window.innerHeight
    }
    window.addEventListener('resize', resize)

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', onMouseMove)
    }
  }, [])

  const [wordIndex, setWordIndex] = useState(0)

  useEffect(() => {
    const t = setInterval(() => {
      setWordIndex(i => (i + 1) % WORDS.length)
    }, 2500)
    return () => clearInterval(t)
  }, [])

  return (
    <section
      ref={containerRef}
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
      }}
    >
      {/* Particle canvas */}
      <canvas
        ref={canvasRef}
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
          opacity: theme === 'dark' ? 1 : 0.4,
        }}
      />

      {/* Gradient orb center */}
      <div style={{
        position: 'absolute',
        top: '50%', left: '50%',
        transform: 'translate(-50%,-50%)',
        width: 600, height: 600,
        borderRadius: '50%',
        background: theme === 'dark'
          ? 'radial-gradient(circle, rgba(16,185,129,0.08) 0%, transparent 70%)'
          : 'radial-gradient(circle, rgba(5,150,105,0.06) 0%, transparent 70%)',
        pointerEvents: 'none',
        zIndex: 0,
        animation: 'float-gentle 8s ease-in-out infinite',
      }} />

      <motion.div style={{ y, opacity, position: 'relative', zIndex: 1 }}>
        <div style={{
          maxWidth: 900,
          margin: '0 auto',
          textAlign: 'center',
          padding: '0 32px',
        }}>

          {/* Eyebrow tag */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              background: 'var(--green-glow)',
              border: '1px solid var(--green-border)',
              borderRadius: 'var(--radius-pill)',
              padding: '7px 18px',
              marginBottom: 48,
              backdropFilter: 'blur(8px)',
            }}
          >
            <motion.div
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
              style={{
                width: 7, height: 7,
                borderRadius: '50%',
                background: 'var(--green)',
              }}
            />
            <span style={{
              fontSize: 12,
              fontWeight: 600,
              color: 'var(--green)',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
            }}>
              Agence de développement digital
            </span>
          </motion.div>

          {/* Main headline */}
          <div style={{ overflow: 'hidden', marginBottom: 8 }}>
            <motion.h1
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
              style={{
                fontSize: 'clamp(56px, 9vw, 112px)',
                fontWeight: 800,
                letterSpacing: '-0.04em',
                lineHeight: 0.95,
                color: 'var(--text-1)',
              }}
            >
              Nous créons
            </motion.h1>
          </div>

          <div style={{
            overflow: 'hidden',
            marginBottom: 8,
            height: 'clamp(68px, 11vw, 136px)',
          }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={wordIndex}
                initial={{ y: '100%', opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: '-100%', opacity: 0 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  fontSize: 'clamp(56px, 9vw, 112px)',
                  fontWeight: 800,
                  letterSpacing: '-0.04em',
                  lineHeight: 0.95,
                  background: 'linear-gradient(135deg, var(--green) 0%, var(--green-2) 50%, var(--green-3) 100%)',
                  backgroundSize: '200% 100%',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  animation: 'shimmer-green 3s linear infinite',
                }}
              >
                {WORDS[wordIndex]}
              </motion.div>
            </AnimatePresence>
          </div>

          <div style={{ overflow: 'hidden', marginBottom: 40 }}>
            <motion.h1
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
              style={{
                fontSize: 'clamp(56px, 9vw, 112px)',
                fontWeight: 800,
                letterSpacing: '-0.04em',
                lineHeight: 0.95,
                fontStyle: 'italic',
                fontFamily: "'Instrument Serif', serif",
                color: 'var(--text-2)',
              }}
            >
              l'excellence.
            </motion.h1>
          </div>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            style={{
              fontSize: 18,
              color: 'var(--text-2)',
              maxWidth: 520,
              margin: '0 auto 56px',
              lineHeight: 1.7,
              fontWeight: 400,
            }}
          >
            Produits digitaux sur mesure développés
            avec l'IA. 10× moins cher qu'une agence
            traditionnelle. Livrés en 2 à 3 mois.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            style={{
              display: 'flex',
              gap: 14,
              justifyContent: 'center',
              flexWrap: 'wrap',
            }}
          >
            <MagneticButton href="#contact">
              <motion.div
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                  background: 'var(--green)',
                  color: 'white',
                  padding: '16px 36px',
                  borderRadius: 'var(--radius-pill)',
                  fontSize: 16,
                  fontWeight: 600,
                  letterSpacing: '-0.02em',
                  cursor: 'pointer',
                  boxShadow: '0 0 40px rgba(16,185,129,0.3)',
                }}
              >
                Démarrer un projet
                <motion.span
                  animate={{ x: [0, 4, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >→</motion.span>
              </motion.div>
            </MagneticButton>

            <MagneticButton href="#portfolio">
              <motion.div
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                  background: 'var(--bg-glass)',
                  color: 'var(--text-1)',
                  padding: '16px 36px',
                  borderRadius: 'var(--radius-pill)',
                  fontSize: 16,
                  fontWeight: 500,
                  letterSpacing: '-0.02em',
                  cursor: 'pointer',
                  border: '1px solid var(--border-2)',
                  backdropFilter: 'blur(8px)',
                }}
              >
                Voir nos projets
              </motion.div>
            </MagneticButton>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            style={{
              marginTop: 80,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 12,
            }}
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
              style={{
                width: 30, height: 50,
                border: '1.5px solid var(--border-2)',
                borderRadius: 20,
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'center',
                padding: '8px 0',
              }}
            >
              <div style={{
                width: 4, height: 10,
                borderRadius: 2,
                background: 'var(--green)',
              }} />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
