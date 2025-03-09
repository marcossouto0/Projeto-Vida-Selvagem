'use client'

import Image from 'next/image'
import { FaQuoteLeft, FaQuoteRight, FaHeart } from 'react-icons/fa'
import { useRef, useEffect, useState } from 'react'

export default function Quote() {
  const [isVisible, setIsVisible] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const [isLiked, setIsLiked] = useState(false)
  const quoteRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)

  const handleLike = () => {
    setIsLiked(!isLiked)
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      { threshold: 0.2 }
    )

    if (quoteRef.current) observer.observe(quoteRef.current)

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <div
      ref={quoteRef}
      className="py-24 md:py-32 relative overflow-hidden z-0"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background gradients */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-blue-50 via-indigo-50 to-blue-100 transition-transform duration-1000 ease-in-out"
        style={{ transform: isHovered ? 'scale(1.05)' : 'scale(1)' }}
      ></div>

      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-100/30 opacity-50"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_50%,rgba(59,130,246,0.1),transparent_35%)] mix-blend-soft-light"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_30%,rgba(99,102,241,0.15),transparent_50%)] mix-blend-multiply"></div>

      {/* Animated shapes */}
      <div
        className={`absolute -top-20 -left-20 w-60 h-60 rounded-full bg-blue-300/20 transition-all duration-1000 delay-300
        ${
          isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
        }`}
        aria-hidden="true"
      ></div>
      <div
        className={`absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-indigo-300/20 transition-all duration-1000 delay-500
        ${
          isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
        }`}
        aria-hidden="true"
      ></div>

      {/* Content container with max width */}
      <div className="container mx-auto px-5 md:px-15 lg:px-30 relative z-10 max-w-6xl">
        <div className="flex flex-col md:flex-row gap-10 lg:gap-20 items-center">
          {/* Image section with animations */}
          <div
            ref={imageRef}
            className={`relative transition-all duration-1000 delay-200 z-10
              ${
                isVisible
                  ? 'opacity-100 translate-x-0'
                  : 'opacity-0 -translate-x-10'
              }`}
            aria-hidden="true"
          >
            <div className="absolute inset-0 bg-blue-400/30 rounded-full blur-3xl translate-x-[-12px] translate-y-3"></div>
            <div
              className="relative rounded-full overflow-hidden w-64 h-64 md:w-80 md:h-80 border-8 border-white shadow-2xl transition-all duration-500"
              style={{
                transform: isHovered
                  ? 'scale(1.03) rotate(2deg)'
                  : 'scale(1) rotate(0)'
              }}
            >
              <Image
                src="/Mother_Teresa_1.jpg"
                alt="Madre Teresa de Calcutá"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 256px, 320px"
                priority
              />
            </div>

            {/* Name card */}
            <div
              className={`absolute -bottom-5 -right-5 bg-white py-3 px-6 rounded-xl shadow-lg transition-all duration-700
              ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
            >
              <p className="text-indigo-900 font-bold whitespace-nowrap">
                Madre Teresa de Calcutá
              </p>
              <p className="text-blue-500 text-sm">1910-1997</p>
            </div>
          </div>

          {/* Quote section with animations */}
          <div
            ref={textRef}
            className={`md:flex-1 transition-all duration-1000 delay-400 relative z-10
              ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
          >
            <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 md:p-10 shadow-xl border border-blue-100">
              <FaQuoteLeft
                className="absolute -top-5 -left-2 text-blue-400 text-5xl"
                aria-hidden="true"
              />
              <blockquote className="font-serif relative z-10">
                <p className="text-2xl md:text-3xl lg:text-4xl text-indigo-900 leading-relaxed font-medium italic">
                  Os animais foram criados pela mesma mão caridosa de Deus que
                  nos criou… é nosso dever protegê-los e promover o seu
                  bem-estar.
                </p>

                <div className="mt-6 flex justify-between items-end">
                  <button
                    onClick={handleLike}
                    className={`group flex items-center gap-2 px-4 py-2 rounded-full transition-colors duration-300
                      ${
                        isLiked
                          ? 'bg-red-100 text-red-500'
                          : 'bg-blue-50 text-blue-400 hover:bg-blue-100'
                      }`}
                    aria-label={
                      isLiked
                        ? 'Marcar como não inspirador'
                        : 'Marcar como inspirador'
                    }
                    aria-pressed={isLiked}
                  >
                    <FaHeart
                      className={`transition-transform duration-300 ${
                        isLiked
                          ? 'text-red-500 scale-110'
                          : 'text-blue-300 group-hover:scale-110'
                      }`}
                      aria-hidden="true"
                    />
                    <span className="text-sm font-sans">
                      {isLiked ? 'Inspirador' : 'Inspirador?'}
                    </span>
                  </button>

                  <footer className="text-right text-indigo-800 font-bold font-sans not-italic">
                    <div className="text-sm uppercase tracking-wider text-blue-500 mb-1">
                      Palavras de Sabedoria
                    </div>
                  </footer>
                </div>
              </blockquote>
              <FaQuoteRight
                className="absolute -bottom-5 -right-2 text-blue-400 text-5xl"
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
