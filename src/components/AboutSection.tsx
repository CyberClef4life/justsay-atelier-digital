import { Button } from "@/components/ui/button";
import { CheckCircle, Star, Globe, Users } from "lucide-react";

const AboutSection = () => {
  const achievements = [
    { icon: Star, text: "Featured on International Vogue Covers" },
    { icon: Globe, text: "Global Campaigns with Luxury Brands" },
    { icon: Users, text: "1M+ Engaged Social Following" },
    { icon: CheckCircle, text: "Exclusive Couture Runway Experience" }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section Header */}
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-8">
            An Icon in the Making
          </h2>

          {/* Introduction */}
          <div className="space-y-6 mb-12">
            <p className="text-xl md:text-2xl text-foreground leading-relaxed font-light">
              Meet JustSay—an icon in the making whose authentic grace and commanding presence 
              transform every campaign into a masterpiece.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              From the most prestigious runways of Paris to the intimate studios of renowned photographers, 
              JustSay embodies the perfect fusion of professional excellence and genuine warmth that today's 
              luxury brands seek to capture.
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
              Discover Her Story
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;