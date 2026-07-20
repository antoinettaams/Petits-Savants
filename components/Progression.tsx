import { ArrowRight } from "lucide-react";
import PlaceholderMedia from "./PlaceholderMedia";
import Reveal from "./Reveal";
import { progression } from "@/lib/site-config";

export default function Progression() {
  return (
    <section className="bg-surface py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-wide text-accent">
            Une vraie progression
          </p>
          <h2 className="mt-2 font-display text-2xl font-semibold text-ink md:text-3xl">
            Avant / après quelques semaines
          </h2>
          <p className="mt-3 leading-relaxed text-muted">{progression.intro}</p>
        </div>

        <Reveal>
          <div className="mt-10 grid items-center gap-4 sm:grid-cols-[1fr_auto_1fr]">
            <div>
              {/* [PLACEHOLDER] Remplacer par une vraie photo d'un cahier d'enfant en tout début d'utilisation */}
              <PlaceholderMedia
                kind="image"
                label="Écriture avant : lettres mal formées, geste hésitant"
                className="aspect-[4/3] w-full"
              />
              <p className="mt-3 text-center text-sm font-semibold text-ink">
                {progression.before.label}
              </p>
              <p className="text-center text-xs text-muted">
                {progression.before.caption}
              </p>
            </div>

            <span
              className="mx-auto hidden h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent-tint text-accent-dark sm:flex"
              aria-hidden="true"
            >
              <ArrowRight size={18} strokeWidth={1.8} />
            </span>

            <div>
              {/* [PLACEHOLDER] Remplacer par une vraie photo du même cahier après quelques semaines d'usage */}
              <PlaceholderMedia
                kind="image"
                tone="dark"
                label="Écriture après : lettres bien formées, geste assuré"
                className="aspect-[4/3] w-full"
              />
              <p className="mt-3 text-center text-sm font-semibold text-ink">
                {progression.after.label}
              </p>
              <p className="text-center text-xs text-muted">
                {progression.after.caption}
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
