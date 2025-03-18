import React from 'react';

interface HeroDescriptionProps {
  description: string;
}

const HeroDescription: React.FC<HeroDescriptionProps> = ({ description }) => {
  return (
    <p className="text-xl md:text-2xl text-white max-w-3xl mb-10 leading-relaxed drop-shadow-lg font-medium">
      {description}
    </p>
  );
};

export default HeroDescription;