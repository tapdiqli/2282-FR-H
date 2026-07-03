"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const CLE = "tpg_consent";

export function BandeauConsentement() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(CLE)) setVisible(true);
    } catch {}
  }, []);

  function accepter() {
    try {
      localStorage.setItem(CLE, "accepted");
    } catch {}
    setVisible(false);
  }

  function refuser() {
    try {
      localStorage.setItem(CLE, "declined");
    } catch {}
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Préférences de cookies"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-[color:var(--color-seam)] bg-pitch-900/95 backdrop-blur-md"
    >
      <div className="pitch flex flex-col gap-4 py-5 md:flex-row md:items-center md:justify-between">
        <p className="w-full text-sm leading-relaxed text-mute">
          Des cookies fonctionnels et des mesures d&apos;audience nous aident à améliorer le site. Aucune donnée
          personnelle n&apos;est revendue. Consultez notre{" "}
          <Link href="/confidentialite" className="text-neon underline underline-offset-2 transition hover:text-flash-400">
            politique de confidentialité
          </Link>
          .
        </p>
        <div className="flex shrink-0 items-center gap-3">
          <button
            onClick={refuser}
            className="border border-[color:var(--color-seam)] px-4 py-2 text-sm text-mute transition hover:text-bright"
          >
            Refuser
          </button>
          <button
            onClick={accepter}
            className="skew-tab bg-neon px-5 py-2.5 text-sm font-black text-pitch-950 transition hover:bg-flash-400"
          >
            <span className="head">Accepter</span>
          </button>
        </div>
      </div>
    </div>
  );
}
