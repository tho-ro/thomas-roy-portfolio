"use client";

import { useState } from "react";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mgavgvdk";

type Status = "idle" | "submitting" | "success" | "error";

const fieldClass =
  "border-b border-foreground/20 bg-transparent py-2 text-foreground outline-none focus:border-foreground";
const labelClass = "text-sm text-foreground/60";

export default function WorkshopForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    const form = e.currentTarget;

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <p className="text-foreground/80">
        Merci, ta demande de pré-inscription a bien été envoyée. Thomas te
        recontactera prochainement.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <label htmlFor="name" className={labelClass}>
          Nom
        </label>
        <input id="name" name="name" type="text" required className={fieldClass} />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="email" className={labelClass}>
          Email
        </label>
        <input id="email" name="email" type="email" required className={fieldClass} />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="phone" className={labelClass}>
          Téléphone (optionnel)
        </label>
        <input id="phone" name="phone" type="tel" className={fieldClass} />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="participants" className={labelClass}>
          Nombre de participants
        </label>
        <input
          id="participants"
          name="participants"
          type="number"
          min={1}
          defaultValue={1}
          required
          className={fieldClass}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="message" className={labelClass}>
          Message / motivation
        </label>
        <textarea id="message" name="message" rows={4} className={fieldClass} />
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-2 self-start border border-foreground/60 px-6 py-2 text-sm tracking-wide uppercase transition-colors hover:bg-foreground hover:text-background disabled:opacity-50"
      >
        {status === "submitting" ? "Envoi…" : "Envoyer ma pré-inscription"}
      </button>

      {status === "error" && (
        <p className="text-sm text-red-500">
          Une erreur est survenue. Réessaie, ou écris directement à{" "}
          <a href="mailto:contact@thomas-roy.com" className="underline">
            contact@thomas-roy.com
          </a>
          .
        </p>
      )}
    </form>
  );
}
