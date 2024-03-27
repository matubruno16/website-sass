import ClientLogos from "../components/ClientLogos";
import CoreFeatures from "../components/CoreFeatures";
import Features from "../components/Features";
import Hero from "../components/Hero";
import SalesModules from "../components/SalesModules";
import WhyChooseUs from "../components/WhyChooseUs";
import Globe from "../components/Globe";
import HeroBrian from "./hero/page";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <CoreFeatures />
      <WhyChooseUs />
      <ClientLogos />
      <SalesModules />
      <Globe />
      <section className="absolute w-full h-full overflow-hidden">
      <HeroBrian />

      </section>
    </>
  );
}
