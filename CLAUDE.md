# Petits Savants — Règles du projet

## Icônes

- **Ne jamais utiliser d'émojis comme icônes d'interface** (boutons, listes,
  cartes de bénéfices, réassurances, titres de section, badges, etc.).
- **Toujours utiliser `lucide-react`** pour toute icône : un composant SVG
  (`<Check />`, `<Truck />`, `<Sparkles />`, `<BookOpen />`, `<RefreshCw />`,
  `<ShieldCheck />`, `<Phone />`, ...).
- Garder un style d'icône cohérent : même épaisseur de trait
  (`strokeWidth`), tailles harmonisées, couleurs issues de la palette de
  marque (`--primary`, `--accent`, `--muted`). Pas de mélange de styles
  d'icônes (pas de fill lourd à côté de traits fins, etc.).
- Avant d'utiliser une icône lucide, vérifier qu'elle existe bien dans le
  package installé (`node -e "console.log(!!require('lucide-react').NomIcone)"`)
  plutôt que de deviner un nom.

## Identité visuelle

- Palette « Ardoise & Encre » : voir les tokens CSS dans `app/globals.css`
  (`--primary` = ardoise, `--accent` = encre rouge, `--ink` = neutre foncé,
  `--bg` = fond craie). Ne pas réintroduire de dégradés type SaaS
  (violet/bleu) ni de palette corail/sarcelle générique.
- Typographie : **Fraunces** pour les titres (display), **Work Sans** pour
  le texte courant et l'UI. Chargées via `next/font/google` dans
  `app/layout.tsx`.
- Logo = wordmark texte uniquement ("Petits Savants"), jamais de
  pictogramme ni d'initiales. Voir `components/Logo.tsx`.

## Contenu et configuration

- Tout le contenu éditorial et les prix sont centralisés dans
  `lib/site-config.ts`. Modifier ce fichier plutôt que de coder des valeurs
  en dur dans les composants.
- Les éléments provisoires (photos/vidéos, avis clients, contacts,
  mentions légales) sont marqués `[PLACEHOLDER]` dans le code — les
  conserver clairement identifiés tant que le contenu réel n'est pas fourni.
