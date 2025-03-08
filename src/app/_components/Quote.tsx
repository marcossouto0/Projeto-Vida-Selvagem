'use client'

import Image from 'next/image'
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa'
import { useRef, useEffect } from 'react'

export default function Quote() {
  const quoteRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in')
          }
        })
      },
      { threshold: 0.1 }
    )

    if (quoteRef.current) observer.observe(quoteRef.current)

    return () => {
      if (quoteRef.current) observer.unobserve(quoteRef.current)
    }
  }, [])

  return (
    <div
      ref={quoteRef}
      className="py-16 md:py-24 bg-gradient-to-r from-blue-50 to-blue-100 opacity-0 transition-opacity duration-1000"
    >
      <div className="container mx-auto px-5 md:px-15 lg:px-30">
        <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-center">
          <div className="relative rounded-full overflow-hidden w-64 h-64 border-8 border-white shadow-xl">
            <Image
              src="/Mother_Teresa_1.jpg"
              alt="Madre Teresa de Calcutá"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 256px"
            />
          </div>
          <div className="md:flex-1">
            <div className="relative">
              <FaQuoteLeft className="absolute -top-6 -left-6 text-blue-300 text-4xl opacity-70" />
              <blockquote className="text-2xl md:text-3xl lg:text-4xl text-blue-900 font-serif italic leading-relaxed">
                <p className="mb-6">
                  &ldquo;Os animais foram criados pela mesma mão caridosa de
                  Deus que nos criou… é nosso dever protegê-los e promover o seu
                  bem-estar.&rdquo;
                </p>
                <footer className="text-right text-blue-800 font-bold text-lg md:text-xl mt-4 font-sans not-italic">
                  — Madre Teresa de Calcutá{' '}
                  <span className="font-normal text-blue-600">(1910-1997)</span>
                </footer>
              </blockquote>
              <FaQuoteRight className="absolute -bottom-6 -right-6 text-blue-300 text-4xl opacity-70" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
