import { useTranslations } from "next-intl";
import CoreFeatures from "../components/CoreFeatures";
import Features from "../components/Features";
import Hero from "../components/Hero";

export default function Home() {
 

  return (
    <main className="bg-background ">
      <Hero />
      <Features />
      <CoreFeatures />
     
    </main>
  );
}
