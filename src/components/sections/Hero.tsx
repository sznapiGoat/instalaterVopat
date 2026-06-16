"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Placeholder } from "@/components/ui/Placeholder";
import { site } from "@/lib/site";

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
      {/* hero.jpg background — placeholder until client photo arrives */}
      <Placeholder
        file="hero.jpg"
        label="Instalatérská práce na místě"
        className="absolute inset-0 -z-10 h-full w-full"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-slate-900/70"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-r from-ink/85 via-ink/55 to-transparent"
      />

      <div className="container-px w-full pt-28 pb-20 lg:pt-32 lg:pb-28">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="max-w-2xl"
        >
          <motion.span
            variants={item}
            className="inline-flex items-center gap-2.5 text-sm font-semibold text-accent-light"
          >
            <span className="h-px w-8 bg-accent-light" aria-hidden />
            Voda · Topení · Plyn · {site.city}
          </motion.span>

          <motion.h1
            variants={item}
            className="mt-5 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            Voda, topení, plyn.
            <br />
            <span className="text-accent-light">Spolehlivě v Plzni.</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-lg leading-relaxed text-slate-200/90"
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

          <motion.div variants={item} className="mt-10 flex flex-col gap-3">
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
              className="inline-flex w-fit items-center gap-2 text-sm text-slate-300 transition-colors hover:text-white"
            >
              <Mail className="h-4 w-4" aria-hidden />
              {site.email}
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
