'use client'

import { useState } from 'react'
import { FaHeart } from 'react-icons/fa'
import { usePathname } from 'next/navigation'
import confetti from 'canvas-confetti'

// Biome theme definitions
interface BiomeTheme {
  colorClass: string
  bgColorClass: string
  accentColorClass: string
  textColorClass?: string
  bgGradientClass?: string // Optional gradient class for background
}

const BIOME_THEMES: Record<string, BiomeTheme> = {
  '/desert': {
    colorClass: 'from-amber-600 to-amber-500',
    bgColorClass: 'bg-amber-50',
    accentColorClass: 'text-amber-600'
  },
  '/ocean': {
    colorClass: 'from-blue-700 to-blue-500',
    bgColorClass: 'bg-blue-50',
    accentColorClass: 'text-blue-600'
  },
  '/savanna': {
    colorClass: 'from-amber-800 to-amber-600',
    bgColorClass: 'bg-amber-50',
    bgGradientClass: 'bg-gradient-to-b from-amber-900 to-amber-800',
    accentColorClass: 'text-amber-700'
  },
  '/tundra': {
    colorClass: 'from-blue-900 to-blue-700',
    bgColorClass: 'bg-blue-50',
    accentColorClass: 'text-blue-800'
  },
  '/taiga': {
    colorClass: 'from-emerald-900 to-emerald-700',
    bgColorClass: 'bg-emerald-50',
    accentColorClass: 'text-emerald-800'
  },
  '/tforest': {
    colorClass: 'from-green-800 to-green-600',
    bgColorClass: 'bg-green-50',
    accentColorClass: 'text-green-700'
  },
  '/eforest': {
    colorClass: 'from-green-900 to-green-700',
    bgColorClass: 'bg-green-50',
    accentColorClass: 'text-green-800'
  },
  '/grasslands': {
    colorClass: 'from-yellow-700 to-yellow-500',
    bgColorClass: 'bg-yellow-50',
    accentColorClass: 'text-yellow-600'
  }
}

// Default theme for fallback
const DEFAULT_THEME = {
  colorClass: 'from-blue-600 to-blue-400',
  bgColorClass: 'bg-blue-50',
  accentColorClass: 'text-blue-500',
  textColorClass: 'text-white',
  bgGradientClass: 'bg-gradient-to-b' // Added missing property
}

interface ThankYouButtonProps {
  colorClass?: string // Optional override for gradient class
  textColorClass?: string // Optional override for text color
  bgColorClass?: string // Optional override for modal background
  accentColorClass?: string // Optional override for accent color
}

export default function ThankYouButton({
  colorClass: customColorClass,
  textColorClass: customTextColorClass,
  bgColorClass: customBgColorClass,
  accentColorClass: customAccentColorClass
}: ThankYouButtonProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const pathname = usePathname()

  // Get the current biome theme based on pathname
  // Note: pathname can include segments like /biome/subpage, so we check if it starts with a biome path
  const getCurrentBiomeTheme = () => {
    const biomeKey = Object.keys(BIOME_THEMES).find(path =>
      pathname.startsWith(path)
    )
    return biomeKey ? BIOME_THEMES[biomeKey] : DEFAULT_THEME
  }

  const biomeTheme = getCurrentBiomeTheme()

  // Use custom props if provided, otherwise use the detected biome theme
  const colorClass = customColorClass || biomeTheme.colorClass
  const bgColorClass = customBgColorClass || biomeTheme.bgColorClass
  const accentColorClass = customAccentColorClass || biomeTheme.accentColorClass
  const textColorClass =
    customTextColorClass || biomeTheme.textColorClass || 'text-white'
  const bgGradientClass = biomeTheme.bgGradientClass || 'bg-gradient-to-b'

  const openModal = () => {
    setIsModalOpen(true)
    // Prevent scrolling when modal is open
    document.body.style.overflow = 'hidden'

    // Trigger confetti animation
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    })
  }

  const closeModal = () => {
    setIsModalOpen(false)
    // Re-enable scrolling
    document.body.style.overflow = 'auto'
  }

  return (
    <div className={`${bgGradientClass} py-16 md:py-24`}>
      <div className="w-full flex justify-center my-12">
        <button
          onClick={openModal}
          className={`bg-gradient-to-r ${colorClass} ${textColorClass} px-8 py-4 rounded-full 
            text-lg font-bold shadow-lg transform transition-all duration-300 
            hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-opacity-50
            flex items-center space-x-2`}
        >
          <span>Agradecer pela Apresentação</span>
          <FaHeart className="text-white animate-pulse" />
        </button>
      </div>

      {/* Modal/Popup */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
          onClick={closeModal}
        >
          <div
            className={`${bgColorClass} max-w-lg rounded-2xl shadow-2xl p-8 transform transition-all duration-500 animate-fade-in-up`}
            onClick={e => e.stopPropagation()}
          >
            <div className="text-center">
              <div
                className={`mx-auto rounded-full p-4 inline-flex mb-6 bg-gradient-to-r ${colorClass}`}
              >
                <FaHeart className={`text-3xl ${textColorClass}`} />
              </div>
              <h2 className="text-3xl font-bold mb-4 text-gray-800">
                Muito Obrigado!
              </h2>
              <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                Agradecemos sua atenção durante nossa apresentação sobre os
                biomas da Terra. Esperamos que tenha apreciado esta jornada
                educativa pelos diversos ecossistemas do nosso planeta.
              </p>
              <p className={`text-lg font-medium mb-8 ${accentColorClass}`}>
                Preservar nosso planeta é responsabilidade de todos nós!
              </p>
              <button
                onClick={closeModal}
                className={`bg-gradient-to-r ${colorClass} ${textColorClass} px-6 py-3 rounded-lg 
                  font-bold transition-all duration-300 hover:shadow-lg transform hover:scale-105`}
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
