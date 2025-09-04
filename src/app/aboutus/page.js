'use client';

import Navbar from '../../components/Navbar';
import UpArrow from '../../components/UpArrow';
import { CheckCircle, Users, Target, TrendingUp, Award, Zap, Handshake, Globe, Linkedin, Instagram, Facebook } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function AboutUsPage() {
    const achievements = [
        {
            icon: TrendingUp,
            title: "20% Revenue Increase",
            description: "Achieved through innovative affiliate campaigns at AdvanceGro Marketing Group",
            color: "bg-green-500"
        },
        {
            icon: Target,
            title: "High-Conversion Expertise",
            description: "Specializing in TCPA Opt-in Transfers and targeted digital marketing strategies",
            color: "bg-blue-500"
        },
        {
            icon: Globe,
            title: "Comprehensive Solutions",
            description: "Expanded expertise in nearshore and inbound solutions for client needs",
            color: "bg-purple-500"
        },
        {
            icon: Handshake,
            title: "Long-term Partnerships",
            description: "Commitment to sustainability and maintaining healthy business relationships",
            color: "bg-orange-500"
        }
    ];

    const expertise = [
        "TCPA Opt-in Transfers",
        "Targeted Digital Marketing",
        "Nearshore Solutions",
        "Inbound Marketing",
        "PPC Campaigns",
        "Affiliate Marketing",
        "Sales Operations",
        "Revenue Optimization"
    ];

    return (
        <div className="min-h-screen bg-white overflow-x-hidden">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-20 sm:pt-24 lg:pt-28 pb-12 sm:pb-16 bg-gradient-to-br from-green-50/30 via-white to-green-100/40">
                <div className="container mx-auto px-4 sm:px-6">
                    <div className="text-center max-w-4xl mx-auto">
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight mb-4 sm:mb-6">
                            About{' '}
                            <span className="relative">
                                GrowX
                                <div className="absolute bottom-1 sm:bottom-2 left-0 w-full h-1 sm:h-2 bg-green-500 z-10 transform -skew-x-12"></div>
                            </span>
                            <br />
                            Marketing Services
                        </h1>
                        <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed mb-6 sm:mb-8">
                            Our team specializes in high-conversion strategies and comprehensive digital marketing solutions that drive real results for businesses.
                        </p>
                    </div>
                </div>
            </section>

            {/* Main About Content */}
            <section className="py-16 sm:py-24 lg:py-32 bg-white">
                <div className="container mx-auto px-4 sm:px-6">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
                            {/* Left Content */}
                            <div>
                                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                                    Our{' '}
                                    <span className="relative">
                                        Expertise
                                        <div className="absolute bottom-1 left-0 w-full h-1 bg-green-500 z-10 transform -skew-x-12"></div>
                                    </span>
                                </h2>
                                <div className="space-y-6 text-gray-700 leading-relaxed">
                                    <p className="text-lg">
                                        At GrowX Marketing Services, our team specializes in <strong className="text-green-600">high-conversion TCPA Opt-in Transfers</strong> and targeted digital marketing strategies. We&apos;ve also expanded our expertise to include nearshore and inbound solutions, ensuring a comprehensive approach to client needs and industry demands.
                                    </p>
                                    <p className="text-lg">
                                        Our commitment to <strong className="text-green-600">sustainability and long-term partnerships</strong> underscores every initiative, focusing on making businesses profitable and maintaining healthy relationships.
                                    </p>
                                </div>

                                <div className="mt-8">
                                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Core Specializations:</h3>
                                    <div className="grid grid-cols-2 gap-3">
                                        {expertise.map((skill, index) => (
                                            <div key={index} className="flex items-center">
                                                <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                                                <span className="text-gray-700">{skill}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Right Image/Visual */}
                            <div className="relative">
                                <div className="bg-green-100 rounded-2xl p-8">
                                    <div className="bg-white rounded-xl p-8 shadow-lg">
                                        <div className="text-center">
                                            <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                                                <Award className="w-10 h-10 text-white" />
                                            </div>
                                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Proven Results</h3>
                                            <p className="text-gray-600 mb-6">
                                                We combine strategic thinking with practical execution to deliver measurable growth for our clients.
                                            </p>
                                            <div className="grid grid-cols-2 gap-4 text-center">
                                                <div>
                                                    <div className="text-2xl font-bold text-green-600">20%</div>
                                                    <div className="text-sm text-gray-600">Revenue Increase</div>
                                                </div>
                                                <div>
                                                    <div className="text-2xl font-bold text-green-600">500+</div>
                                                    <div className="text-sm text-gray-600">Happy Clients</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Leadership Section */}
                        <div className="bg-gray-50 rounded-2xl p-8 sm:p-12">
                            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 text-center">
                                Leadership{' '}
                                <span className="relative">
                                    Excellence
                                    <div className="absolute bottom-1 left-0 w-full h-1 bg-green-500 z-10 transform -skew-x-12"></div>
                                </span>
                            </h2>

                            <div className="bg-white rounded-xl p-8 shadow-lg">
                                <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
                                    {/* CEO Image */}
                                    <div className="flex-shrink-0">
                                        <div className="relative">
                                            <Image
                                                src="/images/Ceo/Rahul.png"
                                                alt="CEO - GrowX Marketing Services"
                                                width={240}
                                                height={300}
                                                className="w-48 h-60 sm:w-56 sm:h-72 lg:w-64 lg:h-80 rounded-2xl object-cover border-4 border-green-100 shadow-lg"
                                                priority
                                            />

                                        </div>
                                    </div>

                                    {/* CEO Content */}
                                    <div className="flex-1 text-center lg:text-left">
                                        <div className="flex items-center justify-center lg:justify-start gap-3 mb-4">
                                            <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                                                <Users className="w-6 h-6 text-white" />
                                            </div>
                                            <div>
                                                <h3 className="text-2xl font-bold text-gray-900">Founder & CEO</h3>
                                                <h3 className='text-black'>Rahul Yadav</h3>

                                            </div>
                                        </div>

                                        <p className="text-gray-700 leading-relaxed mb-4">
                                            In my role as <strong className="text-green-600">I am the CEO at GrowX Marketing Services</strong>, we achieved a notable <strong className="text-green-600">20% revenue increase</strong> through innovative affiliate campaigns. This success stems from a robust sales management background, complemented by a proficiency in PPC and affiliate marketing.
                                        </p>
                                        <p className="text-gray-700 leading-relaxed mb-6">
                                            My strategies are informed by a deep understanding of sales operations, which aligns with my continuous quest for growth and efficiency in our dynamic digital marketplace.
                                        </p>

                                        {/* Quick Stats */}


                                        {/* Contact Buttons */}
                                        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 mt-4">
                                            <a
                                                href="https://teams.live.com/l/invite/FEAs9c1l7U5gkj8PQE?v=g1"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 bg-gray-900 hover:bg-gray-800 text-white px-3 py-2 sm:px-4 sm:py-2 rounded-lg text-xs sm:text-sm font-medium transition-all duration-300 hover:scale-105 shadow-sm w-full sm:w-auto sm:min-w-[120px] justify-center"
                                            >
                                                <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M20.75 8.25V5.75a1.75 1.75 0 0 0-1.75-1.75h-14A1.75 1.75 0 0 0 3.25 5.75v12.5c0 .966.784 1.75 1.75 1.75h14a1.75 1.75 0 0 0 1.75-1.75V13.5L24 16V8l-3.25 2.25Z" />
                                                </svg>
                                                Join Teams
                                            </a>
                                            <a
                                                href="https://www.linkedin.com/in/rahul-yadav-0654101b2?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 bg-gray-900 hover:bg-gray-800 text-white px-3 py-2 sm:px-4 sm:py-2 rounded-lg text-xs sm:text-sm font-medium transition-all duration-300 hover:scale-105 shadow-sm w-full sm:w-auto sm:min-w-[120px] justify-center"
                                            >
                                                <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                                </svg>
                                                LinkedIn
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Achievements Grid */}
            <section className="py-16 sm:py-24 lg:py-32 bg-green-600">
                <div className="container mx-auto px-4 sm:px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                            Our Key{' '}
                            <span className="relative">
                                Achievements
                                <div className="absolute bottom-1 left-0 w-full h-1 bg-green-500 z-10 transform -skew-x-12"></div>
                            </span>
                        </h2>
                        <p className="text-xl text-green-100 max-w-3xl mx-auto">
                            Track record of delivering exceptional results and building lasting partnerships
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                        {achievements.map((achievement, index) => {
                            const AchievementIcon = achievement.icon;
                            return (
                                <div key={index} className="bg-white rounded-xl p-6 text-center hover:scale-105 transition-transform duration-300">
                                    <div className={`w-16 h-16 ${achievement.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                                        <AchievementIcon className="w-8 h-8 text-white" />
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-3">{achievement.title}</h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">{achievement.description}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-16 sm:py-24 lg:py-32 bg-gray-50">
                <div className="container mx-auto px-4 sm:px-6">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">
                            Our{' '}
                            <span className="relative">
                                Values
                                <div className="absolute bottom-1 left-0 w-full h-1 bg-green-500 z-10 transform -skew-x-12"></div>
                            </span>
                        </h2>

                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="bg-white p-8 rounded-xl shadow-lg">
                                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Zap className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">Innovation</h3>
                                <p className="text-gray-600">Constantly evolving our strategies to stay ahead in the dynamic digital marketplace.</p>
                            </div>

                            <div className="bg-white p-8 rounded-xl shadow-lg">
                                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Handshake className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">Partnership</h3>
                                <p className="text-gray-600">Building long-term relationships based on trust, transparency, and mutual success.</p>
                            </div>

                            <div className="bg-white p-8 rounded-xl shadow-lg">
                                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <TrendingUp className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">Growth</h3>
                                <p className="text-gray-600">Focused on sustainable growth that creates lasting value for all stakeholders.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-32 bg-gradient-to-r from-green-600 to-green-700">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                        Ready to{' '}
                        <span className="relative">
                            Partner
                            <div className="absolute bottom-1 left-0 w-full h-1 bg-green-500 z-10 transform -skew-x-12"></div>
                        </span>
                        {' '}With Us?
                    </h2>
                    <p className="text-green-100 mb-8 max-w-2xl mx-auto text-lg">
                        Let&apos;s discuss how our expertise can drive sustainable growth for your business through proven marketing strategies.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <button
                            onClick={() => window.location.href = '/contact'}
                            className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-500 hover:scale-105 active:scale-95 transform"
                        >
                            Contact Us
                        </button>
                        <button
                            onClick={() => window.location.href = '/blog'}
                            className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-500 hover:bg-white hover:text-green-700 hover:scale-105 active:scale-95 transform"
                        >
                            Learn More
                        </button>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-900 text-white py-16">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-4 gap-8">
                        {/* Company Info */}
                        <div className="md:col-span-2">
                            <div className="flex items-center space-x-4 mb-6">
                                <Image
                                    src="/images/logoupdated.png"
                                    alt="GrowX Marketing Services"
                                    width={60}
                                    height={60}
                                    className="rounded-lg w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 object-cover"
                                />
                                <div>
                                    <h3 className="text-xl sm:text-2xl font-bold">GrowX Marketing Services</h3>
                                    <p className="text-gray-400 text-sm sm:text-base">High-Conversion Marketing Solutions</p>
                                </div>
                            </div>
                            <p className="text-gray-400 leading-relaxed mb-6">
                                Specializing in TCPA Opt-in Transfers, targeted digital marketing, and comprehensive business solutions that drive sustainable growth and long-term partnerships.
                            </p>
                            <div className="flex space-x-4">
                                <a href="https://linkedin.com/company/growxmarketingservices" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-600 transition-colors p-2 hover:bg-gray-800 rounded-full">
                                    <Linkedin className="w-6 h-6" />
                                </a>
                                <a href="https://www.instagram.com/growxmarketingservices" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-500 transition-colors p-2 hover:bg-gray-800 rounded-full">
                                    <Instagram className="w-6 h-6" />
                                </a>
                                <a href="https://www.facebook.com/share/1QMBzmyycn/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500 transition-colors p-2 hover:bg-gray-800 rounded-full">
                                    <Facebook className="w-6 h-6" />
                                </a>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                            <ul className="space-y-2">
                                <li><Link href="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
                                <li><Link href="/services" className="text-gray-400 hover:text-white transition-colors">Services</Link></li>
                                <li><Link href="/products" className="text-gray-400 hover:text-white transition-colors">Products</Link></li>
                                <li><Link href="/aboutus" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
                                <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
                                <li><Link href="/faq" className="text-gray-400 hover:text-white transition-colors">FAQ</Link></li>
                            </ul>
                        </div>

                        {/* Contact Info */}
                        <div>
                            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
                            <div className="space-y-3">
                                <div className="flex items-start gap-3">
                                    <Image src="/images/phone.png" alt="Phone" width={20} height={20} className="w-5 h-5 object-contain mt-0.5 filter brightness-0 invert" />
                                    <span className="text-gray-400">+91 896 114 2973</span>
                                </div>
                                <div className="flex items-start gap-3">
                                    <Image src="/images/email.png" alt="Email" width={20} height={20} className="w-5 h-5 object-contain mt-0.5 filter brightness-0 invert" />
                                    <span className="text-gray-400 text-sm">growxmarketingservices@gmail.com</span>
                                </div>
                                <div className="flex items-start gap-3">
                                    <Image src="/images/visitus.png" alt="Address" width={20} height={20} className="w-5 h-5 object-contain mt-0.5 filter brightness-0 invert" />
                                    <span className="text-gray-400 text-sm">Bhavya Corporate Tower, Vibhuti Khand, Lucknow, UP 226010</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="border-t border-gray-800 pt-4 mt-6 text-center">
                        <p className="text-gray-400">
                            © 2024 GrowX Marketing Services. All rights reserved.

                        </p>
                    </div>
                </div>
            </footer>

            <UpArrow />
        </div>
    );
}
