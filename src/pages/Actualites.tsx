import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import Newsletter from '../components/Newsletter'
import Breadcrumb from '../components/Breadcrumb'

const NEWS = [
  {
    date: 'Juin 2026',
    category: 'Lancement',
    title: 'AssoDoc v2 — 20+ outils pour les associations',
    description: 'AssoDoc dévoile sa nouvelle version avec plus de 20 outils intégrés : CERFA automatique, comptabilité PCG, cagnotte, FormFlow et bien plus.',
    badge: 'Disponible',
    badgeColor: '#10B981',
    link: 'https://assodoc.fr',
  },
  {
    date: 'Mai 2026',
    category: 'Annonce',
    title: "Revigo — L'app de révision IA arrive bientôt",
    description: "B2A Groupe annonce Revigo, une application mobile de révision propulsée par l'intelligence artificielle. Fiches, quiz adaptatifs et suivi de progression.",
    badge: 'Bientôt',
    badgeColor: '#DC2626',
    link: '#produits',
  },
  {
    date: 'Avril 2026',
    category: 'Produit',
    title: 'ViralScriptia — Génération de contenu viral par IA',
    description: 'ViralScriptia est désormais disponible. La plateforme IA pour créer des scripts et contenus viraux pour tous les réseaux sociaux.',
    badge: 'Disponible',
    badgeColor: '#10B981',
    link: 'https://viralscriptia.com',
  },
  {
    date: 'Mars 2026',
    category: 'Entreprise',
    title: 'Création de B2A Groupe',
    description: 'B2A Groupe est fondé avec une mission claire : créer des logiciels français de qualité, innovants et accessibles.',
    badge: 'Fondation',
    badgeColor: '#7C3AED',
    link: null,
  },
]

export default function Actualites() {
  return (
    <div>
      <Breadcrumb items={[{ label: 'Actualités' }]} />

      {/* Hero */}
      <section style={{ padding: '24px 48px 48px', textAlign: 'center' }}>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          style={{
            fontSize: 'clamp(36px,5vw,56px)',
            fontWeight: 900,
            letterSpacing: '-0.04em',
            color: 'var(--text-1)',
            marginBottom: 16,
          }}
        >
          Actualités <span className="gradient-text">B2A Groupe</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          style={{
            fontSize: 16,
            color: 'var(--text-2)',
            maxWidth: 480,
            margin: '0 auto',
            lineHeight: 1.7,
          }}
        >
          Suivez l'évolution de nos produits, nos lancements et nos annonces.
        </motion.p>
      </section>

      {/* Timeline */}
      <section style={{ padding: '0 48px 80px' }}>
        <div style={{ maxWidth: 760, margin: '0 auto', position: 'relative' }}>
          {/* Vertical line */}
          <div style={{
            position: 'absolute',
            left: 5,
            top: 8,
            bottom: 8,
            width: 2,
            background: 'var(--border)',
          }} />

          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            {NEWS.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.6 }}
                style={{ display: 'flex', gap: 24, alignItems: 'flex-start' }}
              >
                {/* Dot */}
                <div style={{
                  width: 12, height: 12,
                  borderRadius: '50%',
                  background: 'var(--accent-gradient)',
                  marginTop: 8,
                  flexShrink: 0,
                  position: 'relative',
                  zIndex: 1,
                }} />

                {/* Card */}
                <div style={{
                  flex: 1,
                  background: 'white',
                  border: '1px solid var(--border)',
                  borderRadius: 18,
                  padding: '24px 28px',
                  boxShadow: 'var(--shadow-sm)',
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8, flexWrap: 'wrap' }}>
                    <span style={{ fontSize: 13, color: 'var(--text-3)' }}>{item.date}</span>
                    <span style={{
                      fontSize: 11,
                      fontWeight: 700,
                      letterSpacing: '0.06em',
                      textTransform: 'uppercase',
                      background: 'var(--accent-gradient-soft)',
                      color: 'var(--purple)',
                      borderRadius: 9999,
                      padding: '3px 10px',
                    }}>
                      {item.category}
                    </span>
                    <span style={{
                      fontSize: 11,
                      fontWeight: 700,
                      color: item.badgeColor,
                      background: `${item.badgeColor}14`,
                      border: `1px solid ${item.badgeColor}33`,
                      borderRadius: 9999,
                      padding: '3px 10px',
                    }}>
                      {item.badge}
                    </span>
                  </div>

                  <h3 style={{
                    fontSize: 18,
                    fontWeight: 700,
                    color: 'var(--text-1)',
                    margin: '8px 0',
                    letterSpacing: '-0.01em',
                  }}>
                    {item.title}
                  </h3>

                  <p style={{ fontSize: 14, color: 'var(--text-2)', lineHeight: 1.7, marginBottom: item.link ? 12 : 0 }}>
                    {item.description}
                  </p>

                  {item.link && (
                    item.link.startsWith('http') ? (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: 6,
                          fontSize: 13,
                          fontWeight: 700,
                          color: 'var(--purple)',
                          textDecoration: 'none',
                        }}
                      >
                        En savoir plus
                        <ArrowRight size={14} />
                      </a>
                    ) : (
                      <Link
                        to={`/${item.link}`}
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: 6,
                          fontSize: 13,
                          fontWeight: 700,
                          color: 'var(--purple)',
                          textDecoration: 'none',
                        }}
                      >
                        En savoir plus
                        <ArrowRight size={14} />
                      </Link>
                    )
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Newsletter />
    </div>
  )
}
