export function Blason({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 260 42" className={className} role="img" aria-label="TopPariGagnant">
      <defs>
        <linearGradient id="bl-g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#2f6bff" />
          <stop offset="1" stopColor="#ff3d6e" />
        </linearGradient>
      </defs>
      <g transform="translate(2 5)">
        <path d="M4 2h28l-4 30-10 4-10-4-4-30z" fill="url(#bl-g)" />
        <path d="M12 14l5 6 8-11" fill="none" stroke="#070510" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" />
      </g>
      <text x="42" y="20" className="head" fontFamily="var(--font-anton), Impact, sans-serif" fontSize="18" fill="#f4f2ff">
        TOP<tspan fill="#d4ff3f">PARI</tspan>
      </text>
      <text x="42" y="34" fontFamily="var(--font-sora), system-ui, sans-serif" fontSize="10" fontWeight="700" letterSpacing="3" fill="#9a94b8">
        GAGNANT
      </text>
    </svg>
  );
}
