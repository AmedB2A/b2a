import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import {
  FileText, Phone, Banknote,
  Code2, Rocket
} from 'lucide-react'

interface Props { theme: 'dark' | 'light' }

const STEPS = [
  {
    icon: FileText,
    number: '01',
    title: 'Formulaire détaillé',
    description: 'Décrivez votre projet. Fonctionnalités, design, contraintes techniques. Plus c\'est précis, mieux c\'est.',
    timeframe: 'Maintenant',
  },
  {
    icon: Phone,
    number: '02',
    title: 'Rappel sous 48h',
    description: 'L\'équipe B2A Groupe analyse votre demande, pose les bonnes questions et vous rappelle sous 48h.',
    timeframe: 'J+2',
  },
  {
    icon: Banknote,
    number: '03',
    title: 'Virement bancaire',
    description: 'Acompte 50% au démarrage. Solde à la livraison. Aucune carte, aucun abonnement. Transparent.',
    timeframe: 'J+5',
  },
  {
    icon: Code2,
    number: '04',
    title: 'Développement actif',
    description: 'Points d\'avancement réguliers. Vous voyez votre produit évoluer. Itérations rapides avec l\'IA.',
    timeframe: '2-3 mois',
  },
  {
    icon: Rocket,
    number: '05',
    title: 'Livraison complète',
    description: 'Code source 100% fourni. Déploiement inclus. Formation. Vous êtes propriétaire à vie.',
    timeframe: 'J+60/90',
  },
]

export default function Process({ theme }: Props) {
  void theme
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section id="processus" ref={ref} style={{
      padding: '140px 48px',
    }}>
      <div style={{ maxWidth: 800, margin: '0 auto' }}>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          style={{ marginBottom: 80 }}
        >
          <div style={{
            fontSize: 12, fontWeight: 600,
            letterSpacing: '0.12em',
            color: 'var(--green)',
            textTransform: 'uppercase',
            marginBottom: 20,
          }}>
            Processus
          </div>

          <h2 style={{
            fontSize: 'clamp(40px,5vw,64px)',
            fontWeight: 800,
            letterSpacing: '-0.04em',
            color: 'var(--text-1)',
            lineHeight: 1.0,
          }}>
            Simple.{' '}
            <span style={{
              fontStyle: 'italic',
              fontFamily: "'Instrument Serif', serif",
              color: 'var(--green)',
              fontWeight: 400,
            }}>
              Transparent.
            </span>
            <br />
            Rapide.
          </h2>
        </motion.div>

        <div style={{ position: 'relative' }}>

          {/* Vertical progress line */}
          <div style={{
            position: 'absolute',
            left: 27,
            top: 0, bottom: 0,
            width: 1,
            background: 'var(--border)',
          }} />

          {/* Animated green line overlay */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ duration: 2, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
            style={{
              position: 'absolute',
              left: 27,
              top: 0, bottom: 0,
              width: 1,
              background: 'linear-gradient(to bottom, var(--green), var(--green-2))',
              transformOrigin: 'top',
            }}
          />

          {STEPS.map((step, i) => {
            const Icon = step.icon
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: 0.3 + i * 0.15,
                  ease: [0.16, 1, 0.3, 1],
                }}
                style={{
                  display: 'flex',
                  gap: 32,
                  marginBottom: 56,
                  position: 'relative',
                }}
              >
                {/* Icon circle */}
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  style={{
                    width: 56, height: 56,
                    borderRadius: '50%',
                    background: 'var(--bg-2)',
                    border: '1px solid var(--green-border)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    zIndex: 1,
                    color: 'var(--green)',
                    boxShadow: '0 0 20px var(--green-glow)',
                  }}
                >
                  <Icon size={20} />
                </motion.div>

                {/* Content */}
                <div style={{ paddingTop: 12 }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 12,
                    marginBottom: 8,
                  }}>
                    <span style={{
                      fontSize: 11,
                      fontWeight: 600,
                      color: 'var(--text-3)',
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                    }}>
                      {step.number}
                    </span>

                    <h3 style={{
                      fontSize: 20,
                      fontWeight: 700,
                      letterSpacing: '-0.02em',
                      color: 'var(--text-1)',
                    }}>
                      {step.title}
                    </h3>

                    <span style={{
                      marginLeft: 'auto',
                      fontSize: 11,
                      fontWeight: 600,
                      padding: '3px 10px',
                      borderRadius: 'var(--radius-pill)',
                      background: 'var(--green-glow)',
                      color: 'var(--green)',
                      letterSpacing: '0.04em',
                      border: '1px solid var(--green-border)',
                      whiteSpace: 'nowrap',
                    }}>
                      {step.timeframe}
                    </span>
                  </div>

                  <p style={{
                    fontSize: 15,
                    color: 'var(--text-2)',
                    lineHeight: 1.7,
                  }}>
                    {step.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
