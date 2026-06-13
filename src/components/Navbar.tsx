import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Home } from 'lucide-react'

const MotionLink = motion(Link)

const toPath = (href: string) => (href.startsWith('#') ? `/${href}` : href)

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobile, setMobile] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const links = [
    { label: 'Produits', href: '#produits' },
    { label: 'À propos', href: '#about' },
    { label: 'Blog', href: '/blog' },
    { label: 'Actualités', href: '/actualites' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <>
      <motion.nav
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position: 'fixed',
          top: 0, left: 0, right: 0,
          zIndex: 100,
          height: 64,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 48px',
          background: scrolled
            ? 'rgba(255,255,255,0.92)'
            : 'transparent',
          backdropFilter: scrolled
            ? 'blur(20px) saturate(180%)'
            : 'none',
          borderBottom: scrolled
            ? '1px solid var(--border)'
            : 'none',
          transition: 'all 0.4s ease',
          boxShadow: scrolled
            ? 'var(--shadow-sm)'
            : 'none',
        }}
      >
        {/* Logo + Home icon */}
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <motion.a
            href="/"
            whileHover={{ scale: 1.02 }}
            style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 10 }}
          >
            {/* Animated logo mark */}
            <div style={{ position: 'relative', width: 32, height: 32 }}>
              {/* Rotating gradient ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                style={{
                  position: 'absolute',
                  inset: -2,
                  borderRadius: 12,
                  background: 'conic-gradient(from 0deg, #7C3AED, #2D6CDF, #7C3AED)',
                  zIndex: 0,
                  opacity: 0.7,
                }}
              />

              {/* Main square */}
              <motion.div
                animate={{
                  boxShadow: [
                    '0 4px 16px rgba(124,58,237,0.2)',
                    '0 8px 32px rgba(124,58,237,0.45)',
                    '0 4px 16px rgba(124,58,237,0.2)',
                  ],
                }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                style={{
                  width: 32, height: 32,
                  borderRadius: 10,
                  background: 'var(--accent-gradient)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                  zIndex: 1,
                }}
              >
                <motion.span
                  animate={{ scale: [1, 1.08, 1], opacity: [0.9, 1, 0.9] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
                  style={{
                    color: 'white',
                    fontSize: 14,
                    fontWeight: 900,
                    letterSpacing: '-0.03em',
                    lineHeight: 1,
                  }}
                >
                  B
                </motion.span>
              </motion.div>
            </div>

            {/* Text logo */}
            <div>
              <motion.span
                animate={{ backgroundPosition: ['0% center', '200% center', '0% center'] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                style={{
                  fontSize: 16,
                  fontWeight: 700,
                  letterSpacing: '-0.03em',
                  background: 'linear-gradient(90deg, #0A0A14, #7C3AED, #2D6CDF, #0A0A14)',
                  backgroundSize: '200% auto',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  display: 'inline-block',
                }}
              >
                B2A Groupe
              </motion.span>
              <div style={{
                fontSize: 9,
                color: 'var(--text-3)',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                fontWeight: 500,
                marginTop: -1,
              }}>
                Éditeur de logiciels
              </div>
            </div>
          </motion.a>

          {/* Home icon — only on non-home pages */}
          {pathname !== '/' && (
            <motion.a
              href="/"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              title="Accueil"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: 36, height: 36,
                borderRadius: 10,
                background: 'var(--bg-2)',
                border: '1px solid var(--border)',
                color: 'var(--text-2)',
                textDecoration: 'none',
                transition: 'all 0.2s ease',
                marginLeft: 8,
              }}
              onMouseEnter={e => {
                ;(e.currentTarget as HTMLElement).style.background = 'var(--accent-gradient-soft)'
                ;(e.currentTarget as HTMLElement).style.borderColor = 'rgba(124,58,237,0.25)'
                ;(e.currentTarget as HTMLElement).style.color = 'var(--purple)'
              }}
              onMouseLeave={e => {
                ;(e.currentTarget as HTMLElement).style.background = 'var(--bg-2)'
                ;(e.currentTarget as HTMLElement).style.borderColor = 'var(--border)'
                ;(e.currentTarget as HTMLElement).style.color = 'var(--text-2)'
              }}
            >
              <Home size={16} />
            </motion.a>
          )}
        </div>

        {/* Desktop links */}
        <div style={{
          display: 'flex', alignItems: 'center', gap: 36
        }}>
          {links.map((link, i) => {
            const linkStyle = {
              fontSize: 14, fontWeight: 500,
              color: 'var(--text-2)',
              textDecoration: 'none',
              transition: 'color 0.2s',
              letterSpacing: '-0.01em',
            }
            const hoverHandlers = {
              onMouseEnter: (e: React.MouseEvent) =>
                ((e.target as HTMLElement).style.color = 'var(--purple)'),
              onMouseLeave: (e: React.MouseEvent) =>
                ((e.target as HTMLElement).style.color = 'var(--text-2)'),
            }
            return (
              <MotionLink
                key={link.label}
                to={toPath(link.href)}
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * i }}
                style={linkStyle}
                {...hoverHandlers}
              >
                {link.label}
              </MotionLink>
            )
          })}

          {/* CTA */}
          <motion.div
            className="navbar-cta"
            whileHover={{ scale: 1.03, y: -1 }}
            whileTap={{ scale: 0.97 }}
          >
            <Link
              to="/#contact"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 6,
                background: 'var(--accent-gradient)',
                color: 'white',
                padding: '9px 22px',
                borderRadius: 9999,
                fontSize: 14,
                fontWeight: 600,
                textDecoration: 'none',
                letterSpacing: '-0.01em',
                boxShadow: 'var(--shadow-purple)',
                transition: 'box-shadow 0.2s ease',
              }}
              onMouseEnter={e =>
                (e.currentTarget as HTMLElement)
                  .style.boxShadow =
                  '0 16px 48px rgba(124,58,237,0.35)'
              }
              onMouseLeave={e =>
                (e.currentTarget as HTMLElement)
                  .style.boxShadow = 'var(--shadow-purple)'
              }
            >
              Nous contacter
            </Link>
          </motion.div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobile(!mobile)}
            style={{
              display: 'none',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: 'var(--text-1)',
              padding: 4,
            }}
            className="mobile-btn"
          >
            {mobile ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobile && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            style={{
              position: 'fixed',
              top: 64, left: 0, right: 0,
              zIndex: 99,
              background: 'rgba(255,255,255,0.97)',
              backdropFilter: 'blur(20px)',
              borderBottom: '1px solid var(--border)',
              padding: '24px 32px',
              display: 'flex',
              flexDirection: 'column',
              gap: 20,
              boxShadow: 'var(--shadow-md)',
            }}
          >
            {links.map(link => (
              <Link
                key={link.label}
                to={toPath(link.href)}
                onClick={() => setMobile(false)}
                style={{
                  fontSize: 20,
                  fontWeight: 600,
                  color: 'var(--text-1)',
                  textDecoration: 'none',
                  letterSpacing: '-0.02em',
                }}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/#contact"
              onClick={() => setMobile(false)}
              style={{
                padding: '12px 0',
                borderRadius: 12,
                background: 'var(--accent-gradient)',
                color: 'white',
                textAlign: 'center',
                fontWeight: 600,
                textDecoration: 'none',
                fontSize: 15,
              }}
            >
              Nous contacter
            </Link>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .mobile-btn { display: flex !important; }
          nav > div:last-child > a:not(:last-child) { display: none !important; }
          .navbar-cta { display: none !important; }
        }
      `}</style>
    </>
  )
}
