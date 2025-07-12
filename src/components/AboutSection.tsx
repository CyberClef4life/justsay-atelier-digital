import { Button } from "@/components/ui/button";
import { CheckCircle, Star, Globe, Users } from "lucide-react";

const AboutSection = () => {
  const achievements = [
    { icon: Star, text: "Featured in International Fashion Magazines" },
    { icon: Globe, text: "Luxury Brand Ambassador & Campaigns" },
    { icon: Users, text: "1M+ Fashion-Forward Followers" },
    { icon: CheckCircle, text: "Haute Couture Runway Specialist" }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section Header */}
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-8">
            A Muse Beyond Compare
          </h2>

          {/* Introduction */}
          <div className="space-y-6 mb-12">
            <p className="text-xl md:text-2xl text-foreground leading-relaxed font-light">
              Meet JustSay—a model whose ethereal beauty and magnetic presence transform every lens into poetry, 
              every campaign into art.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              From haute couture catwalks to luxury brand campaigns, she embodies the perfect fusion of elegance, 
              sensuality, and sophistication that fashion's elite seek for their most prestigious projects.
            </p>
          </div>

          {/* Achievements Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {achievements.map((achievement, index) => (
              <div 
                key={index}
                className="flex flex-col items-center text-center p-6 bg-background rounded-lg shadow-elegant hover:shadow-luxury transition-all duration-300 hover:transform hover:scale-105"
              >
                <achievement.icon className="h-12 w-12 text-primary mb-4" />
                <p className="text-sm font-medium text-foreground leading-relaxed">
                  {achievement.text}
                </p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <Button 
              variant="elegant" 
              size="lg"
              className="text-lg px-8 py-4 h-auto"
              onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Discover the Muse
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;