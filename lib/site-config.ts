// ---------------------------------------------------------------------------
// CONFIGURATION CENTRALE DU SITE "PETITS SAVANTS"
// ---------------------------------------------------------------------------
// Modifie ce fichier pour mettre à jour les textes, prix, contacts et offres
// affichés sur tout le site sans avoir à toucher aux composants.
//
// Tous les éléments marqués [PLACEHOLDER] sont provisoires et DOIVENT être
// remplacés avant la mise en ligne finale (numéro WhatsApp, prix réels,
// avis clients, photos/vidéos produit).
// ---------------------------------------------------------------------------

export const brand = {
  name: "Petits Savants",
  tagline: "Le cahier magique qui donne le goût d'apprendre",
  whatsappNumber: "22943757982",
  whatsappDisplay: "+229 04 37 57 982",
  formspreeId: "mkodvqzg", // ✅ ID Formspree
  orderEmail: "commandes@petits-savants.example",
  facebookUrl: "https://facebook.com/petitssavants",
  tiktokUrl: "https://tiktok.com/@petitssavants",
  city: "Cotonou, Bénin",
};


export const backToSchool = {
  date: "14 septembre 2026",
  // [PLACEHOLDER] Message d'urgence honnête — pas de faux compte à rebours.
  stockNote: "Stock limité pour préparer les commandes avant la rentrée.",
};

// -----------------------------------------------------------------------
// PRIX — variables à ajuster ici. Un "Kit" = 1 kit complet Petits Savants
// (4 cahiers à rainures 3D + 1 stylo magique + 1 guide-doigt + 10 recharges).
// [PLACEHOLDER] Tous les montants sont provisoires (Francs CFA / XOF).
//
// Le prix par kit baisse automatiquement par palier de quantité : modifie
// simplement les paliers ci-dessous, tous les prix affichés sur le site
// (cartes de packs, modale de commande, message WhatsApp) se recalculent
// à partir d'ici.
// -----------------------------------------------------------------------
export const currency = "FCFA";

export const PRICE_PER_KIT_TIERS = [
  { minKits: 1, pricePerKit: 12000 },   // 1 kit = 12 000 FCFA
  { minKits: 2, pricePerKit: 11000 },   // 2 kits = 22 000 FCFA (économie 2 000 FCFA)
  { minKits: 3, pricePerKit: 11000 },
] as const;

// Prix de référence "avant réduction" affiché barré, par kit.
export const REFERENCE_PRICE_PER_KIT = 15000;

export const MAX_KITS_IN_MODAL = 10;

export function pricePerKitFor(kits: number): number {
  let price: number = PRICE_PER_KIT_TIERS[0].pricePerKit;
  for (const tier of PRICE_PER_KIT_TIERS) {
    if (kits >= tier.minKits) price = tier.pricePerKit;
  }
  return price;
}

export function computeTotal(kits: number): number {
  const safeKits = Math.max(1, Math.round(kits));
  return safeKits * pricePerKitFor(safeKits);
}

export function computeCompareAtTotal(kits: number): number {
  const safeKits = Math.max(1, Math.round(kits));
  return safeKits * REFERENCE_PRICE_PER_KIT;
}

export function formatPrice(value: number): string {
  return new Intl.NumberFormat("fr-FR").format(value) + " " + currency;
}

export function discountPercent(kits: number): number {
  const total = computeTotal(kits);
  const compareAt = computeCompareAtTotal(kits);
  return Math.round(100 - (total / compareAt) * 100);
}

// -- Offres / Packs -----------------------------------------------------
// Raccourcis de quantité mis en avant sur la page. Les prix affichés pour
// chaque pack sont calculés depuis les paliers ci-dessus (computeTotal).
export type Pack = {
  id: string;
  title: string;
  kits: number;
  badge?: string;
  highlight?: boolean;
};

export const packs: Pack[] = [
  {
    id: "decouverte",
    title: "Pack Découverte",
    kits: 1,
    highlight: false,
  },
  {
    id: "fratrie",
    title: "Pack Fratrie",
    kits: 2,
    badge: "Le plus choisi",
    highlight: true,
  },
  {
    id: "famille",
    title: "Pack Famille",
    kits: 3,
    badge: "Meilleure économie",
    highlight: false,
  },
];

export function packSubtitle(kits: number): string {
  return kits === 1
    ? "1 kit complet Petits Savants"
    : `${kits} kits complets Petits Savants`;
}

// -- Contenu du kit (icônes = noms d'export lucide-react) ---------------
export const kitContents = [
  {
    icon: "BookOpen",
    label: "4 cahiers à rainures 3D",
    detail: "Alphabet, Chiffres, Mathématiques d'initiation, Dessins d'éveil",
  },
  {
    icon: "PenLine",
    label: "1 stylo magique",
    detail: "Encre spéciale qui s'efface toute seule",
  },
  {
    icon: "Hand",
    label: "1 guide-doigt en silicone",
    detail: "Forme de petit dauphin, pour bien positionner les doigts",
  },
  {
    icon: "RefreshCw",
    label: "10 recharges d'encre",
    detail: "De quoi remplir plusieurs dizaines de pages",
  },
] as const;

// -- Tranches d'âge (icônes = noms d'export lucide-react) ----------------
export const ageStages = [
  {
    icon: "Sparkles",
    range: "3 à 4 ans",
    title: "Premiers gestes",
    description: "Initiation au dessin et au traçage des formes simples (coordination œil-main).",
  },
  {
    icon: "PenLine",
    range: "4 à 6 ans",
    title: "Lettres et chiffres",
    description: "Apprentissage de l'écriture des lettres (majuscules/minuscules) et des chiffres de 1 à 10.",
  },
  {
    icon: "Calculator",
    range: "6 à 8 ans",
    title: "Calligraphie et calcul",
    description: "Consolidation de l'écriture et premiers exercices de calcul (additions, soustractions simples).",
  },
] as const;

// -- Bénéfices clés (icônes = noms d'export lucide-react) ----------------
export const benefits = [
  {
    icon: "Infinity",
    title: "Réutilisable à l'infini",
    description:
      "L'encre s'efface toute seule en quelques minutes. Le même cahier sert des centaines de fois, pour tous les enfants de la famille.",
  },
  {
    icon: "HandHelping",
    title: "Motricité fine renforcée",
    description:
      "Les rainures 3D guident la main de l'enfant et l'aident à mémoriser le bon geste d'écriture, sans stress ni erreur.",
  },
  {
    icon: "Leaf",
    title: "Économique et écologique",
    description:
      "Un seul kit remplace des dizaines de cahiers jetables. Moins de papier gâché, plus d'économies pour les parents.",
  },
  {
    icon: "MonitorOff",
    title: "Zéro écran, 100% jeu",
    description:
      "Une activité captivante qui éloigne durablement les enfants des tablettes et téléphones, tout en les faisant progresser.",
  },
] as const;

// -- Chiffres clés (compteurs animés à l'apparition) ----------------------
// `value` est la partie numérique qui s'anime en comptant de 0 à `value`.
// `prefix`/`suffix` restent statiques autour du nombre animé.
export const keyStats = [
  { value: 8, prefix: "3-", suffix: " ans", label: "Tranche d'âge accompagnée" },
  { value: 500, prefix: "", suffix: "+", label: "Réutilisations par cahier, sans usure" },
  { value: 0, prefix: "", suffix: "", label: "Feuille de papier gaspillée" },
  { value: 4, prefix: "", suffix: "", label: "Cahiers inclus dans chaque kit" },
] as const;

// -- Bandeau de réassurance défilant, sous le hero (icônes lucide-react) --
export const trustBarItems = [
  { icon: "Truck", label: "Livraison partout au Bénin" },
  { icon: "Wallet", label: "Paiement à la livraison" },
  { icon: "Sparkles", label: "Dès 3 ans" },
  { icon: "RefreshCw", label: "Réutilisable à vie" },
  // [PLACEHOLDER] Remplacer par le vrai nombre de familles servies
  { icon: "HeartHandshake", label: "[PLACEHOLDER] +500 familles satisfaites" },
] as const;

// -- Progression avant / après (icônes lucide-react) -----------------------
export const progression = {
  intro:
    "Semaine après semaine, le geste se pose et l'écriture devient plus sûre.",
  before: {
    label: "Avant Petits Savants",
    caption: "Lettres mal formées, geste hésitant, page vite raturée.",
  },
  after: {
    label: "Après quelques semaines",
    caption: "Écriture posée, geste assuré, lettres bien formées.",
  },
};

// -- 3 bénéfices affichés à côté de la démo vidéo --------------------------
export const videoDemoBenefits = [
  {
    icon: "RefreshCw",
    title: "S'efface toute seule",
    description: "En 5 à 10 minutes, sans eau ni chiffon à utiliser.",
  },
  {
    icon: "Hand",
    title: "Rainures qui guident",
    description: "La main de l'enfant suit le bon tracé à chaque lettre.",
  },
  {
    icon: "Smile",
    title: "Zéro découragement",
    description: "Il recommence autant de fois qu'il le souhaite, sans erreur qui reste.",
  },
] as const;

// -- Ce que l'enfant apprend (icônes lucide-react) --------------------------
export const skills = [
  {
    icon: "PenLine",
    title: "Écriture des lettres",
    description: "Majuscules et minuscules tracées dans le bon sens, guidées par les rainures 3D.",
  },
  {
    icon: "Hash",
    title: "Les chiffres",
    description: "Reconnaître et écrire les chiffres de 1 à 10 sans hésitation.",
  },
  {
    icon: "Fingerprint",
    title: "Motricité fine",
    description: "Une meilleure tenue du stylo et un geste plus sûr, séance après séance.",
  },
  {
    icon: "Calculator",
    title: "Calcul",
    description: "Premiers exercices d'addition et de soustraction, pas à pas.",
  },
  {
    icon: "Palette",
    title: "Dessin",
    description: "Formes, courbes et traçés libres pour développer la créativité.",
  },
  {
    icon: "Focus",
    title: "Concentration",
    description: "Une activité captivante qui apprend à rester concentré sur une tâche.",
  },
] as const;

// -- Comparatif cahier classique vs Petits Savants --------------------------
export const comparisonRows = [
  { classic: "Jetable après quelques utilisations", savants: "Réutilisable à l'infini, encre effaçable" },
  { classic: "L'enfant se décourage vite, sans repère", savants: "Guidé par les rainures 3D, en confiance" },
  { classic: "Remplacé par un écran faute de mieux", savants: "Zéro écran, 100% activité manuelle" },
  { classic: "Coût qui s'accumule cahier après cahier", savants: "Un seul achat, utilisé pendant des années" },
  { classic: "Souvent en anglais", savants: "100% en français" },
] as const;

// -- Pour qui ? (icônes lucide-react) ---------------------------------------
export const audiences = [
  {
    icon: "Gift",
    title: "Parents",
    description: "Un cadeau utile qui dure, loin des jouets oubliés au bout d'une semaine.",
  },
  {
    icon: "HeartHandshake",
    title: "Grands-parents",
    description: "Le plaisir d'offrir un moment complice et éducatif à ses petits-enfants.",
  },
  {
    icon: "GraduationCap",
    title: "Enseignants",
    description: "Un vrai soutien scolaire à recommander aux familles pour consolider les acquis à la maison.",
  },
] as const;

// -- Garantie / réassurance (icônes lucide-react) ---------------------------
export const guarantees = [
  {
    icon: "ShieldCheck",
    title: "Satisfait ou remboursé",
    description: "7 jours pour changer d'avis, sans question posée.",
  },
  {
    icon: "Wallet",
    title: "Paiement à la livraison",
    description: "Vous payez seulement à réception du colis, en main propre.",
  },
  {
    icon: "Truck",
    title: "Livraison rapide au Bénin",
    description: "Expédition rapide partout dans le pays, jusqu'à votre porte.",
  },
] as const;

// -- Avis clients (preuve sociale) ----------------------------------------------
// [PLACEHOLDER] Ces avis sont des exemples de mise en page. Remplace-les par
// de vrais avis (avec accord des parents) dès que possible.
export type Testimonial = {
  name: string;
  location: string;
  rating: 1 | 2 | 3 | 4 | 5;
  quote: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "[PLACEHOLDER] Prénom N.",
    location: "Cotonou",
    rating: 5,
    quote:
      "[PLACEHOLDER] Exemple d'avis — à remplacer par un vrai témoignage client une fois les premières commandes livrées.",
  },
  {
    name: "[PLACEHOLDER] Prénom N.",
    location: "Porto-Novo",
    rating: 5,
    quote:
      "[PLACEHOLDER] Exemple d'avis — à remplacer par un vrai témoignage client une fois les premières commandes livrées.",
  },
  {
    name: "[PLACEHOLDER] Prénom N.",
    location: "Abomey-Calavi",
    rating: 5,
    quote:
      "[PLACEHOLDER] Exemple d'avis — à remplacer par un vrai témoignage client une fois les premières commandes livrées.",
  },
];

// -- FAQ --------------------------------------------------------------------
export const faq = [
  {
    question: "À quoi sert le kit de cahiers d'activités Petits Savants ?",
    answer:
      "Le kit de cahiers magiques Petits Savants est spécialement conçu pour aider les enfants de 3 à 8 ans à développer leur motricité fine, à apprendre à écrire correctement et à maîtriser les chiffres et les bases du calcul. Grâce à son système éducatif ludique et interactif, le kit guide le mouvement de la main de votre enfant de manière naturelle, tout en captivant son attention pour l'éloigner durablement des écrans.",
  },
  {
    question: "Comment fonctionne l'encre magique qui s'efface toute seule ?",
    answer:
      "C'est là que réside toute la magie ! Les cahiers s'utilisent uniquement avec notre stylo à encre spéciale fourni dans le kit. Lorsque votre enfant écrit, l'encre est bien visible. Puis, au bout de 5 à 10 minutes, l'encre s'évapore et disparaît complètement et automatiquement de la page. Pas besoin de chiffon, d'éponge ni d'eau ! Le cahier redevient totalement vierge et prêt pour une nouvelle séance d'entraînement à l'infini.",
  },
  {
    question: "Qu'est-ce que le système de traçage à rainures 3D ?",
    answer:
      "Contrairement aux cahiers classiques en papier plat, les cahiers Petits Savants possèdent des rainures tridimensionnelles creusées dans le papier épais. Ces rainures guident automatiquement la pointe du stylo de l'enfant. Cela lui permet d'apprendre le bon geste d'écriture (les courbes, les lettres, les chiffres) sans dévier, ce qui développe rapidement sa mémoire musculaire et sa confiance en lui.",
  },
  {
    question: "Le kit est-il rédigé en français ?",
    answer:
      "Oui, absolument ! Contrairement à la majorité des cahiers d'écriture magiques disponibles sur le marché qui sont en anglais, le kit Petits Savants est intégralement conçu en français (alphabet français, chiffres et consignes de jeux éducatifs). Il est donc parfaitement adapté au programme scolaire et au système éducatif de nos enfants.",
  },
  {
    question: "À quel âge puis-je présenter ce kit à mon enfant ?",
    answer:
      "Le kit Petits Savants accompagne les enfants de 3 à 8 ans, et évolue à leur rythme : de 3 à 4 ans pour l'initiation au dessin, de 4 à 6 ans pour l'apprentissage des lettres et des chiffres, et de 6 à 8 ans pour la consolidation de la calligraphie et du calcul.",
  },
  {
    question: "Le cahier d'exercices est-il réutilisable pour plusieurs enfants ?",
    answer:
      "Oui, c'est l'un de ses plus grands avantages économiques ! Puisque l'encre disparaît d'elle-même sans laisser de traces et sans abîmer les pages, un seul kit peut être partagé et réutilisé à l'infini par tous les frères et sœurs de la famille pendant plusieurs années. C'est un investissement unique très rentable pour les parents.",
  },
  {
    question: "De quels matériaux sont faits les cahiers ?",
    answer:
      "Les cahiers Petits Savants sont fabriqués à partir de carton de très haute qualité, épais et robuste. Les pages sont conçues pour résister aux manipulations quotidiennes des plus jeunes enfants sans se froisser, se déchirer ou se corner.",
  },
  {
    question: "Que faire si l'enfant perd le stylo ou si les encres sont épuisées ?",
    answer:
      "Pas d'inquiétude ! Chaque kit de base est livré très généreusement avec un étui comprenant 1 stylo, un adaptateur ergonomique en silicone et 10 recharges d'encre magique. Une seule recharge permet de remplir plusieurs dizaines de pages. De plus, nous proposons des packs de stylos et de recharges supplémentaires à l'achat sur notre boutique.",
  },
  {
    question: "Comment se passe la livraison et le paiement au Bénin ?",
    answer:
      "Nous livrons partout au Bénin. Vous n'avez rien à payer d'avance : commandez en quelques clics et payez à la réception de votre colis, en espèces ou par Mobile Money (MTN MoMo / Moov Money), directement au livreur.",
  },
];
