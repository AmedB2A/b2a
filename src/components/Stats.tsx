const STATS = [
  { value: '10+', label: 'Projets livrés' },
  { value: '2-3', label: 'Mois de livraison' },
  { value: '0€', label: 'Frais cachés' },
  { value: '100%', label: 'Code source fourni' },
]

export default function Stats() {
  return (
    <section style={{
      padding: '80px 48px',
      borderTop: '1px solid rgba(255,255,255,0.06)',
      borderBottom: '1px solid rgba(255,255,255,0.06)',
    }}>
      <div style={{
        maxWidth: 1100,
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(4,1fr)',
        gap: 1,
      }}>
        {STATS.map((stat, i) => (
          <div
            key={i}
            style={{
              textAlign: 'center',
              padding: '40px 32px',
              borderRight: i < 3
                ? '1px solid rgba(255,255,255,0.06)'
                : 'none',
            }}
          >
            <div style={{
              fontSize: 52,
              fontWeight: 700,
              letterSpacing: '-0.03em',
              background: 'linear-gradient(135deg, #D4AF37, #F5E070)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              marginBottom: 8,
            }}>
              {stat.value}
            </div>
            <div style={{
              fontSize: 14,
              color: 'rgba(255,255,255,0.4)',
              letterSpacing: '0.02em',
            }}>
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
