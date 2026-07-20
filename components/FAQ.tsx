"use client";

import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import { faq } from "@/lib/site-config";
import Reveal from "./Reveal";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-surface py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-4 md:px-6">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-wide text-accent">
            Questions fréquentes
          </p>
          <h2 className="mt-2 font-display text-2xl font-semibold text-ink md:text-3xl">
            Tout ce que les parents veulent savoir
          </h2>
        </div>

        <div className="mt-8 space-y-3">
          {faq.map((item, index) => {
            const open = openIndex === index;
            return (
              <Reveal key={item.question} delay={Math.min(index, 5) * 40}>
                <div className="overflow-hidden rounded-2xl border border-surface-line bg-bg">
                  <button
                    type="button"
                    onClick={() => setOpenIndex(open ? null : index)}
                    aria-expanded={open}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 focus-visible:ring-inset"
                  >
                    <span className="font-display text-sm font-semibold text-ink md:text-base">
                      {item.question}
                    </span>
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent-tint text-accent-dark">
                      {open ? (
                        <Minus size={14} strokeWidth={2} />
                      ) : (
                        <Plus size={14} strokeWidth={2} />
                      )}
                    </span>
                  </button>
                  {open && (
                    <div className="px-5 pb-5 text-sm leading-relaxed text-muted">
                      {item.answer}
                    </div>
                  )}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
