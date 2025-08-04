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
          Pinguim-Imperador: O Soberano do Gelo
        </h2>
        <div className="w-24 h-1 bg-blue-500 mx-auto mb-8 rounded-full"></div>
        <p
          ref={descriptionRef}
          className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed opacity-0 transition-opacity duration-1000"
        >
          O pinguim-imperador é o maior e mais resistente de todos os pinguins.
          Adaptado ao inverno antártico extremo, ele representa uma verdadeira
          história de superação, dedicação familiar e sobrevivência nas
          condições mais severas da Terra.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
        <div
          ref={imageRef}
          className="relative rounded-xl overflow-hidden shadow-2xl opacity-0 transition-all duration-1000 transform translate-y-8 lg:order-2"
        >
          <Image
            src="/penguin.jpg"
            alt="Pinguins-imperadores na Antártida"
            width={600}
            height={450}
            className="w-full h-auto object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
            <p className="text-white/90 p-4 text-sm italic">
              O pinguim-imperador vive exclusivamente na Antártida e é a única
              espécie que se reproduz no auge do inverno polar.
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
                <strong>Tamanho:</strong> Até 1,20 metros de altura e 40 kg,
                sendo a maior espécie de pinguim existente.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-2 mt-1">•</span>
              <span>
                <strong>Resistência:</strong> Sobrevive a temperaturas de até
                -60 °C e ventos acima de 200 km/h durante o período reprodutivo.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-2 mt-1">•</span>
              <span>
                <strong>Capacidades de mergulho:</strong> Pode mergulhar por até
                20 minutos, alcançando profundidades superiores a 500 metros.
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
          <h3 className="text-2xl font-bold mb-4">Reprodução e Comportamento</h3>
          <p className="text-lg text-blue-100 leading-relaxed mb-4">
            Ao contrário de outras espécies, o pinguim-imperador se reproduz no
            auge do inverno antártico. O macho incuba o ovo sobre os pés, sob
            uma dobra de pele, por cerca de 65 dias, enquanto a fêmea retorna ao
            mar em busca de alimento.
          </p>
          <p className="text-lg text-blue-100 leading-relaxed">
            Durante esse tempo, os machos jejuam completamente e se agrupam em
            grandes colônias para manter o calor corporal, formando uma
            verdadeira comunidade térmica.
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
                <strong>Mudanças climáticas:</strong> O derretimento do gelo
                marinho ameaça locais de reprodução e reduz o acesso a
                alimento.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-2 mt-1">•</span>
              <span>
                <strong>Distúrbios humanos:</strong> Atividades de pesquisa e
                turismo antártico podem interferir nas colônias.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-2 mt-1">•</span>
              <span>
                <strong>Dependência do gelo:</strong> Por dependerem de plataformas
                de gelo para reprodução e descanso, são extremamente vulneráveis
                a alterações ambientais.
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-blue-800/30 p-8 rounded-xl shadow-lg">
        <h3 className="text-2xl font-bold mb-4 text-center">Você Sabia?</h3>
        <p className="text-lg text-blue-100 leading-relaxed text-center mb-0">
          O pinguim-imperador é o único animal que se reproduz no meio do
          inverno antártico. Os machos chegam a perder metade de seu peso
          corporal enquanto incubam os ovos, demonstrando um dos comportamentos
          parentais mais extremos do reino animal.
        </p>
      </div>
    </div>
  </div>
)
}
