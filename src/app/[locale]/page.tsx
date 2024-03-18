import ClientLogos from "../components/ClientLogos";
import CoreFeatures from "../components/CoreFeatures";
import Features from "../components/Features";
import Hero from "../components/Hero";
import SalesModules from "../components/SalesModules";
import WhyChooseUs from "../components/WhyChooseUs";

export default function Home() {
  return (
    <main className="bg-background ">
      <Hero />
      <Features />
      <CoreFeatures />
      <WhyChooseUs />
      <ClientLogos />
      <SalesModules />
    </main>
  );
}
