'use client';

import { useState } from 'react';
import Navbar from '../../components/Navbar';
import UpArrow from '../../components/UpArrow';
import ServicesForm from '../../components/ServicesForm';
import Image from 'next/image';
import {
    CheckCircle,
    ArrowRight,
    Star,
    Check,
    Award,
    Target,
    TrendingUp,
    Headphones
} from 'lucide-react';

export default function ServicesPage() {
    const [activeService, setActiveService] = useState(0);

    const services = [
        {
            id: 0,
            title: "Affordable Care Act (ACA)",
            image: "/aca.jpg",
            description: "Expert guidance through ACA enrollment and compliance",
            features: [
                "ACA enrollment assistance",
                "Compliance consulting",
                "Plan comparison and selection",
                "Subsidy qualification help",
                "Annual renewal support",
                "Documentation assistance"
            ],
            benefits: [
                "Save up to 90% on premiums",
                "Access to quality healthcare"

            ],
            color: "bg-blue-500",
            bgColor: "bg-blue-50"
        },
        {
            id: 1,
            title: "Final Expense Insurance",
            image: "/finalexpense.jpg",
            description: "Comprehensive end-of-life expense coverage solutions",
            features: [
                "Burial and funeral expense coverage",
                "Medical expense protection",
                "Simplified underwriting process",
                "Guaranteed acceptance options",
                "Flexible payment plans",
                "Family protection planning"
            ],
            benefits: [
                "Protect your family from financial burden",
                "Guaranteed acceptance for seniors",
                "No medical exam required",
                "Immediate coverage options"
            ],
            color: "bg-purple-500",
            bgColor: "bg-purple-50"
        },
        {
            id: 2,
            title: "Auto Insurance",
            image: "/setttle.jpg",
            description: "Complete auto insurance solutions for all drivers",
            features: [
                "Liability coverage",
                "Collision and comprehensive",
                "Uninsured motorist protection",
                "Personal injury protection",
                "Roadside assistance",
                "Multi-vehicle discounts"
            ],
            benefits: [
                "Competitive rates from top carriers",
                "24/7 claims support",
                "Multi-policy discounts",
                "Flexible payment options"
            ],
            color: "bg-green-500",
            bgColor: "bg-green-50"
        },
        {
            id: 3,
            title: "Social Security Disability Insurance",
            image: "/social.jpg",
            description: "Professional SSDI application and appeal assistance",
            features: [
                "Initial application assistance",
                "Appeal representation",
                "Medical evidence gathering",
                "Hearing preparation",
                "Benefit calculation",
                "Ongoing case management"
            ],
            benefits: [
                "Expert representation throughout process",
                "Higher approval rates",
                "No upfront fees",
                "Comprehensive case management"
            ],
            color: "bg-orange-500",
            bgColor: "bg-orange-50"
        },
        {
            id: 4,
            title: "Debt Settlement",
            image: "/dbt.jpg",
            description: "Strategic debt relief and settlement solutions",
            features: [
                "Debt negotiation services",
                "Creditor communication",
                "Payment plan structuring",
                "Legal protection",
                "Credit repair assistance",
                "Financial education"
            ],
            benefits: [
                "Reduce debt by up to 50%",
                "Stop collection calls",
                "Single monthly payment",
                "Professional negotiation"
            ],
            color: "bg-red-500",
            bgColor: "bg-red-50"
        },
        {
            id: 5,
            title: "Pay Per Call",
            image: "/images/call.jpg",
            description: "Performance-based call generation campaigns that drive qualified phone leads",
            features: [
                "Call tracking and analytics",
                "Quality call filtering",
                "Real-time call routing",
                "Performance-based pricing",
                "Multi-channel promotion",
                "Call recording and analysis"
            ],
            benefits: [
                "Pay only for qualified calls",
                "Higher conversion rates",
                "Direct customer interaction",
                "Scalable call volume"
            ],
            color: "bg-blue-500",
            bgColor: "bg-blue-50"
        },
        {
            id: 6,
            title: "Education Services",
            image: "/images/plan.jpg",
            description: "Educational funding and program assistance services",
            features: [
                "Student loan guidance",
                "Scholarship search assistance",
                "Education program enrollment",
                "Financial aid consultation",
                "Career counseling services",
                "Educational planning support"
            ],
            benefits: [
                "Access to quality education programs",
                "Reduced education costs",
                "Career advancement opportunities",
                "Financial planning assistance"
            ],
            color: "bg-indigo-500",
            bgColor: "bg-indigo-50"
        },


    ];



    return (
        <div className="min-h-screen bg-white">
            <Navbar />



            {/* Services Overview */}
            <section className="py-32 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
                            Our Specialized{' '}
                            <span className="relative">
                                Services
                                <div className="absolute bottom-2 left-0 w-full h-2 bg-green-500 -z-10 transform -skew-x-12"></div>
                            </span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            We specialize in complex insurance and financial services, providing expert guidance through every step of the process.
                        </p>
                    </div>

                    {/* Service Cards */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {services.map((service, index) => (
                            <div
                                key={service.id}
                                className={`bg-green-50 rounded-xl shadow-lg border-2 border-green-200 hover:shadow-xl transition-all duration-500 hover:scale-105 cursor-pointer overflow-hidden ${activeService === index ? 'border-green-500 shadow-xl' : ''
                                    }`}
                                onClick={() => setActiveService(index)}
                            >
                                {/* Service Image */}
                                <div className="relative h-48 bg-green-50">
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        width={400}
                                        height={192}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-green-600 bg-opacity-20 hidden">
                                        <div className={`absolute top-4 right-4 w-12 h-12 ${service.color} rounded-full flex items-center justify-center`}>
                                            <Image
                                                src={service.image}
                                                alt={service.title}
                                                width={24}
                                                height={24}
                                                className="w-6 h-6 object-contain filter brightness-0 invert"
                                            />
                                        </div>
                                        <div className="absolute bottom-4 left-4">
                                            <h3 className="text-xl font-bold text-white mb-1 drop-shadow-lg">{service.title}</h3>
                                            <p className="text-white text-sm opacity-90 drop-shadow-lg">{service.description}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <div className="flex items-center justify-between mb-4">
                                        <span className="text-sm font-black text-gray-700">{service.title}</span>
                                        {activeService === index && (
                                            <CheckCircle className="w-5 h-5 text-green-500" />
                                        )}
                                    </div>
                                    <ul className="space-y-2">
                                        {service.features.slice(0, 5).map((feature, idx) => (
                                            <li key={idx} className="flex items-center text-sm text-gray-600">
                                                <div className={`w-2 h-2 ${service.color} rounded-full mr-3`}></div>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Detailed Service Section */}
            <section className="py-32 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid lg:grid-cols-2 gap-12 items-start">
                            {/* Service Details */}
                            <div className="space-y-8">
                                <div>
                                    {/* Service Image */}
                                    <div className="relative h-64 bg-green-50 rounded-xl mb-6 overflow-hidden">
                                        <Image
                                            src={services[activeService].image}
                                            alt={services[activeService].title}
                                            width={600}
                                            height={256}
                                            className="w-full h-full object-cover"
                                        />
                                        <div className="absolute inset-0 bg-green-600 bg-opacity-30 hidden">
                                            <div className={`absolute top-6 right-6 w-16 h-16 ${services[activeService].color} rounded-full flex items-center justify-center`}>
                                                <Image
                                                    src={services[activeService].image}
                                                    alt={services[activeService].title}
                                                    width={32}
                                                    height={32}
                                                    className="w-8 h-8 object-contain filter brightness-0 invert"
                                                />
                                            </div>
                                            <div className="absolute bottom-6 left-6">
                                                <h2 className="text-3xl font-bold text-white mb-2 drop-shadow-lg">{services[activeService].title}</h2>
                                                <p className="text-white text-lg opacity-90 drop-shadow-lg">{services[activeService].description}</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-900 mb-4">What We Offer</h3>
                                        <ul className="space-y-3">
                                            {services[activeService].features.map((feature, idx) => (
                                                <li key={idx} className="flex items-start">
                                                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                                                    <span className="text-gray-700">{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Benefits</h3>
                                        <div className="grid gap-3">
                                            {services[activeService].benefits.map((benefit, idx) => (
                                                <div key={idx} className="bg-white p-4 rounded-lg border border-gray-200">
                                                    <div className="flex items-center">
                                                        <Star className="w-5 h-5 text-yellow-500 mr-3" />
                                                        <span className="text-gray-700 font-medium">{benefit}</span>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Contact Form */}
                            <ServicesForm
                                services={services}
                                selectedService={services[activeService]?.title || ''}
                                title="Get Expert Guidance"
                                description="Fill out the form below and we'll get back to you within 24 hours."
                                submitButtonText="Get Quality Leads"
                                successTitle="Thank You for Your Interest!"
                                successMessage="We've received your service inquiry and will contact you soon with available options."
                            />
                        </div>
                    </div>
                </div>
            </section>



            {/* Why Choose Us */}
            <section className="py-32 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
                            Why Choose{' '}
                            <span className="relative">
                                Us?
                                <div className="absolute bottom-2 left-0 w-full h-2 bg-green-500 -z-10 transform -skew-x-12"></div>
                            </span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            We bring years of specialized experience in insurance and financial services to help you make informed decisions.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                        {/* Expert Knowledge Card */}
                        <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 border border-gray-100 group">
                            <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                                <Award className="w-10 h-10 text-white" />
                            </div>
                            <div className="text-center">
                                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors duration-300">Expert Knowledge</h3>
                                <p className="text-gray-600 leading-relaxed">Specialized expertise in complex insurance and financial regulations</p>
                            </div>
                            <div className="mt-6 pt-6 border-t border-gray-100">
                                <div className="flex items-center justify-center">
                                    <div className="w-2 h-2 bg-green-500 rounded-full mx-1"></div>
                                    <div className="w-2 h-2 bg-green-400 rounded-full mx-1"></div>
                                    <div className="w-2 h-2 bg-green-300 rounded-full mx-1"></div>
                                </div>
                            </div>
                        </div>

                        {/* Personalized Solutions Card */}
                        <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 border border-gray-100 group">
                            <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                                <Target className="w-10 h-10 text-white" />
                            </div>
                            <div className="text-center">
                                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">Personalized Solutions</h3>
                                <p className="text-gray-600 leading-relaxed">Tailored approaches based on your unique situation and needs</p>
                            </div>
                            <div className="mt-6 pt-6 border-t border-gray-100">
                                <div className="flex items-center justify-center">
                                    <div className="w-2 h-2 bg-blue-500 rounded-full mx-1"></div>
                                    <div className="w-2 h-2 bg-blue-400 rounded-full mx-1"></div>
                                    <div className="w-2 h-2 bg-blue-300 rounded-full mx-1"></div>
                                </div>
                            </div>
                        </div>

                        {/* Proven Results Card */}
                        <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 border border-gray-100 group">
                            <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                                <TrendingUp className="w-10 h-10 text-white" />
                            </div>
                            <div className="text-center">
                                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors duration-300">Proven Results</h3>
                                <p className="text-gray-600 leading-relaxed">Track record of successful outcomes and client satisfaction</p>
                            </div>
                            <div className="mt-6 pt-6 border-t border-gray-100">
                                <div className="flex items-center justify-center">
                                    <div className="w-2 h-2 bg-purple-500 rounded-full mx-1"></div>
                                    <div className="w-2 h-2 bg-purple-400 rounded-full mx-1"></div>
                                    <div className="w-2 h-2 bg-purple-300 rounded-full mx-1"></div>
                                </div>
                            </div>
                        </div>

                        {/* Ongoing Support Card */}
                        <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 border border-gray-100 group">
                            <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                                <Headphones className="w-10 h-10 text-white" />
                            </div>
                            <div className="text-center">
                                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors duration-300">Ongoing Support</h3>
                                <p className="text-gray-600 leading-relaxed">Continuous assistance throughout your journey</p>
                            </div>
                            <div className="mt-6 pt-6 border-t border-gray-100">
                                <div className="flex items-center justify-center">
                                    <div className="w-2 h-2 bg-orange-500 rounded-full mx-1"></div>
                                    <div className="w-2 h-2 bg-orange-400 rounded-full mx-1"></div>
                                    <div className="w-2 h-2 bg-orange-300 rounded-full mx-1"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-32 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
                            Ready to Get{' '}
                            <span className="relative">
                                Started?
                                <div className="absolute bottom-2 left-0 w-full h-2 bg-green-500 -z-10 transform -skew-x-12"></div>
                            </span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Ready to purchase high-quality leads? Contact us today to browse our available lead inventory and find the perfect leads for your business growth.
                        </p>

                        <div className="mt-8">
                            <button
                                onClick={() => window.location.href = '/#get-started-form'}
                                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-500 hover:scale-105 active:scale-95 transform"
                            >
                                Contact Us
                            </button>
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
                        <div className="text-center">
                            <Image
                                src="/images/phone.png"
                                alt="Phone"
                                width={32}
                                height={32}
                                className="w-8 h-8 object-contain mx-auto mb-4"
                            />
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">Call Us</h3>
                            <p className="text-gray-600">+918961142973</p>
                            <p className="text-sm text-gray-500">9:00am to 6:00pm IST</p>
                        </div>
                        <div className="text-center">
                            <Image
                                src="/images/email.gif"
                                alt="Email"
                                width={32}
                                height={32}
                                className="w-8 h-8 object-contain mx-auto mb-4"
                            />
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">Email Us</h3>
                            <p className="text-gray-600">www.growxmarketingservices@gmail.com</p>
                            <p className="text-sm text-gray-500">24/7 support available</p>
                        </div>
                        <div className="text-center">
                            <Image
                                src="/images/visitus.png"
                                alt="Location"
                                width={32}
                                height={32}
                                className="w-8 h-8 object-contain mx-auto mb-4"
                            />
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">Visit Us</h3>
                            <p className="text-gray-600">Bhavya Corporate Tower, Vibhuti Khand, Lucknow, Uttar Pradesh, Gomti Nagar, Vibhuti Khand-226010</p>
                        </div>
                    </div>
                </div>
            </section>
            <UpArrow />
        </div>
    );
} 