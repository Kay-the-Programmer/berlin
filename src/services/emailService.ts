import emailjs from '@emailjs/browser';

// TODO: REPLACE THESE WITH YOUR ACTUAL KEYS FROM THE EMAILJS DASHBOARD
const SERVICE_ID = "YOUR_SERVICE_ID_HERE";
const TEMPLATE_ID = "YOUR_TEMPLATE_ID_HERE";
const PUBLIC_KEY = "YOUR_PUBLIC_KEY_HERE";

export interface ContactFormData {
    postalCode: string;
    date: string;
    time: string;
    cleaningType: string;
    cleaners: string;
    hours: string;
    totalHours: string;
    phone: string;
    email: string;
}

export const sendContactForm = async (data: ContactFormData): Promise<void> => {
    const templateParams = {
        name: data.email.split('@')[0], // Fallback name if strictly needed, or just remove 'name' if not in template
        email: data.email,
        phone: data.phone,
        postalCode: data.postalCode,
        date: data.date,
        time: data.time,
        cleaningType: data.cleaningType,
        cleaners: data.cleaners,
        hours: data.hours,
        totalHours: data.totalHours,
    };

    try {
        const result = await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
        console.log('Email sent successfully:', result.text);
    } catch (error) {
        console.error('Failed to send email:', error);
        throw error;
    }
};
