import CoreFeatures from "../components/CoreFeatures";
import Features from "../components/Features";
import Hero from "../components/Hero";
import WhyChooseUs from "../components/WhyChooseUs";

export default function Home() {
 

  return (
    <main className="bg-background ">
      <Hero />
      <Features />
      <CoreFeatures />
      <WhyChooseUs />
     
    </main>
  );
}
