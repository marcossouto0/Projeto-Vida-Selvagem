'use client'

import Image from 'next/image'
import { useRef, useEffect } from 'react'
import {
  FaGlobeAmericas,
  FaMapMarkerAlt,
  FaSun,
  FaLeaf,
  FaTree
} from 'react-icons/fa'

export default function Biome() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const contentRefs = useRef<(HTMLDivElement | null)[]>([])

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

    if (sectionRef.current) observer.observe(sectionRef.current)

    contentRefs.current.forEach(ref => {
      if (ref) observer.observe(ref)
    })

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current)

      contentRefs.current.forEach(ref => {
        if (ref) observer.unobserve(ref)
      })
    }
  }, [])

  return (
    <div
      id="biome-content"
      ref={sectionRef}
      className="bg-gradient-to-b from-amber-900 to-amber-950 text-white py-16 md:py-24 opacity-0 transition-opacity duration-1000"
    >
      <div className="container mx-auto px-5 md:px-15 lg:px-30">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-amber-600 rounded-full mb-6">
            <FaGlobeAmericas className="text-amber-100 text-3xl" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Savana: O Bioma das Planícies Tropicais
          </h2>
          <div className="w-24 h-1 bg-amber-400 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl md:text-2xl text-amber-100 max-w-4xl mx-auto leading-relaxed">
            Diversa, resiliente e vital. A savana é um bioma caracterizado por
            extensas áreas de gramíneas com árvores esparsas, encontrado em
            regiões tropicais e subtropicais ao redor do mundo.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div
            ref={el => (contentRefs.current[0] = el)}
            className="relative rounded-xl overflow-hidden shadow-2xl opacity-0 transition-all duration-1000 transform translate-y-8"
          >
            <Image
              src="/savanna_2.jpg"
              alt="Paisagem de Savana com árvores esparsas e gramíneas"
              width={600}
              height={400}
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
              <p className="text-white/90 p-4 text-sm italic">
                Savana africana durante a estação seca, com suas características
                árvores de copa achatada
              </p>
            </div>
          </div>

          <div
            ref={el => (contentRefs.current[1] = el)}
            className="opacity-0 transition-all duration-1000 transform translate-y-8"
          >
            <h3 className="text-3xl md:text-4xl font-bold mb-6 flex items-center">
              <span className="bg-amber-600 p-2 rounded-lg mr-3 inline-flex">
                <FaLeaf className="text-amber-100" />
              </span>
              O Que é a Savana?
            </h3>
            <p className="text-lg text-amber-100 leading-relaxed mb-6">
              A savana é um bioma caracterizado por uma cobertura contínua de
              gramíneas, com árvores e arbustos dispersos. É um ecossistema de
              transição entre florestas e campos, adaptado a estações secas e
              chuvosas bem definidas.
            </p>
            <p className="text-lg text-amber-100 leading-relaxed">
              As árvores da savana possuem adaptações para sobreviver a períodos
              de seca e incêndios naturais, como cascas grossas, raízes
              profundas e copas achatadas. A vegetação rasteira é dominada por
              gramíneas que secam na estação seca e rebrotam rapidamente com as
              chuvas.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          <div
            ref={el => (contentRefs.current[2] = el)}
            className="bg-amber-800/50 rounded-xl p-6 shadow-lg border border-amber-700/30 opacity-0 transition-all duration-1000 transform translate-y-8"
          >
            <div className="bg-amber-600 p-3 rounded-lg inline-flex mb-4">
              <FaMapMarkerAlt className="text-amber-100 text-2xl" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Onde Encontramos?</h3>
            <p className="text-amber-100 leading-relaxed">
              As savanas cobrem aproximadamente 20% da superfície terrestre,
              distribuídas principalmente na África (Serengeti), América do Sul
              (Cerrado brasileiro), Austrália (Outback), Índia e Sudeste
              Asiático.
            </p>
            <ul className="mt-4 space-y-2 text-amber-100">
              <li className="flex items-start">
                <span className="text-amber-400 mr-2">•</span>
                <span>África: maior extensão de savanas do mundo</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-400 mr-2">•</span>
                <span>
                  América do Sul: Cerrado brasileiro e Llanos venezuelanos
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-400 mr-2">•</span>
                <span>Austrália: savanas tropicais no norte do continente</span>
              </li>
            </ul>
          </div>

          <div
            ref={el => (contentRefs.current[3] = el)}
            className="bg-amber-800/50 rounded-xl p-6 shadow-lg border border-amber-700/30 opacity-0 transition-all duration-1000 transform translate-y-8"
          >
            <div className="bg-amber-600 p-3 rounded-lg inline-flex mb-4">
              <FaSun className="text-amber-100 text-2xl" />
            </div>
            <h3 className="text-2xl font-bold mb-4">
              Principais Características
            </h3>
            <ul className="space-y-3 text-amber-100">
              <li className="flex items-start">
                <span className="text-amber-400 mr-2">•</span>
                <span>
                  <strong>Clima:</strong> Estações secas e chuvosas bem
                  definidas, com temperaturas médias entre 20°C e 30°C
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-400 mr-2">•</span>
                <span>
                  <strong>Vegetação:</strong> Gramíneas contínuas com árvores
                  esparsas e de copa achatada
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-400 mr-2">•</span>
                <span>
                  <strong>Solo:</strong> Geralmente pobre em nutrientes, ácido e
                  com baixa capacidade de retenção de água
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-400 mr-2">•</span>
                <span>
                  <strong>Biodiversidade:</strong> Rica fauna adaptada às
                  condições sazonais e à vegetação aberta
                </span>
              </li>
            </ul>
          </div>

          <div
            ref={el => (contentRefs.current[4] = el)}
            className="bg-amber-800/50 rounded-xl p-6 shadow-lg border border-amber-700/30 opacity-0 transition-all duration-1000 transform translate-y-8"
          >
            <div className="bg-amber-600 p-3 rounded-lg inline-flex mb-4">
              <FaTree className="text-amber-100 text-2xl" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Importância e Ameaças</h3>
            <div className="space-y-4 text-amber-100">
              <div>
                <h4 className="font-semibold text-white">Importância:</h4>
                <p className="mt-1">
                  Regulação climática, conservação da biodiversidade, proteção
                  de bacias hidrográficas e sustento para milhões de pessoas.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-white">Ameaças:</h4>
                <p className="mt-1">
                  Conversão para agricultura, urbanização, mineração, queimadas
                  descontroladas e mudanças climáticas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
