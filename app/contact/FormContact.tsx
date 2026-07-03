"use client";

import { useState } from "react";
import { reglages } from "@/logic/reglages";

export function FormContact() {
  const [envoye, setEnvoye] = useState(false);
  const [chargement, setChargement] = useState(false);
  const [erreur, setErreur] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setChargement(true);
    setErreur("");

    const form = e.currentTarget;
    const nom = (form.elements.namedItem("nom") as HTMLInputElement).value;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value;

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nom, email, message }),
      });
      if (res.ok) {
        setEnvoye(true);
      } else {
        setErreur(`Une erreur est survenue. Écrivez-nous à contact@${reglages.domain}.`);
      }
    } catch {
      setErreur(`Impossible d'envoyer. Écrivez-nous à contact@${reglages.domain}.`);
    } finally {
      setChargement(false);
    }
  }

  if (envoye) {
    return (
      <div className="slab p-8 text-center">
        <h2 className="head text-2xl text-bright">Message reçu</h2>
        <p className="mt-2 text-sm text-mute">Merci ! Nous vous répondrons sous deux jours ouvrés.</p>
      </div>
    );
  }

  const champ = "border border-[color:var(--color-seam)] bg-pitch-950 px-4 py-3 text-bright outline-none focus:border-flash-400 w-full";

  return (
    <form onSubmit={handleSubmit} className="slab p-6 md:p-8" noValidate>
      <div className="grid gap-4">
        <label className="grid gap-1.5 text-sm">
          <span className="font-semibold text-bright">Nom</span>
          <input name="nom" required className={champ} placeholder="Alex Martin" />
        </label>
        <label className="grid gap-1.5 text-sm">
          <span className="font-semibold text-bright">E-mail</span>
          <input name="email" type="email" required className={champ} placeholder="vous@exemple.com" />
        </label>
        <label className="grid gap-1.5 text-sm">
          <span className="font-semibold text-bright">Message</span>
          <textarea name="message" required rows={5} className={champ} placeholder="Votre message" />
        </label>
        {erreur && (
          <p className="rounded border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-400">
            {erreur}
          </p>
        )}
        <button
          type="submit"
          disabled={chargement}
          className="skew-tab mt-1 bg-neon px-6 py-3 text-sm font-black text-pitch-950 transition hover:bg-flash-400 hover:text-bright disabled:cursor-not-allowed disabled:opacity-50"
        >
          <span className="head">{chargement ? "Envoi en cours…" : "Envoyer"}</span>
        </button>
      </div>
    </form>
  );
}
