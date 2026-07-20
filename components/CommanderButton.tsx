"use client";

import { useOrderModal } from "./order-modal/OrderModalContext";

type CommanderButtonProps = {
  packId?: string;
  children: React.ReactNode;
  variant?: "primary" | "outline-dark" | "outline-light";
  size?: "md" | "sm";
  className?: string;
};

const variantStyles: Record<NonNullable<CommanderButtonProps["variant"]>, string> = {
  primary: "bg-accent text-cream hover:bg-accent-dark shadow-sm",
  "outline-dark": "border-2 border-primary text-primary hover:bg-primary-tint",
  "outline-light": "border-2 border-cream/40 text-cream hover:bg-cream/10",
};

const sizeStyles: Record<NonNullable<CommanderButtonProps["size"]>, string> = {
  md: "px-6 py-3.5 text-base",
  sm: "px-4 py-2 text-sm",
};

// Bouton "Commander" réutilisé partout sur la page (header, hero, offres,
// CTA final...). Tous ouvrent la même modale de commande ; packId
// présélectionne un pack quand le bouton part d'une carte d'offre précise.
export default function CommanderButton({
  packId,
  children,
  variant = "primary",
  size = "md",
  className = "",
}: CommanderButtonProps) {
  const { openModal } = useOrderModal();

  return (
    <button
      type="button"
      onClick={() => openModal(packId)}
      className={`rounded-full font-display font-semibold transition active:scale-95 focus:outline-none focus-visible:ring-4 focus-visible:ring-accent/40 ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
    >
      {children}
    </button>
  );
}
