import React, { forwardRef } from 'react';
import Image from 'next/image';

interface BiomeImageProps {
  src: string;
  alt: string;
  caption: string;
}

const BiomeImage = forwardRef<HTMLDivElement, BiomeImageProps>(({ src, alt, caption }, ref) => {
  return (
    <div ref={ref} className="relative rounded-xl overflow-hidden shadow-2xl opacity-0 duration-1000 transform translate-y-8 hover:shadow-[0_0_25px_rgba(37,99,235,0.4)] transition-all">
      <Image
        src={src}
        alt={alt}
        width={600}
        height={400}
        className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
        <p className="text-white/90 p-4 text-sm italic">{caption}</p>
      </div>
    </div>
  );
});

BiomeImage.displayName = 'BiomeImage';

export default BiomeImage;