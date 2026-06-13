import type { VercelRequest, VercelResponse } from '@vercel/node'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' })
    return
  }

  const { email, product } = req.body ?? {}

  if (!email) {
    res.status(400).json({ error: 'Email manquant' })
    return
  }

  try {
    await resend.emails.send({
      from: 'B2A Groupe <onboarding@resend.dev>',
      to: 'b2a.group@outlook.com',
      subject: `${escapeHtml(product || 'Produit')} — Notification lancement`,
      html: `<p>Email : ${escapeHtml(email)}</p>`,
    })

    res.status(200).json({ success: true })
  } catch (err) {
    console.error('Resend error:', err)
    res.status(500).json({ error: "Erreur lors de l'envoi" })
  }
}
