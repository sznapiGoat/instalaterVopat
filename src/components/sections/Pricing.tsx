import { PhoneCall, MapPinned, ReceiptText } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

const steps = [
  {
    icon: PhoneCall,
    title: "Zavolejte nebo napište",
    desc: "Popište, co potřebujete. Domluvíme se na termínu prohlídky.",
  },
  {
    icon: MapPinned,
    title: "Přijedu se podívat",
    desc: "Prohlídka na místě zdarma. Zjistím rozsah práce a možnosti řešení.",
  },
  {
    icon: ReceiptText,
    title: "Dostanete konkrétní cenu",
    desc: "Materiál i práce přehledně, bez překvapení a skrytých příplatků.",
  },
];

export function Pricing() {
  return (
    <section className="bg-paper-muted py-20 lg:py-28">
      <div className="container-px">
        <Reveal className="max-w-2xl">
          <span className="block h-1 w-12 rounded-full bg-accent" aria-hidden />
          <h2 className="mt-5 font-display text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            Jak funguje nacenění?
          </h2>
        </Reveal>

        <ol className="mt-12 grid gap-6 md:grid-cols-3">
          {steps.map((step, i) => (
            <Reveal
              key={step.title}
              as="li"
              delay={i * 0.08}
              className="relative flex flex-col rounded-xl border border-line bg-white p-7 shadow-card"
            >
              <div className="flex items-center gap-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent text-white">
                  <step.icon className="h-5 w-5" strokeWidth={2} aria-hidden />
                </span>
                <span className="font-display text-3xl font-extrabold tabular-nums text-line">
                  0{i + 1}
                </span>
              </div>
              <h3 className="mt-5 font-display text-lg font-bold tracking-tight text-ink">
                {step.title}
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-slatemuted">
                {step.desc}
              </p>
            </Reveal>
          ))}
        </ol>

        <Reveal delay={0.1}>
          <p className="mx-auto mt-10 max-w-[62ch] rounded-lg border border-line bg-white px-6 py-5 text-center text-sm leading-relaxed text-slatemuted">
            Orientační hodinová sazba instalatérů v regionu:{" "}
            <span className="font-semibold text-ink tnum">250–550 Kč/hod</span>{" "}
            + materiál. Přesnou cenu vždy upřesním po zhlédnutí zakázky.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
