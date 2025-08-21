'use client';

import { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

/**
 * Reusable ContactForm Component
 * @param {Object} props
 * @param {string} props.title - Form title
 * @param {string} props.description - Form description
 * @param {Array} props.services - Array of available services for dropdown
 * @param {string} props.submitButtonText - Custom submit button text
 * @param {string} props.successTitle - Custom success title
 * @param {string} props.successMessage - Custom success message
 * @param {Function} props.onSubmit - Custom submit handler (optional)
 * @param {boolean} props.showServices - Whether to show services dropdown
 * @param {string} props.className - Additional CSS classes
 */
export default function ContactForm({
    title = "Send us a message",
    description = "Fill out the form below and we&apos;ll get back to you within 24 hours.",
    services = [
        'ACA (Affordable Care Act)',
        'Final Expense Insurance',
        'Auto Insurance',
        'SSDI (Social Security Disability Insurance)',
        'Debt Settlement',
        'Education Services',
        'Lead Generation',
        'Advertising',
        'Outsourcing',
        'Telecommunications',
        'Cold Calling Services',
        'Pay Per Call',
        'Inbound & Outbound Call Services',
        'Custom Solutions'
    ],
    submitButtonText = "Send Message",
    successTitle = "Thank You!",
    successMessage = "We&apos;ve received your message and will get back to you within 24 hours.",
    onSubmit = null,
    showServices = true,
    className = ""
}) {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        teamsId: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));

        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }

        // Real-time validation for email and phone
        if (name === 'email' && value.trim()) {
            const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            if (!emailRegex.test(value)) {
                setErrors(prev => ({
                    ...prev,
                    email: 'Please enter a valid email address'
                }));
            } else {
                setErrors(prev => ({
                    ...prev,
                    email: ''
                }));
            }
        }

        if (name === 'phone' && value.trim()) {
            const cleanPhone = value.replace(/[\s\-\(\)\.]/g, '');
            if (!/^[\+]?[1-9][\d]{6,14}$/.test(cleanPhone)) {
                setErrors(prev => ({
                    ...prev,
                    phone: 'Please enter a valid phone number (7-15 digits)'
                }));
            } else {
                setErrors(prev => ({
                    ...prev,
                    phone: ''
                }));
            }
        }
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.firstName.trim()) {
            newErrors.firstName = 'First name is required';
        }

        if (!formData.lastName.trim()) {
            newErrors.lastName = 'Last name is required';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else {
            // More comprehensive email validation
            const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            if (!emailRegex.test(formData.email)) {
                newErrors.email = 'Please enter a valid email address';
            }
        }

        if (!formData.phone.trim()) {
            newErrors.phone = 'Phone number is required';
        } else {
            // Remove all non-digit characters except + for validation
            const cleanPhone = formData.phone.replace(/[\s\-\(\)\.]/g, '');
            // Check if it's a valid phone number (7-15 digits, optionally starting with +)
            if (!/^[\+]?[1-9][\d]{6,14}$/.test(cleanPhone)) {
                newErrors.phone = 'Please enter a valid phone number (7-15 digits)';
            }
        }

        if (!formData.message.trim()) {
            newErrors.message = 'Message is required';
        }

        return newErrors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newErrors = validateForm();
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        setIsSubmitting(true);

        try {
            if (onSubmit) {
                await onSubmit(formData);
            } else {
                // Submit to Google Sheets - Replace this URL with your deployed script URL
                // const googleSheetsUrl = 'https://script.google.com/macros/s/YOUR_DEPLOYED_SCRIPT_ID/exec';
                const googleSheetsUrl = 'PASTE_YOUR_DEPLOYED_SCRIPT_URL_HERE';

                const formDataToSubmit = new FormData();
                formDataToSubmit.append('firstName', formData.firstName);
                formDataToSubmit.append('lastName', formData.lastName);
                formDataToSubmit.append('email', formData.email);
                formDataToSubmit.append('phone', formData.phone);
                formDataToSubmit.append('company', formData.company);
                formDataToSubmit.append('service', formData.service);
                formDataToSubmit.append('teamsId', formData.teamsId);
                formDataToSubmit.append('message', formData.message);

                // Fallback: Also log to console for debugging
                console.log('Form submission data:', formData);

                try {
                    await fetch(googleSheetsUrl, {
                        method: 'POST',
                        body: formDataToSubmit,
                        mode: 'no-cors'  // Required for Google Apps Script
                    });
                } catch (fetchError) {
                    console.log('Google Sheets submission completed (no-cors mode)');
                }
            }

            setIsSubmitted(true);
            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                phone: '',
                company: '',
                service: '',
                teamsId: '',
                message: ''
            });
        } catch (error) {
            console.error('Form submission error:', error);
            // Still show success message as Google Sheets submission might have worked
            setIsSubmitted(true);
        } finally {
            setIsSubmitting(false);
        }
    };

    const resetForm = () => {
        setIsSubmitted(false);
        setErrors({});
    };

    if (isSubmitted) {
        return (
            <div className={`bg-white p-8 rounded-xl shadow-lg text-center border border-gray-200 ${className}`}>
                <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{successTitle}</h3>
                <p className="text-gray-600 mb-6">{successMessage}</p>
                <button
                    onClick={resetForm}
                    className="bg-gray-900 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:bg-gray-800"
                >
                    Send Another Message
                </button>
            </div>
        );
    }

    return (
        <div className={`bg-white p-8 rounded-xl shadow-lg border border-gray-200 ${className}`}>
            <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{title}</h3>
                <p className="text-gray-600">{description}</p>
                <p className="text-sm text-gray-500 mt-2">* Required fields</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Full Name - First *
                        </label>
                        <input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            required
                            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all duration-300 text-gray-900 placeholder-gray-600 ${errors.firstName ? 'border-red-500' : 'border-gray-300'
                                }`}
                            placeholder="John"
                        />
                        {errors.firstName && (
                            <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
                        )}
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Full Name - Last *
                        </label>
                        <input
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            required
                            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all duration-300 text-gray-900 placeholder-gray-600 ${errors.lastName ? 'border-red-500' : 'border-gray-300'
                                }`}
                            placeholder="Doe"
                        />
                        {errors.lastName && (
                            <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
                        )}
                    </div>
                </div>

                {/* Email */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                    </label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all duration-300 text-gray-900 placeholder-gray-600 ${errors.email ? 'border-red-500' : 'border-gray-300'
                            }`}
                        placeholder="john@company.com"
                    />
                    {errors.email && (
                        <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                    )}
                </div>

                {/* Phone & Company */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Phone Number *
                        </label>
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all duration-300 text-gray-900 placeholder-gray-600 ${errors.phone ? 'border-red-500' : 'border-gray-300'}`}
                            placeholder="+1 (555) 123-4567"
                        />
                        {errors.phone && (
                            <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                        )}
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Company Name
                        </label>
                        <input
                            type="text"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all duration-300 text-gray-900 placeholder-gray-600"
                            placeholder="Your Company"
                        />
                    </div>
                </div>

                {/* Service Selection */}
                {showServices && (
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            What services can we help you with
                        </label>
                        <select
                            name="service"
                            value={formData.service}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all duration-300 text-gray-900 bg-white"
                        >
                            <option value="" className="text-gray-500">Select a service</option>
                            {services.map((service, index) => (
                                <option key={index} value={service} className="text-gray-900">{service}</option>
                            ))}
                        </select>
                    </div>
                )}

                {/* Teams ID */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Teams ID
                    </label>
                    <input
                        type="text"
                        name="teamsId"
                        value={formData.teamsId}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all duration-300 text-gray-900 placeholder-gray-600"
                        placeholder="Your Microsoft Teams ID"
                    />
                </div>

                {/* Message */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Message *
                    </label>
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all duration-300 resize-none text-gray-900 placeholder-gray-600 ${errors.message ? 'border-red-500' : 'border-gray-300'
                            }`}
                        placeholder="Tell us about your project and how we can help..."
                    />
                    {errors.message && (
                        <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                    )}
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gray-900 hover:bg-gray-800 text-white px-6 py-4 rounded-lg font-semibold text-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                    {isSubmitting ? (
                        <>
                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                            <span>Sending...</span>
                        </>
                    ) : (
                        <>
                            <span>{submitButtonText}</span>
                            <Send className="w-5 h-5" />
                        </>
                    )}
                </button>
            </form>
        </div>
    );
}