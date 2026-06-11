const SERVICES = [
  {
    icon: '⬡',
    title: 'SaaS Sur Mesure',
    price: 'À partir de 2 000€',
    delivery: '2 mois',
    description: 'Applications web complètes avec dashboard, authentification, paiements et API.',
    features: [
      'Design UI/UX premium',
      'Base de données sécurisée',
      'Paiements Stripe intégrés',
      'Déploiement inclus',
      'Code source fourni',
    ],
    gradient: 'linear-gradient(135deg, #1D4ED8, #7C3AED)',
    accent: '#3B82F6',
  },
  {
    icon: '◈',
    title: 'Application Mobile',
    price: 'À partir de 5 000€',
    delivery: '3 mois',
    description: 'Apps iOS & Android natives avec notifications push, mode hors ligne et publication stores.',
    features: [
      'iOS + Android natif',
      'Notifications push',
      'Mode hors ligne',
      'Publication App Store + Play Store',
      'Code source fourni',
    ],
    gradient: 'linear-gradient(135deg, #D4AF37, #F5E070)',
    accent: '#D4AF37',
    featured: true,
  },
  {
    icon: '◎',
    title: 'Pack Complet',
    price: 'À partir de 9 500€',
    delivery: '4 mois',
    description: 'SaaS + Application mobile. L\'écosystème digital complet pour votre produit.',
    features: [
      'SaaS + App mobile',
      'Économisez 2 000€',
      'Backend unifié',
      'Design system cohérent',
      'Support 6 mois',
    ],
    gradient: 'linear-gradient(135deg, #065F46, #10B981)',
    accent: '#10B981',
  },
]

export default function Services() {
  return (
    <section
      id="services"
      style={{
        padding: '120px 48px',
        maxWidth: 1200,
        margin: '0 auto',
      }}
    >
      {/* Section label */}
      <div style={{
        textAlign: 'center',
        marginBottom: 80,
      }}>
        <div style={{
          display: 'inline-block',
          fontSize: 12,
          fontWeight: 600,
          letterSpacing: '0.15em',
          color: '#D4AF37',
          marginBottom: 20,
        }}>
          NOS SERVICES
        </div>

        <h2 style={{
          fontSize: 'clamp(36px,5vw,56px)',
          fontWeight: 700,
          letterSpacing: '-0.03em',
          marginBottom: 16,
        }}>
          Des produits digitaux
          <br />
          <span style={{
            background: 'linear-gradient(135deg, #D4AF37, #F5E070)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}>
            qui durent.
          </span>
        </h2>

        <p style={{
          fontSize: 18,
          color: 'rgba(255,255,255,0.45)',
          maxWidth: 480,
          margin: '0 auto',
          lineHeight: 1.65,
        }}>
          Développés avec les technologies
          IA les plus avancées. Livrés 10x
          moins chers qu'une agence classique.
        </p>
      </div>

      {/* Cards grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3,1fr)',
        gap: 20,
      }}>
        {SERVICES.map((service, i) => (
          <div
            key={i}
            style={{
              background: service.featured
                ? 'rgba(212,175,55,0.04)'
                : 'rgba(255,255,255,0.02)',
              border: service.featured
                ? '1px solid rgba(212,175,55,0.2)'
                : '1px solid rgba(255,255,255,0.07)',
              borderRadius: 24,
              padding: 40,
              position: 'relative',
              overflow: 'hidden',
              transition: 'all 0.3s ease',
              cursor: 'default',
            }}
            onMouseEnter={e => {
              const el = e.currentTarget
              el.style.transform = 'translateY(-6px)'
              el.style.borderColor = `rgba(${
                service.featured
                  ? '212,175,55'
                  : '255,255,255'
              },0.25)`
              el.style.boxShadow = `0 32px 64px rgba(0,0,0,0.4)`
            }}
            onMouseLeave={e => {
              const el = e.currentTarget
              el.style.transform = 'translateY(0)'
              el.style.borderColor = service.featured
                ? 'rgba(212,175,55,0.2)'
                : 'rgba(255,255,255,0.07)'
              el.style.boxShadow = 'none'
            }}
          >
            {/* Gradient top bar */}
            <div style={{
              position: 'absolute',
              top: 0, left: 0, right: 0,
              height: 2,
              background: service.gradient,
            }} />

            {/* Icon */}
            <div style={{
              width: 56, height: 56,
              borderRadius: 16,
              background: `${service.gradient}`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 24,
              marginBottom: 24,
              color: service.featured ? '#000' : 'white',
            }}>
              {service.icon}
            </div>

            <h3 style={{
              fontSize: 22,
              fontWeight: 700,
              letterSpacing: '-0.02em',
              marginBottom: 8,
            }}>
              {service.title}
            </h3>

            <p style={{
              fontSize: 15,
              color: 'rgba(255,255,255,0.45)',
              lineHeight: 1.6,
              marginBottom: 28,
            }}>
              {service.description}
            </p>

            {/* Price + delivery */}
            <div style={{
              marginBottom: 28,
              paddingBottom: 28,
              borderBottom: '1px solid rgba(255,255,255,0.06)',
            }}>
              <div style={{
                fontSize: 28,
                fontWeight: 700,
                letterSpacing: '-0.02em',
                background: service.gradient,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                marginBottom: 4,
              }}>
                {service.price}
              </div>
              <div style={{
                fontSize: 13,
                color: 'rgba(255,255,255,0.3)',
              }}>
                Livraison en {service.delivery}
                · Paiement unique
              </div>
            </div>

            {/* Features */}
            <ul style={{ listStyle: 'none' }}>
              {service.features.map((f, j) => (
                <li
                  key={j}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 10,
                    marginBottom: 10,
                    fontSize: 14,
                    color: 'rgba(255,255,255,0.65)',
                  }}
                >
                  <span style={{
                    width: 16, height: 16,
                    borderRadius: '50%',
                    background: service.gradient,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    fontSize: 9,
                    color: service.featured
                      ? '#000' : 'white',
                    fontWeight: 700,
                  }}>
                    ✓
                  </span>
                  {f}
                </li>
              ))}
            </ul>

            {/* CTA */}
            <a
              href="#contact"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: 32,
                padding: '14px 0',
                borderRadius: 12,
                fontSize: 15,
                fontWeight: 600,
                textDecoration: 'none',
                background: service.featured
                  ? 'linear-gradient(135deg, #D4AF37, #F5E070)'
                  : 'rgba(255,255,255,0.06)',
                color: service.featured ? '#000' : 'white',
                border: service.featured
                  ? 'none'
                  : '1px solid rgba(255,255,255,0.1)',
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
              Démarrer ce projet →
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}
