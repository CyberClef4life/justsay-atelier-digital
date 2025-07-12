import { Button } from "@/components/ui/button";
import { Camera, Palette, Sparkles, Monitor } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Camera,
      title: "Runway Excellence",
      description: "High-fashion shows, designer collections, and couture presentations with commanding presence and professional grace."
    },
    {
      icon: Palette,
      title: "Editorial Sophistication",
      description: "Magazine shoots, luxury brand editorials, and artistic collaborations that capture authentic elegance."
    },
    {
      icon: Sparkles,
      title: "Beauty & Lifestyle",
      description: "Cosmetics campaigns, luxury lifestyle imagery, and brand storytelling with genuine warmth and allure."
    },
    {
      icon: Monitor,
      title: "Digital Excellence",
      description: "Social media campaigns, digital marketing content, and influencer collaborations with premium engagement."
    }
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
            Crafting Bespoke Campaigns
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Every collaboration is tailored to create extraordinary moments that resonate with luxury audiences 
            and elevate brand narratives to new heights.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {services.map((service, index) => (
            <div 
              key={index}
              className="text-center p-8 bg-background rounded-lg shadow-elegant hover:shadow-luxury transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-gold rounded-full mb-6">
                <service.icon className="h-8 w-8 text-primary-foreground" />
              </div>
              
              <h3 className="font-serif text-xl font-semibold text-foreground mb-4">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed text-sm">
                {service.description}
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
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Envision Your Campaign
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;