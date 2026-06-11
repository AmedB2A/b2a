const STEPS = [
  {
    number: '01',
    title: 'Formulaire',
    description: 'Décrivez votre projet en détail. Fonctionnalités, design, contraintes.',
    timeframe: 'Maintenant',
    color: '#3B82F6',
  },
  {
    number: '02',
    title: 'Rappel sous 48h',
    description: 'L\'équipe B2A Groupe analyse votre demande et vous rappelle.',
    timeframe: 'J+2',
    color: '#10B981',
  },
  {
    number: '03',
    title: 'Virement bancaire',
    description: 'Acompte 50% au démarrage. Solde à la livraison. Zéro surprise.',
    timeframe: 'J+5',
    color: '#D4AF37',
  },
  {
    number: '04',
    title: 'Développement',
    description: 'Développement avec points d\'avancement réguliers. Vous voyez l\'évolution.',
    timeframe: '2-3 mois',
    color: '#8B5CF6',
  },
  {
    number: '05',
    title: 'Livraison',
    description: 'Code source + déploiement + formation. Vous êtes propriétaire à 100%.',
    timeframe: 'J+60/90',
    color: '#D4AF37',
  },
]

export default function Process() {
  return (
    <section
      id="process"
      style={{ padding: '120px 48px' }}
    >
      <div style={{ maxWidth: 900, margin: '0 auto' }}>

        <div style={{
          textAlign: 'center',
          marginBottom: 80,
        }}>
          <div style={{
            fontSize: 12, fontWeight: 600,
            letterSpacing: '0.15em',
            color: '#D4AF37', marginBottom: 20,
          }}>
            PROCESSUS
          </div>

          <h2 style={{
            fontSize: 'clamp(36px,5vw,56px)',
            fontWeight: 700,
            letterSpacing: '-0.03em',
          }}>
            Simple.
            <br />
            <span style={{
              background: 'linear-gradient(135deg, #D4AF37, #F5E070)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>
              Transparent.
            </span>
            {' '}Rapide.
          </h2>
        </div>

        <div style={{
          position: 'relative',
        }}>
          {/* Vertical line */}
          <div style={{
            position: 'absolute',
            left: 27,
            top: 0, bottom: 0,
            width: 1,
            background: 'linear-gradient(to bottom, transparent, rgba(212,175,55,0.3), transparent)',
          }} />

          {STEPS.map((step, i) => (
            <div
              key={i}
              style={{
                display: 'flex',
                gap: 32,
                marginBottom: i < STEPS.length - 1
                  ? 48 : 0,
                position: 'relative',
              }}
            >
              {/* Number circle */}
              <div style={{
                width: 56, height: 56,
                borderRadius: '50%',
                background: `rgba(${
                  step.color === '#3B82F6'
                    ? '59,130,246'
                    : step.color === '#10B981'
                      ? '16,185,129'
                      : step.color === '#D4AF37'
                        ? '212,175,55'
                        : step.color === '#8B5CF6'
                          ? '139,92,246'
                          : '212,175,55'
                },0.12)`,
                border: `1px solid ${step.color}30`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                zIndex: 1,
                fontSize: 16,
                fontWeight: 700,
                color: step.color,
                letterSpacing: '-0.02em',
              }}>
                {step.number}
              </div>

              {/* Content */}
              <div style={{ paddingTop: 12 }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 12,
                  marginBottom: 8,
                }}>
                  <h3 style={{
                    fontSize: 20,
                    fontWeight: 700,
                    letterSpacing: '-0.02em',
                  }}>
                    {step.title}
                  </h3>

                  <span style={{
                    fontSize: 11,
                    fontWeight: 600,
                    padding: '3px 10px',
                    borderRadius: 9999,
                    background: `${step.color}15`,
                    color: step.color,
                    letterSpacing: '0.04em',
                  }}>
                    {step.timeframe}
                  </span>
                </div>

                <p style={{
                  fontSize: 16,
                  color: 'rgba(255,255,255,0.45)',
                  lineHeight: 1.65,
                }}>
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
