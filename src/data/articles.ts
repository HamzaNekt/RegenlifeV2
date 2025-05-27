export interface Article {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  readTime: string;
  image?: string;
}

// Imports d'images et d'icônes pour les nouveaux articles
import oxyChambreHisar from '../assets/articles/oxy_chambre_hisar.jpg';
import iconeOxygene from '../assets/icons/icone_oxygene.png';
import iconeSecurite from '../assets/icons/icone_securite.png';
import preparationPatient from '../assets/articles/preparation_patient.jpg';
import iconeChecklist from '../assets/icons/icone_checklist.png';
import mayoEquipement from '../assets/articles/mayo_equipement.jpg';
import platEnergie from '../assets/articles/plat_energie.jpg';
import iconeEnergie from '../assets/icons/icone_energie.png';
import schemaDigestif from '../assets/articles/schema_digestif.jpg';
import iconeDigestion from '../assets/icons/icone_digestion.png';
import patientDetendu from '../assets/articles/patient_detendu.jpg';
import iconeSommeil from '../assets/icons/icone_sommeil.png';
import rejuvenceClinic from '../assets/articles/rejuvence_clinic.jpg';
import iconeRegeneration from '../assets/icons/icone_regeneration.png';

export const articles: Article[] = [
  {
    id: '1',
    title: 'Bienvenue sur le Forum Regenlife',
    excerpt: 'Découvrez notre espace de discussion dédié à la santé et au bien-être.',
    content: `
      <p>Bienvenue dans notre espace de discussion dédié à la santé et au bien-être.</p>
      <p>Ici, vous trouverez des articles informatifs, des conseils d'experts et des discussions sur divers sujets liés à la santé.</p>
      <h2>Notre Mission</h2>
      <p>Notre mission est de fournir des informations fiables et à jour sur la santé et le bien-être, tout en créant une communauté de soutien où chacun peut partager ses expériences et poser des questions.</p>
      <h2>Comment Utiliser ce Forum</h2>
      <p>Naviguez à travers nos différentes catégories pour trouver des sujets qui vous intéressent. N'hésitez pas à participer aux discussions et à partager vos propres expériences.</p>
    `,
    author: 'Équipe Regenlife',
    date: '2024-03-20',
    category: 'Actualités',
    readTime: '2 min'
  },
  {
    id: '3',
    title: "L'Oxygénothérapie Hyperbare : principes, indications et fonctionnement",
    excerpt: "L'oxygénothérapie hyperbare (OTH) consiste à inhaler de l'oxygène pur sous pression, augmentant jusqu'à 20 fois la quantité d'oxygène dans le sang et les tissus. Découvrez ses indications, son déroulement et les spécificités du centre Hisar Hospital.",
    content: `
      <div style='text-align:center;margin-bottom:2em;'>
        <img src="${oxyChambreHisar}" alt="Chambre hyperbare moderne" style="max-width:420px;width:100%;border-radius:1em;box-shadow:0 4px 24px #0001;margin-bottom:1em;" />
      </div>
      <p>L'oxygénothérapie hyperbare (OTH) est une technique médicale avancée qui consiste à faire respirer à un patient de l'oxygène pur à 100% dans une chambre de pression, à une pression 2 à 3 fois supérieure à la pression atmosphérique normale. Ce traitement innovant permet d'augmenter considérablement la quantité d'oxygène dissous dans le sang et les tissus, favorisant ainsi la guérison, la régénération cellulaire et la lutte contre certaines infections.</p>
      <hr style="margin:2em 0;"/>
      <h2 style="color:#2563eb;display:flex;align-items:center;gap:0.5em;"><img src="${iconeOxygene}" alt="Oxygène" style="width:24px;"/> Qu'est-ce que l'OTH&nbsp;?</h2>
      <p>L'OTH repose sur un principe simple : en augmentant la pression ambiante et en faisant respirer de l'oxygène pur, on multiplie la quantité d'oxygène transportée par le sang. Cela permet d'atteindre des tissus mal irrigués, d'accélérer la cicatrisation et de stimuler les défenses naturelles de l'organisme.</p>
      <ul style="margin-bottom:1.5em; padding-left:1.5em; list-style:square;">
        <li>Augmentation de l'oxygénation des tissus</li>
        <li>Effet antibactérien et anti-inflammatoire</li>
        <li>Stimulation de la production de collagène et de facteurs de croissance</li>
      </ul>
      <hr style="margin:2em 0;"/>
      <h2 style="color:#2563eb;display:flex;align-items:center;gap:0.5em;"><img src="${iconeOxygene}" alt="Oxygène" style="width:24px;"/> Pour quelles maladies&nbsp;?</h2>
      <p>L'OTH est indiquée dans de nombreuses pathologies, notamment :</p>
      <ul style="margin-bottom:1.5em; padding-left:1.5em; list-style:square;">
        <li>Plaies diabétiques et cicatrisation difficile</li>
        <li>Perte auditive ou visuelle soudaine</li>
        <li>Gangrène gazeuse, infections graves des tissus mous</li>
        <li>Lésions dues aux radiations</li>
        <li>Empoisonnement au monoxyde de carbone</li>
        <li>Accidents de décompression (plongée)</li>
        <li>Brûlures, abcès cérébral, inflammations osseuses persistantes</li>
      </ul>
      <hr style="margin:2em 0;"/>
      <h2 style="color:#2563eb;display:flex;align-items:center;gap:0.5em;"><img src="${iconeSecurite}" alt="Sécurité" style="width:24px;"/> Caractéristiques du système Hisar</h2>
      <ul style="margin-bottom:1.5em; padding-left:1.5em; list-style:square;">
        <li>Chambre hyperbare spacieuse et moderne, pouvant accueillir jusqu'à 12 patients simultanément</li>
        <li>Équipement de sécurité conforme aux normes internationales</li>
        <li>Surveillance continue par caméra et équipe médicale spécialisée</li>
        <li>Options multimédia (films, musique) pour le confort des patients</li>
        <li>Intervention immédiate possible en cas d'urgence grâce à la présence d'une équipe d'anesthésie et de soins intensifs</li>
        <li>Approche multidisciplinaire pour une prise en charge globale</li>
      </ul>
      <hr style="margin:2em 0;"/>
      <h2 style="color:#2563eb; font-size:1.2rem; margin-bottom:0.5em;">Questions fréquentes</h2>
      <h3 style="color:#2563eb; font-size:1.1rem; margin-bottom:0.3em;">Comment se déroule une séance&nbsp;?</h3>
      <ol style="margin-bottom:1.5em; padding-left:1.5em; list-style:decimal;">
        <li>Le patient s'installe dans la chambre de pression, sur un siège confortable ou une civière.</li>
        <li>La pression est progressivement augmentée (sensation comparable à un décollage en avion).</li>
        <li>Le patient respire de l'oxygène pur à l'aide d'un masque ou d'un système dédié.</li>
        <li>La séance dure généralement entre 1,5 et 2 heures.</li>
        <li>Après la séance, la pression est ramenée à la normale en douceur.</li>
      </ol>
      <h3 style="color:#2563eb; font-size:1.1rem; margin-bottom:0.3em;">Quels sont les effets ressentis&nbsp;?</h3>
      <ul style="margin-bottom:1.5em; padding-left:1.5em; list-style:square;">
        <li>Sensation de pression dans les oreilles (comme en avion)</li>
        <li>Fatigue légère ou sensation de bien-être après la séance</li>
        <li>Amélioration progressive des symptômes selon la pathologie</li>
      </ul>
      <h3 style="color:#2563eb; font-size:1.1rem; margin-bottom:0.3em;">Effets secondaires et précautions</h3>
      <ul style="margin-bottom:1.5em; padding-left:1.5em; list-style:square;">
        <li>Effets secondaires rares : barotraumatisme, claustrophobie, myopie passagère</li>
        <li>Il est important de signaler tout antécédent médical avant le traitement</li>
        <li>Ne pas apporter d'objets inflammables ou électroniques dans la chambre</li>
        <li>Porter des vêtements confortables en coton</li>
      </ul>
      <hr style="margin:2em 0;"/>
      <h2 style="color:#2563eb; font-size:1.2rem; margin-bottom:0.5em;">En résumé</h2>
      <p>L'oxygénothérapie hyperbare, telle que pratiquée au centre Hisar Hospital, offre une solution innovante et sécurisée pour de nombreuses pathologies. Son efficacité est renforcée par un environnement hospitalier moderne, une équipe spécialisée et une prise en charge globale du patient. Pour toute question ou indication, n'hésitez pas à consulter un professionnel de santé qualifié.</p>
    `,
    author: 'Équipe Regenlife',
    date: '2024-06-01',
    category: 'Traitements Innovants',
    readTime: '10 min'
  },
  {
    id: '4',
    title: "Se préparer à un traitement hyperbare : conseils pratiques",
    excerpt: "Conseils pour bien se préparer à une séance d'oxygénothérapie hyperbare, de l'hygiène aux vêtements, en passant par les précautions à prendre.",
    content: `
      <div style='text-align:center;margin-bottom:2em;'>
        <img src="${preparationPatient}" alt="Préparation patient" style="max-width:420px;width:100%;border-radius:1em;box-shadow:0 4px 24px #0001;margin-bottom:1em;" />
      </div>
      <p>Bien se préparer à une séance d'oxygénothérapie hyperbare (OTH) est essentiel pour garantir le confort, la sécurité et l'efficacité du traitement. Voici un guide complet pour aborder sereinement chaque étape, de la préparation à la récupération.</p>
      <hr style="margin:2em 0;"/>
      <h2 style="color:#2563eb;display:flex;align-items:center;gap:0.5em;"><img src="${iconeChecklist}" alt="Checklist" style="width:24px;"/> Avant la séance</h2>
      <ul style="margin-bottom:1.5em; padding-left:1.5em; list-style:square;">
        <li>Évitez d'appliquer des produits inflammables (parfum, crème grasse, laque, etc.).</li>
        <li>Portez des vêtements amples et en coton, sans éléments métalliques.</li>
        <li>Signalez tous vos antécédents médicaux et traitements en cours au personnel médical.</li>
        <li>Ne mangez pas trop lourd juste avant la séance, mais ne venez pas à jeun.</li>
        <li>Retirez bijoux, montres, appareils électroniques avant d'entrer dans la chambre.</li>
      </ul>
      <hr style="margin:2em 0;"/>
      <h2 style="color:#2563eb; font-size:1.2rem; margin-bottom:0.5em;">Pendant la séance</h2>
      <ol style="margin-bottom:1.5em; padding-left:1.5em; list-style:decimal;">
        <li>Installez-vous confortablement sur le siège ou la civière prévue.</li>
        <li>La pression augmente progressivement: vous pouvez ressentir une pression dans les oreilles (comme en avion).</li>
        <li>Respirez calmement l'oxygène pur à l'aide du masque fourni.</li>
        <li>En cas de gêne, signalez-le immédiatement au personnel via l'interphone.</li>
        <li>Profitez des options multimédia (musique, films) pour vous détendre.</li>
      </ol>
      <hr style="margin:2em 0;"/>
      <h2 style="color:#2563eb; font-size:1.2rem; margin-bottom:0.5em;">Après la séance</h2>
      <ul style="margin-bottom:1.5em; padding-left:1.5em; list-style:square;">
        <li>Hydratez-vous bien après la séance.</li>
        <li>Reprenez vos activités calmement, évitez les efforts intenses immédiats.</li>
        <li>Signalez tout effet secondaire inhabituel (fatigue excessive, vertiges, etc.).</li>
      </ul>
      <hr style="margin:2em 0;"/>
      <h2 style="color:#2563eb; font-size:1.2rem; margin-bottom:0.5em;">Questions fréquentes</h2>
      <h3 style="color:#2563eb; font-size:1.1rem; margin-bottom:0.3em;">Combien de temps dure la séance?</h3>
      <p>En général, une séance dure entre 1h30 et 2h, selon la pathologie et le protocole.</p>
      <h3 style="color:#2563eb; font-size:1.1rem; margin-bottom:0.3em;">Quels effets secondaires possibles?</h3>
      <ul style="margin-bottom:1.5em; padding-left:1.5em; list-style:square;">
        <li>Sensation de pression dans les oreilles (à équilibrer en avalant ou en bâillant).</li>
        <li>Fatigue légère, maux de tête passagers.</li>
        <li>Effets secondaires rares: barotraumatisme, claustrophobie.</li>
      </ul>
      <hr style="margin:2em 0;"/>
      <h2 style="color:#2563eb; font-size:1.2rem; margin-bottom:0.5em;">En résumé</h2>
      <p>Une bonne préparation et une communication avec l'équipe médicale sont les clés d'une séance d'OTH réussie. N'hésitez pas à poser toutes vos questions avant, pendant et après le traitement pour vivre cette expérience en toute sérénité.</p>
    `,
    author: 'Équipe Regenlife',
    date: '2024-06-01',
    category: 'Conseils pratiques',
    readTime: '5 min'
  },
  {
    id: '5',
    title: "Oxygénothérapie hyperbare : indications, déroulement et sécurité (Mayo Clinic)",
    excerpt: "Explications claires sur les indications, le déroulement, les risques et les bénéfices de l'OTH selon la Mayo Clinic.",
    content: `
      <div style='text-align:center;margin-bottom:2em;'>
        <img src="${mayoEquipement}" alt="Équipement médical" style="max-width:420px;width:100%;border-radius:1em;box-shadow:0 4px 24px #0001;margin-bottom:1em;" />
      </div>
      <p>L'oxygénothérapie hyperbare (OTH) est une thérapie reconnue internationalement pour ses nombreux bénéfices dans le traitement de pathologies complexes. Découvrez les indications, le déroulement d'une séance, les risques et les résultats attendus selon la Mayo Clinic.</p>
      <hr style="margin:2em 0;"/>
      <h2 style="color:#2563eb; font-size:1.3rem; margin-bottom:0.5em;">Indications médicales</h2>
      <p>L'OTH est utilisée dans la prise en charge de&nbsp;:</p>
      <ul style="margin-bottom:1.5em; padding-left:1.5em; list-style:square;">
        <li>Embolie gazeuse (présence de bulles d'air dans la circulation sanguine)</li>
        <li>Infections graves des tissus mous (gangrène, fasciite nécrosante)</li>
        <li>Brûlures sévères et ulcères diabétiques résistants</li>
        <li>Lésions dues aux radiations ou à l'écrasement</li>
      </ul>
      <hr style="margin:2em 0;"/>
      <h2 style="color:#2563eb; font-size:1.3rem; margin-bottom:0.5em;">Déroulement d'une séance</h2>
      <ol style="margin-bottom:1.5em; padding-left:1.5em; list-style:decimal;">
        <li>Le patient s'installe dans une chambre pressurisée, seul ou en groupe.</li>
        <li>La pression est augmentée progressivement, sous surveillance médicale.</li>
        <li>Le patient respire de l'oxygène pur via un masque ou un casque adapté.</li>
        <li>La séance dure généralement entre 1h30 et 2h.</li>
        <li>Après la séance, la pression est ramenée à la normale lentement.</li>
      </ol>
      <hr style="margin:2em 0;"/>
      <h2 style="color:#2563eb;display:flex;align-items:center;gap:0.5em;"><img src="${iconeSecurite}" alt="Sécurité" style="width:24px;"/> Risques et effets secondaires</h2>
      <ul style="margin-bottom:1.5em; padding-left:1.5em; list-style:square;">
        <li>Barotraumatisme des oreilles ou des sinus (pression à équilibrer)</li>
        <li>Claustrophobie (peur des espaces clos)</li>
        <li>Myopie passagère, fatigue légère</li>
        <li>Effets secondaires rares : convulsions, toxicité de l'oxygène</li>
      </ul>
      <p>Un examen médical préalable est indispensable pour limiter les risques et adapter le protocole à chaque patient.</p>
      <hr style="margin:2em 0;"/>
      <h2 style="color:#2563eb; font-size:1.3rem; margin-bottom:0.5em;">Résultats attendus</h2>
      <ul style="margin-bottom:1.5em; padding-left:1.5em; list-style:square;">
        <li>Amélioration de la cicatrisation des plaies et brûlures</li>
        <li>Réduction des infections et des douleurs chroniques</li>
        <li>Meilleure oxygénation des tissus et récupération plus rapide</li>
      </ul>
      <hr style="margin:2em 0;"/>
      <h2 style="color:#2563eb; font-size:1.2rem; margin-bottom:0.5em;">En résumé</h2>
      <p>L'OTH, selon la Mayo Clinic, est une solution efficace et sûre pour de nombreuses pathologies, à condition d'être bien encadrée médicalement. N'hésitez pas à consulter un spécialiste pour toute indication ou question.</p>
    `,
    author: 'Équipe Regenlife',
    date: '2024-06-01',
    category: 'Traitements Innovants',
    readTime: '6 min'
  },
  {
    id: '6',
    title: "Fatigue persistante? Les aliments validés par une diététicienne pour retrouver de l'énergie",
    excerpt: "Conseils nutritionnels pour lutter contre la fatigue malgré un bon sommeil, avec une sélection d'aliments énergisants.",
    content: `
      <div style='text-align:center;margin-bottom:2em;'>
        <img src="${platEnergie}" alt="Plat énergisant" style="max-width:420px;width:100%;border-radius:1em;box-shadow:0 4px 24px #0001;margin-bottom:1em;" />
      </div>
      <p>La fatigue persistante, même après une bonne nuit de sommeil, est un problème fréquent. L'alimentation joue un rôle clé pour retrouver de l'énergie au quotidien. Découvrez les conseils d'une diététicienne et les aliments à privilégier pour booster votre vitalité.</p>
      <hr style="margin:2em 0;"/>
      <h2 style="color:#2563eb;display:flex;align-items:center;gap:0.5em;"><img src="${iconeEnergie}" alt="Énergie" style="width:24px;"/> Pourquoi suis-je fatigué&nbsp;?</h2>
      <p>La fatigue peut avoir de multiples causes&nbsp;: stress, manque de sommeil, carences, alimentation déséquilibrée, sédentarité… Il est important d'identifier la cause pour agir efficacement.</p>
      <ul style="margin-bottom:1.5em; padding-left:1.5em; list-style:square;">
        <li>Manque de fer, magnésium ou vitamines</li>
        <li>Excès de sucres rapides ou d'aliments ultra-transformés</li>
        <li>Hydratation insuffisante</li>
        <li>Rythme de vie irrégulier</li>
      </ul>
      <hr style="margin:2em 0;"/>
      <h2 style="color:#2563eb; font-size:1.3rem; margin-bottom:0.5em;">Les aliments à privilégier</h2>
      <p>Certains aliments sont de véritables alliés pour retrouver de l'énergie&nbsp;:</p>
      <ul style="margin-bottom:1.5em; padding-left:1.5em; list-style:square;">
        <li>Fruits frais (banane, orange, kiwi…)</li>
        <li>Légumes verts (épinards, brocolis, chou kale…)</li>
        <li>Protéines maigres (œufs, poisson, volaille)</li>
        <li>Céréales complètes (avoine, riz complet, quinoa)</li>
        <li>Oléagineux (amandes, noix, noisettes)</li>
        <li>Légumineuses (lentilles, pois chiches, haricots rouges)</li>
      </ul>
      <hr style="margin:2em 0;"/>
      <h2 style="color:#2563eb; font-size:1.3rem; margin-bottom:0.5em;">Conseils pratiques</h2>
      <ol style="margin-bottom:1.5em; padding-left:1.5em; list-style:decimal;">
        <li>Hydratez-vous régulièrement tout au long de la journée.</li>
        <li>Privilégiez les repas équilibrés et variés.</li>
        <li>Évitez les grignotages sucrés et les boissons énergisantes.</li>
        <li>Adoptez un rythme de sommeil régulier.</li>
        <li>Pratiquez une activité physique adaptée à votre forme.</li>
      </ol>
      <hr style="margin:2em 0;"/>
      <h2 style="color:#2563eb; font-size:1.2rem; margin-bottom:0.5em;">En résumé</h2>
      <p>Une alimentation saine, variée et adaptée à vos besoins est la clé pour retrouver de l'énergie durablement. N'hésitez pas à consulter un professionnel de santé ou une diététicienne en cas de fatigue persistante.</p>
    `,
    author: 'Équipe Regenlife',
    date: '2024-06-01',
    category: 'Nutrition',
    readTime: '4 min'
  },
  {
    id: '7',
    title: "Ce que la fréquence de vos selles révèle sur votre santé",
    excerpt: "Analyse de la « poop clock » et de ce que la fréquence des selles indique sur la santé digestive.",
    content: `
      <div style='text-align:center;margin-bottom:2em;'>
        <img src="${schemaDigestif}" alt="Schéma digestif" style="max-width:420px;width:100%;border-radius:1em;box-shadow:0 4px 24px #0001;margin-bottom:1em;" />
      </div>
      <p>La fréquence de vos selles, souvent appelée « poop clock », est un indicateur précieux de votre santé digestive. Comprendre ce rythme et savoir reconnaître les signaux d'alerte permet de préserver un bon transit et d'anticiper d'éventuels troubles digestifs.</p>
      <hr style="margin:2em 0;"/>
      <h2 style="color:#2563eb;display:flex;align-items:center;gap:0.5em;"><img src="${iconeDigestion}" alt="Digestion" style="width:24px;"/> Qu'est-ce que la « poop clock » ?</h2>
      <p>La « poop clock » désigne la fréquence à laquelle une personne va à la selle. Ce rythme varie selon les individus, mais il existe des repères pour juger de la normalité du transit.</p>
      <ul style="margin-bottom:1.5em; padding-left:1.5em; list-style:square;">
        <li>1 à 3 fois par jour : considéré comme normal</li>
        <li>Moins de 3 fois par semaine : constipation</li>
        <li>Plus de 3 fois par jour : possible trouble digestif (diarrhée, syndrome de l'intestin irritable…)</li>
      </ul>
      <hr style="margin:2em 0;"/>
      <h2 style="color:#2563eb; font-size:1.3rem; margin-bottom:0.5em;">Fréquence normale et signaux d'alerte</h2>
      <p>Il est important d'être attentif à tout changement durable de la fréquence ou de l'aspect des selles :</p>
      <ul style="margin-bottom:1.5em; padding-left:1.5em; list-style:square;">
        <li>Selles très dures ou très liquides</li>
        <li>Sang ou mucus dans les selles</li>
        <li>Douleurs abdominales persistantes</li>
        <li>Perte de poids inexpliquée</li>
      </ul>
      <p>En cas de doute, consultez un professionnel de santé.</p>
      <hr style="margin:2em 0;"/>
      <h2 style="color:#2563eb; font-size:1.3rem; margin-bottom:0.5em;">Conseils pour un bon transit</h2>
      <ol style="margin-bottom:1.5em; padding-left:1.5em; list-style:decimal;">
        <li>Mangez des fibres (fruits, légumes, céréales complètes)</li>
        <li>Hydratez-vous suffisamment (1,5 à 2L d'eau par jour)</li>
        <li>Pratiquez une activité physique régulière</li>
        <li>Évitez le stress et adoptez un rythme de vie régulier</li>
      </ol>
      <hr style="margin:2em 0;"/>
      <h2 style="color:#2563eb; font-size:1.2rem; margin-bottom:0.5em;">En résumé</h2>
      <p>La surveillance de la fréquence et de l'aspect des selles est un réflexe santé simple et efficace. Un transit régulier est le reflet d'un bon équilibre alimentaire et d'une bonne hygiène de vie.</p>
    `,
    author: 'Équipe Regenlife',
    date: '2024-06-01',
    category: 'Santé digestive',
    readTime: '4 min'
  },
  {
    id: '8',
    title: "Stress, sommeil, migraine? Que vaut l'oxygénation hyperbare?",
    excerpt: "Focus sur les bienfaits de l'OTH pour le stress, le sommeil et la migraine.",
    content: `
      <div style='text-align:center;margin-bottom:2em;'>
        <img src="${patientDetendu}" alt="Patient détendu" style="max-width:420px;width:100%;border-radius:1em;box-shadow:0 4px 24px #0001;margin-bottom:1em;" />
      </div>
      <p>L'oxygénothérapie hyperbare (OTH) n'est pas seulement réservée aux pathologies lourdes : elle suscite un intérêt croissant pour le bien-être, la gestion du stress, l'amélioration du sommeil et la réduction des migraines. Voici un tour d'horizon des bénéfices potentiels de l'OTH dans ces domaines.</p>
      <hr style="margin:2em 0;"/>
      <h2 style="color:#2563eb;display:flex;align-items:center;gap:0.5em;"><img src="${iconeSommeil}" alt="Sommeil" style="width:24px;"/> OTH et stress</h2>
      <p>Le stress chronique a de nombreux effets délétères sur l'organisme. L'OTH, en augmentant l'oxygénation du cerveau et des tissus, favorise la détente, réduit la production de cortisol (hormone du stress) et améliore la récupération mentale.</p>
      <ul style="margin-bottom:1.5em; padding-left:1.5em; list-style:square;">
        <li>Sensation de relaxation profonde après la séance</li>
        <li>Meilleure gestion des émotions et de l'anxiété</li>
        <li>Effet anti-inflammatoire bénéfique pour le système nerveux</li>
      </ul>
      <hr style="margin:2em 0;"/>
      <h2 style="color:#2563eb; font-size:1.3rem; margin-bottom:0.5em;">OTH et sommeil</h2>
      <p>Des études récentes montrent que l'OTH peut améliorer la qualité du sommeil, notamment chez les personnes souffrant d'insomnie ou de troubles du rythme circadien.</p>
      <ul style="margin-bottom:1.5em; padding-left:1.5em; list-style:square;">
        <li>Endormissement facilité</li>
        <li>Sommeil plus profond et réparateur</li>
        <li>Diminution des réveils nocturnes</li>
      </ul>
      <hr style="margin:2em 0;"/>
      <h2 style="color:#2563eb; font-size:1.3rem; margin-bottom:0.5em;">OTH et migraine</h2>
      <p>L'OTH est également étudiée pour son effet sur la fréquence et l'intensité des migraines. L'oxygène sous pression aide à réduire l'inflammation cérébrale et à améliorer la circulation sanguine.</p>
      <ul style="margin-bottom:1.5em; padding-left:1.5em; list-style:square;">
        <li>Moins de crises migraineuses</li>
        <li>Crises moins intenses et plus courtes</li>
        <li>Amélioration de la qualité de vie des patients migraineux</li>
      </ul>
      <hr style="margin:2em 0;"/>
      <h2 style="color:#2563eb; font-size:1.2rem; margin-bottom:0.5em;">En résumé</h2>
      <p>L'oxygénothérapie hyperbare offre des perspectives prometteuses pour le bien-être global, la gestion du stress, l'amélioration du sommeil et la réduction des migraines. Pour toute indication, demandez conseil à un professionnel de santé spécialisé.</p>
    `,
    author: 'Équipe Regenlife',
    date: '2024-06-01',
    category: 'Bien-être',
    readTime: '4 min'
  },
  {
    id: '9',
    title: "Rejuvence Clinic : l'oxygénothérapie hyperbare au service de la régénération",
    excerpt: "Présentation de la clinique Rejuvence et de ses protocoles d'OTH pour la régénération cellulaire et le bien-être.",
    content: `
      <div style='text-align:center;margin-bottom:2em;'>
        <img src="${rejuvenceClinic}" alt="Rejuvence Clinic" style="max-width:420px;width:100%;border-radius:1em;box-shadow:0 4px 24px #0001;margin-bottom:1em;" />
      </div>
      <p>La Rejuvence Clinic est un centre de référence pour l'oxygénothérapie hyperbare (OTH) appliquée à la régénération cellulaire et au bien-être. Découvrez leur approche innovante, les protocoles proposés et les résultats observés chez les patients.</p>
      <hr style="margin:2em 0;"/>
      <h2 style="color:#2563eb;display:flex;align-items:center;gap:0.5em;"><img src="${iconeRegeneration}" alt="Régénération" style="width:24px;"/> Présentation de la clinique</h2>
      <p>Située au Royaume-Uni, la Rejuvence Clinic propose des traitements OTH dans un environnement moderne et sécurisé, avec une équipe médicale spécialisée.</p>
      <ul style="margin-bottom:1.5em; padding-left:1.5em; list-style:square;">
        <li>Chambres hyperbares de dernière génération</li>
        <li>Suivi personnalisé et approche multidisciplinaire</li>
        <li>Accompagnement du patient tout au long du protocole</li>
      </ul>
      <hr style="margin:2em 0;"/>
      <h2 style="color:#2563eb; font-size:1.3rem; margin-bottom:0.5em;">Protocoles OTH</h2>
      <p>La clinique propose des protocoles adaptés à chaque patient, selon ses besoins et ses objectifs :</p>
      <ul style="margin-bottom:1.5em; padding-left:1.5em; list-style:square;">
        <li>Traitements anti-âge et revitalisation cellulaire</li>
        <li>Récupération après blessure ou chirurgie</li>
        <li>Optimisation des performances sportives</li>
      </ul>
      <hr style="margin:2em 0;"/>
      <h2 style="color:#2563eb; font-size:1.3rem; margin-bottom:0.5em;">Résultats et témoignages</h2>
      <p>De nombreux patients témoignent d'une amélioration de leur vitalité, d'une récupération plus rapide et d'un bien-être général après un protocole OTH à la Rejuvence Clinic.</p>
      <ul style="margin-bottom:1.5em; padding-left:1.5em; list-style:square;">
        <li>Peau plus éclatante et tonique</li>
        <li>Meilleure énergie au quotidien</li>
        <li>Moins de douleurs chroniques</li>
      </ul>
      <hr style="margin:2em 0;"/>
      <h2 style="color:#2563eb; font-size:1.2rem; margin-bottom:0.5em;">En résumé</h2>
      <p>L'oxygénothérapie hyperbare, telle que pratiquée à la Rejuvence Clinic, s'impose comme une solution innovante pour la régénération cellulaire, la récupération et le bien-être. Pour toute question, contactez un professionnel de santé ou la clinique directement.</p>
    `,
    author: 'Équipe Regenlife',
    date: '2024-06-01',
    category: 'Régénération',
    readTime: '5 min'
  }
]; 