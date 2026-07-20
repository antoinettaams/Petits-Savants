import Link from "next/link";
import { brand } from "@/lib/site-config";

type LogoProps = {
  /** "dark" = fond sombre (footer, sections encre) ; "light" = fond clair (header) */
  variant?: "light" | "dark";
  className?: string;
};

// Wordmark uniquement — pas de pictogramme. "Petits" en ardoise, "Savants"
// en encre rouge ; la version "dark" éclaircit les deux teintes pour rester
// lisible sur fond tableau noir.
export default function Logo({ variant = "light", className = "" }: LogoProps) {
  const p1 = variant === "dark" ? "text-primary-light" : "text-primary";
  const p2 = variant === "dark" ? "text-[#f0917d]" : "text-accent";

  return (
    <Link
      href="/"
      className={`rounded-sm font-display text-xl font-medium italic tracking-tight focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 sm:text-2xl ${className}`}
      aria-label={brand.name}
    >
      <span className={p1}>Petits</span> <span className={p2}>Savants</span>
    </Link>
  );
}
