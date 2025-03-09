'use client'

import Image from 'next/image'
import { useRef, useEffect, useState, useMemo } from 'react'
import { FaPaw, FaLeaf, FaExclamationTriangle } from 'react-icons/fa'
import { GiBearHead } from 'react-icons/gi'

export default function Animal() {
  const [, setIsVisible] = useState(false)
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const descriptionRef = useRef(null)
  const imageRef = useRef(null)
  const contentRef0 = useRef(null)
  const contentRef1 = useRef(null)
  const contentRef2 = useRef(null)
  const contentRefs = useMemo(
    () => [contentRef0, contentRef1, contentRef2],
    []
  )

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            if (entry.target === sectionRef.current) {
              setIsVisible(true)
            } else {
              entry.target.classList.add('animate-fadeIn')
              entry.target.classList.remove('opacity-0')
            }
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    if (titleRef.current) observer.observe(titleRef.current)
    if (descriptionRef.current) observer.observe(descriptionRef.current)
    if (imageRef.current) observer.observe(imageRef.current)
    contentRefs.forEach(ref => {
      if (ref.current) observer.observe(ref.current)
    })

    return () => {
      observer.disconnect()
    }
  }, [contentRefs])

  return (
    <div
      ref={sectionRef}
      className="bg-gradient-to-b from-green-900 to-green-950 text-white py-16 md:py-24"
    >
      <div className="container mx-auto px-5 md:px-15 lg:px-30">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-green-700 rounded-full mb-6">
            <GiBearHead className="text-green-100 text-3xl" />
          </div>
          <h2
            ref={titleRef}
            className="text-4xl md:text-5xl font-bold mb-6 opacity-0 transition-opacity duration-1000"
          >
            Urso Pardo: O Gigante da Floresta
          </h2>
          <div className="w-24 h-1 bg-green-500 mx-auto mb-8 rounded-full"></div>
          <p
            ref={descriptionRef}
            className="text-xl md:text-2xl text-green-100 max-w-4xl mx-auto leading-relaxed opacity-0 transition-opacity duration-1000"
          >
            Imponente e adaptável, o urso pardo é um símbolo das florestas
            temperadas e um mestre da sobrevivência sazonal. Mas a perda de
            habitat e conflitos humanos ameaçam suas populações em muitas
            regiões.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div
            ref={imageRef}
            className="relative rounded-xl overflow-hidden shadow-2xl opacity-0 transition-all duration-1000 transform translate-y-8 lg:order-2"
          >
            <Image
              src="/bear.jpg"
              alt="Urso Pardo em seu habitat natural na floresta temperada"
              width={600}
              height={450}
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
              <p className="text-white/90 p-4 text-sm italic">
                Urso pardo explorando seu território na floresta temperada
              </p>
            </div>
          </div>

          <div
            ref={contentRefs[0]}
            className="opacity-0 transition-all duration-1000 transform translate-y-8"
          >
            <h3 className="text-3xl font-bold mb-6 flex items-center">
              <span className="bg-green-700 p-2 rounded-lg mr-3 inline-flex">
                <FaPaw className="text-green-100" />
              </span>
              Características
            </h3>
            <ul className="space-y-4 text-lg text-green-100 leading-relaxed">
              <li className="flex items-start">
                <span className="text-green-400 mr-2 mt-1">•</span>
                <span>
                  <strong>Tamanho:</strong> Um dos maiores carnívoros
                  terrestres, com machos chegando a pesar mais de 600 kg
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2 mt-1">•</span>
                <span>
                  <strong>Alimentação:</strong> Onívoros oportunistas que se
                  alimentam de frutas, nozes, raízes, mel, peixes e
                  ocasionalmente animais maiores
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2 mt-1">•</span>
                <span>
                  <strong>Hibernação:</strong> Em regiões mais frias, hibernam
                  durante o inverno, utilizando as reservas de gordura
                  acumuladas no verão e outono
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div
            ref={contentRefs[1]}
            className="bg-green-800/50 rounded-xl p-6 shadow-lg border border-green-700/30 opacity-0 transition-all duration-1000 transform translate-y-8"
          >
            <div className="bg-green-700 p-3 rounded-lg inline-flex mb-4">
              <FaLeaf className="text-green-100 text-2xl" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Papel Ecológico</h3>
            <p className="text-lg text-green-100 leading-relaxed mb-4">
              O urso pardo é considerado uma espécie &quot;guarda-chuva&quot; -
              sua proteção beneficia indiretamente muitas outras espécies que
              compartilham seu habitat.
            </p>
            <p className="text-lg text-green-100 leading-relaxed">
              Como dispersores de sementes e reguladores de populações de
              presas, eles ajudam a manter o equilíbrio e a biodiversidade das
              florestas temperadas.
            </p>
          </div>

          <div
            ref={contentRefs[2]}
            className="bg-green-800/50 rounded-xl p-6 shadow-lg border border-green-700/30 opacity-0 transition-all duration-1000 transform translate-y-8"
          >
            <div className="bg-green-700 p-3 rounded-lg inline-flex mb-4">
              <FaExclamationTriangle className="text-green-100 text-2xl" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Ameaças e Conservação</h3>
            <ul className="space-y-3 text-green-100">
              <li className="flex items-start">
                <span className="text-green-400 mr-2 mt-1">•</span>
                <span>
                  <strong>Fragmentação de habitat:</strong> A expansão urbana e
                  agrícola reduz e isola as áreas florestais
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2 mt-1">•</span>
                <span>
                  <strong>Conflitos humanos:</strong> Encontros com humanos
                  frequentemente resultam em mortes de ursos
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2 mt-1">•</span>
                <span>
                  <strong>Esforços de conservação:</strong> Criação de
                  corredores ecológicos e áreas protegidas são vitais para a
                  sobrevivência da espécie
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-green-800/30 p-8 rounded-xl shadow-lg">
          <h3 className="text-2xl font-bold mb-4 text-center">Você Sabia?</h3>
          <p className="text-lg text-green-100 leading-relaxed text-center mb-0">
            O urso pardo pode memorizar locais de alimentação com precisão e
            retornar a eles anos depois. Eles também são excepcionalmente
            inteligentes, com habilidades de resolução de problemas comparáveis
            às de grandes primatas.
          </p>
        </div>
      </div>
    </div>
  )
}
