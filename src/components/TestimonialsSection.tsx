import { Button } from "@/components/ui/button";
import { Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "JustSay possesses that rare magnetism that transforms every frame into art. Her ethereal beauty and professional grace make her our go-to muse for luxury campaigns.",
      author: "Valentina Romano",
      company: "Maison Lumière",
      role: "Fashion Director"
    },
    {
      quote: "She doesn't just model our designs—she breathes life into them. JustSay's intuitive understanding of fashion and natural elegance are simply breathtaking.",
      author: "Christopher Blake",
      company: "Atelier Noir",
      role: "Creative Director"
    },
    {
      quote: "In twenty years of fashion photography, I've rarely encountered such natural poise and captivating presence. JustSay is a true artist's dream.",
      author: "Amélie Dubois",
      company: "Vogue International",
      role: "Senior Fashion Editor"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
            Industry Acclaim
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Celebrated by fashion's finest—discover why JustSay is the muse of choice for luxury brands worldwide.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="relative p-8 bg-gradient-subtle rounded-lg shadow-elegant hover:shadow-luxury transition-all duration-300"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 left-6">
                <Quote className="h-8 w-8 text-primary opacity-50" />
              </div>

              {/* Quote Content */}
              <div className="pt-12">
                <blockquote className="text-lg text-foreground leading-relaxed mb-6 font-light italic">
                  "{testimonial.quote}"
                </blockquote>
                
                <div className="border-t border-border pt-4">
                  <p className="font-semibold text-foreground text-sm">
                    {testimonial.author}
                  </p>
                  <p className="text-primary text-sm font-medium">
                    {testimonial.company}
                  </p>
                  <p className="text-muted-foreground text-xs">
                    {testimonial.role}
                  </p>
                </div>
              </div>
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
            Connect with JustSay
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;