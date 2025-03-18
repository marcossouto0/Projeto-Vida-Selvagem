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
import biomeData from '@/data/biomes/taiga/biome'

export default function Biome() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const contentRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in')
            entry.target.classList.remove('opacity-0')
            entry.target.classList.remove('translate-y-8')
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
      observer.disconnect()
    }
  }, [])

  return (
    <div
      id="biome-content"
      ref={sectionRef}
      className="bg-gradient-to-b from-emerald-950 via-emerald-900 to-emerald-800 text-white py-20 md:py-32 opacity-0 transition-all duration-1000"
    >
      <div className="container mx-auto px-6 md:px-8 lg:px-12">
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center p-4 bg-emerald-700 rounded-full mb-8 transform hover:scale-110 transition-transform duration-300">
            <FaGlobeAmericas className="text-emerald-100 text-4xl" />
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-emerald-300 to-emerald-100 bg-clip-text text-transparent">
            {biomeData.title}
          </h2>
          <div className="w-32 h-1 bg-emerald-500 mx-auto mb-10 rounded-full"></div>
          <p className="text-2xl md:text-3xl text-emerald-100 max-w-5xl mx-auto leading-relaxed font-light">
            {biomeData.description}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div
            ref={(el: HTMLDivElement | null) => {
              contentRefs.current[0] = el
            }}
            className="relative rounded-2xl overflow-hidden shadow-2xl opacity-0 transition-all duration-1000 transform translate-y-8 hover:shadow-emerald-500/20 group"
          >
            <Image
              src={biomeData.image.src}
              alt={biomeData.image.alt}
              width={800}
              height={600}
              className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end">
              <p className="text-white/90 p-6 text-lg italic font-light">
                {biomeData.image.caption}
              </p>
            </div>
          </div>

          <div
            ref={(el: HTMLDivElement | null) => {
              contentRefs.current[1] = el
            }}
            className="opacity-0 transition-all duration-1000 transform translate-y-8"
          >
            <h3 className="text-4xl md:text-5xl font-bold mb-8 flex items-center group">
              <span className="bg-emerald-700 p-3 rounded-xl mr-4 inline-flex group-hover:bg-emerald-600 transition-colors duration-300">
                <FaLeaf className="text-emerald-100 text-2xl group-hover:rotate-45 transition-transform duration-300" />
              </span>
              <span className="bg-gradient-to-r from-emerald-300 to-emerald-100 bg-clip-text text-transparent">
                {biomeData.contents[0].title}
              </span>
            </h3>
            {
              biomeData.contents[0].textArr?.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-xl text-emerald-100 leading-relaxed mb-8 font-light"
                >
                  {paragraph}
                </p>
              ))
            }
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {biomeData.contents.slice(1).map((content, index) => (
            <div
              key={index}
              ref={(el: HTMLDivElement | null) => {
                contentRefs.current[index + 2] = el
              }}
              className="bg-emerald-800/30 backdrop-blur rounded-2xl p-8 shadow-xl border border-emerald-700/30 opacity-0 transition-all duration-1000 transform translate-y-8 hover:bg-emerald-800/40 hover:border-emerald-600/40 group"
            >
              <div className="bg-emerald-700 p-4 rounded-xl inline-flex mb-6 group-hover:bg-emerald-600 transition-colors duration-300">
                {content.icon === 'FaMapMarkerAlt' && (
                  <FaMapMarkerAlt className="text-emerald-100 text-3xl group-hover:animate-bounce" />
                )}
                {content.icon === 'FaSnowflake' && (
                  <FaSnowflake className="text-emerald-100 text-3xl group-hover:animate-spin" />
                )}
                {content.icon === 'FaTree' && (
                  <FaTree className="text-emerald-100 text-3xl group-hover:scale-110 transition-transform duration-300" />
                )}
              </div>
              <h3 className="text-3xl font-bold mb-6 text-emerald-100">
                {content.title}
              </h3>
              {content.text && (
                <p className="text-lg text-emerald-100/90 leading-relaxed mb-6">
                  {content.text}
                </p>
              )}

              {content.list && (
                <ul className="space-y-4 text-lg text-emerald-100/90">
                  {content.list.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-center space-x-3 group/item"
                    >
                      <span className="w-2 h-2 rounded-full bg-emerald-400 group-hover/item:w-3 transition-all duration-300"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}

              {content.sections &&
                content.sections.map((section, idx) => (
                  <div
                    key={idx}
                    className="mt-5 text-lg text-emerald-100/90"
                  >
                    <div>
                      <h4 className="font-semibold text-emerald-200 text-xl mb-2">
                        {section.subtitle}
                      </h4>
                      <p className="leading-relaxed">{section.text}</p>
                    </div>
                  </div>
                ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
