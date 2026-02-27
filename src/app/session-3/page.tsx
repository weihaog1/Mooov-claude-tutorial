import Navigation from "@/components/Navigation";
import S3HeroSection from "@/components/session-3/S3HeroSection";
import S3SystemPromptsSection from "@/components/session-3/S3SystemPromptsSection";
import S3ChainingSection from "@/components/session-3/S3ChainingSection";
import S3ContextSection from "@/components/session-3/S3ContextSection";
import S3EvaluationSection from "@/components/session-3/S3EvaluationSection";
import S3PatternsSection from "@/components/session-3/S3PatternsSection";
import S3ToolkitSection from "@/components/session-3/S3ToolkitSection";
import Footer from "@/components/Footer";
import { LanguageProvider } from "@/contexts/LanguageContext";

const navItems = [
  { id: "s3-system-prompts", label: "System Prompts", num: "01" },
  { id: "s3-chaining", label: "Chaining", num: "02" },
  { id: "s3-context", label: "Context", num: "03" },
  { id: "s3-evaluation", label: "Evaluation", num: "04" },
  { id: "s3-patterns", label: "Patterns", num: "05" },
  { id: "s3-toolkit", label: "Toolkit", num: "06" },
];

export default function Session3() {
  return (
    <LanguageProvider>
      <Navigation navItems={navItems} showLanguageToggle />
      <main>
        <S3HeroSection />
        <div className="section-divider" />
        <S3SystemPromptsSection />
        <div className="section-divider" />
        <S3ChainingSection />
        <div className="section-divider" />
        <S3ContextSection />
        <div className="section-divider" />
        <S3EvaluationSection />
        <div className="section-divider" />
        <S3PatternsSection />
        <div className="section-divider" />
        <S3ToolkitSection />
      </main>
      <Footer />
    </LanguageProvider>
  );
}
