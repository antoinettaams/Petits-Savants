"use client";

import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useOrderModal } from "@/components/order-modal/OrderModalContext";

// La commande se fait désormais dans la modale globale, accessible depuis
// n'importe quel bouton "Commander" de la page d'accueil. Cette route reste
// utile pour les liens directs de pub (/commande?pack=famille) : elle
// renvoie vers l'accueil avec la modale déjà ouverte et le pack présélectionné.
export default function CommandeRedirect() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { openModal } = useOrderModal();

  useEffect(() => {
    openModal(searchParams.get("pack") ?? undefined);
    router.replace("/");
  }, [openModal, router, searchParams]);

  return null;
}
