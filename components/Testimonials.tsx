import { Quote, Star } from "lucide-react";
import { testimonials } from "@/lib/site-config";
import Reveal from "./Reveal";

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} sur 5 étoiles`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={15}
          strokeWidth={1.5}
          className={i < rating ? "fill-accent text-accent" : "text-surface-line"}
        />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="bg-bg py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-wide text-accent">
            Ils nous font confiance
          </p>
          <h2 className="mt-2 font-display text-2xl font-semibold text-ink md:text-3xl">
            Ce que disent les parents
          </h2>
          {/* [PLACEHOLDER] Section prête à recevoir de vrais avis clients
              (texte, note, ville). Remplacer lib/site-config.ts > testimonials
              dès que les premiers retours arrivent. */}
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={i} delay={i * 90}>
              <div className="flex h-full flex-col gap-3 rounded-[24px] border border-surface-line bg-surface p-6">
                <Quote size={22} strokeWidth={1.6} className="text-primary/40" />
                <Stars rating={t.rating} />
                <p className="text-sm leading-relaxed text-ink">{t.quote}</p>
                <div className="mt-auto pt-2">
                  <p className="text-sm font-semibold text-ink">{t.name}</p>
                  <p className="text-xs text-muted">{t.location}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
