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
      id="references-section"
      ref={sectionRef}
      className="bg-gradient-to-b from-emerald-900 to-emerald-950 text-white"
    >
      <div className="mx-5 md:mx-15 lg:mx-30 py-10 md:py-20">
        <h2
          ref={titleRef}
          className="text-4xl md:text-5xl font-bold opacity-0 transition-opacity duration-1000 flex items-center gap-3"
        >
          <FaBook className="text-emerald-400" /> Referências
        </h2>
        <ul
          ref={listRef}
          className="mt-10 opacity-0 transition-opacity duration-1000 delay-300 grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          <li className="bg-emerald-900/30 p-4 rounded-lg shadow-lg border-l-4 border-emerald-400 hover:bg-emerald-800/40 transition-colors duration-300">
            <a
              href="https://www.worldwildlife.org/biomes/boreal-forests-taiga"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-2 text-emerald-200 hover:text-white transition-colors duration-300"
            >
              <FaExternalLinkAlt className="mt-1 flex-shrink-0" />
              <span>World Wildlife Fund - Boreal Forests/Taiga</span>
            </a>
          </li>
          <li className="bg-emerald-900/30 p-4 rounded-lg shadow-lg border-l-4 border-emerald-400 hover:bg-emerald-800/40 transition-colors duration-300">
            <a
              href="https://www.iucnredlist.org/species/3746/163508960"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-2 text-emerald-200 hover:text-white transition-colors duration-300"
            >
              <FaExternalLinkAlt className="mt-1 flex-shrink-0" />
              <span>IUCN Red List - Canis lupus (Gray Wolf)</span>
            </a>
          </li>
          <li className="bg-emerald-900/30 p-4 rounded-lg shadow-lg border-l-4 border-emerald-400 hover:bg-emerald-800/40 transition-colors duration-300">
            <a
              href="https://www.nationalgeographic.org/encyclopedia/taiga/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-2 text-emerald-200 hover:text-white transition-colors duration-300"
            >
              <FaExternalLinkAlt className="mt-1 flex-shrink-0" />
              <span>National Geographic - Taiga Encyclopedia</span>
            </a>
          </li>
          <li className="bg-emerald-900/30 p-4 rounded-lg shadow-lg border-l-4 border-emerald-400 hover:bg-emerald-800/40 transition-colors duration-300">
            <a
              href="https://wolf.org/wolf-info/basic-wolf-info/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-2 text-emerald-200 hover:text-white transition-colors duration-300"
            >
              <FaExternalLinkAlt className="mt-1 flex-shrink-0" />
              <span>International Wolf Center - Basic Wolf Information</span>
            </a>
          </li>
          <li className="bg-emerald-900/30 p-4 rounded-lg shadow-lg border-l-4 border-emerald-400 hover:bg-emerald-800/40 transition-colors duration-300">
            <a
              href="https://www.intactforests.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-2 text-emerald-200 hover:text-white transition-colors duration-300"
            >
              <FaExternalLinkAlt className="mt-1 flex-shrink-0" />
              <span>Intact Forest Landscapes</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}
