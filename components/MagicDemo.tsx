import { Hand, RefreshCw, Smile } from "lucide-react";
import VideoPlayer from "./VideoPlayer";
import Reveal from "./Reveal";
import CommanderButton from "./CommanderButton";
import { videoDemoBenefits } from "@/lib/site-config";

const icons = { RefreshCw, Hand, Smile } as const;

// Contenu qui vend le plus : une démo plein cadre de l'encre qui disparaît,
// avec un vrai lecteur vidéo (chargé au clic seulement) et les 3 bénéfices
// clés juste à côté.
export default function MagicDemo() {
  return (
    <section id="demo" className="relative overflow-hidden bg-ink py-16 text-cream md:py-24">
      <div className="blob-field" aria-hidden="true" />
      <div className="relative mx-auto max-w-6xl px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-wide text-[#f0917d]">
            La magie en action
          </p>
          <h2 className="mt-2 font-display text-2xl font-semibold md:text-3xl">
            L&apos;encre disparaît toute seule, sous vos yeux
          </h2>
          <p className="mt-3 leading-relaxed text-cream/75">
            Votre enfant écrit, l&apos;encre est bien visible… puis
            s&apos;évapore automatiquement en 5 à 10 minutes. Pas d&apos;eau,
            pas de chiffon, juste de la magie.
          </p>
        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-[3fr_2fr] md:items-center md:gap-12">
          <Reveal>
            <VideoPlayer
              label="L'enfant trace une lettre, puis l'encre s'efface toute seule"
              className="aspect-video w-full"
            />
          </Reveal>

          <Reveal delay={120}>
            <div className="space-y-6">
              {videoDemoBenefits.map((benefit) => {
                const Icon = icons[benefit.icon as keyof typeof icons];
                return (
                  <div key={benefit.title} className="flex items-start gap-3.5">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-cream/10 text-[#f0917d]">
                      <Icon size={20} strokeWidth={1.7} />
                    </span>
                    <div>
                      <p className="font-display text-base font-semibold">
                        {benefit.title}
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-cream/70">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                );
              })}

              <CommanderButton variant="outline-light" className="mt-2 w-full sm:w-auto">
                Commander maintenant
              </CommanderButton>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
