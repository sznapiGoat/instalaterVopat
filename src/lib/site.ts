export const site = {
  name: "Martin Vopat",
  trade: "Instalatérství, topenářství, plyn",
  city: "Plzeň",
  phone: "+420 605 748 129",
  phoneHref: "tel:+420605748129",
  phoneShort: "605 748 129",
  email: "plynservis.vopat@gmail.com",
  emailHref: "mailto:plynservis.vopat@gmail.com",
  web: "instalater-vopat.cz",
  ico: "73432881",
  street: "Rolnické náměstí 8/14",
  zip: "312 00 Plzeň – Lobzy",
  availability: "Po–Pá po telefonické domluvě",
  mapsQuery: "Rolnické náměstí 8/14, 312 00 Plzeň",
} as const;

export const nav = [
  { label: "Úvod", href: "/" },
  { label: "Služby", href: "/sluzby" },
  { label: "O mně", href: "/#o-mne" },
  { label: "Kontakt", href: "/kontakt" },
] as const;
