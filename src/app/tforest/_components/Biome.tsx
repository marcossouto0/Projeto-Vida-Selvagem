'use client'

import Image from 'next/image'
import { useRef, useEffect, useMemo } from 'react'
import {
  FaTree,
  FaMapMarkedAlt,
  FaCloudSun,
  FaLeaf,
  FaWater
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
      className="bg-gradient-to-b from-green-950 to-green-900 text-white py-16 md:py-24"
    >
      <div className="container mx-auto px-5 md:px-15 lg:px-30">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-green-700 rounded-full mb-6">
            <FaTree className="text-green-100 text-3xl" />
          </div>
          <h2
            ref={titleRef}
            className="text-4xl md:text-5xl font-bold mb-6 opacity-0 transition-opacity duration-1000"
          >
            Floresta Temperada: O Refúgio Verde
          </h2>
          <div className="w-24 h-1 bg-green-500 mx-auto mb-8 rounded-full"></div>
          <p
            ref={descriptionRef}
            className="text-xl md:text-2xl text-green-100 max-w-4xl mx-auto leading-relaxed opacity-0 transition-opacity duration-1000"
          >
            As florestas temperadas são conhecidas por suas estações bem
            definidas e rica biodiversidade. Elas desempenham um papel crucial
            na regulação do clima e na preservação de espécies ameaçadas.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div
            ref={imageRef}
            className="relative rounded-xl overflow-hidden shadow-2xl opacity-0 transition-all duration-1000 transform translate-y-8 group"
          >
            <Image
              src="/tforest_2.jpg"
              alt="Paisagem da Floresta Temperada com árvores e folhas coloridas"
              width={600}
              height={400}
              className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
              <p className="text-white/90 p-4 text-sm italic">
                Floresta temperada durante o outono, com suas características
                folhas coloridas
              </p>
            </div>
          </div>

          <div
            ref={contentRefs[0]}
            className="opacity-0 transition-all duration-1000 transform translate-y-8"
          >
            <h3 className="text-3xl md:text-4xl font-bold mb-6 flex items-center">
              <span className="bg-green-700 p-2 rounded-lg mr-3 inline-flex">
                <FaMapMarkedAlt className="text-green-100" />
              </span>
              O Que é a Floresta Temperada?
            </h3>
            <p className="text-lg text-green-100 leading-relaxed mb-6">
              A floresta temperada é caracterizada por suas quatro estações bem
              definidas, com verões quentes e invernos frios. Ela abriga uma
              grande variedade de árvores decíduas e coníferas, além de uma rica
              fauna adaptada às mudanças sazonais.
            </p>
            <p className="text-lg text-green-100 leading-relaxed">
              Este bioma é encontrado principalmente nas regiões temperadas do
              hemisfério norte, incluindo partes da América do Norte, Europa e
              Ásia.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          <div
            ref={contentRefs[1]}
            className="bg-green-800/50 rounded-xl p-6 shadow-lg border border-green-700/30 opacity-0 transition-all duration-1000 transform translate-y-8 group hover:-translate-y-2"
          >
            <div className="bg-green-700 p-3 rounded-lg inline-flex mb-4">
              <FaCloudSun className="text-green-100 text-2xl" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Clima e Estações</h3>
            <ul className="space-y-3 text-green-100">
              <li className="flex items-start">
                <span className="text-green-400 mr-2">•</span>
                <span>
                  <strong>Verão:</strong> Quente e úmido, ideal para o
                  crescimento das plantas
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2">•</span>
                <span>
                  <strong>Outono:</strong> Folhas coloridas e queda de
                  temperatura
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2">•</span>
                <span>
                  <strong>Inverno:</strong> Frio e com neve em algumas regiões
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2">•</span>
                <span>
                  <strong>Primavera:</strong> Florescimento e aumento da
                  atividade animal
                </span>
              </li>
            </ul>
          </div>

          <div
            ref={contentRefs[2]}
            className="bg-green-800/50 rounded-xl p-6 shadow-lg border border-green-700/30 opacity-0 transition-all duration-1000 transform translate-y-8 group hover:-translate-y-2"
          >
            <div className="bg-green-700 p-3 rounded-lg inline-flex mb-4">
              <FaLeaf className="text-green-100 text-2xl" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Biodiversidade</h3>
            <ul className="space-y-3 text-green-100">
              <li className="flex items-start">
                <span className="text-green-400 mr-2">•</span>
                <span>
                  <strong>Flora:</strong> Árvores decíduas como carvalhos, faias
                  e bordos
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2">•</span>
                <span>
                  <strong>Fauna:</strong> Ursos, veados, raposas e uma variedade
                  de aves
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2">•</span>
                <span>
                  <strong>Ecossistemas:</strong> Rios, lagos e florestas densas
                </span>
              </li>
            </ul>
          </div>

          <div
            ref={contentRefs[3]}
            className="bg-green-800/50 rounded-xl p-6 shadow-lg border border-green-700/30 opacity-0 transition-all duration-1000 transform translate-y-8 group hover:-translate-y-2"
          >
            <div className="bg-green-700 p-3 rounded-lg inline-flex mb-4">
              <FaWater className="text-green-100 text-2xl" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Importância e Ameaças</h3>
            <div className="space-y-4 text-green-100">
              <div>
                <h4 className="font-semibold text-white">Importância:</h4>
                <p className="mt-1">
                  As florestas temperadas são essenciais para a regulação do
                  clima, fornecimento de recursos naturais e habitat para
                  inúmeras espécies.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-white">Ameaças:</h4>
                <p className="mt-1">
                  Desmatamento, mudanças climáticas e fragmentação de habitat
                  são as principais ameaças enfrentadas por este bioma.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-green-800/30 p-8 rounded-xl shadow-lg max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-4 text-center">Você Sabia?</h3>
          <p className="text-lg text-green-100 leading-relaxed text-center mb-0">
            As florestas temperadas já cobriram grande parte da Europa, América
            do Norte e Ásia. Hoje, restam menos de 20% de sua extensão original
            devido à ação humana. A proteção desse bioma é crucial para manter o
            equilíbrio climático global.
          </p>
        </div>
      </div>
    </div>
  )
}
