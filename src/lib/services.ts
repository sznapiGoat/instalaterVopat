import {
  Droplets,
  Flame,
  Gauge,
  Bath,
  ArrowDownToLine,
  Hammer,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  icon: LucideIcon;
  title: string;
  desc: string;
};

export const services: Service[] = [
  {
    icon: Droplets,
    title: "Vodoinstalace",
    desc: "Opravy a rekonstrukce vodovodního potrubí, stoupačky, ležaté rozvody i novostavby.",
  },
  {
    icon: Flame,
    title: "Topenářství",
    desc: "Montáž kompletních topných systémů a ústředního vytápění, demontáž starých rozvodů.",
  },
  {
    icon: Gauge,
    title: "Plynařské práce",
    desc: "Rozvody plynu a odborné revize plynových zařízení s platným oprávněním.",
  },
  {
    icon: Bath,
    title: "Koupelny na klíč",
    desc: "Kompletní rekonstrukce koupelen a přestavby starých umakartových jader.",
  },
  {
    icon: ArrowDownToLine,
    title: "Kanalizace",
    desc: "Vnitřní i venkovní kanalizační rozvody a jejich opravy.",
  },
  {
    icon: Hammer,
    title: "Zednické práce",
    desc: "Drobné stavební úpravy, přípravné a začišťovací práce navázané na instalace.",
  },
];

export type DetailedService = {
  id: string;
  icon: LucideIcon;
  title: string;
  intro: string;
  bullets: string[];
  image: string;
  imageLabel: string;
  badge?: string;
};

export const detailedServices: DetailedService[] = [
  {
    id: "vodoinstalace",
    icon: Droplets,
    title: "Vodoinstalace a kanalizace",
    intro:
      "Od drobné opravy po kompletní rozvody v novostavbě. Postarám se o vodu i odpady tak, aby vše dlouho a spolehlivě sloužilo.",
    bullets: [
      "Kompletní opravy a rekonstrukce venkovních i vnitřních vodovodních potrubí",
      "Instalace a výměny vodovodních stoupaček v bytových domech",
      "Montáže a rekonstrukce ležatých instalatérských rozvodů",
      "Realizace nových bytových vodovodních rozvodů při novostavbách i přestavbách",
    ],
    image: "voda.jpg",
    imageLabel: "Vodovodní instalace",
  },
  {
    id: "topenarstvi",
    icon: Flame,
    title: "Topenářství",
    intro:
      "Navrhnu a postavím topný systém na míru vašemu domu. Stará tělesa a rozvody odvezu a zlikviduji.",
    bullets: [
      "Montáž kompletních topných systémů a ústředního vytápění",
      "Demontáž a likvidace starých topných rozvodů a těles",
    ],
    image: "topeni.jpg",
    imageLabel: "Topný systém a radiátory",
  },
  {
    id: "plyn",
    icon: Gauge,
    title: "Plynařské práce",
    intro:
      "Plyn vyžaduje odbornost a pořádek. Rozvody i revize provádím s platným oprávněním a vždy s důrazem na bezpečnost.",
    bullets: [
      "Plynařské práce a rozvody plynu",
      "Odborné revize plynových zařízení",
    ],
    image: "plyn.jpg",
    imageLabel: "Plynové rozvody a revize",
    badge: "Odborné oprávnění",
  },
  {
    id: "koupelny",
    icon: Bath,
    title: "Koupelny na klíč",
    intro:
      "Starou koupelnu proměním v novou bez starostí. Zajistím vše od bourání jádra po finální začištění.",
    bullets: [
      "Celkové renovace a rekonstrukce koupelen",
      "Přestavby starých umakartových bytových jader",
      "Drobné zednické, přípravné a začišťovací stavební práce",
    ],
    image: "koupelna.jpg",
    imageLabel: "Hotová rekonstrukce koupelny",
  },
];
