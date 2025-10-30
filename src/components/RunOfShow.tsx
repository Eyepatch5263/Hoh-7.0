"use client";

import React from "react";
import { Clock } from "lucide-react";


function RunOfShow() {
    return (
        <div className="min-h-screen bg-background text-white p-8" id="runofshow">
            <div className="max-w-6xl mx-auto">
                <h2 className="md:text-5xl text-3xl font-bold text-center text-blue-700 mb-10">
                    Run Of Show
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Day 1 */}
                    <div className="bg-[#161B22] rounded-lg p-6 border border-blue-500/20">
                        <h2 className="text-3xl font-bold mb-8 text-center text-blue-500">
                            DAY 0
                        </h2>

                        <div className="space-y-6">

                            <TimeSlot
                                name="Checkin"
                                time="8:00 AM - 1:00 PM"
                                location="Auditorium"
                                highlight={true}
                            />

                            <TimeSlot
                                name="Opening Ceremony"
                                time="2:00 - 4:00 PM"
                                location="Mini Auditorium"
                            />

                            <TimeSlot
                                name="Mentoring"
                                time="4:00 - 5:30 PM"
                                location="New Lecture Hall"
                                highlight={true}
                            />

                            <TimeSlot
                                name="AWS Workshop"
                                time="6:00 - 7:00 PM"
                                location="New Lecture Hall"
                            />
                            <TimeSlot
                            name="Mentoring Continues"
                            time="7:00 PM"
                            location="New Lecture Hall"
                            />

                            <TimeSlot name="Dinner" time="7:45 PM - 9:00 PM" location="Mess" />
                        </div>
                    </div>

                    {/* Day 2 */}
                    <div className="bg-[#161B22] rounded-lg p-6 border border-blue-500/20">
                        <h2 className="text-3xl font-bold mb-8 text-center text-blue-500">
                            DAY 1
                        </h2>

                        <div className="space-y-6">
                            <TimeSlot name="Breakfast" time="7:30 AM - 8:30 AM" location="Mess" />

                            <TimeSlot
                                name="Github Session And Cryptic Hunt"
                                time="9:30 AM - 11:00 AM"
                                location="New Lecture Hall"
                            />

                            <TimeSlot
                                name="Mid Evaluation"
                                time="11:00 AM - 1:00 PM"
                                location="New Lecture Hall"
                                highlight={true}
                            />

                            <TimeSlot name="Lunch" time="1:00 - 2:00 PM" location="Mess" />
                            <TimeSlot
                                name="Hacking Continues"
                                time="2:00 PM - 3:00 PM"
                                location="New Lecture Hall"
                            />
                            <TimeSlot
                                name="Endless Domain Session"
                                time="3:00 - 4:30 PM"
                                location="New Lecture Hall"
                                highlight={true}
                            />
                            <TimeSlot
                                name="Mentoring Session"
                                time="5:00 - 8:00 PM"
                                location="New Lecture Hall"
                                highlight={true}
                            />

                            <TimeSlot name="Dinner" time="7:45 PM - 9:00 PM" location="Mess" />
                        </div>
                    </div>

                    {/* Day 3 */}
                    <div className="bg-[#161B22] rounded-lg p-6 border border-blue-500/20">
                        <h2 className="text-3xl font-bold mb-8 text-center text-blue-500">
                            DAY 2
                        </h2>

                        <div className="space-y-6">
                            <TimeSlot name="Breakfast" time="7:45 AM - 9:00 AM" location="Mess" />

                            <TimeSlot
                                name="Final Submission"
                                time="9:00 AM - 10:00 AM"
                                location="New Lecture Hall"
                                highlight={true}
                            />
                            <TimeSlot
                                name="Final Evaluation"
                                time="10:30 AM - 1:30 PM"
                                location="New Lecture Hall"
                                highlight={true}
                            />

                            <TimeSlot name="Lunch" time="1:00 PM - 2:30 PM" location="Mess" />

                            <TimeSlot
                                name="Closing and Result"
                                time="3:00 - 5:00 PM"
                                location="Auditorium"
                                highlight={true}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

interface TimeSlotProps {
    name: string;
    time: string;
    location: string;
    highlight?: boolean;
}

function TimeSlot({ name, time, location, highlight = false }: TimeSlotProps) {
    return (
        <div
            className={`rounded-lg p-4 transition-all duration-300 hover:scale-[1.02] ${highlight ? "bg-blue-500/10 border border-blue-500/30" : "bg-[#1F2937]/30"
                }`}
        >
            <h3 className="font-semibold text-lg mb-2 text-gray-100">{name}</h3>
            <div className="flex items-center text-sm text-gray-400 mb-1">
                <Clock className="w-4 h-4 mr-2 text-blue-500" />
                {time}
            </div>
            <div className="flex items-center text-sm text-gray-400">
                <svg
                    className="w-4 h-4 mr-2 text-blue-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                </svg>
                {location}
            </div>
        </div>
    );
}

export default RunOfShow;