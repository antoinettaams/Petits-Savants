import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import ProblemSolution from "@/components/ProblemSolution";
import Progression from "@/components/Progression";
import MagicDemo from "@/components/MagicDemo";
import HowItWorks from "@/components/HowItWorks";
import SkillsGrid from "@/components/SkillsGrid";
import Benefits from "@/components/Benefits";
import Comparison from "@/components/Comparison";
import Audiences from "@/components/Audiences";
import KeyStats from "@/components/KeyStats";
import Testimonials from "@/components/Testimonials";
import Guarantee from "@/components/Guarantee";
import Offers from "@/components/Offers";
import BackToSchoolOffer from "@/components/BackToSchoolOffer";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";

// Landing page de vente mono-produit — une seule page scrollable.
// Chaque section est un composant séparé dans /components pour rester
// facile à modifier ou réordonner.
export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <ProblemSolution />
      <Progression />
      <MagicDemo />
      <HowItWorks />
      <SkillsGrid />
      <Benefits />
      <Comparison />
      <Audiences />
      <KeyStats />
      <Testimonials />
      <Guarantee />
      <Offers />
      <BackToSchoolOffer />
      <FAQ />
      <FinalCTA />
    </>
  );
}
