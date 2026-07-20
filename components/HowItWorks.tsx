import Image from "next/image";
import { BookOpen, Calculator, Hand, PenLine, RefreshCw, Sparkles } from "lucide-react";
import { ageStages, kitContents } from "@/lib/site-config";
import Reveal from "./Reveal";

const ageIcons = { Sparkles, PenLine, Calculator } as const;
const kitIcons = { BookOpen, PenLine, Hand, RefreshCw } as const;

export default function HowItWorks() {
  return (
    <section id="comment-ca-marche" className="bg-bg py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-wide text-accent">
            Comment ça marche
          </p>
          <h2 className="mt-2 font-display text-2xl font-semibold text-ink md:text-3xl">
            Un kit qui évolue avec votre enfant
          </h2>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {ageStages.map((stage, i) => {
            const Icon = ageIcons[stage.icon as keyof typeof ageIcons];
            return (
              <Reveal key={stage.range} delay={i * 90}>
                <div className="h-full rounded-[24px] border border-surface-line bg-surface p-6">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary-tint text-primary">
                    <Icon size={20} strokeWidth={1.7} />
                  </span>
                  <span className="mt-4 inline-block rounded-full bg-accent px-3 py-1 text-xs font-semibold text-cream">
                    {stage.range}
                  </span>
                  <h3 className="mt-3 font-display text-lg font-semibold text-ink">
                    {stage.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {stage.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Contenu du kit — mise en valeur façon packshot annoté */}
        <div className="mt-14 grid gap-8 rounded-[28px] bg-ink p-6 text-cream md:grid-cols-2 md:p-10">
          <div className="md:h-full">
            {/* Mobile : cadrage carré */}
            <div className="relative aspect-square w-full overflow-hidden rounded-[28px] md:hidden">
              <Image
                src="/images/image-pack.png"
                alt="Kit complet Petits Savants : 4 cahiers d'écriture magiques, stylo et recharges"
                fill
                sizes="100vw"
                className="object-cover"
              />
            </div>
            {/* Desktop : cadrage paysage, remplit la hauteur de la colonne */}
            <div className="relative hidden overflow-hidden rounded-[28px] md:block md:h-full">
              <Image
                src="/images/image-pack-desktop.png"
                alt="Kit complet Petits Savants : 4 cahiers d'écriture magiques, stylo et recharges"
                fill
                sizes="50vw"
                className="object-cover"
              />
            </div>
          </div>
          <div>
            <h3 className="font-display text-xl font-semibold md:text-2xl">
              Ce que contient chaque kit Petits Savants
            </h3>
            <ul className="mt-6 space-y-4">
              {kitContents.map((item) => {
                const Icon = kitIcons[item.icon as keyof typeof kitIcons];
                return (
                  <li key={item.label} className="flex items-start gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-cream/10 text-[#f0917d]">
                      <Icon size={16} strokeWidth={1.8} />
                    </span>
                    <div>
                      <p className="font-semibold text-cream">{item.label}</p>
                      <p className="text-sm text-cream/65">{item.detail}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
