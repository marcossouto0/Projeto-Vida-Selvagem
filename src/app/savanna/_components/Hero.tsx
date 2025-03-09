'use client'

import { useEffect, useState } from 'react'
import Navbar from '@/app/_components/Navbar'
import { FaChevronDown, FaLeaf } from 'react-icons/fa'

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToContent = () => {
    const contentSection = document.getElementById('biome-content')
    if (contentSection) {
      contentSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div
      id="savanna"
      className="relative bg-[url('/savanna.jpg')] bg-no-repeat bg-cover bg-center my-0 w-100% h-screen"
    >
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80"></div>

      <div className="relative z-10 mx-5 md:mx-15 lg:mx-30">
        <Navbar theme="savanna" showBackButton={true} />

        {/* Breadcrumb navigation */}
        {/* <div className="mt-8 flex items-center text-white/80">
          <Link href="/" className="hover:text-white transition-colors">
            Início
          </Link>
          <span className="mx-2">›</span>
          <span className="font-medium">Savana</span>
        </div> */}

        <div className="flex flex-col gap-8 h-[calc(100vh-200px)] justify-center">
          <div
            className={`transition-all duration-1000 transform ${
              isVisible
                ? 'translate-y-0 opacity-100'
                : 'translate-y-10 opacity-0'
            }`}
          >
            <div className="inline-flex items-center bg-amber-600/80 text-white px-4 py-2 rounded-full mb-4">
              <FaLeaf className="mr-2" />
              <span className="font-medium">Bioma Tropical</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white font-serif drop-shadow-lg">
              Savana: As Planícies <br className="hidden md:block" />
              <span className="text-amber-300">Tropicais</span>
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl text-white/90 mt-6 max-w-3xl drop-shadow-md leading-relaxed">
              O tamanduá-bandeira é um dos símbolos das savanas sul-americanas,
              mas as queimadas e o desmatamento ameaçam sua sobrevivência.
              Conheça esse bioma único e como podemos protegê-lo.
            </p>
          </div>

          <div
            className={`transition-all duration-1000 delay-500 transform ${
              isVisible
                ? 'translate-y-0 opacity-100'
                : 'translate-y-10 opacity-0'
            }`}
          >
            <button
              onClick={scrollToContent}
              className="group bg-amber-600/80 hover:bg-amber-500/90 text-white px-6 py-3 rounded-full flex items-center gap-2 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 focus:ring-offset-amber-900"
              aria-label="Explorar o bioma Savana"
            >
              <span className="font-medium">Explorar Bioma</span>
              <FaChevronDown className="transition-transform duration-300 group-hover:translate-y-1" />
            </button>
          </div>
        </div>
      </div>

      {/* Animated scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <FaChevronDown className="text-white text-3xl" />
      </div>
    </div>
  )
}
