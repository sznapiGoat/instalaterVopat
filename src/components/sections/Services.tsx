import { ServiceCard } from "@/components/ui/ServiceCard";
import { Reveal } from "@/components/ui/Reveal";
import { services } from "@/lib/services";

export function Services() {
  return (
    <section id="sluzby" className="bg-paper py-20 lg:py-28">
      <div className="container-px">
        <Reveal className="max-w-2xl">
          <span className="block h-1 w-12 rounded-full bg-accent" aria-hidden />
          <h2 className="mt-5 font-display text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            Co pro vás udělám
          </h2>
          <p className="mt-4 max-w-[48ch] text-lg leading-relaxed text-slatemuted">
            Kompletní instalatérské, topenářské a plynařské práce v Plzni a okolí
            pod jednou rukou.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <ServiceCard
                key={service.title}
                icon={<Icon className="h-6 w-6" strokeWidth={2} aria-hidden />}
                title={service.title}
                desc={service.desc}
                index={i}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
