import { Suspense } from "react";
import type { Metadata } from "next";
import CommandeRedirect from "./CommandeRedirect";
import { brand } from "@/lib/site-config";

export const metadata: Metadata = {
  title: `Commander — ${brand.name}`,
  description:
    "Finalisez votre commande du kit Petits Savants : paiement à la livraison ou Mobile Money.",
};

export default function CommandePage() {
  return (
    <Suspense fallback={null}>
      <CommandeRedirect />
    </Suspense>
  );
}
