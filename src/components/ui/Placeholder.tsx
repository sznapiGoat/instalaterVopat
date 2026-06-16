import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type PlaceholderProps = {
  label: string;
  icon?: LucideIcon;
  className?: string;
  /** filename the client will drop into /public/images/ */
  file?: string;
};

/**
 * Intentional placeholder shown until the client delivers real photos to
 * /public/images/. Swap for <Image src={`/images/${file}`} ... /> on arrival.
 * Deep navy panel with a faint blueprint grid — matches the precision motif.
 */
export function Placeholder({ label, icon: Icon, className, file }: PlaceholderProps) {
  return (
    <div
      className={cn(
        "relative flex items-center justify-center overflow-hidden bg-ink",
        className,
      )}
      role="img"
      aria-label={label}
    >
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.16]"
        style={{
          backgroundImage:
            "linear-gradient(#3B82F6 1px, transparent 1px), linear-gradient(90deg, #3B82F6 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-br from-accent/15 via-transparent to-ink"
      />
      <div className="relative flex flex-col items-center gap-3 px-6 text-center">
        {Icon ? (
          <Icon className="h-8 w-8 text-accent-light" strokeWidth={1.5} aria-hidden />
        ) : null}
        <span className="text-sm font-medium text-slate-300">{label}</span>
        {file ? (
          <span className="font-mono text-[11px] uppercase tracking-widest text-slate-400">
            /images/{file}
          </span>
        ) : null}
      </div>
    </div>
  );
}
