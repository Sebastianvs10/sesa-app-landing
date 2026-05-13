import { Hero } from "@/components/sections/Hero";
import { TrustedBy } from "@/components/sections/TrustedBy";
import { Features } from "@/components/sections/Features";
import { Stats } from "@/components/sections/Stats";
import { Integrations } from "@/components/sections/Integrations";
import { Pricing } from "@/components/sections/Pricing";
import { Testimonials } from "@/components/sections/Testimonials";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustedBy />
      <Features />
      <Stats />
      <Integrations />
      <Pricing />
      <Testimonials />
      <CtaBanner />
      <Footer />
    </>
  );
}
