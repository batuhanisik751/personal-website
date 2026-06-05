// Decorative amber glow blobs used behind the hero. Purely visual.
export function BackgroundGlow() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
      {/* Dotted grid wash */}
      <div className="absolute inset-0 bg-grid opacity-70" />

      {/* Primary amber glow */}
      <div className="animate-float-slow absolute -top-32 left-1/2 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-accent/20 blur-[120px]" />

      {/* Secondary deep-amber glow */}
      <div className="animate-float-slower absolute -right-24 top-40 h-[26rem] w-[26rem] rounded-full bg-accent-deep/25 blur-[120px]" />

      {/* Tertiary soft glow, lower left */}
      <div className="animate-float-slow absolute -left-24 bottom-0 h-[22rem] w-[22rem] rounded-full bg-accent-soft/10 blur-[110px]" />

      {/* Fade to background at the bottom for a clean handoff */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-bg" />
    </div>
  );
}
