'use client';


import Navbar from '../../components/Navbar';
import ContactForm from '../../components/ContactForm';
import { ArrowRight } from 'lucide-react';

export default function ContactPage() {

    const contactInfo = [
        {
            image: '/images/phone.png',
            title: 'Phone',
            detail: '+1 (555) 123-4567',
            description: 'Mon-Fri from 8am to 6pm PST',
            color: 'bg-green-500'
        },
        {
            image: '/images/email.png',
            title: 'Email',
            detail: 'hello@growx.com',
            description: 'We respond within 24 hours',
            color: 'bg-blue-500'
        },
        {
            image: '/images/visitus.png',
            title: 'Office',
            detail: 'San Francisco, CA',
            description: '123 Business District, Suite 400',
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
            <section className="pt-28 pb-16 bg-gradient-to-br from-green-50/30 via-white to-green-100/40">
                <div className="container mx-auto px-6">
                    <div className="text-center max-w-4xl mx-auto">
                        <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                            Get In{' '}
                            <span className="relative">
                                Touch
                                <div className="absolute bottom-2 left-0 w-full h-2 bg-green-500 -z-10 transform -skew-x-12"></div>
                            </span>
                            <br />
                            With Our Team
                        </h1>
                        <p className="text-xl text-gray-600 leading-relaxed mb-8">
                            Ready to transform your business with our lead generation services? Let's discuss how we can help you achieve your sales goals.
                        </p>
                        <div className="flex justify-center space-x-4">
                            <button className="bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-500 hover:bg-green-800 hover:scale-105 hover:shadow-lg active:scale-95 transform flex items-center gap-2">
                                Schedule Call
                                <img
                                    src="/images/phone.png"
                                    alt="Phone"
                                    className="w-5 h-5 object-contain filter brightness-0 invert"
                                    onError={(e) => e.target.style.display = 'none'}
                                />
                            </button>
                            <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-500 hover:border-green-700 hover:text-green-700 hover:scale-105 active:scale-95 transform">
                                Send Message
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Info Cards */}
            <section className="py-32 bg-white">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {contactInfo.map((info, index) => (
                            <div key={index} className="text-center animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                                <div className={`w-16 h-16 ${info.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                                    <img
                                        src={info.image}
                                        alt={info.title}
                                        className="w-8 h-8 object-contain filter brightness-0 invert"
                                        onError={(e) => {
                                            e.target.style.display = 'none';
                                        }}
                                    />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{info.title}</h3>
                                <p className="text-lg font-medium text-gray-800 mb-1">{info.detail}</p>
                                <p className="text-sm text-gray-600">{info.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Form & Features */}
            <section className="py-32 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                        {/* Contact Form */}
                        <ContactForm
                            title="Send us a message"
                            description="Fill out the form below and we'll get back to you within 24 hours."
                            submitButtonText="Send Message"
                            successTitle="Thank You!"
                            successMessage="We've received your message and will get back to you within 24 hours."
                        />

                        {/* Features & Contact Info */}
                        <div className="space-y-8">
                            <div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Us?</h3>
                                <div className="space-y-6">
                                    {features.map((feature, index) => (
                                        <div key={index} className="flex items-start space-x-4">
                                            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                                <img
                                                    src={feature.image}
                                                    alt={feature.title}
                                                    className="w-6 h-6 object-contain"
                                                    onError={(e) => {
                                                        e.target.style.display = 'none';
                                                    }}
                                                />
                                            </div>
                                            <div>
                                                <h4 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h4>
                                                <p className="text-gray-600">{feature.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="bg-green-50 p-6 rounded-xl">
                                <h3 className="text-xl font-bold text-gray-900 mb-4">Need Immediate Help?</h3>
                                <p className="text-gray-600 mb-6">
                                    For urgent inquiries or immediate assistance, feel free to call us directly.
                                </p>
                                <div className="space-y-3">
                                    <div className="flex items-center space-x-3">
                                        <img
                                            src="/images/phone.png"
                                            alt="Phone"
                                            className="w-5 h-5 object-contain"
                                            onError={(e) => e.target.style.display = 'none'}
                                        />
                                        <span className="font-medium text-gray-900">+1 (555) 123-4567</span>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <img
                                            src="/images/email.gif"
                                            alt="Email"
                                            className="w-5 h-5 object-contain"
                                            onError={(e) => e.target.style.display = 'none'}
                                        />
                                        <span className="font-medium text-gray-900">hello@growx.com</span>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <img
                                            src="/images/visitus.png"
                                            alt="Visit Us"
                                            className="w-5 h-5 object-contain"
                                            onError={(e) => e.target.style.display = 'none'}
                                        />
                                        <span className="font-medium text-gray-900">Mon-Fri, 8am-6pm PST</span>
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
                        Ready to Start Your Journey?
                    </h2>
                    <p className="text-green-100 mb-8 max-w-2xl mx-auto text-lg">
                        Don't wait any longer. Get in touch today and let's discuss how we can transform your business.
                    </p>
                    <button className="bg-white text-green-700 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-500 hover:bg-gray-100 hover:scale-105 active:scale-95 transform flex items-center gap-2 mx-auto">
                        Schedule Free Consultation
                        <ArrowRight className="w-5 h-5" />
                    </button>
                </div>
            </section>
        </div>
    );
}