import ArticleLayout from './ArticleLayout'

export default function CreerAssociation() {
  return (
    <ArticleLayout
      title="Comment créer une association loi 1901 en 2026"
      category="Guide"
      readTime={10}
      date="3 Juin 2026"
      excerpt="Guide complet pour créer votre association : statuts, déclaration préfecture, RNA et outils de gestion."
    >
      <h2>Pourquoi créer une association loi 1901 ?</h2>
      <p>
        La loi du 1er juillet 1901 permet à tout groupe de personnes de se
        constituer en association pour poursuivre un but non lucratif. C'est
        le cadre juridique le plus utilisé en France avec plus de 1,5 million
        d'associations actives.
      </p>

      <h2>Les étapes de création</h2>

      <h3>1. Choisir le nom et l'objet</h3>
      <p>
        Le nom doit être unique et l'objet clairement défini dans les statuts.
        Il déterminera les activités autorisées et votre éligibilité aux
        subventions.
      </p>

      <h3>2. Rédiger les statuts</h3>
      <p>
        Les statuts sont le document fondateur. Ils définissent l'objet, le
        siège social, les organes dirigeants et les règles de fonctionnement.
        Ils doivent être signés par au moins deux membres fondateurs.
      </p>

      <h3>3. Déclarer en préfecture</h3>
      <p>
        La déclaration se fait en ligne sur service-public.fr ou directement
        en préfecture. Elle est gratuite. Vous recevrez un numéro RNA
        (Répertoire National des Associations) dans les 5 jours ouvrés.
      </p>

      <h3>4. Publication au Journal Officiel</h3>
      <p>
        Automatique lors de la déclaration en ligne, elle est obligatoire pour
        que votre association ait la capacité juridique de recevoir des dons.
      </p>

      <h3>5. Ouvrir un compte bancaire</h3>
      <p>
        Indispensable pour recevoir des cotisations et des dons. Prévoyez les
        statuts et le procès-verbal de l'assemblée constitutive pour
        l'ouverture.
      </p>

      <h3>6. Choisir ses outils de gestion</h3>
      <p>
        Dès le départ, équipez votre association d'un logiciel adapté. AssoDoc
        permet de gérer membres, finances, CERFA et communication depuis une
        seule plateforme.
      </p>

      <h2>Les erreurs à éviter</h2>
      <ul>
        <li>Statuts trop vagues sur l'objet social</li>
        <li>Oublier la publication au Journal Officiel</li>
        <li>Ne pas tenir de registre des délibérations</li>
        <li>Confondre les finances de l'association avec les finances personnelles</li>
      </ul>
    </ArticleLayout>
  )
}
