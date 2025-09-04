'use client';

import { useState, useCallback, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

/**
 * Navbar Component
 * Professional navigation bar with mobile responsiveness and smooth scrolling
 */
export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const pathname = usePathname();

    // Simple scroll to section function
    const scrollToSection = useCallback((sectionId) => {
        // Wait a bit for the page to be fully loaded
        setTimeout(() => {
            if (typeof window !== 'undefined' && typeof document !== 'undefined') {
                const element = document.getElementById(sectionId);
                if (element) {
                    console.log('Element found, scrolling...');
                    // Use scrollIntoView for better compatibility
                    element.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                    // Additional scroll up to account for navbar (adjusted for mobile)
                    setTimeout(() => {
                        const offset = window.innerWidth < 640 ? -64 : -80; // Mobile: 64px, Desktop: 80px
                        window.scrollBy({
                            top: offset,
                            behavior: 'smooth'
                        });
                    }, 100);
                } else {
                    console.log('Element not found:', sectionId);
                }
            }
        }, 100);
        // Close mobile menu after clicking
        setIsMenuOpen(false);
    }, []);

    // Handle scroll effect for navbar background
    useEffect(() => {
        const handleScroll = () => {
            if (typeof window !== 'undefined') {
                setIsScrolled(window.scrollY > 10);
            }
        };

        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', handleScroll);
            return () => window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    // Handle hash navigation when page loads
    useEffect(() => {
        if (typeof window !== 'undefined' && window.location.hash) {
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

    // Handle Get Started button click
    const handleGetStarted = () => {
        // If we're not on the homepage, navigate there first
        if (pathname !== '/') {
            window.location.href = '/#get-started-form';
        } else {
            // If we're already on homepage, just scroll to the form
            console.log('Scrolling to form section...');
            scrollToSection('get-started-form');
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
                <div className="flex items-center h-16 sm:h-18 lg:h-20">
                    {/* Logo Section */}
                    <div className="flex items-center space-x-4 flex-1 lg:flex-initial">
                        <Link href="/" className="block">
                            <div className="w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20 relative">
                                <Image
                                    src="/images/logoupdated.png"
                                    alt="GrowX Marketing Services Logo"
                                    width={80}
                                    height={80}
                                    className="w-full h-full rounded-lg object-cover transition-all duration-300 hover:scale-105"
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

                    {/* Get Started Button - Desktop - Only show on homepage */}
                    {pathname === '/' && (
                        <div className="hidden lg:block">
                            <button
                                onClick={handleGetStarted}
                                className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 hover:scale-105 hover:shadow-lg"
                            >
                                Get Started
                            </button>
                        </div>
                    )}

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
                    className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden ${isMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                        }`}
                    aria-hidden={!isMenuOpen}
                >
                    <div className="py-4 space-y-2 bg-white border-t border-gray-100 pb-6">
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

                        {/* Get Started Button - Mobile - Only show on homepage */}
                        {pathname === '/' && (
                            <div className="px-4 py-4">
                                <button
                                    onClick={handleGetStarted}
                                    className="w-full bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300"
                                >
                                    Get Started
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
} 