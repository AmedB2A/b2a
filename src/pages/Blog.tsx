import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Newsletter from '../components/Newsletter'
import Breadcrumb from '../components/Breadcrumb'

const ARTICLES = [
  {
    slug: 'cerfa-association-guide',
    title: 'CERFA 11580 association : guide complet 2026',
    excerpt: 'Tout savoir sur le formulaire CERFA 11580*03 pour les associations françaises. Comment le remplir, l\'envoyer et l\'automatiser.',
    category: 'CERFA',
    readTime: 6,
    date: '10 Juin 2026',
    gradient: 'linear-gradient(135deg, #1A2E4A, #2D6CDF)',
  },
  {
    slug: 'logiciel-gestion-association-comparatif',
    title: 'Meilleur logiciel gestion association 2026 : comparatif',
    excerpt: 'HelloAsso, AssoConnect, AssoDoc — comparatif complet des solutions de gestion pour associations françaises.',
    category: 'Comparatif',
    readTime: 8,
    date: '8 Juin 2026',
    gradient: 'linear-gradient(135deg, #1A0A2E, #7C3AED)',
  },
  {
    slug: 'helloasso-alternative',
    title: 'Alternatives à HelloAsso : que choisir en 2026 ?',
    excerpt: 'HelloAsso ne suffit plus ? Découvrez les meilleures alternatives avec CERFA automatique et 0% de commission.',
    category: 'Comparatif',
    readTime: 7,
    date: '5 Juin 2026',
    gradient: 'linear-gradient(135deg, #064E3B, #10B981)',
  },
  {
    slug: 'creer-association-loi-1901',
    title: 'Comment créer une association loi 1901 en 2026',
    excerpt: 'Guide complet pour créer votre association : statuts, déclaration préfecture, RNA et outils de gestion.',
    category: 'Guide',
    readTime: 10,
    date: '3 Juin 2026',
    gradient: 'linear-gradient(135deg, #1E3A5F, #3B82F6)',
  },
  {
    slug: 'recu-fiscal-don-association',
    title: 'Reçu fiscal don association : tout ce qu\'il faut savoir',
    excerpt: 'Qui peut émettre un reçu fiscal ? Comment le remplir ? Comment l\'automatiser ? Guide complet 2026.',
    category: 'CERFA',
    readTime: 6,
    date: '1 Juin 2026',
    gradient: 'linear-gradient(135deg, #1A2E4A, #2D6CDF)',
  },
  {
    slug: 'application-revision-ia',
    title: 'Applications de révision IA : les meilleures en 2026',
    excerpt: "Quelles sont les meilleures applications de révision propulsées par l'IA ? Comparatif et guide pour choisir.",
    category: 'IA',
    readTime: 5,
    date: '28 Mai 2026',
    gradient: 'linear-gradient(135deg, #7F1D1D, #DC2626)',
  },
]

const CATEGORIES = ['Tous', 'CERFA', 'Comparatif', 'Guide', 'IA']

export default function Blog() {
  const [category, setCategory] = useState('Tous')

  const filtered = category === 'Tous'
    ? ARTICLES
    : ARTICLES.filter(a => a.category === category)

  const [featured, ...rest] = filtered.length ? filtered : ARTICLES

  return (
    <div>
      <Breadcrumb items={[{ label: 'Blog' }]} />

      {/* Hero */}
      <section style={{
        background: 'linear-gradient(to bottom, #FAFAFA, white)',
        padding: '24px 32px 48px',
        textAlign: 'center',
      }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            background: 'var(--accent-gradient-soft)',
            border: '1px solid rgba(124,58,237,0.15)',
            borderRadius: 9999,
            padding: '5px 16px',
            marginBottom: 24,
          }}
        >
          <span style={{
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: '0.1em',
            background: 'var(--accent-gradient)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}>
            BLOG
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          style={{
            fontSize: 'clamp(36px,5vw,56px)',
            fontWeight: 900,
            letterSpacing: '-0.04em',
            color: 'var(--text-1)',
            marginBottom: 16,
          }}
        >
          Ressources & <span className="gradient-text">Insights</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          style={{
            fontSize: 16,
            color: 'var(--text-2)',
            maxWidth: 480,
            margin: '0 auto',
            lineHeight: 1.7,
          }}
        >
          Guides, comparatifs et actualités sur les logiciels et la tech française.
        </motion.p>
      </section>

      {/* Category filter */}
      <section style={{ padding: '0 32px 40px', display: 'flex', justifyContent: 'center' }}>
        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', justifyContent: 'center' }}>
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              style={{
                fontSize: 13,
                fontWeight: 600,
                padding: '8px 18px',
                borderRadius: 9999,
                border: '1px solid var(--border)',
                cursor: 'pointer',
                fontFamily: 'inherit',
                background: category === cat ? 'var(--accent-gradient)' : 'white',
                color: category === cat ? 'white' : 'var(--text-2)',
                transition: 'all 0.2s ease',
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Featured article */}
      <section style={{ padding: '0 32px 24px' }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ maxWidth: 1100, margin: '0 auto' }}
        >
          <Link
            to={`/blog/${featured.slug}`}
            className="featured-article"
            style={{
              background: 'white',
              border: '1px solid var(--border)',
              borderRadius: 20,
              overflow: 'hidden',
              boxShadow: 'var(--shadow-md)',
              display: 'grid',
              gridTemplateColumns: '1fr 2fr',
              textDecoration: 'none',
            }}
          >
            <div style={{
              background: featured.gradient,
              minHeight: 220,
            }} />
            <div style={{ padding: 40 }}>
              <span style={{
                display: 'inline-block',
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                background: 'var(--accent-gradient-soft)',
                color: 'var(--purple)',
                borderRadius: 9999,
                padding: '4px 12px',
                marginBottom: 16,
              }}>
                {featured.category}
              </span>
              <h2 style={{
                fontSize: 24,
                fontWeight: 800,
                color: 'var(--text-1)',
                letterSpacing: '-0.02em',
                marginBottom: 12,
              }}>
                {featured.title}
              </h2>
              <p style={{ fontSize: 15, color: 'var(--text-2)', lineHeight: 1.7, marginBottom: 20 }}>
                {featured.excerpt}
              </p>
              <span style={{ fontSize: 13, fontWeight: 700, color: 'var(--purple)' }}>
                Lire l'article
              </span>
            </div>
          </Link>
        </motion.div>
      </section>

      {/* Articles grid */}
      <section style={{ padding: '0 32px 80px' }}>
        <div style={{
          maxWidth: 1100,
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: 16,
        }}>
          {rest.map((article, i) => (
            <motion.div
              key={article.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ y: -4 }}
            >
              <Link
                to={`/blog/${article.slug}`}
                className="article-card"
                style={{
                  background: 'white',
                  border: '1px solid var(--border)',
                  borderRadius: 16,
                  overflow: 'hidden',
                  boxShadow: 'var(--shadow-sm)',
                  transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
                  textDecoration: 'none',
                  display: 'block',
                }}
              >
                <div style={{ height: 120, background: article.gradient, position: 'relative' }}>
                  <span style={{
                    position: 'absolute', top: 10, left: 10,
                    fontSize: 11, fontWeight: 700,
                    background: 'rgba(255,255,255,0.2)',
                    backdropFilter: 'blur(8px)',
                    color: 'white',
                    borderRadius: 9999,
                    padding: '3px 10px',
                  }}>
                    {article.category}
                  </span>
                  <span style={{
                    position: 'absolute', bottom: 10, right: 10,
                    fontSize: 11, fontWeight: 600,
                    background: 'rgba(255,255,255,0.2)',
                    backdropFilter: 'blur(8px)',
                    color: 'white',
                    borderRadius: 9999,
                    padding: '3px 10px',
                  }}>
                    {article.readTime} min
                  </span>
                </div>
                <div style={{ padding: 20 }}>
                  <h3 style={{
                    fontSize: 15,
                    fontWeight: 700,
                    color: 'var(--text-1)',
                    marginBottom: 8,
                    letterSpacing: '-0.01em',
                    lineHeight: 1.4,
                  }}>
                    {article.title}
                  </h3>
                  <p style={{
                    fontSize: 13,
                    color: 'var(--text-2)',
                    lineHeight: 1.6,
                    marginBottom: 16,
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                  }}>
                    {article.excerpt}
                  </p>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: 11, color: 'var(--text-3)' }}>{article.date}</span>
                    <span style={{ fontSize: 13, fontWeight: 700, color: 'var(--purple)' }}>Lire</span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      <Newsletter />

      <style>{`
        .article-card:hover {
          box-shadow: var(--shadow-md);
          border-color: rgba(124,58,237,0.2);
        }
        @media (max-width: 768px) {
          .featured-article {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  )
}
