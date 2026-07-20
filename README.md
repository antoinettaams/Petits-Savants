# Petits Savants — Site de vente

Landing page mono-produit pour le kit d'écriture magique réutilisable
"Petits Savants" (marché de lancement : Bénin). Next.js (App Router) +
Tailwind CSS v4, sans backend — les commandes partent vers WhatsApp ou par
email.

## Lancer en local

```bash
npm install
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000).

## Où modifier le contenu

Tout le contenu éditorial (textes, prix, packs, FAQ, avis clients, contacts)
est centralisé dans **[lib/site-config.ts](lib/site-config.ts)**. C'est le
seul fichier à modifier pour :

- changer le numéro WhatsApp / email de commande (`brand.whatsappNumber`,
  `brand.orderEmail`) ;
- ajuster les prix et remises des packs (`packs`) ;
- mettre à jour la FAQ (`faq`) ;
- remplacer les avis clients placeholder par de vrais témoignages
  (`testimonials`).

Cherchez `[PLACEHOLDER]` dans le code (`grep -rn "PLACEHOLDER" .`) pour
retrouver tous les éléments provisoires à remplacer avant la mise en ligne
définitive : numéro WhatsApp, prix, avis clients, mentions légales, et les
emplacements de photos/vidéos réelles (actuellement des blocs
`PlaceholderMedia` avec bordure en pointillés).

## Structure

- `app/page.tsx` — assemble la landing page (une seule page scrollable).
- `app/commande/page.tsx` — page de commande dédiée (utile pour les liens
  directs de pub), accepte `?pack=decouverte|fratrie|famille` pour
  présélectionner un pack.
- `components/` — une section = un composant.
- `lib/site-config.ts` — contenu et configuration centralisés.

## Déployer sur Vercel

1. Pousser ce dossier sur un dépôt GitHub.
2. Sur [vercel.com/new](https://vercel.com/new), importer le dépôt (Vercel
   détecte Next.js automatiquement, aucune configuration nécessaire).
3. Une fois déployé, mettre à jour `siteUrl` dans `app/layout.tsx` avec le
   vrai domaine.

Le site est statique/léger (pas de base de données, pas de variables
d'environnement requises) : le plan gratuit de Vercel suffit largement.
