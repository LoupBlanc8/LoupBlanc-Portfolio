# Document de Conception Produit (PRD) - Portfolio Minimaliste & Dynamique

**Version :** 1.0  
**Statut :** Document de Référence (Source of Truth)  
**Rôle :** Expert Product Manager & Designer UX/UI

---

## 1. Résumé du Projet et Objectifs

### Vision
Créer un portfolio numérique d'exception qui transcende la simple vitrine de projets. L'objectif est de marier un esthétisme minimaliste et haut de gamme avec des fonctionnalités dynamiques modernes, reflétant une expertise technique pointue et un souci du détail graphique.

### Objectifs Principaux
- **Identité Forte** : Marquer les esprits par un design "original" et épuré.
- **Expérience Utilisateur (UX)** : Fluidité absolue des transitions et navigation intuitive.
- **Démonstration Technique** : Intégration d'une API temps réel (Veille Or) pour prouver la capacité à gérer des données dynamiques.
- **Maintenabilité** : Système modulaire pour ajouter des projets sans toucher à la structure core.

---

## 2. Spécifications Fonctionnelles et Techniques

### Sections du Site
1.  **Accueil / Projets** :
    - Grille ou liste minimaliste affichant les travaux.
    - Système de filtrage par tags (optionnel).
    - Page de détail projet avec support média riche.
2.  **À Propos** :
    - Narration textuelle élégante.
    - Timeline de compétences ou parcours.
3.  **Veille Technologique (Cours de l'Or)** :
    - Dashboard dynamique affichant le cours en temps réel.
    - Graphique de tendance (Sparklines).
    - Indicateurs de variation (24h).
4.  **Contact** :
    - Formulaire épuré avec validation en temps réel.
    - Liens réseaux sociaux (LinkedIn, GitHub).

### Stack Technique (Recommandée)
- **Framework** : Vite.js (React) pour la rapidité et la modularité.
- **Styling** : Vanilla CSS ou CSS Modules pour un contrôle total sans surcharge.
- **Animations** : Framer Motion ou GSAP pour les transitions fluides.
- **Données** : API de marché financier (ex: GoldAPI, MetalpriceAPI).

---

## 3. Charte Graphique et Principes d'UI

### Esthétique "Minimaliste Originale"
- **Espaces (White Space)** : Utilisation généreuse du vide pour laisser respirer le contenu.
- **Typographie** : Duo de polices (une Serif élégante pour les titres, une Sans-Serif géométrique pour le corps).
- **Mode Sombre (Dark Mode)** :
    - *Light* : Fond crème (#F9F9F7), texte anthracite (#1A1A1A).
    - *Dark* : Fond noir profond (#0C0C0C), texte gris perle (#E0E0E0).
    - *Contraste* : Accents dorés (#D4AF37) subtils pour le rappel du cours de l'or.

### Micro-animations et Transitions
- **Page Transitions** : Effet de "Fade" associé à un léger "Slide" vers le haut.
- **Magnetic Buttons** : Boutons réagissant à la proximité du curseur.
- **Hover Effects** : Distorsion légère sur les images ou soulignement animé.
- **Loading States** : Squelettes de chargement (skeletons) élégants pour la section Veille.

---

## 4. Roadmap de Développement

### Phase 1 : Fondations (Semaine 1)
- Initialisation du projet Vite + Structure des dossiers.
- Mise en place du système de Design (Variables CSS, Thèmes).
- Layout global (Navigation, Footer).

### Phase 2 : Core Features (Semaine 2)
- Développement de la section Projets (Système JSON/Markdown pour les données).
- Création de la page À Propos.
- Intégration de l'API de veille (Cours de l'Or).

### Phase 3 : Polish & UX (Semaine 3)
- Implémentation de Framer Motion pour toutes les transitions.
- Finalisation de la page Contact.
- Optimisation SEO et performance (Lighthouse score 90+).

---

> [!IMPORTANT]
> **Règle d'or de développement :** Ne jamais sacrifier la performance pour l'esthétique. Chaque animation doit servir l'expérience utilisateur ou la compréhension de l'interface.
