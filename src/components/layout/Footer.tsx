import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { nav, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t-2 border-accent bg-ink text-slate-300">
      <div className="container-px grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1.2fr] lg:gap-12">
        <div>
          <Link href="/" className="flex items-center gap-2.5">
            <span className="flex h-10 w-10 items-center justify-center rounded-md bg-white shadow-sm">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/logo1.svg"
                alt="Logo Martin Vopat"
                className="h-8 w-8"
              />
            </span>
            <span className="font-display text-lg font-bold text-white">
              {site.name}
            </span>
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-400">
            Spolehlivý instalatér v Plzni a okolí. Voda, topení, plyn a koupelny
            na klíč. Cenu řeknu vždy až po prohlídce.
          </p>
        </div>

        <nav className="flex flex-col gap-3" aria-label="Patička">
          <h2 className="text-xs font-semibold uppercase tracking-eyebrow text-slate-400">
            Navigace
          </h2>
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-slate-300 transition-colors hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex flex-col gap-3">
          <h2 className="text-xs font-semibold uppercase tracking-eyebrow text-slate-400">
            Kontakt
          </h2>
          <a
            href={site.phoneHref}
            className="flex items-center gap-3 text-sm text-slate-300 transition-colors hover:text-white"
          >
            <Phone className="h-4 w-4 text-accent-light" aria-hidden />
            {site.phone}
          </a>
          <a
            href={site.emailHref}
            className="flex items-center gap-3 text-sm text-slate-300 transition-colors hover:text-white"
          >
            <Mail className="h-4 w-4 text-accent-light" aria-hidden />
            {site.email}
          </a>
          <p className="flex items-start gap-3 text-sm text-slate-400">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent-light" aria-hidden />
            <span>
              {site.street}
              <br />
              {site.zip}
            </span>
          </p>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-px flex flex-col gap-2 py-5 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © 2025 {site.name} — Instalatérství {site.city} | IČO: {site.ico}
          </p>
          <p>{site.web}</p>
        </div>
      </div>
    </footer>
  );
}
