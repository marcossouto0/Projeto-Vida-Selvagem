'use client'

import { useRef, useEffect } from 'react'
import { FaBook, FaExternalLinkAlt } from 'react-icons/fa'

export default function References() {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const listRef = useRef(null)

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
    if (listRef.current) observer.observe(listRef.current)

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <div
      className="bg-gradient-to-b from-green-50 to-green-100 py-16 md:py-24"
      ref={sectionRef}
    >
      <div className="container mx-auto px-5 md:px-15 lg:px-30">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-green-700 rounded-full mb-6">
            <FaBook className="text-green-100 text-3xl" />
          </div>
          <h2
            ref={titleRef}
            className="text-4xl md:text-5xl font-bold mb-6 text-green-800 opacity-0 transition-opacity duration-1000"
          >
            Referências
          </h2>
          <div className="w-24 h-1 bg-green-500 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-green-700 max-w-4xl mx-auto leading-relaxed">
            Fontes consultadas para a elaboração deste material sobre as
            florestas temperadas e o urso pardo.
          </p>
        </div>

        <div
          ref={listRef}
          className="bg-white rounded-xl p-8 shadow-lg max-w-3xl mx-auto opacity-0 transition-opacity duration-1000"
        >
          <ul className="space-y-4">
            <li className="transition-all duration-300 hover:translate-x-2">
              <a
                href="https://www.worldwildlife.org/biomes/temperate-broadleaf-and-mixed-forests"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start group"
              >
                <span className="text-green-600 mr-2 mt-1 text-lg group-hover:text-green-800">
                  •
                </span>
                <span className="text-gray-700 group-hover:text-green-800">
                  World Wildlife Fund - Temperate Broadleaf and Mixed Forests
                  <FaExternalLinkAlt className="inline-block ml-2 text-green-500 group-hover:text-green-800" />
                </span>
              </a>
            </li>
            <li className="transition-all duration-300 hover:translate-x-2">
              <a
                href="https://www.nationalgeographic.org/encyclopedia/temperate-forest/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start group"
              >
                <span className="text-green-600 mr-2 mt-1 text-lg group-hover:text-green-800">
                  •
                </span>
                <span className="text-gray-700 group-hover:text-green-800">
                  National Geographic - Encyclopedia: Temperate Forest
                  <FaExternalLinkAlt className="inline-block ml-2 text-green-500 group-hover:text-green-800" />
                </span>
              </a>
            </li>
            <li className="transition-all duration-300 hover:translate-x-2">
              <a
                href="https://www.iucnredlist.org/species/41688/121229971"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start group"
              >
                <span className="text-green-600 mr-2 mt-1 text-lg group-hover:text-green-800">
                  •
                </span>
                <span className="text-gray-700 group-hover:text-green-800">
                  IUCN Red List - Ursus arctos (Brown Bear)
                  <FaExternalLinkAlt className="inline-block ml-2 text-green-500 group-hover:text-green-800" />
                </span>
              </a>
            </li>
            <li className="transition-all duration-300 hover:translate-x-2">
              <a
                href="https://www.bearconservation.org.uk/about-bears/brown-bear/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start group"
              >
                <span className="text-green-600 mr-2 mt-1 text-lg group-hover:text-green-800">
                  •
                </span>
                <span className="text-gray-700 group-hover:text-green-800">
                  Bear Conservation - About Brown Bears
                  <FaExternalLinkAlt className="inline-block ml-2 text-green-500 group-hover:text-green-800" />
                </span>
              </a>
            </li>
            <li className="transition-all duration-300 hover:translate-x-2">
              <a
                href="https://brasilescola.uol.com.br/geografia/floresta-temperada.htm"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start group"
              >
                <span className="text-green-600 mr-2 mt-1 text-lg group-hover:text-green-800">
                  •
                </span>
                <span className="text-gray-700 group-hover:text-green-800">
                  Brasil Escola - Floresta Temperada
                  <FaExternalLinkAlt className="inline-block ml-2 text-green-500 group-hover:text-green-800" />
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
