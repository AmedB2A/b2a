const PROJECTS = [
  {
    name: 'AssoDoc',
    tagline: 'Le SaaS tout-en-un pour les associations françaises',
    description: 'Gestion des membres, dons avec CERFA automatique, comptabilité PCG, site internet, formulaires, emails et bien plus. 0% de commission.',
    url: 'https://assodoc.fr',
    tags: ['SaaS', 'React', 'Supabase', 'Stripe'],
    gradient: 'linear-gradient(135deg, #1A2E4A, #2D6CDF)',
    accent: '#3B82F6',
    status: 'En production',
  },
  {
    name: 'ViralScriptia',
    tagline: 'Génération de contenu viral par IA',
    description: 'Plateforme IA de création de scripts viraux pour les réseaux sociaux. Génération automatique, templates et optimisation.',
    url: 'https://viralscriptia.com',
    tags: ['IA', 'Python', 'React', 'API'],
    gradient: 'linear-gradient(135deg, #4C1D95, #7C3AED)',
    accent: '#8B5CF6',
    status: 'En production',
  },
  {
    name: 'Projet Client',
    tagline: 'Votre projet ici',
    description: 'Vous avez une idée ? Nous la transformons en produit digital complet, livré en 2 à 3 mois.',
    url: '#contact',
    tags: ['SaaS', 'Mobile', 'Sur mesure'],
    gradient: 'linear-gradient(135deg, #D4AF37, #F5E070)',
    accent: '#D4AF37',
    status: 'Votre projet',
    cta: true,
  },
]

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      style={{
        padding: '120px 48px',
        background: 'rgba(255,255,255,0.01)',
        borderTop: '1px solid rgba(255,255,255,0.05)',
        borderBottom: '1px solid rgba(255,255,255,0.05)',
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>

        <div style={{
          textAlign: 'center',
          marginBottom: 80,
        }}>
          <div style={{
            fontSize: 12, fontWeight: 600,
            letterSpacing: '0.15em',
            color: '#D4AF37', marginBottom: 20,
          }}>
            PORTFOLIO
          </div>

          <h2 style={{
            fontSize: 'clamp(36px,5vw,56px)',
            fontWeight: 700,
            letterSpacing: '-0.03em',
            marginBottom: 16,
          }}>
            Nos projets
          </h2>

          <p style={{
            fontSize: 18,
            color: 'rgba(255,255,255,0.4)',
            maxWidth: 480,
            margin: '0 auto',
          }}>
            Des produits réels, en production,
            utilisés par de vraies personnes.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3,1fr)',
          gap: 20,
        }}>
          {PROJECTS.map((project, i) => (
            <div
              key={i}
              style={{
                background: 'rgba(255,255,255,0.02)',
                border: '1px solid rgba(255,255,255,0.07)',
                borderRadius: 24,
                overflow: 'hidden',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform
                  = 'translateY(-6px)'
                e.currentTarget.style.borderColor
                  = 'rgba(255,255,255,0.14)'
                e.currentTarget.style.boxShadow
                  = '0 32px 64px rgba(0,0,0,0.4)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'none'
                e.currentTarget.style.borderColor
                  = 'rgba(255,255,255,0.07)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              {/* Gradient header */}
              <div style={{
                height: 140,
                background: project.gradient,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                overflow: 'hidden',
              }}>
                {/* Decorative circles */}
                <div style={{
                  position: 'absolute',
                  width: 200, height: 200,
                  borderRadius: '50%',
                  background: 'rgba(255,255,255,0.05)',
                  top: -80, right: -60,
                }} />
                <div style={{
                  position: 'absolute',
                  width: 120, height: 120,
                  borderRadius: '50%',
                  background: 'rgba(255,255,255,0.05)',
                  bottom: -40, left: -30,
                }} />

                <span style={{
                  fontSize: 36,
                  fontWeight: 800,
                  letterSpacing: '-0.04em',
                  color: project.cta
                    ? '#000' : 'white',
                  position: 'relative',
                  zIndex: 1,
                }}>
                  {project.name}
                </span>
              </div>

              {/* Content */}
              <div style={{ padding: 28 }}>
                {/* Status badge */}
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 6,
                  background: project.cta
                    ? 'rgba(212,175,55,0.1)'
                    : 'rgba(16,185,129,0.1)',
                  border: `1px solid ${
                    project.cta
                      ? 'rgba(212,175,55,0.2)'
                      : 'rgba(16,185,129,0.2)'
                  }`,
                  borderRadius: 9999,
                  padding: '4px 12px',
                  fontSize: 11,
                  fontWeight: 600,
                  color: project.cta
                    ? '#D4AF37' : '#10B981',
                  marginBottom: 14,
                }}>
                  {!project.cta && (
                    <div style={{
                      width: 5, height: 5,
                      borderRadius: '50%',
                      background: '#10B981',
                    }} />
                  )}
                  {project.status}
                </div>

                <h3 style={{
                  fontSize: 16,
                  fontWeight: 600,
                  marginBottom: 8,
                  letterSpacing: '-0.01em',
                }}>
                  {project.tagline}
                </h3>

                <p style={{
                  fontSize: 14,
                  color: 'rgba(255,255,255,0.4)',
                  lineHeight: 1.65,
                  marginBottom: 20,
                }}>
                  {project.description}
                </p>

                {/* Tags */}
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: 6,
                  marginBottom: 24,
                }}>
                  {project.tags.map(tag => (
                    <span
                      key={tag}
                      style={{
                        fontSize: 11,
                        fontWeight: 600,
                        padding: '3px 10px',
                        borderRadius: 9999,
                        background: 'rgba(255,255,255,0.06)',
                        color: 'rgba(255,255,255,0.5)',
                        letterSpacing: '0.03em',
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={project.url}
                  target={project.cta ? '_self' : '_blank'}
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '12px 0',
                    borderRadius: 10,
                    fontSize: 14,
                    fontWeight: 600,
                    textDecoration: 'none',
                    background: project.cta
                      ? 'linear-gradient(135deg, #D4AF37, #F5E070)'
                      : 'rgba(255,255,255,0.05)',
                    color: project.cta ? '#000' : 'white',
                    border: project.cta
                      ? 'none'
                      : '1px solid rgba(255,255,255,0.08)',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement)
                      .style.filter = 'brightness(1.1)'
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement)
                      .style.filter = 'brightness(1)'
                  }}
                >
                  {project.cta
                    ? 'Démarrer votre projet →'
                    : `Visiter ${project.name} →`}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
