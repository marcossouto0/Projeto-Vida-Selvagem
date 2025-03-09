'use client'

import Image from 'next/image'
import { useState, useRef, useEffect } from 'react'
import { FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa'

interface TeamCardProps {
  name: string
  role: string
  image: string
}

export default function TeamCard({ name, role, image }: TeamCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fadeIn')
            entry.target.classList.remove('opacity-0')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 }
    )

    if (cardRef.current) observer.observe(cardRef.current)

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <div
      ref={cardRef}
      className="relative bg-blue-800/20 rounded-xl overflow-hidden shadow-lg transition-all duration-500 hover:shadow-[0_0_30px_rgba(37,99,235,0.3)] hover:bg-blue-800/30 group transform hover:-translate-y-2 opacity-0 translate-y-8"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="p-8 flex flex-col items-center">
        <div className="relative w-36 h-36 mb-6 rounded-full overflow-hidden border-4 border-blue-400/80 shadow-xl transition-all duration-500 group-hover:border-blue-300 group-hover:scale-110 group-hover:shadow-blue-400/30">
          <Image
            src={image}
            alt={`Foto de ${name}`}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            sizes="144px"
          />
        </div>
        <div className="text-center">
          <h4 className="font-bold text-2xl md:text-3xl text-white mb-3 transition-colors duration-300 group-hover:text-blue-200">
            {name}
          </h4>
          <p className="text-blue-300 text-lg md:text-xl mb-6 transition-colors duration-300 group-hover:text-blue-200">
            {role}
          </p>

          <div className="flex justify-center space-x-6 mt-2">
            <a
              href="#"
              className="text-blue-300 hover:text-white transition-all duration-300 hover:scale-110 transform"
              aria-label={`LinkedIn de ${name}`}
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="#"
              className="text-blue-300 hover:text-white transition-all duration-300 hover:scale-110 transform"
              aria-label={`Twitter de ${name}`}
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="#"
              className="text-blue-300 hover:text-white transition-all duration-300 hover:scale-110 transform"
              aria-label={`Email de ${name}`}
            >
              <FaEnvelope size={24} />
            </a>
          </div>
        </div>
      </div>

      <div
        className={`absolute flex justify-center items-center bottom-0 left-0 right-0 bg-gradient-to-r from-blue-600 to-blue-500 text-white py-4 text-lg font-medium transition-all duration-500 cursor-pointer hover:from-blue-500 hover:to-blue-400 ${
          isHovered
            ? 'translate-y-0 opacity-100'
            : 'translate-y-full opacity-0'
        }`}
      >
        Entrar em Contato
      </div>
    </div>
  )
}
