import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import Breadcrumb from '../../components/Breadcrumb'
import Newsletter from '../../components/Newsletter'

export default function ArticleLayout({
  title, category, readTime, date, excerpt, children,
}: {
  title: string
  category: string
  readTime: number
  date: string
  excerpt: string
  children: ReactNode
}) {
  return (
    <div>
      <Breadcrumb items={[{ label: 'Blog', href: '/blog' }, { label: title }]} />

      <article style={{
        maxWidth: 720,
        margin: '0 auto',
        padding: '24px 32px 80px',
      }}>
        {/* Category + read time */}
        <div style={{ display: 'flex', gap: 10, alignItems: 'center', marginBottom: 20, flexWrap: 'wrap' }}>
          <span style={{
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
            background: 'var(--accent-gradient-soft)',
            color: 'var(--purple)',
            borderRadius: 9999,
            padding: '4px 12px',
          }}>
            {category}
          </span>
          <span style={{ fontSize: 12, color: 'var(--text-3)' }}>
            {readTime} min de lecture
          </span>
          <span style={{ fontSize: 12, color: 'var(--text-3)' }}>
            {date}
          </span>
        </div>

        {/* Title */}
        <h1 style={{
          fontSize: 'clamp(28px,4vw,44px)',
          fontWeight: 900,
          letterSpacing: '-0.04em',
          lineHeight: 1.1,
          color: 'var(--text-1)',
          marginBottom: 20,
        }}>
          {title}
        </h1>

        {/* Excerpt */}
        <p style={{
          fontSize: 18,
          color: 'var(--text-2)',
          lineHeight: 1.7,
          marginBottom: 40,
          paddingBottom: 40,
          borderBottom: '1px solid var(--border)',
        }}>
          {excerpt}
        </p>

        {/* Article content */}
        <div className="article-content">
          {children}
        </div>

        {/* CTA block */}
        <div style={{
          background: 'var(--accent-gradient-soft)',
          border: '1px solid rgba(124,58,237,0.2)',
          borderRadius: 20,
          padding: 32,
          textAlign: 'center',
          margin: '48px 0',
        }}>
          <h3 style={{
            fontSize: 20,
            fontWeight: 800,
            color: 'var(--text-1)',
            marginBottom: 10,
          }}>
            Gérez votre association avec AssoDoc
          </h3>
          <p style={{
            fontSize: 14,
            color: 'var(--text-2)',
            marginBottom: 20,
          }}>
            CERFA automatique, 0% de commission,
            comptabilité PCG intégrée.
          </p>

          <a
            href="https://assodoc.fr"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              background: 'var(--accent-gradient)',
              color: 'white',
              padding: '12px 28px',
              borderRadius: 9999,
              fontSize: 14,
              fontWeight: 700,
              textDecoration: 'none',
              boxShadow: 'var(--shadow-purple)',
            }}
          >
            Essayer AssoDoc gratuitement
            <ArrowRight size={16} />
          </a>
        </div>

        {/* Back to blog */}
        <Link
          to="/blog"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            fontSize: 14,
            color: 'var(--purple)',
            textDecoration: 'none',
            fontWeight: 500,
          }}
        >
          <ArrowLeft size={16} />
          Retour au blog
        </Link>
      </article>

      <Newsletter />
    </div>
  )
}
