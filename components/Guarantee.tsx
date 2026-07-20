import { ShieldCheck, Truck, Wallet } from "lucide-react";
import { guarantees } from "@/lib/site-config";
import Reveal from "./Reveal";

const icons = { ShieldCheck, Wallet, Truck } as const;

export default function Guarantee() {
  return (
    <section className="bg-surface py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-wide text-accent">
            En toute confiance
          </p>
          <h2 className="mt-2 font-display text-2xl font-semibold text-ink md:text-3xl">
            Commandez l&apos;esprit tranquille
          </h2>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {guarantees.map((item, i) => {
            const Icon = icons[item.icon as keyof typeof icons];
            return (
              <Reveal key={item.title} delay={i * 90}>
                <div className="flex h-full items-start gap-4 rounded-[24px] border border-surface-line bg-bg p-6">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary-tint text-primary">
                    <Icon size={22} strokeWidth={1.7} />
                  </span>
                  <div>
                    <h3 className="font-display text-base font-semibold text-ink">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
