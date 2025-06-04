"use client";

import React from 'react';
import { Instagram, LinkedinIcon } from 'lucide-react';
import SectionTitle from '../../components/SectionTitle';
import { useRouter } from "next/navigation";
import Image from 'next/image';

interface TeamMemberProps {
    image: string;
    name: string;
    role: string;
    social: {
        linkedin?: string;
        instagram?: string;
    };
}

const teamMembers = [
    {
        image: "/sankalp.webp",
        name: "Sankalp gupta",
        role: "Secretary",
        social: {
            linkedin: "https://www.linkedin.com/in/sankalp-gupta-95b39b258",
            instagram: "https://instagram.com/san0_0kalp"
        }
    },
    {
        image: "/aryan.webp",
        name: "Aryan Raghav",
        role: "Convener",
        social: {
            linkedin: "https://www.linkedin.com/in/aryan-raghav-0b1a5a1b6?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
            instagram: "https://www.instagram.com/aryan_raghav_2003/?igshid=MzRlODBiNWFlZA=="
        }
    },
    {
        image: "/lead_avinash.webp",
        name: "Avinash Garla",
        role: "Lead Organiser",
        social: {
            linkedin: "https://www.linkedin.com/in/avinash-garla-35b1b42a0?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
            instagram: "https://www.instagram.com/_avinash_garla_/profilecard/?igsh=MWg5ZHQzcWhlamxraQ=="
        }
    },
    {
        image: "/pratyush_web.webp",
        name: "Pratyush Pragyey",
        role: "Web Lead",
        social: {
            linkedin: "https://www.linkedin.com/in/pratyush-pragyey-7a95a7258/",
            instagram: "https://www.instagram.com/eyepatch_5263/?igsh=MXV4d2F5NmtwaTI2dQ%3D%3D#"
        }
    },
    {
        image: "/design_craft_sejal.webp",
        name: "Sejal Sharma",
        role: "Design Lead",
        social: {
            linkedin: "https://www.linkedin.com/in/sejal-s-1b349628a/",
            instagram: "https://www.instagram.com/se.jal___?igsh=MTd3cW02cTRxY3pocQ=="
        }
    },
    {
        image: "/finance_akanksha.webp",
        name: "Akanksha Kumari",
        role: "Finance Lead",
        social: {
            linkedin: "https://www.linkedin.com/in/--akanksha",
            instagram: "https://www.instagram.com/ak_anksha._?igsh=MXFyZHYzOGIxMWF1Nw=="
        }
    },
    {
        image: "/finance_ishan.webp",
        name: "Ishaan Yadav",
        role: "Finance Lead",
        social: {
            linkedin: "https://www.linkedin.com/in/ishaan-yadav-950a6327b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
            instagram: "https://www.instagram.com/ishaan_yadav9?igsh=Z2huOWJqbjdwY2gz"
        }
    },
    {
        image: "/internal_affair_arjun.webp",
        name: "Arjun Prajapti",
        role: "Internal Affairs Lead",
        social: {
            linkedin: "",
            instagram: ""
        }
    },
    {
        image: "/internal_affair_urvashi.webp",
        name: "Urvashi Nandan",
        role: "Internal Affairs Lead",
        social: {
            linkedin: "https://www.linkedin.com/in/urvashi-doharey-026sp?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
            instagram: "https://www.instagram.com/nandan_urvashi?igsh=ZWRjZnpqYzFpZzcw"
        }
    },
    {
        image: "/media_promo_rudransh.webp",
        name: "Rudransh Sharma",
        role: "Media & Promotion Lead",
        social: {
            linkedin: "https://www.linkedin.com/in/rudransh-sharma-19179416b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
            instagram: "https://www.instagram.com/yesrd_21?igsh=MTNhaTUyajJ6dDNwMw=="
        }
    },
    {
        image: "/pr_akshat.webp",
        name: "Akshat Tripathi",
        role: "Public Relations Lead",
        social: {
            linkedin: "https://www.linkedin.com/in/akshat-mani-tripathi-81903928b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
            instagram: "https://www.instagram.com/i_am__akshat__/"
        }
    },
]

const TeamMember: React.FC<TeamMemberProps> = ({ image, name, role, social }) => {
    return (
        <>

            <div className="bg-blue-900/20 backdrop-blur-sm rounded-xl border-r-4 border-b-4 border-cyan-500 hover:border-none overflow-hidden group relative transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20">
                <div className="aspect-square overflow-hidden relative">
                    <Image
                        loading='lazy'
                        src={image}
                        width={300}
                        height={300}
                        alt={name}
                        className="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-950 via-blue-950/40 to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-500"></div>

                    {/* Animated social links on hover */}
                    <div className="absolute inset-0 flex justify-center items-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-full group-hover:translate-y-0 pb-4">
                        {social.linkedin && (
                            <a
                                href={social.linkedin}
                                className="h-10 w-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-blue-600 transition-colors transform hover:scale-110"
                                aria-label={`${name}'s LinkedIn`}
                            >
                                <LinkedinIcon size={20} />
                            </a>
                        )}
                        {social.instagram && (
                            <a
                                href={social.instagram}
                                className="h-10 w-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-blue-600 transition-colors transform hover:scale-110"
                                aria-label={`${name}'s GitHub`}
                            >
                                <Instagram size={20} />
                            </a>
                        )}
                    </div>
                </div>

                <div className="p-6 relative bg-gradient-to-b from-transparent to-blue-900/50 backdrop-blur-sm">
                    <div className="relative z-10">
                        <h3 className="text-xl font-semibold text-white group-hover:text-cyan-300 transition-colors">
                            {name}
                        </h3>
                        <p className="text-cyan-300 mb-3 group-hover:text-cyan-400 transition-colors">{role}</p>

                    </div>

                    {/* Decorative elements */}
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                    <div className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-cyan-500 to-blue-500 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 delay-100 origin-bottom"></div>
                </div>
            </div>
        </>

    );
};

const TeamSection = () => {
    const router = useRouter()

    return (
        <section id="team" className=" bg-gradient-to-b from-blue-950 to-blue-900 relative overflow-hidden">
            <div className="container ml-10 mb-10 mx-auto px-4 md:px-6 fixed w-full z-50 transition-all duration-300
                bg-transparent py-5">
                <div className="flex justify-between items-center">
                    <div onClick={() => { router.push("/") }} className="flex items-center cursor-pointer">
                        <Image alt='hoh_logo' width={"48"} height={"48"} src={'/favicon.webp'} />
                        <span
                            className={`ml-4 text-3xl font-semibold text-white
                                }`}
                        >
                            HOH
                        </span>
                    </div>
                </div>
            </div>
            <div className="absolute inset-0 opacity-10">
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                    <path fill="#0ea5e9" d="M39.9,-65.7C52.5,-58.4,64.2,-49.6,70.8,-37.6C77.4,-25.6,78.9,-10.4,77.8,4.5C76.7,19.4,73.1,34,65.4,46.5C57.7,59,45.9,69.3,32.4,74.2C18.9,79.1,3.8,78.5,-12.3,77.1C-28.3,75.8,-45.3,73.6,-56.9,64.2C-68.6,54.8,-74.9,38.1,-77.1,21.7C-79.3,5.2,-77.4,-11,-71.1,-25C-64.8,-39,-54.2,-50.9,-41.8,-58.6C-29.4,-66.4,-15.3,-70,-0.4,-69.4C14.5,-68.7,27.2,-72.9,39.9,-65.7Z" transform="translate(100 100) scale(1.5)" />
                </svg>
            </div>

            <div className="container mt-20 mx-auto px-4 relative z-10">
                <SectionTitle
                    title="Meet Our Team"
                    subtitle="The passionate individuals behind Hack On Hills who make waves in the tech and conservation community."
                    light={true}
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {teamMembers.map((member, index) => (
                        <TeamMember key={index} {...member} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TeamSection;