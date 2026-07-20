import { ImageIcon, PlayCircle } from "lucide-react";

// Bloc visuel générique utilisé partout où une vraie photo/vidéo produit
// doit être insérée plus tard. Bien visible en dev, à remplacer par de vrais
// médias (next/image, <video>) avant la mise en ligne.
type PlaceholderMediaProps = {
  label: string;
  kind?: "image" | "video";
  className?: string;
  tone?: "light" | "dark";
};

export default function PlaceholderMedia({
  label,
  kind = "image",
  className = "",
  tone = "light",
}: PlaceholderMediaProps) {
  const Icon = kind === "video" ? PlayCircle : ImageIcon;
  const toneClasses =
    tone === "dark"
      ? "border-cream/25 bg-ink-soft text-cream/70"
      : "border-primary/30 bg-primary-tint text-primary";

  return (
    <div
      className={`flex flex-col items-center justify-center gap-3 rounded-[28px] border-2 border-dashed p-6 text-center ${toneClasses} ${className}`}
    >
      <Icon size={40} strokeWidth={1.3} className="opacity-80" />
      <p className="text-[11px] font-semibold uppercase tracking-wide opacity-70">
        {kind === "video" ? "Emplacement vidéo" : "Emplacement photo"}
      </p>
      <p className="max-w-[32ch] text-sm opacity-90">{label}</p>
    </div>
  );
}
