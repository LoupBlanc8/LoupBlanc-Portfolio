export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  year: string;
  tech?: string[];
}

export const projects: Project[] = [
  {
    id: '01',
    title: 'Gestion de Stock',
    category: 'Développement Web',
    description: "Application web de gestion de stock développée avec PHP et MySQL. Interface intuitive permettant le suivi en temps réel des inventaires, la gestion des fournisseurs et la génération de rapports.",
    year: '2024',
    tech: ['PHP', 'MySQL', 'Bootstrap', 'JavaScript']
  },
  {
    id: '02',
    title: 'Application de Ticketing',
    category: 'Applications',
    description: "Système de gestion de tickets pour le support informatique. Permet la création, l'assignation et le suivi des incidents techniques avec des niveaux de priorité.",
    year: '2024',
    tech: ['Java', 'Spring Boot', 'PostgreSQL', 'React']
  },
  {
    id: '03',
    title: "Réseau d'Entreprise Simulé",
    category: 'Réseaux',
    description: "Configuration complète d'un réseau d'entreprise simulé sous Packet Tracer : VLANs, routage inter-VLAN, DHCP, DNS, et mise en place de politiques de sécurité réseau.",
    year: '2023',
    tech: ['Cisco', 'Packet Tracer', 'VLAN', 'DHCP']
  },
  {
    id: '04',
    title: 'API RESTful — Bibliothèque',
    category: 'Développement Web',
    description: "Conception et développement d'une API REST pour la gestion d'une bibliothèque. Authentification JWT, documentation Swagger, et tests unitaires complets.",
    year: '2024',
    tech: ['Node.js', 'Express', 'MongoDB', 'JWT']
  },
  {
    id: '05',
    title: 'Modélisation BDD — Clinique',
    category: 'Base de données',
    description: "Modélisation conceptuelle et logique d'une base de données pour une clinique médicale. MCD, MLD, scripts SQL et requêtes complexes.",
    year: '2023',
    tech: ['SQL', 'MySQL', 'Merise', 'UML']
  }
];
