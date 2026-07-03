"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Blason } from "./Blason";
import { liens } from "@/logic/reglages";

function BurgerIcon({ open }: { open: boolean }) {
  return (
    <span className="flex h-5 w-5 flex-col justify-center gap-1.5" aria-hidden="true">
      <span
        className={`block h-0.5 w-full origin-center rounded-full bg-bright transition-all duration-300 ease-out ${
          open ? "translate-y-2 rotate-45" : ""
        }`}
      />
      <span
        className={`block h-0.5 w-full rounded-full bg-bright transition-all duration-300 ease-out ${
          open ? "scale-x-0 opacity-0" : "scale-x-100 opacity-100"
        }`}
      />
      <span
        className={`block h-0.5 w-full origin-center rounded-full bg-bright transition-all duration-300 ease-out ${
          open ? "-translate-y-2 -rotate-45" : ""
        }`}
      />
    </span>
  );
}

export function EnTete() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <header className="sticky top-0 z-[100] border-b border-[color:var(--color-seam)] bg-[rgba(7,5,16,0.85)] backdrop-blur">
        <div className="pitch flex h-16 items-center justify-between">
          <Link href="/" aria-label="TopPariGagnant accueil">
            <Blason className="h-9 w-auto" />
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {liens.map((l) => {
              const active = pathname === l.href;
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className={`skew-tab px-4 py-2 text-sm font-bold transition ${
                    active ? "bg-flash-400 text-pitch-950" : "text-mute hover:text-bright"
                  }`}
                >
                  <span>{l.label}</span>
                </Link>
              );
            })}
          </nav>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={open}
            aria-controls="mobile-sidebar"
            className="relative grid h-10 w-11 shrink-0 place-items-center rounded-sm border border-[color:var(--color-seam)] bg-pitch-850 lg:hidden"
          >
            <BurgerIcon open={open} />
          </button>
        </div>
      </header>

      <div className="lg:hidden" aria-hidden={!open}>
        <button
          type="button"
          aria-label="Fermer le menu"
          tabIndex={open ? 0 : -1}
          onClick={() => setOpen(false)}
          className={`fixed inset-0 z-[80] bg-pitch-950/75 backdrop-blur-[2px] transition-opacity duration-300 ease-out ${
            open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
          }`}
        />

        <aside
          id="mobile-sidebar"
          role="dialog"
          aria-modal="true"
          aria-label="Menu de navigation"
          inert={!open ? true : undefined}
          className={`fixed inset-y-0 right-0 z-[90] flex w-[min(100vw-2.5rem,22rem)] flex-col border-l border-[color:var(--color-seam)] bg-gradient-to-b from-pitch-900 to-pitch-950 shadow-[-16px_0_48px_rgba(0,0,0,0.55)] transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] ${
            open ? "translate-x-0" : "translate-x-full pointer-events-none"
          }`}
        >
          <div className="flex items-center justify-between border-b border-[color:var(--color-seam)] px-5 py-4">
            <Blason className="h-8 w-auto" />
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Fermer le menu"
              className="grid h-9 w-9 place-items-center rounded-sm border border-[color:var(--color-seam)] bg-pitch-850 text-xl leading-none text-mute transition hover:text-bright"
            >
              ×
            </button>
          </div>

          <nav className="flex flex-1 flex-col gap-1 overflow-y-auto px-3 py-5">
            {liens.map((l, i) => {
              const active = pathname === l.href;
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  style={{ transitionDelay: open ? `${80 + i * 45}ms` : "0ms" }}
                  className={`head skew-tab block px-4 py-3.5 text-lg tracking-wide transition-all duration-300 ease-out ${
                    open ? "translate-x-0 opacity-100" : "translate-x-6 opacity-0"
                  } ${active ? "bg-flash-400 text-pitch-950" : "text-bright hover:bg-pitch-850"}`}
                >
                  <span>{l.label}</span>
                </Link>
              );
            })}
          </nav>

          <div
            className={`border-t border-[color:var(--color-seam)] px-5 py-4 transition-all duration-300 ease-out ${
              open ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
            }`}
            style={{ transitionDelay: open ? "320ms" : "0ms" }}
          >
            <p className="text-xs leading-relaxed text-mute">
              Classements indépendants · Agréé ANJ · Interdit aux -18 ans
            </p>
          </div>
        </aside>
      </div>
    </>
  );
}
