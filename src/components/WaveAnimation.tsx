"use client"
import React, { useEffect, useState } from 'react';

const NUM_BUBBLES = 20;

const generateBubbles = () => {
    const arr = [];
    for (let i = 0; i < NUM_BUBBLES; i++) {
        arr.push({
            width: Math.random() * 10 + 4,
            height: Math.random() * 10 + 4,
            left: Math.random() * 100,
            bottom: -Math.random() * 20,
            animationDuration: Math.random() * 6 + 6,
            animationDelay: Math.random() * 2,
        });
    }
    return arr;
};

const WaveAnimation = () => {
    const [bubbles, setBubbles] = useState<Array<ReturnType<typeof generateBubbles>[number]>>([]);

    useEffect(() => {
        setBubbles(generateBubbles());
    }, []);

    return (
        <div className="absolute inset-0 overflow-hidden z-0">
            {/* Deep ocean wave layer */}
            <div className="absolute inset-0" >
                <svg
                    className="absolute bottom-0 left-0 w-full h-2/3 animate-wave-deep"
                    viewBox="0 0 1440 320"
                    preserveAspectRatio="none"
                >
                    <path
                        fill="url(#deep-gradient)"
                        fillOpacity="0.4"
                        d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,154.7C672,160,768,192,864,197.3C960,203,1056,181,1152,154.7C1248,128,1344,96,1392,80L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                    />
                    <defs>
                        <linearGradient id="deep-gradient" x1="0" y1="0" x2="1" y2="0">
                            <stop offset="0%" stopColor="#8AA5F0" stopOpacity="0.4" />
                            <stop offset="50%" stopColor="#7ADFF9" stopOpacity="0.4" />
                            <stop offset="100%" stopColor="#1e3a8a" stopOpacity="0.4" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>

            {/* Middle ocean wave layer */}
            <div className="absolute bottom-0 left-0 right-0 h-3/4 pointer-events-none">
                <svg
                    className="absolute bottom-0 left-0 w-full h-full animate-wave-middle"
                    viewBox="0 0 1440 320"
                    preserveAspectRatio="none"
                >
                    <path
                        fill="url(#middle-gradient)"
                        fillOpacity="0.6"
                        d="M0,224L48,213.3C96,203,192,181,288,186.7C384,192,480,224,576,229.3C672,235,768,213,864,197.3C960,181,1056,171,1152,186.7C1248,203,1344,245,1392,266.7L1440,288L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                    />
                    <defs>
                        <linearGradient id="middle-gradient" x1="0" y1="0" x2="1" y2="0">
                            <stop offset="0%" stopColor="#1e40af" stopOpacity="0.3" />
                            <stop offset="50%" stopColor="#0d9488" stopOpacity="0.3" />
                            <stop offset="100%" stopColor="#1e40af" stopOpacity="0.3" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>

            {/* Surface wave layer */}
            <div className="absolute bottom-0 left-0 right-0 h-1/2 pointer-events-none">
                <svg
                    className="absolute bottom-0 left-0 w-full h-full animate-wave-surface"
                    viewBox="0 0 1440 320"
                    preserveAspectRatio="none"
                >
                    <path
                        fill="url(#surface-gradient)"
                        fillOpacity="0.8"
                        d="M0,160L48,176C96,192,192,224,288,229.3C384,235,480,213,576,197.3C672,181,768,171,864,176C960,181,1056,203,1152,197.3C1248,192,1344,160,1392,144L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                    />
                    <defs>
                        <linearGradient id="surface-gradient" x1="0" y1="0" x2="1" y2="0">
                            <stop offset="0%" stopColor="#2dd4bf" stopOpacity="0.2" />
                            <stop offset="50%" stopColor="#60a5fa" stopOpacity="0.2" />
                            <stop offset="100%" stopColor="#2dd4bf" stopOpacity="0.2" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>

            {/* Rising bubbles */}
            <div className="absolute inset-0 pointer-events-none">
                {bubbles.map((bubble, i) => (
                    <div
                        key={i}
                        className="absolute rounded-full animate-float"
                        style={{
                            width: `${bubble.width}px`,
                            height: `${bubble.height}px`,
                            left: `${bubble.left}%`,
                            bottom: `${bubble.bottom}%`,
                            animationDuration: `${bubble.animationDuration}s`,
                            animationDelay: `${bubble.animationDelay}s`,
                            background: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.8), rgba(255,255,255,0.2))',
                        }}
                    />
                ))}
            </div>

            {/* Surface light reflection */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-transparent animate-shimmer"></div>

            {/* Interactive mouse lighting */}
            {/* <div
                className="absolute inset-0 opacity-50 pointer-events-none"
                style={{
                    background: 'radial-gradient(circle at calc(var(--mouse-x) * 100%) calc(var(--mouse-y) * 100%), rgba(255,255,255,0.3) 0%, transparent 60%)',
                }}
            ></div> */}
        </div>
    );
};

export default WaveAnimation;