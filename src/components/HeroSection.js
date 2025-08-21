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
                        <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-lg transition-all duration-500 hover:text-gray-700 mx-auto lg:mx-0 text-justify">
                            We sell high-quality, verified leads across multiple verticals. Purchase exclusive leads from our Pay-Per-Call campaigns and lead generation systems. Quality guaranteed.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <button
                                onClick={() => {
                                    const message = encodeURIComponent("Hi! I'm interested in your high-quality leads. Can you help me?");
                                    const url = `https://wa.me/918961142973?text=${message}`;
                                    window.open(url, '_blank');
                                }}
                                className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-500 hover:scale-105 hover:shadow-xl active:scale-95 transform focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 flex items-center justify-center gap-3"
                                aria-label="Contact us on WhatsApp"
                            >
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                                </svg>
                                WhatsApp Us
                                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
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