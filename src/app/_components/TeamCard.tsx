'use client'

import Image from 'next/image'
import { useState } from 'react'
import { FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa'

interface TeamCardProps {
  name: string
  role: string
  image: string
}

export default function TeamCard({ name, role, image }: TeamCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="bg-blue-800/20 rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:bg-blue-800/30 group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="p-6 flex flex-col items-center">
        <div className="relative w-32 h-32 mb-4 rounded-full overflow-hidden border-4 border-blue-400 shadow-lg transition-transform duration-300 group-hover:scale-105">
          <Image
            src={image}
            alt={`Foto de ${name}`}
            fill
            className="object-cover"
            sizes="128px"
          />
        </div>
        <div className="text-center">
          <h4 className="font-bold text-xl md:text-2xl text-white mb-2">
            {name}
          </h4>
          <p className="text-blue-300 text-md md:text-lg mb-4">{role}</p>

          <div className="flex justify-center space-x-4 mt-2">
            <a
              href="#"
              className="text-blue-300 hover:text-white transition-colors duration-300"
              aria-label={`LinkedIn de ${name}`}
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="#"
              className="text-blue-300 hover:text-white transition-colors duration-300"
              aria-label={`Twitter de ${name}`}
            >
              <FaTwitter size={20} />
            </a>
            <a
              href="#"
              className="text-blue-300 hover:text-white transition-colors duration-300"
              aria-label={`Email de ${name}`}
            >
              <FaEnvelope size={20} />
            </a>
          </div>
        </div>
      </div>

      <div
        className={`bg-blue-600 text-white p-3 text-center transition-all duration-300 ${
          isHovered
            ? 'max-h-12 opacity-100'
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        Contatar
      </div>
    </div>
  )
}
