'use client'

import Image from 'next/image'
import { useRef, useEffect, useState } from 'react'
import {
  FaBinoculars,
  FaHome,
  FaLeaf,
  FaExclamationTriangle,
  FaHistory
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

    if (contentRefs.current) {
      contentRefs.current.forEach((ref: React.RefObject<HTMLElement> | null) => {
        if (ref && ref.current) observer.observe(ref.current)
      })
    }

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <div
      ref={sectionRef}
      className={`bg-gradient-to-b from-yellow-800 to-yellow-700 text-yellow-50 py-16 md:py-24 transition-opacity duration-1000 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="container mx-auto px-5 md:px-15 lg:px-30">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-yellow-600 rounded-full mb-6">
            <FaBinoculars className="text-yellow-100 text-3xl" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Bisão Americano: O Gigante das Planícies
          </h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed">
            Imponente, resiliente e ecologicamente vital, o bisão americano
            moldou a paisagem e a cultura das Grandes Planícies por milênios.
            Quase extinto no século XIX, sua recuperação representa uma das
            maiores histórias de conservação da América do Norte.
          </p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 items-center mb-20">
          <div
            className="xl:order-2 relative rounded-xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-all duration-500"
            ref={contentRefs.current[0]}
          >
            <Image
              src="/bison.jpg"
              alt="Bisão americano nas planícies"
              width={600}
              height={400}
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end">
              <p className="text-white/90 p-4 text-sm italic">
                O bisão americano é o maior mamífero terrestre da América do
                Norte, podendo pesar até 900 kg
              </p>
            </div>
          </div>

          <div
            ref={contentRefs.current[1]}
            className="flex flex-col justify-around gap-8 transition-all duration-1000"
          >
            <div>
              <h3 className="text-3xl md:text-4xl font-bold mb-6 flex items-center">
                <span className="bg-yellow-600 p-2 rounded-lg mr-3 inline-flex">
                  <FaHome className="text-yellow-100" />
                </span>
                Características e Habitat
              </h3>
              <p className="text-lg leading-relaxed mb-4">
                O bisão americano (Bison bison) é um dos maiores mamíferos
                terrestres da América do Norte. Estes herbívoros massivos podem
                pesar entre 400 e 900 kg, alcançar uma altura de 1,5 a 2 metros
                no ombro, e comprimento de até 3,5 metros.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                Existem dois subespécies: o bisão das planícies (Bison bison
                bison) e o bisão das florestas (Bison bison athabascae),
                adaptados a diferentes condições ecológicas.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="bg-yellow-600/20 p-4 rounded-lg border border-yellow-600/30 shadow-md hover:shadow-lg transition-all duration-300">
                  <h4 className="font-bold text-yellow-200 mb-2">
                    Características Físicas
                  </h4>
                  <p>
                    Corpo maciço, cabeça grande, corcova pronunciada sobre os
                    ombros e chifres curvos. Pelagem densa e marrom, que se
                    torna mais espessa no inverno.
                  </p>
                </div>
                <div className="bg-yellow-600/20 p-4 rounded-lg border border-yellow-600/30 shadow-md hover:shadow-lg transition-all duration-300">
                  <h4 className="font-bold text-yellow-200 mb-2">
                    Habitat Natural
                  </h4>
                  <p>
                    Campos e pradarias abertas, onde viviam em enormes rebanhos
                    migratórios que seguiam os padrões sazonais de crescimento
                    das gramíneas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          ref={contentRefs.current[2]}
          className="bg-yellow-900/30 p-8 rounded-xl shadow-xl mb-20 transition-all duration-1000"
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-6 flex items-center">
            <span className="bg-yellow-600 p-2 rounded-lg mr-3 inline-flex">
              <FaLeaf className="text-yellow-100" />
            </span>
            Ecologia e Comportamento
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-yellow-800/50 p-5 rounded-lg border border-yellow-700/50 hover:bg-yellow-800/70 transition-all duration-300">
              <h4 className="font-bold text-xl mb-3">Alimentação</h4>
              <p className="text-yellow-100">
                Herbívoros que consomem principalmente gramíneas e outras
                plantas herbáceas. Um adulto pode ingerir até 12 kg de vegetação
                por dia.
              </p>
            </div>
            <div className="bg-yellow-800/50 p-5 rounded-lg border border-yellow-700/50 hover:bg-yellow-800/70 transition-all duration-300">
              <h4 className="font-bold text-xl mb-3">Estrutura Social</h4>
              <p className="text-yellow-100">
                Vivem em rebanhos liderados por fêmeas. Os machos formam grupos
                separados, juntando-se ao rebanho principal apenas na temporada
                de reprodução.
              </p>
            </div>
            <div className="bg-yellow-800/50 p-5 rounded-lg border border-yellow-700/50 hover:bg-yellow-800/70 transition-all duration-300">
              <h4 className="font-bold text-xl mb-3">Papel Ecológico</h4>
              <p className="text-yellow-100">
                São &quot;engenheiros do ecossistema&quot;, moldando a paisagem
                através do pastoreio, criando habitats diversos para outras
                espécies.
              </p>
            </div>
          </div>
          <div className="mt-6 text-center">
            <p className="text-lg text-yellow-100 max-w-4xl mx-auto">
              O pastoreio do bisão promove a biodiversidade das planícies,
              estimulando o crescimento de diferentes plantas, aerando o solo
              com seus cascos e dispersando sementes através de suas fezes.
            </p>
          </div>
        </div>

        <div
          ref={contentRefs.current[3]}
          className="mb-20 transition-all duration-1000"
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-8 flex items-center justify-center">
            <span className="bg-yellow-600 p-2 rounded-lg mr-3 inline-flex">
              <FaHistory className="text-yellow-100" />
            </span>
            História e Importância Cultural
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-gradient-to-br from-yellow-900/80 to-yellow-800/80 rounded-xl p-6 shadow-lg border border-yellow-700/30 hover:shadow-[0_0_15px_rgba(234,179,8,0.3)] hover:-translate-y-1 transition-all duration-300">
              <h4 className="text-2xl md:text-3xl font-bold mb-4">
                Povos Indígenas
              </h4>
              <p className="text-lg leading-relaxed text-yellow-100">
                Para muitas nações indígenas das Grandes Planícies, o bisão era
                o centro da vida, fornecendo alimento, abrigo, ferramentas e
                vestimentas. A relação com o bisão estava profundamente
                entrelaçada com sua espiritualidade e identidade cultural.
              </p>
            </div>
            <div className="bg-gradient-to-br from-yellow-900/80 to-yellow-800/80 rounded-xl p-6 shadow-lg border border-yellow-700/30 hover:shadow-[0_0_15px_rgba(234,179,8,0.3)] hover:-translate-y-1 transition-all duration-300">
              <h4 className="text-2xl md:text-3xl font-bold mb-4">
                Colonização
              </h4>
              <p className="text-lg leading-relaxed text-yellow-100">
                O extermínio sistemático dos bisões no século XIX, que reduziu a
                população de 30-60 milhões para menos de 1.000 indivíduos, foi
                uma estratégia deliberada para subjugar os povos indígenas,
                eliminando sua principal fonte de subsistência.
              </p>
            </div>
          </div>
          <div className="bg-gradient-to-br from-yellow-900/80 to-yellow-800/80 rounded-xl p-6 shadow-lg border border-yellow-700/30">
            <h4 className="text-2xl font-bold mb-4 text-center">
              Declínio e Retorno
            </h4>
            <p className="text-lg leading-relaxed text-yellow-100 text-center">
              Dos estimados 30-60 milhões de bisões que vagavam pela América do
              Norte, a população foi reduzida a menos de 1.000 indivíduos por
              volta de 1900. Graças aos esforços pioneiros de conservação, hoje
              existem aproximadamente 500.000 bisões, embora menos de 5% sejam
              geneticamente puros e ecologicamente selvagens.
            </p>
          </div>
        </div>

        <div
          ref={contentRefs.current[4]}
          className="bg-yellow-900/50 p-8 rounded-xl shadow-xl transition-all duration-1000"
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-6 flex items-center">
            <span className="bg-yellow-600 p-2 rounded-lg mr-3 inline-flex">
              <FaExclamationTriangle className="text-yellow-100" />
            </span>
            Status de Conservação
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
            <div className="bg-yellow-800/40 p-5 rounded-lg border border-yellow-700/50">
              <h4 className="font-bold text-xl mb-3 text-yellow-200">
                Ameaças Atuais
              </h4>
              <ul className="space-y-2 text-yellow-100">
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-2">•</span>
                  <span>
                    Perda de habitat devido à conversão de campos nativos para
                    agricultura
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-2">•</span>
                  <span>
                    Fragmentação genética e hibridização com gado doméstico
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-2">•</span>
                  <span>
                    Políticas que limitam a restauração de populações selvagens
                  </span>
                </li>
              </ul>
            </div>
            <div className="bg-yellow-800/40 p-5 rounded-lg border border-yellow-700/50">
              <h4 className="font-bold text-xl mb-3 text-yellow-200">
                Esforços de Conservação
              </h4>
              <ul className="space-y-2 text-yellow-100">
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-2">•</span>
                  <span>
                    Reintrodução em parques nacionais e terras indígenas
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-2">•</span>
                  <span>
                    Programas de preservação genética para manter linhagens
                    puras
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-2">•</span>
                  <span>
                    Restauração de campos nativos para expandir habitat
                    disponível
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="bg-yellow-700/20 p-6 rounded-lg border border-yellow-600/30 max-w-4xl mx-auto">
            <p className="text-lg text-center text-white mb-3">
              <span className="font-bold text-yellow-200">
                O futuro do bisão americano
              </span>{' '}
              depende da nossa capacidade de restaurar não apenas a espécie, mas
              todo o ecossistema dos campos nativos
            </p>
            <p className="text-lg text-center text-yellow-100">
              A verdadeira recuperação do bisão envolve restaurar seu papel
              ecológico, permitindo que rebanhos selvagens migrem livremente em
              grandes áreas de habitat contíguo.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
