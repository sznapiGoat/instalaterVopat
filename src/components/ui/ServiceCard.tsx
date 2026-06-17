"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type ServiceCardProps = {
  icon: ReactNode;
  title: string;
  desc: string;
  index?: number;
};

export function ServiceCard({ icon, title, desc, index = 0 }: ServiceCardProps) {
  const reduce = useReducedMotion();

  return (
    <motion.article
      initial={reduce ? false : { y: 24, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.5,
        delay: (index % 3) * 0.09,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={reduce ? undefined : { y: -6 }}
      className="group relative flex flex-col rounded-xl border border-line bg-white p-7 shadow-card transition-colors duration-300 hover:border-accent hover:shadow-card-hover"
    >
      <div className="flex items-center gap-3.5">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-accent-muted text-accent transition-colors duration-300 group-hover:bg-accent group-hover:text-white">
          {icon}
        </span>
        <h3 className="font-display text-xl font-bold tracking-tight text-ink">
          {title}
        </h3>
      </div>
      <p className="mt-4 text-[15px] leading-relaxed text-slatemuted">{desc}</p>
    </motion.article>
  );
}
