import { Backpack } from "lucide-react";
import CommanderButton from "./CommanderButton";
import { backToSchool } from "@/lib/site-config";

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-ink py-16 text-center text-cream md:py-20">
      <div className="blob-field" aria-hidden="true" />
      <div className="relative mx-auto max-w-xl px-4 md:px-6">
        <span className="inline-flex items-center gap-2 rounded-full bg-cream/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wide text-cream/90">
          <Backpack size={15} strokeWidth={1.8} />
          Rentrée le {backToSchool.date}
        </span>
        <h2 className="mt-5 font-display text-2xl font-semibold leading-tight md:text-3xl">
          Offrez à votre enfant une longueur d&apos;avance, dès aujourd&apos;hui
        </h2>
        <p className="mt-3 text-cream/70">
          Paiement à la livraison, réponse sous 24h sur WhatsApp.
        </p>
        <div className="mt-7 flex justify-center">
          <CommanderButton>Commander maintenant</CommanderButton>
        </div>
      </div>
    </section>
  );
}
