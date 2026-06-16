export function DemoBadge() {
  return (
    <div className="pointer-events-none fixed bottom-4 right-4 z-50">
      <span className="pointer-events-auto inline-flex items-center gap-1.5 rounded-full bg-ink/90 px-3 py-1.5 text-xs font-medium text-slate-200 shadow-lg backdrop-blur">
        <span className="h-1.5 w-1.5 rounded-full bg-accent-light" aria-hidden />
        Demo verze
      </span>
    </div>
  );
}
