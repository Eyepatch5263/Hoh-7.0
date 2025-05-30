"use client"
import React from 'react';

const Footer = () => {
    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
        <footer className="bg-blue-900 text-white pt-16 pb-8 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-12 bg-gradient-to-b from-white to-transparent opacity-5"></div>
            <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black/20 to-transparent"></div>

            {/* Wave separator */}
            <div className="absolute top-0 left-0 w-full overflow-hidden -mt-1">
                <svg
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                    className="w-full h-12 text-white"
                    fill="currentColor"
                >
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
                </svg>
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Company Info */}
                    <div>
                        <div className="flex items-center mb-4">
                            <img width={"48"} src={'favicon.jpg'} />
                            <span className="ml-2 text-xl font-semibold text-white">Hack On Hills</span>
                        </div>
                        <p className="text-blue-200 mb-6">
                            Hack On Hills is a hackathon event that brings together developers, designers, and innovators to create solutions for conservation and sustainability.
                        </p>
                        <div className="flex space-x-4">
                            {['twitter', 'facebook', 'instagram', 'github'].map((social) => (
                                <a
                                    key={social}
                                    href="#"
                                    className="w-10 cursor-pointer h-10 rounded-full bg-blue-800 hover:bg-blue-700 flex items-center justify-center transition-colors duration-300"
                                    aria-label={`Follow us on ${social}`}
                                >
                                    <span className="uppercase text-xs">{social.charAt(0)}</span>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links 1 */}
                    <div>
                        <h4 className="text-white font-semibold text-lg mb-4">Company</h4>
                        <ul className="space-y-3">
                            {['about', 'prize', 'testimonials', 'contact', 'faq', "team"].map((item) => (
                                item === 'team' ? (
                                    <a
                                        key={item}
                                        href="/team"
                                        className="capitalize cursor-pointer text-blue-200 hover:text-teal-300 transition-colors duration-300"
                                    >
                                        {item}
                                    </a>
                                ) :
                                    <li key={item}>
                                        <a onClick={() => scrollToSection(item)} className="capitalize cursor-pointer text-blue-200 hover:text-teal-300 transition-colors duration-300">
                                            {item}
                                        </a>
                                    </li>
                            ))}
                        </ul>
                    </div>

                    {/* Links 2 */}
                    <div>
                        <h4 className="text-white font-semibold text-lg mb-4">Resources</h4>
                        <ul className="space-y-3">
                            {['Code of Conduct', 'Venue', "Marine's Flow", 'FAQ', 'Discord'].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-blue-200 hover:text-teal-300 transition-colors duration-300">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h4 className="text-white font-semibold text-lg mb-4">Subscribe</h4>
                        <p className="text-blue-200 mb-4">
                            Join our newsletter for the latest updates and oceanic innovations.
                        </p>
                        <form className="flex mb-4">
                            <input
                                type="email"
                                placeholder="Your email"
                                className="px-4 py-2 rounded-l-lg bg-blue-800 border border-blue-700 text-blue-100 placeholder-blue-400 focus:outline-none focus:ring-2 focus:ring-teal-400 flex-grow"
                            />
                            <button
                                type="submit"
                                className="bg-cyan-500 hover:bg-cyan-700 transition-colors duration-300 text-white font-medium px-4 py-2 rounded-r-lg"
                            >
                                Subscribe
                            </button>
                        </form>
                        <p className="text-blue-300 text-sm">
                            We respect your privacy. Unsubscribe at any time.
                        </p>
                    </div>
                </div>

                <div className="pt-8 border-t border-blue-800 text-center md:flex md:justify-between md:items-center">
                    <p className="text-blue-300 mb-4 md:mb-0">
                        &copy; {new Date().getFullYear()} Hack On Hills. All rights reserved.
                    </p>
                    <div className="flex flex-wrap justify-center md:justify-end space-x-6">
                        {['Terms', 'Privacy', 'Cookies', 'Legal'].map((item) => (
                            <a
                                key={item}
                                href="#"
                                className="text-blue-300 hover:text-teal-300 transition-colors duration-300 text-sm"
                            >
                                {item}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;