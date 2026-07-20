import { HandHelping, Infinity, Leaf, MonitorOff } from "lucide-react";
import { benefits } from "@/lib/site-config";
import Reveal from "./Reveal";

const icons = { Infinity, HandHelping, Leaf, MonitorOff } as const;

export default function Benefits() {
  return (
    <section id="benefices" className="bg-surface py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-wide text-accent">
            Pourquoi les parents adorent
          </p>
          <h2 className="mt-2 font-display text-2xl font-semibold text-ink md:text-3xl">
            4 bonnes raisons de craquer pour Petits Savants
          </h2>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, i) => {
            const Icon = icons[benefit.icon as keyof typeof icons];
            return (
              <Reveal key={benefit.title} delay={i * 80}>
                <div className="flex h-full flex-col items-start rounded-[24px] border border-surface-line bg-bg p-6 shadow-[0_1px_2px_rgba(22,32,42,0.04)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_30px_-16px_rgba(22,32,42,0.25)]">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-accent-tint text-accent-dark">
                    <Icon size={22} strokeWidth={1.7} />
                  </span>
                  <h3 className="mt-4 font-display text-base font-semibold text-ink">
                    {benefit.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {benefit.description}
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
