import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon, ArrowLeft } from "lucide-react";
import { format } from "date-fns";

const Booking = () => {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    eventType: '',
    location: '',
    budget: '',
    duration: '',
    additionalInfo: ''
  });

  const services = [
    { id: 'fashion-editorial', name: 'Fashion Editorial', price: 'From $2,500' },
    { id: 'beauty-cosmetics', name: 'Beauty & Cosmetics', price: 'From $2,000' },
    { id: 'runway-modeling', name: 'Runway Modeling', price: 'From $3,000' },
    { id: 'luxury-campaigns', name: 'Luxury Campaigns', price: 'From $5,000' },
    { id: 'bridal-makeup', name: 'Bridal Makeup', price: 'From $800' },
    { id: 'editorial-makeup', name: 'Editorial Makeup', price: 'From $1,200' },
    { id: 'special-events-makeup', name: 'Special Events Makeup', price: 'From $600' },
    { id: 'personal-styling', name: 'Personal Styling & Lessons', price: 'From $400' },
    { id: 'brand-ambassador', name: 'Brand Ambassador', price: 'Custom Quote' },
    { id: 'social-media', name: 'Social Media Content', price: 'From $1,500' }
  ];

  const handleServiceChange = (serviceId: string, checked: boolean) => {
    if (checked) {
      setSelectedServices([...selectedServices, serviceId]);
    } else {
      setSelectedServices(selectedServices.filter(id => id !== serviceId));
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const selectedServiceNames = services
      .filter(service => selectedServices.includes(service.id))
      .map(service => service.name)
      .join(', ');

    const emailBody = `
Booking Request for JUSTSAY

Client Information:
- Name: ${formData.firstName} ${formData.lastName}
- Email: ${formData.email}
- Phone: ${formData.phone}
- Company: ${formData.company || 'N/A'}

Event Details:
- Services Requested: ${selectedServiceNames}
- Event Type: ${formData.eventType}
- Preferred Date: ${selectedDate ? format(selectedDate, 'PPP') : 'Not specified'}
- Location: ${formData.location}
- Duration: ${formData.duration}
- Budget Range: ${formData.budget}

Additional Information:
${formData.additionalInfo || 'None provided'}

Please respond with availability and detailed quote.
    `.trim();

    const mailtoLink = `mailto:say@saymodel.com?subject=Booking Request - ${selectedServiceNames}&body=${encodeURIComponent(emailBody)}`;
    const mailtoLink = `mailto:say@vip.tov.ae?subject=Booking Request - ${selectedServiceNames}&body=${encodeURIComponent(emailBody)}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-100 px-8 py-6">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <a 
            href="/"
            className="flex items-center space-x-3 text-gray-900 hover:text-gray-600 transition-colors duration-300"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-light tracking-wide">Back to Portfolio</span>
          </a>
          <div className="font-light text-2xl tracking-wider text-gray-900">
            JUSTSAY
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="font-light text-4xl md:text-6xl tracking-wider text-gray-900 mb-6">
            BOOK JUSTSAY
          </h1>
          <div className="w-24 h-px bg-gray-900 mx-auto mb-8"></div>
          <p className="text-lg font-light leading-relaxed text-gray-700 max-w-2xl mx-auto">
            Ready to create something extraordinary? Select your services and provide your details for a personalized quote.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-12">
          {/* Services Selection */}
          <div className="space-y-6">
            <h2 className="text-2xl font-light tracking-wide text-gray-900">Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {services.map((service) => (
                <div key={service.id} className="flex items-start space-x-3 p-4 border border-gray-200 rounded-lg hover:border-gray-300 transition-colors">
                  <Checkbox
                    id={service.id}
                    checked={selectedServices.includes(service.id)}
                    onCheckedChange={(checked) => handleServiceChange(service.id, checked as boolean)}
                    className="mt-1"
                  />
                  <div className="flex-1">
                    <label htmlFor={service.id} className="block font-light text-gray-900 cursor-pointer">
                      {service.name}
                    </label>
                    <p className="text-sm font-light text-gray-500 mt-1">{service.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Personal Information */}
          <div className="space-y-6">
            <h2 className="text-2xl font-light tracking-wide text-gray-900">Personal Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-light tracking-wide text-gray-700 mb-2">
                  First Name *
                </label>
                <Input
                  required
                  value={formData.firstName}
                  onChange={(e) => handleInputChange('firstName', e.target.value)}
                  className="border-gray-200 focus:border-gray-400"
                />
              </div>
              <div>
                <label className="block text-sm font-light tracking-wide text-gray-700 mb-2">
                  Last Name *
                </label>
                <Input
                  required
                  value={formData.lastName}
                  onChange={(e) => handleInputChange('lastName', e.target.value)}
                  className="border-gray-200 focus:border-gray-400"
                />
              </div>
              <div>
                <label className="block text-sm font-light tracking-wide text-gray-700 mb-2">
                  Email *
                </label>
                <Input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="border-gray-200 focus:border-gray-400"
                />
              </div>
              <div>
                <label className="block text-sm font-light tracking-wide text-gray-700 mb-2">
                  Phone *
                </label>
                <Input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  className="border-gray-200 focus:border-gray-400"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-light tracking-wide text-gray-700 mb-2">
                  Company/Organization
                </label>
                <Input
                  value={formData.company}
                  onChange={(e) => handleInputChange('company', e.target.value)}
                  className="border-gray-200 focus:border-gray-400"
                />
              </div>
            </div>
          </div>

          {/* Event Details */}
          <div className="space-y-6">
            <h2 className="text-2xl font-light tracking-wide text-gray-900">Event Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-light tracking-wide text-gray-700 mb-2">
                  Event Type *
                </label>
                <Select value={formData.eventType} onValueChange={(value) => handleInputChange('eventType', value)}>
                  <SelectTrigger className="border-gray-200 focus:border-gray-400">
                    <SelectValue placeholder="Select event type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="photoshoot">Photoshoot</SelectItem>
                    <SelectItem value="fashion-show">Fashion Show</SelectItem>
                    <SelectItem value="campaign">Brand Campaign</SelectItem>
                    <SelectItem value="wedding">Wedding</SelectItem>
                    <SelectItem value="corporate">Corporate Event</SelectItem>
                    <SelectItem value="editorial">Editorial</SelectItem>
                    <SelectItem value="commercial">Commercial</SelectItem>
                    <SelectItem value="personal">Personal Session</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="block text-sm font-light tracking-wide text-gray-700 mb-2">
                  Preferred Date
                </label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className="w-full justify-start text-left font-normal border-gray-200 focus:border-gray-400"
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {selectedDate ? format(selectedDate, "PPP") : "Select date"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={selectedDate}
                      onSelect={setSelectedDate}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>
              <div>
                <label className="block text-sm font-light tracking-wide text-gray-700 mb-2">
                  Location *
                </label>
                <Input
                  required
                  value={formData.location}
                  onChange={(e) => handleInputChange('location', e.target.value)}
                  placeholder="City, Country or Studio Name"
                  className="border-gray-200 focus:border-gray-400"
                />
              </div>
              <div>
                <label className="block text-sm font-light tracking-wide text-gray-700 mb-2">
                  Duration
                </label>
                <Select value={formData.duration} onValueChange={(value) => handleInputChange('duration', value)}>
                  <SelectTrigger className="border-gray-200 focus:border-gray-400">
                    <SelectValue placeholder="Select duration" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="2-hours">2 Hours</SelectItem>
                    <SelectItem value="half-day">Half Day (4 hours)</SelectItem>
                    <SelectItem value="full-day">Full Day (8 hours)</SelectItem>
                    <SelectItem value="2-days">2 Days</SelectItem>
                    <SelectItem value="3-days">3 Days</SelectItem>
                    <SelectItem value="week">1 Week</SelectItem>
                    <SelectItem value="custom">Custom Duration</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-light tracking-wide text-gray-700 mb-2">
                  Budget Range
                </label>
                <Select value={formData.budget} onValueChange={(value) => handleInputChange('budget', value)}>
                  <SelectTrigger className="border-gray-200 focus:border-gray-400">
                    <SelectValue placeholder="Select budget range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="under-1k">Under $1,000</SelectItem>
                    <SelectItem value="1k-5k">$1,000 - $5,000</SelectItem>
                    <SelectItem value="5k-10k">$5,000 - $10,000</SelectItem>
                    <SelectItem value="10k-25k">$10,000 - $25,000</SelectItem>
                    <SelectItem value="25k-50k">$25,000 - $50,000</SelectItem>
                    <SelectItem value="50k-plus">$50,000+</SelectItem>
                    <SelectItem value="discuss">Prefer to Discuss</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Additional Information */}
          <div className="space-y-6">
            <h2 className="text-2xl font-light tracking-wide text-gray-900">Additional Information</h2>
            <div>
              <label className="block text-sm font-light tracking-wide text-gray-700 mb-2">
                Project Details, Special Requirements, or Questions
              </label>
              <Textarea
                value={formData.additionalInfo}
                onChange={(e) => handleInputChange('additionalInfo', e.target.value)}
                placeholder="Please provide any additional details about your project, special requirements, styling preferences, or questions you may have..."
                className="border-gray-200 focus:border-gray-400 min-h-[120px]"
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="text-center pt-8">
            <Button
              type="submit"
              disabled={selectedServices.length === 0}
              className="text-sm font-light tracking-widest text-white bg-gray-900 border border-gray-900 px-12 py-4 hover:bg-gray-800 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              SUBMIT BOOKING REQUEST
            </Button>
            <p className="text-sm font-light text-gray-500 mt-4">
              You'll receive a personalized quote within 24 hours
            </p>
          </div>
        </form>
      </main>
    </div>
  );
};

export default Booking;