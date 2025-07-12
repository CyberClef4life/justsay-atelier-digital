import ParallaxBackground from "@/components/ParallaxBackground";
import MinimalistNavigation from "@/components/MinimalistNavigation";
import MinimalistHero from "@/components/MinimalistHero";
import MinimalistPortfolio from "@/components/MinimalistPortfolio";
import MinimalistAbout from "@/components/MinimalistAbout";
import MinimalistContact from "@/components/MinimalistContact";
import MinimalistFooter from "@/components/MinimalistFooter";

const Index = () => {
  return (
    <div className="min-h-screen bg-white relative">
      <ParallaxBackground />
      <div className="relative z-10">
        <MinimalistNavigation />
        <MinimalistHero />
        <MinimalistPortfolio />
        <MinimalistAbout />
        <MinimalistContact />
        <MinimalistFooter />
      </div>
    </div>
  );
};

export default Index;