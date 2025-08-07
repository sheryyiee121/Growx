'use client';

import { useState } from 'react';
import Navbar from '../../components/Navbar';
import { CheckCircle, Star, Users, Target, TrendingUp, Shield, Phone, Mail, MessageSquare, ArrowRight, Zap, BarChart3, Clock, Award } from 'lucide-react';

export default function ProductsPage() {
    const [activeProduct, setActiveProduct] = useState(0);

    const products = [
        {
            id: 'lead-generation',
            title: 'Premium Lead Generation',
            description: 'High-quality, targeted leads delivered to your inbox daily',
            icon: Target,
            price: '$997',
            period: '/month',
            features: [
                'Up to 100 qualified leads per month',
                'Advanced targeting and filtering',
                'Real-time lead verification',
                'CRM integration support',
                'Dedicated account manager',
                '24/7 customer support'
            ],
            benefits: [
                'Increase conversion rates by 40%',
                'Save 20+ hours per week',
                'ROI guarantee or money back',
                'Industry-specific targeting'
            ],
            popular: true,
            color: 'bg-green-500',
            image: '/images/lead-generation.jpg'
        },
        {
            id: 'cold-calling',
            title: 'Professional Cold Calling',
            description: 'Expert sales professionals making calls on your behalf',
            icon: Phone,
            price: '$1,497',
            period: '/month',
            features: [
                '200+ qualified calls per month',
                'Professional script development',
                'Call recording and analysis',
                'Appointment setting service',
                'Performance analytics',
                'Weekly strategy reviews'
            ],
            benefits: [
                'Professional representation',
                'Higher appointment rates',
                'Scalable outreach',
                'Expert sales techniques'
            ],
            popular: false,
            color: 'bg-blue-500',
            image: '/images/cold-calling.jpg'
        },
        {
            id: 'sales-training',
            title: 'Sales Team Training',
            description: 'Comprehensive training programs for your sales team',
            icon: Users,
            price: '$2,497',
            period: '/month',
            features: [
                'Weekly training sessions',
                'Customized sales playbooks',
                'Role-playing exercises',
                'Performance tracking',
                'One-on-one coaching',
                'Sales process optimization'
            ],
            benefits: [
                'Improve team performance',
                'Standardize sales process',
                'Reduce training time',
                'Increase close rates'
            ],
            popular: false,
            color: 'bg-purple-500',
            image: '/images/sales-training.jpg'
        },
        {
            id: 'marketing-automation',
            title: 'Marketing Automation',
            description: 'Automated marketing campaigns that convert prospects',
            icon: Zap,
            price: '$697',
            period: '/month',
            features: [
                'Email marketing automation',
                'Lead nurturing campaigns',
                'Social media automation',
                'Landing page optimization',
                'A/B testing and analytics',
                'Integration with popular tools'
            ],
            benefits: [
                'Automate repetitive tasks',
                'Nurture leads effectively',
                'Improve conversion rates',
                'Scale your marketing efforts'
            ],
            popular: false,
            color: 'bg-orange-500',
            image: '/images/marketing-automation.jpg'
        }
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
            <section className="pt-28 pb-16 bg-gradient-to-br from-green-50/30 via-white to-green-100/40">
                <div className="container mx-auto px-6">
                    <div className="text-center max-w-4xl mx-auto">
                        <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                            Powerful{' '}
                            <span className="relative">
                                Products
                                <div className="absolute bottom-2 left-0 w-full h-2 bg-green-500 -z-10 transform -skew-x-12"></div>
                            </span>
                            <br />
                            That Drive Results
                        </h1>
                        <p className="text-xl text-gray-600 leading-relaxed mb-8">
                            Choose from our comprehensive suite of lead generation and sales optimization products designed to accelerate your business growth.
                        </p>
                        <div className="flex justify-center space-x-4">
                            <button className="bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-500 hover:bg-green-800 hover:scale-105 hover:shadow-lg active:scale-95 transform flex items-center gap-2">
                                View Products
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
            <section className="py-32 bg-white">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
                        {stats.map((stat, index) => {
                            const StatIcon = stat.icon;
                            return (
                                <div key={index} className="text-center animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                                    <div className={`w-16 h-16 ${stat.color} bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4`}>
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

            {/* Products Grid */}
            <section className="py-32 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
                            Our{' '}
                            <span className="relative">
                                Products
                                <div className="absolute bottom-2 left-0 w-full h-2 bg-green-500 -z-10 transform -skew-x-12"></div>
                            </span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Comprehensive solutions designed to transform your sales and marketing efforts into a lead-generating powerhouse.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                        {products.map((product, index) => {
                            const ProductIcon = product.icon;
                            return (
                                <div
                                    key={product.id}
                                    className={`bg-white rounded-xl shadow-lg border-2 hover:shadow-xl transition-all duration-500 hover:scale-105 cursor-pointer overflow-hidden ${activeProduct === index ? 'border-green-500 shadow-xl' : 'border-gray-200'
                                        }`}
                                    onClick={() => setActiveProduct(index)}
                                >
                                    {product.popular && (
                                        <div className="bg-green-500 text-white text-center py-2 text-sm font-semibold">
                                            Most Popular
                                        </div>
                                    )}

                                    <div className="p-8">
                                        <div className="flex items-center justify-between mb-6">
                                            <div className={`w-16 h-16 ${product.color} rounded-full flex items-center justify-center`}>
                                                <ProductIcon className="w-8 h-8 text-white" />
                                            </div>
                                            <div className="text-right">
                                                <div className="text-3xl font-bold text-gray-900">{product.price}</div>
                                                <div className="text-gray-600">{product.period}</div>
                                            </div>
                                        </div>

                                        <h3 className="text-2xl font-bold text-gray-900 mb-3">{product.title}</h3>
                                        <p className="text-gray-600 mb-6">{product.description}</p>

                                        <div className="mb-6">
                                            <h4 className="font-semibold text-gray-900 mb-3">Features:</h4>
                                            <ul className="space-y-2">
                                                {product.features.slice(0, 4).map((feature, idx) => (
                                                    <li key={idx} className="flex items-center text-sm text-gray-600">
                                                        <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                                                        {feature}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        <button className={`w-full ${product.popular ? 'bg-green-500 hover:bg-green-600' : 'bg-gray-800 hover:bg-gray-700'} text-white py-3 rounded-lg font-semibold transition-all duration-500 hover:scale-105`}>
                                            {product.popular ? 'Get Started' : 'Learn More'}
                                        </button>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Detailed Product View */}
            <section className="py-32 bg-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 className="text-4xl font-bold text-gray-900 mb-6">{products[activeProduct].title}</h2>
                                <p className="text-lg text-gray-600 leading-relaxed mb-8">{products[activeProduct].description}</p>

                                <div className="mb-8">
                                    <h3 className="text-xl font-bold text-gray-900 mb-4">Key Benefits:</h3>
                                    <ul className="space-y-3">
                                        {products[activeProduct].benefits.map((benefit, idx) => (
                                            <li key={idx} className="flex items-center text-gray-700">
                                                <Star className="w-5 h-5 text-yellow-500 mr-3" />
                                                {benefit}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="flex space-x-4">
                                    <button className="bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-500 hover:bg-green-800 hover:scale-105">
                                        Start Free Trial
                                    </button>
                                    <button className="border-2 border-green-700 text-green-700 px-6 py-3 rounded-lg font-semibold transition-all duration-500 hover:bg-green-700 hover:text-white hover:scale-105">
                                        Request Demo
                                    </button>
                                </div>
                            </div>

                            <div className="bg-gray-100 rounded-xl p-8">
                                <h3 className="text-2xl font-bold text-gray-900 mb-6">All Features Included:</h3>
                                <ul className="space-y-3">
                                    {products[activeProduct].features.map((feature, idx) => (
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
                        Join hundreds of successful businesses using our products to generate more leads and increase revenue.
                    </p>
                    <div className="flex justify-center space-x-4">
                        <button className="bg-white text-green-700 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-500 hover:bg-gray-100 hover:scale-105 active:scale-95 transform">
                            Get Started Today
                        </button>
                        <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-500 hover:bg-white hover:text-green-700 hover:scale-105 active:scale-95 transform">
                            Schedule Consultation
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}