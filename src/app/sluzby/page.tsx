import type { Metadata } from "next";
import Image from "next/image";
import { Check, Mail, Phone, ShieldCheck } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { detailedServices } from "@/lib/services";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Služby",
  description:
    "Vodoinstalace a kanalizace, topenářství, plynařské práce a koupelny na klíč v Plzni a okolí. Martin Vopat, instalatér s řemeslným oprávněním.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="bg-ink pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="container-px max-w-3xl">
          <Reveal>
            <span className="block h-1 w-12 rounded-full bg-accent-light" aria-hidden />
            <h1 className="mt-5 font-display text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl">
              Co pro vás zařídím
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-slate-300">
              Voda, topení, plyn i celé koupelny. Vše pod jednou rukou, s
              prohlídkou na místě a cenou stanovenou až po ní.
            </p>
          </Reveal>
        </div>
      </section>

      <div className="bg-white">
        {detailedServices.map((service, i) => {
          const imageRight = i % 2 === 0;
          return (
            <section
              key={service.id}
              id={service.id}
              className={cn(
                "scroll-mt-24 py-16 lg:py-24",
                i % 2 === 1 && "bg-paper-muted",
              )}
            >
              <div className="container-px grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
                <Reveal className={cn(imageRight ? "lg:order-1" : "lg:order-2")}>
                  <div className="flex items-center gap-4">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-accent-muted text-accent">
                      <service.icon className="h-6 w-6" strokeWidth={2} aria-hidden />
                    </span>
                    <h2 className="font-display text-2xl font-extrabold tracking-tight text-ink sm:text-3xl">
                      {service.title}
                    </h2>
                  </div>
                  {service.badge ? (
                    <span className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-accent-muted px-3 py-1 text-xs font-semibold text-accent">
                      <ShieldCheck className="h-3.5 w-3.5" aria-hidden />
                      {service.badge}
                    </span>
                  ) : null}
                  <p className="mt-4 text-lg leading-relaxed text-slatemuted">
                    {service.intro}
                  </p>
                  <ul className="mt-6 space-y-3">
                    {service.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-3">
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent-muted text-accent">
                          <Check className="h-3.5 w-3.5" strokeWidth={3} aria-hidden />
                        </span>
                        <span className="text-[15px] leading-relaxed text-steel">
                          {bullet}
                        </span>
                      </li>
                    ))}
                  </ul>
                </Reveal>

                <Reveal
                  delay={0.1}
                  className={cn(imageRight ? "lg:order-2" : "lg:order-1")}
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
                    <Image
                      src={`/images/${service.image}`}
                      alt={service.imageLabel}
                      fill
                      sizes="(min-width: 1024px) 45vw, 100vw"
                      className="object-cover object-center"
                    />
                  </div>
                </Reveal>
              </div>
            </section>
          );
        })}
      </div>

      <section className="bg-ink py-16 lg:py-20">
        <div className="container-px flex flex-col items-center gap-6 text-center">
          <Reveal>
            <h2 className="font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Máte zájem? Zavolejte nebo napište.
            </h2>
            <div className="mt-7 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href={site.phoneHref}
                className="flex items-center gap-2.5 font-display text-2xl font-extrabold tracking-tight text-white tnum sm:text-3xl"
              >
                <Phone className="h-6 w-6 text-accent-light" strokeWidth={2.2} aria-hidden />
                {site.phone}
              </a>
              <a
                href={site.emailHref}
                className="inline-flex items-center gap-2 text-slate-300 transition-colors hover:text-white"
              >
                <Mail className="h-4 w-4" aria-hidden />
                {site.email}
              </a>
            </div>
            <div className="mt-8">
              <Button href="/kontakt" variant="primary">
                Nezávazná poptávka
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
