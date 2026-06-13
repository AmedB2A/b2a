import { useState } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [sent, setSent] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      await fetch('/api/notify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, product: 'Newsletter' }),
      })
      setSent(true)
    } catch {
      setSent(true)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section style={{ padding: '80px 48px' }}>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={{
          maxWidth: 700,
          margin: '0 auto',
          background: 'white',
          border: '1px solid var(--border)',
          borderRadius: 24,
          padding: 40,
          textAlign: 'center',
          boxShadow: 'var(--shadow-md)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div style={{
          position: 'absolute', top: 0,
          left: 0, right: 0, height: 3,
          background: 'var(--accent-gradient)',
        }} />

        <h3 style={{
          fontSize: 'clamp(22px,3vw,32px)',
          fontWeight: 900,
          letterSpacing: '-0.03em',
          color: 'var(--text-1)',
          marginBottom: 12,
        }}>
          Restez <span className="gradient-text">informé.</span>
        </h3>
        <p style={{ fontSize: 14, color: 'var(--text-2)', marginBottom: 24 }}>
          Recevez nos actualités et nos articles directement par email.
        </p>

        {sent ? (
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
            <CheckCircle2 size={18} style={{ color: '#10B981' }} />
            <span style={{ fontSize: 14, color: '#059669', fontWeight: 600 }}>
              Inscription confirmée !
            </span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: 'flex', maxWidth: 420, margin: '0 auto' }}>
            <input
              type="email"
              required
              placeholder="Votre email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              style={{
                background: 'var(--bg-2)',
                border: '1px solid var(--border)',
                borderRadius: '10px 0 0 10px',
                padding: '12px 16px',
                fontSize: 14,
                color: 'var(--text-1)',
                outline: 'none',
                flex: 1,
                fontFamily: 'inherit',
              }}
            />
            <button
              type="submit"
              disabled={loading}
              style={{
                background: 'var(--accent-gradient)',
                color: 'white',
                border: 'none',
                borderRadius: '0 10px 10px 0',
                padding: '12px 22px',
                fontSize: 14,
                fontWeight: 700,
                cursor: loading ? 'not-allowed' : 'pointer',
                whiteSpace: 'nowrap',
                fontFamily: 'inherit',
              }}
            >
              {loading ? '...' : "S'abonner"}
            </button>
          </form>
        )}
      </motion.div>
    </section>
  )
}
