import Navigation from "@/components/Navigation";
import S2HeroSection from "@/components/session-2/S2HeroSection";
import S2FundamentalsSection from "@/components/session-2/S2FundamentalsSection";
import S2DesignSection from "@/components/session-2/S2DesignSection";
import S2AnatomySection from "@/components/session-2/S2AnatomySection";
import S2WritingSection from "@/components/session-2/S2WritingSection";
import S2DemoSection from "@/components/session-2/S2DemoSection";
import S2PatternsSection from "@/components/session-2/S2PatternsSection";
import S2TroubleshootingSection from "@/components/session-2/S2TroubleshootingSection";
import S2LaunchSection from "@/components/session-2/S2LaunchSection";
import Footer from "@/components/Footer";
import { LanguageProvider } from "@/contexts/LanguageContext";

const navItems = [
  { id: "s2-fundamentals", label: "Fundamentals", num: "01" },
  { id: "s2-design", label: "Design", num: "02" },
  { id: "s2-anatomy", label: "Anatomy", num: "03" },
  { id: "s2-writing", label: "Writing", num: "04" },
  { id: "s2-demo", label: "Demo", num: "" },
  { id: "s2-patterns", label: "Patterns", num: "05" },
  { id: "s2-troubleshooting", label: "Debug", num: "06" },
  { id: "s2-launch", label: "Launch", num: "07" },
];

export default function Session2() {
  return (
    <LanguageProvider>
      <Navigation navItems={navItems} showLanguageToggle />
      <main>
        <S2HeroSection />
        <div className="section-divider" />
        <S2FundamentalsSection />
        <div className="section-divider" />
        <S2DesignSection />
        <div className="section-divider" />
        <S2AnatomySection />
        <div className="section-divider" />
        <S2WritingSection />
        <div className="section-divider" />
        <S2DemoSection />
        <div className="section-divider" />
        <S2PatternsSection />
        <div className="section-divider" />
        <S2TroubleshootingSection />
        <div className="section-divider" />
        <S2LaunchSection />
      </main>
      <Footer />
    </LanguageProvider>
  );
}
