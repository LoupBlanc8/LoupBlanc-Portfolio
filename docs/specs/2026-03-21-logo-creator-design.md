# Spécification de la Compétence : Logo Creator (Global)

**Date** : 2026-03-21  
**Statut** : En cours de validation  
**Portée** : Global (`C:\Users\dirin\.gemini\antigravity\skills\logo-creator`)

## Objectif
Créer un assistant spécialisé pour aider l'utilisateur à concevoir, raffiner et générer des logos professionnels, incluant leurs variantes et un guide de style simplifé.

## Fonctionnalités
1. **Brainstorming Guidé** : Analyser les besoins (secteur, nom, valeurs) et proposer 3 concepts créatifs distincts (Axe 1, 2, 3) avant toute génération d'image.
2. **Choix par l'Utilisateur** : Validation d'un axe spécifique ou mélange d'idées.
3. **Génération par IA (via `generate_image`)** : Transformation de l'axe choisi en prompt optimisé pour un rendu de logo professionnel (fond plat, style vectoriel, minimalisme).
4. **Déclinaison de Variantes** : Génération systématique de :
    - Logo principal (Texte + Symbole)
    - Symbole seul (Icon/Favicon)
    - Logo sur fond sombre/clair si nécessaire.
5. **Kit d'Identité Visuelle** : Fournir les codes couleurs Hex et des suggestions de polices Google Fonts harmonieuses.

## Architecture du Skill
- **`SKILL.md`** : Instructions exhaustives sur le flux "Brainstorming > Sélection > Génération > Variantes".
- **`README.md`** (Optionnel) : Documentation rapide pour l'utilisateur.

## Flux d'utilisation par l'agent
1. **Étape 1 (Exploration)** : Demander le nom de la marque et son secteur.
2. **Étape 2 (Concepts)** : Présenter 3 axes (Style, Symbolisme, Couleurs).
3. **Étape 3 (Action)** : Une fois l'axe choisi, générer l'image source.
4. **Étape 4 (Finition)** : Générer les variantes et le guide de style.

## Contraintes techniques
- Langue : Français exclusivement.
- Emplacement : Global (`C:\Users\dirin\.gemini\antigravity\skills\logo-creator`).
- Interdiction de générer des images complexes/surchargées sans validation.
