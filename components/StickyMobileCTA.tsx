"use client";

import { useEffect, useState } from "react";
import { packs, computeTotal, formatPrice } from "@/lib/site-config";
import CommanderButton from "./CommanderButton";

// Barre de commande fixe en bas d'écran, uniquement sur mobile, qui
// n'apparaît qu'après que l'utilisateur a commencé à scroller (pour ne pas
// gêner la lecture du Hero).
export default function StickyMobileCTA() {
  const [visible, setVisible] = useState(false);
  const cheapestPack = packs[0];

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 480);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 flex items-center justify-between gap-3 border-t border-surface-line bg-surface px-4 py-3 shadow-[0_-4px_16px_rgba(22,32,42,0.08)] transition-transform duration-300 md:hidden ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="leading-tight">
        <p className="text-[11px] font-semibold uppercase tracking-wide text-muted">
          À partir de
        </p>
        <p className="font-display text-lg font-semibold text-ink">
          {formatPrice(computeTotal(cheapestPack.kits))}
        </p>
      </div>
      <CommanderButton size="sm" className="flex-1 text-center">
        Commander maintenant
      </CommanderButton>
    </div>
  );
}
