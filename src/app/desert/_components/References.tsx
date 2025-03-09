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
      className={`bg-gradient-to-b from-amber-50 to-amber-100 py-16 transition-opacity duration-1000 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="container mx-auto px-5 md:px-15 lg:px-30">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-3 bg-amber-500 rounded-full mb-6">
            <FaBook className="text-amber-50 text-3xl" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-2 text-amber-900">
            Referências
          </h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto mb-4 rounded-full"></div>
          <p className="text-lg text-amber-700 max-w-2xl mx-auto">
            Fontes consultadas para a criação deste conteúdo sobre o deserto e
            seus habitantes
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="p-1 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600"></div>
          <div className="p-8">
            <ul className="space-y-6">
              <li className="transition-all duration-300 hover:-translate-y-1">
                <a
                  href="https://www.todamateria.com.br/deserto/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start p-4 rounded-lg border border-amber-200 bg-amber-50 hover:bg-amber-100 hover:shadow-md transition-all duration-300"
                >
                  <div className="flex-shrink-0 bg-amber-500 p-2 rounded text-white mr-4">
                    <FaExternalLinkAlt />
                  </div>
                  <div>
                    <p className="font-medium text-amber-900">Toda Matéria</p>
                    <p className="text-amber-700 text-sm">
                      Informações gerais sobre biomas desérticos e suas
                      características
                    </p>
                    <p className="text-amber-500 text-xs mt-1">
                      https://www.todamateria.com.br/deserto/
                    </p>
                  </div>
                </a>
              </li>

              <li className="transition-all duration-300 hover:-translate-y-1">
                <a
                  href="https://www.nationalgeographic.com/animals/mammals/facts/dromedary-camel"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start p-4 rounded-lg border border-amber-200 bg-amber-50 hover:bg-amber-100 hover:shadow-md transition-all duration-300"
                >
                  <div className="flex-shrink-0 bg-amber-500 p-2 rounded text-white mr-4">
                    <FaExternalLinkAlt />
                  </div>
                  <div>
                    <p className="font-medium text-amber-900">
                      National Geographic
                    </p>
                    <p className="text-amber-700 text-sm">
                      Fatos sobre dromedários e suas adaptações ao ambiente
                      desértico
                    </p>
                    <p className="text-amber-500 text-xs mt-1">
                      nationalgeographic.com/animals/mammals/facts/dromedary-camel
                    </p>
                  </div>
                </a>
              </li>

              <li className="transition-all duration-300 hover:-translate-y-1">
                <a
                  href="https://www.iucnredlist.org/species/83631145/46893247"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start p-4 rounded-lg border border-amber-200 bg-amber-50 hover:bg-amber-100 hover:shadow-md transition-all duration-300"
                >
                  <div className="flex-shrink-0 bg-amber-500 p-2 rounded text-white mr-4">
                    <FaExternalLinkAlt />
                  </div>
                  <div>
                    <p className="font-medium text-amber-900">IUCN Red List</p>
                    <p className="text-amber-700 text-sm">
                      Status de conservação do camelo-bactriano selvagem
                    </p>
                    <p className="text-amber-500 text-xs mt-1">
                      iucnredlist.org/species/83631145/46893247
                    </p>
                  </div>
                </a>
              </li>

              <li className="transition-all duration-300 hover:-translate-y-1">
                <a
                  href="https://brasilescola.uol.com.br/biologia/deserto.htm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start p-4 rounded-lg border border-amber-200 bg-amber-50 hover:bg-amber-100 hover:shadow-md transition-all duration-300"
                >
                  <div className="flex-shrink-0 bg-amber-500 p-2 rounded text-white mr-4">
                    <FaExternalLinkAlt />
                  </div>
                  <div>
                    <p className="font-medium text-amber-900">Brasil Escola</p>
                    <p className="text-amber-700 text-sm">
                      Características dos biomas desérticos e sua importância
                      ecológica
                    </p>
                    <p className="text-amber-500 text-xs mt-1">
                      brasilescola.uol.com.br/biologia/deserto.htm
                    </p>
                  </div>
                </a>
              </li>

              <li className="transition-all duration-300 hover:-translate-y-1">
                <a
                  href="https://www.worldwildlife.org/habitats/deserts"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start p-4 rounded-lg border border-amber-200 bg-amber-50 hover:bg-amber-100 hover:shadow-md transition-all duration-300"
                >
                  <div className="flex-shrink-0 bg-amber-500 p-2 rounded text-white mr-4">
                    <FaExternalLinkAlt />
                  </div>
                  <div>
                    <p className="font-medium text-amber-900">
                      World Wildlife Fund
                    </p>
                    <p className="text-amber-700 text-sm">
                      Conservação de habitats desérticos e esforços de
                      preservação
                    </p>
                    <p className="text-amber-500 text-xs mt-1">
                      worldwildlife.org/habitats/deserts
                    </p>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <p className="text-center text-amber-700 text-sm mt-8">
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
