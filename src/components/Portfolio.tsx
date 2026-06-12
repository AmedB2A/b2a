import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { ExternalLink } from 'lucide-react'

interface Props { theme: 'dark' | 'light' }

const PROJECTS = [
  {
    name: 'AssoDoc',
    category: 'SaaS B2C',
    year: '2025',
    tagline: 'Le SaaS tout-en-un pour les associations françaises',
    description: 'Gestion membres, dons avec CERFA automatique, comptabilité PCG, site internet, emails, FormFlow et plus. 0% de commission. 20+ outils intégrés.',
    url: 'https://assodoc.fr',
    tags: ['React', 'TypeScript', 'Supabase', 'Stripe', 'Resend'],
    stat1: { value: '20+', label: 'Outils intégrés' },
    stat2: { value: '0%', label: 'Commission' },
  },
  {
    name: 'ViralScriptia',
    category: 'IA Platform',
    year: '2024',
    tagline: 'Génération de contenu viral par intelligence artificielle',
    description: 'Plateforme IA de création de scripts et contenus viraux pour les réseaux sociaux. Génération automatique, templates et optimisation algorithmique.',
    url: 'https://viralscriptia.com',
    tags: ['Python', 'React', 'AI/ML', 'API REST'],
    stat1: { value: 'IA', label: 'Propulsé par' },
    stat2: { value: '∞', label: 'Générations' },
  },
]

export default function Portfolio({ theme }: Props) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.2 })
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="portfolio" ref={ref} style={{
      padding: '140px 48px',
      background: theme === 'dark'
        ? 'rgba(255,255,255,0.01)'
        : 'rgba(0,0,0,0.02)',
      borderTop: '1px solid var(--border)',
    }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>

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
            Portfolio
          </div>

          <h2 style={{
            fontSize: 'clamp(40px,5vw,64px)',
            fontWeight: 800,
            letterSpacing: '-0.04em',
            color: 'var(--text-1)',
          }}>
            En production.
            <br />
            <span style={{
              color: 'var(--text-3)',
              fontStyle: 'italic',
              fontFamily: "'Instrument Serif', serif",
              fontWeight: 400,
            }}>
              Utilisés chaque jour.
            </span>
          </h2>
        </motion.div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {PROJECTS.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{
                duration: 0.8,
                delay: i * 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
              onHoverStart={() => setHoveredIndex(i)}
              onHoverEnd={() => setHoveredIndex(null)}
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr auto',
                alignItems: 'center',
                gap: 40,
                padding: '40px 0',
                borderBottom: '1px solid var(--border)',
                cursor: 'pointer',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Hover background */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: hoveredIndex === i ? 1 : 0 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'var(--green-glow)',
                  transformOrigin: 'left',
                  borderRadius: 12,
                  pointerEvents: 'none',
                }}
              />

              <div style={{ position: 'relative', zIndex: 1 }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 16,
                  marginBottom: 12,
                }}>
                  <span style={{
                    fontSize: 12,
                    fontWeight: 600,
                    color: 'var(--green)',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    padding: '3px 10px',
                    background: 'var(--green-glow)',
                    border: '1px solid var(--green-border)',
                    borderRadius: 'var(--radius-pill)',
                  }}>
                    {project.category}
                  </span>
                  <span style={{ fontSize: 12, color: 'var(--text-3)' }}>
                    {project.year}
                  </span>
                </div>

                <h3 style={{
                  fontSize: 'clamp(28px,4vw,48px)',
                  fontWeight: 800,
                  letterSpacing: '-0.04em',
                  color: 'var(--text-1)',
                  marginBottom: 8,
                  lineHeight: 1.0,
                }}>
                  {project.name}
                </h3>

                <p style={{
                  fontSize: 16,
                  color: 'var(--text-2)',
                  maxWidth: 600,
                  lineHeight: 1.6,
                }}>
                  {project.tagline}
                </p>

                {/* Tags */}
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: 8,
                  marginTop: 20,
                }}>
                  {project.tags.map(tag => (
                    <span
                      key={tag}
                      style={{
                        fontSize: 11,
                        fontWeight: 500,
                        padding: '4px 10px',
                        borderRadius: 'var(--radius-pill)',
                        background: 'var(--bg-glass)',
                        border: '1px solid var(--border)',
                        color: 'var(--text-3)',
                        letterSpacing: '0.03em',
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right side */}
              <div className="portfolio-right" style={{
                display: 'flex',
                alignItems: 'center',
                gap: 40,
                position: 'relative',
                zIndex: 1,
              }}>
                <div style={{ textAlign: 'right' }}>
                  <div style={{
                    fontSize: 32,
                    fontWeight: 800,
                    letterSpacing: '-0.04em',
                    color: 'var(--green)',
                  }}>
                    {project.stat1.value}
                  </div>
                  <div style={{ fontSize: 12, color: 'var(--text-3)' }}>
                    {project.stat1.label}
                  </div>
                </div>

                <div style={{ textAlign: 'right' }}>
                  <div style={{
                    fontSize: 32,
                    fontWeight: 800,
                    letterSpacing: '-0.04em',
                    color: 'var(--green)',
                  }}>
                    {project.stat2.value}
                  </div>
                  <div style={{ fontSize: 12, color: 'var(--text-3)' }}>
                    {project.stat2.label}
                  </div>
                </div>

                <motion.a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, rotate: 15 }}
                  style={{
                    width: 56, height: 56,
                    borderRadius: '50%',
                    background: 'var(--green)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    textDecoration: 'none',
                    flexShrink: 0,
                    boxShadow: '0 8px 24px rgba(16,185,129,0.3)',
                  }}
                >
                  <ExternalLink size={20} />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #portfolio > div > div > div {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
          }
          .portfolio-right {
            justify-content: space-between;
            width: 100%;
          }
        }
      `}</style>
    </section>
  )
}
