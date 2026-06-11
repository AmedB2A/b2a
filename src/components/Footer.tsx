export default function Footer() {
  return (
    <footer style={{
      padding: '48px',
      borderTop: '1px solid rgba(255,255,255,0.06)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: 20,
    }}>
      {/* Logo */}
      <div style={{
        fontSize: 18,
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

      {/* Links */}
      <div style={{
        display: 'flex',
        gap: 32,
      }}>
        {[
          { label: 'AssoDoc', url: 'https://assodoc.fr' },
          { label: 'ViralScriptia', url: 'https://viralscriptia.com' },
          { label: 'Contact', url: '#contact' },
        ].map(link => (
          <a
            key={link.label}
            href={link.url}
            style={{
              fontSize: 14,
              color: 'rgba(255,255,255,0.35)',
              textDecoration: 'none',
              transition: 'color 0.2s',
            }}
            onMouseEnter={e =>
              (e.target as HTMLElement).style.color = 'white'
            }
            onMouseLeave={e =>
              (e.target as HTMLElement)
                .style.color = 'rgba(255,255,255,0.35)'
            }
          >
            {link.label}
          </a>
        ))}
      </div>

      {/* Copyright */}
      <div style={{
        fontSize: 13,
        color: 'rgba(255,255,255,0.2)',
      }}>
        © 2026 B2A Groupe.
        Tous droits réservés.
      </div>
    </footer>
  )
}
