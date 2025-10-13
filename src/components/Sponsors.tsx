"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function SponsorsSection() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const container = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
            },
        },
    };

    const item = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.8, ease: "easeOut" },
        },
    };

    const sponsorTiers = [
        {
            tier: "Title Sponsor",
            sponsors: [
                {
                    name: "Algo Quant",
                    logo: "https://res.cloudinary.com/dvnrlqqpq/image/upload/v1760380405/idc8pyxzRD_logos_dktmle.png",
                    alt: "ALGO QUANT LOGO",
                }
            ]
        },
        {
            tier: "Gold Sponsors",
            sponsors: [
                {
                    name: "Github",
                    logo: "https://res.cloudinary.com/dnbf0uwku/image/upload/v1741427703/GitHub_Logo_White_jxcin2.png",
                    alt: "GITHUB LOGO",
                }
            ]
        },
        {
            tier: "Silver Sponsors",
            sponsors: [
                {
                    name: "Devfolio",
                    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Devfolio_Logo-White%402x-ZaNDeRtKGecstXyvSLZkQ3boQYnwqb.png",
                    alt: "DEVFOLIO LOGO",
                },
                {
                    name: "ETHIndia",
                    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ethindia-light-YeS3YkDSlazR7JfV8TEd4DdgNJjS7O.png",
                    alt: "ETHINDIA LOGO",
                },
                {
                    name: "Aptos",
                    logo: "/aptos.png",
                    alt: "APTOS LOGO",
                },
                {
                    name: "Rise in",
                    logo: "https://res.cloudinary.com/dvnrlqqpq/image/upload/v1760380116/Rise_In_idFidf33Jx_0_cnztxi.png",
                    alt: "RISE IN LOGO",
                },
                {
                    name: "Steel.dev",
                    logo: "https://res.cloudinary.com/dvnrlqqpq/image/upload/v1760381133/idmlI1fuJC_logos_fh73tq.jpg",
                    alt: "STEEL DEV LOGO",
                }
            ],
        },
        {
            tier: "Community Partners",
            sponsors: [
                {
                    name: "TheDevArmy",
                    logo: "https://res.cloudinary.com/dvnrlqqpq/image/upload/v1760379694/logo_1_ywydbp.png",
                    alt: "THE DEV"
                },
            ]
        },
        {

        }
    ];

    return (
        <section id="sponsors" className="py-20 bg-gradient-to-b from-blue-900 to-blue-950 relative overflow-hidden">
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-1/4 right-1/4 w-72 h-72 rounded-full bg-blue-700/20 filter blur-[120px]"></div>
                <div className="absolute bottom-1/2 left-1/2 w-80 h-80 rounded-full bg-cyan-700/20 filter blur-[100px]"></div>
            </div>

            <motion.div
                ref={ref}
                className="container mx-auto px-4"
                variants={container}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
            >
                <motion.div variants={item} className="text-center mb-16">
                    <h2 className={`text-3xl md:text-5xl  mb-4 `}>
                        Our <span className="text-primary">Sponsors</span>
                    </h2>
                    <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
                    <p className="text-xl max-w-2xl mx-auto text-gray-300">
                        HOH is made possible by the generous support of our sponsors
                    </p>
                </motion.div>

                {sponsorTiers.map((tier, index) => (
                    <motion.div key={index} variants={item} className="mb-16 last:mb-0">
                        <h3 className="text-3xl font-bold mb-8 text-center">{tier.tier}</h3>
                        <div
                            className={`grid gap-6 md:gap-8 justify-items-center grid-cols-1  ${tier.sponsors && tier.sponsors.length === 1 ? "md:grid-cols-1" : ""
                                }
${tier.sponsors && tier.sponsors.length === 2 ? "md:grid-cols-2" : ""}
${tier.sponsors && tier.sponsors.length === 3 ? "md:grid-cols-3" : ""}

`}
                        >
                            {tier.sponsors && tier.sponsors.map((sponsor, idx) => (
                                <motion.div
                                    key={idx}
                                    className="backdrop-blur-sm border  p-6 md:p-8 rounded-lg border-cyan-400 flex items-center justify-center w-full transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10   "
                                    whileHover={{ y: -5 }}
                                >
                                    <div className={`flex justify-center items-center w-1/2 ${sponsor.name === "TheDevArmy" || sponsor.name === "Steel.dev"
                                        ? "h-18 md:h-14"
                                        : tier.tier === "Community Partners"
                                            ? "h-[10rem] md:h-28"
                                            : "h-16 md:h-20"
                                        }`}>
                                        <Image
                                            width={200}
                                            height={120}
                                            src={sponsor.logo || "/placeholder.svg"}
                                            alt={sponsor.alt}
                                            className={`object-contain filter brightness-100 group-hover:brightness-110 transition-all duration-300 ${sponsor.name === "TheDevArmy" || sponsor.name === "Steel.dev"
                                                    ? "max-h-16 md:max-h-20"
                                                    : tier.tier === "Community Partners"
                                                        ? "max-h-24 md:max-h-28"
                                                        : "max-h-14 md:max-h-18"
                                                }`}
                                        />
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                ))}

                <motion.div variants={item} className="mt-16 text-center">
                    <h3 className="text-2xl font-bold mb-4">Interested in Sponsoring?</h3>
                    <p className="text-lg mb-6 max-w-2xl mx-auto text-gray-300">
                        Join our growing list of sponsors and connect with top talent and
                        innovative projects
                    </p>
                    <button
                        className="inline-block px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full hover:from-cyan-400 hover:to-blue-400 transition-all font-medium text-white"
                        onClick={() => {
                            const contactSection = document.getElementById("contact");
                            if (contactSection) {
                                contactSection.scrollIntoView({ behavior: "smooth" });
                            }
                        }}
                    >
                        Become a Sponsor
                    </button>
                </motion.div>
            </motion.div>
        </section>
    );
}