import { keyStats } from "@/lib/site-config";
import Counter from "./Counter";
import Reveal from "./Reveal";

export default function KeyStats() {
  return (
    <section className="relative overflow-hidden bg-ink py-14 text-cream md:py-18">
      <div className="blob-field" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-6xl grid-cols-2 gap-8 px-4 md:grid-cols-4 md:px-6">
        {keyStats.map((stat, i) => (
          <Reveal key={stat.label} delay={i * 90} className="text-center md:text-left">
            <Counter
              value={stat.value}
              prefix={stat.prefix}
              suffix={stat.suffix}
              className="font-display text-3xl font-semibold text-[#f0917d] md:text-4xl"
            />
            <p className="mt-1.5 text-xs leading-snug text-cream/70 md:text-sm">
              {stat.label}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
