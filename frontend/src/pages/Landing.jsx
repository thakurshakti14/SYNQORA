import Navbar from "@/components/site/Navbar";
import Hero from "@/components/site/Hero";
// import TrustBar from "@/components/site/TrustBar"; // kept for future use
// import Problem from "@/components/site/Problem";
import Solution from "@/components/site/Solution";
import PlatformOverview from "@/components/site/PlatformOverview";
import WhySynqora from "@/components/site/WhySynqora";
import HowItWorks from "@/components/site/HowItWorks";
import DashboardShowcase from "@/components/site/DashboardShowcase";
import FeatureGrid from "@/components/site/FeatureGrid";
import Pricing from "@/components/site/Pricing";
// import SocialProof from "@/components/site/SocialProof"; // kept for future use
import FAQSection from "@/components/site/FAQSection";
import FinalCTA from "@/components/site/FinalCTA";
import Footer from "@/components/site/Footer";

export default function Landing() {
  return (
    <div className="min-h-screen bg-[#0B0F17] text-white" data-testid="landing-page">
      <Navbar />
      <main>
        <Hero />
        {/* <TrustBar /> */} 
        <PlatformOverview />
        <Solution />
        <DashboardShowcase />
        <WhySynqora />
        <HowItWorks />
        <FeatureGrid />
        <Pricing />
        {/* <SocialProof /> */}
        <FAQSection />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
