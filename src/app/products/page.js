'use client';

import { useState } from 'react';
import Navbar from '../../components/Navbar';
import UpArrow from '../../components/UpArrow';
import { CheckCircle, Star, Users, Target, TrendingUp, Shield, Phone, Mail, MessageSquare, ArrowRight, Zap, BarChart3, Clock, Award, PhoneCall, Megaphone, UserCheck, Wifi } from 'lucide-react';

export default function ProductsPage() {
    const [activeVertical, setActiveVertical] = useState(0);

    const verticals = [
        {
            id: 'aca',
            title: 'ACA (Affordable Care Act)',
            description: 'Expert lead generation for ACA enrollment and healthcare insurance',
            icon: Award,

            features: [
                'ACA enrollment campaigns',
                'Healthcare insurance marketing',
                'Subsidy qualification leads',
                'Open enrollment promotion',
                'Plan comparison services',
                'Compliance-focused marketing'
            ],
            benefits: [
                'Higher enrollment rates',
                'Quality healthcare leads',
                'Regulatory compliance',
                'Targeted demographic reach'
            ],
            popular: true,
            color: 'bg-green-500',
            image: '/images/aca.jpg'
        },
        {
            id: 'finance',
            title: 'Finance & Insurance',
            description: 'Specialized marketing for financial services and insurance verticals',
            icon: Shield,

            features: [
                'Insurance vertical marketing',
                'Financial services promotion',
                'Investment vertical campaigns',
                'Debt settlement marketing',
                'Medicare and ACA campaigns',
                'Loan and credit marketing'
            ],
            benefits: [
                'Compliance-focused approach',
                'High-value client acquisition',
                'Regulatory expertise',
                'Targeted financial demographics'
            ],
            popular: false,
            color: 'bg-blue-500',
            image: '/images/finance.jpg'
        },
        {
            id: 'ppc',
            title: 'Pay-Per-Call (PPC)',
            description: 'Strategic PPC campaigns that deliver immediate results and ROI',
            icon: Target,

            features: [
                'Google Ads management',
                'Facebook and social media ads',
                'Landing page optimization',
                'Keyword research and analysis',
                'A/B testing and optimization',
                'Real-time campaign monitoring'
            ],
            benefits: [
                'Immediate traffic generation',
                'Precise audience targeting',
                'Measurable ROI',
                'Scalable ad spend'
            ],
            popular: false,
            color: 'bg-purple-500',
            image: '/images/ppc.jpg'
        },
        {
            id: 'pay-per-call',
            title: 'Pay-Per-Call Campaigns',
            description: 'Performance-based call generation campaigns that drive qualified phone leads',
            icon: Phone,

            features: [
                'Call tracking and analytics',
                'Quality call filtering',
                'Real-time call routing',
                'Performance-based pricing',
                'Multi-channel promotion',
                'Call recording and analysis'
            ],
            benefits: [
                'Pay only for qualified calls',
                'Higher conversion rates',
                'Direct customer interaction',
                'Scalable call volume'
            ],
            popular: false,
            color: 'bg-orange-500',
            image: '/images/pay-per-call.jpg'
        },
        {
            id: 'inbound-outbound-calls',
            title: 'Inbound & Outbound Call Services',
            description: 'Professional call center services for both inbound customer support and outbound sales campaigns',
            icon: PhoneCall,

            features: [
                'Professional inbound call handling',
                'Outbound sales campaigns',
                'Lead qualification calls',
                'Customer service support',
                'Appointment setting',
                'Call center management',
                'Multi-language support',
                'CRM integration'
            ],
            benefits: [
                '24/7 professional call coverage',
                'Increased sales conversion',
                'Enhanced customer satisfaction',
                'Cost-effective call solutions',
                'Scalable call operations',
                'Expert call handling'
            ],
            popular: false,
            color: 'bg-teal-500',
            image: '/images/call.jpg'
        },

    ];

    const stats = [
        { icon: Users, value: '500+', label: 'Happy Clients', color: 'text-green-600' },
        { icon: BarChart3, value: '2.5M+', label: 'Leads Generated', color: 'text-blue-600' },
        { icon: TrendingUp, value: '300%', label: 'Average ROI', color: 'text-purple-600' },
        { icon: Award, value: '5 Years', label: 'Experience', color: 'text-orange-600' }
    ];

    return (
        <div className="min-h-screen bg-white overflow-x-hidden">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-36 md:pt-32 pb-20 bg-gradient-to-br from-green-50/30 via-white to-green-100/40 animate-fade-in">
                <div className="container mx-auto px-6">
                    <div className="text-center max-w-4xl mx-auto">
                        <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6 animate-slide-up">
                            Our Industry{' '}
                            <span className="relative">
                                Verticals
                                <div className="absolute bottom-2 left-0 w-full h-2 bg-green-500 -z-10 transform -skew-x-12"></div>
                            </span>
                            <br />
                            & Specializations
                        </h1>
                        <p className="text-xl text-gray-600 leading-relaxed mb-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
                            Browse our specialized industry verticals where we sell high-quality, verified leads. Purchase leads from our proven campaigns across multiple sectors.
                        </p>
                        <div className="flex justify-center space-x-4 animate-slide-up" style={{ animationDelay: '0.4s' }}>
                            <button className="bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-500 hover:bg-green-800 hover:scale-105 hover:shadow-lg active:scale-95 transform flex items-center gap-2">
                                View Verticals
                                <ArrowRight className="w-5 h-5" />
                            </button>
                            <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-500 hover:border-green-700 hover:text-green-700 hover:scale-105 active:scale-95 transform">
                                Schedule Demo
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-32 bg-white animate-fade-in">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
                        {stats.map((stat, index) => {
                            const StatIcon = stat.icon;
                            return (
                                <div key={index} className="text-center animate-slide-up hover:scale-105 transition-transform duration-300" style={{ animationDelay: `${index * 0.2}s` }}>
                                    <div className={`w-16 h-16 ${stat.color} bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4 hover:bg-opacity-20 transition-colors duration-300`}>
                                        <StatIcon className={`w-8 h-8 ${stat.color}`} />
                                    </div>
                                    <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
                                    <div className="text-gray-600">{stat.label}</div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Core Services Banner */}
            <section className="py-20 bg-green-600 relative overflow-hidden">
                <div className="absolute inset-0 bg-green-700/20"></div>
                <div className="absolute inset-0">
                    <div className="absolute top-10 left-10 w-32 h-32 bg-green-400/10 rounded-full blur-xl"></div>
                    <div className="absolute bottom-10 right-10 w-40 h-40 bg-white/5 rounded-full blur-xl"></div>
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                            Our Core{' '}
                            <span className="text-green-200">
                                Services
                            </span>
                        </h2>
                        <p className="text-xl text-green-100 max-w-3xl mx-auto">
                            Comprehensive business solutions designed to accelerate your growth
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
                        {/* Lead Generation */}
                        <div className="group h-full">
                            <div className="bg-white rounded-xl p-8 hover:shadow-xl transition-all duration-500 group-hover:scale-105 border border-green-100 h-full flex flex-col">
                                <div className="text-center flex flex-col h-full">
                                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-200 transition-colors duration-300">
                                        <Target className="w-8 h-8 text-green-600" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Lead Generation</h3>
                                    <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
                                        High-quality, targeted leads to fuel your sales pipeline and accelerate business growth
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Advertising */}
                        <div className="group h-full">
                            <div className="bg-white rounded-xl p-8 hover:shadow-xl transition-all duration-500 group-hover:scale-105 border border-green-100 h-full flex flex-col">
                                <div className="text-center flex flex-col h-full">
                                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-200 transition-colors duration-300">
                                        <Megaphone className="w-8 h-8 text-green-600" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Advertising</h3>
                                    <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
                                        Strategic multi-platform advertising campaigns that maximize reach and ROI
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Outsourcing */}
                        <div className="group h-full">
                            <div className="bg-white rounded-xl p-8 hover:shadow-xl transition-all duration-500 group-hover:scale-105 border border-green-100 h-full flex flex-col">
                                <div className="text-center flex flex-col h-full">
                                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-200 transition-colors duration-300">
                                        <UserCheck className="w-8 h-8 text-green-600" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Outsourcing</h3>
                                    <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
                                        Professional outsourcing solutions to optimize operations and reduce costs
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Telecommunications */}
                        <div className="group h-full">
                            <div className="bg-white rounded-xl p-8 hover:shadow-xl transition-all duration-500 group-hover:scale-105 border border-green-100 h-full flex flex-col">
                                <div className="text-center flex flex-col h-full">
                                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-200 transition-colors duration-300">
                                        <Wifi className="w-8 h-8 text-green-600" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Telecommunications</h3>
                                    <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
                                        Advanced communication solutions for seamless business connectivity
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="text-center mt-16">
                        <p className="text-green-100 mb-6">Ready to accelerate your business growth?</p>
                        <button
                            onClick={() => window.location.href = '/#get-started-form'}
                            className="bg-white text-green-600 hover:bg-green-50 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-500 hover:scale-105 hover:shadow-lg"
                        >
                            Get Started Today
                        </button>
                    </div>
                </div>
            </section>

            {/* Verticals Grid */}
            <section className="py-32 bg-gray-50 animate-fade-in">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16 animate-slide-up">
                        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
                            Our{' '}
                            <span className="relative">
                                Verticals
                                <div className="absolute bottom-2 left-0 w-full h-2 bg-green-500 -z-10 transform -skew-x-12"></div>
                            </span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-slide-up" style={{ animationDelay: '0.2s' }}>
                            Specialized industry verticals where we sell premium leads from our successful marketing campaigns.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                        {verticals.map((vertical, index) => {
                            const VerticalIcon = vertical.icon;
                            return (
                                <div
                                    key={vertical.id}
                                    className={`bg-white rounded-xl shadow-lg border-2 hover:shadow-xl transition-all duration-500 hover:scale-105 cursor-pointer overflow-hidden animate-slide-up ${activeVertical === index ? 'border-green-500 shadow-xl' : 'border-gray-200'
                                        }`}
                                    style={{ animationDelay: `${index * 0.3}s` }}
                                    onClick={() => setActiveVertical(index)}
                                >
                                    {vertical.popular && (
                                        <div className="bg-green-500 text-white text-center py-2 text-sm font-semibold">
                                            Most Popular
                                        </div>
                                    )}

                                    <div className="p-8">
                                        <div className="flex items-center justify-between mb-6">
                                            <div className={`w-16 h-16 ${vertical.color} rounded-full flex items-center justify-center`}>
                                                <VerticalIcon className="w-8 h-8 text-white" />
                                            </div>

                                        </div>

                                        <h3 className="text-2xl font-bold text-gray-900 mb-3">{vertical.title}</h3>
                                        <p className="text-gray-600 mb-6">{vertical.description}</p>

                                        <div className="mb-6">
                                            <h4 className="font-semibold text-gray-900 mb-3">Specializations:</h4>
                                            <ul className="space-y-2">
                                                {vertical.features.slice(0, 4).map((feature, idx) => (
                                                    <li key={idx} className="flex items-center text-sm text-gray-600">
                                                        <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                                                        {feature}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>


                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Detailed Vertical View */}
            <section className="py-32 bg-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 className="text-4xl font-bold text-gray-900 mb-6">{verticals[activeVertical].title}</h2>
                                <p className="text-lg text-gray-600 leading-relaxed mb-8">{verticals[activeVertical].description}</p>

                                <div className="mb-8">
                                    <h3 className="text-xl font-bold text-gray-900 mb-4">Key Benefits:</h3>
                                    <ul className="space-y-3">
                                        {verticals[activeVertical].benefits.map((benefit, idx) => (
                                            <li key={idx} className="flex items-center text-gray-700">
                                                <Star className="w-5 h-5 text-yellow-500 mr-3" />
                                                {benefit}
                                            </li>
                                        ))}
                                    </ul>
                                </div>


                            </div>

                            <div className="bg-gray-100 rounded-xl p-8">
                                <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Specializations:</h3>
                                <ul className="space-y-3">
                                    {verticals[activeVertical].features.map((feature, idx) => (
                                        <li key={idx} className="flex items-center text-gray-700">
                                            <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-32 bg-gradient-to-r from-green-600 to-green-700">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                        Ready to Transform Your Business?
                    </h2>
                    <p className="text-green-100 mb-8 max-w-2xl mx-auto text-lg">
                        Join hundreds of successful businesses who purchase our premium leads to grow their customer base and increase revenue.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <button className="bg-white text-green-700 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-500 hover:bg-gray-100 hover:scale-105 active:scale-95 transform">
                            Get Leads Today
                        </button>

                        <button
                            onClick={() => window.location.href = '/#get-started-form'}
                            className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-500 hover:scale-105 active:scale-95 transform"
                        >
                            Contact Sales
                        </button>
                    </div>
                </div>
            </section>
            <UpArrow />
        </div>
    );
}