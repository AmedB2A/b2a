import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

interface Props { theme: 'dark' | 'light' }

const STATS = [
  { value: '10+', label: 'Projets livrés', sub: 'En production' },
  { value: '2-3', label: 'Mois en moyenne', sub: "De l'idée au live" },
  { value: '10×', label: 'Moins cher', sub: 'Vs agence classique' },
  { value: '100%', label: 'Code fourni', sub: 'Vous êtes propriétaire' },
]

export default function Testimonials({ theme }: Props) {
  void theme
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section ref={ref} style={{
      padding: '140px 48px',
      background: theme === 'dark'
        ? 'rgba(255,255,255,0.01)'
        : 'rgba(0,0,0,0.02)',
      borderTop: '1px solid var(--border)',
      borderBottom: '1px solid var(--border)',
    }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>

        {/* Large statement */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          style={{
            textAlign: 'center',
            marginBottom: 100,
          }}
        >
          <p style={{
            fontSize: 'clamp(28px,4vw,52px)',
            fontWeight: 700,
            letterSpacing: '-0.04em',
            lineHeight: 1.2,
            color: 'var(--text-1)',
            maxWidth: 900,
            margin: '0 auto',
          }}>
            "Nous utilisons l'IA pour livrer
            des produits{' '}
            <span style={{
              fontStyle: 'italic',
              fontFamily: "'Instrument Serif', serif",
              color: 'var(--green)',
              fontWeight: 400,
            }}>
              premium
            </span>
            {' '}à des tarifs que les agences
            traditionnelles ne peuvent pas
            se permettre."
          </p>
          <div style={{
            marginTop: 24,
            fontSize: 14,
            color: 'var(--text-3)',
            letterSpacing: '0.03em',
          }}>
            — Ahmed Boudrari, Fondateur B2A Groupe
          </div>
        </motion.div>

        {/* Stats grid */}
        <div data-stats style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4,1fr)',
          gap: 1,
          background: 'var(--border)',
          border: '1px solid var(--border)',
          borderRadius: 'var(--radius-lg)',
          overflow: 'hidden',
        }}>
          {STATS.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.1, duration: 0.6 }}
              style={{
                background: 'var(--bg)',
                padding: '48px 32px',
                textAlign: 'center',
              }}
            >
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={inView ? { scale: 1, opacity: 1 } : {}}
                transition={{
                  delay: 0.4 + i * 0.1,
                  type: 'spring',
                  stiffness: 200,
                }}
                style={{
                  fontSize: 'clamp(40px,4vw,64px)',
                  fontWeight: 800,
                  letterSpacing: '-0.04em',
                  background: 'linear-gradient(135deg, var(--green), var(--green-2))',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  marginBottom: 8,
                  lineHeight: 1,
                }}
              >
                {stat.value}
              </motion.div>
              <div style={{
                fontSize: 15,
                fontWeight: 600,
                color: 'var(--text-1)',
                marginBottom: 4,
                letterSpacing: '-0.01em',
              }}>
                {stat.label}
              </div>
              <div style={{ fontSize: 12, color: 'var(--text-3)' }}>
                {stat.sub}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
