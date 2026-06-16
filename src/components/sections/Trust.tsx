import { HandHelping, MapPin, ReceiptText, ShieldCheck } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

const reasons = [
  {
    icon: HandHelping,
    title: "Přijedu osobně",
    desc: "Žádní subdodavatelé. Na každou zakázku jedu sám a ručím za ni.",
  },
  {
    icon: ShieldCheck,
    title: "Řemeslné oprávnění",
    desc: "Plyn, vodu i topení řeším odborně, bezpečně a s platným oprávněním.",
  },
  {
    icon: ReceiptText,
    title: "Cena až po prohlídce",
    desc: "Žádné paušály ani skryté příplatky. Prohlídka na místě je zdarma.",
  },
  {
    icon: MapPin,
    title: "Plzeň a okolí",
    desc: "Místní řemeslník, kterého snadno seženete a který se rychle ozve.",
  },
];

export function Trust() {
  return (
    <section className="bg-paper-muted py-20 lg:py-28">
      <div className="container-px">
        <Reveal className="max-w-2xl">
          <span className="block h-1 w-12 rounded-full bg-accent" aria-hidden />
          <h2 className="mt-5 font-display text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            Proč si vybrat mě
          </h2>
          <p className="mt-4 max-w-[46ch] text-lg leading-relaxed text-slatemuted">
            Řemeslník, na kterého je spoleh, ne velká firma s drahým ceníkem.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason, i) => (
            <Reveal key={reason.title} delay={(i % 4) * 0.07}>
              <div className="flex items-center gap-3.5">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-accent-muted text-accent">
                  <reason.icon className="h-5 w-5" strokeWidth={2} aria-hidden />
                </span>
                <h3 className="font-display text-lg font-bold leading-tight tracking-tight text-ink">
                  {reason.title}
                </h3>
              </div>
              <p className="mt-4 text-[15px] leading-relaxed text-slatemuted">
                {reason.desc}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
