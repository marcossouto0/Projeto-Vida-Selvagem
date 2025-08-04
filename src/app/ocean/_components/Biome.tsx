'use client'

import Image from 'next/image'
import { useRef, useEffect, useMemo } from 'react'
import {
  FaWater,
  FaMapMarkedAlt,
  FaCloudRain,
  FaFish,
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
      className="bg-gradient-to-b from-blue-950 to-blue-900 text-white py-16 md:py-24"
    >
      <div className="container mx-auto px-5 md:px-15 lg:px-30">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-blue-700 rounded-full mb-6">
            <FaWater className="text-blue-100 text-3xl" />
          </div>
          <h2
            ref={titleRef}
            className="text-4xl md:text-5xl font-bold mb-6 opacity-0 transition-opacity duration-1000"
          >
            Oceanos: O Maior Ecossistema da Terra
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-8 rounded-full"></div>
          <p
            ref={descriptionRef}
            className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed opacity-0 transition-opacity duration-1000"
          >
            Vastos, profundos e misteriosos. Os oceanos cobrem mais de 70% da
            superfície terrestre, regulam nosso clima, produzem metade do
            oxigênio que respiramos e abrigam uma biodiversidade extraordinária.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div
            ref={imageRef}
            className="relative rounded-xl overflow-hidden shadow-2xl opacity-0 duration-1000 transform translate-y-8 hover:shadow-[0_0_25px_rgba(37,99,235,0.4)] transition-all"
          >
            <Image
              src="/ocean_2.jpg"
              alt="Paisagem subaquática mostrando recifes de coral e biodiversidade marinha"
              width={600}
              height={400}
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
              <p className="text-white/90 p-4 text-sm italic">
                Os oceanos abrigam mais de 80% de toda a vida do planeta, a
                maioria ainda desconhecida pela ciência
              </p>
            </div>
          </div>

          <div
            ref={contentRefs[0]}
            className="opacity-0 transition-all duration-1000 transform translate-y-8"
          >
            <h3 className="text-3xl md:text-4xl font-bold mb-6 flex items-center">
              <span className="bg-blue-700 p-2 rounded-lg mr-3 inline-flex">
                <FaMapMarkedAlt className="text-blue-100" />
              </span>
              O Que São os Oceanos?
            </h3>
            <p className="text-lg text-blue-100 leading-relaxed mb-6">
              Os oceanos são vastas extensões de água salgada que cobrem mais de
              70% da superfície terrestre. São divididos em quatro principais:
              Pacífico, Atlântico, Índico e Ártico, cada um com
              características únicas.
            </p>
            <p className="text-lg text-blue-100 leading-relaxed">
              Mais do que simples massas de água, são ecossistemas complexos que
              sustentam a vida na Terra, regulam o clima global e garantem a
              estabilidade dos ciclos biogeoquímicos do planeta.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          <div
            ref={contentRefs[1]}
            className="bg-blue-800/50 rounded-xl p-6 shadow-lg border border-blue-700/30 opacity-0 duration-1000 transform translate-y-8 hover:shadow-[0_0_15px_rgba(37,99,235,0.3)] hover:-translate-y-1 transition-all"
          >
            <div className="bg-blue-700 p-3 rounded-lg inline-flex mb-4">
              <FaCloudRain className="text-blue-100 text-2xl" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Clima e Características</h3>
            <ul className="space-y-3 text-blue-100">
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">•</span>
                <span>
                  <strong>Profundidade:</strong> Média de 3.700 metros, com o
                  ponto mais profundo atingindo 11.000 metros na Fossa das
                  Marianas
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">•</span>
                <span>
                  <strong>Temperatura:</strong> Varia de -2°C nas regiões
                  polares a mais de 30°C em mares tropicais
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">•</span>
                <span>
                  <strong>Salinidade:</strong> Média de 35 g de sal por litro de
                  água, com variações regionais
                </span>
              </li>
            </ul>
          </div>

          <div
            ref={contentRefs[2]}
            className="bg-blue-800/50 rounded-xl p-6 shadow-lg border border-blue-700/30 opacity-0 transition-all duration-1000 transform translate-y-8 hover:shadow-[0_0_15px_rgba(37,99,235,0.3)] hover:-translate-y-1"
          >
            <div className="bg-blue-700 p-3 rounded-lg inline-flex mb-4">
              <FaFish className="text-blue-100 text-2xl" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Biodiversidade</h3>
            <ul className="space-y-3 text-blue-100">
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">•</span>
                <span>
                  <strong>Espécies:</strong> Mais de 230.000 espécies
                  conhecidas, com estimativas de que mais de 2 milhões ainda
                  estão por ser descobertas
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">•</span>
                <span>
                  <strong>Ecossistemas:</strong> Recifes de coral, florestas de
                  kelp, abismos profundos, montes submarinos e muitos outros
                  habitats únicos
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">•</span>
                <span>
                  <strong>Zonas:</strong> Divididos em diferentes zonas de
                  profundidade, cada uma com espécies adaptadas às condições
                  específicas
                </span>
              </li>
            </ul>
          </div>

          <div
            ref={contentRefs[3]}
            className="bg-blue-800/50 rounded-xl p-6 shadow-lg border border-blue-700/30 opacity-0 transform translate-y-8 hover:shadow-[0_0_15px_rgba(37,99,235,0.3)] hover:-translate-y-1 transition-all duration-1000"
          >
            <div className="bg-blue-700 p-3 rounded-lg inline-flex mb-4">
              <FaExclamationTriangle className="text-blue-100 text-2xl" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Importância e Ameaças</h3>
            <div className="space-y-4 text-blue-100">
              <div>
                <h4 className="font-semibold text-white">Importância:</h4>
                <p className="mt-1">
                  Regulação climática, produção de oxigênio, ciclo hidrológico,
                  fonte de alimento, medicamentos e recursos energéticos para
                  bilhões de pessoas.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-white">Ameaças:</h4>
                <p className="mt-1">
                  Aquecimento e acidificação dos oceanos, poluição plástica,
                  sobrepesca, destruição de habitats e exploração mineral
                  descontrolada.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-blue-800/30 p-8 rounded-xl shadow-lg max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-4 text-center">Você Sabia?</h3>
          <p className="text-lg text-blue-100 leading-relaxed text-center mb-0">
            Os oceanos contêm 97% de toda a água da Terra e foram explorados em
            menos de 5% de sua extensão. Cientistas estimam que conhecemos
            melhor a superfície da Lua e de Marte do que o fundo dos nossos
            oceanos.
          </p>
        </div>
      </div>
    </div>
  )
}
