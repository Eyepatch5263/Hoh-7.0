"use client";
import React, { useState } from 'react';
import { Send, Mail, MapPin, Phone } from 'lucide-react';

const ContactForm = () => {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormState(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSubmitted(true);
            setFormState({ name: '', email: '', message: '' });
        }, 1500);
    };

    return (
        <section id="contact" className="py-20 md:py-28 bg-gradient-to-b from-blue-50 to-white relative overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-white to-transparent"></div>
            <div className="absolute top-1/4 left-0 w-80 h-80 rounded-full bg-teal-100/30 blur-3xl"></div>
            <div className="absolute bottom-1/3 right-0 w-80 h-80 rounded-full bg-blue-100/30 blur-3xl"></div>

            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4 relative inline-block">
                        <span className="relative z-10">Dive In Touch</span>
                        <span className="absolute bottom-1 left-0 w-full h-3 bg-teal-200/50 -z-10 transform -rotate-1"></span>
                    </h2>
                    <p className="text-lg text-blue-700 max-w-2xl mx-auto">
                        Ready to elevate your digital experience with oceanic design? Let&apos;s connect.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 max-w-6xl mx-auto">
                    {/* Contact Information */}
                    <div className="lg:col-span-2 bg-gradient-to-br from-blue-800 to-teal-700 rounded-xl shadow-lg p-8 text-white">
                        <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                        <p className="mb-8 text-blue-100">
                            Have questions or ready to start your oceanic journey? Reach out to our team.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-start">
                                <Phone className="w-6 h-6 mr-4 text-teal-300" />
                                <div>
                                    <h4 className="font-medium text-white">Call Us</h4>
                                    <p className="text-blue-100">+91 9876547654</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <Mail className="w-6 h-6 mr-4 text-teal-300" />
                                <div>
                                    <h4 className="font-medium text-white">Email Us</h4>
                                    <p className="text-blue-100">hackonhills@gmail.com</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <MapPin className="w-6 h-6 mr-4 text-teal-300" />
                                <div>
                                    <h4 className="font-medium text-white">Visit Us</h4>
                                    <p className="text-blue-100">
                                        Nit Hamirpur, Himachal Pradesh<br />
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12 pt-8 border-t border-blue-700/50">
                            <h4 className="font-medium text-white mb-4">Connect With Us</h4>
                            <div className="flex space-x-4">
                                {['twitter', 'facebook', 'instagram', 'linkedin'].map((social) => (
                                    <a
                                        key={social}
                                        href="#"
                                        className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors duration-300"
                                    >
                                        <span className="sr-only">{social}</span>
                                        {/* Icon would go here, using text placeholder */}
                                        <span className="uppercase text-xs">{social.charAt(0)}</span>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="lg:col-span-3 bg-white rounded-xl shadow-lg p-8">
                        {isSubmitted ? (
                            <div className="h-full flex flex-col items-center justify-center text-center">
                                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mb-6">
                                    <Send className="w-8 h-8 text-teal-600" />
                                </div>
                                <h3 className="text-2xl font-bold text-blue-900 mb-2">Message Sent!</h3>
                                <p className="text-blue-700 mb-6">
                                    Thank you for reaching out. We&apos;ll get back to you soon.
                                </p>
                                <button
                                    onClick={() => setIsSubmitted(false)}
                                    className="px-6 py-2 bg-blue-100 text-blue-800 rounded-lg hover:bg-blue-200 transition-colors duration-300"
                                >
                                    Send Another Message
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-blue-800 mb-1">
                                        Your Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formState.name}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg border border-blue-200 focus:ring-2 focus:ring-teal-400 focus:border-transparent transition-all duration-300"
                                        placeholder="John Doe"
                                        required
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-blue-800 mb-1">
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formState.email}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg border border-blue-200 focus:ring-2 focus:ring-teal-400 focus:border-transparent transition-all duration-300"
                                        placeholder="john@example.com"
                                        required
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-blue-800 mb-1">
                                        Your Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formState.message}
                                        onChange={handleChange}
                                        rows={5}
                                        className="w-full px-4 py-3 rounded-lg border border-blue-200 focus:ring-2 focus:ring-teal-400 focus:border-transparent transition-all duration-300"
                                        placeholder="Tell us about your project and how we can help..."
                                        required
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className={`w-full flex items-center justify-center px-6 py-3 rounded-lg font-medium text-white transition-all duration-300 ${isSubmitting
                                            ? 'bg-blue-400 cursor-not-allowed'
                                            : 'bg-blue-800 hover:bg-blue-700 hover:shadow-lg'
                                        }`}
                                >
                                    {isSubmitting ? (
                                        <>
                                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            Send Message <Send className="ml-2 w-5 h-5" />
                                        </>
                                    )}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;