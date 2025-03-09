'use client'

import { useRef, useEffect, useState } from 'react'
import { FaBook, FaExternalLinkAlt } from 'react-icons/fa'

export default function References() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div
      ref={sectionRef}
      className={`bg-gradient-to-b from-yellow-50 to-yellow-100 py-16 transition-opacity duration-1000 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="container mx-auto px-5 md:px-15 lg:px-30">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-3 bg-yellow-600 rounded-full mb-6">
            <FaBook className="text-yellow-50 text-3xl" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-2 text-yellow-900">
            Referências
          </h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-4 rounded-full"></div>
          <p className="text-lg text-yellow-700 max-w-2xl mx-auto">
            Fontes consultadas para a criação deste conteúdo sobre os campos e o
            bisão americano
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="p-1 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600"></div>
          <div className="p-8">
            <ul className="space-y-6">
              <li className="transition-all duration-300 hover:-translate-y-1">
                <a
                  href="https://www.worldwildlife.org/biomes/temperate-grasslands-savannas-and-shrublands"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start p-4 rounded-lg border border-yellow-200 bg-yellow-50 hover:bg-yellow-100 hover:shadow-md transition-all duration-300"
                >
                  <div className="flex-shrink-0 bg-yellow-500 p-2 rounded text-white mr-4">
                    <FaExternalLinkAlt />
                  </div>
                  <div>
                    <p className="font-medium text-yellow-900">
                      World Wildlife Fund
                    </p>
                    <p className="text-yellow-700 text-sm">
                      Informações sobre campos temperados, savanas e arbustos,
                      incluindo distribuição geográfica e características
                      ecológicas
                    </p>
                    <p className="text-yellow-500 text-xs mt-1">
                      worldwildlife.org/biomes/temperate-grasslands-savannas-and-shrublands
                    </p>
                  </div>
                </a>
              </li>

              <li className="transition-all duration-300 hover:-translate-y-1">
                <a
                  href="https://www.nationalgeographic.org/encyclopedia/grassland-biome/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start p-4 rounded-lg border border-yellow-200 bg-yellow-50 hover:bg-yellow-100 hover:shadow-md transition-all duration-300"
                >
                  <div className="flex-shrink-0 bg-yellow-500 p-2 rounded text-white mr-4">
                    <FaExternalLinkAlt />
                  </div>
                  <div>
                    <p className="font-medium text-yellow-900">
                      National Geographic
                    </p>
                    <p className="text-yellow-700 text-sm">
                      Enciclopédia sobre o bioma dos campos, descrevendo sua
                      formação, características e biodiversidade
                    </p>
                    <p className="text-yellow-500 text-xs mt-1">
                      nationalgeographic.org/encyclopedia/grassland-biome/
                    </p>
                  </div>
                </a>
              </li>

              <li className="transition-all duration-300 hover:-translate-y-1">
                <a
                  href="https://www.iucnredlist.org/species/2815/123789863"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start p-4 rounded-lg border border-yellow-200 bg-yellow-50 hover:bg-yellow-100 hover:shadow-md transition-all duration-300"
                >
                  <div className="flex-shrink-0 bg-yellow-500 p-2 rounded text-white mr-4">
                    <FaExternalLinkAlt />
                  </div>
                  <div>
                    <p className="font-medium text-yellow-900">IUCN Red List</p>
                    <p className="text-yellow-700 text-sm">
                      Status de conservação do bisão americano (Bison bison) na
                      Lista Vermelha de Espécies Ameaçadas
                    </p>
                    <p className="text-yellow-500 text-xs mt-1">
                      iucnredlist.org/species/2815/123789863
                    </p>
                  </div>
                </a>
              </li>

              <li className="transition-all duration-300 hover:-translate-y-1">
                <a
                  href="https://www.nps.gov/subjects/bison/index.htm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start p-4 rounded-lg border border-yellow-200 bg-yellow-50 hover:bg-yellow-100 hover:shadow-md transition-all duration-300"
                >
                  <div className="flex-shrink-0 bg-yellow-500 p-2 rounded text-white mr-4">
                    <FaExternalLinkAlt />
                  </div>
                  <div>
                    <p className="font-medium text-yellow-900">
                      National Park Service
                    </p>
                    <p className="text-yellow-700 text-sm">
                      Recursos sobre a história, biologia e conservação do bisão
                      americano em parques nacionais
                    </p>
                    <p className="text-yellow-500 text-xs mt-1">
                      nps.gov/subjects/bison/index.htm
                    </p>
                  </div>
                </a>
              </li>

              <li className="transition-all duration-300 hover:-translate-y-1">
                <a
                  href="https://bisonalliance.com/about-bison/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start p-4 rounded-lg border border-yellow-200 bg-yellow-50 hover:bg-yellow-100 hover:shadow-md transition-all duration-300"
                >
                  <div className="flex-shrink-0 bg-yellow-500 p-2 rounded text-white mr-4">
                    <FaExternalLinkAlt />
                  </div>
                  <div>
                    <p className="font-medium text-yellow-900">
                      National Bison Association
                    </p>
                    <p className="text-yellow-700 text-sm">
                      Informações sobre a história, características e
                      importância econômica e ecológica do bisão
                    </p>
                    <p className="text-yellow-500 text-xs mt-1">
                      bisonalliance.com/about-bison/
                    </p>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <p className="text-center text-yellow-700 text-sm mt-8">
          Última atualização:{' '}
          {new Date().toLocaleDateString('pt-BR', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
          })}
        </p>
      </div>
    </div>
  )
}
