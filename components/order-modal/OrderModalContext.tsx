"use client";

import { createContext, useCallback, useContext, useMemo, useState } from "react";
import OrderModal from "./OrderModal";

type OrderModalContextValue = {
  isOpen: boolean;
  initialPackId?: string;
  openModal: (packId?: string) => void;
  closeModal: () => void;
};

const OrderModalContext = createContext<OrderModalContextValue | null>(null);

// Fournit la modale de commande à toute l'application : n'importe quel
// bouton "Commander" (header, hero, offres, CTA final...) appelle
// useOrderModal().openModal() pour ouvrir la MÊME modale, éventuellement
// avec un pack pré-sélectionné.
export function OrderModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [initialPackId, setInitialPackId] = useState<string | undefined>(undefined);

  const openModal = useCallback((packId?: string) => {
    setInitialPackId(packId);
    setIsOpen(true);
  }, []);

  const closeModal = useCallback(() => setIsOpen(false), []);

  const value = useMemo(
    () => ({ isOpen, initialPackId, openModal, closeModal }),
    [isOpen, initialPackId, openModal, closeModal]
  );

  return (
    <OrderModalContext.Provider value={value}>
      {children}
      <OrderModal />
    </OrderModalContext.Provider>
  );
}

export function useOrderModal() {
  const ctx = useContext(OrderModalContext);
  if (!ctx) {
    throw new Error("useOrderModal doit être utilisé dans <OrderModalProvider>");
  }
  return ctx;
}
