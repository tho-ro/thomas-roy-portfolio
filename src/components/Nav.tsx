import Link from "next/link";

const links = [
  { href: "/", label: "Travaux" },
  { href: "/a-propos", label: "À propos" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  return (
    <header className="border-b border-foreground/10">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <Link href="/" className="text-sm font-medium tracking-widest uppercase">
          Thomas Roy
        </Link>
        <nav className="flex gap-6 text-sm tracking-wide">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-foreground/70 transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
