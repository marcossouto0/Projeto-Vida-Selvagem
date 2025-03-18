'use client'

import Image from 'next/image'
import { useRef, useEffect, useMemo } from 'react'
import {
  FaPaw,
  FaTree,
  FaLeaf,
  FaShieldAlt,
  FaExclamationTriangle
} from 'react-icons/fa'
import { GiWolfHowl } from 'react-icons/gi'

export default function Animal() {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const descriptionRef = useRef(null)
  const imageRef = useRef(null)
  const contentRef0 = useRef(null)
  const contentRef1 = useRef(null)
  const contentRef2 = useRef(null)
  const contentRef3 = useRef(null)
  const contentRef4 = useRef(null)
  const contentRef5 = useRef(null)
  const contentRef6 = useRef(null)
  const contentRef7 = useRef(null)
  const contentRef8 = useRef(null)

  const contentRefs = useMemo(
    () => [
      contentRef0,
      contentRef1,
      contentRef2,
      contentRef3,
      contentRef4,
      contentRef5,
      contentRef6,
      contentRef7,
      contentRef8
    ],
    []
  )

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fadeIn')
            entry.target.classList.remove('opacity-0', 'translate-y-10')
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

    return () => observer.disconnect()
  }, [contentRefs])

  return (
    <div
      id="animal-section"
      ref={sectionRef}
      className="bg-gradient-to-b from-emerald-800 via-emerald-900 to-emerald-950 text-white min-h-screen"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2
            ref={titleRef}
            className="text-5xl sm:text-6xl font-bold opacity-0 transition-all duration-1000 flex items-center justify-center gap-4 text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-emerald-100"
          >
            <GiWolfHowl className="text-emerald-400 animate-pulse" />
            Lobo Cinzento
          </h2>
          <h3 className="text-2xl sm:text-3xl mt-4 text-emerald-300 font-light">
            O Guardião da Taiga
          </h3>
          <div className="w-32 h-1 bg-emerald-500 mx-auto my-8 rounded-full"></div>
          <p
            ref={descriptionRef}
            className="text-xl sm:text-2xl text-emerald-100 opacity-0 transition-all duration-1000 leading-relaxed"
          >
            Inteligente, social e resiliente, o lobo cinzento é um predador de
            topo que desempenha um papel crucial no equilíbrio dos ecossistemas
            boreais. Sua presença é um indicador da saúde da taiga, mas enfrenta
            ameaças crescentes à sua sobrevivência.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
          <div
            ref={imageRef}
            className="opacity-0 transition-all duration-1000 transform hover:scale-105" // Increased scale on hover
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
              <Image
                src="/wolf.jpg"
                alt="Lobo Cinzento em seu habitat natural"
                width={1000}
                height={750}
                className="w-full h-[750px] object-cover transition-transform duration-700 group-hover:scale-115" // Increased scale on hover
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/80 via-emerald-900/40 to-transparent"></div>
            </div>
          </div>

          <div className="space-y-8">
            <div
              ref={contentRefs[0]}
              className="bg-emerald-800/40 backdrop-blur-sm p-8 rounded-xl shadow-lg border-l-4 border-emerald-400 opacity-0 translate-y-10 transition-all duration-700 hover:bg-emerald-800/60"
            >
              <h3 className="text-2xl font-bold flex items-center gap-3 text-emerald-300">
                <FaPaw className="text-emerald-400" />
                Características
              </h3>
              <p className="mt-4 text-lg text-emerald-100 leading-relaxed">
                O lobo cinzento (Canis lupus) é um mamífero carnívoro de porte
                médio a grande, com pelagem densa que varia do cinza ao marrom.
                Possui sentidos aguçados, especialmente olfato e audição,
                adaptações essenciais para a caça em florestas densas da taiga.
              </p>
            </div>

            <div
              ref={contentRefs[1]}
              className="bg-emerald-800/40 backdrop-blur-sm p-8 rounded-xl shadow-lg border-l-4 border-emerald-400 opacity-0 translate-y-10 transition-all duration-700 hover:bg-emerald-800/60"
            >
              <h3 className="text-2xl font-bold flex items-center gap-3 text-emerald-300">
                <FaTree className="text-emerald-400" />
                Habitat
              </h3>
              <p className="mt-4 text-lg text-emerald-100 leading-relaxed">
                Vive em alcateias hierarquizadas nas vastas florestas boreais,
                onde caça em grupo presas como alces e renas. Sua comunicação
                complexa inclui uivos, linguagem corporal e marcação
                territorial, essenciais para a coordenação da alcateia.
              </p>
            </div>

            <div
              ref={contentRefs[2]}
              className="bg-emerald-800/40 backdrop-blur-sm p-8 rounded-xl shadow-lg border-l-4 border-emerald-400 opacity-0 translate-y-10 transition-all duration-700 hover:bg-emerald-800/60"
            >
              <h3 className="text-2xl font-bold flex items-center gap-3 text-emerald-300">
                <FaLeaf className="text-emerald-400" />
                Papel Ecológico
              </h3>
              <p className="mt-4 text-lg text-emerald-100 leading-relaxed">
                Como predadores de topo, os lobos regulam populações de
                herbívoros, prevenindo o sobre pastoreio e promovendo a
                regeneração florestal. Sua presença influencia toda a cadeia
                alimentar, contribuindo para a biodiversidade e resiliência da
                taiga.
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            ref={contentRefs[6]}
            className="bg-emerald-800/30 p-6 rounded-xl shadow-xl border border-emerald-700/50 opacity-0 translate-y-10 transition-all duration-700 hover:bg-emerald-800/50 group"
          >
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 text-emerald-300">
              <FaExclamationTriangle className="text-emerald-400 group-hover:rotate-12 transition-transform" />
              Ameaças
            </h3>
            <ul className="space-y-4 text-emerald-100">
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 mt-2 rounded-full bg-emerald-400"></span>
                <span>Perda de habitat devido ao desmatamento</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 mt-2 rounded-full bg-emerald-400"></span>
                <span>Caça ilegal e conflitos com humanos</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 mt-2 rounded-full bg-emerald-400"></span>
                <span>Fragmentação de territórios</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 mt-2 rounded-full bg-emerald-400"></span>
                <span>Impactos das mudanças climáticas</span>
              </li>
            </ul>
          </div>

          <div
            ref={contentRefs[7]}
            className="bg-emerald-800/30 p-6 rounded-xl shadow-xl border border-emerald-700/50 opacity-0 translate-y-10 transition-all duration-700 hover:bg-emerald-800/50 group"
          >
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 text-emerald-300">
              <FaShieldAlt className="text-emerald-400 group-hover:scale-110 transition-transform" />
              Conservação
            </h3>
            <p className='text-emerald-100 leading-relaxed'>
              O lobo-cinzento (Canis lupus) é classificado como &quot;Pouco
              Preocupante&quot; pela IUCN, mas algumas subespécies estão ameaçadas
              devido à caça, perda de habitat e conflitos com humanos. Programas
              de reintrodução ajudaram a recuperar populações, como no Parque
              Nacional de Yellowstone, onde sua presença restaurou o equilíbrio
              ecológico.
            </p>
          </div>

          <div
            ref={contentRefs[8]}
            className="md:col-span-2 lg:col-span-1 bg-emerald-800/30 p-6 rounded-xl shadow-xl border border-emerald-700/50 opacity-0 translate-y-10 transition-all duration-700 hover:bg-emerald-800/50"
          >
            <blockquote className="relative p-8">
              <div className="text-6xl absolute top-0 left-0 text-emerald-600 opacity-20">
                &quot;
              </div>
              <p className="text-xl italic text-emerald-100 relative z-10">
                O lobo é um símbolo de resistência e adaptação, qualidades
                essenciais para enfrentar os desafios ambientais do nosso tempo.
              </p>
              <div className="text-6xl absolute bottom-0 right-0 text-emerald-600 opacity-20">
                &quot;
              </div>
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  )
}
