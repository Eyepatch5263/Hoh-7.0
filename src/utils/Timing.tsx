"use client";
import React, { useState, useEffect } from "react";

// 🎭 Flip Unit Component for Each Digit
const FlipUnit: React.FC<{ value: string; label: string }> = ({ value, label }) => {
    return (
        <div className="flex flex-col items-center">
            <div className="relative w-14 h-20 md:w-16 md:h-24  text-[#a3d1f4] text-4xl md:text-5xl font-bold overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center  opacity-10"></div>
                <div className="absolute inset-0 flex items-center justify-center animate-flip">{value}</div>
            </div>
            <span className="text-[#bfe4fd] uppercase text-xs md:text-sm mt-2">{label}</span>
        </div>
    );
};

// ⏳ Countdown Timer Component
const CountdownTimer: React.FC = () => {
    const targetDate = new Date("2025-10-10T00:00:00").getTime();
    const [timeLeft, setTimeLeft] = useState({
        days: "00",
        hours: "00",
        minutes: "00",
        seconds: "00",
    });

    function calculateTimeLeft() {
        const now = new Date().getTime();
        const difference = targetDate - now;
        if (difference <= 0) return { days: "00", hours: "00", minutes: "00", seconds: "00" };

        return {
            days: formatTime(Math.floor(difference / (1000 * 60 * 60 * 24))),
            hours: formatTime(Math.floor((difference / (1000 * 60 * 60)) % 24)),
            minutes: formatTime(Math.floor((difference / 1000 / 60) % 60)),
            seconds: formatTime(Math.floor((difference / 1000) % 60)),
        };
    }

    function formatTime(time: number) {
        return time < 10 ? `0${time}` : `${time}`;
    }

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="w-screen h-[16rem] flex flex-col items-center justify-center">
            <div className="flex justify-center space-x-6">
                <FlipUnit value={timeLeft.days} label="Days" />
                <FlipUnit value={timeLeft.hours} label="Hours" />
                <FlipUnit value={timeLeft.minutes} label="Minutes" />
                <FlipUnit value={timeLeft.seconds} label="Seconds" />
            </div>
        </div>
    );
};

export default CountdownTimer;