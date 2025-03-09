'use client'

import Navbar from '@/app/_components/Navbar'
import { useState, useEffect } from 'react'
import { FaChevronDown, FaWater } from 'react-icons/fa'

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)

    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const heroElement = document.getElementById('hero-content')
      if (heroElement) {
        heroElement.style.transform = `translateY(${(
          scrollPosition * 0.3
        ).toString()}px)`
        heroElement.style.opacity = Math.max(
          1 - scrollPosition / 700,
          0
        ).toString()
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToContent = () => {
    document
      .getElementById('biome-content')
      ?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div
      id="ocean"
      className="relative bg-[url('/ocean.jpg')] bg-no-repeat bg-cover bg-center my-0 w-full h-screen"
    >
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/60 via-blue-800/30 to-blue-900/70"></div>

      <div className="relative z-10 mx-5 md:mx-15 lg:mx-30 h-full flex flex-col">
        <Navbar theme="ocean" showBackButton={true} />

        <div
          id="hero-content"
          className="flex flex-col justify-center flex-grow max-w-4xl"
        >
          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}
          >
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight">
              <span className="block text-blue-300 text-2xl md:text-3xl mb-2">
                Explorando os
              </span>
              Oceanos:{' '}
              <span className="block mt-2">O Coração Azul do Planeta</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mt-6 leading-relaxed">
              Os pinguins são embaixadores dos oceanos, mas as mudanças
              climáticas, a poluição e a pesca excessiva ameaçam sua
              sobrevivência. Conheça este bioma vital e como podemos protegê-lo.
            </p>
            <button
              onClick={scrollToContent}
              className="mt-8 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full flex items-center gap-2 transition-all duration-300 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              <FaWater />
              Explorar o Bioma
            </button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className={`flex justify-center mb-8 transition-all duration-1000 delay-700 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <button
            onClick={scrollToContent}
            className="animate-bounce bg-white/10 hover:bg-white/20 rounded-full p-2 backdrop-blur-sm transition-colors"
            aria-label="Rolar para baixo"
          >
            <FaChevronDown className="text-white text-xl" />
          </button>
        </div>
      </div>
    </div>
  )
}
