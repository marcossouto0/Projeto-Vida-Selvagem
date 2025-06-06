'use client'

import Navbar from '@/app/_components/Navbar'
import ScrollIndicator from '@/app/_components/ScrollIndicator'
import { useState, useEffect } from 'react'
import { FaTree } from 'react-icons/fa'

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
      id="tforest"
      className="relative bg-[url('/tforest.jpg')] bg-no-repeat bg-cover bg-center my-0 w-full h-screen"
    >
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/70"></div>

      <div className="relative z-10 mx-5 md:mx-15 lg:mx-30 h-full flex flex-col">
        <Navbar theme="tforest" showBackButton={true} />

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
              <span className="block text-green-300 text-2xl md:text-3xl mb-2">
                Explorando a
              </span>
              Floresta Temperada:{' '}
              <span className="block mt-2">O Refúgio Sazonal</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mt-6 leading-relaxed">
              O urso pardo é um símbolo das florestas temperadas, mas a
              fragmentação de habitat e as mudanças climáticas ameaçam sua
              sobrevivência. Conheça esse bioma e como podemos protegê-lo.
            </p>
            <button
              onClick={scrollToContent}
              className="mt-8 bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full flex items-center gap-2 transition-all duration-300 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
            >
              <FaTree />
              Explorar o Bioma
            </button>
          </div>
        </div>

        <ScrollIndicator scrollToContent={scrollToContent} biome='tforest' />
      </div>
    </div>
  )
}
