import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "outline" | "ghost" | "white";

const base =
  "inline-flex items-center justify-center gap-2 rounded-md px-6 py-3.5 text-sm font-semibold transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-white";

const variants: Record<Variant, string> = {
  primary: "bg-accent text-white hover:bg-accent-light",
  outline:
    "border border-white/40 text-white backdrop-blur-sm hover:bg-white/10",
  ghost: "border border-line text-steel hover:border-accent hover:text-accent",
  white: "bg-white text-ink hover:bg-paper-muted",
};

type ButtonProps = {
  variant?: Variant;
  className?: string;
  children: ReactNode;
} & ComponentProps<typeof Link>;

export function Button({
  variant = "primary",
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <Link className={cn(base, variants[variant], className)} {...props}>
      {children}
    </Link>
  );
}
