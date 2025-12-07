import { useState, useEffect } from 'react';
import {
  Leaf,
  Scissors,
  Trees,
  Wind,
  Award,
  Clock,
  DollarSign,
  Shield,
  ChevronLeft,
  ChevronRight,
  Star,
  Phone,
  Mail,
  MapPin,
  Snowflake,
  Droplets,
  Sun,
  CalendarCheck
} from 'lucide-react';

function App() {
  const [currentService, setCurrentService] = useState(0);
  const [currentHeroImage, setCurrentHeroImage] = useState(0);
  const [isVisible, setIsVisible] = useState<{ [key: string]: boolean }>({});

  const heroImages = [
    'https://i.ibb.co/RTB2n9Kh/hero-bg-SOD.png',
    'https://i.ibb.co/tMNy2zYF/hero-bg-mowing.png',
    'https://i.ibb.co/M5fHty7p/hero-bg-tree.png',
    'https://i.ibb.co/gLMyKWQZ/hero-bg-patio.png',
  ];

  const services = [
    {
      title: 'Professional Lawn Mowing & Maintenance',
      description: 'Expert lawn care services including mowing, edging, trimming, and fertilization to keep your grass healthy, lush, and perfectly manicured throughout the growing season.',
      image: 'https://images.pexels.com/photos/1301856/pexels-photo-1301856.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600',
      icon: Scissors,
    },
    {
      title: 'Custom Landscaping & Design',
      description: 'Transform your outdoor space with professional landscaping design services including garden beds, mulching, plant installation, and hardscaping solutions in Buffalo NY.',
      image: 'https://images.pexels.com/photos/1105019/pexels-photo-1105019.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600',
      icon: Leaf,
    },
    {
      title: 'Tree Removal & Trimming Services',
      description: 'Safe and professional tree removal, tree trimming, stump grinding, and emergency tree services to protect your property and enhance curb appeal.',
      image: 'https://images.pexels.com/photos/8353813/pexels-photo-8353813.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600',
      icon: Trees,
    },
    {
      title: 'Fall & Spring Cleanup Services',
      description: 'Comprehensive seasonal cleanup including leaf removal, debris clearing, bed preparation, lawn aeration, and property winterization services.',
      image: 'https://images.pexels.com/photos/4505923/pexels-photo-4505923.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600',
      icon: Wind,
    },
    {
      title: 'Snow Removal & Winter Services',
      description: 'Reliable snow plowing, snow blowing, ice management, and winter property maintenance to keep your home or business safe during Buffalo winters.',
      image: 'https://images.pexels.com/photos/1571458/pexels-photo-1571458.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600',
      icon: Snowflake,
    },
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      rating: 5,
      text: 'Best lawn care service in Buffalo! 716 Lawn Care transformed our backyard with their professional landscaping. Highly recommend for anyone looking for reliable lawn maintenance.',
    },
    {
      name: 'Michael Chen',
      rating: 5,
      text: 'Professional lawn mowing service that\'s always on time. Their team handles everything from spring cleanup to fall leaf removal. Great value for quality work!',
    },
    {
      name: 'Emily Rodriguez',
      rating: 5,
      text: 'Needed emergency tree removal and 716 Lawn Care was quick, safe, and affordable. Best tree service in Western New York!',
    },
  ];

  const features = [
    {
      icon: Award,
      title: 'Premium Quality Service',
      description: 'Professional lawn care and landscaping with meticulous attention to every detail of your property',
    },
    {
      icon: Clock,
      title: 'Reliable & Punctual',
      description: 'Scheduled lawn maintenance services that respect your time with consistent weekly or bi-weekly visits',
    },
    {
      icon: DollarSign,
      title: 'Competitive Pricing',
      description: 'Affordable lawn care rates with transparent quotes and no hidden fees for Buffalo area properties',
    },
    {
      icon: Shield,
      title: 'Fully Licensed & Insured',
      description: 'Professional lawn care company with full insurance coverage for your complete peace of mind',
    },
  ];

  const seasonalServices = [
    {
      icon: Sun,
      season: 'Spring Services',
      services: 'Lawn cleanup, mulching, fertilization, aeration, overseeding, and garden bed preparation',
      color: 'from-yellow-400 to-orange-400',
    },
    {
      icon: Leaf,
      season: 'Summer Maintenance',
      services: 'Weekly mowing, edging, trimming, weed control, lawn treatments, and irrigation management',
      color: 'from-green-400 to-green-600',
    },
    {
      icon: Wind,
      season: 'Fall Cleanup',
      services: 'Leaf removal, gutter cleaning, lawn aeration, winterization, and property preparation',
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: Snowflake,
      season: 'Winter Services',
      services: 'Snow plowing, snow removal, ice management, walkway clearing, and emergency services',
      color: 'from-blue-400 to-blue-600',
    },
  ];

  useEffect(() => {
    const heroInterval = setInterval(() => {
      setCurrentHeroImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(heroInterval);
  }, []);

  useEffect(() => {
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1,
    });

    document.querySelectorAll('[id^="section-"]').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const nextService = () => {
    setCurrentService((prev) => (prev + 1) % services.length);
  };

  const prevService = () => {
    setCurrentService((prev) => (prev - 1 + services.length) % services.length);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Highly Animated & Attractive */}
      <section className="relative min-h-screen flex items-center justify-center">
        {/* Dynamic Image Slideshow Background */}
        <div className="absolute inset-0">
          {heroImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-2000 ${
                index === currentHeroImage ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={image}
                alt={`Professional Lawn Care Buffalo NY ${index + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-green-900/60"></div>
            </div>
          ))}
        </div>

        {/* Animated Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <Leaf
              key={i}
              className="absolute text-green-400 opacity-20 animate-bounce"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${20 + Math.random() * 30}px`,
                height: `${20 + Math.random() * 30}px`,
                animationDuration: `${3 + Math.random() * 3}s`,
                animationDelay: `${Math.random() * 2}s`,
              }}
            />
          ))}
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-left space-y-8 pb-6">
              <div className="inline-flex items-center space-x-2 bg-green-600/90 backdrop-blur-sm px-6 py-3 rounded-full animate-slide-up" style={{ animationDelay: '0.2s', opacity: 0 }}>
                <Leaf className="w-5 h-5 text-white" />
                <span className="text-white font-medium">Buffalo's #1 Lawn Care Service</span>
              </div>
              
<h1
  className="hero-h1 text-5xl sm:text-6xl lg:text-6xl xl:text-7xl font-bold text-white animate-slide-up"
  style={{ animationDelay: '0.4s', opacity: 0 }}
>
  <span className="h1-line">Professional</span>
{" "}
  <span className="h1-line gradient-line bg-gradient-to-r from-green-400 to-green-200 bg-clip-text text-transparent">
    Lawn Care & Landscaping
  </span>

  <span className="h1-subline h1-line text-4xl sm:text-5xl mt-4 block">
    Services in Buffalo, NY
  </span>
</h1>

              <p className="text-xl sm:text-2xl text-gray-200 animate-slide-up" style={{ animationDelay: '0.6s', opacity: 0 }}>
                Expert lawn mowing, landscaping design, tree removal, and seasonal cleanup services.
                Transform your outdoor space with Western New York's most trusted lawn care professionals.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 animate-slide-up" style={{ animationDelay: '0.8s', opacity: 0 }}>
                <a
                  href="#quote"
                  className="group relative px-8 py-5 bg-green-600 text-white font-bold text-lg rounded-full overflow-hidden transition-all duration-300 hover:bg-green-700 hover:scale-105 hover:shadow-2xl text-center"
                >
                  <span className="relative z-10">Get Free Lawn Care Quote</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
                </a>
                <a
                  href="tel:716-555-5296"
                  className="px-8 py-5 bg-white text-green-600 font-bold text-lg rounded-full border-2 border-white transition-all duration-300 hover:bg-green-50 hover:scale-105 hover:shadow-xl text-center"
                >
                  Call (716) 555-LAWN
                </a>
              </div>

              <div className="flex items-center space-x-8 text-white animate-fade-in" style={{ animationDelay: '1s', opacity: 0 }}>
                <div className="flex items-center space-x-2">
                  <Award className="w-6 h-6 text-green-400" />
                  <span>Licensed & Insured</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star className="w-6 h-6 text-yellow-400 fill-current" />
                  <span>5-Star Rated</span>
                </div>
              </div>
            </div>

            {/* Image Grid */}
            <div className="hidden lg:grid grid-cols-2 gap-4 animate-scale-in" style={{ animationDelay: '1s', opacity: 0 }}>
              <div className="space-y-4">
                <img
                  src="https://i.ibb.co/WNfQ4QHr/hero-landscape.png"
                  alt="Professional Landscaping Buffalo"
                  className="rounded-2xl shadow-2xl w-full h-48 object-cover transform hover:scale-105 transition-transform duration-500"
                />
                <img
                  src="https://i.ibb.co/whrqhCng/hero-lawn.png"
                  alt="Lawn Mowing Service"
                  className="rounded-2xl shadow-2xl w-full h-64 object-cover transform hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="space-y-4 pt-8">
                <img
                  src="https://i.ibb.co/mFCWSzKz/hero-snow.png"
                  alt="Snow Removal Buffalo NY"
                  className="rounded-2xl shadow-2xl w-full h-64 object-cover transform hover:scale-105 transition-transform duration-500"
                />
                <img
                  src="https://i.ibb.co/VnRNym6/hero-tree.png"
                  alt="Tree Removal Buffalo NY"
                  className="rounded-2xl shadow-2xl w-full h-48 object-cover transform hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white rounded-full animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Services Carousel Section - Landscape Card Slider */}
      <section id="services" className="py-20 sm:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Comprehensive Lawn Care & Landscaping Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From weekly lawn mowing to complete landscaping design, tree removal, and seasonal cleanup services.
              Professional lawn care solutions for residential and commercial properties in Buffalo, NY and surrounding areas.
            </p>
          </div>

          {/* Carousel */}
          <div className="relative">
            <div className="overflow-hidden rounded-2xl">
              <div
                className="flex transition-transform duration-700 ease-out"
                style={{ transform: `translateX(-${currentService * 100}%)` }}
              >
                {services.map((service, index) => (
                  <div key={index} className="min-w-full px-2">
                    <div className="bg-gradient-to-br from-green-50 to-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
                      <div className="relative h-80 overflow-hidden">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                          <service.icon className="w-12 h-12 mb-4" />
                          <h3 className="text-3xl font-bold mb-3">
                            {service.title}
                          </h3>
                          <p className="text-lg text-gray-200 mb-6">
                            {service.description}
                          </p>
                          <a
                            href="#quote"
                            className="inline-flex items-center bg-green-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-700 transition-colors"
                          >
                            Request Service Quote
                            <ChevronRight className="ml-2 w-5 h-5" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Carousel Controls */}
            <button
              onClick={prevService}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm p-4 rounded-full shadow-lg hover:bg-green-600 hover:text-white transition-all duration-300 group z-10"
              aria-label="Previous lawn care service"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextService}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm p-4 rounded-full shadow-lg hover:bg-green-600 hover:text-white transition-all duration-300 group z-10"
              aria-label="Next lawn care service"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Carousel Indicators */}
            <div className="flex justify-center mt-8 space-x-2">
              {services.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentService(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentService ? 'w-8 bg-green-600' : 'w-2 bg-gray-300'
                  }`}
                  aria-label={`View ${services[index].title}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section
        id="section-features"
        className="py-20 sm:py-32 bg-gradient-to-b from-white to-green-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`text-center mb-16 transition-all duration-1000 ${
              isVisible['section-features'] ? 'animate-slide-up' : 'opacity-0'
            }`}
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Why Choose 716 Lawn Care for Your Property?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional lawn maintenance company serving Buffalo, Amherst, Clarence, and Western New York.
              Experience exceptional service with every visit.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${
                  isVisible['section-features'] ? 'animate-scale-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-green-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-green-600 transition-colors">
                  <feature.icon className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Year-Round Seasonal Services */}
      <section
        id="section-seasonal"
        className="py-20 sm:py-32 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`text-center mb-16 transition-all duration-1000 ${
              isVisible['section-seasonal'] ? 'animate-slide-up' : 'opacity-0'
            }`}
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Year-Round Lawn Care Services in Buffalo, NY
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Complete seasonal lawn maintenance and landscaping services to keep your property looking pristine
              throughout spring, summer, fall, and winter in Western New York.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {seasonalServices.map((season, index) => (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 ${
                  isVisible['section-seasonal'] ? 'animate-scale-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className={`bg-gradient-to-br ${season.color} p-8 sm:p-12 text-white min-h-[280px] flex flex-col justify-center`}>
                  <season.icon className="w-16 h-16 mb-6 transform group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-3xl font-bold mb-4">{season.season}</h3>
                  <p className="text-lg leading-relaxed">{season.services}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section
        id="section-areas"
        className="py-20 sm:py-32 bg-gradient-to-b from-green-50 to-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`text-center mb-16 transition-all duration-1000 ${
              isVisible['section-areas'] ? 'animate-slide-up' : 'opacity-0'
            }`}
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Lawn Care Service Areas Across Western New York
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional lawn mowing, landscaping, and tree services throughout Buffalo and surrounding communities
            </p>
          </div>

          <div
            className={`bg-white rounded-2xl shadow-xl p-8 sm:p-12 transition-all duration-1000 ${
              isVisible['section-areas'] ? 'animate-scale-in' : 'opacity-0'
            }`}
          >
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                'Buffalo, NY',
                'Amherst, NY',
                'Clarence, NY',
                'Cheektowaga, NY',
                'Tonawanda, NY',
                'West Seneca, NY',
                'Hamburg, NY',
                'Lancaster, NY',
                'Orchard Park, NY',
                'Williamsville, NY',
                'Depew, NY',
                'Kenmore, NY',
              ].map((area, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 text-gray-700 hover:text-green-600 transition-colors"
                >
                  <MapPin className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="font-medium">{area}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <p className="text-gray-600 mb-4">Don't see your area? Contact us to check service availability!</p>
              <a
                href="#quote"
                className="inline-block px-8 py-3 bg-green-600 text-white font-semibold rounded-full hover:bg-green-700 transition-colors"
              >
                Check Service Availability
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        id="section-testimonials"
        className="py-20 sm:py-32 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`text-center mb-16 transition-all duration-1000 ${
              isVisible['section-testimonials'] ? 'animate-slide-up' : 'opacity-0'
            }`}
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              What Buffalo Homeowners Say About Our Lawn Care
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Read reviews from satisfied customers across Western New York who trust 716 Lawn Care
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br from-green-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${
                  isVisible['section-testimonials'] ? 'animate-scale-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic leading-relaxed">"{testimonial.text}"</p>
                <p className="font-bold text-gray-900">{testimonial.name}</p>
                <p className="text-sm text-gray-600">Buffalo, NY</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-green-500 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white rounded-full filter blur-3xl"></div>
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-5xl font-bold text-white mb-6">
            Ready for a Professionally Maintained Lawn?
          </h2>
          <p className="text-xl text-green-50 mb-8">
            Get your free lawn care quote today! Serving Buffalo, Amherst, Clarence, and all of Western New York.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#quote"
              className="inline-block px-8 py-4 bg-white text-green-600 font-bold text-lg rounded-full hover:bg-green-50 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              Get Free Estimate
            </a>
            <a
              href="tel:716-555-5296"
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-white font-bold text-lg rounded-full border-2 border-white hover:bg-white/10 transition-all duration-300"
            >
              <Phone className="w-5 h-5 mr-2" />
              (716) 555-LAWN
            </a>
          </div>
        </div>
      </section>

      {/* Quote Form Section */}
      <section
        id="quote"
        className="section-quote py-20 sm:py-32 bg-white"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`text-center mb-12 transition-all duration-1000 ${
              isVisible['section-quote'] ? 'animate-slide-up' : 'opacity-0'
            }`}
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Request Your Free Lawn Care Quote
            </h2>
            <p className="text-xl text-gray-600">
              Get a free estimate for lawn mowing, landscaping, tree services, or seasonal cleanup in Buffalo, NY.
              We respond within 24 hours!
            </p>
          </div>

          <div
            className={`bg-gradient-to-br from-green-50 to-white p-8 sm:p-12 rounded-2xl shadow-xl transition-all duration-1000 ${
              isVisible['section-quote'] ? 'animate-scale-in' : 'opacity-0'
            }`}
            style={{ animationDelay: '0.2s' }}
          >
            <div className="bg-white border-4 border-dashed border-green-300 rounded-xl p-12 text-center">
              <div className="mb-6">
                <CalendarCheck className="w-16 h-16 text-green-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  GoHighLevel Form Embed Area
                </h3>
                <p className="text-gray-600 mb-4">
                  Replace this placeholder with your GoHighLevel form embed code
                </p>
                <p className="text-sm text-gray-500">
                  Contact us for lawn care services including mowing, landscaping, tree removal, and seasonal maintenance
                </p>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <code className="text-sm text-green-800">
                  &lt;!-- Insert your GHL form embed code here --&gt;
                </code>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-b from-gray-900 to-black text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <Leaf className="w-8 h-8 text-green-500" />
                <h3 className="text-2xl font-bold">716 Lawn Care</h3>
              </div>
              <p className="text-gray-400 mb-6">
                Professional lawn care, landscaping, and tree services in Buffalo, NY. Licensed and insured lawn maintenance
                company serving Western New York homeowners and businesses since 2008.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-400 hover:text-green-500 transition-colors">
                  <Phone className="w-5 h-5" />
                  <a href="tel:716-555-5296">(716) 555-LAWN</a>
                </div>
                <div className="flex items-center space-x-3 text-gray-400 hover:text-green-500 transition-colors">
                  <Mail className="w-5 h-5" />
                  <a href="mailto:info@716lawncare.com">info@716lawncare.com</a>
                </div>
                <div className="flex items-center space-x-3 text-gray-400 hover:text-green-500 transition-colors">
                  <MapPin className="w-5 h-5" />
                  <span>Buffalo, NY & Surrounding Areas</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Our Services</h4>
              <ul className="space-y-2">
                {[
                  'Lawn Mowing',
                  'Landscaping Design',
                  'Tree Removal',
                  'Spring Cleanup',
                  'Fall Cleanup',
                  'Snow Removal',
                  'Lawn Fertilization',
                  'Mulching Services'
                ].map((service) => (
                  <li key={service}>
                    <a href="#services" className="text-gray-400 hover:text-green-500 transition-colors">
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Service Areas</h4>
              <ul className="space-y-2">
                {['Buffalo', 'Amherst', 'Clarence', 'Cheektowaga', 'Williamsville', 'West Seneca'].map((area) => (
                  <li key={area}>
                    <a href="#section-areas" className="text-gray-400 hover:text-green-500 transition-colors">
                      {area}, NY
                    </a>
                  </li>
                ))}
              </ul>
              <a href="#quote" className="inline-block mt-4 text-green-500 hover:text-green-400 font-semibold transition-colors">
                View All Areas →
              </a>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-gray-400 text-center md:text-left">
                &copy; {new Date().getFullYear()} 716 Lawn Care - Professional Lawn Care & Landscaping Services Buffalo, NY. All rights reserved.
              </p>
              <div className="flex space-x-6">
                <a href="#" className="text-gray-400 hover:text-green-500 transition-colors">Privacy Policy</a>
                <a href="#" className="text-gray-400 hover:text-green-500 transition-colors">Terms of Service</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
