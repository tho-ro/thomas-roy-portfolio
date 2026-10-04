export default function ContactSection() {
  return (
    <section
      id="contact"
      data-section
      className="relative flex h-dvh w-screen snap-start flex-col items-center justify-center bg-background px-6 text-foreground"
    >
      <div className="max-w-md">
        <h2 className="text-2xl font-medium tracking-tight">Contact</h2>
        <p className="mt-4 text-foreground/70">
          Pour toute demande de collaboration, tirage ou publication,
          n&apos;hésitez pas à me contacter.
        </p>
        <dl className="mt-8 space-y-4 text-sm">
          <div>
            <dt className="text-foreground/50">Email</dt>
            <dd>
              <a
                href="mailto:contact@thomas-roy.com"
                className="hover:text-foreground/70"
              >
                contact@thomas-roy.com
              </a>
            </dd>
          </div>
        </dl>
      </div>
      <p className="absolute bottom-6 text-xs text-foreground/40">
        © {new Date().getFullYear()} Thomas Roy. Tous droits réservés.
      </p>
    </section>
  );
}
