"use client";
import React, { useEffect } from "react";
import WaveAnimation from "./WaveAnimation";
import dynamic from "next/dynamic";

const Landing = () => {

    return (
        <div className="relative min-h-screen snap-start overflow-hidden bg-gradient-to-b from-blue-900 to-blue-950">
            <WaveAnimation />
            <div className="min-h-screen text-white overflow-hidden relative">
                {/* Main Content */}
                <div className="flex flex-col items-center container mx-auto px-6 pt-50">
                    <div className="flex flex-col md:flex-row items-center justify-center mt-16">
                        {/* Hero Text */}
                        <div className="max-w-2xl flex flex-col justify-center items-center md:text-left mx-auto">
                            <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                                <h1 className="block text-center">
                                    Beneath and Beyond
                                </h1>
                                <h2 className="block text-center text-3xl md:text-4xl lg:text-5xl font-semibold mt-2">
                                    Think Deeper, Build Farther
                                </h2>
                            </div>

                        </div>
                    </div>
                    {/* <div className="flex justify-center items-center">
                        <CountdownTimer />
                    </div> */}
                    {/* <p>*Registrations are closed for External Teams (Teams Outside of NIT Hamirpur)</p> */}
                </div>
            </div>

        </div>
    );
};

export default Landing;