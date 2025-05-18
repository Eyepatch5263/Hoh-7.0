"use client";
import React from "react";
import WaveAnimation from "./WaveAnimation";
import CountdownTimer from "@/utils/Timing";


const Landing = () => {
    
    return (
        <div className="relative min-h-screen snap-start overflow-hidden bg-gradient-to-b from-blue-900 to-blue-950">
            <WaveAnimation />
            <div className="min-h-screen text-white overflow-hidden relative">
                {/* Main Content */}
                <div className="relative container mx-auto px-6 pt-50">
                    <div className="flex flex-col md:flex-row items-center justify-center mt-16">
                        {/* Hero Text */}
                        <div className="max-w-2xl flex justify-center items-center md:text-left mx-auto">
                            <h1 className="text-4xl  md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                                <span className="block text-center">
                                    Dive into the Depths
                                </span>
                                <span className="block text-center">
                                    of Marines of the blue
                                </span>
                            </h1>
                        </div>

                    </div>
                    <div className="flex justify-center items-center">
                        <CountdownTimer />
                    </div>
                </div>
                <button
                    className="fixed top-11/12 left-0 z-50 -translate-y-1/2 lg:w-20 h-24 w-12 lg:h-40 text-xs lg:text-lg bg-gradient-to-br from-cyan-600 to-blue-500/50 text-white font-bold flex items-center justify-center rounded-r-full shadow-lg hover:scale-105 transition-transform"
                    style={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }}
                >
                    Register
                </button>
                {/* Right half-circle Explore button */}
                <button
                    className="fixed top-11/12 right-0 z-50 -translate-y-1/2  lg:w-20 h-24 w-12 lg:h-40 text-xs lg:text-lg bg-gradient-to-br from-cyan-600 to-blue-500/50 text-white font-bold flex items-center justify-center rounded-l-full shadow-lg hover:scale-105 transition-transform"
                    style={{ borderTopRightRadius: 0, borderBottomRightRadius: 0 }}
                >
                    Explore
                </button>
            </div>
            
        </div>
    );
};

export default Landing;
