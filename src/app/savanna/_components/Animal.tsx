'use client'

import Image from 'next/image'
import { useRef, useEffect } from 'react'
import {
  FaPaw,
  FaInfoCircle,
  FaExclamationTriangle,
  FaLeaf
} from 'react-icons/fa'

export default function Animal() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const contentRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up')
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
      ref={sectionRef}
      className="bg-gradient-to-b from-amber-950 via-amber-900 to-amber-950 text-white py-16 md:py-24 opacity-0 transition-opacity duration-1000"
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-4 bg-amber-600 rounded-full shadow-lg mb-6">
            <FaPaw className="text-amber-100 text-4xl" />
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight text-amber-100">
            Canguru: O Saltador das Planícies Australianas
          </h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto mb-8 rounded-full"></div>
          <p className="text-lg md:text-xl text-amber-200 max-w-3xl mx-auto leading-relaxed">
            O canguru é um dos animais mais icônicos da Austrália, conhecido por
            sua habilidade de saltar grandes distâncias e carregar seus filhotes
            na bolsa. Descubra mais sobre este fascinante marsupial.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div
            ref={(el: HTMLDivElement | null) => {
              contentRefs.current[0] = el
            }}
            className="order-2 lg:order-1 opacity-0 transition-all duration-1000 transform translate-y-8"
          >
            <h3 className="text-3xl md:text-4xl font-bold mb-6 flex items-center text-amber-100">
              <span className="bg-amber-600 p-3 rounded-lg mr-3 inline-flex shadow-md">
                <FaInfoCircle className="text-amber-100" />
              </span>
              Características
            </h3>
            <div className="space-y-6">
              <p className="text-lg text-amber-200 leading-relaxed">
                O canguru é um marsupial de grande porte, com pernas traseiras
                poderosas e uma cauda longa que ajuda no equilíbrio. Existem
                várias espécies, sendo o canguru-vermelho a maior delas, podendo
                atingir até 2 metros de altura.
              </p>
              <p className="text-lg text-amber-200 leading-relaxed">
                Os cangurus são herbívoros e possuem dentes adaptados para
                mastigar grama e folhas. As fêmeas têm uma bolsa onde carregam
                seus filhotes, chamados de &quot;joeys&quot;, até que estejam prontos para
                explorar o mundo.
              </p>
              <div className="bg-amber-600/50 p-5 rounded-lg border border-amber-700 shadow-md">
                <h4 className="font-bold text-amber-200 flex items-center">
                  <FaLeaf className="mr-2" /> Curiosidade:
                </h4>
                <p className="text-amber-200 mt-2">
                  Os cangurus podem saltar até 9 metros em um único salto e
                  alcançar velocidades de até 70 km/h!
                </p>
              </div>
            </div>
          </div>
          <div
            ref={(el: HTMLDivElement | null) => {
              contentRefs.current[1] = el
            }}
            className="order-1 lg:order-2 relative rounded-xl overflow-hidden shadow-2xl opacity-0 transition-all duration-1000 transform translate-y-8"
          >
            <Image
              src="/kangaroo.jpg"
              alt="Canguru saltando em uma planície australiana"
              width={600}
              height={400}
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
              <p className="text-white/90 p-4 text-sm italic">
                Canguru em seu habitat natural, exibindo sua habilidade de
                saltar
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div
            ref={(el: HTMLDivElement | null) => {
              contentRefs.current[2] = el
            }}
            className="bg-amber-600/50 rounded-xl p-6 shadow-lg border border-amber-700 opacity-0 transition-all duration-1000 transform translate-y-8"
          >
            <h3 className="text-2xl text-amber-100 font-bold mb-4">Comportamento e Habitat</h3>
            <p className="text-amber-100 leading-relaxed mb-4">
              Os cangurus são animais sociais que vivem em grupos chamados de
              &quot;mobs&quot;. Eles são mais ativos ao amanhecer e ao entardecer, quando
              procuram alimento.
            </p>
            <p className="text-amber-100 leading-relaxed">
              Habitam principalmente áreas abertas, como planícies e savanas,
              mas também podem ser encontrados em florestas. São adaptados para
              climas quentes e secos.
            </p>
          </div>
          <div
            ref={(el: HTMLDivElement | null) => {
              contentRefs.current[3] = el
            }}
            className="bg-amber-600/50 rounded-xl p-6 shadow-lg border border-amber-700 opacity-0 transition-all duration-1000 transform translate-y-8"
          >
            <h3 className="text-2xl text-amber-100 font-bold mb-4">Importância Ecológica</h3>
            <ul className="space-y-3 text-amber-100">
              <li className="flex items-start">
                <span className="text-amber-600 mr-2">•</span>
                <span>
                  <strong>Dispersão de sementes:</strong> Contribuem para a
                  regeneração de plantas ao espalhar sementes em suas fezes.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-600 mr-2">•</span>
                <span>
                  <strong>Controle de vegetação:</strong> Mantêm o equilíbrio
                  ecológico ao consumir grama e evitar o crescimento excessivo.
                </span>
              </li>
            </ul>
          </div>
          <div
            ref={(el: HTMLDivElement | null) => {
              contentRefs.current[4] = el
            }}
            className="bg-amber-600/50 rounded-xl p-6 shadow-lg border border-amber-700 opacity-0 transition-all duration-1000 transform translate-y-8"
          >
            <h3 className="text-2xl text-amber-100 font-bold mb-4 flex items-center">
              <FaExclamationTriangle className="text-amber-600 mr-2" />
              Status de Conservação
            </h3>
            <p className="text-amber-100 leading-relaxed mb-4">
              Embora algumas espécies de cangurus sejam abundantes, outras
              enfrentam ameaças devido à perda de habitat, caça e mudanças
              climáticas.
            </p>
            <div className="bg-amber-500/20 p-4 rounded-lg">
              <h4 className="font-bold text-amber-100">Principais ameaças:</h4>
              <ul className="mt-2 space-y-2 text-amber-100">
                <li className="flex items-start">
                  <span className="text-amber-600 mr-2">•</span>
                  <span>Perda de habitat</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-600 mr-2">•</span>
                  <span>Caça excessiva</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-600 mr-2">•</span>
                  <span>Impactos das mudanças climáticas</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
