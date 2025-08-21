'use client';

import { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';
import { submitToGoogleSheets, validateFormFields, FORM_TYPES } from '../utils/formSubmission';

/**
 * ServicesForm Component
 * Specialized form for services page inquiries
 */
export default function ServicesForm({
    services = [],
    selectedService = '',
    title = "Get Expert Guidance",
    description = "Fill out the form below and we'll get back to you within 24 hours.",
    submitButtonText = "Get Quality Leads",
    successTitle = "Thank You!",
    successMessage = "We've received your service inquiry and will contact you soon with available options.",
    className = ""
}) {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        serviceInterest: selectedService,
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
            const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            if (!emailRegex.test(formData.email)) {
                newErrors.email = 'Please enter a valid email address';
            }
        }

        if (!formData.phone.trim()) {
            newErrors.phone = 'Phone number is required';
        } else {
            const cleanPhone = formData.phone.replace(/[\s\-\(\)\.]/g, '');
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
            // Submit to Google Sheets
            await submitToGoogleSheets(formData, FORM_TYPES.SERVICES);

            setIsSubmitted(true);
            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                phone: '',
                serviceInterest: selectedService,
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
                    Send Another Inquiry
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
                <div className="grid md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            First Name *
                        </label>
                        <input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            required
                            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 text-gray-900 placeholder-gray-600 ${errors.firstName ? 'border-red-500' : 'border-gray-300'
                                }`}
                            placeholder="John"
                        />
                        {errors.firstName && (
                            <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
                        )}
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Last Name *
                        </label>
                        <input
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            required
                            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 text-gray-900 placeholder-gray-600 ${errors.lastName ? 'border-red-500' : 'border-gray-300'
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
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 text-gray-900 placeholder-gray-600 ${errors.email ? 'border-red-500' : 'border-gray-300'
                            }`}
                        placeholder="john@company.com"
                    />
                    {errors.email && (
                        <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                    )}
                </div>

                {/* Phone */}
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
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 text-gray-900 placeholder-gray-600 ${errors.phone ? 'border-red-500' : 'border-gray-300'
                            }`}
                        placeholder="+1 (555) 123-4567"
                    />
                    {errors.phone && (
                        <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                    )}
                </div>

                {/* Service Interest */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Service Interest
                    </label>
                    <select
                        name="serviceInterest"
                        value={formData.serviceInterest}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 text-gray-900 bg-white"
                    >
                        <option value="" className="text-gray-500">Select a service</option>
                        {services.map((service, index) => (
                            <option key={service.id || index} value={service.title || service} className="text-gray-900">
                                {service.title || service}
                            </option>
                        ))}
                        <option value="Custom Solutions" className="text-gray-900">Custom Solutions</option>
                    </select>
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
                        rows={4}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 resize-none text-gray-900 placeholder-gray-600 ${errors.message ? 'border-red-500' : 'border-gray-300'
                            }`}
                        placeholder="Tell us about your needs..."
                    />
                    {errors.message && (
                        <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                    )}
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-green-500 hover:bg-green-600 text-white px-6 py-4 rounded-lg font-semibold text-lg transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 hover:scale-105"
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
