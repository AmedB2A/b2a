import ArticleLayout from './ArticleLayout'

export default function CerfaGuide() {
  return (
    <ArticleLayout
      title="CERFA 11580 association : guide complet 2026"
      category="CERFA"
      readTime={6}
      date="10 Juin 2026"
      excerpt="Tout savoir sur le formulaire CERFA 11580*03 pour les associations françaises. Comment le remplir, l'envoyer et l'automatiser."
    >
      <h2>Qu'est-ce que le CERFA 11580 ?</h2>
      <p>
        Le CERFA 11580*03 est le formulaire officiel de reçu fiscal permettant
        aux associations françaises d'attester des dons reçus. Ce document est
        indispensable pour que vos donateurs puissent bénéficier d'une
        réduction d'impôt de 66% sur leur don.
      </p>

      <h2>Qui peut émettre un CERFA ?</h2>
      <p>
        Seules les associations reconnues d'intérêt général peuvent émettre
        des reçus fiscaux valides. Cela concerne la majorité des associations
        loi 1901 à but non lucratif dont la gestion est désintéressée.
      </p>

      <h2>Les mentions obligatoires</h2>
      <p>Un CERFA 11580 valide doit comporter :</p>
      <ul>
        <li>Le nom et l'adresse complète de l'association</li>
        <li>Le numéro RNA ou SIREN de l'association</li>
        <li>Le nom et l'adresse complète du donateur</li>
        <li>Le montant du don en chiffres et en lettres</li>
        <li>La date et la nature du versement</li>
        <li>La signature du représentant légal</li>
      </ul>

      <h2>Pourquoi automatiser l'envoi ?</h2>
      <p>
        Rédiger un CERFA manuellement pour chaque donation prend du temps,
        expose à des erreurs et peut décourager les donateurs qui attendent
        leur reçu. L'automatisation garantit un envoi instantané, une
        conformité parfaite et une expérience professionnelle.
      </p>

      <h2>Comment AssoDoc automatise le CERFA</h2>
      <p>
        AssoDoc est la seule plateforme française qui génère et envoie
        automatiquement le CERFA 11580*03 à chaque donateur :
      </p>
      <ol>
        <li>Le donateur fait un don via QR code ou lien</li>
        <li>Stripe confirme le paiement</li>
        <li>AssoDoc génère le PDF CERFA automatiquement</li>
        <li>L'email est envoyé immédiatement au donateur</li>
        <li>Le document est archivé dans le tableau de bord</li>
      </ol>

      <h2>Réduction fiscale : les chiffres</h2>
      <p>
        Pour un don à une association d'intérêt général, la réduction d'impôt
        est de 66% du montant versé. Un don de 100€ ne coûte réellement que
        34€ au donateur après déduction. Mettre en avant cet avantage augmente
        significativement les dons reçus.
      </p>
    </ArticleLayout>
  )
}
