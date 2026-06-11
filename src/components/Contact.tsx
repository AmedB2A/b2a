import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  })
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

      if (!res.ok) throw new Error('Request failed')

      setSent(true)
    } catch {
      setError("Une erreur est survenue. Réessayez ou écrivez-nous directement à b2a.group@outlook.com.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <section
      id="contact"
      style={{
        padding: '120px 48px',
        background: 'rgba(255,255,255,0.01)',
        borderTop: '1px solid rgba(255,255,255,0.05)',
      }}
    >
      <div style={{
        maxWidth: 640,
        margin: '0 auto',
      }}>
        <div style={{
          textAlign: 'center',
          marginBottom: 64,
        }}>
          <div style={{
            fontSize: 12, fontWeight: 600,
            letterSpacing: '0.15em',
            color: '#D4AF37', marginBottom: 20,
          }}>
            CONTACT
          </div>

          <h2 style={{
            fontSize: 'clamp(36px,5vw,52px)',
            fontWeight: 700,
            letterSpacing: '-0.03em',
            marginBottom: 16,
          }}>
            Parlons de votre projet.
          </h2>

          <p style={{
            fontSize: 17,
            color: 'rgba(255,255,255,0.4)',
            lineHeight: 1.65,
          }}>
            Réponse sous 48h.
            Virement bancaire uniquement.
            Code source toujours fourni.
          </p>
        </div>

        {sent ? (
          <div style={{
            textAlign: 'center',
            padding: 60,
            background: 'rgba(212,175,55,0.06)',
            border: '1px solid rgba(212,175,55,0.2)',
            borderRadius: 24,
          }}>
            <div style={{
              fontSize: 48, marginBottom: 20,
            }}>✓</div>
            <h3 style={{
              fontSize: 24, fontWeight: 700,
              marginBottom: 12,
            }}>
              Message envoyé !
            </h3>
            <p style={{
              color: 'rgba(255,255,255,0.5)',
              fontSize: 16,
            }}>
              L'équipe B2A Groupe vous
              recontacte sous 48h.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            {/* Input styles */}
            <style>{`
              .b2a-input {
                width: 100%;
                background: rgba(255,255,255,0.04);
                border: 1px solid rgba(255,255,255,0.08);
                border-radius: 12px;
                color: white;
                font-size: 16px;
                padding: 16px 18px;
                outline: none;
                transition: all 0.2s ease;
                font-family: inherit;
                margin-bottom: 14px;
                box-sizing: border-box;
              }
              .b2a-input:focus {
                border-color: rgba(212,175,55,0.4);
                background: rgba(212,175,55,0.04);
                box-shadow: 0 0 0 4px rgba(212,175,55,0.08);
              }
              .b2a-input::placeholder {
                color: rgba(255,255,255,0.2);
              }
            `}</style>

            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 14,
            }}>
              <input
                className="b2a-input"
                placeholder="Prénom et Nom *"
                required
                value={form.name}
                onChange={e =>
                  setForm(f => ({...f, name: e.target.value}))
                }
                style={{ marginBottom: 0 }}
              />
              <input
                className="b2a-input"
                type="email"
                placeholder="Email *"
                required
                value={form.email}
                onChange={e =>
                  setForm(f => ({...f, email: e.target.value}))
                }
                style={{ marginBottom: 0 }}
              />
            </div>

            <div style={{ marginBottom: 14 }} />

            <input
              className="b2a-input"
              type="tel"
              placeholder="Téléphone"
              value={form.phone}
              onChange={e =>
                setForm(f => ({...f, phone: e.target.value}))
              }
            />

            <select
              className="b2a-input"
              required
              value={form.service}
              onChange={e =>
                setForm(f => ({...f, service: e.target.value}))
              }
              style={{
                cursor: 'pointer',
                color: form.service
                  ? 'white'
                  : 'rgba(255,255,255,0.2)',
              }}
            >
              <option value="" disabled>
                Service souhaité *
              </option>
              <option value="saas">
                SaaS / Application Web (à partir de 2 000€)
              </option>
              <option value="app">
                Application Mobile (à partir de 5 000€)
              </option>
              <option value="pack">
                Pack Complet (à partir de 9 500€)
              </option>
            </select>

            <textarea
              className="b2a-input"
              placeholder="Décrivez votre projet *"
              required
              rows={5}
              value={form.message}
              onChange={e =>
                setForm(f => ({...f, message: e.target.value}))
              }
              style={{ resize: 'vertical' }}
            />

            <button
              type="submit"
              disabled={loading}
              style={{
                width: '100%',
                height: 56,
                background: loading
                  ? 'rgba(212,175,55,0.4)'
                  : 'linear-gradient(135deg, #D4AF37, #F5E070)',
                color: '#000',
                border: 'none',
                borderRadius: 14,
                fontSize: 16,
                fontWeight: 700,
                cursor: loading ? 'not-allowed' : 'pointer',
                transition: 'all 0.2s ease',
                letterSpacing: '-0.01em',
              }}
              onMouseEnter={e => {
                if (!loading) {
                  (e.currentTarget as HTMLElement)
                    .style.transform = 'translateY(-2px)'
                  ;(e.currentTarget as HTMLElement)
                    .style.boxShadow = '0 16px 40px rgba(212,175,55,0.35)'
                }
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement)
                  .style.transform = 'translateY(0)'
                ;(e.currentTarget as HTMLElement)
                  .style.boxShadow = 'none'
              }}
            >
              {loading
                ? 'Envoi en cours...'
                : 'Envoyer ma demande →'}
            </button>

            {error && (
              <p style={{
                textAlign: 'center',
                marginTop: 16,
                fontSize: 14,
                color: '#F87171',
              }}>
                {error}
              </p>
            )}

            <p style={{
              textAlign: 'center',
              marginTop: 16,
              fontSize: 13,
              color: 'rgba(255,255,255,0.25)',
            }}>
              Réponse sous 48h ·
              b2a.group@outlook.com
            </p>
          </form>
        )}
      </div>
    </section>
  )
}
