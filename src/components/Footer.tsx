import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const PRODUCT_LINKS = [
  { label: 'AssoDoc', url: 'https://assodoc.fr' },
  { label: 'ViralScriptia', url: 'https://viralscriptia.com' },
  { label: 'Revigo', url: '#produits', badge: 'Bientôt' },
]

const COMPANY_LINKS = [
  { label: 'À propos', url: '#about' },
  { label: 'Actualités', url: '/actualites' },
  { label: 'Blog', url: '/blog' },
  { label: 'Contact', url: '#contact' },
  { label: 'Mentions légales', url: '/legal' },
]

function FooterLink({ label, url, badge }: { label: string; url: string; badge?: string }) {
  const style = {
    fontSize: 13,
    color: 'var(--text-3)',
    textDecoration: 'none',
    fontWeight: 500,
    transition: 'color 0.2s',
    display: 'inline-flex',
    alignItems: 'center',
    gap: 6,
  }
  const content = (
    <>
      {label}
      {badge && (
        <span style={{
          fontSize: 10,
          fontWeight: 700,
          color: '#DC2626',
          background: 'rgba(220,38,38,0.08)',
          border: '1px solid rgba(220,38,38,0.2)',
          borderRadius: 9999,
          padding: '2px 8px',
        }}>
          {badge}
        </span>
      )}
    </>
  )

  if (url.startsWith('/')) {
    return <Link to={url} style={style}>{content}</Link>
  }

  if (url.startsWith('#')) {
    return <Link to={`/${url}`} style={style}>{content}</Link>
  }

  return (
    <motion.a
      href={url}
      target={url.startsWith('http') ? '_blank' : undefined}
      rel={url.startsWith('http') ? 'noopener noreferrer' : undefined}
      whileHover={{ color: 'var(--purple)' }}
      style={style}
    >
      {content}
    </motion.a>
  )
}

export default function Footer() {
  return (
    <footer style={{
      padding: '48px',
      borderTop: '1px solid var(--border)',
      background: 'white',
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: 40,
        maxWidth: 1100,
        margin: '0 auto',
      }}>
        {/* Logo */}
        <div style={{
          display: 'flex', alignItems: 'center', gap: 10
        }}>
          <div style={{
            width: 28, height: 28,
            borderRadius: 8,
            background: 'var(--accent-gradient)',
            display: 'flex', alignItems: 'center',
            justifyContent: 'center',
          }}>
            <span style={{
              color: 'white', fontSize: 12,
              fontWeight: 800,
            }}>B</span>
          </div>
          <div>
            <div style={{
              fontSize: 15, fontWeight: 700,
              letterSpacing: '-0.02em',
              color: 'var(--text-1)',
            }}>
              B2A <span className="gradient-text">Groupe</span>
            </div>
            <div style={{
              fontSize: 11,
              color: 'var(--text-3)',
            }}>
              Éditeur de logiciels français
            </div>
          </div>
        </div>

        {/* Products column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--text-1)', letterSpacing: '0.04em', textTransform: 'uppercase' }}>
            Produits
          </div>
          {PRODUCT_LINKS.map(link => (
            <FooterLink key={link.label} {...link} />
          ))}
        </div>

        {/* Company column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--text-1)', letterSpacing: '0.04em', textTransform: 'uppercase' }}>
            Entreprise
          </div>
          {COMPANY_LINKS.map(link => (
            <FooterLink key={link.label} {...link} />
          ))}
        </div>
      </div>

      <div style={{
        fontSize: 12,
        color: 'var(--text-3)',
        textAlign: 'center',
        marginTop: 40,
        paddingTop: 24,
        borderTop: '1px solid var(--border)',
      }}>
        © 2026 B2A Groupe. Tous droits réservés.
      </div>
    </footer>
  )
}
