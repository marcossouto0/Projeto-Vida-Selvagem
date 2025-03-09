'use client'

import Image from 'next/image'
import { useRef, useEffect, useMemo } from 'react'
import {
  FaLeaf,
  FaMapMarkedAlt,
  FaCloudRain,
  FaSeedling,
  FaPaw
} from 'react-icons/fa'

export default function Biome() {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const descriptionRef = useRef(null)
  const imageRef = useRef(null)
  const contentRef0 = useRef(null)
  const contentRef1 = useRef(null)
  const contentRef2 = useRef(null)
  const contentRef3 = useRef(null)
  const contentRefs = useMemo(
    () => [contentRef0, contentRef1, contentRef2, contentRef3],
    []
  )
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
    if (descriptionRef.current) observer.observe(descriptionRef.current)
    if (imageRef.current) observer.observe(imageRef.current)
    contentRefs.forEach(ref => {
      if (ref.current) observer.observe(ref.current)
    })

    return () => {
      observer.disconnect()
    }
  }, [contentRefs])

  return (
    <div
      id="biome-content"
      ref={sectionRef}
      className="bg-gradient-to-b from-emerald-950 to-emerald-900 text-white py-16 md:py-24"
    >
      <div className="container mx-auto px-5 md:px-15 lg:px-30">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-emerald-700 rounded-full mb-6">
            <FaLeaf className="text-emerald-100 text-3xl" />
          </div>
          <h2
            ref={titleRef}
            className="text-4xl md:text-5xl font-bold mb-6 opacity-0 transition-opacity duration-1000"
          >
            Floresta Equatorial: O Berço da Biodiversidade
          </h2>
          <div className="w-24 h-1 bg-emerald-500 mx-auto mb-8 rounded-full"></div>
          <p
            ref={descriptionRef}
            className="text-xl md:text-2xl text-emerald-100 max-w-4xl mx-auto leading-relaxed opacity-0 transition-opacity duration-1000"
          >
            Exuberante, úmida e diversa. A floresta equatorial abriga a maior
            biodiversidade do planeta, com milhões de espécies em um complexo
            ecossistema de vida.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div
            ref={imageRef}
            className="relative rounded-xl overflow-hidden shadow-2xl opacity-0 transition-all duration-1000 transform translate-y-8 hover:shadow-[0_0_25px_rgba(16,185,129,0.4)]"
          >
            <Image
              src="/eforest_2.jpg"
              alt="Interior da Floresta Equatorial com densa vegetação e árvores altas"
              width={600}
              height={400}
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
              <p className="text-white/90 p-4 text-sm italic">
                Floresta Amazônica, exemplo de floresta equatorial com sua
                exuberante vegetação
              </p>
            </div>
          </div>

          <div
            ref={contentRefs[0]}
            className="opacity-0 transition-all duration-1000 transform translate-y-8"
          >
            <h3 className="text-3xl md:text-4xl font-bold mb-6 flex items-center">
              <span className="bg-emerald-700 p-2 rounded-lg mr-3 inline-flex">
                <FaMapMarkedAlt className="text-emerald-100" />
              </span>
              O Que é a Floresta Equatorial?
            </h3>
            <p className="text-lg text-emerald-100 leading-relaxed mb-6">
              A floresta equatorial é um bioma caracterizado por vegetação densa
              e exuberante, localizada próxima à linha do Equador. Com clima
              quente e úmido durante todo o ano, possui a maior biodiversidade
              terrestre do planeta.
            </p>
            <p className="text-lg text-emerald-100 leading-relaxed">
              A mais conhecida floresta equatorial é a Amazônia, mas também
              encontramos este bioma na Bacia do Congo na África, no Sudeste
              Asiático e em partes da Oceania.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          <div
            ref={contentRefs[1]}
            className="bg-emerald-800/50 rounded-xl p-6 shadow-lg border border-emerald-700/30 opacity-0 transition-all duration-1000 transform translate-y-8 hover:shadow-[0_0_15px_rgba(16,185,129,0.3)] hover:-translate-y-1"
          >
            <div className="bg-emerald-700 p-3 rounded-lg inline-flex mb-4">
              <FaCloudRain className="text-emerald-100 text-2xl" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Clima e Características</h3>
            <ul className="space-y-3 text-emerald-100">
              <li className="flex items-start">
                <span className="text-emerald-400 mr-2">•</span>
                <span>
                  <strong>Temperatura:</strong> Média anual de 25°C a 28°C, com
                  pouca variação sazonal
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-400 mr-2">•</span>
                <span>
                  <strong>Precipitação:</strong> Entre 2.000 e 4.000 mm anuais,
                  distribuídos ao longo do ano
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-400 mr-2">•</span>
                <span>
                  <strong>Umidade:</strong> Elevada (80-90%), criando um
                  ambiente constantemente úmido
                </span>
              </li>
            </ul>
          </div>

          <div
            ref={contentRefs[2]}
            className="bg-emerald-800/50 rounded-xl p-6 shadow-lg border border-emerald-700/30 opacity-0 transition-all duration-1000 transform translate-y-8 hover:shadow-[0_0_15px_rgba(16,185,129,0.3)] hover:-translate-y-1"
          >
            <div className="bg-emerald-700 p-3 rounded-lg inline-flex mb-4">
              <FaSeedling className="text-emerald-100 text-2xl" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Biodiversidade</h3>
            <ul className="space-y-3 text-emerald-100">
              <li className="flex items-start">
                <span className="text-emerald-400 mr-2">•</span>
                <span>
                  <strong>Flora:</strong> Mais de 40.000 espécies de plantas,
                  com árvores que podem ultrapassar 50m de altura
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-400 mr-2">•</span>
                <span>
                  <strong>Fauna:</strong> Abriga 1/3 de todas as espécies
                  animais terrestres conhecidas
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-400 mr-2">•</span>
                <span>
                  <strong>Estratificação:</strong> Diferentes níveis de
                  vegetação, desde o solo até o dossel
                </span>
              </li>
            </ul>
          </div>

          <div
            ref={contentRefs[3]}
            className="bg-emerald-800/50 rounded-xl p-6 shadow-lg border border-emerald-700/30 opacity-0 transition-all duration-1000 transform translate-y-8 hover:shadow-[0_0_15px_rgba(16,185,129,0.3)] hover:-translate-y-1"
          >
            <div className="bg-emerald-700 p-3 rounded-lg inline-flex mb-4">
              <FaPaw className="text-emerald-100 text-2xl" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Importância e Ameaças</h3>
            <div className="space-y-4 text-emerald-100">
              <div>
                <h4 className="font-semibold text-white">Importância:</h4>
                <p className="mt-1">
                  Regulação do clima global, conservação da biodiversidade,
                  fonte de recursos medicinais e produção de oxigênio.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-white">Ameaças:</h4>
                <p className="mt-1">
                  Desmatamento, queimadas, mineração ilegal e expansão agrícola
                  não sustentável são as principais ameaças.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-emerald-800/30 p-8 rounded-xl shadow-lg max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-4 text-center">Você Sabia?</h3>
          <p className="text-lg text-emerald-100 leading-relaxed text-center mb-0">
            A Floresta Amazônica produz cerca de 20% do oxigênio do planeta e
            contém 20% da água doce não congelada da Terra. É chamada de
            &quot;farmácia viva&quot; porque muitos medicamentos modernos
            derivam de suas plantas.
          </p>
        </div>
      </div>
    </div>
  )
}
