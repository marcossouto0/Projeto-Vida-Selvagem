'use client'

import { useRef, useEffect, useState } from 'react'
import { FaBook, FaExternalLinkAlt, FaSearch } from 'react-icons/fa'
import references from '@/data/biomes/tundra/references'
import styles from './references.module.css'

interface Reference {
  title: string
  description: string
  url: string
}

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

  const filteredReferences = references.filter(
    (ref: Reference) =>
      ref.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      ref.description.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div
      ref={sectionRef}
      className={`${styles.refbgcolor} py-16 md:py-24 opacity-0 transition-opacity duration-1000`}
    >
      <div className="container mx-auto px-5 md:px-15 lg:px-30">
        <div className="text-center mb-12">
          <div
            className={`${styles.iconcolor} inline-flex items-center justify-center p-3 rounded-full mb-6 transition-colors duration-300`}
          >
            <FaBook className={`${styles.textcolor} text-3xl`} />
          </div>
          <h2
            className={`${styles.titlecolor} text-4xl md:text-5xl font-bold mb-6`}
          >
            Referências e Recursos
          </h2>
          <div
            className={`${styles.separatorcolor} w-24 h-1 mx-auto mb-8 rounded-full`}
          ></div>
          <p className={`text-xl ${styles.textcolor} max-w-3xl mx-auto mb-8`}>
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
                className={`${styles.inputcolor} w-full py-3 px-5 pl-12 rounded-full border text-white placeholder-blue-300 focus:outline-none focus:ring-2 transition-all duration-300`}
              />
              <FaSearch
                className={`${styles.searchiconcolor} absolute left-4 top-1/2 transform -translate-y-1/2`}
              />
            </div>
            {searchTerm && filteredReferences.length === 0 && (
              <p className={`${styles.noresultcolor} mt-2 text-sm`}>
                Nenhuma referência encontrada para &quot;{searchTerm}&quot;
              </p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {filteredReferences.map((reference: Reference, index: number) => (
            <div
              key={index}
              className={`${styles.cardcolor} backdrop-blur-sm rounded-xl overflow-hidden shadow-lg border hover:shadow-blue-400/20 transition-all duration-300 transform hover:-translate-y-1`}
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              <div className="p-6">
                <h3
                  className={`${styles.cardtitlecolor} text-xl font-bold mb-2 group-hover:text-white transition-colors duration-300`}
                >
                  {reference.title}
                </h3>
                <p className={`${styles.cardtextcolor} mb-4`}>
                  {reference.description}
                </p>
                <div className="flex justify-between items-center">
                  <span
                    className={`${styles.cardurlcolor} text-sm truncate max-w-[70%]`}
                  >
                    {reference.url}
                  </span>
                  <a
                    href={reference.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${styles.buttonbgcolor} inline-flex items-center gap-2 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300`}
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

        <div
          className={`${styles.notecolor} backdrop-blur-sm p-6 rounded-xl border max-w-3xl mx-auto`}
        >
          <h3 className="text-xl font-semibold text-blue-100 mb-3 flex items-center">
            <FaBook className="mr-2" /> Nota sobre as fontes
          </h3>
          <p className={`${styles.notetextcolor}`}>
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
