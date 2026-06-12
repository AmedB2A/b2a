import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Sun, Moon, Menu, X } from 'lucide-react'

interface Props {
  theme: 'dark' | 'light'
  toggleTheme: () => void
}

export default function Navbar({ theme, toggleTheme }: Props) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = ['Services', 'Portfolio', 'Processus', 'Contact']

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position: 'fixed',
          top: 0, left: 0, right: 0,
          zIndex: 1000,
          height: 68,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 48px',
          background: scrolled
            ? theme === 'dark'
              ? 'rgba(0,0,0,0.8)'
              : 'rgba(250,250,248,0.85)'
            : 'transparent',
          backdropFilter: scrolled ? 'blur(24px) saturate(180%)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(24px) saturate(180%)' : 'none',
          borderBottom: scrolled ? '1px solid var(--border)' : 'none',
          transition: 'background 0.4s ease, border-color 0.4s ease',
        }}
      >
        {/* Logo */}
        <motion.a
          href="#"
          whileHover={{ scale: 1.02 }}
          style={{
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            gap: 10,
          }}
        >
          <div style={{
            width: 32, height: 32,
            borderRadius: 9,
            background: 'linear-gradient(135deg, var(--green), var(--green-2))',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            animation: 'glow-pulse 3s ease-in-out infinite',
          }}>
            <span style={{
              color: 'white',
              fontSize: 14,
              fontWeight: 800,
              letterSpacing: '-0.03em',
            }}>B</span>
          </div>

          <span style={{
            fontSize: 17,
            fontWeight: 700,
            letterSpacing: '-0.03em',
            color: 'var(--text-1)',
          }}>
            B2A
            <span style={{ color: 'var(--green)', marginLeft: 2 }}>Groupe</span>
          </span>
        </motion.a>

        {/* Desktop nav */}
        <div className="navbar-links" style={{
          display: 'flex',
          alignItems: 'center',
          gap: 36,
        }}>
          {links.map((link, i) => (
            <motion.a
              key={link}
              href={`#${link.toLowerCase()}`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.05 }}
              whileHover={{ y: -1 }}
              className="navbar-link"
              style={{
                fontSize: 14,
                fontWeight: 500,
                color: 'var(--text-2)',
                textDecoration: 'none',
                transition: 'color 0.2s',
                letterSpacing: '-0.01em',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--green)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-2)')}
            >
              {link}
            </motion.a>
          ))}

          {/* Theme toggle */}
          <motion.button
            onClick={toggleTheme}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Changer de thème"
            style={{
              width: 40, height: 40,
              borderRadius: '50%',
              background: 'var(--bg-glass)',
              border: '1px solid var(--border)',
              color: 'var(--text-2)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
            }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={theme}
                initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
                animate={{ rotate: 0, opacity: 1, scale: 1 }}
                exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.2 }}
                style={{ display: 'flex' }}
              >
                {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
              </motion.div>
            </AnimatePresence>
          </motion.button>

          {/* CTA */}
          <motion.a
            href="#contact"
            className="navbar-cta"
            whileHover={{ scale: 1.03, boxShadow: 'var(--shadow-green)' }}
            whileTap={{ scale: 0.97 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 6,
              background: 'var(--green)',
              color: 'white',
              padding: '10px 22px',
              borderRadius: 'var(--radius-pill)',
              fontSize: 14,
              fontWeight: 600,
              textDecoration: 'none',
              letterSpacing: '-0.01em',
            }}
          >
            Démarrer un projet
            <span style={{ fontSize: 16 }}>→</span>
          </motion.a>

          {/* Mobile menu button */}
          <motion.button
            onClick={() => setMobileOpen(!mobileOpen)}
            whileTap={{ scale: 0.9 }}
            aria-label="Menu"
            className="mobile-menu-btn"
            style={{
              display: 'none',
              background: 'none',
              border: 'none',
              color: 'var(--text-1)',
              cursor: 'pointer',
              padding: 4,
            }}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            style={{
              position: 'fixed',
              top: 68, left: 0, right: 0,
              zIndex: 999,
              background: theme === 'dark'
                ? 'rgba(10,10,10,0.98)'
                : 'rgba(250,250,248,0.98)',
              backdropFilter: 'blur(24px)',
              borderBottom: '1px solid var(--border)',
              padding: '24px 32px',
              display: 'flex',
              flexDirection: 'column',
              gap: 20,
            }}
          >
            {links.map(link => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={() => setMobileOpen(false)}
                style={{
                  fontSize: 20,
                  fontWeight: 600,
                  color: 'var(--text-1)',
                  textDecoration: 'none',
                  letterSpacing: '-0.02em',
                }}
              >
                {link}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .mobile-menu-btn { display: flex !important; }
          .navbar-link, .navbar-cta { display: none !important; }
        }
      `}</style>
    </>
  )
}
