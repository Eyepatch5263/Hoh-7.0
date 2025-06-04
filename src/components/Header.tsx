"use client";
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsMenuOpen(false);
        }
    };



    return (
        <header
            className={`fixed w-full z-50 transition-all duration-300 ${isScrolled
                ? 'bg-white/90 backdrop-blur-md shadow-md py-3'
                : 'bg-transparent py-5'
                }`}
        >
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex justify-between items-center">
                    <div className="flex items-center">
                        {
                            !isScrolled ? (
                                <Image width={"48"} height={"48"} alt="hoh_logo" src={'/favicon.webp'} />
                            ) : (
                                <Image width={"48"} height={"48"} alt="hoh_logo" src={'/hoh3.webp'} />
                            )
                        }
                        <span
                            className={`ml-4 text-3xl font-semibold ${isScrolled ? 'text-blue-900' : 'text-white'
                                }`}
                        >
                            HOH
                        </span>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex space-x-8">
                        {['about', 'prize', 'testimonials', 'faq', 'contact', 'team'].map((item) => (
                            item === 'team' ? (
                                <a
                                    key={item}
                                    href="/team"
                                    className={`font-medium md:text-xl text-lg transition-colors duration-200 capitalize ${isScrolled ? 'text-blue-900 hover:text-blue-700' : 'text-white hover:text-blue-100'
                                        }`}
                                >
                                    {item}
                                </a>
                            ) : (
                                <button
                                    key={item}
                                    onClick={() => scrollToSection(item)}
                                    className={`font-medium md:text-xl text-lg transition-colors duration-200 capitalize ${isScrolled ? 'text-blue-900 hover:text-blue-700' : 'text-white hover:text-blue-100'
                                        }`}
                                >
                                    {item}
                                </button>
                            )
                        ))}
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        className={`md:hidden ${isScrolled ? 'text-blue-900' : 'text-white'}`}
                        onClick={toggleMenu}
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="md:hidden mt-4 py-4 bg-white rounded-lg shadow-lg animate-fadeIn">
                        <nav className="flex flex-col space-y-4 px-4 items-center">
                            {['about', 'prize', 'testimonials', 'faq', "contact", "team"].map((item) => (
                                item === 'team' ? (
                                    <a
                                        key={item}
                                        href="/team"
                                        className={`font-medium md:text-xl text-lg transition-colors duration-200 capitalize text-blue-900 hover:text-blue-700
                                            }`}
                                    >
                                        {item}
                                    </a>
                                ) : (
                                    <button
                                        key={item}
                                        onClick={() => scrollToSection(item)}
                                        className={`font-medium md:text-xl text-lg transition-colors duration-200 capitalize text-blue-900 hover:text-blue-700
                                            }`}
                                    >
                                        {item}
                                    </button>
                                )
                            ))}
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;