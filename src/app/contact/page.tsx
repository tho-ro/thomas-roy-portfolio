import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Thomas Roy",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <div className="max-w-md">
        <h1 className="text-2xl font-medium tracking-tight">Contact</h1>
        <p className="mt-4 text-foreground/70">
          Pour toute demande de collaboration, tirage ou publication, n&apos;hésitez pas à me contacter.
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
    </div>
  );
}
