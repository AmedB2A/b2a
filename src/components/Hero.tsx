import { useEffect, useRef } from 'react'

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  // Particle animation
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')!

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles: {
      x: number; y: number
      vx: number; vy: number
      size: number; opacity: number
    }[] = []

    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 1.5 + 0.5,
        opacity: Math.random() * 0.4 + 0.1,
      })
    }

    let frameId: number

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach(p => {
        p.x += p.vx
        p.y += p.vy

        if (p.x < 0) p.x = canvas.width
        if (p.x > canvas.width) p.x = 0
        if (p.y < 0) p.y = canvas.height
        if (p.y > canvas.height) p.y = 0

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(212,175,55,${p.opacity})`
        ctx.fill()
      })

      frameId = requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
      cancelAnimationFrame(frameId)
    }
  }, [])

  return (
    <section style={{
      position: 'relative',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '120px 48px 80px',
      overflow: 'hidden',
      textAlign: 'center',
    }}>
      {/* Particle canvas */}
      <canvas
        ref={canvasRef}
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
          pointerEvents: 'none',
        }}
      />

      {/* Radial glow */}
      <div style={{
        position: 'absolute',
        top: '50%', left: '50%',
        transform: 'translate(-50%,-50%)',
        width: 800, height: 800,
        background: 'radial-gradient(circle, rgba(212,175,55,0.06) 0%, transparent 70%)',
        pointerEvents: 'none',
        zIndex: 0,
      }} />

      <div style={{ position: 'relative', zIndex: 1 }}>
        {/* Tag */}
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 8,
          background: 'rgba(212,175,55,0.08)',
          border: '1px solid rgba(212,175,55,0.2)',
          borderRadius: 9999,
          padding: '6px 16px',
          marginBottom: 40,
        }}>
          <div style={{
            width: 6, height: 6,
            borderRadius: '50%',
            background: '#D4AF37',
            animation: 'pulse-gold 2s infinite',
          }} />
          <span style={{
            fontSize: 13,
            fontWeight: 600,
            color: '#D4AF37',
            letterSpacing: '0.05em',
          }}>
            AGENCE DE DÉVELOPPEMENT DIGITAL
          </span>
        </div>

        {/* Headline */}
        <h1 style={{
          fontSize: 'clamp(52px, 8vw, 96px)',
          fontWeight: 700,
          letterSpacing: '-0.04em',
          lineHeight: 1.0,
          marginBottom: 28,
          animation: 'fadeUp 0.8s ease both',
        }}>
          Nous créons
          <br />
          <span style={{
            background: 'linear-gradient(135deg, #D4AF37 0%, #F5E070 40%, #D4AF37 100%)',
            backgroundSize: '200% 100%',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            animation: 'shimmer 3s linear infinite',
          }}>
            l'excellence
          </span>
          <br />
          digitale.
        </h1>

        {/* Subheadline */}
        <p style={{
          fontSize: 20,
          color: 'rgba(255,255,255,0.5)',
          maxWidth: 580,
          margin: '0 auto 48px',
          lineHeight: 1.65,
          animation: 'fadeUp 0.8s ease 0.1s both',
        }}>
          SaaS, applications mobiles et produits
          digitaux conçus pour durer.
          Livraison en 2 à 3 mois.
        </p>

        {/* CTAs */}
        <div style={{
          display: 'flex',
          gap: 16,
          justifyContent: 'center',
          flexWrap: 'wrap',
          animation: 'fadeUp 0.8s ease 0.2s both',
        }}>
          <a
            href="#contact"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              background: 'linear-gradient(135deg, #D4AF37, #F5E070)',
              color: '#000',
              padding: '16px 36px',
              borderRadius: 9999,
              fontSize: 16,
              fontWeight: 700,
              textDecoration: 'none',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement)
                .style.transform = 'translateY(-2px)'
              ;(e.currentTarget as HTMLElement)
                .style.boxShadow = '0 16px 40px rgba(212,175,55,0.4)'
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement)
                .style.transform = 'translateY(0)'
              ;(e.currentTarget as HTMLElement)
                .style.boxShadow = 'none'
            }}
          >
            Démarrer un projet →
          </a>

          <a
            href="#portfolio"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              padding: '16px 36px',
              borderRadius: 9999,
              fontSize: 16,
              fontWeight: 500,
              textDecoration: 'none',
              color: 'white',
              background: 'rgba(255,255,255,0.06)',
              border: '1px solid rgba(255,255,255,0.1)',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement)
                .style.background = 'rgba(255,255,255,0.1)'
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement)
                .style.background = 'rgba(255,255,255,0.06)'
            }}
          >
            Voir nos projets
          </a>
        </div>

        {/* Scroll indicator */}
        <div style={{
          marginTop: 80,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 8,
          color: 'rgba(255,255,255,0.25)',
          fontSize: 12,
          letterSpacing: '0.1em',
        }}>
          <div style={{
            width: 1,
            height: 48,
            background: 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.2))',
          }} />
          SCROLL
        </div>
      </div>
    </section>
  )
}
