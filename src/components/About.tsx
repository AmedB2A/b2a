import { motion } from 'framer-motion'
import { Code2, Shield, Zap, Globe } from 'lucide-react'

const PILLARS = [
  {
    icon: Code2,
    title: 'Expertise technique',
    desc: 'React, TypeScript, Supabase, Stripe. Stack moderne et éprouvée sur nos propres produits.',
  },
  {
    icon: Shield,
    title: 'Produits robustes',
    desc: 'Nos logiciels sont conçus pour durer. Architecture scalable, sécurité renforcée, RGPD.',
  },
  {
    icon: Zap,
    title: 'Développement IA-First',
    desc: 'Nous utilisons les meilleurs outils IA pour innover et livrer rapidement sans compromis.',
  },
  {
    icon: Globe,
    title: 'Ancrage français',
    desc: 'Éditeur français, hébergement en Europe, conformité aux normes françaises et européennes.',
  },
]

export default function About() {
  return (
    <section
      id="about"
      style={{ padding: '120px 48px' }}
    >
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>

        <div className="about-grid" style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 80,
          alignItems: 'center',
          marginBottom: 96,
        }}>
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              background: 'var(--accent-gradient-soft)',
              border: '1px solid rgba(124,58,237,0.15)',
              borderRadius: 9999,
              padding: '5px 14px',
              marginBottom: 24,
            }}>
              <span style={{
                fontSize: 11, fontWeight: 700,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                background: 'var(--accent-gradient)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>
                Notre histoire
              </span>
            </div>

            <h2 style={{
              fontSize: 'clamp(32px,4vw,52px)',
              fontWeight: 900,
              letterSpacing: '-0.04em',
              lineHeight: 1.0,
              color: 'var(--text-1)',
              marginBottom: 24,
            }}>
              Un éditeur
              <br />
              <span className="gradient-text">
                indépendant.
              </span>
            </h2>

            <p style={{
              fontSize: 17,
              color: 'var(--text-2)',
              lineHeight: 1.75,
              marginBottom: 16,
            }}>
              B2A Groupe est un éditeur de logiciels français fondé
              avec une vision claire : créer des outils digitaux
              qui simplifient la vie de leurs utilisateurs.
            </p>

            <p style={{
              fontSize: 17,
              color: 'var(--text-2)',
              lineHeight: 1.75,
              marginBottom: 32,
            }}>
              Nos produits sont conçus, développés et maintenus
              en interne. Chaque fonctionnalité est pensée pour
              répondre à des besoins réels, validés sur le terrain.
            </p>

            {/* Quote */}
            <div style={{
              borderLeft: '3px solid',
              borderImage: 'var(--accent-gradient) 1',
              paddingLeft: 20,
            }}>
              <p style={{
                fontSize: 15,
                color: 'var(--text-2)',
                fontStyle: 'italic',
                fontFamily: 'Georgia, serif',
                lineHeight: 1.7,
              }}>
                "Nous construisons des outils que nous utilisons
                nous-mêmes. C'est notre meilleure garantie de qualité."
              </p>
              <p style={{
                fontSize: 13,
                color: 'var(--text-3)',
                marginTop: 8,
                fontWeight: 500,
              }}>
                — Ahmed Boudrari, Fondateur B2A Groupe
              </p>
            </div>
          </motion.div>

          {/* Right — visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            style={{ position: 'relative' }}
          >
            {/* Main card */}
            <div style={{
              background: 'white',
              borderRadius: 24,
              padding: 40,
              boxShadow: 'var(--shadow-lg)',
              border: '1px solid var(--border)',
              position: 'relative',
              zIndex: 1,
            }}>
              {/* Top gradient line */}
              <div style={{
                position: 'absolute', top: 0,
                left: 0, right: 0, height: 3,
                background: 'var(--accent-gradient)',
                borderRadius: '24px 24px 0 0',
              }} />

              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: 24,
              }}>
                {[
                  { value: '2', label: 'Produits en prod.', color: '#7C3AED' },
                  { value: 'FR', label: 'Éditeur français', color: '#2D6CDF' },
                  { value: '2024', label: 'Fondé en', color: '#7C3AED' },
                  { value: '∞', label: 'Ambition', color: '#2D6CDF' },
                ].map(stat => (
                  <div key={stat.label} style={{
                    background: 'var(--bg-2)',
                    borderRadius: 14,
                    padding: '20px 16px',
                    textAlign: 'center',
                  }}>
                    <div style={{
                      fontSize: 32,
                      fontWeight: 900,
                      letterSpacing: '-0.04em',
                      color: stat.color,
                      marginBottom: 4,
                    }}>
                      {stat.value}
                    </div>
                    <div style={{
                      fontSize: 11,
                      color: 'var(--text-3)',
                      fontWeight: 500,
                      textTransform: 'uppercase',
                      letterSpacing: '0.06em',
                    }}>
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating badge */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 4 }}
              style={{
                position: 'absolute',
                top: -20, right: -20,
                background: 'white',
                borderRadius: 14,
                padding: '10px 16px',
                boxShadow: 'var(--shadow-md)',
                border: '1px solid var(--border)',
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                zIndex: 2,
              }}
            >
              <motion.div
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
                style={{
                  width: 8, height: 8,
                  borderRadius: '50%',
                  background: '#10B981',
                }}
              />
              <span style={{
                fontSize: 12,
                fontWeight: 700,
                color: '#059669',
              }}>
                Produits actifs
              </span>
            </motion.div>
          </motion.div>
        </div>

        {/* Pillars grid */}
        <div className="pillars-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4,1fr)',
          gap: 16,
        }}>
          {PILLARS.map((pillar, i) => {
            const Icon = pillar.icon
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.6 }}
                whileHover={{ y: -4, boxShadow: 'var(--shadow-md)' }}
                style={{
                  background: 'white',
                  borderRadius: 18,
                  padding: 24,
                  border: '1px solid var(--border)',
                  boxShadow: 'var(--shadow-sm)',
                }}
              >
                <div style={{
                  width: 40, height: 40,
                  borderRadius: 12,
                  background: 'var(--accent-gradient-soft)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: 16,
                }}>
                  <Icon size={18} style={{
                    color: 'var(--purple)',
                  }} />
                </div>
                <h3 style={{
                  fontSize: 14,
                  fontWeight: 700,
                  color: 'var(--text-1)',
                  marginBottom: 6,
                  letterSpacing: '-0.01em',
                }}>
                  {pillar.title}
                </h3>
                <p style={{
                  fontSize: 13,
                  color: 'var(--text-3)',
                  lineHeight: 1.6,
                }}>
                  {pillar.desc}
                </p>
              </motion.div>
            )
          })}
        </div>

        {/* Trust section */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ padding: '48px 0 0' }}
        >
          <div style={{
            fontSize: 11,
            fontWeight: 700,
            color: 'var(--purple)',
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            marginBottom: 16,
          }}>
            Notre expérience terrain
          </div>

          <div className="trust-row" style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 32,
            flexWrap: 'wrap',
          }}>
            <p style={{
              fontSize: 18,
              fontWeight: 600,
              color: 'var(--text-1)',
              maxWidth: 480,
              lineHeight: 1.6,
              letterSpacing: '-0.02em',
            }}>
              B2A Groupe a accompagné la transformation digitale de
              plus de 15 sites e-commerce et entreprises françaises.
            </p>

            <div style={{ display: 'flex', gap: 12 }}>
              {[
                { value: '15+', label: 'Sites accompagnés' },
                { value: '100%', label: 'Satisfaction' },
                { value: 'FR', label: 'Basé en France' },
              ].map(stat => (
                <div key={stat.label} style={{
                  background: 'white',
                  border: '1px solid var(--border)',
                  borderRadius: 14,
                  padding: '16px 20px',
                  textAlign: 'center',
                  boxShadow: 'var(--shadow-sm)',
                  minWidth: 100,
                }}>
                  <div className="gradient-text" style={{
                    fontSize: 28,
                    fontWeight: 800,
                    marginBottom: 4,
                  }}>
                    {stat.value}
                  </div>
                  <div style={{
                    fontSize: 11,
                    color: 'var(--text-3)',
                  }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <p style={{
            fontSize: 12,
            color: 'var(--text-3)',
            marginTop: 16,
          }}>
            Nos références clients sont confidentielles. Contactez-nous
            pour en savoir plus.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
