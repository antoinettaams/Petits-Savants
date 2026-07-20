import { Backpack, Clock3 } from "lucide-react";
import CommanderButton from "./CommanderButton";
import Reveal from "./Reveal";
import { backToSchool } from "@/lib/site-config";

export default function BackToSchoolOffer() {
  return (
    <section className="bg-bg py-14 md:py-16">
      <div className="mx-auto max-w-4xl px-4 md:px-6">
        <Reveal>
          <div className="flex flex-col items-center gap-5 rounded-[28px] border-2 border-accent/25 bg-accent-tint/40 p-7 text-center md:flex-row md:items-center md:justify-between md:p-9 md:text-left">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-accent px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wide text-cream">
                <Backpack size={15} strokeWidth={1.8} />
                Offre spéciale rentrée
              </span>
              <h2 className="mt-3 font-display text-xl font-semibold text-ink md:text-2xl">
                Rentrée le {backToSchool.date}
              </h2>
              <p className="mt-2 flex items-center justify-center gap-2 text-sm text-muted md:justify-start">
                <Clock3 size={15} strokeWidth={1.8} className="shrink-0 text-accent-dark" />
                {backToSchool.stockNote}
              </p>
            </div>
            <CommanderButton className="w-full shrink-0 md:w-auto">
              Réserver mon kit
            </CommanderButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
