import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section Header */}
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
            Your Next Muse Awaits
          </h2>
          
          <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Ready to create something extraordinary? JustSay is available for luxury campaigns, 
            editorial shoots, and exclusive brand partnerships that define elegance.
          </p>

          {/* Contact Options */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-gold rounded-full mb-4">
                <Mail className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Booking & Representation</h3>
              <p className="text-muted-foreground text-sm">
                Fashion campaigns, editorial shoots, and brand collaborations
              </p>
            </div>

            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-gold rounded-full mb-4">
                <Phone className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Agency Direct Line</h3>
              <p className="text-muted-foreground text-sm">
                Priority response for casting directors and fashion agencies
              </p>
            </div>

            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-gold rounded-full mb-4">
                <MapPin className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">International Shoots</h3>
              <p className="text-muted-foreground text-sm">
                Available for fashion weeks, luxury campaigns, and editorial shoots worldwide
              </p>
            </div>
          </div>

          {/* Primary CTA */}
          <div className="space-y-6">
            <Button 
              variant="luxury" 
              size="lg"
              className="text-xl px-12 py-6 h-auto"
              onClick={() => window.location.href = 'mailto:concierge@saymodel.com?subject=Modeling Inquiry for JustSay'}
            >
              Book JustSay Now
            </Button>
            
            {/* Fallback Contact */}
            <p className="text-muted-foreground">
              Or email{" "}
              <a 
                href="mailto:concierge@saymodel.com" 
                className="text-primary hover:underline font-medium"
              >
                concierge@saymodel.com
              </a>
              {" "}directly for immediate assistance
            </p>
          </div>

          {/* Additional Info */}
          <div className="mt-12 p-6 bg-background/50 rounded-lg border border-border">
            <p className="text-sm text-muted-foreground leading-relaxed">
              <strong className="text-foreground">Modeling Schedule:</strong> JustSay accepts bookings 2-4 weeks in advance for optimal preparation. 
              Priority scheduling available for established fashion houses and luxury brands. 
              All inquiries are handled with complete discretion and professionalism.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;