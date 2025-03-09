'use client'

import Image from 'next/image'
import { useRef, useEffect } from 'react'
import {
  FaLeaf,
  FaMapMarkedAlt,
  FaCloud,
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
      className="bg-gradient-to-b from-yellow-900 to-yellow-800 text-white py-16 md:py-24"
    >
      <div className="container mx-auto px-5 md:px-15 lg:px-30">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-yellow-600 rounded-full mb-6">
            <FaLeaf className="text-yellow-100 text-3xl" />
          </div>
          <h2
            ref={titleRef}
            className="text-4xl md:text-5xl font-bold mb-6 opacity-0 transition-opacity duration-1000"
          >
            Campos: Os Oceanos de Gramíneas
          </h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-8 rounded-full"></div>
          <p
            ref={descriptionRef}
            className="text-xl md:text-2xl text-yellow-100 max-w-4xl mx-auto leading-relaxed opacity-0 transition-opacity duration-1000"
          >
            Vastos, dinâmicos e produtivos. Os campos nativos são ecossistemas
            dominados por gramíneas que cobrem cerca de 40% da superfície
            terrestre e sustentam uma biodiversidade única adaptada a espaços
            abertos.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div
            ref={imageRef}
            className="relative rounded-xl overflow-hidden shadow-2xl opacity-0 transform translate-y-8 hover:shadow-[0_0_25px_rgba(234,179,8,0.4)] transition-all duration-500"
          >
            <Image
              src="/grasslands_2.jpg"
              alt="Paisagem de campos com gramíneas douradas ao vento"
              width={600}
              height={400}
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
              <p className="text-white/90 p-4 text-sm italic">
                Os campos são ecossistemas caracterizados por vastas extensões
                de gramíneas e poucas árvores
              </p>
            </div>
          </div>

          <div
            ref={contentRefs[0]}
            className="opacity-0 transition-all duration-1000 transform translate-y-8"
          >
            <h3 className="text-3xl md:text-4xl font-bold mb-6 flex items-center">
              <span className="bg-yellow-600 p-2 rounded-lg mr-3 inline-flex">
                <FaMapMarkedAlt className="text-yellow-100" />
              </span>
              O Que São os Campos?
            </h3>
            <p className="text-lg text-yellow-100 leading-relaxed mb-6">
              Os campos são biomas caracterizados por vastas extensões de
              gramíneas com poucas ou nenhuma árvore. Eles formam um dos maiores
              biomas terrestres, ocorrendo em todos os continentes exceto na
              Antártida.
            </p>
            <p className="text-lg text-yellow-100 leading-relaxed">
              Existem dois tipos principais: as pradarias temperadas (como as
              Grandes Planícies norte-americanas) e as savanas tropicais, cada
              uma com vegetação, clima e fauna adaptados a condições
              específicas.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          <div
            ref={contentRefs[1]}
            className="bg-yellow-800/50 rounded-xl p-6 shadow-lg border border-yellow-700/30 opacity-0 transition-all duration-1000 transform translate-y-8 hover:shadow-[0_0_15px_rgba(234,179,8,0.3)] hover:-translate-y-1"
          >
            <div className="bg-yellow-600 p-3 rounded-lg inline-flex mb-4">
              <FaCloud className="text-yellow-100 text-2xl" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Clima e Localização</h3>
            <ul className="space-y-3 text-yellow-100">
              <li className="flex items-start">
                <span className="text-yellow-400 mr-2">•</span>
                <span>
                  <strong>Clima:</strong> Precipitação moderada (500-900mm/ano),
                  com estações secas e úmidas bem definidas
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-400 mr-2">•</span>
                <span>
                  <strong>Temperatura:</strong> Varia de região para região, com
                  extremos nas áreas continentais
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-400 mr-2">•</span>
                <span>
                  <strong>Localização:</strong> Grandes Planícies da América do
                  Norte, Pampas da América do Sul, Estepes da Ásia Central e
                  Pradarias Europeias
                </span>
              </li>
            </ul>
          </div>

          <div
            ref={contentRefs[2]}
            className="bg-yellow-800/50 rounded-xl p-6 shadow-lg border border-yellow-700/30 opacity-0 transition-all duration-1000 transform translate-y-8 hover:shadow-[0_0_15px_rgba(234,179,8,0.3)] hover:-translate-y-1"
          >
            <div className="bg-yellow-600 p-3 rounded-lg inline-flex mb-4">
              <FaSeedling className="text-yellow-100 text-2xl" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Biodiversidade</h3>
            <ul className="space-y-3 text-yellow-100">
              <li className="flex items-start">
                <span className="text-yellow-400 mr-2">•</span>
                <span>
                  <strong>Flora:</strong> Gramíneas dominantes, flores
                  silvestres e ervas com raízes profundas adaptadas a secas
                  periódicas e pastoreio
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-400 mr-2">•</span>
                <span>
                  <strong>Fauna:</strong> Grandes herbívoros (bisões, antílopes,
                  cavalos selvagens), predadores (lobos, leões, águias) e
                  pequenos mamíferos e aves de pastagem
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-400 mr-2">•</span>
                <span>
                  <strong>Solo:</strong> Rico em matéria orgânica, formando
                  alguns dos solos mais férteis do mundo
                </span>
              </li>
            </ul>
          </div>

          <div
            ref={contentRefs[3]}
            className="bg-yellow-800/50 rounded-xl p-6 shadow-lg border border-yellow-700/30 opacity-0 transition-all duration-1000 transform translate-y-8 hover:shadow-[0_0_15px_rgba(234,179,8,0.3)] hover:-translate-y-1"
          >
            <div className="bg-yellow-600 p-3 rounded-lg inline-flex mb-4">
              <FaExclamationTriangle className="text-yellow-100 text-2xl" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Importância e Ameaças</h3>
            <div className="space-y-4 text-yellow-100">
              <div>
                <h4 className="font-semibold text-white">Importância:</h4>
                <p className="mt-1">
                  Os campos desempenham papel crucial na segurança alimentar
                  global, sustentando pecuária e agricultura, além de serem
                  vitais para o ciclo da água e sequestro de carbono.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-white">Ameaças:</h4>
                <p className="mt-1">
                  Conversão para agricultura, urbanização, pastoreio excessivo,
                  espécies invasoras e mudanças climáticas ameaçam estes biomas,
                  tornando-os um dos mais ameaçados mundialmente.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-yellow-700/30 p-8 rounded-xl shadow-lg max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-4 text-center">Você Sabia?</h3>
          <p className="text-lg text-yellow-100 leading-relaxed text-center mb-0">
            As raízes das gramíneas dos campos podem chegar a mais de 3 metros
            de profundidade, permitindo que as plantas sobrevivam a secas
            prolongadas e criando vastos sistemas subterrâneos que armazenam
            enormes quantidades de carbono.
          </p>
        </div>
      </div>
    </div>
  )
}
