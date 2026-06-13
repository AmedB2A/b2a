export default function Legal() {
  return (
    <div style={{ maxWidth: 720, margin: '0 auto', padding: '120px 32px 80px' }}>
      <h1 style={{
        fontFamily: 'Syne, sans-serif',
        fontSize: 36,
        fontWeight: 800,
        letterSpacing: '-0.03em',
        color: 'var(--text-1)',
        marginBottom: 40,
      }}>
        Mentions légales
      </h1>

      <div className="article-content">
        <h2>Éditeur du site</h2>
        <p>
          B2A Groupe<br />
          Email : b2a.group@outlook.com
        </p>

        <h2>Hébergement</h2>
        <p>
          Vercel Inc.
        </p>

        <h2>Propriété intellectuelle</h2>
        <p>
          Tous les contenus de ce site (textes, images, logos, graphismes)
          sont la propriété exclusive de B2A Groupe, sauf mention contraire.
          Toute reproduction, représentation, modification ou exploitation,
          totale ou partielle, sans autorisation préalable est interdite.
        </p>

        <h2>Données personnelles</h2>
        <p>
          Conformément au Règlement Général sur la Protection des Données
          (RGPD), vous disposez d'un droit d'accès, de rectification et de
          suppression des données personnelles vous concernant. Pour exercer
          ce droit, contactez-nous à b2a.group@outlook.com.
        </p>
      </div>
    </div>
  )
}
