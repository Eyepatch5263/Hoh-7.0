"use client"
import React from 'react';
import { Quote, Trophy } from 'lucide-react';
import SectionTitle from './SectionTitle';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';


interface TestimonialProps {
    quote: string;
    author: string;
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

const Testimonial: React.FC<TestimonialProps> = ({ quote, author, project, award }) => {
    return (
        <div id="testimonials" className="bg-blue-900/20 backdrop-blur-sm rounded-xl p-6 border border-blue-800/30 relative group hover:border-cyan-500/30 transition-all">
            <div className="absolute -top-4 left-6 h-8 w-8 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full flex items-center justify-center">
                <Quote size={16} className="text-white" />
            </div>

            <div className="pt-2">
                <p className="text-blue-100/80 italic mb-6">{quote}</p>

                <div className="flex items-center gap-4">
                    <div>
                        <h4 className="text-white font-medium">{author}</h4>
                        <p className="text-cyan-400 text-sm mt-1">
                            Project: {project}
                            {award && (
                                <span className=" mt-1 text-yellow-400 flex items-center gap-1">
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
            quote: "Our team SYNTAX-SQUAD-001 had an unforgettable experience, and winning 1st prize in the IoT track made it even more special!. And yes—count on us, we'll be coming back next year for sure!",
            author: "Lavya Kumar",
            project: "IOT Based",
            award: "1st Place in IOT"
        },
        {
            quote: "Huge thanks to all the organizers, judges, coordinators, and the entire app team for such an amazing hackathon experience! Got full support at every step, really had a great time. This was honestly the best experience I've had at NIT Hamirpur.",
            author: "James Rodriguez",
            project: "PlasticTracker",
            award: "Best Sustainability Solution"
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
                        subtitle="Hear from our past participants and relive the memorable moments from previous HackOnHills events."
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