import React, { useState } from 'react';
import { 
  Phone, 
  MessageCircle, 
  MapPin, 
  Clock, 
  Sparkles, 
  Scissors, 
  Heart, 
  Star, 
  Calendar, 
  CheckCircle2, 
  Menu, 
  X, 
  ChevronRight, 
  Award, 
  ShieldCheck, 
  UserCheck 
} from 'lucide-react';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<'all' | 'hair' | 'makeup' | 'beauty'>('all');
  
  // Booking Form State
  const [bookingName, setBookingName] = useState('');
  const [bookingPhone, setBookingPhone] = useState('');
  const [bookingService, setBookingService] = useState('HD Bridal Makeup');
  const [bookingDate, setBookingDate] = useState('');
  const [bookingNotes, setBookingNotes] = useState('');
  const [bookingSuccess, setBookingSuccess] = useState(false);

  // Testimonials State
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const whatsappNumber = "919906184607";

  const handleWhatsAppBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!bookingName || !bookingPhone) {
      alert("Please enter your name and phone number.");
      return;
    }
    const message = `Hello Sapna Beauty Salon Kishtwar,%0A%0AI would like to book an appointment:%0A- *Name:* ${encodeURIComponent(bookingName)}%0A- *Phone:* ${encodeURIComponent(bookingPhone)}%0A- *Service:* ${encodeURIComponent(bookingService)}%0A- *Preferred Date:* ${encodeURIComponent(bookingDate || 'As soon as possible')}%0A- *Notes:* ${encodeURIComponent(bookingNotes || 'None')}%0A%0APlease confirm availability!`;
    
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
    setBookingSuccess(true);
    setTimeout(() => setBookingSuccess(false), 6000);
  };

  const testimonials = [
    {
      id: 1,
      name: "Meenakshi Sharma",
      location: "Hidyal, Kishtwar",
      service: "HD Bridal Makeup",
      rating: 5,
      quote: "Sapna Beauty Salon made my wedding day in Kishtwar truly magical! The HD bridal makeup was absolute perfection and stayed fresh throughout all the ceremonies."
    },
    {
      id: 2,
      name: "Pooja Thakur",
      location: "Kishtwar Town",
      service: "Keratin & Hair Smoothening",
      rating: 5,
      quote: "I got my keratin treatment and party glam makeup done here. The results exceeded my expectations—my hair is so silky and glossy. Highly recommended!"
    },
    {
      id: 3,
      name: "Aaliya Mir",
      location: "Hidyal, Kishtwar",
      service: "Gold Facial & Party Glam",
      rating: 5,
      quote: "The gold radiance facial gave my skin an instant radiant glow before the family function. Very clean, hygienic studio environment and wonderful hospitality."
    },
    {
      id: 4,
      name: "Sunita Devi",
      location: "Kishtwar",
      service: "Bridal Pre-Wedding Glow Package",
      rating: 5,
      quote: "From full body polishing to bridal hair styling, everything was handled with utmost care. Sapna Beauty Salon is undoubtedly the best salon in Hidyal, Kishtwar!"
    }
  ];

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const services = [
    {
      id: 1,
      category: 'makeup',
      name: 'HD Bridal Makeup Look',
      price: '₹5,500',
      duration: '120 mins',
      description: 'Flawless airbrushed HD makeup including custom eye styling, premium lashes, dupatta setting, and complete bridal draping.',
      popular: true,
      image: '/src/assets/images/service_bridal_makeup_1795286823920.jpg'
    },
    {
      id: 2,
      category: 'makeup',
      name: 'Engagement & Reception Glam',
      price: '₹4,000',
      duration: '90 mins',
      description: 'Sophisticated cocktail and reception look with contouring, shimmer highlights, and long-lasting professional finish.',
      popular: false,
      image: '/src/assets/images/service_bridal_makeup_1795286823920.jpg'
    },
    {
      id: 3,
      category: 'makeup',
      name: 'Party & Festive Airbrush Makeup',
      price: '₹2,500',
      duration: '60 mins',
      description: 'Stunning party-ready makeup tailored for weddings, anniversaries, and special cultural celebrations in Kishtwar.',
      popular: false,
      image: '/src/assets/images/service_bridal_makeup_1795286823920.jpg'
    },
    {
      id: 4,
      category: 'hair',
      name: 'Signature Bridal Hair Styling & Bun',
      price: '₹1,500',
      duration: '60 mins',
      description: 'Intricate floral buns, Hollywood waves, or elegant braided hairstyles designed to complement your bridal attire.',
      popular: true,
      image: '/src/assets/images/service_hair_styling_1795286823522.jpg'
    },
    {
      id: 5,
      category: 'hair',
      name: 'Advanced Keratin & Smoothening',
      price: '₹3,500',
      duration: '180 mins',
      description: 'Professional protein infusion for frizz-free, ultra-glossy, and silky straight hair lasting up to 4 months.',
      popular: true,
      image: '/src/assets/images/service_hair_styling_1795286823522.jpg'
    },
    {
      id: 6,
      category: 'hair',
      name: 'Hair Spa & Deep Nourishment',
      price: '₹999',
      duration: '45 mins',
      description: 'Revitalizing scalp massage, steam treatment, and intensive mask to repair dry and damaged hair.',
      popular: false,
      image: '/src/assets/images/service_hair_styling_1795286823522.jpg'
    },
    {
      id: 7,
      category: 'beauty',
      name: 'Gold / Diamond Radiance Facial',
      price: '₹1,800',
      duration: '60 mins',
      description: 'Rejuvenating facial with 24k gold dust and herbal extracts for instant bridal glow and deep hydration.',
      popular: true,
      image: '/src/assets/images/service_beauty_skincare_1795286824115.jpg'
    },
    {
      id: 8,
      category: 'beauty',
      name: 'De-Tan Full Face & Neck Cleanup',
      price: '₹799',
      duration: '30 mins',
      description: 'Effective tan removal therapy using botanical ingredients to brighten and even out skin tone.',
      popular: false,
      image: '/src/assets/images/service_beauty_skincare_1795286824115.jpg'
    },
    {
      id: 9,
      category: 'beauty',
      name: 'Bridal Pre-Wedding Glow Package',
      price: '₹4,500',
      duration: '180 mins',
      description: 'Comprehensive full body polishing, facial, manicure, pedicure, and threading package for brides-to-be.',
      popular: true,
      image: '/src/assets/images/service_beauty_skincare_1795286824115.jpg'
    }
  ];

  const filteredServices = activeCategory === 'all' 
    ? services 
    : services.filter(s => s.category === activeCategory);

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#2C2622] font-sans selection:bg-rose-200 selection:text-rose-900">
      
      {/* Top Demo Banner */}
      <div className="bg-gradient-to-r from-stone-900 via-rose-950 to-stone-900 text-stone-100 px-4 py-1.5 text-[11px] sm:text-xs text-center font-medium tracking-wide flex items-center justify-center gap-2">
        <span className="bg-rose-600 text-white px-2 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider">Demo Preview</span>
        <span className="truncate">Sapna Beauty Salon Kishtwar — Hidyal, Jammu & Kashmir</span>
      </div>

      {/* Header & Navigation */}
      <header className="sticky top-0 z-50 bg-[#FDFBF7]/90 backdrop-blur-md border-b border-rose-100 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-6">
          
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-full bg-rose-900 text-rose-50 flex items-center justify-center font-serif text-base font-bold shadow-sm group-hover:scale-105 transition-transform">
              S
            </div>
            <div>
              <span className="text-base sm:text-lg font-serif font-bold tracking-tight text-stone-900 block leading-tight">
                Sapna Beauty Salon
              </span>
              <span className="text-[10px] font-semibold tracking-widest text-rose-700 uppercase block">
                Hidyal, Kishtwar
              </span>
            </div>
          </a>

          {/* Nav Links */}
          <nav className="hidden lg:flex items-center gap-6 text-xs font-semibold text-stone-700 uppercase tracking-wider">
            <a href="#services" className="hover:text-rose-700 transition-colors whitespace-nowrap">Services</a>
            <a href="#about" className="hover:text-rose-700 transition-colors whitespace-nowrap">About Us</a>
            <a href="#gallery" className="hover:text-rose-700 transition-colors whitespace-nowrap">Gallery</a>
            <a href="#why-us" className="hover:text-rose-700 transition-colors whitespace-nowrap">Why Us</a>
            <a href="#contact" className="hover:text-rose-700 transition-colors whitespace-nowrap">Contact</a>
          </nav>

          {/* Action Zone */}
          <div className="flex items-center gap-2">
            <a 
              href={`https://wa.me/${whatsappNumber}?text=Hi%20Sapna%20Beauty%20Salon,%20I%20would%20like%20to%20book%20an%20appointment.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-700 text-white px-3 py-1.5 rounded-full text-xs font-semibold shadow-sm transition-all whitespace-nowrap"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-white text-emerald-600" />
              <span>WhatsApp</span>
            </a>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-1.5 text-stone-700 hover:text-rose-700 transition-colors rounded-lg border border-stone-200"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#FDFBF7] border-b border-rose-100 px-6 py-5 space-y-3 shadow-lg animate-fadeIn">
            <a 
              href="#services" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-semibold text-stone-800 hover:text-rose-700 uppercase tracking-wider py-1"
            >
              Services
            </a>
            <a 
              href="#about" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-semibold text-stone-800 hover:text-rose-700 uppercase tracking-wider py-1"
            >
              About Us
            </a>
            <a 
              href="#gallery" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-semibold text-stone-800 hover:text-rose-700 uppercase tracking-wider py-1"
            >
              Gallery
            </a>
            <a 
              href="#why-us" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-semibold text-stone-800 hover:text-rose-700 uppercase tracking-wider py-1"
            >
              Why Choose Us
            </a>
            <a 
              href="#contact" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-semibold text-stone-800 hover:text-rose-700 uppercase tracking-wider py-1"
            >
              Location & Contact
            </a>
            <div className="pt-2">
              <a 
                href={`https://wa.me/${whatsappNumber}?text=Hi%20Sapna%20Beauty%20Salon,%20I%20would%20like%20to%20book%20an%20appointment.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-3.5 py-2 rounded-xl font-semibold text-xs shadow"
              >
                <MessageCircle className="w-4 h-4 fill-white text-emerald-600" />
                <span>Chat on WhatsApp (+91 9906184607)</span>
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-14 lg:py-20 bg-stone-900 text-white">
        {/* Background Image with Scrim */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/src/assets/images/salon_hero_interior_1795286823158.jpg" 
            alt="Sapna Beauty Salon Interior" 
            className="w-full h-full object-cover opacity-35"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-stone-950 via-stone-900/90 to-stone-950/70" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <div className="lg:col-span-7 space-y-5 text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-900/60 border border-rose-500/30 text-rose-200 text-xs font-medium tracking-wide">
              <Sparkles className="w-3.5 h-3.5 text-rose-300" />
              <span>Hidyal, Kishtwar · Jammu & Kashmir</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold tracking-tight text-white leading-[1.15]">
              Exquisite Hair, Makeup & Beauty <span className="text-rose-300 italic">Artistry</span>
            </h1>

            <p className="text-stone-300 text-sm sm:text-base font-normal max-w-xl leading-relaxed">
              Welcome to <strong className="text-white font-semibold">Sapna beauty salon Kishtwar</strong>. Your premier destination for professional bridal makeovers, hair styling, and glowing skincare treatments.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a 
                href={`https://wa.me/${whatsappNumber}?text=Hi%20Sapna%20Beauty%20Salon,%20I%20would%20like%20to%20book%20an%20appointment.%20Please%20let%20me%20know%20your%20available%20slots.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold px-4 py-2.5 rounded-lg shadow transition-all text-xs sm:text-sm"
              >
                <MessageCircle className="w-4 h-4 fill-white text-emerald-600" />
                <span>Book on WhatsApp</span>
              </a>

              <a 
                href="#services"
                className="inline-flex items-center gap-1.5 bg-stone-800 hover:bg-stone-700 text-stone-100 font-medium px-4 py-2.5 rounded-lg border border-stone-700 transition-all text-xs sm:text-sm"
              >
                <span>View Services</span>
                <ChevronRight className="w-3.5 h-3.5 text-rose-300" />
              </a>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-stone-800/80 mt-6">
              <div>
                <p className="text-xl sm:text-2xl font-serif font-bold text-rose-300">500+</p>
                <p className="text-[11px] text-stone-400">Happy Brides</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-serif font-bold text-rose-300">100%</p>
                <p className="text-[11px] text-stone-400">Branded Kits</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-serif font-bold text-rose-300">Hidyal</p>
                <p className="text-[11px] text-stone-400">Trusted Salon</p>
              </div>
            </div>

          </div>

          {/* Hero Quick Card */}
          <div className="lg:col-span-5">
            <div className="bg-stone-900/90 border border-rose-900/40 p-5 sm:p-6 rounded-2xl shadow-xl backdrop-blur-md space-y-4">
              <div className="flex items-center justify-between border-b border-stone-800 pb-3">
                <div>
                  <h3 className="text-base font-serif font-semibold text-white">Quick Enquiry</h3>
                  <p className="text-[11px] text-stone-400">Sapna Beauty Salon Kishtwar</p>
                </div>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" title="Open Now" />
              </div>

              <div className="space-y-3 text-xs text-stone-300">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-medium">Hidyal, Kishtwar</strong>
                    <span className="text-[11px] text-stone-400">Jammu & Kashmir (Pin: 182204)</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Clock className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-medium">Hours</strong>
                    <span className="text-[11px] text-stone-400">Mon - Sun: 9:30 AM – 7:30 PM</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Phone className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-medium">Phone / WhatsApp</strong>
                    <span className="text-[11px] text-rose-300 font-semibold">+91 9906184607</span>
                  </div>
                </div>
              </div>

              <div className="pt-1">
                <a 
                  href="#book"
                  className="w-full block text-center bg-rose-700 hover:bg-rose-600 text-white font-medium py-2.5 px-3 rounded-lg shadow transition-colors text-xs"
                >
                  Schedule Appointment
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Highlights Banner */}
      <section className="bg-rose-950 text-rose-100 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center md:text-left">
            <div className="flex items-center gap-3 justify-center md:justify-start">
              <div className="w-9 h-9 rounded-xl bg-rose-900/80 flex items-center justify-center shrink-0 border border-rose-700/50">
                <ShieldCheck className="w-4 h-4 text-rose-300" />
              </div>
              <div>
                <h4 className="font-serif font-bold text-white text-xs">Hygienic Care</h4>
                <p className="text-[11px] text-rose-300/80">Sanitized tools</p>
              </div>
            </div>

            <div className="flex items-center gap-3 justify-center md:justify-start">
              <div className="w-9 h-9 rounded-xl bg-rose-900/80 flex items-center justify-center shrink-0 border border-rose-700/50">
                <Sparkles className="w-4 h-4 text-rose-300" />
              </div>
              <div>
                <h4 className="font-serif font-bold text-white text-xs">Branded Products</h4>
                <p className="text-[11px] text-rose-300/80">MAC, Kryolan, L'Oreal</p>
              </div>
            </div>

            <div className="flex items-center gap-3 justify-center md:justify-start">
              <div className="w-9 h-9 rounded-xl bg-rose-900/80 flex items-center justify-center shrink-0 border border-rose-700/50">
                <UserCheck className="w-4 h-4 text-rose-300" />
              </div>
              <div>
                <h4 className="font-serif font-bold text-white text-xs">Expert Stylists</h4>
                <p className="text-[11px] text-rose-300/80">Bridal specialist</p>
              </div>
            </div>

            <div className="flex items-center gap-3 justify-center md:justify-start">
              <div className="w-9 h-9 rounded-xl bg-rose-900/80 flex items-center justify-center shrink-0 border border-rose-700/50">
                <MapPin className="w-4 h-4 text-rose-300" />
              </div>
              <div>
                <h4 className="font-serif font-bold text-white text-xs">Hidyal, Kishtwar</h4>
                <p className="text-[11px] text-rose-300/80">J&K, India</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-100 text-rose-900 text-xs font-semibold tracking-wider uppercase">
            <span>Our Menu</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-stone-900 tracking-tight">
            Hair, Makeup & Beauty Services
          </h2>
          <p className="text-stone-600 text-xs sm:text-sm">
            Professional treatments designed for elegance and confidence.
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${activeCategory === 'all' ? 'bg-rose-900 text-white shadow-sm' : 'bg-stone-200/70 text-stone-700 hover:bg-stone-300'}`}
            >
              All
            </button>
            <button
              onClick={() => setActiveCategory('makeup')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${activeCategory === 'makeup' ? 'bg-rose-900 text-white shadow-sm' : 'bg-stone-200/70 text-stone-700 hover:bg-stone-300'}`}
            >
              Makeup
            </button>
            <button
              onClick={() => setActiveCategory('hair')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${activeCategory === 'hair' ? 'bg-rose-900 text-white shadow-sm' : 'bg-stone-200/70 text-stone-700 hover:bg-stone-300'}`}
            >
              Hair Care
            </button>
            <button
              onClick={() => setActiveCategory('beauty')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${activeCategory === 'beauty' ? 'bg-rose-900 text-white shadow-sm' : 'bg-stone-200/70 text-stone-700 hover:bg-stone-300'}`}
            >
              Skincare
            </button>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => (
            <div 
              key={service.id} 
              className="bg-white rounded-2xl border border-stone-200/80 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col overflow-hidden group"
            >
              {/* Card Image Header */}
              <div className="relative h-44 overflow-hidden bg-stone-100">
                <img 
                  src={service.image} 
                  alt={service.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 via-transparent to-transparent" />
                
                {service.popular && (
                  <span className="absolute top-3 left-3 bg-rose-600 text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider shadow">
                    Popular
                  </span>
                )}

                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white">
                  <span className="text-base font-bold font-serif text-rose-200">{service.price}</span>
                  <span className="text-[11px] bg-stone-900/80 backdrop-blur-sm px-2 py-0.5 rounded text-stone-200 font-medium">{service.duration}</span>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                <div className="space-y-1.5">
                  <h3 className="text-base font-serif font-bold text-stone-900 group-hover:text-rose-800 transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-stone-600 text-xs leading-relaxed line-clamp-2">
                    {service.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                  <span className="text-[11px] text-stone-500 font-medium">Hidyal Studio</span>
                  <a 
                    href={`https://wa.me/${whatsappNumber}?text=Hi%20Sapna%20Beauty%20Salon,%20I%20would%20like%20to%20enquire%20about%20${encodeURIComponent(service.name)}%20(${service.price}).`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] font-semibold text-rose-800 hover:text-rose-950 bg-rose-50 hover:bg-rose-100 px-3 py-1.5 rounded-lg transition-colors"
                  >
                    <MessageCircle className="w-3 h-3 text-emerald-600 fill-emerald-600" />
                    <span>WhatsApp Enquire</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-stone-900 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <div className="lg:col-span-6 space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-900/60 border border-rose-500/30 text-rose-200 text-xs font-semibold uppercase tracking-wider">
              <span>About Us</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold tracking-tight text-white leading-tight">
              Crafting Elegance in <span className="text-rose-300 italic">Kishtwar</span>
            </h2>
            <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
              Sapna beauty salon Kishtwar is the trusted destination in Hidyal for professional beauty care. We offer a warm, serene atmosphere where every client receives personalized attention.
            </p>

            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-white text-xs">Bridal Specialists</h4>
                  <p className="text-[11px] text-stone-400">Custom trials</p>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-white text-xs">Hygienic Studio</h4>
                  <p className="text-[11px] text-stone-400">Safe care</p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <a 
                href={`https://wa.me/${whatsappNumber}?text=Hi%20Sapna%20Beauty%20Salon,%20I%20would%20like%20to%20speak%20with%20a%20stylist.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-rose-700 hover:bg-rose-600 text-white font-medium px-4 py-2 rounded-lg shadow transition-colors text-xs"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Contact via WhatsApp</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden border border-rose-900/50 shadow-xl">
              <img 
                src="/src/assets/images/salon_stylist_portrait_1795286823740.jpg" 
                alt="Sapna Beauty Salon Stylist" 
                className="w-full h-[360px] object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent flex items-end p-6">
                <div>
                  <p className="text-rose-300 font-serif italic text-sm">"Your beauty is our passion."</p>
                  <p className="text-white font-semibold text-xs">— Sapna Beauty Salon, Hidyal</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Gallery Showcase Section */}
      <section id="gallery" className="py-16 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-100 text-rose-900 text-xs font-semibold tracking-wider uppercase">
            <span>Gallery</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 tracking-tight">
            Moments of Transformation
          </h2>
          <p className="text-stone-600 text-xs sm:text-sm">
            Glimpses of our studio ambience and bridal artistry.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-2xl overflow-hidden border border-stone-200 shadow-xs group relative h-72">
            <img 
              src="/src/assets/images/service_bridal_makeup_1795286823920.jpg" 
              alt="Bridal Makeup" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/20 to-transparent flex items-end p-5">
              <div>
                <span className="text-[10px] text-rose-300 font-semibold uppercase tracking-wider">Bridal</span>
                <h4 className="text-base font-serif font-bold text-white">HD Makeovers</h4>
              </div>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden border border-stone-200 shadow-xs group relative h-72">
            <img 
              src="/src/assets/images/service_hair_styling_1795286823522.jpg" 
              alt="Hair Styling" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/20 to-transparent flex items-end p-5">
              <div>
                <span className="text-[10px] text-rose-300 font-semibold uppercase tracking-wider">Hair</span>
                <h4 className="text-base font-serif font-bold text-white">Smoothening & Styling</h4>
              </div>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden border border-stone-200 shadow-xs group relative h-72">
            <img 
              src="/src/assets/images/service_beauty_skincare_1795286824115.jpg" 
              alt="Skincare" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/20 to-transparent flex items-end p-5">
              <div>
                <span className="text-[10px] text-rose-300 font-semibold uppercase tracking-wider">Skincare</span>
                <h4 className="text-base font-serif font-bold text-white">Radiance Facials</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="why-us" className="py-16 bg-rose-50/50 border-y border-rose-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto space-y-3 mb-12">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-200/80 text-rose-900 text-xs font-semibold tracking-wider uppercase">
              <span>Why Us</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 tracking-tight">
              Why Clients in Kishtwar Trust Us
            </h2>
            <p className="text-stone-600 text-xs sm:text-sm">
              Professional expertise combined with genuine warmth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-rose-100 shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-rose-100 text-rose-900 flex items-center justify-center font-bold text-sm">
                01
              </div>
              <h3 className="text-base font-serif font-bold text-stone-900">Personalized Styling</h3>
              <p className="text-stone-600 text-xs leading-relaxed">
                We understand your skin tone and hair texture to recommend the ideal bridal look or treatment.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-rose-100 shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-rose-100 text-rose-900 flex items-center justify-center font-bold text-sm">
                02
              </div>
              <h3 className="text-base font-serif font-bold text-stone-900">Top International Brands</h3>
              <p className="text-stone-600 text-xs leading-relaxed">
                Exclusive use of certified products from MAC, Kryolan, L'Oreal Professionnel, and Lotus.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-rose-100 shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-rose-100 text-rose-900 flex items-center justify-center font-bold text-sm">
                03
              </div>
              <h3 className="text-base font-serif font-bold text-stone-900">Hidyal Location</h3>
              <p className="text-stone-600 text-xs leading-relaxed">
                Conveniently located in Hidyal, Kishtwar with a comfortable air-conditioned salon ambience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto space-y-3 mb-12">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-100 text-rose-900 text-xs font-semibold tracking-wider uppercase">
              <span>Testimonials</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 tracking-tight">
              Loved by Brides & Clients in Kishtwar
            </h2>
            <p className="text-stone-600 text-xs sm:text-sm">
              Real feedback from clients who trusted us with their special days.
            </p>
          </div>

          {/* Testimonial Carousel Container */}
          <div className="max-w-3xl mx-auto relative">
            <div className="bg-[#FDFBF7] border border-rose-100 rounded-2xl p-6 sm:p-10 shadow-xs relative overflow-hidden">
              <div className="absolute top-4 right-6 text-rose-200 font-serif text-7xl select-none pointer-events-none opacity-40">
                “
              </div>

              <div className="relative z-10 space-y-4">
                {/* Star Rating */}
                <div className="flex items-center gap-1">
                  {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-stone-800 text-sm sm:text-base font-serif italic leading-relaxed">
                  "{testimonials[activeTestimonial].quote}"
                </p>

                {/* Client Info */}
                <div className="flex items-center justify-between pt-4 border-t border-rose-100 flex-wrap gap-3">
                  <div>
                    <h4 className="font-serif font-bold text-stone-900 text-sm">
                      {testimonials[activeTestimonial].name}
                    </h4>
                    <p className="text-[11px] text-rose-700 font-medium">
                      {testimonials[activeTestimonial].service} · {testimonials[activeTestimonial].location}
                    </p>
                  </div>

                  {/* Carousel Controls */}
                  <div className="flex items-center gap-1.5">
                    <button 
                      onClick={prevTestimonial}
                      aria-label="Previous Testimonial"
                      className="w-8 h-8 rounded-full bg-white border border-stone-300 flex items-center justify-center text-stone-700 hover:bg-rose-900 hover:text-white hover:border-rose-900 transition-colors shadow-xs text-xs font-semibold"
                    >
                      ←
                    </button>
                    <button 
                      onClick={nextTestimonial}
                      aria-label="Next Testimonial"
                      className="w-8 h-8 rounded-full bg-white border border-stone-300 flex items-center justify-center text-stone-700 hover:bg-rose-900 hover:text-white hover:border-rose-900 transition-colors shadow-xs text-xs font-semibold"
                    >
                      →
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Dots Indicator */}
            <div className="flex items-center justify-center gap-2 mt-4">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTestimonial(idx)}
                  aria-label={`Go to testimonial ${idx + 1}`}
                  className={`h-2 rounded-full transition-all ${idx === activeTestimonial ? 'w-6 bg-rose-900' : 'w-2 bg-stone-300'}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Appointment & Enquiry Section */}
      <section id="book" className="py-16 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-stone-900 text-white rounded-2xl p-6 sm:p-10 lg:p-12 shadow-xl relative overflow-hidden">
          <div className="absolute right-0 bottom-0 w-80 h-80 bg-rose-900/20 rounded-full blur-3xl pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 relative z-10 items-center">
            
            <div className="lg:col-span-5 space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-900/60 text-rose-200 text-xs font-semibold tracking-wider uppercase border border-rose-700/40">
                <span>Book Slot</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight">
                Book on WhatsApp
              </h2>
              <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
                Fill in your details below to generate a direct WhatsApp booking message to <strong className="text-rose-300">Sapna Beauty Salon Kishtwar (+91 9906184607)</strong>.
              </p>

              <div className="space-y-2.5 text-xs text-stone-300 pt-1">
                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-rose-400 shrink-0" />
                  <span>WhatsApp: <strong className="text-white">+91 9906184607</strong></span>
                </div>
                <div className="flex items-center gap-2.5">
                  <MapPin className="w-4 h-4 text-rose-400 shrink-0" />
                  <span>Location: <strong className="text-white">Hidyal, Kishtwar, J&K</strong></span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-rose-400 shrink-0" />
                  <span>Timing: <strong className="text-white">9:30 AM – 7:30 PM</strong></span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 bg-stone-800/90 border border-stone-700 p-5 sm:p-6 rounded-xl shadow-md backdrop-blur-md">
              {bookingSuccess ? (
                <div className="text-center py-10 space-y-3 animate-fadeIn">
                  <div className="w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center mx-auto text-xl shadow-md">
                    ✓
                  </div>
                  <h3 className="text-xl font-serif font-bold text-white">Opening WhatsApp...</h3>
                  <p className="text-stone-300 text-xs max-w-sm mx-auto">
                    Your appointment request has been formatted! If WhatsApp did not open automatically, please click below.
                  </p>
                  <a 
                    href={`https://wa.me/${whatsappNumber}?text=Hello%20Sapna%20Beauty%20Salon,%20I%20would%20like%20to%20book%20an%20appointment.%20Name:%20${encodeURIComponent(bookingName)}%20Phone:%20${encodeURIComponent(bookingPhone)}%20Service:%20${encodeURIComponent(bookingService)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-emerald-600 hover:bg-emerald-500 text-white font-medium px-4 py-2 rounded-lg shadow mt-2 text-xs"
                  >
                    Open WhatsApp Chat
                  </a>
                </div>
              ) : (
                <form onSubmit={handleWhatsAppBooking} className="space-y-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-medium text-stone-300 mb-1">Full Name *</label>
                      <input 
                        type="text" 
                        required
                        value={bookingName}
                        onChange={(e) => setBookingName(e.target.value)}
                        placeholder="e.g. Meenakshi Sharma" 
                        className="w-full bg-stone-900 border border-stone-700 rounded-lg px-3 py-2 text-white placeholder-stone-500 text-xs focus:outline-none focus:border-rose-500"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-medium text-stone-300 mb-1">Phone / WhatsApp *</label>
                      <input 
                        type="tel" 
                        required
                        value={bookingPhone}
                        onChange={(e) => setBookingPhone(e.target.value)}
                        placeholder="e.g. +91 9876543210" 
                        className="w-full bg-stone-900 border border-stone-700 rounded-lg px-3 py-2 text-white placeholder-stone-500 text-xs focus:outline-none focus:border-rose-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-medium text-stone-300 mb-1">Select Service *</label>
                      <select 
                        value={bookingService}
                        onChange={(e) => setBookingService(e.target.value)}
                        className="w-full bg-stone-900 border border-stone-700 rounded-lg px-3 py-2 text-white text-xs focus:outline-none focus:border-rose-500"
                      >
                        <option value="HD Bridal Makeup">HD Bridal Makeup (₹5,500)</option>
                        <option value="Engagement & Reception Glam">Engagement & Reception Glam (₹4,000)</option>
                        <option value="Party & Festive Airbrush Makeup">Party & Festive Airbrush Makeup (₹2,500)</option>
                        <option value="Signature Bridal Hair Styling">Signature Bridal Hair Styling (₹1,500)</option>
                        <option value="Advanced Keratin & Smoothening">Advanced Keratin & Smoothening (₹3,500)</option>
                        <option value="Gold / Diamond Radiance Facial">Gold / Diamond Radiance Facial (₹1,800)</option>
                        <option value="Bridal Pre-Wedding Glow Package">Bridal Pre-Wedding Glow Package (₹4,500)</option>
                        <option value="Other / General Enquiry">Other / General Enquiry</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-[11px] font-medium text-stone-300 mb-1">Preferred Date</label>
                      <input 
                        type="date" 
                        value={bookingDate}
                        onChange={(e) => setBookingDate(e.target.value)}
                        className="w-full bg-stone-900 border border-stone-700 rounded-lg px-3 py-2 text-white text-xs focus:outline-none focus:border-rose-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-medium text-stone-300 mb-1">Notes / Requests</label>
                    <textarea 
                      rows={2}
                      value={bookingNotes}
                      onChange={(e) => setBookingNotes(e.target.value)}
                      placeholder="Any specific styling requirement..."
                      className="w-full bg-stone-900 border border-stone-700 rounded-lg px-3 py-2 text-white placeholder-stone-500 text-xs focus:outline-none focus:border-rose-500"
                    />
                  </div>

                  <button 
                    type="submit"
                    className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-semibold py-2.5 px-4 rounded-lg shadow transition-all flex items-center justify-center gap-1.5 text-xs"
                  >
                    <MessageCircle className="w-4 h-4 fill-white text-emerald-600" />
                    <span>Send WhatsApp Request</span>
                  </button>
                  <p className="text-[10px] text-stone-400 text-center">
                    Directly chats with +91 9906184607.
                  </p>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-950 text-stone-300 pt-12 pb-8 border-t border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-10 mb-8">
          
          <div className="space-y-3 md:col-span-1">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-rose-900 text-rose-50 flex items-center justify-center font-serif text-base font-bold">
                S
              </div>
              <span className="text-lg font-serif font-bold text-white">
                Sapna Beauty Salon
              </span>
            </div>
            <p className="text-stone-400 text-xs leading-relaxed">
              Premier beauty salon and makeup studio in Hidyal, Kishtwar, Jammu & Kashmir.
            </p>
            <div className="flex items-center gap-2.5 pt-1">
              <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-stone-800 hover:bg-emerald-600 text-stone-300 hover:text-white flex items-center justify-center transition-colors">
                <MessageCircle className="w-3.5 h-3.5 fill-current" />
              </a>
              <a href={`tel:${whatsappNumber}`} className="w-8 h-8 rounded-full bg-stone-800 hover:bg-rose-700 text-stone-300 hover:text-white flex items-center justify-center transition-colors">
                <Phone className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-serif font-semibold text-xs uppercase tracking-wider mb-3">Quick Links</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#services" className="hover:text-rose-300 transition-colors">Services</a></li>
              <li><a href="#about" className="hover:text-rose-300 transition-colors">About Us</a></li>
              <li><a href="#gallery" className="hover:text-rose-300 transition-colors">Gallery</a></li>
              <li><a href="#why-us" className="hover:text-rose-300 transition-colors">Why Us</a></li>
              <li><a href="#book" className="hover:text-rose-300 transition-colors">Book Slot</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-serif font-semibold text-xs uppercase tracking-wider mb-3">Services</h4>
            <ul className="space-y-2 text-xs">
              <li><span className="text-stone-400">HD Bridal Makeup</span></li>
              <li><span className="text-stone-400">Engagement & Reception</span></li>
              <li><span className="text-stone-400">Keratin Smoothening</span></li>
              <li><span className="text-stone-400">Gold & Diamond Facials</span></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-serif font-semibold text-xs uppercase tracking-wider mb-3">Contact</h4>
            <div className="space-y-2.5 text-xs text-stone-400">
              <p className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-rose-400 shrink-0 mt-0.5" />
                <span>Hidyal, Kishtwar, J&K (Pin: 182204)</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                <span className="text-rose-300 font-semibold">+91 9906184607</span>
              </p>
              <p className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                <span>Mon - Sun: 9:30 AM - 7:30 PM</span>
              </p>
            </div>
          </div>

        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 border-t border-stone-900 flex flex-col sm:flex-row items-center justify-between text-[11px] text-stone-500 gap-3">
          <p>© {new Date().getFullYear()} Sapna beauty salon Kishtwar. Demo Preview Website.</p>
          <div className="flex items-center gap-4">
            <span className="text-stone-400 font-medium">Hidyal, Kishtwar J&K</span>
            <span className="text-rose-400 font-semibold">+91 9906184607</span>
          </div>
        </div>
      </footer>

    </div>
  );
}
