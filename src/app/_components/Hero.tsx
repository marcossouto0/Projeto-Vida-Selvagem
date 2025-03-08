'use client'

import { useEffect, useState } from 'react'
import Navbar from './Navbar'
import { FaChevronDown } from 'react-icons/fa'

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about')
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="relative bg-[url('/bg.jpg')] bg-no-repeat bg-cover bg-center my-0 w-100% h-screen">
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/30 to-blue-950/70"></div>

      <div className="relative z-10 mx-5 md:mx-15 lg:mx-30">
        <Navbar />
        <div className="flex flex-col gap-20 h-[calc(100vh-80px)] justify-center">
          <div
            className={`flex flex-col gap-5 md:gap-0 transition-all duration-1000 transform ${
              isVisible
                ? 'translate-y-0 opacity-100'
                : 'translate-y-10 opacity-0'
            }`}
          >
            <h1 className="mt-15 md:mt-25 text-5xl md:text-7xl font-bold text-white font-mono drop-shadow-lg">
              Salvando animais <br className="hidden md:block" />
              <span className="text-blue-300">a mais de 20 anos!</span>
            </h1>
            <p className="text-2xl md:text-3xl text-blue-100 mt-4 mr-5 max-w-2xl drop-shadow-md">
              Defendendo a vida selvagem, um bioma de cada vez.
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
              className="group relative overflow-hidden border-2 border-blue-300 text-blue-100 text-2xl md:text-3xl font-bold py-4 px-8 rounded-lg flex items-center gap-3 transition-all duration-300 hover:bg-blue-800/30 focus:outline-none focus:ring-4 focus:ring-blue-400"
              onClick={scrollToAbout}
              aria-label="Saiba mais sobre nossa organização"
            >
              <span className="relative z-10">Sobre Nós</span>
              <FaChevronDown className="relative z-10 transition-transform duration-300 group-hover:translate-y-1" />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
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
