'use client'

import { useState, useEffect } from 'react'
import Navbar from '@/app/_components/Navbar'
import { FaChevronDown, FaLeaf, FaPaw } from 'react-icons/fa'

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    setIsVisible(true)

    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const scrollToContent = () => {
    const contentSection = document.getElementById('biome-content')
    if (contentSection) {
      contentSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div
      id="grasslands"
      className="relative h-screen w-full bg-[url('/grasslands.jpg')] bg-no-repeat bg-cover bg-center bg-fixed"
    >
      {/* Overlay gradient with subtle animation */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/60 animate-gradient"></div>

      <div className="relative z-10 mx-5 md:mx-15 lg:mx-30 h-full flex flex-col">
        <Navbar theme="grasslands" />

        <div
          className="flex flex-col justify-center flex-grow max-w-5xl"
          style={{
            transform: `translateY(${-scrollY * 0.15}px)`,
            opacity: Math.max(1 - scrollY * 0.002, 0)
          }}
        >
          <div
            className={`transition-all duration-1000 transform ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-12'
            }`}
          >
            <div className="inline-flex items-center bg-yellow-800 text-yellow-50 px-6 py-3 rounded-full mb-6 backdrop-blur-md hover:bg-yellow-700 transition-colors duration-300">
              <FaLeaf className="mr-3 text-lg animate-pulse" />
              <span className="text-lg font-medium tracking-wide">
                Bioma Campos
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight tracking-tight drop-shadow-lg">
              Campos: As Planícies <br className="hidden md:block" />
              <span className="text-yellow-300">Douradas</span> e o{' '}
              <br className="hidden md:block" />
              Bisão Americano
            </h1>

            <p className="text-xl md:text-2xl text-white max-w-3xl mb-10 leading-relaxed drop-shadow-lg font-medium">
              O bisão americano é um símbolo dos campos nativos, mas a conversão
              de habitat e a caça histórica quase levaram à sua extinção.
              Conheça este bioma vital e como podemos protegê-lo.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={scrollToContent}
                className="group bg-yellow-700 hover:bg-yellow-600 text-white px-8 py-4 rounded-full font-semibold transform transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-yellow-500 focus:ring-opacity-50 shadow-xl hover:shadow-2xl flex items-center justify-center"
              >
                <FaPaw className="mr-2 transform group-hover:rotate-12 transition-transform duration-300" />
                Explorar Bioma
              </button>

              <button
                onClick={scrollToContent}
                className="bg-transparent border-2 border-white/40 hover:border-white/70 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:bg-white/10 focus:outline-none focus:ring-4 focus:ring-white/30 backdrop-blur-sm"
              >
                Saiba Mais
              </button>
            </div>
          </div>
        </div>

        {/* Animated scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white text-center">
          <button
            onClick={scrollToContent}
            className="group flex flex-col items-center animate-float cursor-pointer"
            aria-label="Rolar para conteúdo"
          >
            <span className="text-sm mb-2 text-white group-hover:text-yellow-300 transition-colors duration-300">
              Deslize para Explorar
            </span>
            <FaChevronDown className="text-white group-hover:text-yellow-300 transition-colors duration-300 animate-bounce" />
          </button>
        </div>
      </div>
    </div>
  )
}
