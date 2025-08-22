'use client';

import Navbar from '../../components/Navbar';
import ContactForm from '../../components/ContactForm';
import UpArrow from '../../components/UpArrow';
import FloatingWhatsApp from '../../components/FloatingWhatsApp';
import { CheckCircle, Star, TrendingUp, Users, Zap, Target } from 'lucide-react';
import Image from 'next/image';

export default function GetStartedPage() {
    return (
        <div className="min-h-screen bg-white overflow-x-hidden">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-20 sm:pt-24 lg:pt-28 pb-12 sm:pb-16 bg-gradient-to-br from-green-50/30 via-white to-green-100/40">
                <div className="container mx-auto px-4 sm:px-6">
                    <div className="text-center max-w-4xl mx-auto">
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight mb-4 sm:mb-6">
                            Get Started with{' '}
                            <span className="relative">
                                Premium Leads
                                <div className="absolute bottom-1 sm:bottom-2 left-0 w-full h-1 sm:h-2 bg-green-500 -z-10 transform -skew-x-12"></div>
                            </span>
                            <br />
                            Today
                        </h1>
                        <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed mb-6 sm:mb-8">
                            Ready to transform your business with <span className="font-bold text-gray-800">high-quality, verified leads</span>?
                            Fill out the form below and we&apos;ll get you started with our premium lead generation services.
                        </p>

                        {/* Quick Stats */}
                        <div className="grid grid-cols-3 gap-4 sm:gap-8 max-w-2xl mx-auto mb-8">
                            <div className="text-center">
                                <div className="text-2xl sm:text-3xl font-bold text-green-600 mb-1">500+</div>
                                <div className="text-gray-600 text-sm sm:text-base">Happy Clients</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-1">95%</div>
                                <div className="text-gray-600 text-sm sm:text-base">Success Rate</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl sm:text-3xl font-bold text-purple-600 mb-1">24/7</div>
                                <div className="text-gray-600 text-sm sm:text-base">Support</div>
                            </div>
                        </div>

                        {/* Service Features */}
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
                            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                                    <Users className="w-5 h-5 text-green-600" />
                                </div>
                                <div className="text-sm font-semibold text-gray-900">Quality Leads</div>
                                <div className="text-xs text-gray-600 mt-1">Verified & Exclusive</div>
                            </div>
                            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                                    <Target className="w-5 h-5 text-blue-600" />
                                </div>
                                <div className="text-sm font-semibold text-gray-900">Targeted</div>
                                <div className="text-xs text-gray-600 mt-1">Your Industry</div>
                            </div>
                            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                                    <TrendingUp className="w-5 h-5 text-purple-600" />
                                </div>
                                <div className="text-sm font-semibold text-gray-900">High ROI</div>
                                <div className="text-xs text-gray-600 mt-1">Guaranteed Results</div>
                            </div>
                            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                                    <Zap className="w-5 h-5 text-orange-600" />
                                </div>
                                <div className="text-sm font-semibold text-gray-900">Fast Delivery</div>
                                <div className="text-xs text-gray-600 mt-1">Real-time</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Get Started Form Section */}
            <section className="py-16 sm:py-24 lg:py-32 bg-white">
                <div className="container mx-auto px-4 sm:px-6">
                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 max-w-7xl mx-auto">
                        {/* Form */}
                        <div className="animate-slide-up">
                            <ContactForm
                                title="Get Started Today"
                                description="Tell us about your business and lead requirements. We&apos;ll create a customized solution for you."
                                submitButtonText="Start Getting Premium Leads"
                                successTitle="Welcome to GrowX!"
                                successMessage="We&apos;ve received your information and will contact you within 24 hours to get your premium lead generation campaign started."
                                className="bg-gray-50"
                            />
                        </div>

                        {/* Benefits & Process */}
                        <div className="flex-1 lg:pl-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
                            <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg border border-gray-200">
                                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">What Happens Next?</h3>

                                {/* Process Steps */}
                                <div className="space-y-6">
                                    <div className="flex items-start gap-4">
                                        <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                                            1
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-900 mb-1">Initial Consultation</h4>
                                            <p className="text-gray-600 text-sm">We&apos;ll call you within 24 hours to understand your business needs and target audience.</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                                            2
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-900 mb-1">Custom Strategy</h4>
                                            <p className="text-gray-600 text-sm">We&apos;ll create a tailored lead generation strategy based on your industry and goals.</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                                            3
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-900 mb-1">Campaign Launch</h4>
                                            <p className="text-gray-600 text-sm">We&apos;ll launch your lead generation campaign and start delivering quality leads immediately.</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                                            4
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-900 mb-1">Results & Optimization</h4>
                                            <p className="text-gray-600 text-sm">Monitor results and continuously optimize your campaigns for maximum ROI.</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Benefits */}
                                <div className="bg-green-50 p-6 rounded-lg mt-8">
                                    <h4 className="text-lg font-bold text-gray-900 mb-4">Why Choose GrowX?</h4>
                                    <ul className="space-y-3 text-gray-700">
                                        <li className="flex items-start gap-2">
                                            <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                            <span className="text-sm">500+ successful clients across multiple industries</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                            <span className="text-sm">95% client satisfaction rate</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                            <span className="text-sm">Average 300% ROI for our clients</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                            <span className="text-sm">24/7 dedicated support team</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                            <span className="text-sm">Real-time lead delivery and tracking</span>
                                        </li>
                                    </ul>
                                </div>

                                {/* Contact Info */}
                                <div className="bg-gray-50 p-6 rounded-lg mt-6">
                                    <h4 className="text-lg font-bold text-gray-900 mb-4">Need Immediate Help?</h4>
                                    <div className="space-y-3">
                                        <div className="flex items-center gap-3">
                                            <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                                            </svg>
                                            <span className="font-medium text-gray-900">+91 896 114 2973</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                                            </svg>
                                            <span className="font-medium text-gray-900">www.growxmarketingservices@gmail.com</span>
                                        </div>
                                        <div className="text-sm text-gray-600 mt-2">
                                            Business Hours: 9:00 AM to 6:00 PM IST
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-16 sm:py-24 lg:py-32 bg-gray-50">
                <div className="container mx-auto px-4 sm:px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                            Frequently Asked{' '}
                            <span className="relative">
                                Questions
                                <div className="absolute bottom-1 sm:bottom-2 left-0 w-full h-1 sm:h-2 bg-green-500 -z-10 transform -skew-x-12"></div>
                            </span>
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                        <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">How quickly will I receive leads?</h3>
                            <p className="text-gray-600">Most clients start receiving qualified leads within 2-3 weeks of campaign launch. Our proven strategies typically deliver 10-15 qualified leads per month for small businesses.</p>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">What makes your leads different?</h3>
                            <p className="text-gray-600">We focus on quality over quantity. Our leads are pre-qualified through multiple touchpoints, ensuring they have genuine interest and decision-making authority.</p>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">Can I track my campaign performance?</h3>
                            <p className="text-gray-600">Yes! We provide real-time dashboards and detailed reports showing lead quality, conversion rates, and ROI metrics.</p>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">What industries do you work with?</h3>
                            <p className="text-gray-600">We work with businesses across various industries including technology, healthcare, finance, real estate, manufacturing, and professional services.</p>
                        </div>
                    </div>
                </div>
            </section>

            <UpArrow />
            <FloatingWhatsApp />
        </div>
    );
}
