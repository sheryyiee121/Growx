'use client';


import Navbar from '../../components/Navbar';
import ContactForm from '../../components/ContactForm';
import UpArrow from '../../components/UpArrow';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

export default function ContactPage() {

    const contactInfo = [
        {
            image: '/images/phone.png',
            title: 'Phone',
            detail: '+91 896 114 2973',
            description: '8.30 AM to 07.30 PM EST',
            color: 'bg-green-500'
        },
        {
            image: '/images/email.png',
            title: 'Email',
            detail: 'www.growxmarketingservices@gmail.com',
            description: 'We respond within 24 hours',
            color: 'bg-blue-500'
        },
        {
            image: '/images/visitus.png',
            title: 'Office',
            detail: 'Bhavya Corporate Tower, Vibhuti Khand, Gomti Nagar, Lucknow, Uttar Pradesh - 226010',
            description: 'Business District, Professional Center',
            color: 'bg-purple-500'
        },

    ];



    const features = [
        {
            image: '/images/headphones.png',
            title: 'Expert Support',
            description: 'Get help from our experienced team of professionals'
        },
        {
            image: '/images/shield.png',
            title: 'Secure & Private',
            description: 'Your information is protected with enterprise-grade security'
        },
        {
            image: '/images/star.png',
            title: 'Proven Results',
            description: 'Join 500+ businesses that trust us with their growth'
        }
    ];



    return (
        <div className="min-h-screen bg-white overflow-x-hidden">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-20 sm:pt-24 lg:pt-28 pb-12 sm:pb-16 bg-gradient-to-br from-green-50/30 via-white to-green-100/40">
                <div className="container mx-auto px-4 sm:px-6">
                    <div className="text-center max-w-4xl mx-auto">
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight mb-4 sm:mb-6">
                            Get In{' '}
                            <span className="relative">
                                Touch
                                <div className="absolute bottom-1 sm:bottom-2 left-0 w-full h-1 sm:h-2 bg-green-500 -z-10 transform -skew-x-12"></div>
                            </span>
                            <br />
                            With Our Team
                        </h1>
                        <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed mb-6 sm:mb-8">
                            Ready to transform your business with our lead generation services? Let&apos;s discuss how we can help you achieve your sales goals.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
                            <button className="bg-green-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-all duration-500 hover:bg-green-800 hover:scale-105 hover:shadow-lg active:scale-95 transform flex items-center justify-center gap-2">
                                Schedule Call
                                <Image
                                    src="/images/phone.png"
                                    alt="Phone"
                                    width={20}
                                    height={20}
                                    className="w-4 h-4 sm:w-5 sm:h-5 object-contain filter brightness-0 invert"
                                />
                            </button>

                            <button className="border-2 border-gray-300 text-gray-700 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-all duration-500 hover:border-green-700 hover:text-green-700 hover:scale-105 active:scale-95 transform">
                                Send Message
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Info Cards */}
            <section className="py-16 sm:py-24 lg:py-32 bg-white">
                <div className="container mx-auto px-4 sm:px-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-16 max-w-6xl mx-auto">
                        {contactInfo.map((info, index) => (
                            <div key={index} className="text-center animate-slide-up p-8 sm:p-10 bg-white rounded-xl shadow-lg border border-gray-100" style={{ animationDelay: `${index * 0.1}s` }}>
                                <div className={`w-14 h-14 sm:w-18 sm:h-18 ${info.color} rounded-full flex items-center justify-center mx-auto mb-6 sm:mb-8`}>
                                    <Image
                                        src={info.image}
                                        alt={info.title}
                                        width={36}
                                        height={36}
                                        className="w-7 h-7 sm:w-9 sm:h-9 object-contain filter brightness-0 invert"
                                    />
                                </div>
                                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">{info.title}</h3>
                                <div className="space-y-3 sm:space-y-4">
                                    <p className="text-base sm:text-lg font-medium text-gray-800 leading-relaxed break-words">{info.detail}</p>
                                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{info.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Form & Features */}
            <section className="py-16 sm:py-24 lg:py-32 bg-gray-50">
                <div className="container mx-auto px-4 sm:px-6">
                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
                        {/* Contact Form */}
                        <ContactForm
                            title="Send us a message"
                            description="Fill out the form below and we&apos;ll get back to you within 24 hours."
                            submitButtonText="Send Message"
                            successTitle="Thank You!"
                            successMessage="We&apos;ve received your message and will get back to you within 24 hours."
                        />

                        {/* Features & Contact Info */}
                        <div className="space-y-6 sm:space-y-8">
                            <div>
                                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Why Choose Us?</h3>
                                <div className="space-y-4 sm:space-y-6">
                                    {features.map((feature, index) => (
                                        <div key={index} className="flex items-start gap-3 sm:gap-4">
                                            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                                <Image
                                                    src={feature.image}
                                                    alt={feature.title}
                                                    width={24}
                                                    height={24}
                                                    className="w-5 h-5 sm:w-6 sm:h-6 object-contain"
                                                />
                                            </div>
                                            <div className="min-w-0 flex-1">
                                                <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-1 sm:mb-2 leading-relaxed">{feature.title}</h4>
                                                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{feature.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="bg-green-50 p-4 sm:p-6 rounded-xl">
                                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">Need Immediate Help?</h3>
                                <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                                    For urgent inquiries or immediate assistance, feel free to call us directly.
                                </p>
                                <div className="space-y-3 sm:space-y-4">
                                    <div className="flex items-start gap-3">
                                        <Image
                                            src="/images/phone.png"
                                            alt="Phone"
                                            width={20}
                                            height={20}
                                            className="w-4 h-4 sm:w-5 sm:h-5 object-contain mt-0.5 flex-shrink-0"
                                        />
                                        <span className="font-medium text-gray-900 text-sm sm:text-base break-words leading-relaxed">+91 896 114 2973</span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <Image
                                            src="/images/email.gif"
                                            alt="Email"
                                            width={20}
                                            height={20}
                                            className="w-4 h-4 sm:w-5 sm:h-5 object-contain mt-0.5 flex-shrink-0"
                                        />
                                        <span className="font-medium text-gray-900 text-sm sm:text-base break-words leading-relaxed">www.growxmarketingservices@gmail.com</span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <a
                                            href="https://teams.live.com/l/invite/FEAs9c1l7U5gkj8PQE?v=g1"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center justify-center gap-2 bg-gray-900 hover:bg-gray-800 text-white px-6 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 shadow-sm min-w-[140px]"
                                        >
                                            <svg
                                                className="w-4 h-4"
                                                fill="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M20.75 8.25V5.75a1.75 1.75 0 0 0-1.75-1.75h-14A1.75 1.75 0 0 0 3.25 5.75v12.5c0 .966.784 1.75 1.75 1.75h14a1.75 1.75 0 0 0 1.75-1.75V13.5L24 16V8l-3.25 2.25ZM5 6h14a.25.25 0 0 1 .25.25v1.586L12 13.414 4.75 7.836V6.25A.25.25 0 0 1 5 6Zm14 12H5a.25.25 0 0 1-.25-.25V9.664L12 15.586l7.25-5.922V17.75a.25.25 0 0 1-.25.25Z" />
                                            </svg>
                                            Join Teams
                                        </a>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <a
                                            href="https://www.linkedin.com/in/rahul-yadav-0654101b2?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center justify-center gap-2 bg-gray-900 hover:bg-gray-800 text-white px-6 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 shadow-sm min-w-[140px]"
                                        >
                                            <svg
                                                className="w-4 h-4"
                                                fill="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                            </svg>
                                            LinkedIn
                                        </a>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <Image
                                            src="/images/visitus.png"
                                            alt="Visit Us"
                                            width={20}
                                            height={20}
                                            className="w-4 h-4 sm:w-5 sm:h-5 object-contain mt-0.5 flex-shrink-0"
                                        />
                                        <span className="font-medium text-gray-900 text-sm sm:text-base break-words leading-relaxed">Mon-Fri, 8.30 AM to 07.30 PM EST</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-32 bg-gradient-to-r from-green-600 to-green-700">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                        Ready to Buy Quality Leads?
                    </h2>
                    <p className="text-green-100 mb-8 max-w-2xl mx-auto text-lg">
                        Don&apos;t wait any longer. Get in touch today and let&apos;s discuss our available lead inventory and how purchasing our quality leads can grow your business.
                    </p>
                    <button className="bg-white text-green-700 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-500 hover:bg-gray-100 hover:scale-105 active:scale-95 transform flex items-center gap-2 mx-auto">
                        Browse Lead Inventory
                        <ArrowRight className="w-5 h-5" />
                    </button>
                </div>
            </section>
            <UpArrow />
        </div>
    );
}