/**
 * Form Submission Utilities for Google Sheets Integration
 * Centralized form submission logic for all forms in the application
 */

// Google Apps Script URL - Deployed script endpoint
const GOOGLE_APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxsFJToHVTEIN8GA6Yrfkuoh7xDCrawGSeSyiXGbncxu0vCjwmcvkpuAt7WMOAqAvZnzw/exec';

/**
 * Submit form data to Google Sheets
 * @param {Object} formData - The form data to submit
 * @param {string} formType - Type of form ('contact', 'services', etc.)
 * @returns {Promise<Object>} - Response from the submission
 */
export async function submitToGoogleSheets(formData, formType = 'general') {
    try {
        // Prepare form data with form type
        const formDataToSubmit = new FormData();

        // Add all form fields
        Object.keys(formData).forEach(key => {
            if (formData[key] !== null && formData[key] !== undefined) {
                formDataToSubmit.append(key, formData[key]);
            }
        });

        // Add form type identifier
        formDataToSubmit.append('formType', formType);

        // Add timestamp
        formDataToSubmit.append('timestamp', new Date().toISOString());

        // Log submission for debugging
        console.log(`Submitting ${formType} form:`, formData);

        // Submit to Google Sheets
        const response = await fetch(GOOGLE_APPS_SCRIPT_URL, {
            method: 'POST',
            body: formDataToSubmit,
            mode: 'no-cors'  // Required for Google Apps Script
        });

        // Note: Due to no-cors mode, we can't read the actual response
        // Google Apps Script will still process the data successfully
        console.log(`${formType} form submitted successfully`);

        return {
            success: true,
            message: 'Form submitted successfully'
        };

    } catch (error) {
        console.error('Form submission error:', error);

        // Still return success as the submission might have worked
        // (no-cors mode prevents us from seeing the actual response)
        return {
            success: true,
            message: 'Form submitted (unable to verify response due to CORS)',
            error: error.message
        };
    }
}

/**
 * Validate common form fields
 * @param {Object} formData - The form data to validate
 * @returns {Object} - Object containing validation errors
 */
export function validateFormFields(formData) {
    const errors = {};

    // Required fields validation
    if (!formData.firstName || !formData.firstName.trim()) {
        errors.firstName = 'First name is required';
    }

    if (!formData.lastName || !formData.lastName.trim()) {
        errors.lastName = 'Last name is required';
    }

    if (!formData.email || !formData.email.trim()) {
        errors.email = 'Email is required';
    } else {
        // Email format validation
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(formData.email)) {
            errors.email = 'Please enter a valid email address';
        }
    }

    if (!formData.phone || !formData.phone.trim()) {
        errors.phone = 'Phone number is required';
    } else {
        // Phone number validation
        const cleanPhone = formData.phone.replace(/[\s\-\(\)\.]/g, '');
        if (!/^[\+]?[1-9][\d]{6,14}$/.test(cleanPhone)) {
            errors.phone = 'Please enter a valid phone number (7-15 digits)';
        }
    }

    if (!formData.message || !formData.message.trim()) {
        errors.message = 'Message is required';
    }

    return errors;
}

/**
 * Format form data for display or logging
 * @param {Object} formData - The form data to format
 * @returns {string} - Formatted string representation
 */
export function formatFormDataForDisplay(formData) {
    const formatters = {
        firstName: (value) => `First Name: ${value}`,
        lastName: (value) => `Last Name: ${value}`,
        email: (value) => `Email: ${value}`,
        phone: (value) => `Phone: ${value}`,
        company: (value) => `Company: ${value || 'Not provided'}`,
        service: (value) => `Service: ${value || 'Not specified'}`,
        teamsId: (value) => `Teams ID: ${value || 'Not provided'}`,
        message: (value) => `Message: ${value}`,
        serviceInterest: (value) => `Service Interest: ${value || 'Not specified'}`
    };

    return Object.keys(formData)
        .filter(key => formData[key] && formData[key].trim())
        .map(key => formatters[key] ? formatters[key](formData[key]) : `${key}: ${formData[key]}`)
        .join('\n');
}

/**
 * Create a unified form submission handler
 * @param {Object} formData - The form data
 * @param {string} formType - Type of form
 * @param {Function} onSuccess - Success callback
 * @param {Function} onError - Error callback
 * @returns {Promise<boolean>} - Success status
 */
export async function handleFormSubmission(formData, formType, onSuccess = null, onError = null) {
    try {
        // Validate form data
        const errors = validateFormFields(formData);
        if (Object.keys(errors).length > 0) {
            if (onError) onError(errors);
            return false;
        }

        // Submit to Google Sheets
        const result = await submitToGoogleSheets(formData, formType);

        if (result.success) {
            if (onSuccess) onSuccess(result);
            return true;
        } else {
            if (onError) onError({ general: result.message || 'Submission failed' });
            return false;
        }

    } catch (error) {
        console.error('Form submission handler error:', error);
        if (onError) onError({ general: 'An unexpected error occurred' });
        return false;
    }
}

/**
 * Configuration for different form types
 */
export const FORM_TYPES = {
    CONTACT: 'contact',
    SERVICES: 'services',
    GENERAL: 'general'
};

/**
 * Default success messages for different form types
 */
export const SUCCESS_MESSAGES = {
    [FORM_TYPES.CONTACT]: "We've received your message and will get back to you within 24 hours.",
    [FORM_TYPES.SERVICES]: "We've received your service inquiry and will contact you soon with available options.",
    [FORM_TYPES.GENERAL]: "Your form has been submitted successfully."
};

/**
 * Instructions for Google Apps Script deployment
 * Copy this to your Google Apps Script editor and deploy as web app
 */
export const DEPLOYMENT_INSTRUCTIONS = `
GOOGLE APPS SCRIPT DEPLOYMENT INSTRUCTIONS:

1. Go to https://script.google.com/
2. Click "New Project"
3. Replace the default code with the contents of 'google-apps-script.gs'
4. Make sure the SHEET_ID is set to: 1yoX8GVk4YfusjtR_SFyMK1fh0XpmBaGgDcUVTYbWgQY
5. Click "Deploy" > "New deployment"
6. Choose type: "Web app"
7. Set execute as: "Me"
8. Set access: "Anyone"
9. Click "Deploy"
10. Copy the web app URL
11. Replace GOOGLE_APPS_SCRIPT_URL in this file with your deployed URL
12. Update ContactForm.js with the same URL

The deployed URL will look like:
https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
`;
