import { Mail, Phone, User } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { Placeholder } from "@/components/ui/Placeholder";
import { site } from "@/lib/site";

export function About() {
  return (
    <section id="o-mne" className="scroll-mt-20 bg-white py-20 lg:py-28">
      <div className="container-px grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <span className="block h-1 w-12 rounded-full bg-accent" aria-hidden />
          <h2 className="mt-5 font-display text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            Přijede Martin osobně
          </h2>
          <div className="mt-6 max-w-xl space-y-4 text-lg leading-relaxed text-slatemuted">
            <p>
              Žádná velká firma, žádní subdodavatelé. Jsem Martin Vopat a na
              každou zakázku jedu sám.
            </p>
            <p>
              Pracuji v Plzni a okolí jako instalatér, topenář a plynař s
              řemeslným oprávněním. Cenu vždy stanovím až po prohlídce, nic
              skrytého, žádné paušální příplatky.
            </p>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
            <a
              href={site.phoneHref}
              className="inline-flex items-center gap-2.5 rounded-md border border-line bg-paper-muted px-4 py-3 text-sm font-semibold text-ink transition-colors hover:border-accent hover:text-accent"
            >
              <Phone className="h-4 w-4 text-accent" aria-hidden />
              {site.phone}
            </a>
            <a
              href={site.emailHref}
              className="inline-flex items-center gap-2.5 rounded-md border border-line bg-paper-muted px-4 py-3 text-sm font-semibold text-ink transition-colors hover:border-accent hover:text-accent"
            >
              <Mail className="h-4 w-4 text-accent" aria-hidden />
              {site.email}
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="relative">
          <Placeholder
            file="portret.jpg"
            label="Foto: Martin Vopat"
            icon={User}
            className="aspect-[4/5] w-full rounded-2xl"
          />
          <div className="absolute -bottom-4 -left-4 hidden rounded-xl border border-line bg-white px-5 py-4 shadow-card sm:block">
            <p className="font-display text-2xl font-extrabold text-ink">
              Plzeň
            </p>
            <p className="text-sm text-slatemuted">a okolí</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
