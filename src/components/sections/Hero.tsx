"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Mail, MapPin, Phone, ReceiptText, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { site } from "@/lib/site";

const trustPoints = [
  { icon: ShieldCheck, label: "Řemeslné oprávnění", note: "plyn · voda · topení" },
  { icon: MapPin, label: "Plzeň a okolí", note: "místní řemeslník" },
  { icon: ReceiptText, label: "Cena až po prohlídce", note: "bez paušálních příplatků" },
];

export function Hero() {
  const reduce = useReducedMotion();
  const stagger = {
    hidden: {},
    show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
  };
  const item = {
    hidden: reduce ? {} : { y: 22 },
    show: {
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  return (
    <section className="relative isolate flex min-h-dvh items-center overflow-hidden bg-ink">
      <Image
        src="/images/vopat2.jpg"
        alt="Martin Vopat při instalatérské práci na potrubí"
        fill
        priority
        sizes="100vw"
        className="-z-10 object-cover object-center"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage:
            "radial-gradient(55% 55% at 80% 14%, rgba(59,130,246,0.16), transparent 60%)",
        }}
      />

      {/* dark scrim — wraps the content so it is an ancestor background (guarantees text contrast over the photo) */}
      <div
        className="absolute inset-0 flex items-center"
        style={{
          backgroundImage:
            "linear-gradient(to right, #0F172A 0%, #0F172A 52%, rgba(15,23,42,0.62) 78%, rgba(15,23,42,0.3) 100%)",
        }}
      >
        <div className="container-px grid w-full items-center gap-12 pt-28 pb-20 lg:grid-cols-[1.15fr_0.85fr] lg:pt-32 lg:pb-28">
        <motion.div variants={stagger} initial="hidden" animate="show">
          <motion.span
            variants={item}
            className="inline-flex items-center gap-2.5 text-sm font-semibold text-accent-light"
          >
            <span className="h-px w-8 bg-accent-light" aria-hidden />
            Voda · Topení · Plyn · {site.city}
          </motion.span>

          <motion.h1
            variants={item}
            className="mt-5 font-display text-[2.6rem] font-extrabold leading-[1.03] tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            Voda, topení, plyn.
            <br />
            <span className="text-accent-light">Spolehlivě v Plzni.</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-md text-lg leading-relaxed text-slate-100"
          >
            Martin Vopat, instalatér s dlouholetou praxí. Jedu na místo, cenu
            řeknu až po prohlídce.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
            <Button href="/kontakt" variant="primary">
              Nezávazná poptávka
            </Button>
            <Button href="/sluzby" variant="outline">
              Zobrazit služby
            </Button>
          </motion.div>

          <motion.div variants={item} className="mt-9 flex flex-col gap-2.5">
            <a
              href={site.phoneHref}
              className="group inline-flex w-fit items-center gap-3 text-white"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/20 transition-colors group-hover:bg-accent">
                <Phone className="h-5 w-5" strokeWidth={2.2} aria-hidden />
              </span>
              <span className="font-display text-2xl font-bold tracking-tight tnum sm:text-3xl">
                {site.phone}
              </span>
            </a>
            <a
              href={site.emailHref}
              className="inline-flex w-fit items-center gap-2 pl-1 text-sm text-slate-300 transition-colors hover:text-white"
            >
              <Mail className="h-4 w-4" aria-hidden />
              {site.email}
            </a>
          </motion.div>
        </motion.div>

        {/* trust card — fills the composition, reinforces credibility */}
        <motion.aside
          initial={reduce ? false : { y: 28 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="relative hidden rounded-2xl border border-white/10 bg-steel/95 p-7 shadow-2xl ring-1 ring-white/5 backdrop-blur-md lg:block"
        >
          <span
            aria-hidden
            className="absolute inset-x-7 top-0 h-0.5 rounded-full bg-accent"
          />
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-blue-300">
            {site.availability}
          </p>
          <p className="mt-2 font-display text-xl font-bold text-white">
            Proč zavolat mně
          </p>

          <ul className="mt-6 space-y-5">
            {trustPoints.map((point) => (
              <li key={point.label} className="flex items-start gap-3.5">
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent/15 text-accent-light ring-1 ring-accent/25">
                  <point.icon className="h-5 w-5" strokeWidth={2} aria-hidden />
                </span>
                <span>
                  <span className="block font-semibold text-white">
                    {point.label}
                  </span>
                  <span className="block text-sm text-slate-300">
                    {point.note}
                  </span>
                </span>
              </li>
            ))}
          </ul>
        </motion.aside>
        </div>
      </div>
    </section>
  );
}
