import { ArrowUpRight, MessageCircle } from "lucide-react";
import Logo from "./Logo";
import { brand } from "@/lib/site-config";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-cream">
      <div className="mx-auto max-w-6xl px-4 py-12 md:px-6">
        <div className="grid gap-8 md:grid-cols-2">
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
        </div>

        <p className="mt-10 border-t border-cream/10 pt-6 text-center text-xs text-cream/40">
          © {year} {brand.name}. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}
