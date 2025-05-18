import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  center?: boolean;
  light?: boolean;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ 
  title, 
  subtitle, 
  center = true,
  light = false 
}) => {
  return (
    <div className={`mb-12 ${center ? 'text-center' : ''}`}>
      <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${light ? 'text-white' : 'bg-gradient-to-r from-cyan-300 to-blue-400 text-transparent bg-clip-text'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`${light ? 'text-blue-100/80' : 'text-blue-200/90'} text-lg max-w-3xl mx-auto`}>
          {subtitle}
        </p>
      )}
      <div className={`w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mt-6 ${center ? 'mx-auto' : ''}`}></div>
    </div>
  );
};

export default SectionTitle;