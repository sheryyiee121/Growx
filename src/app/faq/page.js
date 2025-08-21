'use client';

import { useState } from 'react';
import Navbar from '../../components/Navbar';
import UpArrow from '../../components/UpArrow';
import { ChevronDown, ChevronUp, HelpCircle, MessageCircle, Phone, Mail } from 'lucide-react';
import Image from 'next/image';

export default function FAQPage() {
    const [activeIndex, setActiveIndex] = useState(null);

    const faqData = [
        {
            question: "What services does GrowX Marketing Services offer?",
            answer: "We offer comprehensive marketing and business services including lead generation, sales optimization, marketing automation, cold calling services, sales team training, and specialized insurance services like ACA enrollment, Final Expense Insurance, Auto Insurance, SSDI assistance, and Debt Settlement."
        },
        {
            question: "How does your lead generation process work?",
            answer: "Our lead generation process involves advanced targeting and filtering to identify qualified prospects in your industry. We use multiple channels including digital marketing, cold outreach, and referral networks to generate high-quality leads that are verified in real-time before delivery to you."
        },
        {
            question: "What makes your cold calling service different?",
            answer: "Our professional cold calling service features experienced sales representatives who use proven scripts and techniques. We provide call recording and analysis, appointment setting, performance analytics, and weekly strategy reviews to ensure optimal results."
        },
        {
            question: "Do you provide training for sales teams?",
            answer: "Yes, we offer comprehensive sales team training programs that include weekly training sessions, customized sales playbooks, role-playing exercises, performance tracking, one-on-one coaching, and sales process optimization tailored to your business needs."
        },
        {
            question: "How can you help with ACA (Affordable Care Act) enrollment?",
            answer: "We provide expert guidance through ACA enrollment including compliance consulting, plan comparison and selection, subsidy qualification assistance, annual renewal support, and complete documentation assistance to ensure you get the best coverage for your needs."
        },
        {
            question: "What is Final Expense Insurance and do I need it?",
            answer: "Final Expense Insurance covers burial, funeral, and end-of-life medical expenses. It features simplified underwriting, guaranteed acceptance options for seniors, flexible payment plans, and no medical exam requirements. It's designed to protect your family from financial burden during difficult times."
        },
        {
            question: "How does your debt settlement service work?",
            answer: "Our debt settlement service includes professional debt negotiation with creditors, handling all creditor communication, structuring manageable payment plans, providing legal protection, credit repair assistance, and financial education to help you achieve debt freedom."
        },
        {
            question: "What are your business hours?",
            answer: "We&apos;re available Monday through Friday from 8.30 AM to 07.30 PM EST. For urgent matters, you can reach us via email at www.growxmarketingservices@gmail.com, and we provide 24/7 support for existing clients."
        },
        {
            question: "How do I get started with your services?",
            answer: "Getting started is easy! You can contact us at +918961142973, email us, or use our contact form. We&apos;ll discuss your business needs and show you our available lead inventory. Choose from our high-quality leads across multiple verticals."
        },
        {
            question: "Do you offer customized solutions for specific industries?",
            answer: "Absolutely! We understand that different industries have unique challenges and requirements. We offer customized marketing and sales solutions tailored to your specific industry, target audience, and business goals."
        }
    ];

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="min-h-screen bg-white">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-36 md:pt-32 pb-20 bg-gradient-to-br from-green-50/30 via-white to-green-100/40">
                <div className="container mx-auto px-6">
                    <div className="text-center max-w-4xl mx-auto">
                        <div className="flex justify-center mb-6">
                            <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center">
                                <HelpCircle className="w-10 h-10 text-white" />
                            </div>
                        </div>
                        <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                            Frequently Asked{' '}
                            <span className="relative">
                                Questions
                                <div className="absolute bottom-0 left-0 w-full h-2 bg-green-500 opacity-60 transform -skew-x-12"></div>
                            </span>
                        </h1>
                        <p className="text-xl text-gray-600 leading-relaxed mb-8">
                            Find answers to the most common questions about our services and how we can help grow your business.
                        </p>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-32 bg-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">
                        <div className="space-y-6">
                            {faqData.map((faq, index) => (
                                <div
                                    key={index}
                                    className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
                                >
                                    <button
                                        onClick={() => toggleFAQ(index)}
                                        className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200 rounded-xl"
                                    >
                                        <h3 className="text-lg font-semibold text-gray-900 pr-4">
                                            {faq.question}
                                        </h3>
                                        <div className="flex-shrink-0">
                                            {activeIndex === index ? (
                                                <ChevronUp className="w-5 h-5 text-green-500" />
                                            ) : (
                                                <ChevronDown className="w-5 h-5 text-gray-400" />
                                            )}
                                        </div>
                                    </button>
                                    <div
                                        className={`overflow-hidden transition-all duration-300 ${activeIndex === index
                                            ? 'max-h-96 opacity-100'
                                            : 'max-h-0 opacity-0'
                                            }`}
                                    >
                                        <div className="px-6 pb-6">
                                            <p className="text-gray-600 leading-relaxed">
                                                {faq.answer}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Still Have Questions Section */}
            <section className="py-32 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
                            Still Have{' '}
                            <span className="relative">
                                Questions?
                                <div className="absolute bottom-0 left-0 w-full h-2 bg-green-500 opacity-60 transform -skew-x-12"></div>
                            </span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Can&apos;t find the answer you&apos;re looking for? Our team is here to help you with any questions about our services.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-center">
                            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Phone className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Call Us</h3>
                            <p className="text-gray-600 mb-2">+918961142973</p>
                            <p className="text-sm text-gray-500">8.30 AM to 07.30 PM EST</p>
                        </div>

                        <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-center">
                            <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Mail className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Email Us</h3>
                            <p className="text-gray-600 mb-2">www.growxmarketingservices@gmail.com</p>
                            <p className="text-sm text-gray-500">24/7 support available</p>
                        </div>


                    </div>
                </div>
            </section >

            {/* Contact Section - Footer */}
            < section className="py-32 bg-gray-50" >
                <div className="container mx-auto px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
                            Ready to Get{' '}
                            <span className="relative">
                                Started?
                                <div className="absolute bottom-0 left-0 w-full h-2 bg-green-500 opacity-60 transform -skew-x-12"></div>
                            </span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Contact us today to browse our quality lead inventory and let our experts help you find the perfect leads to scale your business.
                        </p>
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
                            <p className="text-sm text-gray-500">8.30 AM to 07.30 PM EST</p>
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
            </section >
            <UpArrow />
        </div >
    );
}
