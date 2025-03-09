'use client'

import Image from 'next/image'
import { useRef, useEffect, useState } from 'react'
import {
  FaHorse,
  FaWater,
  FaSun,
  FaLeaf,
  FaExclamationTriangle
} from 'react-icons/fa'

export default function Animal() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)
  const contentRefs = useRef(Array(5).fill(null))

  useEffect(() => {
    setIsVisible(true)

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

    contentRefs.current.forEach((ref: React.RefObject<HTMLElement> | null) => {
      if (ref && ref.current) observer.observe(ref.current)
    })

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <div
      ref={sectionRef}
      className={`bg-gradient-to-b from-amber-800 to-amber-700 text-amber-50 py-16 md:py-24 transition-opacity duration-1000 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="container mx-auto px-5 md:px-15 lg:px-30">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-amber-600 rounded-full mb-6">
            <FaHorse className="text-amber-100 text-3xl" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Camelo: O Navio do Deserto
          </h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed">
            Mestres da sobrevivência, os camelos desenvolveram adaptações
            extraordinárias para prosperar nos ambientes mais áridos do planeta.
            Mas a desertificação e as mudanças climáticas ameaçam seu habitat
            natural.
          </p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 items-center mb-20">
          <div
            className="xl:order-2 relative rounded-xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-all duration-500"
            ref={contentRefs.current[0]}
          >
            <Image
              src="/camel.jpg"
              alt="Camelo atravessando o deserto"
              width={600}
              height={400}
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end">
              <p className="text-white/90 p-4 text-sm italic">
                Adaptados para sobreviver em condições extremas, os camelos
                podem atravessar grandes distâncias no deserto sem água
              </p>
            </div>
          </div>

          <div
            ref={contentRefs.current[1]}
            className="flex flex-col justify-around gap-8 opacity-0 transition-all duration-1000"
          >
            <div>
              <h3 className="text-3xl md:text-4xl font-bold mb-6 flex items-center">
                <span className="bg-amber-600 p-2 rounded-lg mr-3 inline-flex">
                  <FaSun className="text-amber-100" />
                </span>
                Características
              </h3>
              <p className="text-lg leading-relaxed mb-4">
                Os camelos são mamíferos da família Camelidae e são conhecidos
                por suas extraordinárias adaptações para sobreviver em ambientes
                desérticos. Existem duas espécies principais: o camelo-bactriano
                (com duas corcovas) nativo da Ásia Central, e o dromedário (com
                uma corcova) encontrado principalmente no Oriente Médio e norte
                da África.
              </p>
              <p className="text-lg leading-relaxed mb-4">
                Para sobreviverem em ambientes extremamente áridos, os camelos
                possuem adaptações notáveis:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="bg-amber-600/20 p-4 rounded-lg border border-amber-600/30 shadow-md hover:shadow-lg transition-all duration-300">
                  <h4 className="font-bold text-amber-200 mb-2">Corcovas</h4>
                  <p>
                    Armazenam gordura (não água), fornecendo energia quando
                    alimentos são escassos e isolamento térmico.
                  </p>
                </div>
                <div className="bg-amber-600/20 p-4 rounded-lg border border-amber-600/30 shadow-md hover:shadow-lg transition-all duration-300">
                  <h4 className="font-bold text-amber-200 mb-2">
                    Conservação de água
                  </h4>
                  <p>
                    Podem perder até 25% do peso corporal em água sem sofrer
                    danos (humanos morrem com 15%) e beber até 200 litros em uma
                    única vez.
                  </p>
                </div>
              </div>
              <p className="text-lg leading-relaxed">
                Além disso, possuem narinas que podem fechar para bloquear
                areia, pálpebras triplas e cílios longos para proteção contra
                tempestades de areia, e pés largos e almofadados que distribuem
                o peso na areia.
              </p>
            </div>
          </div>
        </div>

        <div
          ref={contentRefs.current[2]}
          className="bg-amber-900/30 p-8 rounded-xl shadow-xl mb-20 opacity-0 transition-all duration-1000"
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-6 flex items-center">
            <span className="bg-amber-600 p-2 rounded-lg mr-3 inline-flex">
              <FaWater className="text-amber-100" />
            </span>
            Adaptações Fisiológicas
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-amber-800/50 p-5 rounded-lg border border-amber-700/50 hover:bg-amber-800/70 transition-all duration-300">
              <h4 className="font-bold text-xl mb-3">Sistema Circulatório</h4>
              <p className="text-amber-100">
                Glóbulos vermelhos ovais (não circulares como nos humanos),
                permitindo fluxo contínuo mesmo quando desidratados.
              </p>
            </div>
            <div className="bg-amber-800/50 p-5 rounded-lg border border-amber-700/50 hover:bg-amber-800/70 transition-all duration-300">
              <h4 className="font-bold text-xl mb-3">Regulação Térmica</h4>
              <p className="text-amber-100">
                Temperatura corporal pode variar de 34°C pela manhã até 41°C
                durante o dia, reduzindo a perda de água por transpiração.
              </p>
            </div>
            <div className="bg-amber-800/50 p-5 rounded-lg border border-amber-700/50 hover:bg-amber-800/70 transition-all duration-300">
              <h4 className="font-bold text-xl mb-3">Isolamento</h4>
              <p className="text-amber-100">
                Pelo espesso reflete o calor solar e proporciona isolamento
                contra as temperaturas extremas do deserto.
              </p>
            </div>
          </div>
          <div className="mt-6 text-center">
            <p className="text-lg text-amber-100 max-w-4xl mx-auto">
              Essas adaptações permitem que os camelos sobrevivam até duas
              semanas sem água e vários meses sem comida, tornando-os
              perfeitamente adaptados para as condições extremas dos desertos.
            </p>
          </div>
        </div>

        <div
          ref={contentRefs.current[3]}
          className="mb-20 opacity-0 transition-all duration-1000"
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-8 flex items-center justify-center">
            <span className="bg-amber-600 p-2 rounded-lg mr-3 inline-flex">
              <FaLeaf className="text-amber-100" />
            </span>
            Importância
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-amber-900/80 to-amber-800/80 rounded-xl p-6 shadow-lg border border-amber-700/30 hover:shadow-[0_0_15px_rgba(251,191,36,0.3)] hover:-translate-y-1 transition-all duration-300">
              <h4 className="text-2xl md:text-3xl font-bold mb-4">Ecológica</h4>
              <p className="text-lg leading-relaxed text-amber-100">
                Os camelos desempenham um papel importante nos ecossistemas
                desérticos, dispersando sementes através de suas fezes e
                ajudando a manter a biodiversidade vegetal em ambientes áridos.
              </p>
            </div>
            <div className="bg-gradient-to-br from-amber-900/80 to-amber-800/80 rounded-xl p-6 shadow-lg border border-amber-700/30 hover:shadow-[0_0_15px_rgba(251,191,36,0.3)] hover:-translate-y-1 transition-all duration-300">
              <h4 className="text-2xl md:text-3xl font-bold mb-4">Cultural</h4>
              <p className="text-lg leading-relaxed text-amber-100">
                Por milênios, os camelos têm sido essenciais para as culturas do
                deserto, fornecendo transporte, leite, carne, lã e couro. Eles
                permitiram o comércio através das rotas de caravanas como a Rota
                da Seda e são símbolos culturais importantes em muitas
                sociedades.
              </p>
            </div>
            <div className="bg-gradient-to-br from-amber-900/80 to-amber-800/80 rounded-xl p-6 shadow-lg border border-amber-700/30 hover:shadow-[0_0_15px_rgba(251,191,36,0.3)] hover:-translate-y-1 transition-all duration-300">
              <h4 className="text-2xl md:text-3xl font-bold mb-4">
                Científica
              </h4>
              <p className="text-lg leading-relaxed text-amber-100">
                As adaptações dos camelos inspiram pesquisas biomédicas e
                tecnológicas, desde tratamentos para desidratação humana até o
                desenvolvimento de tecnologias de conservação de água e energia
                em regiões áridas.
              </p>
            </div>
          </div>
        </div>

        <div
          ref={contentRefs.current[4]}
          className="bg-amber-900/50 p-8 rounded-xl shadow-xl opacity-0 transition-all duration-1000"
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-6 flex items-center">
            <span className="bg-amber-600 p-2 rounded-lg mr-3 inline-flex">
              <FaExclamationTriangle className="text-amber-100" />
            </span>
            Ameaças
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
            <div className="bg-amber-800/40 p-5 rounded-lg border border-amber-700/50">
              <h4 className="font-bold text-xl mb-3 text-amber-200">
                Desertificação
              </h4>
              <p className="text-amber-100">
                Causada pelas mudanças climáticas, está alterando seus habitats
                naturais, enquanto a expansão urbana e agrícola reduz suas áreas
                de forrageamento.
              </p>
            </div>
            <div className="bg-amber-800/40 p-5 rounded-lg border border-amber-700/50">
              <h4 className="font-bold text-xl mb-3 text-amber-200">
                Caça Ilegal
              </h4>
              <p className="text-amber-100">
                Principalmente para carne e troféus, continua sendo uma ameaça
                significativa para as populações selvagens.
              </p>
            </div>
          </div>
          <div className="bg-amber-700/20 p-6 rounded-lg border border-amber-600/30 max-w-4xl mx-auto">
            <p className="text-lg text-center text-white mb-3">
              O camelo-bactriano selvagem está classificado como{' '}
              <span className="font-bold text-amber-200">
                &quot;Criticamente em Perigo&quot;
              </span>{' '}
              na Lista Vermelha da IUCN
            </p>
            <p className="text-lg text-center text-amber-100">
              Com menos de 1.000 indivíduos restantes na natureza. Embora os
              dromedários domésticos sejam abundantes, suas contrapartes
              selvagens são extremamente raras.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
