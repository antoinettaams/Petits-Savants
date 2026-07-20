import { Backpack, RefreshCw, ShieldCheck, Truck } from "lucide-react";
import PlaceholderMedia from "./PlaceholderMedia";
import CommanderButton from "./CommanderButton";
import Reveal from "./Reveal";
import { backToSchool } from "@/lib/site-config";

const microReassurance = [
  { icon: Truck, label: "Livraison au Bénin" },
  { icon: ShieldCheck, label: "Paiement à la livraison" },
  { icon: RefreshCw, label: "Réutilisable à vie" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink text-cream">
      <div className="blob-field" aria-hidden="true" />

      <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-12 md:grid-cols-2 md:items-center md:gap-12 md:px-6 md:py-20">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-cream/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wide text-cream/90">
            <Backpack size={15} strokeWidth={1.8} />
            Spécial rentrée du {backToSchool.date}
          </span>

          <h1 className="mt-5 font-display text-3xl font-semibold leading-[1.08] sm:text-4xl md:text-5xl">
            Le cahier magique qui aide votre enfant à{" "}
            <span className="text-[#f0917d]">bien écrire</span>
          </h1>

          <p className="mt-4 max-w-md text-base leading-relaxed text-cream/75 md:text-lg">
            100&nbsp;% en français, dès 3&nbsp;ans. L&apos;encre disparaît
            toute seule&nbsp;: votre enfant s&apos;entraîne à l&apos;infini,
            sans gaspiller un seul cahier papier.
          </p>

          {/* Vidéo de démo — visible dès le hero, mobile compris */}
          <div className="mt-7 md:hidden">
            {/* [PLACEHOLDER] Remplacer par une vraie courte vidéo produit en boucle (packshot + démo d'écriture) */}
            <PlaceholderMedia
              kind="video"
              tone="dark"
              label="Vidéo héros : le kit en main, l'enfant qui écrit puis l'encre qui s'efface"
              className="aspect-video w-full"
            />
          </div>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <CommanderButton>Commander maintenant</CommanderButton>
            <a
              href="#demo"
              className="rounded-full border-2 border-cream/30 px-6 py-3.5 text-center font-display text-base font-semibold text-cream transition hover:bg-cream/10 focus:outline-none focus-visible:ring-4 focus-visible:ring-cream/40"
            >
              Voir la démo
            </a>
          </div>

          <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2">
            {microReassurance.map(({ icon: Icon, label }) => (
              <span key={label} className="flex items-center gap-1.5 text-xs text-cream/65">
                <Icon size={15} strokeWidth={1.8} />
                {label}
              </span>
            ))}
          </div>
        </div>

        <Reveal className="hidden md:block">
          {/* [PLACEHOLDER] Remplacer par une vraie courte vidéo produit en boucle (packshot + démo d'écriture) */}
          <PlaceholderMedia
            kind="video"
            tone="dark"
            label="Vidéo héros : le kit en main, l'enfant qui écrit puis l'encre qui s'efface"
            className="aspect-[4/5] w-full"
          />
        </Reveal>
      </div>
    </section>
  );
}
