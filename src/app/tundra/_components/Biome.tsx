'use client'

import Image from 'next/image'
import { useRef, useEffect } from 'react'
import {
  FaGlobeAmericas,
  FaMapMarkerAlt,
  FaSnowflake,
  FaLeaf,
  FaTemperatureLow
} from 'react-icons/fa'

export default function Biome() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const descriptionRef = useRef<HTMLParagraphElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const contentRefs = [useRef(null), useRef(null), useRef(null), useRef(null)]

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fadeIn')
            entry.target.classList.remove('opacity-0')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 }
    )

    if (titleRef.current) observer.observe(titleRef.current)
    if (descriptionRef.current) observer.observe(descriptionRef.current)
    if (imageRef.current) observer.observe(imageRef.current)
    contentRefs.forEach(ref => {
      if (ref.current) observer.observe(ref.current)
    })

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <div
      id="biome-content"
      ref={sectionRef}
      className="bg-gradient-to-b from-blue-950 to-blue-900 text-white py-16 md:py-24"
    >
      <div className="container mx-auto px-5 md:px-15 lg:px-30">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-blue-600 rounded-full mb-6 hover:bg-blue-500 transition-colors duration-300">
            <FaGlobeAmericas className="text-blue-100 text-3xl" />
          </div>
          <h2
            ref={titleRef}
            className="text-4xl md:text-5xl font-bold mb-6 opacity-0 transition-opacity duration-1000"
          >
            Tundra: O Bioma Extremo da Terra
          </h2>
          <div className="w-24 h-1 bg-blue-400 mx-auto mb-8 rounded-full"></div>
          <p
            ref={descriptionRef}
            className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed opacity-0 transition-opacity duration-1000"
          >
            Fria, vasta e desafiadora. A tundra abriga formas de vida incríveis
            que resistem às condições mais extremas do planeta.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div
            ref={imageRef}
            className="relative rounded-xl overflow-hidden shadow-2xl opacity-0 duration-1000 transform translate-y-8 hover:shadow-[0_0_25px_rgba(37,99,235,0.4)] transition-all"
          >
            <Image
              src="/tundra_2.jpg"
              alt="Paisagem da Tundra durante o verão com vegetação rasteira"
              width={600}
              height={400}
              className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
              <p className="text-white/90 p-4 text-sm italic">
                Tundra ártica durante o curto verão, quando a vegetação rasteira
                floresce
              </p>
            </div>
          </div>

          <div
            ref={contentRefs[0]}
            className="opacity-0 transition-all duration-1000 transform translate-y-8"
          >
            <h3 className="text-3xl md:text-4xl font-bold mb-6 flex items-center">
              <span className="bg-blue-600 p-2 rounded-lg mr-3 inline-flex hover:bg-blue-500 transition-colors duration-300">
                <FaLeaf className="text-blue-100" />
              </span>
              O Que é a Tundra?
            </h3>
            <p className="text-lg text-blue-100 leading-relaxed mb-6">
              A tundra é um bioma caracterizado por temperaturas extremamente
              baixas, solo permanentemente congelado (permafrost) e vegetação
              rasteira. É um dos ecossistemas mais frágeis e sensíveis às
              mudanças climáticas.
            </p>
            <p className="text-lg text-blue-100 leading-relaxed">
              Apesar das condições severas, a tundra abriga uma surpreendente
              diversidade de plantas e animais adaptados ao frio extremo, com
              estratégias de sobrevivência únicas que permitem sua existência
              neste ambiente hostil.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          <div
            ref={contentRefs[1]}
            className="bg-blue-800/50 rounded-xl p-6 shadow-lg border border-blue-700/30 opacity-0 duration-1000 transform translate-y-8 hover:shadow-[0_0_15px_rgba(37,99,235,0.3)] hover:-translate-y-1 transition-all"
          >
            <div className="bg-blue-600 p-3 rounded-lg inline-flex mb-4 hover:bg-blue-500 transition-colors duration-300">
              <FaMapMarkerAlt className="text-blue-100 text-2xl" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Onde Encontramos?</h3>
            <p className="text-blue-100 leading-relaxed">
              A tundra cobre aproximadamente 10% da superfície terrestre,
              principalmente nas regiões polares do Hemisfério Norte e em altas
              montanhas ao redor do mundo.
            </p>
            <ul className="mt-4 space-y-2 text-blue-100">
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">•</span>
                <span>
                  Ártico: norte do Canadá, Alasca, Groenlândia, Escandinávia e
                  Sibéria
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">•</span>
                <span>
                  Tundra alpina: encontrada em grandes altitudes em montanhas ao
                  redor do mundo
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">•</span>
                <span>
                  Antártica: pequenas áreas costeiras livres de gelo durante o
                  verão
                </span>
              </li>
            </ul>
          </div>

          <div
            ref={contentRefs[2]}
            className="bg-blue-800/50 rounded-xl p-6 shadow-lg border border-blue-700/30 opacity-0 transition-all duration-1000 transform translate-y-8 hover:shadow-[0_0_15px_rgba(37,99,235,0.3)] hover:-translate-y-1"
          >
            <div className="bg-blue-600 p-3 rounded-lg inline-flex mb-4 hover:bg-blue-500 transition-colors duration-300">
              <FaTemperatureLow className="text-blue-100 text-2xl" />
            </div>
            <h3 className="text-2xl font-bold mb-4">
              Principais Características
            </h3>
            <ul className="space-y-3 text-blue-100">
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">•</span>
                <span>
                  <strong>Clima:</strong> Invernos longos e extremamente frios,
                  verões curtos e frescos
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">•</span>
                <span>
                  <strong>Solo:</strong> Permafrost (solo permanentemente
                  congelado) com camada ativa superficial que descongela no
                  verão
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">•</span>
                <span>
                  <strong>Vegetação:</strong> Plantas baixas e resistentes como
                  musgos, líquens, gramíneas e arbustos anões
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">•</span>
                <span>
                  <strong>Biodiversidade:</strong> Adaptada ao frio extremo, com
                  estratégias de sobrevivência únicas
                </span>
              </li>
            </ul>
          </div>

          <div
            ref={contentRefs[3]}
            className="bg-blue-800/50 rounded-xl p-6 shadow-lg border border-blue-700/30 opacity-0 transform translate-y-8 hover:shadow-[0_0_15px_rgba(37,99,235,0.3)] hover:-translate-y-1 transition-all duration-1000"
          >
            <div className="bg-blue-600 p-3 rounded-lg inline-flex mb-4 hover:bg-blue-500 transition-colors duration-300">
              <FaSnowflake className="text-blue-100 text-2xl" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Importância e Ameaças</h3>
            <div className="space-y-4 text-blue-100">
              <div>
                <h4 className="font-semibold text-white">Importância:</h4>
                <p className="mt-1">
                  Regulação climática global, armazenamento de carbono no
                  permafrost, habitat para espécies únicas e adaptadas ao frio
                  extremo.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-white">Ameaças:</h4>
                <p className="mt-1">
                  Aquecimento global (aquece duas vezes mais rápido que o resto
                  do planeta), exploração de petróleo e gás, mineração e
                  desenvolvimento de infraestrutura.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
