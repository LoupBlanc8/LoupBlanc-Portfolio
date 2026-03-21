export interface SubCompetence {
  label: string;
}

export interface Competence {
  id: string;
  title: string;
  shortTitle: string;
  subCompetences: SubCompetence[];
  associatedProjects: string[]; // IDs des projets associés (à remplir plus tard)
}

export const competences: Competence[] = [
  {
    id: 'patrimoine',
    title: 'Gérer le patrimoine informatique',
    shortTitle: 'Patrimoine IT',
    subCompetences: [
      { label: 'Recenser et identifier les ressources numériques' },
      { label: 'Exploiter des référentiels, normes et standards adoptés par le prestataire informatique' },
      { label: "Mettre en place et vérifier les niveaux d'habilitation associés à un service" },
      { label: "Vérifier les conditions de la continuité d'un service informatique" },
      { label: 'Gérer des sauvegardes' },
      { label: "Vérifier le respect des règles d'utilisation des ressources numériques" },
    ],
    associatedProjects: [],
  },
  {
    id: 'incidents',
    title: "Répondre aux incidents et aux demandes d'assistance et d'évolution",
    shortTitle: 'Incidents & Assistance',
    subCompetences: [
      { label: 'Collecter, suivre et orienter des demandes' },
      { label: 'Traiter des demandes concernant les services réseau et système, applicatifs' },
      { label: 'Traiter des demandes concernant les applications' },
    ],
    associatedProjects: [],
  },
  {
    id: 'presence-en-ligne',
    title: "Développer la présence en ligne de l'organisation",
    shortTitle: 'Présence en ligne',
    subCompetences: [
      { label: "Participer à la valorisation de l'image de l'organisation sur les médias numériques en tenant compte du cadre juridique et des enjeux économiques" },
      { label: "Référencer les services en ligne de l'organisation et mesurer leur visibilité" },
      { label: "Participer à l'évolution d'un site Web exploitant les données de l'organisation" },
    ],
    associatedProjects: [],
  },
  {
    id: 'mode-projet',
    title: 'Travailler en mode projet',
    shortTitle: 'Mode projet',
    subCompetences: [
      { label: "Analyser les objectifs et les modalités d'organisation d'un projet" },
      { label: 'Planifier les activités' },
      { label: "Évaluer les indicateurs de suivi d'un projet et analyser les écarts" },
    ],
    associatedProjects: [],
  },
  {
    id: 'service-informatique',
    title: "Mettre à disposition des utilisateurs un service informatique",
    shortTitle: 'Service IT',
    subCompetences: [
      { label: "Réaliser les tests d'intégration et d'acceptation d'un service" },
      { label: 'Déployer un service' },
      { label: 'Accompagner les utilisateurs dans la mise en place d\'un service' },
    ],
    associatedProjects: [],
  },
  {
    id: 'developpement-pro',
    title: 'Organiser son développement professionnel',
    shortTitle: 'Développement pro',
    subCompetences: [
      { label: "Mettre en place son environnement d'apprentissage personnel" },
      { label: "Mettre en œuvre des outils et stratégies de veille informationnelle" },
      { label: 'Gérer son identité professionnelle' },
      { label: 'Développer son projet professionnel' },
    ],
    associatedProjects: [],
  },
  {
    id: 'rendre-compte',
    title: "Capacité à rendre compte d'un travail réalisé au sein d'une équipe projet",
    shortTitle: 'Rendre compte',
    subCompetences: [
      { label: "Rédiger un compte rendu clair et concis d'un travail réalisé" },
      { label: "Mettre en évidence sa contribution personnelle au sein du projet" },
      { label: "Communiquer de manière écrite et orale de façon adaptée à l'interlocuteur" },
    ],
    associatedProjects: [],
  },
];
