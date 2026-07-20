import { Gift, GraduationCap, HeartHandshake } from "lucide-react";
import { audiences } from "@/lib/site-config";
import Reveal from "./Reveal";

const icons = { Gift, HeartHandshake, GraduationCap } as const;

export default function Audiences() {
  return (
    <section className="bg-bg py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-wide text-accent">
            Pour qui ?
          </p>
          <h2 className="mt-2 font-display text-2xl font-semibold text-ink md:text-3xl">
            Un kit qui parle à toute la famille
          </h2>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {audiences.map((audience, i) => {
            const Icon = icons[audience.icon as keyof typeof icons];
            return (
              <Reveal key={audience.title} delay={i * 90}>
                <div className="h-full rounded-[24px] border border-surface-line bg-surface p-7 text-center">
                  <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-accent-tint text-accent-dark">
                    <Icon size={26} strokeWidth={1.6} />
                  </span>
                  <h3 className="mt-4 font-display text-lg font-semibold text-ink">
                    {audience.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {audience.description}
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
