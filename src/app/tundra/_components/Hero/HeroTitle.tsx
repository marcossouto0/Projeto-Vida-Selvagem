import React from 'react';

interface HeroTitleProps {
  title: string;
}

const HeroTitle: React.FC<HeroTitleProps> = ({ title }) => {
  return (
    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight tracking-tight drop-shadow-lg">
      {title.split('<br>').map((line, index) => (
        <span key={index}>
          {line}
          <br className="hidden md:block" />
        </span>
      ))}
    </h1>
  );
};

export default HeroTitle;