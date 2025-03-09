'use client'

import Image from 'next/image'
import { useRef, useEffect } from 'react'
import {
  FaSun,
  FaMapMarkedAlt,
  FaTemperatureHigh,
  FaSeedling,
  FaExclamationTriangle
} from 'react-icons/fa'

export default function Biome() {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const descriptionRef = useRef(null)
  const imageRef = useRef(null)
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
      className="bg-gradient-to-b from-amber-950 to-amber-900 text-white py-16 md:py-24"
    >
      <div className="container mx-auto px-5 md:px-15 lg:px-30">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-amber-700 rounded-full mb-6">
            <FaSun className="text-amber-100 text-3xl" />
          </div>
          <h2
            ref={titleRef}
            className="text-4xl md:text-5xl font-bold mb-6 opacity-0 transition-opacity duration-1000"
          >
            Deserto: O Bioma Extremo da Terra
          </h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto mb-8 rounded-full"></div>
          <p
            ref={descriptionRef}
            className="text-xl md:text-2xl text-amber-100 max-w-4xl mx-auto leading-relaxed opacity-0 transition-opacity duration-1000"
          >
            Quente, árido e desafiador. O deserto abriga formas de vida
            incríveis que desenvolveram adaptações surpreendentes para
            sobreviver em condições extremas.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div
            ref={imageRef}
            className="relative rounded-xl overflow-hidden shadow-2xl opacity-0 transition-opacity duration-1000 group"
          >
            <Image
              src="/desert_2.jpg"
              alt="Paisagem desértica com dunas e vegetação escassa"
              width={600}
              height={400}
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
              <p className="text-white/90 p-4 text-sm italic">
                Os desertos cobrem cerca de um terço da superfície terrestre e
                são encontrados em todos os continentes
              </p>
            </div>
          </div>

          <div
            ref={contentRefs[0]}
            className="opacity-0 transition-opacity duration-1000"
          >
            <h3 className="text-3xl md:text-4xl font-bold mb-6 flex items-center">
              <span className="bg-amber-700 p-2 rounded-lg mr-3 inline-flex">
                <FaMapMarkedAlt className="text-amber-100" />
              </span>
              O Que é o Deserto?
            </h3>
            <p className="text-lg text-amber-100 leading-relaxed mb-6">
              O deserto é um bioma caracterizado pela escassez de precipitação,
              com menos de 250 mm de chuva por ano. Essa condição extrema cria
              paisagens áridas onde a água é o recurso mais precioso e
              limitante.
            </p>
            <p className="text-lg text-amber-100 leading-relaxed">
              Apesar da aparente hostilidade, os desertos abrigam ecossistemas
              resilientes e espécies altamente especializadas que desenvolveram
              adaptações extraordinárias para sobreviver em condições extremas.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          <div
            ref={contentRefs[1]}
            className="bg-amber-800/50 rounded-xl p-6 shadow-lg border border-amber-700/30 opacity-0 transition-opacity duration-1000 hover:shadow-amber-400/30 hover:translate-y-[-4px]"
          >
            <div className="bg-amber-700 p-3 rounded-lg inline-flex mb-4">
              <FaTemperatureHigh className="text-amber-100 text-2xl" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Clima e Características</h3>
            <ul className="space-y-3 text-amber-100">
              <li className="flex items-start">
                <span className="text-amber-400 mr-2">•</span>
                <span>
                  <strong>Temperatura:</strong> Extrema variação diária, podendo
                  ultrapassar 50°C durante o dia e cair abaixo de 0°C à noite
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-400 mr-2">•</span>
                <span>
                  <strong>Precipitação:</strong> Menos de 250 mm anuais, com
                  chuvas raras e imprevisíveis
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-400 mr-2">•</span>
                <span>
                  <strong>Solo:</strong> Arenoso ou rochoso, com baixo teor de
                  matéria orgânica e nutrientes
                </span>
              </li>
            </ul>
          </div>

          <div
            ref={contentRefs[2]}
            className="bg-amber-800/50 rounded-xl p-6 shadow-lg border border-amber-700/30 opacity-0 transition-opacity duration-1000 hover:shadow-amber-400/30 hover:translate-y-[-4px]"
          >
            <div className="bg-amber-700 p-3 rounded-lg inline-flex mb-4">
              <FaSeedling className="text-amber-100 text-2xl" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Biodiversidade</h3>
            <ul className="space-y-3 text-amber-100">
              <li className="flex items-start">
                <span className="text-amber-400 mr-2">•</span>
                <span>
                  <strong>Flora:</strong> Plantas xerófitas como cactos,
                  suculentas e arbustos de raízes profundas adaptadas à escassez
                  de água
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-400 mr-2">•</span>
                <span>
                  <strong>Fauna:</strong> Animais adaptados à escassez de água e
                  calor extremo, como camelos, lagartos, escorpiões e
                  raposas-do-deserto
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-400 mr-2">•</span>
                <span>
                  <strong>Adaptações:</strong> Atividade noturna, estivação,
                  capacidade de armazenar água e mecanismos de conservação
                  hídrica
                </span>
              </li>
            </ul>
          </div>

          <div
            ref={contentRefs[3]}
            className="bg-amber-800/50 rounded-xl p-6 shadow-lg border border-amber-700/30 opacity-0 transition-opacity duration-1000 hover:shadow-amber-400/30 hover:translate-y-[-4px]"
          >
            <div className="bg-amber-700 p-3 rounded-lg inline-flex mb-4">
              <FaExclamationTriangle className="text-amber-100 text-2xl" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Importância e Ameaças</h3>
            <div className="space-y-4 text-amber-100">
              <div>
                <h4 className="font-semibold text-white">Importância:</h4>
                <p className="mt-1">
                  Os desertos são reservatórios de biodiversidade única, fontes
                  de minerais e energia solar, além de possuírem valor cultural
                  e histórico para muitas civilizações.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-white">Ameaças:</h4>
                <p className="mt-1">
                  Desertificação acelerada, mudanças climáticas, mineração não
                  sustentável, uso excessivo de aquíferos e turismo não
                  controlado ameaçam estes ecossistemas frágeis.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-amber-800/30 p-8 rounded-xl shadow-lg max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-4 text-center">Você Sabia?</h3>
          <p className="text-lg text-amber-100 leading-relaxed text-center mb-0">
            O Deserto do Saara, o maior deserto quente do mundo, já foi uma
            savana verdejante há apenas 6.000 anos. Ciclos climáticos naturais
            transformaram gradualmente a região, e evidências arqueológicas
            mostram pinturas rupestres de girafas e outros animais que habitavam
            essa área.
          </p>
        </div>
      </div>
    </div>
  )
}
