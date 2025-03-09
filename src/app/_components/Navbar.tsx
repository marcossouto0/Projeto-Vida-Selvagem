'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { GiPawHeart } from 'react-icons/gi'
import {
  FaHome,
  FaInfoCircle,
  FaGlobeAmericas,
  FaEnvelope,
  FaChevronLeft
} from 'react-icons/fa'

// Definição dos temas de cores para cada bioma
export const biomeThemes = {
  default: {
    bgScrolled: 'bg-blue-900/90',
    bgHover: 'bg-blue-800',
    bgButton: 'bg-blue-600',
    bgButtonHover: 'bg-blue-500',
    text: 'text-blue-950',
    textHover: 'text-blue-700',
    textLight: 'text-blue-100'
  },
  tundra: {
    bgScrolled: 'bg-blue-900/90',
    bgHover: 'bg-blue-800',
    bgButton: 'bg-blue-600',
    bgButtonHover: 'bg-blue-500',
    text: 'text-blue-950',
    textHover: 'text-blue-700',
    textLight: 'text-blue-100'
  },
  taiga: {
    bgScrolled: 'bg-emerald-900/90',
    bgHover: 'bg-emerald-800',
    bgButton: 'bg-emerald-700',
    bgButtonHover: 'bg-emerald-600',
    text: 'text-emerald-950',
    textHover: 'text-emerald-700',
    textLight: 'text-emerald-100'
  },
  tforest: {
    bgScrolled: 'bg-green-800/90',
    bgHover: 'bg-green-700',
    bgButton: 'bg-green-600',
    bgButtonHover: 'bg-green-500',
    text: 'text-green-300',
    textHover: 'text-green-700',
    textLight: 'text-green-100'
  },
  eforest: {
    bgScrolled: 'bg-green-900/90',
    bgHover: 'bg-green-800',
    bgButton: 'bg-green-700',
    bgButtonHover: 'bg-green-600',
    text: 'text-green-950',
    textHover: 'text-green-700',
    textLight: 'text-green-100'
  },
  grasslands: {
    bgScrolled: 'bg-yellow-700/90',
    bgHover: 'bg-yellow-600',
    bgButton: 'bg-yellow-500',
    bgButtonHover: 'bg-yellow-400',
    text: 'text-yellow-950',
    textHover: 'text-yellow-700',
    textLight: 'text-yellow-100'
  },
  savanna: {
    bgScrolled: 'bg-amber-800/90',
    bgHover: 'bg-amber-700',
    bgButton: 'bg-amber-600',
    bgButtonHover: 'bg-amber-500',
    text: 'text-amber-950',
    textHover: 'text-amber-700',
    textLight: 'text-amber-100'
  },
  desert: {
    bgScrolled: 'bg-orange-800/90',
    bgHover: 'bg-orange-700',
    bgButton: 'bg-orange-600',
    bgButtonHover: 'bg-orange-500',
    text: 'text-orange-500',
    textHover: 'text-orange-700',
    textLight: 'text-orange-100'
  },
  ocean: {
    bgScrolled: 'bg-blue-900/90',
    bgHover: 'bg-blue-800',
    bgButton: 'bg-blue-700',
    bgButtonHover: 'bg-blue-600',
    text: 'text-blue-950',
    textHover: 'text-blue-700',
    textLight: 'text-blue-100'
  }
}

export default function Navbar({ theme = 'default', showBackButton = false }) {
  const [scrolled, setScrolled] = useState(false)
  const colors =
    biomeThemes[theme as keyof typeof biomeThemes] || biomeThemes.default

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? `${colors.bgScrolled} backdrop-blur-md shadow-lg py-2`
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          {showBackButton && (
            <Link
              href="/"
              className={`mr-3 p-2 rounded-full transition-colors duration-300 ${
                scrolled
                  ? `${colors.textLight} hover:text-white`
                  : `${colors.text} hover:${colors.textHover}`
              }`}
              aria-label="Voltar para a página inicial"
            >
              <FaChevronLeft className="text-xl" />
            </Link>
          )}

          <Link href="/" className="flex items-center gap-3 group">
            <div
              className={`relative flex justify-center items-center transition-all duration-300 ${
                scrolled ? 'w-10 h-10' : 'w-12 h-12'
              }`}
            >
              <GiPawHeart
                className={`font-bold transition-all duration-300 ${
                  scrolled
                    ? 'text-white text-4xl'
                    : `${colors.text} text-4xl md:text-6xl`
                }`}
              />
            </div>
            <h1
              className={`font-bold transition-all duration-300 ${
                scrolled
                  ? 'text-white text-xl'
                  : `${colors.text} text-2xl md:text-3xl`
              }`}
            >
              Projeto Vida Selvagem
            </h1>
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-6">
          <Link
            href="/"
            className={`flex items-center gap-2 transition-colors duration-300 ${
              scrolled
                ? `${colors.textLight} hover:text-white`
                : `${colors.text} hover:${colors.textHover}`
            }`}
          >
            <FaHome />
            <span>Início</span>
          </Link>
          <Link
            href="#about"
            className={`flex items-center gap-2 transition-colors duration-300 ${
              scrolled
                ? `${colors.textLight} hover:text-white`
                : `${colors.text} hover:${colors.textHover}`
            }`}
          >
            <FaInfoCircle />
            <span>Sobre</span>
          </Link>
          <Link
            href="#biomes"
            className={`flex items-center gap-2 transition-colors duration-300 ${
              scrolled
                ? `${colors.textLight} hover:text-white`
                : `${colors.text} hover:${colors.textHover}`
            }`}
          >
            <FaGlobeAmericas />
            <span>Biomas</span>
          </Link>
          <Link
            href="#contact"
            className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
              scrolled
                ? `${colors.bgButton} text-white hover:${colors.bgButtonHover}`
                : `${colors.bgScrolled} text-white hover:${colors.bgHover}`
            }`}
          >
            <FaEnvelope />
            <span>Contato</span>
          </Link>
        </div>
      </div>
    </nav>
  )
}
