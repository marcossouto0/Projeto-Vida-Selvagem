'use client'

import Image from 'next/image'
import { useRef, useEffect, useState, useMemo } from 'react'
import { FaPaw, FaLeaf, FaExclamationTriangle, FaCat } from 'react-icons/fa'

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
      className="bg-gradient-to-b from-emerald-900 to-emerald-950 text-white py-16 md:py-24"
    >
      <div className="container mx-auto px-5 md:px-15 lg:px-30">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-emerald-700 rounded-full mb-6">
            <FaCat className="text-emerald-100 text-3xl" />
          </div>
          <h2
            ref={titleRef}
            className="text-4xl md:text-5xl font-bold mb-6 opacity-0 transition-opacity duration-1000"
          >
            Onça Pintada: A Guardiã da Floresta
          </h2>
          <div className="w-24 h-1 bg-emerald-500 mx-auto mb-8 rounded-full"></div>
          <p
            ref={descriptionRef}
            className="text-xl md:text-2xl text-emerald-100 max-w-4xl mx-auto leading-relaxed opacity-0 transition-opacity duration-1000"
          >
            Poderosa e majestosa, a onça pintada é o maior felino das Américas e
            um símbolo da saúde dos ecossistemas florestais. Mas o desmatamento
            e a caça ilegal ameaçam sua sobrevivência.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div
            ref={imageRef}
            className="relative rounded-xl overflow-hidden shadow-2xl opacity-0 transition-all duration-1000 transform translate-y-8 lg:order-2"
          >
            <Image
              src="/jaguar.jpg"
              alt="Onça pintada em seu habitat natural na floresta equatorial"
              width={600}
              height={450}
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
              <p className="text-white/90 p-4 text-sm italic">
                Onça pintada observando atentamente seu território na floresta
                amazônica
              </p>
            </div>
          </div>

          <div
            ref={contentRefs[0]}
            className="opacity-0 transition-all duration-1000 transform translate-y-8"
          >
            <h3 className="text-3xl font-bold mb-6 flex items-center">
              <span className="bg-emerald-700 p-2 rounded-lg mr-3 inline-flex">
                <FaPaw className="text-emerald-100" />
              </span>
              Características
            </h3>
            <ul className="space-y-4 text-lg text-emerald-100 leading-relaxed">
              <li className="flex items-start">
                <span className="text-emerald-400 mr-2 mt-1">•</span>
                <span>
                  <strong>Tamanho:</strong> O maior felino das Américas, pesando
                  entre 60 e 120 kg e medindo até 1,85m de comprimento
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-400 mr-2 mt-1">•</span>
                <span>
                  <strong>Pelagem:</strong> Padrão único de rosetas que funciona
                  como impressões digitais, permitindo identificação individual
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-400 mr-2 mt-1">•</span>
                <span>
                  <strong>Habilidades:</strong> Excelente nadadora e escaladora,
                  com mandíbulas poderosas capazes de perfurar crânios de presas
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div
            ref={contentRefs[1]}
            className="bg-emerald-800/50 rounded-xl p-6 shadow-lg border border-emerald-700/30 opacity-0 transition-all duration-1000 transform translate-y-8"
          >
            <div className="bg-emerald-700 p-3 rounded-lg inline-flex mb-4">
              <FaLeaf className="text-emerald-100 text-2xl" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Papel Ecológico</h3>
            <p className="text-lg text-emerald-100 leading-relaxed mb-4">
              A onça pintada é um predador de topo que regula as populações de
              espécies herbívoras e onívoras, mantendo o equilíbrio dos
              ecossistemas florestais.
            </p>
            <p className="text-lg text-emerald-100 leading-relaxed">
              Como espécie-guarda-chuva, sua conservação beneficia indiretamente
              inúmeras outras espécies que compartilham seu habitat, ajudando a
              preservar a biodiversidade da floresta equatorial.
            </p>
          </div>

          <div
            ref={contentRefs[2]}
            className="bg-emerald-800/50 rounded-xl p-6 shadow-lg border border-emerald-700/30 opacity-0 transition-all duration-1000 transform translate-y-8"
          >
            <div className="bg-emerald-700 p-3 rounded-lg inline-flex mb-4">
              <FaExclamationTriangle className="text-emerald-100 text-2xl" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Ameaças e Conservação</h3>
            <ul className="space-y-3 text-emerald-100">
              <li className="flex items-start">
                <span className="text-emerald-400 mr-2 mt-1">•</span>
                <span>
                  <strong>Perda de habitat:</strong> O desmatamento reduz seu
                  território e isola populações, comprometendo a diversidade
                  genética
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-400 mr-2 mt-1">•</span>
                <span>
                  <strong>Caça ilegal:</strong> Perseguida por sua pele ou em
                  retaliação a ataques ao gado
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-400 mr-2 mt-1">•</span>
                <span>
                  <strong>Conservação:</strong> Projetos de corredores
                  ecológicos e unidades de conservação são essenciais para sua
                  sobrevivência
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-emerald-800/30 p-8 rounded-xl shadow-lg">
          <h3 className="text-2xl font-bold mb-4 text-center">Você Sabia?</h3>
          <p className="text-lg text-emerald-100 leading-relaxed text-center mb-0">
            O nome científico da onça pintada, <em>Panthera onca</em>, vem do
            tupi-guarani &quot;yaguara&quot;, que significa &quot;fera que
            mata com um salto&quot;. Diferente de outros grandes felinos, a onça
            mata suas presas perfurando o crânio com suas potentes mandíbulas,
            em vez de sufocá-las.
          </p>
        </div>
      </div>
    </div>
  )
}
