import Logo from "./Logo";
import CommanderButton from "./CommanderButton";

const navLinks = [
  { href: "#comment-ca-marche", label: "Comment ça marche" },
  { href: "#benefices", label: "Bénéfices" },
  { href: "#offres", label: "Offres" },
  { href: "#faq", label: "FAQ" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-surface-line/70 bg-bg/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6">
        <Logo variant="light" />

        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-sm text-sm font-semibold text-muted transition hover:text-ink focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/50"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <CommanderButton size="sm">Commander</CommanderButton>
      </div>
    </header>
  );
}
