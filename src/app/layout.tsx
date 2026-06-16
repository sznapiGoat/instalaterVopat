import type { Metadata } from "next";
import { Archivo, Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { DemoBadge } from "@/components/ui/DemoBadge";

const display = Archivo({
  subsets: ["latin", "latin-ext"],
  variable: "--font-display",
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const sans = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://instalater-vopat.cz"),
  title: {
    default: "Martin Vopat — Instalatérství, topenářství, plyn | Plzeň",
    template: "%s | Martin Vopat — Instalatér Plzeň",
  },
  description:
    "Instalatér, topenář a plynař v Plzni a okolí. Vodoinstalace, topení, plyn a rekonstrukce koupelen. Jedu na místo, cenu řeknu až po prohlídce. Tel: +420 605 748 129.",
  keywords: [
    "instalatér Plzeň",
    "topenář Plzeň",
    "plynař Plzeň",
    "rekonstrukce koupelny Plzeň",
    "vodoinstalace",
    "Martin Vopat",
  ],
  openGraph: {
    title: "Martin Vopat — Instalatérství, topenářství, plyn",
    description:
      "Spolehlivý instalatér v Plzni a okolí. Voda, topení, plyn a koupelny na klíč.",
    locale: "cs_CZ",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs">
      <body
        className={`${display.variable} ${sans.variable} bg-paper font-sans text-steel antialiased`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
        <DemoBadge />
      </body>
    </html>
  );
}
