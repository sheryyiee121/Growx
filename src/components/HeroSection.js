import { ArrowRight, TrendingUp, Users, Phone } from 'lucide-react';
import Image from 'next/image';

/**
 * HeroSection Component
 * Main landing section with compelling copy and visual elements, fully centered
 */
export default function HeroSection() {
    return (
        <section
            className="min-h-[calc(100vh-1rem)] lg:min-h-screen bg-gradient-to-br from-green-50/30 via-white to-green-100/40 flex items-center justify-center relative overflow-hidden pt-16 pb-6 sm:pt-20 lg:pt-16"
            aria-labelledby="hero-heading"
        >
            <div className="w-full max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center">
                    {/* Left Content */}
                    <div className="text-center lg:text-left space-y-3 sm:space-y-4 lg:space-y-6">
                        <h1
                            id="hero-heading"
                            className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight"
                        >
                            Get Premium Leads<br />
                            That Convert
                        </h1>
                        <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-lg transition-all duration-500 hover:text-gray-700 mx-auto lg:mx-0">
                            We sell <span className="font-bold text-gray-800">high-quality, verified leads</span> across multiple verticals. Purchase <span className="font-bold text-gray-800">exclusive leads</span> from our Pay-Per-Call campaigns and lead generation systems. <span className="font-bold text-green-600">Quality guaranteed.</span>
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <button
                                onClick={() => {
                                    const message = encodeURIComponent("Hi! I'm interested in your high-quality leads. Can you help me?");
                                    const url = `https://wa.me/918961142973?text=${message}`;
                                    window.open(url, '_blank');
                                }}
                                className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-500 hover:scale-105 hover:shadow-xl active:scale-95 transform focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 flex items-center justify-center gap-3"
                            >
                                Buy Premium Leads

                            </button>
                        </div>

                        {/* Social Proof */}
                        <div className="flex flex-wrap items-center gap-3 sm:gap-6 lg:gap-8 pt-2 sm:pt-4 lg:pt-6 justify-center lg:justify-start">
                            <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-700 bg-gradient-to-r from-blue-50 to-purple-50 px-3 sm:px-4 py-2 rounded-full border border-blue-200 hover:animate-wobble">
                                <Users className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500 animate-pulse" aria-hidden="true" />
                                <span className="font-semibold whitespace-nowrap">500+ Clients</span>
                            </div>
                            <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-700 bg-gradient-to-r from-green-50 to-teal-50 px-3 sm:px-4 py-2 rounded-full border border-green-200 hover:animate-wobble">
                                <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 animate-bounce" aria-hidden="true" />
                                <span className="font-semibold whitespace-nowrap">95% Success Rate</span>
                            </div>
                            <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-700 bg-gradient-to-r from-orange-50 to-red-50 px-3 sm:px-4 py-2 rounded-full border border-orange-200 hover:animate-wobble">
                                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-orange-500 animate-pulse" aria-hidden="true" />
                                <span className="font-semibold whitespace-nowrap">24/7 Support</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Image - Submerged & Sexy Design */}
                    <div className="relative animate-slide-up lg:order-2" style={{ animationDelay: '0.3s' }}>
                        <div className="relative group">
                            {/* Background blur circle for submerged effect */}
                            <div className="absolute -inset-4 bg-gradient-to-r from-green-200/30 via-blue-200/30 to-purple-200/30 rounded-full blur-xl opacity-50 group-hover:opacity-70 transition-all duration-700"></div>

                            {/* Main image container - smaller and more integrated */}
                            <div className="relative overflow-hidden rounded-2xl shadow-lg">
                                <Image
                                    src="/pexels-goumbik-669621.jpg"
                                    alt="Business growth and success"
                                    width={600}
                                    height={400}
                                    className="w-full h-64 lg:h-72 object-cover transition-all duration-700 group-hover:scale-110 filter brightness-105 contrast-105 saturate-110"
                                />

                                {/* Sexy gradient overlay */}
                                <div className="absolute inset-0 bg-gradient-to-br from-green-400/15 via-transparent to-blue-400/15 group-hover:from-green-400/25 group-hover:to-blue-400/25 transition-all duration-500"></div>

                                {/* Shimmer effect */}
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>

                                {/* Subtle border glow */}
                                <div className="absolute inset-0 rounded-2xl ring-1 ring-white/20 group-hover:ring-white/30 transition-all duration-500"></div>


                            </div>

                            {/* Subtle floating elements */}
                            <div className="absolute -top-2 -right-2 w-3 h-3 bg-green-400/60 rounded-full animate-pulse hidden lg:block"></div>
                            <div className="absolute -bottom-2 -left-2 w-2.5 h-2.5 bg-blue-400/60 rounded-full animate-bounce hidden lg:block" style={{ animationDelay: '0.5s' }}></div>
                            <div className="absolute top-1/4 -right-2 w-2 h-2 bg-purple-400/60 rounded-full animate-ping hidden lg:block" style={{ animationDelay: '1s' }}></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}