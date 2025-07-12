import { Button } from "@/components/ui/button";
import portfolioAdvertising from "@/assets/portfolio-advertising.jpg";
import portfolioFashion from "@/assets/portfolio-fashion.jpg";
import portfolioSports from "@/assets/portfolio-sports.jpg";
import portfolioLingerie from "@/assets/portfolio-lingerie.jpg";
import portfolioPortrait from "@/assets/portfolio-portrait.jpg";
import portfolioRunway from "@/assets/portfolio-runway.jpg";

const PortfolioSection = () => {
  const portfolioItems = [
    {
      id: "advertising",
      title: "Advertising",
      image: portfolioAdvertising,
      description: "Premium brand campaigns and commercial excellence"
    },
    {
      id: "fashion",
      title: "Fashion/Lifestyle",
      image: portfolioFashion,
      description: "Editorial sophistication meets lifestyle luxury"
    },
    {
      id: "sports",
      title: "Sports",
      image: portfolioSports,
      description: "Athletic elegance and performance luxury"
    },
    {
      id: "lingerie",
      title: "Lingerie/Swimwear",
      image: portfolioLingerie,
      description: "Intimate luxury with artistic sophistication"
    },
    {
      id: "portrait",
      title: "Portrait",
      image: portfolioPortrait,
      description: "Captivating headshots and beauty campaigns"
    },
    {
      id: "runway",
      title: "Runway",
      image: portfolioRunway,
      description: "Haute couture and fashion week excellence"
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
            A Portfolio of Distinction
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Step into an atelier of moments, where each image captures an invitation to luxury. 
            Discover the artistry that defines JustSay's extraordinary journey.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {portfolioItems.map((item, index) => (
            <div 
              key={item.id}
              id={`portfolio-${item.id}`}
              className="group relative overflow-hidden rounded-lg shadow-elegant hover:shadow-luxury transition-all duration-500 hover:transform hover:scale-105"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img 
                  src={item.image} 
                  alt={`${item.title} - ${item.description}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="font-serif text-2xl font-semibold mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm opacity-90 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button 
            variant="luxury" 
            size="lg"
            className="text-lg px-8 py-4 h-auto"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Explore the Collection
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;