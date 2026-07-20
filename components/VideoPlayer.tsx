"use client";

import { useState } from "react";
import { PlayCircle } from "lucide-react";

type VideoPlayerProps = {
  label: string;
  className?: string;
  // [PLACEHOLDER] Renseigner `src` (fichier vidéo réel) et `poster` (image
  // d'aperçu) dès que le média produit est disponible. Tant que `src` est
  // vide, un emplacement clairement identifié est affiché à la place.
  src?: string;
  poster?: string;
};

// Lecteur vidéo léger : la vidéo n'est chargée qu'au clic sur le bouton
// play (`preload="none"`), jamais en amont. Pas de lecture automatique,
// pas de JS lourd — pertinent pour un chargement rapide en 3G/4G.
export default function VideoPlayer({ label, className = "", src, poster }: VideoPlayerProps) {
  const [playing, setPlaying] = useState(false);

  if (!src) {
    return (
      <div
        className={`relative flex flex-col items-center justify-center gap-3 rounded-[28px] border-2 border-dashed border-cream/25 bg-ink-soft p-6 text-center text-cream/70 ${className}`}
      >
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-cream/10">
          <PlayCircle size={34} strokeWidth={1.3} aria-hidden="true" />
        </span>
        <p className="text-[11px] font-semibold uppercase tracking-wide opacity-70">
          Emplacement vidéo
        </p>
        <p className="max-w-[34ch] text-sm opacity-90">{label}</p>
      </div>
    );
  }

  if (playing) {
    return (
      <video
        className={`rounded-[28px] bg-black ${className}`}
        src={src}
        poster={poster}
        controls
        autoPlay
        playsInline
        preload="none"
      />
    );
  }

  return (
    <button
      type="button"
      onClick={() => setPlaying(true)}
      aria-label={`Lancer la vidéo : ${label}`}
      className={`group relative flex items-center justify-center overflow-hidden rounded-[28px] bg-ink-soft focus:outline-none focus-visible:ring-4 focus-visible:ring-accent/50 ${className}`}
      style={poster ? { backgroundImage: `url(${poster})`, backgroundSize: "cover", backgroundPosition: "center" } : undefined}
    >
      <span className="absolute inset-0 bg-ink/25 transition group-hover:bg-ink/35" aria-hidden="true" />
      <span className="relative flex h-20 w-20 items-center justify-center rounded-full bg-cream text-accent shadow-lg transition group-hover:scale-105">
        <PlayCircle size={40} strokeWidth={1.4} aria-hidden="true" />
      </span>
    </button>
  );
}
