import { ArrowUpRight, Mail, MessageCircle } from "lucide-react";
import Logo from "./Logo";
import { brand } from "@/lib/site-config";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-cream">
      <div className="mx-auto max-w-6xl px-4 py-12 md:px-6">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <Logo variant="dark" />
            <p className="mt-2 text-sm text-cream/65">{brand.tagline}</p>
            <p className="mt-2 text-sm text-cream/50">{brand.city}</p>
          </div>

          <div>
            <p className="mb-3 font-display text-sm font-semibold">
              Nous contacter
            </p>
            <ul className="space-y-2.5 text-sm text-cream/70">
              <li>
                <a
                  href={`https://wa.me/${brand.whatsappNumber}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 hover:text-cream"
                >
                  <MessageCircle size={15} strokeWidth={1.8} />
                  WhatsApp : {brand.whatsappDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${brand.orderEmail}`}
                  className="flex items-center gap-2 hover:text-cream"
                >
                  <Mail size={15} strokeWidth={1.8} />
                  {brand.orderEmail}
                </a>
              </li>
              <li className="flex items-center gap-4 pt-1">
                <a
                  href={brand.facebookUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1 hover:text-cream"
                >
                  Facebook
                  <ArrowUpRight size={13} strokeWidth={1.8} />
                </a>
                <a
                  href={brand.tiktokUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1 hover:text-cream"
                >
                  TikTok
                  <ArrowUpRight size={13} strokeWidth={1.8} />
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="mb-3 font-display text-sm font-semibold">
              Informations
            </p>
            {/* [PLACEHOLDER] Mentions légales basiques — à compléter avec
                les informations réelles de l'entreprise (nom légal, RCCM/IFU
                si applicable, adresse) avant mise en ligne définitive. */}
            <p className="text-xs leading-relaxed text-cream/55">
              {`${brand.name} — Vente en ligne au Bénin. Paiement à la livraison ou par Mobile Money (MTN MoMo / Moov Money). [PLACEHOLDER : nom légal de l'entreprise / numéro RCCM / IFU].`}
            </p>
          </div>
        </div>

        <p className="mt-10 border-t border-cream/10 pt-6 text-center text-xs text-cream/40">
          © {year} {brand.name}. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}
