'use client';

import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import ContactForm from '../components/ContactForm';
import UpArrow from '../components/UpArrow';
import { Check, Star, Phone, Users, TrendingUp, Target, Zap, Shield, Mail, MapPin, Clock, Heart, Car, CreditCard, FileText, ArrowRight, Facebook, Linkedin, Instagram } from 'lucide-react';
import { useState, useEffect } from 'react';
import Image from 'next/image';

// Custom X (formerly Twitter) icon component
const XIcon = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export default function Home() {
  const [openFAQ, setOpenFAQ] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  // Carousel images
  const carouselImages = [
    '/side.jpg',
    '/images/side2.jpg',
    '/images/side3.jpg'
  ];

  // Auto-advance carousel every 7 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 7000);

    return () => clearInterval(interval);
  }, [carouselImages.length]);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? carouselImages.length - 1 : prevIndex - 1
    );
  };

  const goToImage = (index) => {
    setCurrentImageIndex(index);
  };

  const faqData = [
    {
      question: "How quickly can I expect to see results from your lead generation services?",
      answer: "Most clients start seeing qualified leads within 2-3 weeks of campaign launch. Our proven strategies typically deliver 10-15 qualified leads per month for small businesses, with larger campaigns generating 50+ leads monthly."
    },
    {
      question: "What makes your leads different from other lead generation companies?",
      answer: "We focus on quality over quantity. Our leads are pre-qualified through multiple touchpoints, ensuring they have genuine interest and decision-making authority. We also provide detailed lead profiles and conversation notes to maximize conversion rates."
    },
    {
      question: "Do you offer a money-back guarantee?",
      answer: "No, we don&apos;t provide refunds or offer a 30-day guarantee. All sales are final. We focus on delivering high-quality leads and services, and we&apos;re confident in our ability to deliver value to your business through our proven expertise."
    },
    {
      question: "What industries do you specialize in?",
      answer: "We work with businesses across various industries including technology, healthcare, finance, real estate, manufacturing, and professional services. Our team has experience in B2B lead generation for companies of all sizes, from startups to Fortune 500 companies."
    },
    {
      question: "How do you ensure lead quality and qualification?",
      answer: "We use a multi-step qualification process including initial research, targeted outreach, detailed conversations, and comprehensive lead scoring. Each lead is verified for budget, authority, need, and timeline (BANT criteria) before being delivered to you."
    },

  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section id="hero" className="animate-fade-in">
        <HeroSection />
      </section>

      {/* Background Image Section with Overlay Content */}
      <section className="relative min-h-screen overflow-hidden mt-8 md:mt-16">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            key={currentImageIndex}
            src={carouselImages[currentImageIndex]}
            alt="Business planning background"
            fill
            className="object-cover transition-all duration-1000 ease-in-out animate-zoom-out"
          />
          {/* Blue overlay for text readability */}
          <div className="absolute inset-0 bg-blue-900/60"></div>
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 flex items-center min-h-screen">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full">
            <div className="max-w-2xl">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
                Ready to boost your sales?
              </h2>
              <p className="text-lg sm:text-xl lg:text-2xl text-white/90 mb-6 sm:mb-8 leading-relaxed">
                Join hundreds of businesses that trust us to generate qualified leads and increase their revenue.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-12">
                <button className="bg-green-600 hover:bg-green-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold text-base sm:text-lg transition-colors">
                  Start Lead Campaign
                </button>
                <button className="bg-green-500/20 hover:bg-green-500/30 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold text-base sm:text-lg border border-green-300/30 transition-colors">
                  View Case Studies
                </button>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-1 sm:mb-2">500+</div>
                  <div className="text-white/80 text-xs sm:text-sm lg:text-base">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-1 sm:mb-2">95%</div>
                  <div className="text-white/80 text-xs sm:text-sm lg:text-base">Success Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-1 sm:mb-2">24/7</div>
                  <div className="text-white/80 text-xs sm:text-sm lg:text-base">Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Arrows - Hidden */}
        <div className="absolute left-6 top-1/2 transform -translate-y-1/2 hidden">
          <button
            onClick={prevImage}
            className="w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        </div>
        <div className="absolute right-6 top-1/2 transform -translate-y-1/2 hidden">
          <button
            onClick={nextImage}
            className="w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Slider Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3">
          {carouselImages.map((_, index) => (
            <button
              key={index}
              onClick={() => goToImage(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentImageIndex
                ? 'bg-white scale-125'
                : 'bg-white/50 hover:bg-white/75'
                }`}
            />
          ))}
        </div>

      </section>




      {/* How It Works Section */}
      <section id="how-it-works" className="py-16 sm:py-24 lg:py-32 bg-gradient-to-b from-green-50/30 via-white to-green-100/40 animate-fade-in">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 leading-tight mb-4 sm:mb-6">
              Every step forward is a step toward{' '}
              <span className="relative">
                Financial Security
                <div className="absolute bottom-1 sm:bottom-2 left-0 w-full h-1 sm:h-2 bg-green-500 -z-10 transform -skew-x-12"></div>
              </span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
              Our proven 4-step process ensures you get the right insurance and financial guidance for your needs.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12 max-w-7xl mx-auto relative">
            {/* Curved Connecting Lines */}
            <svg className="hidden lg:block absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
              {/* Curve from card 1 to card 2 */}
              <path
                d="M 12.5% 50% Q 25% 30% 37.5% 50%"
                stroke="#86efac"
                strokeWidth="3"
                fill="none"
                strokeDasharray="8,4"
                className="animate-pulse"
              />
              {/* Curve from card 2 to card 3 */}
              <path
                d="M 37.5% 50% Q 50% 70% 62.5% 50%"
                stroke="#86efac"
                strokeWidth="3"
                fill="none"
                strokeDasharray="8,4"
                className="animate-pulse"
                style={{ animationDelay: '0.2s' }}
              />
              {/* Curve from card 3 to card 4 */}
              <path
                d="M 62.5% 50% Q 75% 30% 87.5% 50%"
                stroke="#86efac"
                strokeWidth="3"
                fill="none"
                strokeDasharray="8,4"
                className="animate-pulse"
                style={{ animationDelay: '0.4s' }}
              />
            </svg>

            {/* Step 1: Connect */}
            <div className="relative z-10 bg-white rounded-xl shadow-lg p-6 sm:p-8 text-center animate-slide-up hover:shadow-xl transition-all duration-500 hover:scale-105">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <Users className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-green-700 mb-3 sm:mb-4">Connect</h3>
              <p className="text-gray-600 text-sm sm:text-base">
                Take the first step by purchasing leads from us. We sell high-quality, verified leads in your target market from our proven pay-per-call and lead generation campaigns.
              </p>
            </div>

            {/* Step 2: Explore */}
            <div className="relative z-10 bg-white rounded-xl shadow-lg p-6 sm:p-8 text-center animate-slide-up hover:shadow-xl transition-all duration-500 hover:scale-105" style={{ animationDelay: '0.2s' }}>
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <Target className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-green-700 mb-3 sm:mb-4">Explore</h3>
              <p className="text-gray-600 text-sm sm:text-base">
                Through detailed analysis, we&apos;ll explore your current situation and develop personalized strategies for your insurance and financial goals.
              </p>
            </div>

            {/* Step 3: Transform */}
            <div className="relative z-10 bg-white rounded-xl shadow-lg p-6 sm:p-8 text-center animate-slide-up hover:shadow-xl transition-all duration-500 hover:scale-105" style={{ animationDelay: '0.4s' }}>
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-green-700 mb-3 sm:mb-4">Transform</h3>
              <p className="text-gray-600 text-sm sm:text-base">
                Experience positive changes as we work together to secure the right insurance coverage and optimize your financial situation.
              </p>
            </div>

            {/* Step 4: Thrive */}
            <div className="relative z-10 bg-white rounded-xl shadow-lg p-6 sm:p-8 text-center animate-slide-up hover:shadow-xl transition-all duration-500 hover:scale-105" style={{ animationDelay: '0.6s' }}>
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <Shield className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-green-700 mb-3 sm:mb-4">Thrive</h3>
              <p className="text-gray-600 text-sm sm:text-base">
                Gain the tools and confidence to maintain your financial security and insurance protection for the long term.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 sm:py-24 lg:py-32 bg-white animate-fade-in">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 leading-tight mb-4 sm:mb-6">
              Get In{' '}
              <span className="relative">
                Touch
                <div className="absolute bottom-1 sm:bottom-2 left-0 w-full h-1 sm:h-2 bg-green-500 -z-10 transform -skew-x-12"></div>
              </span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to Take high-quality leads for your business? Contact us today to discuss our available lead inventory and pricing packages.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 max-w-7xl mx-auto">
            {/* Contact Form */}
            <div className="flex-1 animate-slide-up">
              <ContactForm
                title="Send us a message"
                description="Ready to get started? Fill out the form below and we&apos;ll get back to you within 24 hours."
                submitButtonText="Get Quality Leads"
                successTitle="We&apos;re excited to work with you!"
                successMessage="We&apos;ve received your information and will contact you within 24 hours to discuss our available lead inventory and pricing options."
                className="bg-gray-50"
              />
            </div>

            {/* Contact Info */}
            <div className="flex-1 lg:pl-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg border border-gray-200">
                <div className="space-y-6 sm:space-y-8">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Contact Information</h3>
                    <div className="space-y-4 sm:space-y-6">
                      <div className="flex items-start gap-3 sm:gap-4">
                        <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-green-500 mt-0.5 sm:mt-0 flex-shrink-0" />
                        <div className="min-w-0 flex-1">
                          <p className="font-semibold text-gray-900 text-sm sm:text-base mb-1">Phone</p>
                          <p className="text-gray-600 text-sm sm:text-base break-words leading-relaxed">+91 (555) 123-4567</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 sm:gap-4">
                        <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-green-500 mt-0.5 sm:mt-0 flex-shrink-0" />
                        <div className="min-w-0 flex-1">
                          <p className="font-semibold text-gray-900 text-sm sm:text-base mb-1">Email</p>
                          <p className="text-gray-600 text-sm sm:text-base break-words leading-relaxed">www.growxmarketingservices@gmail.com</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 sm:gap-4">
                        <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-green-500 mt-0.5 sm:mt-0 flex-shrink-0" />
                        <div className="min-w-0 flex-1">
                          <p className="font-semibold text-gray-900 text-sm sm:text-base mb-1">Address</p>
                          <p className="text-gray-600 text-sm sm:text-base break-words leading-relaxed">Bhavya Corporate Tower, Vibhuti Khand, Lucknow, Uttar Pradesh, Gomti Nagar, Vibhuti Khand-226010</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 sm:gap-4">
                        <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-green-500 mt-0.5 sm:mt-0 flex-shrink-0" />
                        <div className="min-w-0 flex-1">
                          <p className="font-semibold text-gray-900 text-sm sm:text-base mb-1">Business Hours</p>
                          <p className="text-gray-600 text-sm sm:text-base break-words leading-relaxed">8:30am Est to 7:30pm Est</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 p-4 sm:p-6 rounded-lg mt-6 sm:mt-8">
                  <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-3 sm:mb-4">Why Choose GrowX?</h4>
                  <ul className="space-y-2 sm:space-y-3 text-gray-600 text-sm sm:text-base">
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="leading-relaxed">Proven track record with 500+ clients</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="leading-relaxed">Average 300% ROI for our clients</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="leading-relaxed">Dedicated account managers</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="leading-relaxed">Money-back guarantee</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 sm:py-24 lg:py-32 bg-gray-50 animate-fade-in">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 leading-tight mb-4 sm:mb-6">
              Frequently Asked{' '}
              <span className="relative">
                Questions
                <div className="absolute bottom-1 sm:bottom-2 left-0 w-full h-1 sm:h-2 bg-green-500 -z-10 transform -skew-x-12"></div>
              </span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
              Get answers to the most common questions about our lead generation services and processes.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-3 sm:space-y-4">
            {faqData.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden transition-all duration-500 hover:shadow-xl">
                <button
                  className="w-full px-4 sm:px-6 py-3 sm:py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-300 focus:outline-none"
                  onClick={() => toggleFAQ(index)}
                >
                  <h3 className="text-base sm:text-lg font-medium text-gray-900 pr-3 sm:pr-4 leading-relaxed">{faq.question}</h3>
                  <svg
                    className={`w-4 h-4 sm:w-5 sm:h-5 text-gray-500 transform transition-transform duration-300 flex-shrink-0 ${openFAQ === index ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${openFAQ === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                >
                  <div className="px-4 sm:px-6 pb-3 sm:pb-4">
                    <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center mt-8 sm:mt-12">
            <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6">
              Still have questions? We&apos;re here to help!
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
              <button className="bg-green-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-all duration-500 hover:bg-green-600 hover:scale-105 hover:shadow-lg active:scale-95 transform">
                Contact Our Team
              </button>
              <button className="border-2 border-gray-300 text-gray-700 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-all duration-500 hover:border-green-500 hover:text-green-600 hover:scale-105 active:scale-95 transform">
                Schedule a Call
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 sm:py-12 animate-fade-in">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {/* Company Info */}
            <div>
              <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">GrowX Marketing Services</h4>
              <p className="text-gray-400 mb-4 text-sm sm:text-base">
                Professional lead generation services that help businesses grow.
              </p>
              <h5 className="text-1xl font-semibold mb-3">Visit our Socials</h5>
              <div className="flex flex-wrap gap-2">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500 transition-colors p-2 hover:bg-gray-800 rounded-full">
                  <Facebook className="w-4 h-4" />
                </a>
                <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-gray-800 rounded-full">
                  <XIcon className="w-4 h-4" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-600 transition-colors p-2 hover:bg-gray-800 rounded-full">
                  <Linkedin className="w-4 h-4" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-500 transition-colors p-2 hover:bg-gray-800 rounded-full">
                  <Instagram className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Services</h4>
              <ul className="space-y-1 sm:space-y-2 text-gray-400 text-sm sm:text-base">
                <li><a href="/services" className="hover:text-white transition-colors">Affordable Care Act (ACA)</a></li>
                <li><a href="/services" className="hover:text-white transition-colors">Final Expense Insurance</a></li>
                <li><a href="/services" className="hover:text-white transition-colors">Auto Insurance</a></li>
                <li><a href="/services" className="hover:text-white transition-colors">Social Security Disability</a></li>
                <li><a href="/services" className="hover:text-white transition-colors">Debt Settlement</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Our Verticals</h4>
              <ul className="space-y-1 sm:space-y-2 text-gray-400 text-sm sm:text-base">
                <li><a href="/products#aca" className="hover:text-white transition-colors">ACA (Affordable Care Act)</a></li>
                <li><a href="/products#finance" className="hover:text-white transition-colors">Finance & Insurance</a></li>

                <li><a href="/products#pay-per-call" className="hover:text-white transition-colors">Pay-Per-Call Campaigns</a></li>
              </ul>
            </div>


            {/* Company */}
            <div>

              <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Company</h4>
              <ul className="space-y-1 sm:space-y-2 text-gray-400 text-sm sm:text-base">
                <li><a href="/about" className="hover:text-white transition-colors">About Us</a></li>


                <li><a href="/faq" className="hover:text-white transition-colors">FAQ&apos;s</a></li>
                <li><a href="/contact" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 GrowX Marketing Services. All rights reserved. | Privacy Policy | Terms of Service</p>
          </div>
        </div>
      </footer >
      <UpArrow />
    </div >
  );
}
