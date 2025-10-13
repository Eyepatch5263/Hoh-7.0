import React from 'react';
import { Trophy, Award, Target, Lightbulb } from 'lucide-react';
import SectionTitle from './SectionTitle';

interface PrizeCardProps {
    title: string;
    amount: string;
    description: string;
    icon: React.ReactNode;
    position?: 'first' | 'second' | 'third';
}

const PrizeCard: React.FC<PrizeCardProps> = ({ title, amount, description, icon, position }) => {
    const positionStyles = {
        first: "md:scale-105 bg-gradient-to-br from-blue-900/40 to-cyan-900/30 border-cyan-400/30",
        second: "md:scale-105 bg-gradient-to-br from-blue-900/30 to-blue-800/30 border-blue-400/30",
        third: "md:scale-105 bg-gradient-to-br from-blue-900/20 to-blue-800/20 border-blue-300/20"
    };

    const baseStyles = "relative p-6 rounded-xl backdrop-blur-sm border transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10 group";
    const finalStyles = position ? `${baseStyles} ${positionStyles[position]}` : baseStyles;

    return (
        <div className={finalStyles}>
            <div className="flex items-center gap-4 mb-4">
                <div className="h-12 w-12 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                    {icon}
                </div>
                <div>
                    <h3 className="text-xl font-semibold text-white">{title}</h3>
                    <p className="text-2xl font-bold bg-gradient-to-r from-cyan-300 to-blue-400 text-transparent bg-clip-text">
                        &#8377;  {amount}
                    </p>
                </div>
            </div>
            <p className="text-blue-100/70">{description}</p>
        </div>
    );
};

interface SpecialAwardProps {
    title: string;
    prize: string;
    icon: React.ReactNode;
}

const SpecialAward: React.FC<SpecialAwardProps> = ({ title, prize, icon }) => {
    return (
        <div className="bg-blue-900/20 backdrop-blur-sm rounded-lg p-4 border border-blue-800/30 flex items-center gap-4 group hover:border-cyan-500/30 transition-colors">
            <div className="h-10 w-10 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                {icon}
            </div>
            <div>
                <h4 className="text-white font-medium">{title}</h4>
                <p className="text-cyan-300"> &#8377; {prize}</p>
            </div>
        </div>
    );
};

const PrizePoolSection: React.FC = () => {
    const mainPrizes = [
        {
            title: "Second Place",
            amount: "20,000",
            description: "Runner-up prize for exceptional creativity and technical execution.",
            icon: <Award size={24} />,
            position: "second" as const
        },
        {
            title: "First Place",
            amount: "30,000",
            description: "The grand prize for the most innovative and impactful ocean technology solution.",
            icon: <Trophy size={24} />,
            position: "first" as const
        },
        {
            title: "Third Place",
            amount: "10,000",
            description: "Third place prize for outstanding achievement in ocean innovation.",
            icon: <Target size={24} />,
            position: "third" as const
        }
    ];

    const specialAwards = [
        {
            title: "Best Sustainability Solution",
            prize: "18,000",
            icon: <Lightbulb size={20} />
        },
        {
            title: "Best All Girls",
            prize: "8,000",
            icon: <Trophy size={20} />
        },
        {
            title: "Best Beginner",
            prize: "8,000",
            icon: <Award size={20} />
        },
        {
            title: "Best Web3",
            prize: "8,000",
            icon: <Target size={20} />
        },
        {
            title: "Best AI Agents",
            prize: "8,000",
            icon: <Target size={20} />
        }
    ];

    return (
        <section id="prize" className="py-20 bg-gradient-to-b from-blue-900 to-blue-950 relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                    <path fill="#0ea5e9" d="M39.9,-65.7C52.5,-58.4,64.2,-49.6,70.8,-37.6C77.4,-25.6,78.9,-10.4,77.8,4.5C76.7,19.4,73.1,34,65.4,46.5C57.7,59,45.9,69.3,32.4,74.2C18.9,79.1,3.8,78.5,-12.3,77.1C-28.3,75.8,-45.3,73.6,-56.9,64.2C-68.6,54.8,-74.9,38.1,-77.1,21.7C-79.3,5.2,-77.4,-11,-71.1,-25C-64.8,-39,-54.2,-50.9,-41.8,-58.6C-29.4,-66.4,-15.3,-70,-0.4,-69.4C14.5,-68.7,27.2,-72.9,39.9,-65.7Z" transform="translate(100 100) scale(1.5)" />
                </svg>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <SectionTitle
                    title="Prize Pool"
                    subtitle="Compete for a total prize pool of   &#8377; 110,000 + across multiple categories and special awards"
                    light={true}
                />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
                    {mainPrizes.map((prize, index) => (
                        <PrizeCard key={index} {...prize} />
                    ))}
                </div>

                <div className="bg-blue-900/10 backdrop-blur-sm rounded-xl p-8 border border-blue-800/30">
                    <h3 className="text-xl font-semibold text-white mb-6">Special Awards</h3>

                    <div className="mb-6 w-full justify-center flex">
                        <SpecialAward
                            title="Best Sustainability Solution"
                            prize="18,000"
                            icon={<Lightbulb size={20} />}
                        />
                    </div>

                    {/* Other Awards - Grid Layout */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {specialAwards.filter(award => award.title !== "Best Sustainability Solution").map((award, index) => (
                            <SpecialAward key={index} {...award} />
                        ))}
                    </div>
                </div>

                <div className="mt-12 text-center">
                    <p className="text-blue-100/80 max-w-2xl mx-auto mb-6">
                        All participants will receive exclusive HackOnHills swag, certificates of participation, and access to our network of ocean tech innovators and mentors.
                    </p>
                    <a
                        href="#register"
                        className="inline-block px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full hover:from-cyan-400 hover:to-blue-400 transition-all font-medium text-white"
                    >
                        Register Now
                    </a>
                </div>
            </div>
        </section>
    );
};

export default PrizePoolSection;