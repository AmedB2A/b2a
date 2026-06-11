import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () =>
      setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener(
      'scroll', onScroll
    )
  }, [])

  return (
    <nav style={{
      position: 'fixed',
      top: 0, left: 0, right: 0,
      zIndex: 100,
      height: 64,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 48px',
      background: scrolled
        ? 'rgba(0,0,0,0.85)'
        : 'transparent',
      backdropFilter: scrolled
        ? 'blur(20px)'
        : 'none',
      borderBottom: scrolled
        ? '1px solid rgba(255,255,255,0.06)'
        : 'none',
      transition: 'all 0.3s ease',
    }}>
      {/* Logo */}
      <div style={{
        fontFamily: '-apple-system, sans-serif',
        fontSize: 20,
        fontWeight: 700,
        letterSpacing: '-0.02em',
      }}>
        <span style={{ color: 'white' }}>B2A</span>
        <span style={{
          background: 'linear-gradient(135deg, #D4AF37, #F5E070)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}> Groupe</span>
      </div>

      {/* Nav links */}
      <div style={{
        display: 'flex',
        gap: 40,
        alignItems: 'center',
      }}>
        {['Services', 'Portfolio', 'Process', 'Contact'].map(item => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            style={{
              color: 'rgba(255,255,255,0.6)',
              textDecoration: 'none',
              fontSize: 14,
              fontWeight: 500,
              transition: 'color 0.2s',
            }}
            onMouseEnter={e =>
              (e.target as HTMLAnchorElement)
                .style.color = 'white'
            }
            onMouseLeave={e =>
              (e.target as HTMLAnchorElement)
                .style.color = 'rgba(255,255,255,0.6)'
            }
          >
            {item}
          </a>
        ))}

        <a
          href="#contact"
          style={{
            background: 'linear-gradient(135deg, #D4AF37, #F5E070)',
            color: '#000',
            padding: '8px 20px',
            borderRadius: 9999,
            fontSize: 14,
            fontWeight: 600,
            textDecoration: 'none',
            transition: 'all 0.2s ease',
          }}
          onMouseEnter={e => {
            const el = e.target as HTMLElement
            el.style.transform = 'scale(1.05)'
            el.style.boxShadow = '0 8px 24px rgba(212,175,55,0.4)'
          }}
          onMouseLeave={e => {
            const el = e.target as HTMLElement
            el.style.transform = 'scale(1)'
            el.style.boxShadow = 'none'
          }}
        >
          Démarrer un projet
        </a>
      </div>
    </nav>
  )
}
