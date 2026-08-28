export function MolecularCanvas() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden opacity-30 dark:opacity-40"
    >
      <svg
        className="h-full w-full"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
      >
        <defs>
          <pattern
            id="bio-molecular-grid"
            width="160"
            height="160"
            patternUnits="userSpaceOnUse"
          >
            {/* Bonds */}
            <path
              d="M 30,30 L 80,50 L 130,30 L 130,90 L 80,110 L 30,90 Z"
              stroke="rgba(56, 189, 248, 0.2)"
              strokeWidth="1"
            />
            <path
              d="M 80,50 L 80,110"
              stroke="rgba(139, 92, 246, 0.15)"
              strokeWidth="1"
              strokeDasharray="3 3"
            />
            <path
              d="M 130,90 L 160,110"
              stroke="rgba(56, 189, 248, 0.15)"
              strokeWidth="1"
            />
            <path
              d="M 30,90 L 0,110"
              stroke="rgba(56, 189, 248, 0.15)"
              strokeWidth="1"
            />

            {/* Atom Nodes */}
            <circle cx="30" cy="30" r="3" fill="#38bdf8" className="molecule-node" style={{ animationDelay: "0s" }} />
            <circle cx="80" cy="50" r="3.5" fill="#818cf8" className="molecule-node" style={{ animationDelay: "1s" }} />
            <circle cx="130" cy="30" r="3" fill="#38bdf8" className="molecule-node" style={{ animationDelay: "2s" }} />
            <circle cx="130" cy="90" r="3" fill="#c084fc" className="molecule-node" style={{ animationDelay: "1.5s" }} />
            <circle cx="80" cy="110" r="3.5" fill="#34d399" className="molecule-node" style={{ animationDelay: "0.5s" }} />
            <circle cx="30" cy="90" r="3" fill="#38bdf8" className="molecule-node" style={{ animationDelay: "2.5s" }} />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#bio-molecular-grid)" />
      </svg>
    </div>
  );
}
