import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { Reveal } from "@/components/ui/Reveal";

type Stat = {
  value?: number;
  suffix?: string;
  display?: string;
  label: string;
};

const stats: Stat[] = [
  { value: 4, label: "oblasti služeb" },
  { value: 0, label: "paušálních příplatků" },
  { value: 100, suffix: "%", label: "individuální nacenění" },
  { display: "Plzeň", label: "a okolí" },
];

export function Stats() {
  return (
    <section className="border-t-2 border-accent bg-ink">
      <div className="container-px grid grid-cols-2 py-14 lg:grid-cols-4 lg:py-16">
        {stats.map((stat, i) => (
          <Reveal
            key={stat.label}
            delay={i * 0.08}
            className="px-2 py-3 text-center sm:px-6 lg:border-l lg:border-white/10 lg:py-0 lg:text-left lg:first:border-l-0"
          >
            <div className="font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
              {stat.display ? (
                stat.display
              ) : (
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              )}
            </div>
            <div className="mt-2 text-sm text-slate-400">{stat.label}</div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
