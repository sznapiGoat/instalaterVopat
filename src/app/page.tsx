import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { Services } from "@/components/sections/Services";
import { Trust } from "@/components/sections/Trust";
import { About } from "@/components/sections/About";
import { Pricing } from "@/components/sections/Pricing";
import { CTABanner } from "@/components/sections/CTABanner";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <Services />
      <Trust />
      <About />
      <Pricing />
      <CTABanner />
    </>
  );
}
