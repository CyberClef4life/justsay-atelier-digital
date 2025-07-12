import { Button } from "@/components/ui/button";
import { Camera, Palette, Sparkles, Monitor } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Camera,
      title: "Fashion Editorial",
      description: "Haute couture editorials and luxury fashion campaigns that breathe life into designer visions with ethereal grace."
    },
    {
      icon: Palette,
      title: "Beauty & Cosmetics",
      description: "Radiant beauty campaigns showcasing makeup, skincare, and fragrance with captivating allure and sophistication."
    },
    {
      icon: Sparkles,
      title: "Runway Modeling",
      description: "Commanding presence on international runways for fashion weeks and designer showcases worldwide."
    },
    {
      icon: Monitor,
      title: "Luxury Campaigns",
      description: "Premium brand ambassadorships and high-end commercial work for discerning fashion and lifestyle clients."
    }
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
            Signature Modeling Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From intimate beauty shoots to grand fashion spectacles, JustSay brings unparalleled artistry 
            and magnetic presence to every collaboration.
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
            Book Your Muse
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;