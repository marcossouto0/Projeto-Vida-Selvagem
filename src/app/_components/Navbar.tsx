'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import {
  FaHome,
  FaInfoCircle,
  FaGlobeAmericas,
  FaEnvelope
} from 'react-icons/fa'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

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
          ? 'bg-blue-900/90 backdrop-blur-md shadow-lg py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-3 group">
          <div
            className={`relative overflow-hidden rounded-full transition-all duration-300 ${
              scrolled ? 'w-10 h-10' : 'w-12 h-12'
            }`}
          >
            <Image
              src="/logo.png"
              alt="Logo do Projeto Vida Selvagem"
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-110"
              sizes="48px"
              priority
            />
          </div>
          <h1
            className={`font-bold transition-all duration-300 ${
              scrolled
                ? 'text-white text-xl'
                : 'text-blue-950 text-2xl md:text-3xl'
            }`}
          >
            Projeto Vida Selvagem
          </h1>
        </Link>

        <div className="hidden md:flex items-center gap-6">
          <Link
            href="/"
            className={`flex items-center gap-2 transition-colors duration-300 ${
              scrolled
                ? 'text-blue-100 hover:text-white'
                : 'text-blue-950 hover:text-blue-700'
            }`}
          >
            <FaHome />
            <span>Início</span>
          </Link>
          <Link
            href="#about"
            className={`flex items-center gap-2 transition-colors duration-300 ${
              scrolled
                ? 'text-blue-100 hover:text-white'
                : 'text-blue-950 hover:text-blue-700'
            }`}
          >
            <FaInfoCircle />
            <span>Sobre</span>
          </Link>
          <Link
            href="#biomes"
            className={`flex items-center gap-2 transition-colors duration-300 ${
              scrolled
                ? 'text-blue-100 hover:text-white'
                : 'text-blue-950 hover:text-blue-700'
            }`}
          >
            <FaGlobeAmericas />
            <span>Biomas</span>
          </Link>
          <Link
            href="#contact"
            className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
              scrolled
                ? 'bg-blue-600 text-white hover:bg-blue-500'
                : 'bg-blue-950 text-white hover:bg-blue-800'
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
