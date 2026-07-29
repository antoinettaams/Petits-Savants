// Suivi Meta Pixel — helpers partagés.
//
// [À FAIRE] Renseigne ton ID de Pixel "Petits Savants" ci-dessous, OU
// définis la variable d'environnement NEXT_PUBLIC_FB_PIXEL_ID (recommandé,
// notamment sur Vercel : Settings → Environment Variables).
// Tant que l'ID vaut le placeholder, aucun script Pixel n'est chargé.
const PLACEHOLDER = "REMPLACER_PAR_TON_ID_PIXEL";

// ID du Pixel "Petits Savants" (compte AZ boutique).
export const FB_PIXEL_ID = process.env.NEXT_PUBLIC_FB_PIXEL_ID || "1389260216451051";

// Vrai uniquement quand un ID de Pixel réel est configuré.
export const isPixelEnabled = FB_PIXEL_ID !== PLACEHOLDER && FB_PIXEL_ID.length > 0;

type Fbq = (...args: unknown[]) => void;

function getFbq(): Fbq | undefined {
  if (typeof window === "undefined") return undefined;
  return (window as unknown as { fbq?: Fbq }).fbq;
}

// Événement standard Meta (PageView est déjà envoyé au chargement).
export function track(eventName: string, params: Record<string, unknown> = {}) {
  const fbq = getFbq();
  if (fbq) fbq("track", eventName, params);
}
