export function Etoiles({ valeur, className = "" }: { valeur: number; className?: string }) {
  const marques: ("full" | "half" | "empty")[] = [];
  for (let i = 1; i <= 5; i++) {
    if (valeur >= i) marques.push("full");
    else if (valeur >= i - 0.5) marques.push("half");
    else marques.push("empty");
  }
  return (
    <div className={`flex items-center gap-0.5 ${className}`} role="img" aria-label={`${valeur} sur 5`}>
      {marques.map((m, i) => {
        const gid = `tpg-${i}-${Math.random().toString(36).slice(2, 7)}`;
        return (
          <svg key={i} width="13" height="13" viewBox="0 0 24 24" aria-hidden="true">
            {m === "half" && (
              <defs>
                <linearGradient id={gid}>
                  <stop offset="50%" stopColor="#d4ff3f" />
                  <stop offset="50%" stopColor="rgba(154,148,184,0.35)" />
                </linearGradient>
              </defs>
            )}
            <path
              d="M12 2l2.6 5.6L21 8.4l-4.5 4.3 1.1 6.3L12 16.9 6.4 19l1.1-6.3L3 8.4l6.4-.8L12 2z"
              fill={m === "full" ? "#d4ff3f" : m === "half" ? `url(#${gid})` : "rgba(154,148,184,0.35)"}
            />
          </svg>
        );
      })}
    </div>
  );
}
