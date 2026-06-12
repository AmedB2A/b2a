import type { VercelRequest, VercelResponse } from '@vercel/node'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

const SERVICE_LABELS: Record<string, string> = {
  saas: 'SaaS / Application Web (à partir de 2 000€)',
  app: 'Application Mobile (à partir de 5 000€)',
  pack: 'Pack Complet (à partir de 9 500€)',
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' })
    return
  }

  const { name, email, phone, service, budget, message } = req.body ?? {}

  if (!name || !email || !service || !message) {
    res.status(400).json({ error: 'Champs requis manquants' })
    return
  }

  try {
    await resend.emails.send({
      from: 'B2A Groupe <onboarding@resend.dev>',
      to: 'b2a.group@outlook.com',
      replyTo: email,
      subject: `Nouvelle demande de projet — ${name}`,
      html: `
        <h2>Nouvelle demande de projet</h2>
        <p><strong>Nom :</strong> ${name}</p>
        <p><strong>Email :</strong> ${email}</p>
        <p><strong>Téléphone :</strong> ${phone || 'Non renseigné'}</p>
        <p><strong>Service :</strong> ${SERVICE_LABELS[service] ?? service}</p>
        <p><strong>Budget :</strong> ${budget || 'Non renseigné'}</p>
        <p><strong>Message :</strong></p>
        <p>${String(message).replace(/\n/g, '<br>')}</p>
      `,
    })

    res.status(200).json({ success: true })
  } catch (err) {
    console.error('Resend error:', err)
    res.status(500).json({ error: "Erreur lors de l'envoi du message" })
  }
}
