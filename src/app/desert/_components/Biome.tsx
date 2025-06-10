'use client'

import Image from 'next/image'
import { useRef, useEffect, useMemo } from 'react'
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
  const contentRef0 = useRef(null)
  const contentRef1 = useRef(null)
  const contentRef2 = useRef(null)
  const contentRef3 = useRef(null)
  const contentRefs = useMemo(
    () => [contentRef0, contentRef1, contentRef2, contentRef3],
    []
  )

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
  }, [contentRefs])

  return (
    <div
      id="biome-content"
      ref={sectionRef}
      className="bg-gradient-to-b from-amber-950 to-amber-900 text-white py-16 md:py-24 min-h-screen"
    >
      <div className="container mx-auto px-4 md:px-10 lg:px-24">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-4 bg-gradient-to-tr from-amber-700 to-yellow-500 rounded-full mb-6 shadow-lg animate-bounce-slow">
            <FaSun className="text-amber-100 text-4xl drop-shadow-lg" />
          </div>
          <h2
            ref={titleRef}
            className="text-4xl md:text-5xl font-extrabold mb-6 opacity-0 transition-opacity duration-1000 tracking-tight drop-shadow-lg"
          >
            Deserto: O Bioma Extremo da Terra
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-yellow-300 mx-auto mb-8 rounded-full"></div>
          <p
            ref={descriptionRef}
            className="text-xl md:text-2xl text-amber-100 max-w-3xl mx-auto leading-relaxed opacity-0 transition-opacity duration-1000"
          >
            Quente, árido e desafiador. O deserto abriga formas de vida incríveis que desenvolveram adaptações surpreendentes para sobreviver em condições extremas.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div
            ref={imageRef}
            className="relative rounded-2xl overflow-hidden shadow-2xl opacity-0 transition-opacity duration-1000 group"
          >
            <Image
              src="/desert_2.jpg"
              alt="Paisagem desértica com dunas e vegetação escassa"
              width={700}
              height={450}
              className="w-full h-auto object-cover scale-100 group-hover:scale-105 transition-transform duration-700"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end pointer-events-none">
              <p className="text-white/90 p-4 text-base italic drop-shadow-md">
                Os desertos cobrem cerca de um terço da superfície terrestre e são encontrados em todos os continentes
              </p>
            </div>
          </div>

          <div
            ref={contentRefs[0]}
            className="opacity-0 transition-opacity duration-1000"
          >
            <h3 className="text-3xl md:text-4xl font-bold mb-6 flex items-center gap-3">
              <span className="bg-gradient-to-tr from-amber-700 to-yellow-500 p-3 rounded-lg shadow-md">
                <FaMapMarkedAlt className="text-amber-100 text-2xl" />
              </span>
              O Que é o Deserto?
            </h3>
            <p className="text-lg text-amber-100 leading-relaxed mb-4">
              O deserto é um bioma caracterizado pela escassez de precipitação, com menos de 250 mm de chuva por ano. Essa condição extrema cria paisagens áridas onde a água é o recurso mais precioso e limitante.
            </p>
            <p className="text-lg text-amber-100 leading-relaxed">
              Apesar da aparente hostilidade, os desertos abrigam ecossistemas resilientes e espécies altamente especializadas que desenvolveram adaptações extraordinárias para sobreviver em condições extremas.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          <div
            ref={contentRefs[1]}
            className="bg-gradient-to-br from-amber-800/70 to-amber-900/70 rounded-2xl p-7 shadow-xl border border-amber-700/30 opacity-0 transition-all duration-1000 hover:shadow-amber-400/40 hover:-translate-y-2 hover:scale-[1.03]"
          >
            <div className="bg-gradient-to-tr from-amber-700 to-yellow-500 p-3 rounded-lg inline-flex mb-4 shadow">
              <FaTemperatureHigh className="text-amber-100 text-2xl" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Clima e Características</h3>
            <ul className="space-y-3 text-amber-100">
              <li className="flex items-start gap-2">
                <span className="text-amber-400 text-xl">•</span>
                <span>
                  <strong>Temperatura:</strong> Extrema variação diária, podendo ultrapassar 50°C durante o dia e cair abaixo de 0°C à noite
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-400 text-xl">•</span>
                <span>
                  <strong>Precipitação:</strong> Menos de 250 mm anuais, com chuvas raras e imprevisíveis
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-400 text-xl">•</span>
                <span>
                  <strong>Solo:</strong> Arenoso ou rochoso, com baixo teor de matéria orgânica e nutrientes
                </span>
              </li>
            </ul>
          </div>

          <div
            ref={contentRefs[2]}
            className="bg-gradient-to-br from-amber-800/70 to-amber-900/70 rounded-2xl p-7 shadow-xl border border-amber-700/30 opacity-0 transition-all duration-1000 hover:shadow-amber-400/40 hover:-translate-y-2 hover:scale-[1.03]"
          >
            <div className="bg-gradient-to-tr from-amber-700 to-yellow-500 p-3 rounded-lg inline-flex mb-4 shadow">
              <FaSeedling className="text-amber-100 text-2xl" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Biodiversidade</h3>
            <ul className="space-y-3 text-amber-100">
              <li className="flex items-start gap-2">
                <span className="text-amber-400 text-xl">•</span>
                <span>
                  <strong>Flora:</strong> Plantas xerófitas como cactos, suculentas e arbustos de raízes profundas adaptadas à escassez de água
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-400 text-xl">•</span>
                <span>
                  <strong>Fauna:</strong> Animais adaptados à escassez de água e calor extremo, como camelos, lagartos, escorpiões e raposas-do-deserto
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-400 text-xl">•</span>
                <span>
                  <strong>Adaptações:</strong> Atividade noturna, estivação, capacidade de armazenar água e mecanismos de conservação hídrica
                </span>
              </li>
            </ul>
          </div>

          <div
            ref={contentRefs[3]}
            className="bg-gradient-to-br from-amber-800/70 to-amber-900/70 rounded-2xl p-7 shadow-xl border border-amber-700/30 opacity-0 transition-all duration-1000 hover:shadow-amber-400/40 hover:-translate-y-2 hover:scale-[1.03]"
          >
            <div className="bg-gradient-to-tr from-amber-700 to-yellow-500 p-3 rounded-lg inline-flex mb-4 shadow">
              <FaExclamationTriangle className="text-amber-100 text-2xl" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Importância e Ameaças</h3>
            <div className="space-y-4 text-amber-100">
              <div>
                <h4 className="font-semibold text-white">Importância:</h4>
                <p className="mt-1">
                  Os desertos são reservatórios de biodiversidade única, fontes de minerais e energia solar, além de possuírem valor cultural e histórico para muitas civilizações.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-white">Ameaças:</h4>
                <p className="mt-1">
                  Desertificação acelerada, mudanças climáticas, mineração não sustentável, uso excessivo de aquíferos e turismo não controlado ameaçam estes ecossistemas frágeis.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-amber-800/60 to-yellow-900/40 p-8 rounded-2xl shadow-xl max-w-4xl mx-auto border border-amber-700/20">
          <h3 className="text-2xl font-bold mb-4 text-center text-yellow-200 drop-shadow">Você Sabia?</h3>
          <p className="text-lg text-amber-100 leading-relaxed text-center mb-0">
            O Deserto do Saara, o maior deserto quente do mundo, já foi uma savana verdejante há apenas 6.000 anos. Ciclos climáticos naturais transformaram gradualmente a região, e evidências arqueológicas mostram pinturas rupestres de girafas e outros animais que habitavam essa área.
          </p>
        </div>
      </div>
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeIn {
            animation: fadeIn 1s ease forwards;
          }
          @keyframes bounce-slow {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-8px); }
          }
          .animate-bounce-slow {
            animation: bounce-slow 2.5s infinite;
          }
        `
      }} />
    </div>
  )
}
