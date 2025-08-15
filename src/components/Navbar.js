'use client';

import { useState, useCallback, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

/**
 * Navbar Component
 * Professional navigation bar with mobile responsiveness and smooth scrolling
 */
export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    // Optimized smooth scrolling function
    const scrollToSection = useCallback((sectionId) => {
        const element = document.getElementById(sectionId);

        if (element) {
            const navbarHeight = 80; // h-20 = 80px
            const elementPosition = element.offsetTop - navbarHeight;
            const currentPosition = window.pageYOffset;
            const distance = elementPosition - currentPosition;
            const duration = 1200; // 1.2 seconds for smooth animation
            let start = null;

            function animation(currentTime) {
                if (start === null) start = currentTime;
                const timeElapsed = currentTime - start;
                const progress = Math.min(timeElapsed / duration, 1);

                // Easing function for smooth animation
                const easeInOutCubic = t => t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
                const run = easeInOutCubic(progress);

                window.scrollTo(0, currentPosition + distance * run);

                if (timeElapsed < duration) {
                    requestAnimationFrame(animation);
                }
            }

            requestAnimationFrame(animation);
        }

        // Close mobile menu after clicking
        setIsMenuOpen(false);
    }, []);

    // Handle scroll effect for navbar background
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Handle hash navigation when page loads
    useEffect(() => {
        if (window.location.hash) {
            const sectionId = window.location.hash.substring(1);
            setTimeout(() => {
                scrollToSection(sectionId);
            }, 100);
        }
    }, [scrollToSection]);

    // Toggle mobile menu
    const toggleMenu = useCallback(() => {
        setIsMenuOpen(prev => !prev);
    }, []);

    // Navigation items configuration
    const navigationItems = [
        { id: 'hero', label: 'Home', href: '/' },
        { id: 'aboutus', label: 'About', href: '/aboutus' },
        { id: 'services', label: 'Services', href: '/services' },
        { id: 'products', label: 'Products', href: '/products' },
        { id: 'faq', label: "FAQ's", href: '/faq' },
        { id: 'contact', label: 'Contact', href: '/contact' },

    ];

    // Handle navigation to pages
    const handleNavigation = (sectionId) => {
        const item = navigationItems.find(item => item.id === sectionId);
        if (item) {
            window.location.href = item.href;
        }
        // Close mobile menu after clicking
        setIsMenuOpen(false);
    };

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md' : 'bg-white'} border-b border-gray-100`}
            role="navigation"
            aria-label="Main navigation"
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center h-20">
                    {/* Logo Section */}
                    <div className="flex items-center space-x-4 flex-1 lg:flex-initial">
                        <Link href="/" className="block">
                            <div className="w-20 h-20 relative">
                                <Image
                                    src="/images/logoupdated.png"
                                    alt="GrowX Marketing Services Logo"
                                    width={80}
                                    height={80}
                                    className="rounded-lg object-cover transition-all duration-300 hover:scale-105"
                                    priority
                                />
                            </div>
                        </Link>
                    </div>

                    {/* Desktop Navigation Links - Centered */}
                    <div className="hidden lg:flex items-center space-x-8 flex-1 justify-center">
                        {navigationItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => handleNavigation(item.id)}
                                className="text-gray-600 hover:text-gray-900 font-medium transition-colors duration-200 relative group focus:outline-none"
                                aria-label={`Navigate to ${item.label} section`}
                            >
                                {item.label}
                                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-600 transition-all duration-300 group-hover:w-full"></div>
                            </button>
                        ))}
                    </div>

                    {/* Get Started Button - Desktop */}
                    <div className="hidden lg:block">
                        <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 hover:scale-105 hover:shadow-lg">
                            Get Started
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="lg:hidden ml-auto">
                        <button
                            onClick={toggleMenu}
                            className="text-gray-600 hover:text-gray-900 transition-colors duration-200 p-2 focus:outline-none"
                            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                            aria-expanded={isMenuOpen}
                            aria-controls="mobile-menu"
                        >
                            {isMenuOpen ? (
                                <X className="w-6 h-6" aria-hidden="true" />
                            ) : (
                                <Menu className="w-6 h-6" aria-hidden="true" />
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div
                    id="mobile-menu"
                    className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                        }`}
                    aria-hidden={!isMenuOpen}
                >
                    <div className="py-4 space-y-2 bg-white border-t border-gray-100">
                        {navigationItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => handleNavigation(item.id)}
                                className="block w-full text-left px-4 py-3 text-gray-600 hover:text-gray-900 hover:bg-gray-50 font-medium transition-colors duration-200"
                                aria-label={`Navigate to ${item.label} section`}
                            >
                                {item.label}
                            </button>
                        ))}

                        {/* Get Started Button - Mobile */}
                        <div className="px-4 py-3">
                            <button className="w-full bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300">
                                Get Started
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
} 