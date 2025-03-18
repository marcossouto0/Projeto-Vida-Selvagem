import React from 'react';

interface BiomeDescriptionProps {
  description: string;
}

const BiomeDescription: React.FC<BiomeDescriptionProps> = ({ description }) => {
  return (
    <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed opacity-0 transition-opacity duration-1000">
      {description}
    </p>
  );
};

export default BiomeDescription;