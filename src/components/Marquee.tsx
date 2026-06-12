import { motion } from 'framer-motion'

const ITEMS = [
  'SaaS Sur Mesure',
  'Application Mobile',
  'Intelligence Artificielle',
  'Design Premium',
  'Stripe Connect',
  'React & TypeScript',
  'Supabase',
  '0% Frais Cachés',
  'Code Source Fourni',
  'Livraison 2-3 Mois',
]

const MarqueeRow = ({ direction = 1 }: { direction?: number }) => (
  <div style={{ overflow: 'hidden', width: '100%' }}>
    <motion.div
      animate={{ x: direction > 0 ? '-50%' : '0%' }}
      initial={{ x: direction > 0 ? '0%' : '-50%' }}
      transition={{
        duration: 25,
        repeat: Infinity,
        ease: 'linear',
        repeatType: 'loop',
      }}
      style={{
        display: 'flex',
        gap: 0,
        width: 'max-content',
      }}
    >
      {[...ITEMS, ...ITEMS].map((item, i) => (
        <div
          key={i}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 0,
            whiteSpace: 'nowrap',
          }}
        >
          <span style={{
            fontSize: 13,
            fontWeight: 500,
            color: 'var(--text-3)',
            letterSpacing: '0.05em',
            textTransform: 'uppercase',
            padding: '0 28px',
          }}>
            {item}
          </span>
          <span style={{
            color: 'var(--green)',
            fontSize: 16,
            opacity: 0.5,
          }}>
            ◆
          </span>
        </div>
      ))}
    </motion.div>
  </div>
)

export default function Marquee() {
  return (
    <div style={{
      padding: '40px 0',
      borderTop: '1px solid var(--border)',
      borderBottom: '1px solid var(--border)',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
    }}>
      <MarqueeRow direction={1} />
      <MarqueeRow direction={-1} />
    </div>
  )
}
