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
            entry.target.classList.add('animate-fade-in')
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
      className="bg-gradient-to-b from-amber-100 to-amber-200 text-amber-950 py-16 md:py-24 opacity-0 transition-opacity duration-1000"
    >
      <div className="container mx-auto px-5 md:px-15 lg:px-30">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-amber-600 rounded-full mb-6">
            <FaPaw className="text-amber-100 text-3xl" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Tamanduá-Bandeira: O Arquiteto das Savanas
          </h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl md:text-2xl text-amber-800 max-w-4xl mx-auto leading-relaxed">
            Com sua aparência única e comportamento especializado, o
            tamanduá-bandeira é um dos animais mais emblemáticos das savanas
            sul-americanas. Mas a perda de habitat e as queimadas ameaçam sua
            sobrevivência.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div
            ref={(el: HTMLDivElement | null) => {
              contentRefs.current[0] = el;
            }}
            className="order-2 lg:order-1 opacity-0 transition-all duration-1000 transform translate-y-8"
          >
            <h3 className="text-3xl md:text-4xl font-bold mb-6 flex items-center">
              <span className="bg-amber-600 p-2 rounded-lg mr-3 inline-flex">
                <FaInfoCircle className="text-amber-100" />
              </span>
              Características
            </h3>
            <div className="space-y-6">
              <p className="text-lg text-amber-800 leading-relaxed">
                O tamanduá-bandeira (<em>Myrmecophaga tridactyla</em>) é um
                mamífero de grande porte, podendo atingir até 2,4 metros de
                comprimento (incluindo a cauda) e pesar até 45 kg. Sua pelagem é
                densa e áspera, com coloração cinza-amarelada e marcas pretas
                características formando um &quot;colete&quot; no tronco e
                membros dianteiros.
              </p>
              <p className="text-lg text-amber-800 leading-relaxed">
                Possui um focinho alongado e tubular, sem dentes, adaptado para
                se alimentar de formigas e cupins. Sua língua pode estender-se
                até 60 cm e é coberta por uma secreção pegajosa que facilita a
                captura de insetos. As garras dianteiras são extremamente
                desenvolvidas, usadas para abrir formigueiros e cupinzeiros.
              </p>
              <div className="bg-amber-300/50 p-4 rounded-lg border border-amber-400 mt-6">
                <h4 className="font-bold text-amber-900 flex items-center">
                  <FaLeaf className="mr-2" /> Curiosidade:
                </h4>
                <p className="text-amber-800 mt-2">
                  O tamanduá-bandeira pode consumir até 30.000 formigas e cupins
                  em um único dia! Sua língua pode entrar e sair do focinho até
                  160 vezes por minuto durante a alimentação.
                </p>
              </div>
            </div>
          </div>
          <div
            ref={(el: HTMLDivElement | null) => {
              contentRefs.current[1] = el;
            }}
            className="order-1 lg:order-2 relative rounded-xl overflow-hidden shadow-2xl opacity-0 transition-all duration-1000 transform translate-y-8"
          >
            <Image
              src="/anteater.jpg"
              alt="Tamanduá-bandeira caminhando em seu habitat natural na savana"
              width={600}
              height={400}
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
              <p className="text-white/90 p-4 text-sm italic">
                Tamanduá-bandeira adulto em seu habitat natural, exibindo suas
                características marcantes
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div
            ref={(el: HTMLDivElement | null) => {
              contentRefs.current[2] = el;
            }}
            className="bg-amber-300/50 rounded-xl p-6 shadow-lg border border-amber-400 opacity-0 transition-all duration-1000 transform translate-y-8"
          >
            <h3 className="text-2xl font-bold mb-4">Comportamento e Habitat</h3>
            <p className="text-amber-800 leading-relaxed mb-4">
              O tamanduá-bandeira é um animal solitário, exceto durante o
              período reprodutivo e quando a fêmea está com filhotes. É
              principalmente terrestre, mas pode nadar bem e subir em árvores
              quando necessário.
            </p>
            <p className="text-amber-800 leading-relaxed">
              Habita principalmente savanas e campos abertos, mas também pode
              ser encontrado em florestas. Prefere áreas com abundância de
              cupinzeiros e formigueiros, que constituem sua principal fonte de
              alimento.
            </p>
          </div>
          <div
            ref={(el: HTMLDivElement | null) => {
              contentRefs.current[3] = el;
            }}
            className="bg-amber-300/50 rounded-xl p-6 shadow-lg border border-amber-400 opacity-0 transition-all duration-1000 transform translate-y-8"
          >
            <h3 className="text-2xl font-bold mb-4">Importância Ecológica</h3>
            <ul className="space-y-3 text-amber-800">
              <li className="flex items-start">
                <span className="text-amber-600 mr-2">•</span>
                <span>
                  <strong>Controle de populações:</strong> Regula as populações
                  de formigas e cupins, evitando explosões populacionais
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-600 mr-2">•</span>
                <span>
                  <strong>Engenheiro do ecossistema:</strong> Ao abrir
                  formigueiros e cupinzeiros, cria microhabitats para outras
                  espécies
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-600 mr-2">•</span>
                <span>
                  <strong>Dispersão de sementes:</strong> Indiretamente
                  contribui para a dispersão de sementes ao modificar o solo
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-600 mr-2">•</span>
                <span>
                  <strong>Espécie guarda-chuva:</strong> Sua conservação
                  beneficia muitas outras espécies que compartilham seu habitat
                </span>
              </li>
            </ul>
          </div>
          <div
            ref={(el: HTMLDivElement | null) => {
              contentRefs.current[4] = el;
            }}
            className="bg-amber-300/50 rounded-xl p-6 shadow-lg border border-amber-400 opacity-0 transition-all duration-1000 transform translate-y-8"
          >
            <h3 className="text-2xl font-bold mb-4 flex items-center">
              <FaExclamationTriangle className="text-amber-600 mr-2" />
              Status de Conservação
            </h3>
            <p className="text-amber-800 leading-relaxed mb-4">
              O tamanduá-bandeira está classificado como{' '}
              <strong>Vulnerável (VU)</strong>
              na Lista Vermelha da IUCN. Estima-se que suas populações tenham
              diminuído em mais de 30% nas últimas três gerações.
            </p>
            <div className="bg-amber-500/20 p-4 rounded-lg">
              <h4 className="font-bold text-amber-900">Principais ameaças:</h4>
              <ul className="mt-2 space-y-2 text-amber-800">
                <li className="flex items-start">
                  <span className="text-amber-600 mr-2">•</span>
                  <span>Perda e fragmentação de habitat</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-600 mr-2">•</span>
                  <span>Incêndios descontrolados</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-600 mr-2">•</span>
                  <span>Atropelamentos em rodovias</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-600 mr-2">•</span>
                  <span>Caça ilegal</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
