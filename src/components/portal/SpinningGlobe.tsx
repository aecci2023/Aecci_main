export function DottedWorldMap() {
  return (
    <svg
      className="inline-block h-full w-full shrink-0"
      viewBox="0 0 200 100"
      fill="currentColor"
    >
      {/* North America */}
      <path
        d="M15,20 Q35,15 45,30 Q40,50 25,55 Q10,40 15,20 Z"
        className="text-primary/20"
      />
      {/* South America */}
      <path
        d="M30,55 Q40,60 35,85 Q25,90 20,75 Z"
        className="text-primary/20"
      />
      {/* Africa */}
      <path
        d="M80,40 Q100,45 95,75 Q85,85 70,70 Q65,50 80,40 Z"
        className="text-primary/20"
      />
      {/* Eurasia */}
      <path
        d="M85,15 Q125,10 145,25 Q135,55 115,50 Q95,45 85,15 Z"
        className="text-primary/20"
      />
      {/* Australia */}
      <path
        d="M135,65 Q155,65 150,80 Q140,85 135,65 Z"
        className="text-primary/20"
      />
    </svg>
  );
}

export function SpinningGlobe() {
  return (
    <div className="relative size-80 sm:size-96 rounded-full border border-primary/30 bg-foreground/90 shadow-[0_0_60px_rgba(16,185,129,0.25)] overflow-hidden flex items-center justify-center">
      {/* Atmosphere glow */}
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-primary/5 to-primary/10 rounded-full z-20 pointer-events-none" />
      <div className="absolute inset-0 shadow-[inset_-30px_-30px_60px_rgba(0,0,0,0.95),inset_20px_20px_40px_rgba(255,255,255,0.05)] rounded-full z-10 pointer-events-none" />

      {/* Rotating Map Layer */}
      <div className="absolute inset-0 flex items-center z-0 animate-spin-globe whitespace-nowrap opacity-70">
        <DottedWorldMap />
        <DottedWorldMap />
      </div>

      {/* Grid lines */}
      <svg
        className="absolute inset-0 size-full z-10 text-primary/25 pointer-events-none"
        viewBox="0 0 100 100"
      >
        <circle
          cx="50"
          cy="50"
          r="49"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.4"
        />
        <line
          x1="50"
          y1="0"
          x2="50"
          y2="100"
          stroke="currentColor"
          strokeWidth="0.4"
        />
        <line
          x1="0"
          y1="50"
          x2="100"
          y2="50"
          stroke="currentColor"
          strokeWidth="0.4"
        />
        <ellipse
          cx="50"
          cy="50"
          rx="35"
          ry="49"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.4"
        />
        <ellipse
          cx="50"
          cy="50"
          rx="20"
          ry="49"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.4"
        />
      </svg>

      {/* Flying Trade Routes */}
      <svg
        className="absolute inset-0 size-full z-15 text-primary pointer-events-none"
        viewBox="0 0 100 100"
      >
        {/* Mumbai (~52, 48) to Nairobi (~42, 62) */}
        <path
          d="M 52 48 Q 44 52 42 62"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeDasharray="3 3"
          className="animate-dash"
        />
        {/* Mumbai to Singapore (~68, 56) */}
        <path
          d="M 52 48 Q 62 50 68 56"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeDasharray="3 3"
          className="animate-dash"
          style={{ animationDelay: "0.5s" }}
        />
        {/* Mumbai to Rotterdam (~36, 32) */}
        <path
          d="M 52 48 Q 42 38 36 32"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeDasharray="3 3"
          className="animate-dash"
          style={{ animationDelay: "1s" }}
        />

        {/* Hub Glow Pulses */}
        <circle
          cx="52"
          cy="48"
          r="1.8"
          className="fill-primary animate-pulse"
        />
        <circle
          cx="42"
          cy="62"
          r="1.5"
          className="fill-chart-4 animate-pulse"
        />
        <circle
          cx="68"
          cy="56"
          r="1.5"
          className="fill-chart-2 animate-pulse"
        />
        <circle
          cx="36"
          cy="32"
          r="1.5"
          className="fill-primary animate-pulse"
        />
      </svg>
    </div>
  );
}
