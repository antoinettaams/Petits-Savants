import { Calculator, Focus, Fingerprint, Hash, Palette, PenLine } from "lucide-react";
import { skills } from "@/lib/site-config";
import Reveal from "./Reveal";

const icons = { PenLine, Hash, Fingerprint, Calculator, Palette, Focus } as const;

export default function SkillsGrid() {
  return (
    <section className="bg-bg py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-wide text-accent">
            Apprentissages
          </p>
          <h2 className="mt-2 font-display text-2xl font-semibold text-ink md:text-3xl">
            Ce que votre enfant apprend
          </h2>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, i) => {
            const Icon = icons[skill.icon as keyof typeof icons];
            return (
              <Reveal key={skill.title} delay={(i % 3) * 80}>
                <div className="flex h-full flex-col items-start rounded-[24px] border border-surface-line bg-surface p-6">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary-tint text-primary">
                    <Icon size={20} strokeWidth={1.7} />
                  </span>
                  <h3 className="mt-4 font-display text-base font-semibold text-ink">
                    {skill.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {skill.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
