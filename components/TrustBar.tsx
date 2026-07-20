import { HeartHandshake, RefreshCw, Sparkles, Truck, Wallet } from "lucide-react";
import { trustBarItems } from "@/lib/site-config";

const icons = { Truck, Wallet, Sparkles, RefreshCw, HeartHandshake } as const;

function TrustItem({ item }: { item: (typeof trustBarItems)[number] }) {
  const Icon = icons[item.icon as keyof typeof icons];
  return (
    <div className="flex shrink-0 items-center gap-2.5 px-6">
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-surface text-primary">
        <Icon size={15} strokeWidth={1.8} />
      </span>
      <span className="whitespace-nowrap text-sm font-semibold text-ink">
        {item.label}
      </span>
    </div>
  );
}

// Bandeau de confiance en défilement lent (marquee), animé en CSS pur
// (transform, pas de JS) pour rester léger sur mobile. La liste est
// dupliquée pour créer une boucle continue sans saut visible ; le second
// groupe est masqué aux lecteurs d'écran.
export default function TrustBar() {
  return (
    <div className="marquee overflow-hidden border-b border-surface-line bg-primary-tint py-4">
      <div className="marquee-track flex w-max items-center">
        <div className="flex shrink-0 items-center" aria-hidden={false}>
          {trustBarItems.map((item) => (
            <TrustItem key={item.label} item={item} />
          ))}
        </div>
        <div className="flex shrink-0 items-center" aria-hidden="true">
          {trustBarItems.map((item) => (
            <TrustItem key={`dup-${item.label}`} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
