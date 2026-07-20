"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Mail, MessageCircle, Minus, Plus, ShieldCheck, X } from "lucide-react";
import {
  brand,
  packs,
  packSubtitle,
  computeTotal,
  computeCompareAtTotal,
  pricePerKitFor,
  formatPrice,
  MAX_KITS_IN_MODAL,
} from "@/lib/site-config";
import { useOrderModal } from "./OrderModalContext";

export default function OrderModal() {
  const { isOpen, initialPackId, closeModal } = useOrderModal();

  const [kits, setKits] = useState(1);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [city, setCity] = useState("");
  const [phone, setPhone] = useState("");

  const dialogRef = useRef<HTMLDivElement>(null);
  const firstFieldRef = useRef<HTMLInputElement>(null);

  // Ré-initialise la quantité sur le pack d'origine à chaque ouverture.
  // (ajustement d'état pendant le rendu plutôt que dans un effet, pour
  // éviter un rendu en cascade — cf. "You Might Not Need an Effect")
  const [wasOpen, setWasOpen] = useState(isOpen);
  if (isOpen !== wasOpen) {
    setWasOpen(isOpen);
    if (isOpen) {
      const matchedPack = packs.find((p) => p.id === initialPackId);
      const nextKits = matchedPack?.kits ?? packs.find((p) => p.highlight)?.kits ?? 1;
      if (nextKits !== kits) setKits(nextKits);
    }
  }

  // Verrouille le scroll du body et gère la touche Échap pendant que la
  // modale est ouverte.
  useEffect(() => {
    if (!isOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", onKeyDown);
    firstFieldRef.current?.focus();
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, closeModal]);

  const matchedPack = packs.find((p) => p.kits === kits);
  const total = useMemo(() => computeTotal(kits), [kits]);
  const compareAtTotal = useMemo(() => computeCompareAtTotal(kits), [kits]);
  const perKit = useMemo(() => pricePerKitFor(kits), [kits]);

  const message = useMemo(() => {
    const packLabel = matchedPack ? matchedPack.title : `${kits} kits personnalisés`;
    const lines = [
      `Bonjour ${brand.name} ! Je souhaite commander :`,
      `- Pack : ${packLabel} (${packSubtitle(kits)})`,
      `- Total : ${formatPrice(total)}`,
      `- Nom : ${lastName || "[à préciser]"}`,
      `- Prénom : ${firstName || "[à préciser]"}`,
      `- Ville : ${city || "[à préciser]"}`,
      `- Téléphone : ${phone || "[à préciser]"}`,
      "",
      "Merci de confirmer ma commande.",
    ];
    return lines.join("\n");
  }, [matchedPack, kits, total, lastName, firstName, city, phone]);

  const whatsappUrl = `https://wa.me/${brand.whatsappNumber}?text=${encodeURIComponent(message)}`;
  const mailtoUrl = `mailto:${brand.orderEmail}?subject=${encodeURIComponent(
    `Commande ${brand.name} — ${matchedPack ? matchedPack.title : `${kits} kits`}`
  )}&body=${encodeURIComponent(message)}`;

  if (!isOpen) return null;

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    window.location.href = whatsappUrl;
  }

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end justify-center bg-ink/60 backdrop-blur-sm sm:items-center sm:p-4"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) closeModal();
      }}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="order-modal-title"
        className="max-h-[92vh] w-full overflow-y-auto rounded-t-3xl bg-surface p-6 shadow-2xl sm:max-w-lg sm:rounded-3xl sm:p-8"
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-accent">
              Commande rapide
            </p>
            <h2
              id="order-modal-title"
              className="mt-1 font-display text-2xl font-semibold text-ink"
            >
              Finalisez votre commande
            </h2>
          </div>
          <button
            type="button"
            onClick={closeModal}
            aria-label="Fermer"
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-muted transition hover:bg-primary-tint hover:text-ink focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/50"
          >
            <X size={20} strokeWidth={1.8} />
          </button>
        </div>

        {/* Sélecteur de pack rapide */}
        <div className="mt-6 flex flex-wrap gap-2">
          {packs.map((pack) => {
            const active = pack.kits === kits;
            return (
              <button
                key={pack.id}
                type="button"
                onClick={() => setKits(pack.kits)}
                className={`rounded-full border px-4 py-2 text-sm font-semibold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 ${
                  active
                    ? "border-primary bg-primary text-cream"
                    : "border-surface-line text-ink hover:border-primary"
                }`}
              >
                {pack.title}
              </button>
            );
          })}
        </div>

        {/* Quantité + total en direct */}
        <div className="mt-5 flex items-center justify-between gap-4 rounded-2xl border border-surface-line bg-bg p-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-muted">
              Quantité de kits
            </p>
            <p className="mt-1 text-xs text-muted">
              {formatPrice(perKit)} / kit
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setKits((k) => Math.max(1, k - 1))}
              aria-label="Retirer un kit"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-surface-line text-ink transition hover:border-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 disabled:opacity-40"
              disabled={kits <= 1}
            >
              <Minus size={16} strokeWidth={2} />
            </button>
            <span className="w-6 text-center font-display text-lg font-semibold tabular-nums">
              {kits}
            </span>
            <button
              type="button"
              onClick={() => setKits((k) => Math.min(MAX_KITS_IN_MODAL, k + 1))}
              aria-label="Ajouter un kit"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-surface-line text-ink transition hover:border-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 disabled:opacity-40"
              disabled={kits >= MAX_KITS_IN_MODAL}
            >
              <Plus size={16} strokeWidth={2} />
            </button>
          </div>
        </div>

        <div className="mt-4 flex items-baseline justify-between rounded-2xl bg-ink px-5 py-4 text-cream">
          <div>
            <p className="text-xs uppercase tracking-wide text-cream/60">Total</p>
            <p className="font-display text-2xl font-semibold">{formatPrice(total)}</p>
          </div>
          <p className="text-xs text-cream/50 line-through">{formatPrice(compareAtTotal)}</p>
        </div>

        {/* Formulaire */}
        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label htmlFor="firstName" className="mb-1 block text-sm font-semibold text-ink">
                Prénom
              </label>
              <input
                ref={firstFieldRef}
                id="firstName"
                required
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="Aïcha"
                className="w-full rounded-xl border border-surface-line bg-bg px-4 py-3 text-ink placeholder:text-muted/70 focus:border-primary focus:outline-none"
              />
            </div>
            <div>
              <label htmlFor="lastName" className="mb-1 block text-sm font-semibold text-ink">
                Nom
              </label>
              <input
                id="lastName"
                required
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Dossou"
                className="w-full rounded-xl border border-surface-line bg-bg px-4 py-3 text-ink placeholder:text-muted/70 focus:border-primary focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label htmlFor="city" className="mb-1 block text-sm font-semibold text-ink">
              Ville
            </label>
            <input
              id="city"
              required
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="Cotonou, quartier Fidjrossè..."
              className="w-full rounded-xl border border-surface-line bg-bg px-4 py-3 text-ink placeholder:text-muted/70 focus:border-primary focus:outline-none"
            />
          </div>

          <div>
            <label htmlFor="phone" className="mb-1 block text-sm font-semibold text-ink">
              Numéro de téléphone
            </label>
            <input
              id="phone"
              type="tel"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="90 00 00 00"
              className="w-full rounded-xl border border-surface-line bg-bg px-4 py-3 text-ink placeholder:text-muted/70 focus:border-primary focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className="flex w-full items-center justify-center gap-2 rounded-full bg-accent px-6 py-4 font-display text-base font-semibold text-cream shadow-sm transition hover:bg-accent-dark focus:outline-none focus-visible:ring-4 focus-visible:ring-accent/40 active:scale-[0.99]"
          >
            <MessageCircle size={19} strokeWidth={2} />
            Confirmer la commande via WhatsApp
          </button>

          <a
            href={mailtoUrl}
            className="flex w-full items-center justify-center gap-2 rounded-full border border-surface-line px-6 py-3.5 text-sm font-semibold text-ink transition hover:border-primary"
          >
            <Mail size={17} strokeWidth={1.8} />
            Ou commander par email
          </a>

          <p className="flex items-center justify-center gap-2 text-center text-xs text-muted">
            <ShieldCheck size={15} strokeWidth={1.8} className="shrink-0 text-primary" />
            Aucun paiement à l&apos;avance — paiement à la livraison ou Mobile
            Money (MTN MoMo / Moov Money).
          </p>
        </form>
      </div>
    </div>
  );
}
