import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useSearchParams } from 'react-router-dom'
import { CheckCircle2, Mail, Clock } from 'lucide-react'

export default function Contact() {
  const [searchParams] = useSearchParams()
  const [form, setForm] = useState({
    name: '', email: '',
    subject: searchParams.get('subject') || '', message: '',
  })
  const [focused, setFocused] = useState('')
  const [loading, setLoading] = useState(false)
  const [sent, setSent] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        throw new Error(data.error || "Erreur lors de l'envoi")
      }
      setSent(true)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erreur lors de l'envoi")
    } finally {
      setLoading(false)
    }
  }

  const inputStyle = (name: string) => ({
    width: '100%',
    background: focused === name
      ? 'white'
      : 'var(--bg-2)',
    border: `1px solid ${
      focused === name
        ? 'rgba(124,58,237,0.4)'
        : 'var(--border)'
    }`,
    borderRadius: 12,
    color: 'var(--text-1)',
    fontSize: 15,
    padding: '14px 16px',
    outline: 'none',
    transition: 'all 0.2s ease',
    fontFamily: 'inherit',
    boxShadow: focused === name
      ? '0 0 0 4px rgba(124,58,237,0.08)'
      : 'none',
    boxSizing: 'border-box' as const,
  })

  return (
    <section
      id="contact"
      style={{
        padding: '120px 48px',
        background: 'var(--bg-2)',
        borderTop: '1px solid var(--border)',
      }}
    >
      <div className="contact-grid" style={{
        maxWidth: 1000,
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 80,
        alignItems: 'start',
      }}>

        {/* Left */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            background: 'var(--accent-gradient-soft)',
            border: '1px solid rgba(124,58,237,0.15)',
            borderRadius: 9999,
            padding: '5px 14px',
            marginBottom: 24,
          }}>
            <span style={{
              fontSize: 11, fontWeight: 700,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              background: 'var(--accent-gradient)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>
              Contact
            </span>
          </div>

          <h2 style={{
            fontSize: 'clamp(32px,4vw,52px)',
            fontWeight: 900,
            letterSpacing: '-0.04em',
            lineHeight: 1.0,
            color: 'var(--text-1)',
            marginBottom: 20,
          }}>
            Discutons
            <br />
            <span className="gradient-text">ensemble.</span>
          </h2>

          <p style={{
            fontSize: 16,
            color: 'var(--text-2)',
            lineHeight: 1.75,
            marginBottom: 40,
          }}>
            Une question sur nos produits,
            une opportunité de collaboration ?
            Nous sommes disponibles.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {[
              { icon: Clock, text: 'Réponse sous 48h' },
              { icon: Mail, text: 'b2a.group@outlook.com' },
            ].map(({ icon: Icon, text }) => (
              <div key={text} style={{
                display: 'flex',
                alignItems: 'center',
                gap: 12,
              }}>
                <div style={{
                  width: 36, height: 36,
                  borderRadius: 10,
                  background: 'var(--accent-gradient-soft)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}>
                  <Icon size={16} style={{
                    color: 'var(--purple)'
                  }} />
                </div>
                <span style={{
                  fontSize: 14,
                  color: 'var(--text-2)',
                  fontWeight: 500,
                }}>
                  {text}
                </span>
              </div>
            ))}
          </div>

          {/* Discreet studio mention */}
          <div style={{
            marginTop: 48,
            padding: '16px 20px',
            borderRadius: 12,
            background: 'white',
            border: '1px solid var(--border)',
            boxShadow: 'var(--shadow-sm)',
          }}>
            <p style={{
              fontSize: 12,
              color: 'var(--text-3)',
              lineHeight: 1.6,
            }}>
              Vous souhaitez bénéficier de notre
              expertise pour votre projet digital ?{' '}
              <a
                href="mailto:b2a.group@outlook.com"
                style={{
                  color: 'var(--purple)',
                  textDecoration: 'none',
                  fontWeight: 500,
                }}
              >
                Contactez-nous directement.
              </a>
            </p>
          </div>
        </motion.div>

        {/* Right — Form */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          style={{
            background: 'white',
            borderRadius: 24,
            padding: 36,
            boxShadow: 'var(--shadow-md)',
            border: '1px solid var(--border)',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Top gradient line */}
          <div style={{
            position: 'absolute', top: 0,
            left: 0, right: 0, height: 3,
            background: 'var(--accent-gradient)',
          }} />

          <AnimatePresence mode="wait">
            {sent ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: 'spring', stiffness: 300 }}
                style={{ textAlign: 'center', padding: '40px 0' }}
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 300, delay: 0.1 }}
                  style={{ marginBottom: 20 }}
                >
                  <CheckCircle2
                    size={52}
                    style={{ color: '#10B981' }}
                  />
                </motion.div>
                <h3 style={{
                  fontSize: 22,
                  fontWeight: 800,
                  color: 'var(--text-1)',
                  marginBottom: 10,
                  letterSpacing: '-0.03em',
                }}>
                  Message envoyé !
                </h3>
                <p style={{
                  fontSize: 14,
                  color: 'var(--text-2)',
                  lineHeight: 1.6,
                }}>
                  Nous vous répondons sous 48h à{' '}
                  <strong style={{ color: 'var(--purple)' }}>
                    {form.email}
                  </strong>
                </p>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                style={{ display: 'flex', flexDirection: 'column', gap: 12 }}
              >
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: 12,
                }}>
                  <input
                    style={inputStyle('name')}
                    placeholder="Nom *"
                    required
                    value={form.name}
                    onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                    onFocus={() => setFocused('name')}
                    onBlur={() => setFocused('')}
                  />
                  <input
                    style={inputStyle('email')}
                    type="email"
                    placeholder="Email *"
                    required
                    value={form.email}
                    onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                    onFocus={() => setFocused('email')}
                    onBlur={() => setFocused('')}
                  />
                </div>

                <input
                  style={inputStyle('subject')}
                  placeholder="Sujet"
                  value={form.subject}
                  onChange={e => setForm(f => ({ ...f, subject: e.target.value }))}
                  onFocus={() => setFocused('subject')}
                  onBlur={() => setFocused('')}
                />

                <textarea
                  style={{
                    ...inputStyle('message'),
                    minHeight: 140,
                    resize: 'vertical',
                    paddingTop: 14,
                    lineHeight: 1.6,
                  }}
                  placeholder="Votre message *"
                  required
                  rows={5}
                  value={form.message}
                  onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                  onFocus={() => setFocused('message')}
                  onBlur={() => setFocused('')}
                />

                {error && (
                  <p style={{ color: '#DC2626', fontSize: 13, fontWeight: 500 }}>
                    {error}
                  </p>
                )}

                <motion.button
                  type="submit"
                  disabled={loading}
                  whileHover={!loading ? { scale: 1.02, y: -1 } : {}}
                  whileTap={!loading ? { scale: 0.98 } : {}}
                  style={{
                    width: '100%',
                    height: 52,
                    background: loading
                      ? 'rgba(124,58,237,0.5)'
                      : 'var(--accent-gradient)',
                    color: 'white',
                    border: 'none',
                    borderRadius: 12,
                    fontSize: 15,
                    fontWeight: 700,
                    cursor: loading
                      ? 'not-allowed'
                      : 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 8,
                    fontFamily: 'inherit',
                    letterSpacing: '-0.01em',
                    boxShadow: loading
                      ? 'none'
                      : 'var(--shadow-purple)',
                    marginTop: 4,
                  }}
                >
                  {loading ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
                      style={{
                        width: 20, height: 20,
                        border: '2px solid rgba(255,255,255,0.3)',
                        borderTopColor: 'white',
                        borderRadius: '50%',
                      }}
                    />
                  ) : 'Envoyer le message'}
                </motion.button>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
