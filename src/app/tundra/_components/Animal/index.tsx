'use client'

import Image from 'next/image'
import { useRef, useEffect, useState } from 'react'
import {
  FaPaw,
  FaInfoCircle,
  FaExclamationTriangle,
  FaSnowflake,
  FaChevronRight
} from 'react-icons/fa'

export default function Animal() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)
  const contentRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    setIsVisible(true)

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

    contentRefs.current.forEach(ref => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={sectionRef}
      className={`bg-gradient-to-b from-blue-100 via-blue-200 to-blue-300 text-blue-950 py-16 md:py-24 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center p-4 bg-blue-600 rounded-full mb-8 transform hover:scale-110 transition-transform duration-300 shadow-lg">
            <FaPaw className="text-blue-100 text-4xl animate-pulse" />
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-blue-900 to-blue-600 bg-clip-text text-transparent">
            Rena: A Viajante da Tundra
          </h2>
          <div className="w-32 h-2 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto mb-10 rounded-full"></div>
          <p className="text-2xl md:text-3xl text-blue-800 max-w-4xl mx-auto leading-relaxed font-light">
            Viajantes incansáveis, as renas percorrem milhares de quilômetros
            para sobreviver. Mas o aquecimento global ameaça seu habitat.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div
            ref={(el: HTMLDivElement | null) => {
              contentRefs.current[0] = el;
            }}
            className="order-2 lg:order-1 opacity-0 transition-all duration-1000"
          >
            <h3 className="text-4xl font-bold mb-8 flex items-center group">
              <span className="bg-gradient-to-r from-blue-600 to-blue-500 p-3 rounded-xl mr-4 inline-flex shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                <FaInfoCircle className="text-white text-2xl" />
              </span>
              <span className="bg-gradient-to-r from-blue-900 to-blue-700 bg-clip-text text-transparent">
                Características
              </span>
            </h3>
            <div className="space-y-8">
              <p className="text-xl text-blue-800 leading-relaxed">
                A rena (<em>Rangifer tarandus</em>), também conhecida como
                caribu na América do Norte, é um cervídeo perfeitamente adaptado
                aos ambientes frios. Possui pelagem densa e oca que proporciona
                excelente isolamento térmico, mudando de cor conforme as
                estações - mais escura no verão e mais clara no inverno para
                camuflagem.
              </p>
              <p className="text-xl text-blue-800 leading-relaxed">
                Uma característica única é que tanto machos quanto fêmeas
                possuem chifres, caso raro entre os cervídeos. Seus cascos
                largos funcionam como &quot;raquetes de neve&quot; e como pás
                para escavar o solo em busca de líquens sob a neve.
              </p>
              <div className="bg-gradient-to-br from-blue-400/30 to-blue-300/30 p-6 rounded-2xl border border-blue-400/50 backdrop-blur-sm transform hover:scale-[1.02] transition-transform duration-300">
                <h4 className="font-bold text-blue-900 text-xl flex items-center">
                  <FaSnowflake className="mr-3 text-blue-600 animate-spin-slow" /> 
                  Curiosidade:
                </h4>
                <p className="text-blue-800 mt-4 text-lg">
                  As renas conseguem enxergar luz ultravioleta, uma adaptação
                  que as ajuda a identificar líquens e predadores na paisagem
                  branca da neve, onde a luz reflete intensamente e pode causar
                  &quot;cegueira da neve&quot; em outros animais.
                </p>
              </div>
            </div>
          </div>

          <div
            ref={(el: HTMLDivElement | null) => {
              contentRefs.current[1] = el;
            }}
            className="order-1 lg:order-2 relative rounded-2xl overflow-hidden shadow-2xl opacity-0 transition-all duration-1000 group"
          >
            <Image
              src="/reindeer.jpg"
              alt="Grupo de renas migrando através da tundra coberta de neve"
              width={800}
              height={600}
              className="w-full h-auto object-cover transform group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex items-end">
              <p className="text-white p-6 text-lg italic font-light">
                Renas durante sua migração sazonal, uma jornada que pode cobrir
                mais de 5.000 km por ano
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-16">
          <div
            ref={(el: HTMLDivElement | null) => {
              contentRefs.current[2] = el;
            }}
            className="bg-gradient-to-br from-blue-400/30 to-blue-300/30 rounded-2xl p-8 shadow-xl border border-blue-400/50 opacity-0 transition-all duration-1000 hover:shadow-2xl transform hover:-translate-y-2"
          >
            <h3 className="text-2xl font-bold mb-6 text-blue-900">Comportamento e Habitat</h3>
            <p className="text-lg text-blue-800 leading-relaxed mb-6">
              As renas são animais altamente sociais e migratórios, formando
              grandes rebanhos que podem conter milhares de indivíduos. Suas
              migrações sazonais estão entre as mais longas de qualquer mamífero
              terrestre.
            </p>
            <p className="text-lg text-blue-800 leading-relaxed">
              Habitam a tundra ártica e subártica, bem como florestas boreais
              (taiga) do norte da Europa, Ásia e América do Norte. Sua dieta
              varia conforme as estações, consistindo principalmente de líquens
              no inverno e plantas herbáceas no verão.
            </p>
          </div>

          <div
            ref={(el: HTMLDivElement | null) => {
              contentRefs.current[3] = el;
            }}
            className="bg-gradient-to-br from-blue-400/30 to-blue-300/30 rounded-2xl p-8 shadow-xl border border-blue-400/50 opacity-0 transition-all duration-1000 hover:shadow-2xl transform hover:-translate-y-2"
          >
            <h3 className="text-2xl font-bold mb-6 text-blue-900">
              Importância Ecológica e Cultural
            </h3>
            <ul className="space-y-4 text-lg text-blue-800">
              <li className="flex items-start group">
                <FaChevronRight className="text-blue-600 mr-3 mt-1.5 group-hover:translate-x-2 transition-transform duration-300" />
                <span>
                  <strong>Ecológica:</strong> Espécie-chave que influencia a
                  vegetação da tundra através do pastoreio e dispersão de
                  sementes
                </span>
              </li>
              <li className="flex items-start group">
                <FaChevronRight className="text-blue-600 mr-3 mt-1.5 group-hover:translate-x-2 transition-transform duration-300" />
                <span>
                  <strong>Cultural:</strong> Fundamental para povos indígenas do
                  Ártico como os Sami e Inuit, fornecendo alimento, vestuário e
                  transporte
                </span>
              </li>
              <li className="flex items-start group">
                <FaChevronRight className="text-blue-600 mr-3 mt-1.5 group-hover:translate-x-2 transition-transform duration-300" />
                <span>
                  <strong>Econômica:</strong> Base da subsistência de
                  comunidades tradicionais e importante para o ecoturismo em
                  regiões árticas
                </span>
              </li>
              <li className="flex items-start group">
                <FaChevronRight className="text-blue-600 mr-3 mt-1.5 group-hover:translate-x-2 transition-transform duration-300" />
                <span>
                  <strong>Simbólica:</strong> Figura central em tradições
                  natalinas como as &quot;renas do Papai Noel&quot;
                </span>
              </li>
            </ul>
          </div>

          <div
            ref={(el: HTMLDivElement | null) => {
              contentRefs.current[4] = el;
            }}
            className="bg-gradient-to-br from-blue-400/30 to-blue-300/30 rounded-2xl p-8 shadow-xl border border-blue-400/50 opacity-0 transition-all duration-1000 hover:shadow-2xl transform hover:-translate-y-2"
          >
            <h3 className="text-2xl font-bold mb-6 flex items-center text-blue-900">
              <FaExclamationTriangle className="text-blue-600 mr-3" />
              Status de Conservação
            </h3>
            <p className="text-lg text-blue-800 leading-relaxed mb-6">
              Muitas populações de renas estão em declínio, com algumas
              subespécies classificadas como <strong>Vulneráveis</strong> ou{' '}
              <strong>Em Perigo</strong> pela IUCN. Globalmente, as populações
              diminuíram cerca de 40% nas últimas duas décadas.
            </p>
            <div className="bg-blue-500/10 p-6 rounded-xl">
              <h4 className="font-bold text-blue-900 text-xl mb-4">Principais ameaças:</h4>
              <ul className="space-y-3 text-lg text-blue-800">
                <li className="flex items-start group">
                  <FaChevronRight className="text-blue-600 mr-3 mt-1.5 group-hover:translate-x-2 transition-transform duration-300" />
                  <span>
                    Mudanças climáticas alterando padrões de neve e
                    disponibilidade de alimentos
                  </span>
                </li>
                <li className="flex items-start group">
                  <FaChevronRight className="text-blue-600 mr-3 mt-1.5 group-hover:translate-x-2 transition-transform duration-300" />
                  <span>
                    Desenvolvimento industrial e exploração de recursos no
                    Ártico
                  </span>
                </li>
                <li className="flex items-start group">
                  <FaChevronRight className="text-blue-600 mr-3 mt-1.5 group-hover:translate-x-2 transition-transform duration-300" />
                  <span>
                    Fragmentação de habitat por infraestrutura e barreiras à
                    migração
                  </span>
                </li>
                <li className="flex items-start group">
                  <FaChevronRight className="text-blue-600 mr-3 mt-1.5 group-hover:translate-x-2 transition-transform duration-300" />
                  <span>Caça excessiva em algumas regiões</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
