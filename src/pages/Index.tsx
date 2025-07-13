import ParallaxBackground from "@/components/ParallaxBackground";
import MinimalistNavigation from "@/components/MinimalistNavigation";
import MinimalistHero from "@/components/MinimalistHero";
import MinimalistPortfolio from "@/components/MinimalistPortfolio";
import MinimalistAbout from "@/components/MinimalistAbout";
import MakeupArtistSection from "@/components/MakeupArtistSection";
import MinimalistContact from "@/components/MinimalistContact";
import MinimalistFooter from "@/components/MinimalistFooter";
import FloatingButtons from "@/components/FloatingButtons";

const Index = () => {
  return (
    <div className="min-h-screen bg-white relative">
      <ParallaxBackground />
      <div className="relative z-10">
        <MinimalistNavigation />
        <MinimalistHero />
        <MinimalistPortfolio />
        <MinimalistAbout />
        <MakeupArtistSection />
        <MinimalistContact />
        <MinimalistFooter />
        <FloatingButtons />
      </div>
    </div>
  );
};

export default Index;