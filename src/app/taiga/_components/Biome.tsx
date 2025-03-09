'use client'

import Image from 'next/image'
import { useRef, useEffect } from 'react'
import {
  FaGlobeAmericas,
  FaMapMarkerAlt,
  FaTree,
  FaLeaf,
  FaSnowflake
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
      className="bg-gradient-to-b from-emerald-950 to-emerald-900 text-white py-16 md:py-24 opacity-0 transition-opacity duration-1000"
    >
      <div className="container mx-auto px-5 md:px-15 lg:px-30">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-emerald-700 rounded-full mb-6">
            <FaGlobeAmericas className="text-emerald-100 text-3xl" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Taiga: A Maior Floresta do Mundo
          </h2>
          <div className="w-24 h-1 bg-emerald-500 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl md:text-2xl text-emerald-100 max-w-4xl mx-auto leading-relaxed">
            Vasta, resiliente e misteriosa. A taiga é a maior floresta do
            planeta, um cinturão verde que circunda o Hemisfério Norte e abriga
            uma biodiversidade adaptada aos invernos rigorosos.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div
            ref={(el: HTMLDivElement | null) => {
              contentRefs.current[0] = el;
            }}
            className="relative rounded-xl overflow-hidden shadow-2xl opacity-0 transition-all duration-1000 transform translate-y-8"
          >
            <Image
              src="/taiga_2.jpg"
              alt="Paisagem da Taiga com coníferas e neve"
              width={600}
              height={400}
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
              <p className="text-white/90 p-4 text-sm italic">
                Floresta boreal durante o inverno, com suas características
                coníferas cobertas de neve
              </p>
            </div>
          </div>

          <div
            ref={(el: HTMLDivElement | null) => {
              contentRefs.current[1] = el;
            }}
            className="opacity-0 transition-all duration-1000 transform translate-y-8"
          >
            <h3 className="text-3xl md:text-4xl font-bold mb-6 flex items-center">
              <span className="bg-emerald-700 p-2 rounded-lg mr-3 inline-flex">
                <FaLeaf className="text-emerald-100" />
              </span>
              O Que é a Taiga?
            </h3>
            <p className="text-lg text-emerald-100 leading-relaxed mb-6">
              A taiga, também conhecida como floresta boreal, é o maior bioma
              terrestre do mundo, formando um vasto cinturão de florestas de
              coníferas que circunda o Hemisfério Norte abaixo da tundra ártica.
            </p>
            <p className="text-lg text-emerald-100 leading-relaxed">
              Caracterizada por invernos longos e rigorosos e verões curtos, a
              taiga é dominada por coníferas como pinheiros, abetos e larício,
              adaptadas para suportar o frio extremo e a neve pesada, com suas
              folhas em forma de agulha e troncos cônicos.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          <div
            ref={(el: HTMLDivElement | null) => {
              contentRefs.current[2] = el;
            }}
            className="bg-emerald-800/50 rounded-xl p-6 shadow-lg border border-emerald-700/30 opacity-0 transition-all duration-1000 transform translate-y-8"
          >
            <div className="bg-emerald-700 p-3 rounded-lg inline-flex mb-4">
              <FaMapMarkerAlt className="text-emerald-100 text-2xl" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Onde Encontramos?</h3>
            <p className="text-emerald-100 leading-relaxed">
              A taiga forma um cinturão quase contínuo através do Hemisfério
              Norte, cobrindo vastas áreas da América do Norte, Europa e Ásia.
            </p>
            <ul className="mt-4 space-y-2 text-emerald-100">
              <li className="flex items-start">
                <span className="text-emerald-400 mr-2">•</span>
                <span>América do Norte: Canadá e Alasca</span>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-400 mr-2">•</span>
                <span>Europa: Escandinávia e norte da Rússia</span>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-400 mr-2">•</span>
                <span>Ásia: Sibéria, norte da China e Japão</span>
              </li>
            </ul>
          </div>

          <div
            ref={(el: HTMLDivElement | null) => {
              contentRefs.current[3] = el;
            }}
            className="bg-emerald-800/50 rounded-xl p-6 shadow-lg border border-emerald-700/30 opacity-0 transition-all duration-1000 transform translate-y-8"
          >
            <div className="bg-emerald-700 p-3 rounded-lg inline-flex mb-4">
              <FaSnowflake className="text-emerald-100 text-2xl" />
            </div>
            <h3 className="text-2xl font-bold mb-4">
              Principais Características
            </h3>
            <ul className="space-y-3 text-emerald-100">
              <li className="flex items-start">
                <span className="text-emerald-400 mr-2">•</span>
                <span>
                  <strong>Clima:</strong> Invernos longos e frios, verões curtos
                  e amenos
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-400 mr-2">•</span>
                <span>
                  <strong>Solo:</strong> Ácido e pobre em nutrientes,
                  frequentemente coberto por uma camada de agulhas de pinheiro
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-400 mr-2">•</span>
                <span>
                  <strong>Vegetação:</strong> Dominada por coníferas (pinheiros,
                  abetos, larício) com poucas espécies decíduas
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-400 mr-2">•</span>
                <span>
                  <strong>Biodiversidade:</strong> Adaptada ao frio, com animais
                  que hibernam ou migram durante o inverno
                </span>
              </li>
            </ul>
          </div>

          <div
            ref={(el: HTMLDivElement | null) => {
              contentRefs.current[4] = el;
            }}
            className="bg-emerald-800/50 rounded-xl p-6 shadow-lg border border-emerald-700/30 opacity-0 transition-all duration-1000 transform translate-y-8"
          >
            <div className="bg-emerald-700 p-3 rounded-lg inline-flex mb-4">
              <FaTree className="text-emerald-100 text-2xl" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Importância e Ameaças</h3>
            <div className="space-y-4 text-emerald-100">
              <div>
                <h4 className="font-semibold text-white">Importância:</h4>
                <p className="mt-1">
                  Maior sumidouro de carbono terrestre, regulação do clima
                  global, filtração de água, habitat para espécies únicas e
                  fonte de recursos madeireiros.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-white">Ameaças:</h4>
                <p className="mt-1">
                  Desmatamento para extração de madeira, mineração, exploração
                  de petróleo e gás, incêndios florestais intensificados pelas
                  mudanças climáticas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
