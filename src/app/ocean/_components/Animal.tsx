'use client'

import Image from 'next/image'
import { useRef, useEffect, useState, useMemo } from 'react'
import { FaPaw, FaSnowflake, FaExclamationTriangle } from 'react-icons/fa'

export default function Animal() {
  const [isVisible, setIsVisible] = useState(false)
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
      className={`bg-gradient-to-b from-blue-900 to-blue-950 text-white py-16 md:py-24 transition-opacity duration-1000 ${
        isVisible ? 'opacity-100' : 'opacity-90'
      }`}
    >
      <div className="container mx-auto px-5 md:px-15 lg:px-30">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-blue-700 rounded-full mb-6">
            <FaSnowflake className="text-blue-100 text-3xl" />
          </div>
          <h2
            ref={titleRef}
            className="text-4xl md:text-5xl font-bold mb-6 opacity-0 transition-opacity duration-1000"
          >
            Pinguins: Os Navegantes dos Oceanos
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-8 rounded-full"></div>
          <p
            ref={descriptionRef}
            className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed opacity-0 transition-opacity duration-1000"
          >
            Elegantes na água e desajeitados em terra, os pinguins são aves
            marinhas perfeitamente adaptadas à vida nos mares mais frios do
            planeta. Embaixadores dos oceanos, enfrentam ameaças crescentes
            devido às mudanças climáticas e à poluição marinha.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div
            ref={imageRef}
            className="relative rounded-xl overflow-hidden shadow-2xl opacity-0 transition-all duration-1000 transform translate-y-8 lg:order-2"
          >
            <Image
              src="/penguin.jpg"
              alt="Grupo de pinguins navegando em águas geladas do oceano"
              width={600}
              height={450}
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
              <p className="text-white/90 p-4 text-sm italic">
                Pinguins são aves não voadoras que passam mais de 75% de suas
                vidas no oceano
              </p>
            </div>
          </div>

          <div
            ref={contentRefs[0]}
            className="opacity-0 transition-all duration-1000 transform translate-y-8"
          >
            <h3 className="text-3xl font-bold mb-6 flex items-center">
              <span className="bg-blue-700 p-2 rounded-lg mr-3 inline-flex">
                <FaPaw className="text-blue-100" />
              </span>
              Características
            </h3>
            <ul className="space-y-4 text-lg text-blue-100 leading-relaxed">
              <li className="flex items-start">
                <span className="text-blue-400 mr-2 mt-1">•</span>
                <span>
                  <strong>Família:</strong> Existem 18 espécies de pinguins,
                  todas encontradas exclusivamente no Hemisfério Sul
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2 mt-1">•</span>
                <span>
                  <strong>Adaptações:</strong> Asas transformadas em nadadeiras
                  poderosas, corpo hidrodinâmico, e penas impermeáveis
                  densamente compactadas
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2 mt-1">•</span>
                <span>
                  <strong>Velocidade:</strong> Podem nadar a até 35 km/h e
                  mergulhar a profundidades de 500 metros em busca de alimento
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div
            ref={contentRefs[1]}
            className="bg-blue-800/50 rounded-xl p-6 shadow-lg border border-blue-700/30 opacity-0 transition-all duration-1000 transform translate-y-8"
          >
            <div className="bg-blue-700 p-3 rounded-lg inline-flex mb-4">
              <FaSnowflake className="text-blue-100 text-2xl" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Habitat e Comportamento</h3>
            <p className="text-lg text-blue-100 leading-relaxed mb-4">
              Os pinguins habitam regiões costeiras e ilhas no Hemisfério Sul,
              desde os trópicos (pinguim-de-galápagos) até a Antártida
              (pinguim-imperador), sempre próximos a correntes oceânicas ricas
              em alimento.
            </p>
            <p className="text-lg text-blue-100 leading-relaxed">
              São animais sociais que vivem em grandes colônias durante a
              reprodução. Formam casais monogâmicos e compartilham os cuidados
              com os filhotes, revezando-se entre a busca por alimento no oceano
              e a proteção dos ovos/filhotes em terra.
            </p>
          </div>

          <div
            ref={contentRefs[2]}
            className="bg-blue-800/50 rounded-xl p-6 shadow-lg border border-blue-700/30 opacity-0 transition-all duration-1000 transform translate-y-8"
          >
            <div className="bg-blue-700 p-3 rounded-lg inline-flex mb-4">
              <FaExclamationTriangle className="text-blue-100 text-2xl" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Ameaças e Conservação</h3>
            <ul className="space-y-3 text-blue-100">
              <li className="flex items-start">
                <span className="text-blue-400 mr-2 mt-1">•</span>
                <span>
                  <strong>Mudanças climáticas:</strong> O aquecimento dos
                  oceanos reduz a disponibilidade de alimento e afeta seus
                  ciclos reprodutivos
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2 mt-1">•</span>
                <span>
                  <strong>Poluição:</strong> Plásticos e derramamentos de óleo
                  contaminam habitats e causam mortalidade direta
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2 mt-1">•</span>
                <span>
                  <strong>Pesca industrial:</strong> A sobrepesca reduz suas
                  fontes de alimento e capturas acidentais em redes comerciais
                  são frequentes
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-blue-800/30 p-8 rounded-xl shadow-lg">
          <h3 className="text-2xl font-bold mb-4 text-center">Você Sabia?</h3>
          <p className="text-lg text-blue-100 leading-relaxed text-center mb-0">
            O pinguim-imperador pode mergulhar por até 20 minutos e atingir
            profundidades de até 565 metros. Durante o inverno antártico, os
            machos desta espécie incubam os ovos por dois meses em temperaturas
            extremas (até -60°C), enquanto as fêmeas vão ao mar buscar alimento.
          </p>
        </div>
      </div>
    </div>
  )
}
