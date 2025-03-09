'use client'

import { useRef, useEffect } from 'react'
import { FaBook, FaExternalLinkAlt } from 'react-icons/fa'

export default function References() {
  const sectionRef = useRef<HTMLDivElement>(null)

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

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current)
    }
  }, [])

  const references = [
    {
      title:
        'World Wildlife Fund - Tropical and Subtropical Grasslands, Savannas and Shrublands',
      url: 'https://www.worldwildlife.org/biomes/tropical-and-subtropical-grasslands-savannas-and-shrublands'
    },
    {
      title: 'IUCN Red List - Myrmecophaga tridactyla (Giant Anteater)',
      url: 'https://www.iucnredlist.org/species/14224/47441961'
    },
    {
      title: 'National Geographic - Savanna Biome',
      url: 'https://www.nationalgeographic.org/encyclopedia/savanna-biome/'
    },
    {
      title: 'Britannica - Savanna Ecosystem',
      url: 'https://www.britannica.com/science/savanna'
    },
    {
      title: 'Nature - The Ecology of Tropical Savannas',
      url: 'https://www.nature.com/scitable/knowledge/library/the-ecology-of-tropical-savannas-96160088/'
    },
    {
      title:
        'ICMBio - Plano de Ação Nacional para Conservação do Tamanduá-Bandeira',
      url: 'https://www.icmbio.gov.br/portal/faunabrasileira/plano-de-acao-nacional-lista/2839-plano-de-acao-nacional-para-conservacao-do-tamandua-bandeira'
    }
  ]

  return (
    <div
      ref={sectionRef}
      className="bg-gradient-to-b from-amber-200 to-amber-100 py-16 md:py-20 opacity-0 transition-opacity duration-1000"
    >
      <div className="container mx-auto px-5 md:px-15 lg:px-30">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-3 bg-amber-600 rounded-full mb-6">
            <FaBook className="text-amber-100 text-3xl" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-amber-950 mb-6">
            Referências
          </h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {references.map((reference, index) => (
            <a
              key={index}
              href={reference.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 flex items-start border border-amber-200 group"
              aria-label={`Visitar ${reference.title}`}
            >
              <div className="flex-grow">
                <h3 className="text-lg font-medium text-amber-900 group-hover:text-amber-600 transition-colors duration-300">
                  {reference.title}
                </h3>
                <p className="text-amber-600 text-sm mt-2 break-all">
                  {reference.url}
                </p>
              </div>
              <FaExternalLinkAlt className="text-amber-400 group-hover:text-amber-600 transition-colors duration-300 mt-1 ml-3 flex-shrink-0" />
            </a>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-amber-800 italic">
            Estas referências foram utilizadas para compilar as informações
            apresentadas nesta página. Recomendamos a consulta para
            aprofundamento sobre o tema.
          </p>
        </div>
      </div>
    </div>
  )
}
