import { motion } from 'framer-motion'

interface Props { theme: 'dark' | 'light' }

export default function Footer({ theme }: Props) {
  void theme
  return (
    <footer style={{
      padding: '48px',
      borderTop: '1px solid var(--border)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: 24,
    }}>
      <div>
        <div style={{
          fontSize: 18,
          fontWeight: 800,
          letterSpacing: '-0.03em',
          marginBottom: 6,
        }}>
          <span style={{ color: 'var(--text-1)' }}>B2A</span>
          <span style={{ color: 'var(--green)' }}> Groupe</span>
        </div>
        <div style={{ fontSize: 13, color: 'var(--text-3)' }}>
          © 2026 B2A Groupe. Tous droits réservés.
        </div>
      </div>

      <div style={{
        display: 'flex',
        gap: 32,
        alignItems: 'center',
        flexWrap: 'wrap',
      }}>
        {[
          { label: 'AssoDoc', url: 'https://assodoc.fr' },
          { label: 'ViralScriptia', url: 'https://viralscriptia.com' },
          { label: 'Contact', url: '#contact' },
        ].map(link => (
          <motion.a
            key={link.label}
            href={link.url}
            whileHover={{ color: 'var(--green)' }}
            style={{
              fontSize: 14,
              color: 'var(--text-3)',
              textDecoration: 'none',
              fontWeight: 500,
            }}
          >
            {link.label}
          </motion.a>
        ))}
      </div>

      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        fontSize: 13,
        color: 'var(--text-3)',
      }}>
        <span>Fait avec</span>
        <span style={{ color: 'var(--green)' }}>♥</span>
        <span>par B2A Groupe</span>
      </div>
    </footer>
  )
}
