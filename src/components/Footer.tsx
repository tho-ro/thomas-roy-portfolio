export default function Footer() {
  return (
    <footer className="mt-auto border-t border-foreground/10">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-8 text-xs text-foreground/50 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Thomas Roy. Tous droits réservés.</p>
        <p>Photographe documentaire</p>
      </div>
    </footer>
  );
}
