import { Check, X } from "lucide-react";
import { comparisonRows } from "@/lib/site-config";
import Reveal from "./Reveal";

export default function Comparison() {
  return (
    <section className="bg-surface py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-wide text-accent">
            La différence
          </p>
          <h2 className="mt-2 font-display text-2xl font-semibold text-ink md:text-3xl">
            Cahier classique ou Petits Savants ?
          </h2>
        </div>

        <Reveal>
          <div className="mt-10 overflow-hidden rounded-[24px] border border-surface-line">
            <div className="grid grid-cols-2">
              <div className="bg-bg px-4 py-4 text-center font-display text-sm font-semibold text-muted md:px-6 md:text-base">
                Cahier classique
              </div>
              <div className="bg-ink px-4 py-4 text-center font-display text-sm font-semibold text-cream md:px-6 md:text-base">
                Petits Savants
              </div>
            </div>

            {comparisonRows.map((row, i) => (
              <div
                key={row.classic}
                className={`grid grid-cols-2 ${i % 2 === 1 ? "bg-bg/60" : "bg-surface"}`}
              >
                <div className="flex items-start gap-2.5 border-t border-surface-line px-4 py-4 md:px-6">
                  <X size={16} strokeWidth={2.2} className="mt-0.5 shrink-0 text-muted/70" />
                  <span className="text-sm leading-snug text-muted">{row.classic}</span>
                </div>
                <div className="flex items-start gap-2.5 border-t border-surface-line bg-accent-tint/30 px-4 py-4 md:px-6">
                  <Check size={16} strokeWidth={2.4} className="mt-0.5 shrink-0 text-accent-dark" />
                  <span className="text-sm font-medium leading-snug text-ink">
                    {row.savants}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
