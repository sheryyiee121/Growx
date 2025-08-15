import { Check, Star } from 'lucide-react';
import Navbar from '../../components/Navbar';

export default function PricingPage() {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-24 bg-gradient-to-r from-green-50 to-blue-50">
                <div className="container mx-auto px-6">
                    <div className="text-center space-y-8">
                        <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                            Simple, Transparent{' '}
                            <span className="relative">
                                Pricing
                                <div className="absolute bottom-2 left-0 w-full h-2 bg-green-500 -z-10 transform -skew-x-12"></div>
                            </span>
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Choose the perfect plan for your insurance and financial service needs. All plans include our expert guidance and dedicated support.
                        </p>
                    </div>
                </div>
            </section>

            {/* Pricing Cards */}
            <section className="py-32">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {/* Design Only Plan */}
                        <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-500 hover:scale-105">
                            <div className="mb-8">
                                <h3 className="text-2xl font-bold text-gray-900 mb-6">Design only</h3>
                                <p className="text-gray-600 mb-8">Works for companies who want beautiful designs with quick turn around time.</p>
                                <div className="mb-8">
                                    <span className="text-5xl font-bold text-gray-900">$3,000</span>
                                    <span className="text-gray-400 ml-2">/month</span>
                                </div>
                            </div>
                            <ul className="space-y-4 mb-12">
                                <li className="flex items-center">
                                    <div className="w-5 h-5 rounded-full bg-gray-900 flex items-center justify-center mr-4">
                                        <Check className="w-3 h-3 text-white" />
                                    </div>
                                    <span className="text-gray-700">Dedicated designer</span>
                                </li>
                                <li className="flex items-center">
                                    <div className="w-5 h-5 rounded-full bg-gray-900 flex items-center justify-center mr-4">
                                        <Check className="w-3 h-3 text-white" />
                                    </div>
                                    <span className="text-gray-700">Pause or cancel anytime</span>
                                </li>
                                <li className="flex items-center">
                                    <div className="w-5 h-5 rounded-full bg-gray-900 flex items-center justify-center mr-4">
                                        <Check className="w-3 h-3 text-white" />
                                    </div>
                                    <span className="text-gray-700">Quick turn-around time</span>
                                </li>
                                <li className="flex items-center">
                                    <div className="w-5 h-5 rounded-full bg-gray-900 flex items-center justify-center mr-4">
                                        <Check className="w-3 h-3 text-white" />
                                    </div>
                                    <span className="text-gray-700">Unlimited revisions</span>
                                </li>
                                <li className="flex items-center">
                                    <div className="w-5 h-5 rounded-full bg-gray-900 flex items-center justify-center mr-4">
                                        <Check className="w-3 h-3 text-white" />
                                    </div>
                                    <span className="text-gray-700">Easy, async communication</span>
                                </li>
                            </ul>
                            <button className="w-full bg-gray-900 text-white py-4 rounded-full font-semibold text-lg transition-all duration-500 hover:bg-gray-800 hover:scale-105">
                                Contact us
                            </button>
                        </div>

                        {/* Full-stack Team Plan - Featured */}
                        <div className="bg-gray-900 p-8 rounded-3xl shadow-xl relative hover:shadow-2xl transition-all duration-500 hover:scale-105">
                            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                                <div className="bg-green-500 text-gray-900 px-4 py-2 rounded-full text-sm font-semibold">
                                    Most popular
                                </div>
                            </div>
                            <div className="mb-8">
                                <h3 className="text-2xl font-bold text-white mb-6">Full-stack team</h3>
                                <p className="text-gray-300 mb-8">Works for companies who want a team to build out new features or products.</p>
                                <div className="mb-8">
                                    <span className="text-5xl font-bold text-white">$8,000</span>
                                    <span className="text-gray-400 ml-2">/month</span>
                                </div>
                            </div>
                            <ul className="space-y-4 mb-12">
                                <li className="flex items-center">
                                    <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center mr-4">
                                        <Check className="w-3 h-3 text-gray-900" />
                                    </div>
                                    <span className="text-white">Designer, Full-stack dev, and PM</span>
                                </li>
                                <li className="flex items-center">
                                    <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center mr-4">
                                        <Check className="w-3 h-3 text-gray-900" />
                                    </div>
                                    <span className="text-white">Pause or cancel anytime</span>
                                </li>
                                <li className="flex items-center">
                                    <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center mr-4">
                                        <Check className="w-3 h-3 text-gray-900" />
                                    </div>
                                    <span className="text-white">Quick turn-around time</span>
                                </li>
                                <li className="flex items-center">
                                    <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center mr-4">
                                        <Check className="w-3 h-3 text-gray-900" />
                                    </div>
                                    <span className="text-white">MVPs, new or existing products</span>
                                </li>
                                <li className="flex items-center">
                                    <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center mr-4">
                                        <Check className="w-3 h-3 text-gray-900" />
                                    </div>
                                    <span className="text-white">Easy, async communication</span>
                                </li>
                            </ul>
                            <button className="w-full bg-white text-gray-900 py-4 rounded-full font-semibold text-lg transition-all duration-500 hover:bg-gray-100 hover:scale-105">
                                Contact us
                            </button>
                        </div>

                        {/* Project Based Plan */}
                        <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-500 hover:scale-105">
                            <div className="mb-8">
                                <h3 className="text-2xl font-bold text-gray-900 mb-6">Project based</h3>
                                <p className="text-gray-600 mb-8">You have a defined scope and don&apos;t need us to continuing supporting it.</p>
                                <div className="mb-8">
                                    <span className="text-5xl font-bold text-gray-900">Custom</span>
                                </div>
                            </div>
                            <ul className="space-y-4 mb-12">
                                <li className="flex items-center">
                                    <div className="w-5 h-5 rounded-full bg-gray-900 flex items-center justify-center mr-4">
                                        <Check className="w-3 h-3 text-white" />
                                    </div>
                                    <span className="text-gray-700">Custom quoting</span>
                                </li>
                                <li className="flex items-center">
                                    <div className="w-5 h-5 rounded-full bg-gray-900 flex items-center justify-center mr-4">
                                        <Check className="w-3 h-3 text-white" />
                                    </div>
                                    <span className="text-gray-700">Flexible payment plans</span>
                                </li>
                                <li className="flex items-center">
                                    <div className="w-5 h-5 rounded-full bg-gray-900 flex items-center justify-center mr-4">
                                        <Check className="w-3 h-3 text-white" />
                                    </div>
                                    <span className="text-gray-700">Designer, Full-stack dev, and PM</span>
                                </li>
                                <li className="flex items-center">
                                    <div className="w-5 h-5 rounded-full bg-gray-900 flex items-center justify-center mr-4">
                                        <Check className="w-3 h-3 text-white" />
                                    </div>
                                    <span className="text-gray-700">Reports with on-demand meetings</span>
                                </li>
                                <li className="flex items-center">
                                    <div className="w-5 h-5 rounded-full bg-gray-900 flex items-center justify-center mr-4">
                                        <Check className="w-3 h-3 text-white" />
                                    </div>
                                    <span className="text-gray-700">Easy, async communication</span>
                                </li>
                            </ul>
                            <button className="w-full bg-gray-900 text-white py-4 rounded-full font-semibold text-lg transition-all duration-500 hover:bg-gray-800 hover:scale-105">
                                Contact us
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-32 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Get answers to common questions about our insurance and financial services.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        <div className="bg-white p-8 rounded-xl shadow-sm">
                            <h3 className="font-semibold text-gray-900 mb-4 text-lg">What services do you offer?</h3>
                            <p className="text-gray-600">We specialize in ACA enrollment, final expense insurance, auto insurance, SSDI assistance, and debt settlement services.</p>
                        </div>
                        <div className="bg-white p-8 rounded-xl shadow-sm">
                            <h3 className="font-semibold text-gray-900 mb-4 text-lg">How much can I save on insurance?</h3>
                            <p className="text-gray-600">Our clients typically save 20-90% on premiums through our expert guidance and plan comparison services.</p>
                        </div>
                        <div className="bg-white p-8 rounded-xl shadow-sm">
                            <h3 className="font-semibold text-gray-900 mb-4 text-lg">How do you charge for leads?</h3>
                            <p className="text-gray-600">We offer performance-based pricing where you only pay for qualified leads that meet your criteria. No upfront costs or setup fees.</p>
                        </div>
                        <div className="bg-white p-8 rounded-xl shadow-sm">
                            <h3 className="font-semibold text-gray-900 mb-4 text-lg">Do you handle the entire application process?</h3>
                            <p className="text-gray-600">Yes, we provide end-to-end lead generation services from campaign setup to lead delivery and ongoing optimization to maximize your ROI.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-32 bg-green-500">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-4xl font-bold text-white mb-8">
                        Ready to Get Expert Insurance Guidance?
                    </h2>
                    <p className="text-xl text-green-100 mb-12 max-w-3xl mx-auto">
                        Join hundreds of businesses who purchase our high-quality leads to grow their customer base and increase revenue.
                    </p>
                    <button className="bg-white text-green-600 px-12 py-4 rounded-full font-semibold text-lg transition-all duration-500 hover:bg-gray-100 hover:scale-105 hover:shadow-lg active:scale-95 transform">
                        Buy Quality Leads
                    </button>
                </div>
            </section>
        </div>
    );
} 