'use client'

import { useState, useEffect } from 'react'
import Navbar from '@/app/_components/Navbar'
import { FaSnowflake } from 'react-icons/fa'
import ScrollIndicator from '@/app/_components/ScrollIndicator'
import heroData from '@/data/biomes/tundra/hero'
import HeroTitle from './HeroTitle'
import HeroDescription from './HeroDescription'
import HeroButtons from './HeroButtons'

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
      id="tundra"
      className="relative h-screen w-full bg-[url('/tundra.jpg')] bg-no-repeat bg-cover bg-center bg-fixed"
    >
      {/* Overlay gradient with subtle animation */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/60 animate-gradient"></div>

      <div className="relative z-10 mx-5 md:mx-15 lg:mx-30 h-full flex flex-col">
        <Navbar theme="tundra" showBackButton={true} />

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
            <div className="inline-flex items-center bg-blue-800 text-blue-50 px-6 py-3 rounded-full mb-6 backdrop-blur-md hover:bg-blue-700 transition-colors duration-300">
              <FaSnowflake className="mr-3 text-lg animate-pulse" />
              <span className="text-lg font-medium tracking-wide">
                {heroData.subtitle}
              </span>
            </div>

            <HeroTitle title={heroData.title} />
            <HeroDescription description={heroData.description} />
            <HeroButtons buttons={heroData.buttons} scrollToContent={scrollToContent} />
          </div>
        </div>

        <ScrollIndicator scrollToContent={scrollToContent} biome="tundra" />
      </div>
    </div>
  )
}