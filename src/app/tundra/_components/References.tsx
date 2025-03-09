'use client'

import { useRef, useEffect, useState } from 'react'
import { FaBook, FaExternalLinkAlt, FaSearch } from 'react-icons/fa'

export default function References() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fadeIn')
            entry.target.classList.remove('opacity-0')
          }
        })
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)

    return () => {
      observer.disconnect()
    }
  }, [])

  const references = [
    {
      title: 'Tundra: características, vegetação, clima, fauna - Brasil Escola',
      url: 'https://brasilescola.uol.com.br/geografia/tundra.htm',
      description:
        'Descrição detalhada sobre o bioma tundra, incluindo clima, vegetação e fauna adaptada ao frio extremo.'
    },
    {
      title:
        'Tundra - ártica e alpina - características, fauna e flora - InfoEscola',
      url: 'https://www.infoescola.com/biomas/tundra/',
      description:
        'Explicação sobre os tipos de tundra, suas características climáticas, vegetação e fauna.'
    },
    {
      title: 'Para onde foram as renas? - National Geographic Portugal',
      url: 'https://www.nationalgeographic.pt/mundo-animal/para-onde-foram-renas_4539',
      description:
        'Reportagem sobre as renas da tundra, abordando migração, declínio populacional e impactos das mudanças climáticas.'
    },
    {
      title:
        'Tundra: principais características, localização e clima - 123 Ecos',
      url: 'https://123ecos.com.br/docs/tundra-bioma/',
      description:
        'Informações sobre a tundra como bioma, incluindo fauna adaptada ao frio e ameaças ambientais.'
    },
    {
      title: 'Rena – Wikipédia',
      url: 'https://pt.wikipedia.org/wiki/Rena',
      description:
        'Dados gerais sobre as renas (*Rangifer tarandus*), incluindo habitat, características físicas e comportamento migratório.'
    },
    {
      title: 'IUCN Red List - Rangifer tarandus (Reindeer/Caribou)',
      url: 'https://www.iucnredlist.org/species/29742/22167140',
      description:
        'Status de conservação e ameaças às populações de renas e caribus no Ártico.'
    },
    {
      title: 'National Geographic - Tundra Biome',
      url: 'https://education.nationalgeographic.org/resource/tundra-biome/',
      description:
        'Informações detalhadas sobre o ecossistema da tundra, sua geografia e biodiversidade.'
    },
    {
      title: 'Revista Pesquisa FAPESP - Mudanças Climáticas no Ártico',
      url: 'https://revistapesquisa.fapesp.br/artico',
      description:
        'Estudos brasileiros sobre as alterações climáticas na região ártica e seus impactos nos ecossistemas da tundra.'
    },
    {
      title: 'Britannica - Tundra Ecosystem',
      url: 'https://www.britannica.com/science/tundra',
      description:
        'Visão acadêmica abrangente sobre a formação, clima e adaptações da vida na tundra.'
    },
    {
      title: 'How Reindeer Have Adapted to Survive and Shape the Arctic Tundra',
      url: 'https://www.oneearth.org/species-of-the-week-reindeer/',
      description:
        'Explora as adaptações das renas ao ambiente da tundra e seu papel como engenheiras do ecossistema.'
    },
    {
      title: 'Unlocking Reindeer Migration in Arctic Tundra Wildlife',
      url: 'https://arcticwildlifeknowledge.com/reindeer-migration-patterns-in-tundra-3/',
      description:
        'Detalha os padrões de migração das renas na tundra ártica e sua importância ecológica e cultural.'
    },
    {
      title: 'Reindeer as Ecosystem Engineers? - NASA Earth Observatory',
      url: 'https://earthobservatory.nasa.gov/images/149246/reindeer-as-ecosystem-engineers',
      description:
        'Analisa como as renas influenciam a vegetação e o equilíbrio ecológico da tundra em meio às mudanças climáticas.'
    },
    {
      title: 'Discover the Epic Journey of Reindeer: From Tundras to Forests',
      url: 'https://a-z-animals.com/animals/reindeer/discover-the-epic-journey-of-reindeer-from-tundras-to-forests/',
      description:
        'Discute a migração anual das renas entre tundras e florestas, destacando seus hábitos alimentares e adaptativos.'
    }
  ]

  const filteredReferences = references.filter(
    ref =>
      ref.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      ref.description.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div
      ref={sectionRef}
      className="bg-gradient-to-b from-blue-900 via-blue-800 to-blue-900 py-16 md:py-24 opacity-0 transition-opacity duration-1000"
    >
      <div className="container mx-auto px-5 md:px-15 lg:px-30">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-3 bg-blue-600 rounded-full mb-6 hover:bg-blue-500 transition-colors duration-300">
            <FaBook className="text-blue-100 text-3xl" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Referências e Recursos
          </h2>
          <div className="w-24 h-1 bg-blue-400 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            Explore estas fontes confiáveis para aprofundar seu conhecimento
            sobre a tundra e as espécies que habitam este fascinante bioma.
          </p>

          <div className="max-w-md mx-auto mb-12 relative">
            <div className="relative">
              <input
                type="text"
                placeholder="Buscar referências..."
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                className="w-full py-3 px-5 pl-12 rounded-full bg-blue-800/50 border border-blue-400/30 text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300"
              />
              <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-blue-300" />
            </div>
            {searchTerm && filteredReferences.length === 0 && (
              <p className="text-blue-200 mt-2 text-sm">
                Nenhuma referência encontrada para "{searchTerm}"
              </p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {filteredReferences.map((reference, index) => (
            <div
              key={index}
              className="bg-blue-800/30 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg border border-blue-700/30 hover:shadow-blue-400/20 hover:border-blue-600/50 transition-all duration-300 transform hover:-translate-y-1"
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              <div className="p-6">
                <h3 className="text-xl font-bold text-blue-100 mb-2 group-hover:text-white transition-colors duration-300">
                  {reference.title}
                </h3>
                <p className="text-blue-200 mb-4">{reference.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-blue-300 text-sm truncate max-w-[70%]">
                    {reference.url}
                  </span>
                  <a
                    href={reference.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300"
                    aria-label={`Visitar ${reference.title}`}
                  >
                    Visitar{' '}
                    <FaExternalLinkAlt
                      className={`transition-transform duration-300 ${
                        activeIndex === index ? 'translate-x-1' : ''
                      }`}
                    />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-blue-800/20 backdrop-blur-sm p-6 rounded-xl border border-blue-700/30 max-w-3xl mx-auto">
          <h3 className="text-xl font-semibold text-blue-100 mb-3 flex items-center">
            <FaBook className="mr-2" /> Nota sobre as fontes
          </h3>
          <p className="text-blue-200">
            Estas referências foram cuidadosamente selecionadas para fornecer
            informações precisas e atualizadas sobre a tundra e suas espécies.
            Recomendamos a consulta para aprofundamento sobre o tema e para
            acompanhar os esforços de conservação deste frágil ecossistema.
          </p>
        </div>
      </div>
    </div>
  )
}
