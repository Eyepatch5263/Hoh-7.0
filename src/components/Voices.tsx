"use client"
import React from 'react';
import { Quote, Camera, Users, Trophy, Star } from 'lucide-react';
import SectionTitle from './SectionTitle';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';


interface TestimonialProps {
    quote: string;
    author: string;
    role: string;
    image: string;
    project: string;
    award?: string;
}


const galleryImages = [
    {
        url: '/img3.jpg',
        caption: 'Collaborative Coding Sessions'
    },
    {
        url: '/img4.jpg',
        caption: 'Team Discussions'
    },
    {
        url: '/img5.jpg',
        caption: 'Project Presentations'
    },
    {
        url: '/img6.jpg',
        caption: 'Award Ceremony'
    },
    {
        url: '/img1.jpg',
        caption: 'Mentorship Sessions'
    },
    {
        url: '/img2.jpg',
        caption: 'Judging Round'
    },
    {
        url: '/img7.jpg',
        caption: 'Organizing Team'
    }
];

const Testimonial: React.FC<TestimonialProps> = ({ quote, author, role, image, project, award }) => {
    return (
        <div className="bg-blue-900/20 backdrop-blur-sm rounded-xl p-6 border border-blue-800/30 relative group hover:border-cyan-500/30 transition-all">
            <div className="absolute -top-4 left-6 h-8 w-8 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full flex items-center justify-center">
                <Quote size={16} className="text-white" />
            </div>

            <div className="pt-2">
                <p className="text-blue-100/80 italic mb-6">{quote}</p>

                <div className="flex items-center gap-4">
                    <img
                        src={image}
                        alt={author}
                        className="w-12 h-12 rounded-full object-cover border-2 border-cyan-400/30"
                    />
                    <div>
                        <h4 className="text-white font-medium">{author}</h4>
                        <p className="text-blue-200/60 text-sm">{role}</p>
                        <p className="text-cyan-400 text-sm mt-1">
                            Project: {project}
                            {award && (
                                <span className="ml-2 text-yellow-400 flex items-center gap-1">
                                    <Trophy size={14} />
                                    {award}
                                </span>
                            )}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

const TestimonialsEventsSection: React.FC = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1
    });
    const testimonials: TestimonialProps[] = [
        {
            quote: "OceanHacks was a transformative experience. We developed an AI-powered coral reef monitoring system and won first place. The mentorship and resources provided were exceptional.",
            author: "Sarah Chen",
            role: "Software Engineer @ MarineTech",
            image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            project: "CoralGuard AI",
            award: "1st Place 2023"
        },
        {
            quote: "The collaborative environment at OceanHacks led us to create an innovative solution for tracking marine plastic pollution. The connections we made were invaluable.",
            author: "James Rodriguez",
            role: "Environmental Data Scientist",
            image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            project: "PlasticTracker",
            award: "Best Sustainability Solution"
        },
        {
            quote: "As a first-time hackathon participant, I was amazed by the support and encouragement from the OceanHacks community. Our project on wave energy harvesting opened new career opportunities.",
            author: "Emma Watson",
            role: "Renewable Energy Engineer",
            image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            project: "WaveHarvest",
            award: "Most Technical Innovation"
        },
        {
            quote: "As a first-time hackathon participant, I was amazed by the support and encouragement from the OceanHacks community. Our project on wave energy harvesting opened new career opportunities.",
            author: "Emma Watson",
            role: "Renewable Energy Engineer",
            image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            project: "WaveHarvest",
            award: "Most Technical Innovation"
        },

    ];


    return (
        <div>
            <section id="gallery" className="py-20 bg-primary overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <h3 className="text-4xl md:text-5xl font-bold text-neutral-light mb-6">
                            Highlights from HackOnHills 6.0
                        </h3>
                        <p className="max-w-3xl mx-auto text-neutral text-lg">
                            Relive the moments from our previous hackathon where innovation met excellence.
                        </p>
                    </motion.div>

                    <motion.div
                        ref={ref}
                        className="relative"
                        initial={{ opacity: 0 }}
                        animate={inView ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="flex space-x-6 animate-scroll">
                            <div className="flex space-x-6">
                                {galleryImages.map((image, index) => (
                                    <motion.div
                                        key={index}
                                        className="relative flex-none w-80 h-60 rounded-xl overflow-hidden"
                                        initial={{ opacity: 0, x: 50 }}
                                        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                                        transition={{ duration: 0.6, delay: index * 0.1 }}
                                    >
                                        <img
                                            src={image.url}
                                            alt={image.caption}
                                            className="w-full h-full object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent">
                                            <p className="absolute bottom-4 left-4 text-neutral-light font-medium">
                                                {image.caption}
                                            </p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>

                <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-100% - 1.5rem)); }
        }
        .animate-scroll {
          animation: scroll 10s linear infinite;
          &:hover {
            animation-play-state: paused;
          }
        }
      `}</style>
            </section>
            <section className="py-20 bg-gray relative overflow-hidden">
                <div className="container mx-auto px-4 z-10">
                    <SectionTitle
                        title="Voices & Memories"
                        subtitle="Hear from our past participants and relive the memorable moments from previous OceanHacks events."
                        light={true}
                    />

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">

                        {testimonials.map((testimonial, index) => (
                            <Testimonial key={index} {...testimonial} />
                        ))}
                    </div>
                    <div className="text-center">
                        <a
                            href="#register"
                            className="inline-block px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full hover:from-cyan-400 hover:to-blue-400 transition-all font-medium text-white"
                        >
                            Join Our Next Event
                        </a>
                    </div>
                </div>
            </section>
        </div>

    );
};

export default TestimonialsEventsSection;