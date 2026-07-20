import {
  packs,
  packSubtitle,
  computeTotal,
  computeCompareAtTotal,
  discountPercent,
  formatPrice,
} from "@/lib/site-config";
import CommanderButton from "./CommanderButton";
import Reveal from "./Reveal";

export default function Offers() {
  return (
    <section id="offres" className="bg-surface py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-wide text-accent">
            Offres de lancement
          </p>
          <h2 className="mt-2 font-display text-2xl font-semibold text-ink md:text-3xl">
            Choisissez votre pack Petits Savants
          </h2>
          {/* [PLACEHOLDER] Prix indicatifs à confirmer avant mise en ligne définitive */}
          <p className="mt-2 text-sm text-muted">
            Prix en Francs CFA — le prix par kit baisse automatiquement
            quand vous en prenez plusieurs.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {packs.map((pack, i) => {
            const total = computeTotal(pack.kits);
            const compareAt = computeCompareAtTotal(pack.kits);
            return (
              <Reveal key={pack.id} delay={i * 90}>
                <div
                  className={`flex h-full flex-col rounded-[24px] border-2 p-6 ${
                    pack.highlight
                      ? "border-accent bg-accent-tint/40"
                      : "border-surface-line bg-bg"
                  }`}
                >
                  {pack.badge ? (
                    <span className="mb-3 inline-block w-fit rounded-full bg-accent px-3 py-1 text-xs font-semibold text-cream">
                      {pack.badge}
                    </span>
                  ) : (
                    <span className="mb-3 h-[26px]" aria-hidden="true" />
                  )}
                  <h3 className="font-display text-lg font-semibold text-ink">
                    {pack.title}
                  </h3>
                  <p className="text-sm text-muted">{packSubtitle(pack.kits)}</p>

                  <div className="mt-5 flex items-baseline gap-2">
                    <span className="font-display text-2xl font-semibold text-ink">
                      {formatPrice(total)}
                    </span>
                    <span className="text-sm text-muted line-through">
                      {formatPrice(compareAt)}
                    </span>
                  </div>
                  <span className="mt-1 text-xs font-semibold text-primary">
                    Économisez {discountPercent(pack.kits)} %
                  </span>

                  <CommanderButton packId={pack.id} className="mt-6 w-full">
                    Commander ce pack
                  </CommanderButton>
                </div>
              </Reveal>
            );
          })}
        </div>

        <p className="mt-6 text-center text-sm text-muted">
          Besoin de plus de 3 kits&nbsp;? Choisissez la quantité exacte dans
          la fenêtre de commande.
        </p>
      </div>
    </section>
  );
}
