"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { nav, site } from "@/lib/site";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-all duration-300",
        scrolled
          ? "border-b border-line bg-white/85 shadow-[0_1px_20px_-8px_rgba(15,23,42,0.25)] backdrop-blur-md"
          : "border-b border-transparent bg-white/0",
      )}
    >
      <div className="container-px flex h-16 items-center justify-between lg:h-[72px]">
        <Link
          href="/"
          className="group flex items-center gap-2.5"
          onClick={() => setOpen(false)}
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-md bg-white shadow-sm ring-1 ring-line">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/logo1.svg"
              alt="Logo Martin Vopat"
              className="h-8 w-8"
            />
          </span>
          <span className="leading-tight">
            <span className="block font-display text-base font-bold tracking-tight text-ink">
              {site.name}
            </span>
            <span className="block text-[11px] font-medium uppercase tracking-wider text-slatemuted">
              Instalatérství {site.city}
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-steel transition-colors hover:text-accent"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={site.phoneHref}
            className="hidden items-center gap-2 rounded-md bg-accent px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-accent-light sm:inline-flex"
          >
            <Phone className="h-4 w-4" strokeWidth={2.2} aria-hidden />
            Zavolat nyní
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md text-ink transition-colors hover:bg-paper-muted md:hidden"
            aria-label={open ? "Zavřít menu" : "Otevřít menu"}
            aria-expanded={open}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="overflow-hidden border-t border-line bg-white md:hidden"
          >
            <div className="container-px flex flex-col gap-1 py-4">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-3 py-3 text-base font-medium text-steel transition-colors hover:bg-paper-muted hover:text-accent"
                >
                  {item.label}
                </Link>
              ))}
              <a
                href={site.phoneHref}
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-md bg-accent px-4 py-3.5 text-base font-semibold text-white"
              >
                <Phone className="h-5 w-5" aria-hidden />
                {site.phone}
              </a>
            </div>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
