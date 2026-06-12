import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import {
  Monitor, Smartphone, Package,
  Zap, Shield, Code2, Layers, Clock
} from 'lucide-react'

interface Props { theme: 'dark' | 'light' }

const SERVICES = [
  {
    icon: Monitor,
    title: 'SaaS Sur Mesure',
    price: 'À partir de 2 000€',
    delivery: '2 mois',
    description: 'Applications web complètes. Dashboard, auth, paiements, API. Design UI/UX premium inclus.',
    accent: 'var(--green)',
  },
  {
    icon: Smartphone,
    title: 'Application Mobile',
    price: 'À partir de 5 000€',
    delivery: '3 mois',
    description: 'iOS & Android natifs. Notifications push, mode hors ligne, publication stores.',
    accent: 'var(--green-2)',
    featured: true,
  },
  {
    icon: Package,
    title: 'Pack Complet',
    price: 'À partir de 9 500€',
    delivery: '4 mois',
    description: 'SaaS + App mobile. L\'écosystème complet. Économisez 2 000€.',
    accent: 'var(--green-3)',
  },
]

const FEATURES = [
  { icon: Zap, text: 'Développement IA-First' },
  { icon: Shield, text: 'Code source fourni' },
  { icon: Code2, text: 'Technologies modernes' },
  { icon: Layers, text: 'Architecture scalable' },
  { icon: Clock, text: 'Livraison garantie' },
]

export default function Services({ theme }: Props) {
  void theme
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id="services" ref={ref} style={{
      padding: '140px 48px',
      maxWidth: 1280,
      margin: '0 auto',
    }}>
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        style={{ marginBottom: 80 }}
      >
        <div style={{
          fontSize: 12, fontWeight: 600,
          letterSpacing: '0.12em',
          color: 'var(--green)',
          textTransform: 'uppercase',
          marginBottom: 20,
        }}>
          Nos services
        </div>

        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          flexWrap: 'wrap',
          gap: 24,
        }}>
          <h2 style={{
            fontSize: 'clamp(40px,5vw,64px)',
            fontWeight: 800,
            letterSpacing: '-0.04em',
            lineHeight: 1.0,
            color: 'var(--text-1)',
          }}>
            Des produits qui
            <br />
            <span style={{
              color: 'var(--green)',
              fontStyle: 'italic',
              fontFamily: "'Instrument Serif', serif",
            }}>
              durent.
            </span>
          </h2>

          <p style={{
            fontSize: 16,
            color: 'var(--text-2)',
            maxWidth: 360,
            lineHeight: 1.7,
          }}>
            10× moins chers qu'une agence
            traditionnelle grâce aux outils IA.
            Livrés en 2 à 3 mois.
          </p>
        </div>
      </motion.div>

      {/* Cards */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3,1fr)',
        gap: 16,
        marginBottom: 16,
      }}>
        {SERVICES.map((service, i) => {
          const Icon = service.icon
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.7,
                delay: i * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{
                y: -8,
                scale: 1.01,
                boxShadow: service.featured ? 'var(--shadow-green)' : 'var(--shadow-md)',
              }}
              style={{
                background: service.featured
                  ? 'linear-gradient(135deg, rgba(16,185,129,0.08), rgba(52,211,153,0.04))'
                  : 'var(--bg-glass)',
                border: service.featured
                  ? '1px solid var(--green-border)'
                  : '1px solid var(--border)',
                borderRadius: 'var(--radius-lg)',
                padding: 40,
                position: 'relative',
                overflow: 'hidden',
                cursor: 'default',
              }}
            >
              {/* Subtle gradient top line */}
              <div style={{
                position: 'absolute',
                top: 0, left: 0, right: 0,
                height: 1,
                background: `linear-gradient(90deg, transparent, ${service.accent}, transparent)`,
                opacity: service.featured ? 1 : 0.5,
              }} />

              {/* Corner glow */}
              {service.featured && (
                <div style={{
                  position: 'absolute',
                  top: -60, right: -60,
                  width: 180, height: 180,
                  borderRadius: '50%',
                  background: 'radial-gradient(circle, rgba(16,185,129,0.12) 0%, transparent 70%)',
                  pointerEvents: 'none',
                }} />
              )}

              {/* Icon */}
              <motion.div
                whileHover={{ rotate: [0, -5, 5, 0] }}
                transition={{ duration: 0.4 }}
                style={{
                  width: 52, height: 52,
                  borderRadius: 16,
                  background: `${service.accent}18`,
                  border: `1px solid ${service.accent}30`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: 28,
                  color: service.accent,
                }}
              >
                <Icon size={22} />
              </motion.div>

              <h3 style={{
                fontSize: 22,
                fontWeight: 700,
                letterSpacing: '-0.03em',
                marginBottom: 10,
                color: 'var(--text-1)',
              }}>
                {service.title}
              </h3>

              <p style={{
                fontSize: 15,
                color: 'var(--text-2)',
                lineHeight: 1.65,
                marginBottom: 32,
              }}>
                {service.description}
              </p>

              <div style={{
                paddingTop: 24,
                borderTop: '1px solid var(--border)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
                <div>
                  <div style={{
                    fontSize: 24,
                    fontWeight: 800,
                    letterSpacing: '-0.03em',
                    color: service.accent,
                  }}>
                    {service.price}
                  </div>
                  <div style={{
                    fontSize: 12,
                    color: 'var(--text-3)',
                    marginTop: 2,
                  }}>
                    Livraison {service.delivery}
                  </div>
                </div>

                <motion.a
                  href="#contact"
                  whileHover={{ x: 4 }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 6,
                    fontSize: 14,
                    fontWeight: 600,
                    color: service.accent,
                    textDecoration: 'none',
                  }}
                >
                  Démarrer <span>→</span>
                </motion.a>
              </div>
            </motion.div>
          )
        })}
      </div>

      {/* Features strip */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.5, duration: 0.6 }}
        style={{
          display: 'flex',
          gap: 0,
          background: 'var(--bg-glass)',
          border: '1px solid var(--border)',
          borderRadius: 'var(--radius-md)',
          overflow: 'hidden',
        }}
      >
        {FEATURES.map((f, i) => {
          const Icon = f.icon
          return (
            <div
              key={i}
              style={{
                flex: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 10,
                padding: '20px 16px',
                borderRight: i < FEATURES.length - 1
                  ? '1px solid var(--border)'
                  : 'none',
              }}
            >
              <Icon size={16} style={{ color: 'var(--green)', flexShrink: 0 }} />
              <span style={{
                fontSize: 13,
                fontWeight: 500,
                color: 'var(--text-2)',
                whiteSpace: 'nowrap',
              }}>
                {f.text}
              </span>
            </div>
          )
        })}
      </motion.div>
    </section>
  )
}
