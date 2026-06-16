import type { Metadata } from "next";
import { Clock, Globe, Mail, MapPin, Phone, Truck } from "lucide-react";
import { ContactForm } from "@/components/sections/ContactForm";
import { Reveal } from "@/components/ui/Reveal";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Kontakt",
  description: `Kontakt na Martina Vopata, instalatéra v Plzni. Tel: ${site.phone}, e-mail: ${site.email}. ${site.street}, ${site.zip}.`,
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-ink pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="container-px max-w-3xl">
          <Reveal>
            <span className="block h-1 w-12 rounded-full bg-accent-light" aria-hidden />
            <h1 className="mt-5 font-display text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl">
              Pojďme to vyřešit
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-slate-300">
              Napište mi do formuláře nebo rovnou zavolejte. Ozvu se co nejdříve
              a domluvíme prohlídku na místě.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-20">
        <div className="container-px grid gap-12 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
          <Reveal>
            <h2 className="font-display text-2xl font-bold tracking-tight text-ink">
              Nezávazná poptávka
            </h2>
            <p className="mt-2 text-[15px] text-slatemuted">
              Pole označená <span className="text-accent">*</span> jsou povinná.
            </p>
            <div className="mt-7">
              <ContactForm />
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-2xl border border-line bg-paper-muted p-7">
              <h2 className="font-display text-xl font-bold tracking-tight text-ink">
                {site.name}
              </h2>
              <p className="mt-1 text-sm text-slatemuted">{site.trade}</p>
              <p className="mt-1 text-sm text-slatemuted tnum">IČO: {site.ico}</p>

              <dl className="mt-6 space-y-4 text-sm">
                <InfoRow icon={MapPin} label="Adresa">
                  {site.street}
                  <br />
                  {site.zip}
                </InfoRow>
                <InfoRow icon={Phone} label="Telefon">
                  <a
                    href={site.phoneHref}
                    className="font-semibold text-ink transition-colors hover:text-accent tnum"
                  >
                    {site.phone}
                  </a>
                </InfoRow>
                <InfoRow icon={Mail} label="E-mail">
                  <a
                    href={site.emailHref}
                    className="font-semibold text-ink transition-colors hover:text-accent"
                  >
                    {site.email}
                  </a>
                </InfoRow>
                <InfoRow icon={Globe} label="Web">
                  {site.web}
                </InfoRow>
                <InfoRow icon={Clock} label="Dostupnost">
                  {site.availability}
                </InfoRow>
                <InfoRow icon={Truck} label="Servis">
                  Jezdím přímo na místo zakázky.
                </InfoRow>
              </dl>
            </div>

            <div className="mt-6 overflow-hidden rounded-2xl border border-line">
              <iframe
                title={`Mapa: ${site.street}, ${site.city}`}
                src={`https://www.google.com/maps?q=${encodeURIComponent(
                  site.mapsQuery,
                )}&output=embed`}
                width="100%"
                height="300"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="block w-full"
              />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function InfoRow({
  icon: Icon,
  label,
  children,
}: {
  icon: typeof MapPin;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-3.5">
      <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white text-accent shadow-sm">
        <Icon className="h-4 w-4" aria-hidden />
      </span>
      <div>
        <dt className="text-xs font-semibold uppercase tracking-wider text-slatemuted">
          {label}
        </dt>
        <dd className="mt-0.5 leading-relaxed text-steel">{children}</dd>
      </div>
    </div>
  );
}
