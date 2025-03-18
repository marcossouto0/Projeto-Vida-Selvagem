import React, { forwardRef } from 'react';

interface BiomeTitleProps {
  title: string;
}

const BiomeTitle = forwardRef<HTMLHeadingElement, BiomeTitleProps>(({ title }, ref) => {
  return (
    <h2 ref={ref} className="text-4xl md:text-5xl font-bold mb-6 opacity-0 transition-opacity duration-1000">
      {title}
    </h2>
  );
});

BiomeTitle.displayName = 'BiomeTitle';

export default BiomeTitle;