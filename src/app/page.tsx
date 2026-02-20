import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import SetupSection from "@/components/SetupSection";
import IntroSection from "@/components/IntroSection";
import ComparisonSection from "@/components/ComparisonSection";
import PromptSection from "@/components/PromptSection";
import AdvancedSection from "@/components/AdvancedSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <HeroSection />
        <div className="section-divider" />
        <SetupSection />
        <div className="section-divider" />
        <IntroSection />
        <div className="section-divider" />
        <ComparisonSection />
        <div className="section-divider" />
        <PromptSection />
        <div className="section-divider" />
        <AdvancedSection />
      </main>
      <Footer />
    </>
  );
}
