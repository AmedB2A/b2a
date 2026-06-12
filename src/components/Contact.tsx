import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { CheckCircle2, ArrowRight } from 'lucide-react'

interface Props { theme: 'dark' | 'light' }

export default function Contact({ theme }: Props) {
  void theme
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.2 })
  const [form, setForm] = useState({
    name: '', email: '', phone: '',
    service: '', budget: '', message: '',
  })
  const [loading, setLoading] = useState(false)
  const [sent, setSent] = useState(false)
  const [error, setError] = useState('')
  const [focused, setFocused] = useState('')

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

      if (!res.ok) throw new Error('Request failed')

      setSent(true)
    } catch {
      setError("Une erreur est survenue. Réessayez ou écrivez-nous directement à b2a.group@outlook.com.")
    } finally {
      setLoading(false)
    }
  }

  const inputStyle = (name: string) => ({
    width: '100%',
    background: focused === name
      ? 'rgba(16,185,129,0.04)'
      : 'var(--bg-glass)',
    border: `1px solid ${
      focused === name
        ? 'var(--green-border)'
        : 'var(--border)'
    }`,
    borderRadius: 'var(--radius-sm)',
    color: 'var(--text-1)',
    fontSize: 16,
    padding: '16px 18px',
    outline: 'none',
    transition: 'all 0.25s ease',
    fontFamily: 'inherit',
    boxSizing: 'border-box' as const,
    boxShadow: focused === name
      ? '0 0 0 4px var(--green-glow)'
      : 'none',
    caretColor: 'var(--green)',
  })

  return (
    <section id="contact" ref={ref} style={{
      padding: '140px 48px',
    }}>
      <div style={{ maxWidth: 640, margin: '0 auto' }}>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          style={{ marginBottom: 64, textAlign: 'center' }}
        >
          <div style={{
            fontSize: 12, fontWeight: 600,
            letterSpacing: '0.12em',
            color: 'var(--green)',
            textTransform: 'uppercase',
            marginBottom: 20,
          }}>
            Contact
          </div>

          <h2 style={{
            fontSize: 'clamp(40px,5vw,64px)',
            fontWeight: 800,
            letterSpacing: '-0.04em',
            lineHeight: 1.0,
            color: 'var(--text-1)',
            marginBottom: 20,
          }}>
            Parlons de votre{' '}
            <span style={{
              fontStyle: 'italic',
              fontFamily: "'Instrument Serif', serif",
              color: 'var(--green)',
              fontWeight: 400,
            }}>
              projet.
            </span>
          </h2>

          <p style={{
            fontSize: 17,
            color: 'var(--text-2)',
            lineHeight: 1.7,
          }}>
            Réponse sous 48h. Sans engagement.
          </p>
        </motion.div>

        <AnimatePresence mode="wait">
          {sent ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: 'spring', stiffness: 200, damping: 20 }}
              style={{
                textAlign: 'center',
                padding: 72,
                background: 'var(--green-glow)',
                border: '1px solid var(--green-border)',
                borderRadius: 'var(--radius-lg)',
              }}
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 300, delay: 0.2 }}
              >
                <CheckCircle2
                  size={56}
                  style={{ color: 'var(--green)', marginBottom: 24 }}
                />
              </motion.div>

              <h3 style={{
                fontSize: 28,
                fontWeight: 800,
                letterSpacing: '-0.03em',
                color: 'var(--text-1)',
                marginBottom: 12,
              }}>
                Message envoyé !
              </h3>

              <p style={{
                fontSize: 16,
                color: 'var(--text-2)',
                lineHeight: 1.7,
              }}>
                L'équipe B2A Groupe vous
                recontacte sous 48h à l'adresse{' '}
                <strong style={{ color: 'var(--green)' }}>
                  {form.email}
                </strong>
              </p>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
              onSubmit={handleSubmit}
              style={{ display: 'flex', flexDirection: 'column', gap: 14 }}
            >
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: 14,
              }}>
                <input
                  style={inputStyle('name')}
                  placeholder="Prénom et Nom *"
                  required
                  value={form.name}
                  onChange={e => setForm(f => ({...f, name: e.target.value}))}
                  onFocus={() => setFocused('name')}
                  onBlur={() => setFocused('')}
                />
                <input
                  style={inputStyle('email')}
                  type="email"
                  placeholder="Email *"
                  required
                  value={form.email}
                  onChange={e => setForm(f => ({...f, email: e.target.value}))}
                  onFocus={() => setFocused('email')}
                  onBlur={() => setFocused('')}
                />
              </div>

              <input
                style={inputStyle('phone')}
                type="tel"
                placeholder="Téléphone"
                value={form.phone}
                onChange={e => setForm(f => ({...f, phone: e.target.value}))}
                onFocus={() => setFocused('phone')}
                onBlur={() => setFocused('')}
              />

              <select
                style={{
                  ...inputStyle('service'),
                  cursor: 'pointer',
                  color: form.service ? 'var(--text-1)' : 'var(--text-3)',
                  appearance: 'none',
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%2310B981' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`,
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'right 16px center',
                  paddingRight: 44,
                }}
                required
                value={form.service}
                onChange={e => setForm(f => ({...f, service: e.target.value}))}
                onFocus={() => setFocused('service')}
                onBlur={() => setFocused('')}
              >
                <option value="" disabled>Service souhaité *</option>
                <option value="saas">SaaS / Application Web — À partir de 2 000€</option>
                <option value="app">Application Mobile — À partir de 5 000€</option>
                <option value="pack">Pack Complet — À partir de 9 500€</option>
              </select>

              <select
                style={{
                  ...inputStyle('budget'),
                  cursor: 'pointer',
                  color: form.budget ? 'var(--text-1)' : 'var(--text-3)',
                  appearance: 'none',
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%2310B981' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`,
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'right 16px center',
                  paddingRight: 44,
                }}
                value={form.budget}
                onChange={e => setForm(f => ({...f, budget: e.target.value}))}
                onFocus={() => setFocused('budget')}
                onBlur={() => setFocused('')}
              >
                <option value="">Budget (optionnel)</option>
                <option value="Exact">Budget exact (prix affiché)</option>
                <option value="Flexible">Légèrement flexible</option>
                <option value="À discuter">À discuter</option>
              </select>

              <textarea
                style={{
                  ...inputStyle('message'),
                  minHeight: 140,
                  resize: 'vertical',
                  paddingTop: 16,
                  lineHeight: 1.6,
                }}
                placeholder="Décrivez votre projet *"
                required
                rows={5}
                value={form.message}
                onChange={e => setForm(f => ({...f, message: e.target.value}))}
                onFocus={() => setFocused('message')}
                onBlur={() => setFocused('')}
              />

              <motion.button
                type="submit"
                disabled={loading}
                whileHover={!loading ? { scale: 1.02, boxShadow: 'var(--shadow-green)' } : {}}
                whileTap={!loading ? { scale: 0.98 } : {}}
                style={{
                  width: '100%',
                  height: 60,
                  background: loading
                    ? 'rgba(16,185,129,0.5)'
                    : 'var(--green)',
                  color: 'white',
                  border: 'none',
                  borderRadius: 'var(--radius-md)',
                  fontSize: 16,
                  fontWeight: 700,
                  letterSpacing: '-0.02em',
                  cursor: loading ? 'not-allowed' : 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 8,
                  fontFamily: 'inherit',
                  marginTop: 8,
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
                ) : (
                  <>
                    Envoyer ma demande
                    <ArrowRight size={18} />
                  </>
                )}
              </motion.button>

              {error && (
                <p style={{ textAlign: 'center', fontSize: 14, color: '#F87171' }}>
                  {error}
                </p>
              )}

              <p style={{
                textAlign: 'center',
                fontSize: 13,
                color: 'var(--text-3)',
                marginTop: 4,
              }}>
                Réponse garantie sous 48h ·
                b2a.group@outlook.com
              </p>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
