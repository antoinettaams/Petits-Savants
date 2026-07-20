import { Sparkles, X } from "lucide-react";
import Reveal from "./Reveal";

const problems = [
  "Des cahiers d'écriture classiques utilisés une seule fois, puis jetés",
  "Un enfant qui se décourage vite face à une feuille blanche sans repère",
  "Des heures passées devant les écrans faute d'activité captivante",
  "Une écriture peu appliquée par manque d'entraînement régulier",
];

export default function ProblemSolution() {
  return (
    <section className="bg-bg py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="grid gap-10 md:grid-cols-2 md:gap-16">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-wide text-accent">
              Le problème
            </p>
            <h2 className="mt-2 font-display text-2xl font-semibold text-ink md:text-3xl">
              Apprendre à écrire coûte cher… et décourage vite
            </h2>
            <ul className="mt-7 space-y-4">
              {problems.map((item) => (
                <li key={item} className="flex items-start gap-3 text-muted">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent-tint text-accent-dark">
                    <X size={13} strokeWidth={2.4} />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={120}>
            <div className="rounded-[28px] bg-ink p-7 text-cream md:p-9">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-cream/10 text-[#f0917d]">
                <Sparkles size={18} strokeWidth={1.8} />
              </span>
              <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-cream/60">
                La solution Petits Savants
              </p>
              <h2 className="mt-2 font-display text-2xl font-semibold md:text-3xl">
                Un seul kit, réutilisé à l&apos;infini
              </h2>
              <p className="mt-4 leading-relaxed text-cream/75">
                Grâce aux rainures 3D qui guident la main et à l&apos;encre
                magique qui s&apos;efface toute seule, votre enfant
                s&apos;entraîne autant de fois qu&apos;il le souhaite, sur le
                même cahier, sans jamais gaspiller de papier. Résultat :
                une meilleure écriture, plus de confiance, et un vrai moment
                de complicité loin des écrans.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
