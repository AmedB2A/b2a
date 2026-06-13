import ArticleLayout from './ArticleLayout'

export default function RecuFiscal() {
  return (
    <ArticleLayout
      title="Reçu fiscal don association : tout ce qu'il faut savoir"
      category="CERFA"
      readTime={6}
      date="1 Juin 2026"
      excerpt="Qui peut émettre un reçu fiscal ? Comment le remplir ? Comment l'automatiser ? Guide complet 2026."
    >
      <h2>Le reçu fiscal : un levier puissant</h2>
      <p>
        Le reçu fiscal est souvent sous-estimé par les associations. Pourtant,
        il constitue un argument décisif pour encourager les dons. Un donateur
        qui sait qu'il peut déduire 66% de son don est bien plus enclin à
        donner.
      </p>

      <h2>Qui peut délivrer un reçu fiscal ?</h2>
      <p>
        Seules les associations d'intérêt général ou reconnues d'utilité
        publique peuvent émettre des reçus fiscaux valides. Si votre
        association a un but philanthropique, éducatif, scientifique ou
        social, elle est très probablement éligible.
      </p>

      <h2>Le montant de la déduction</h2>
      <p>
        Pour les associations d'intérêt général, la réduction d'impôt est de
        66% du montant versé, dans la limite de 20% du revenu imposable. Un
        don de 150€ coûte donc réellement 51€ au donateur.
      </p>

      <h2>Les obligations légales</h2>
      <p>
        Le CERFA 11580*03 est le formulaire officiel. Il doit être conservé
        par le donateur pour sa déclaration de revenus. L'association doit
        conserver une copie pendant au moins 6 ans.
      </p>

      <h2>L'automatisation avec AssoDoc</h2>
      <p>
        AssoDoc génère et envoie automatiquement le CERFA à chaque don. Le PDF
        est créé en temps réel et envoyé par email immédiatement. Plus aucune
        saisie manuelle, zéro risque d'erreur.
      </p>
    </ArticleLayout>
  )
}
