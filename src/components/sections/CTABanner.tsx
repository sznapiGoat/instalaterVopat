import Image from "next/image";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { site } from "@/lib/site";

export function CTABanner() {
  return (
    <section className="relative isolate overflow-hidden bg-ink py-20 lg:py-24">
      <Image
        src="/images/vopat1.jpg"
        alt="Panorama Plzně za soumraku"
        fill
        sizes="100vw"
        className="-z-10 object-cover object-center"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-r from-ink/95 via-accent/85 to-accent/80"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-10"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      <div className="container-px">
        <Reveal className="flex flex-col items-center gap-6 text-center lg:flex-row lg:justify-between lg:text-left">
          <div className="max-w-xl">
            <h2 className="font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Potřebujete instalatéra v Plzni?
            </h2>
            <p className="mt-3 text-lg text-blue-100">
              Zavolejte nebo napište. Ozvu se co nejdříve.
            </p>
          </div>
          <div className="flex flex-col items-center gap-4 sm:flex-row">
            <a
              href={site.phoneHref}
              className="flex items-center gap-2.5 font-display text-2xl font-extrabold tracking-tight text-white tnum sm:text-3xl"
            >
              <Phone className="h-6 w-6" strokeWidth={2.2} aria-hidden />
              {site.phoneShort}
            </a>
            <Button href="/kontakt" variant="white">
              Kontaktovat
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
