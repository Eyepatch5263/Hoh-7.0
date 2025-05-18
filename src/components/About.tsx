import React from "react";
import { Globe, Lightbulb, Target, Users } from "lucide-react";


interface ValueCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
}

const ValueCard: React.FC<ValueCardProps> = ({ icon, title, description }) => {

    return (
        <div className="bg-blue-900/30 backdrop-blur-sm rounded-xl p-6 border border-blue-800/50 hover:border-cyan-500/50 transition-all group">
            <div className="mb-4 text-cyan-400 group-hover:scale-110 transform transition-transform">
                {icon}
            </div>
            <h3 className="text-xl font-semibold mb-3 text-white">{title}</h3>
            <p className="text-blue-100/70">{description}</p>
        </div>
    );
};
const About = () => {
    const values = [
        {
            icon: <Target size={40} />,
            title: "Innovation",
            description: "We challenge participants to dive deep into problem-solving and create solutions that push boundaries."
        },
        {
            icon: <Lightbulb size={40} />,
            title: "Creativity",
            description: "Like an ocean full of undiscovered species, we value fresh ideas and creative approaches."
        },
        {
            icon: <Users size={40} />,
            title: "Collaboration",
            description: "Just as oceanic ecosystems thrive through interconnection, we foster environments where teamwork flourishes."
        },
        {
            icon: <Globe size={40} />,
            title: "Sustainability",
            description: "We're committed to protecting our oceans through technology and innovation that promotes sustainability."
        }
    ];
    return (
        <div className="flex flex-col">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 my-12 mx-10">
                {values.map((value, index) => (
                    <ValueCard
                        key={index}
                        icon={value.icon}
                        title={value.title}
                        description={value.description}
                    />
                ))}
            </div>
            <div
                id="about"
                className="min-h-screen w-screen snap-start flex flex-col md:flex-row justify-between items-center bg-gradient-to-t from-blue-300/50 to-blue-900 px-6 md:px-20"
            >
                {/* Left Content */}
                <div className="flex flex-col space-y-8 w-full md:w-1/2 text-white">
                    <h1 className="text-4xl md:text-5xl font-bold pt-4 text-[#a2cefd]">
                        ABOUT HACK ON HILLS 7.0
                    </h1>
                    <p className="md:text-2xl text-lg text-gray-300 leading-relaxed">
                        Welcome to <span className="text-[#a2cefd] font-semibold">Hack on Hills - Oceanic Spark</span>, where
                        ancient resilience meets the pulse of modern tech. This isn't just a hackathon—it's a realm where bold ideas, sharp minds, and cutting-edge code come together to build what's next.
                        Step into the arena with fellow innovators to tackle real-world challenges and push the limits of what technology can do.
                    </p>

                    <p className="md:text-2xl mt-2 text-lg text-gray-300 leading-relaxed">
                        Whether you are a seasoned coder or taking your first shot at the game, this is your chance to create, disrupt, and leave your mark.
                        No frills, no fluff - just raw creativity, endless possibilities, and the thrill of building something that matters.
                        The obsidian is set. The frontier is yours. Let's make it unforgettable.
                    </p>
                </div>

                {/* Right Image */}
                <div className="mx-0 md:mx-20 w-full md:w-1/2 flex justify-center mt-8 md:mt-0">
                    <img src="/hoh.svg" className="opacity-90 w-[80%] md:w-[600px] hidden md:block" alt="Hackathon Illustration" />
                </div>
            </div>
            
        </div>

    );
};

export default About;
