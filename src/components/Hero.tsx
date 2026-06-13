import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current!
    const ctx = canvas.getContext('2d')!
    let animId: number
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    // Subtle light particles
    const particles: {
      x: number; y: number
      vx: number; vy: number
      size: number; opacity: number
      hue: number
    }[] = []

    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.15 + 0.05,
        hue: 250 + Math.random() * 40,
      })
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 140) {
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = `hsla(260, 70%, 55%, ${(1 - dist / 140) * 0.06})`
            ctx.lineWidth = 0.8
            ctx.stroke()
          }
        }
      }

      particles.forEach(p => {
        p.x += p.vx; p.y += p.vy
        if (p.x < 0) p.x = canvas.width
        if (p.x > canvas.width) p.x = 0
        if (p.y < 0) p.y = canvas.height
        if (p.y > canvas.height) p.y = 0

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = `hsla(${p.hue}, 70%, 55%, ${p.opacity})`
        ctx.fill()
      })

      animId = requestAnimationFrame(draw)
    }
    draw()

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    window.addEventListener('resize', resize)
    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <section style={{
      position: 'relative',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      background: 'var(--bg)',
      paddingTop: 64,
    }}>
      {/* Particle canvas */}
      <canvas
        ref={canvasRef}
        style={{
          position: 'absolute',
          inset: 0, zIndex: 0,
          pointerEvents: 'none',
          opacity: 0.6,
        }}
      />

      {/* Gradient orbs (light mode) */}
      <div style={{
        position: 'absolute',
        top: '10%', left: '-10%',
        width: 600, height: 600,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(124,58,237,0.06) 0%, transparent 70%)',
        pointerEvents: 'none',
        animation: 'float 12s ease-in-out infinite',
      }} />
      <div style={{
        position: 'absolute',
        bottom: '10%', right: '-10%',
        width: 500, height: 500,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(45,108,223,0.06) 0%, transparent 70%)',
        pointerEvents: 'none',
        animation: 'float 10s ease-in-out infinite reverse',
      }} />

      {/* Content */}
      <div style={{
        position: 'relative', zIndex: 1,
        maxWidth: 820,
        margin: '0 auto',
        padding: '0 32px',
        textAlign: 'center',
      }}>

        {/* Tag */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            background: 'var(--accent-gradient-soft)',
            border: '1px solid',
            borderColor: 'rgba(124,58,237,0.2)',
            borderRadius: 9999,
            padding: '6px 16px',
            marginBottom: 40,
          }}
        >
          <motion.div
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
            style={{
              width: 6, height: 6,
              borderRadius: '50%',
              background: 'var(--accent-gradient)',
            }}
          />
          <span style={{
            fontSize: 12,
            fontWeight: 600,
            background: 'var(--accent-gradient)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
          }}>
            Éditeur de logiciels français
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontSize: 'clamp(48px,8vw,96px)',
            fontWeight: 900,
            letterSpacing: '-0.05em',
            lineHeight: 0.95,
            marginBottom: 24,
          }}
        >
          <span style={{ color: 'var(--text-1)', display: 'block' }}>
            Nous construisons
          </span>
          <span
            className="gradient-text"
            style={{
              display: 'block',
              backgroundSize: '200% auto',
              animation: 'shimmer 4s linear infinite',
            }}
          >
            des logiciels
          </span>
          <span style={{
            display: 'block',
            color: 'var(--text-3)',
            fontWeight: 300,
            fontStyle: 'italic',
            fontFamily: 'Georgia, serif',
            fontSize: '0.9em',
          }}>
            qui durent.
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          style={{
            fontSize: 'clamp(16px,2.5vw,20px)',
            color: 'var(--text-2)',
            maxWidth: 540,
            margin: '0 auto 48px',
            lineHeight: 1.7,
            fontWeight: 400,
          }}
        >
          B2A Groupe conçoit et édite des solutions digitales
          utilisées chaque jour par des milliers de personnes.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65 }}
          style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}
        >
          <motion.a
            href="#produits"
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              background: 'var(--accent-gradient)',
              color: 'white',
              padding: '14px 32px',
              borderRadius: 9999,
              fontSize: 15,
              fontWeight: 600,
              textDecoration: 'none',
              boxShadow: 'var(--shadow-purple)',
              letterSpacing: '-0.01em',
            }}
          >
            Découvrir nos produits
            <ArrowRight size={16} />
          </motion.a>

          <motion.a
            href="#about"
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              padding: '14px 32px',
              borderRadius: 9999,
              fontSize: 15,
              fontWeight: 500,
              textDecoration: 'none',
              color: 'var(--text-2)',
              background: 'white',
              border: '1px solid var(--border)',
              boxShadow: 'var(--shadow-sm)',
              letterSpacing: '-0.01em',
            }}
          >
            Notre histoire
          </motion.a>
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          style={{
            marginTop: 80,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 8,
          }}
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            style={{
              width: 28, height: 44,
              border: '1.5px solid var(--border-2)',
              borderRadius: 14,
              display: 'flex',
              alignItems: 'flex-start',
              justifyContent: 'center',
              padding: '6px 0',
            }}
          >
            <div style={{
              width: 3, height: 8,
              borderRadius: 2,
              background: 'var(--accent-gradient)',
            }} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
