'use client';

import Navbar from '../../components/Navbar';
import UpArrow from '../../components/UpArrow';
import FloatingWhatsApp from '../../components/FloatingWhatsApp';
import { CheckCircle, Star, Users, Target, TrendingUp, Shield, Phone, Mail, MessageSquare, ArrowRight, Zap, BarChart3, Clock, Award, PhoneCall, Megaphone, UserCheck, Wifi, Calendar, User, Eye, ThumbsUp } from 'lucide-react';
import Image from 'next/image';

export default function BlogPage() {
    const blogPosts = [
        {
            id: 1,
            title: "How We Generated 500+ Qualified Leads for ACA Enrollment Campaign",
            excerpt: "Discover the strategies that helped a healthcare provider achieve 300% ROI through our targeted ACA enrollment campaigns.",
            content: `Our client, a leading healthcare provider in Texas, was struggling to reach qualified prospects during the ACA open enrollment period. Through our comprehensive lead generation strategy, we implemented multi-channel marketing campaigns including targeted social media advertising, email marketing, and local community outreach.

The results were outstanding:
• 500+ qualified leads generated in 3 months
• 300% ROI on marketing spend
• 85% lead qualification rate
• 40% increase in enrollment conversions

Our approach focused on understanding the specific demographics and pain points of uninsured individuals, creating compelling messaging around healthcare accessibility and affordability.`,
            author: "Rahul Yadav",
            date: "December 15, 2024",
            readTime: "5 min read",
            category: "Case Study",
            image: "/images/aca.jpg",
            stats: {
                leads: "500+",
                roi: "300%",
                conversion: "85%"
            }
        },
        {
            id: 2,
            title: "Pay-Per-Call Success: $2M Revenue Generated for Insurance Agency",
            excerpt: "Learn how our pay-per-call campaigns transformed an insurance agency's lead generation and increased their revenue by 400%.",
            content: `A mid-sized insurance agency was spending thousands on traditional advertising with minimal results. We implemented our pay-per-call strategy, focusing on quality call filtering and real-time routing to their best agents.

Key strategies implemented:
• Advanced call tracking and analytics
• Quality call filtering system
• Real-time call routing to top performers
• Performance-based pricing model

The results exceeded expectations:
• $2M in additional revenue generated
• 400% increase in lead volume
• 60% improvement in call quality
• 25% reduction in cost per acquisition

Our pay-per-call model ensured they only paid for qualified calls, dramatically improving their ROI and allowing them to scale their operations efficiently.`,
            author: "Marketing Team",
            date: "December 10, 2024",
            readTime: "7 min read",
            category: "Success Story",
            image: "/images/pay-per-call.jpg",
            stats: {
                revenue: "$2M",
                increase: "400%",
                quality: "60%"
            }
        },
        {
            id: 3,
            title: "Legal Campaigns: 95% Success Rate in SSDI Claims",
            excerpt: "See how our specialized legal campaigns helped clients achieve exceptional success rates in Social Security Disability Insurance claims.",
            content: `Our legal campaigns division specializes in connecting individuals with qualified legal professionals for SSDI claims. Through targeted marketing and careful client matching, we've achieved remarkable success rates.

Our comprehensive approach includes:
• Specialized legal consultation services
• Disability claim assistance programs
• Professional document preparation support
• Court representation coordination

Success metrics:
• 95% success rate in SSDI claims
• Average processing time reduced by 40%
• Client satisfaction rate of 98%
• 300+ successful claims processed

We work with experienced legal professionals who understand the complexities of SSDI claims and can navigate the system effectively for our clients.`,
            author: "Legal Team",
            date: "December 8, 2024",
            readTime: "6 min read",
            category: "Legal Services",
            image: "/social.jpg",
            stats: {
                success: "95%",
                time: "40%",
                satisfaction: "98%"
            }
        },
        {
            id: 4,
            title: "Cold Calling Revolution: How We Increased Sales by 250%",
            excerpt: "Explore our innovative cold calling strategies that transformed a B2B company's sales performance and market reach.",
            content: `A B2B software company was struggling with their in-house sales team's performance. We implemented our comprehensive cold calling solution, combining experienced callers with advanced analytics and optimization.

Our methodology:
• Custom calling scripts tailored to each industry
• Advanced lead qualification techniques
• Real-time performance monitoring
• Continuous training and optimization

Results achieved:
• 250% increase in sales revenue
• 180% improvement in appointment setting
• 70% reduction in cost per lead
• 3x increase in sales pipeline

The key to our success was combining human expertise with data-driven optimization, ensuring every call was maximized for results while maintaining professional standards.`,
            author: "Sales Team",
            date: "December 5, 2024",
            readTime: "8 min read",
            category: "Sales Optimization",
            image: "/images/call.jpg",
            stats: {
                sales: "250%",
                appointments: "180%",
                cost: "70%"
            }
        },
        {
            id: 5,
            title: "Marketing Automation: Scaling from 100 to 10,000 Leads Monthly",
            excerpt: "Discover how our marketing automation solutions helped a startup scale their lead generation from 100 to 10,000 leads per month.",
            content: `A fast-growing tech startup needed to scale their marketing operations without proportionally increasing their team size. We implemented a comprehensive marketing automation solution that transformed their lead generation capabilities.

Our automation strategy included:
• Multi-channel lead nurturing campaigns
• Advanced email marketing automation
• CRM integration and lead scoring
• A/B testing and optimization

Scaling results:
• 100x increase in monthly leads (100 to 10,000)
• 80% reduction in manual marketing tasks
• 150% improvement in lead quality
• 90% increase in conversion rates

The automation system allowed them to maintain personalization at scale while freeing up their marketing team to focus on strategy and creative development.`,
            author: "Automation Team",
            date: "December 3, 2024",
            readTime: "6 min read",
            category: "Marketing Automation",
            image: "/images/automation.jpg",
            stats: {
                leads: "100x",
                tasks: "80%",
                quality: "150%"
            }
        }
    ];

    const categories = ['All', 'Case Study', 'Success Story', 'Legal Services', 'Sales Optimization', 'Marketing Automation'];

    return (
        <div className="min-h-screen bg-white overflow-x-hidden">
            <Navbar />
            <FloatingWhatsApp />

            {/* Hero Section */}
            <section className="pt-36 md:pt-32 pb-20 bg-gradient-to-br from-green-50/30 via-white to-green-100/40 animate-fade-in">
                <div className="container mx-auto px-6">
                    <div className="text-center max-w-4xl mx-auto">
                        <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6 animate-slide-up">
                            Case Studies &{' '}
                            <span className="relative">
                                Success Stories
                                <div className="absolute bottom-2 left-0 w-full h-2 bg-green-500 -z-10 transform -skew-x-12"></div>
                            </span>
                        </h1>
                        <p className="text-xl text-gray-600 leading-relaxed mb-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
                            Discover how our clients have achieved remarkable results through our lead generation and marketing services. Real stories, real results.
                        </p>
                        <div className="flex justify-center space-x-4 animate-slide-up" style={{ animationDelay: '0.4s' }}>
                            <button className="bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-500 hover:bg-green-800 hover:scale-105 hover:shadow-lg active:scale-95 transform flex items-center gap-2">
                                Read Case Studies
                                <ArrowRight className="w-5 h-5" />
                            </button>
                            <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-500 hover:border-green-700 hover:text-green-700 hover:scale-105 active:scale-95 transform">
                                Subscribe to Updates
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Case Study */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Case Study</h2>
                        <p className="text-xl text-gray-600">Our most successful campaign that demonstrates the power of strategic lead generation</p>
                    </div>

                    <div className="max-w-6xl mx-auto">
                        <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-2xl overflow-hidden shadow-2xl">
                            <div className="grid lg:grid-cols-2 gap-0">
                                <div className="p-12 text-white">
                                    <div className="mb-6">
                                        <span className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                                            Featured
                                        </span>
                                    </div>
                                    <h3 className="text-3xl font-bold mb-4">ACA Enrollment Campaign Success</h3>
                                    <p className="text-green-100 text-lg mb-6">
                                        How we helped a healthcare provider generate 500+ qualified leads and achieve 300% ROI during the ACA open enrollment period.
                                    </p>
                                    <div className="grid grid-cols-3 gap-6 mb-8">
                                        <div className="text-center">
                                            <div className="text-3xl font-bold">500+</div>
                                            <div className="text-green-200 text-sm">Leads Generated</div>
                                        </div>
                                        <div className="text-center">
                                            <div className="text-3xl font-bold">300%</div>
                                            <div className="text-green-200 text-sm">ROI</div>
                                        </div>
                                        <div className="text-center">
                                            <div className="text-3xl font-bold">85%</div>
                                            <div className="text-green-200 text-sm">Qualification Rate</div>
                                        </div>
                                    </div>
                                    <button className="bg-white text-green-700 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-all duration-300">
                                        Read Full Case Study
                                    </button>
                                </div>
                                <div className="bg-green-800 p-12 flex items-center justify-center">
                                    <div className="text-center text-white">
                                        <div className="w-24 h-24 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                                            <Award className="w-12 h-12 text-white" />
                                        </div>
                                        <h4 className="text-2xl font-bold mb-2">Success Story</h4>
                                        <p className="text-green-200">Real results from real clients</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Blog Posts Grid */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Latest Case Studies & Insights</h2>
                        <p className="text-xl text-gray-600">Learn from our most successful campaigns and discover strategies that work</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                        {blogPosts.map((post, index) => (
                            <article key={post.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-500 hover:scale-105">
                                <div className="relative">
                                    <div className="w-full h-48 bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
                                        <div className="text-center text-white">
                                            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                                <Target className="w-8 h-8 text-white" />
                                            </div>
                                            <p className="text-sm font-semibold">Case Study</p>
                                        </div>
                                    </div>
                                    <div className="absolute top-4 left-4">
                                        <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                                            {post.category}
                                        </span>
                                    </div>
                                </div>

                                <div className="p-6">
                                    <div className="flex items-center text-sm text-gray-500 mb-3">
                                        <Calendar className="w-4 h-4 mr-2" />
                                        {post.date}
                                        <span className="mx-2">•</span>
                                        <Clock className="w-4 h-4 mr-2" />
                                        {post.readTime}
                                    </div>

                                    <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                                        {post.title}
                                    </h3>

                                    <p className="text-gray-600 mb-4 line-clamp-3">
                                        {post.excerpt}
                                    </p>

                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center text-sm text-gray-500">
                                            <User className="w-4 h-4 mr-2" />
                                            {post.author}
                                        </div>
                                        <button className="text-green-600 hover:text-green-700 font-semibold text-sm flex items-center">
                                            Read More
                                            <ArrowRight className="w-4 h-4 ml-1" />
                                        </button>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-green-600 to-green-700">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-4xl font-bold text-white mb-6">
                        Ready to Create Your Success Story?
                    </h2>
                    <p className="text-green-100 mb-8 max-w-2xl mx-auto text-lg">
                        Join hundreds of successful businesses who have transformed their lead generation and achieved remarkable results with our services.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <button
                            onClick={() => window.location.href = '/contact'}
                            className="bg-white text-green-700 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-500 hover:bg-gray-100 hover:scale-105 active:scale-95 transform"
                        >
                            Get Started Today
                        </button>
                        <button
                            onClick={() => window.location.href = '/products'}
                            className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-500 hover:scale-105 active:scale-95 transform"
                        >
                            View Our Services
                        </button>
                    </div>
                </div>
            </section>

            <UpArrow />
        </div>
    );
}
