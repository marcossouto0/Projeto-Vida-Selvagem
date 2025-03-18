import React from 'react';
import { FaPaw } from 'react-icons/fa';

interface HeroButton {
  text: string;
  icon: string | null;
}

interface HeroButtonsProps {
  buttons: HeroButton[];
  scrollToContent: () => void;
}

const HeroButtons: React.FC<HeroButtonsProps> = ({ buttons, scrollToContent }) => {
  return (
    <div className="flex flex-col sm:flex-row gap-4">
      {buttons.map((button, index) => (
        <button
          key={index}
          onClick={scrollToContent}
          className={`${
            button.icon
              ? 'group bg-blue-700 hover:bg-blue-600 text-white px-8 py-4 rounded-full font-semibold transform transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 shadow-xl hover:shadow-2xl flex items-center justify-center'
              : 'bg-transparent border-2 border-white/40 hover:border-white/70 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:bg-white/10 focus:outline-none focus:ring-4 focus:ring-white/30 backdrop-blur-sm'
          }`}
        >
          {button.icon && (
            <FaPaw className="mr-2 transform group-hover:rotate-12 transition-transform duration-300" />
          )}
          {button.text}
        </button>
      ))}
    </div>
  );
};

export default HeroButtons;