'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect, useRef } from 'react'
import { FaLeaf, FaPaw, FaArrowRight, FaGlobeAmericas } from 'react-icons/fa'

interface BiomeInfo {
  name: string
  path: string
  image: string
  description: string
  animal: string
  icon: string
  color: string
  available: boolean
}

export default function BiomesList() {
  const [hoveredBiome, setHoveredBiome] = useState<string | null>(null)
  const [visibleBiomes, setVisibleBiomes] = useState<string[]>([])
  const biomesRef = useRef<HTMLDivElement>(null)

  const biomes: BiomeInfo[] = [
    {
      name: 'Tundra',
      path: '/tundra',
      image: '/tundra.jpg',
      description:
        'O bioma mais frio do planeta, caracterizado por baixas temperaturas, pouca precipitação e solo permanentemente congelado.',
      animal: 'Rena',
      icon: '❄️',
      color: 'from-blue-900 to-blue-700',
      available: true
    },
    {
      name: 'Taiga',
      path: '/taiga',
      image: '/taiga.jpg',
      description:
        'A maior floresta do mundo, um cinturão verde que circunda o Hemisfério Norte com vastas florestas de coníferas.',
      animal: 'Lobo Cinzento',
      icon: '🌲',
      color: 'from-emerald-900 to-emerald-700',
      available: false
    },
    {
      name: 'Floresta Temperada',
      path: '/tforest',
      image: '/tforest.jpg',
      description:
        'Bioma caracterizado por árvores decíduas, quatro estações bem definidas e solos férteis.',
      animal: 'Urso Pardo',
      icon: '🍂',
      color: 'from-green-800 to-green-600',
      available: false
    },
    {
      name: 'Floresta Equatorial',
      path: '/eforest',
      image: '/eforest.jpg',
      description:
        'O berço da biodiversidade, com alta temperatura e umidade durante todo o ano, abrigando milhões de espécies.',
      animal: 'Onça Pintada',
      icon: '🌴',
      color: 'from-green-900 to-green-700',
      available: false
    },
    {
      name: 'Campos',
      path: '/grasslands',
      image: '/grasslands.jpg',
      description:
        'Vastos ecossistemas dominados por gramíneas que cobrem cerca de 40% da superfície terrestre.',
      animal: 'Bisão Americano',
      icon: '🌾',
      color: 'from-yellow-700 to-yellow-500',
      available: false
    },
    {
      name: 'Savana',
      path: '/savanna',
      image: '/savanna.jpg',
      description:
        'Ecossistema tropical caracterizado por uma mistura de árvores esparsas e extensas áreas de gramíneas, com estações secas e chuvosas bem definidas.',
      animal: 'Tamanduá-Bandeira',
      icon: '🌵',
      color: 'from-amber-800 to-amber-600',
      available: false
    },
    {
      name: 'Deserto',
      path: '/desert',
      image: '/desert.jpg',
      description:
        'Bioma caracterizado pela escassez de água e condições climáticas extremas, com adaptações surpreendentes.',
      animal: 'Camelo',
      icon: '🏜️',
      color: 'from-orange-800 to-orange-600',
      available: false
    },
    {
      name: 'Oceano',
      path: '/ocean',
      image: '/ocean.jpg',
      description:
        'O maior ecossistema da Terra, cobrindo mais de 70% da superfície do planeta e abrigando uma biodiversidade extraordinária.',
      animal: 'Pinguim',
      icon: '🌊',
      color: 'from-blue-900 to-blue-700',
      available: false
    }
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setVisibleBiomes(prevVisible => [...prevVisible, entry.target.id])
          }
        })
      },
      { threshold: 0.15 }
    )

    const biomesElements = document.querySelectorAll('.biome-card')
    biomesElements.forEach(el => observer.observe(el))

    return () => {
      biomesElements.forEach(el => observer.unobserve(el))
    }
  }, [])

  return (
    <div
      id="biomes"
      className="py-20 bg-gradient-to-b from-blue-950 via-blue-900 to-blue-800 overflow-hidden"
    >
      <div className="container mx-auto px-4" ref={biomesRef}>
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center justify-center p-3 bg-blue-700 rounded-full mb-6">
            <FaGlobeAmericas className="text-blue-100 text-3xl" />
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Explore os Biomas
          </h2>
          <div className="w-32 h-1 bg-blue-400 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl max-w-3xl mx-auto text-blue-100 leading-relaxed">
            Descubra a incrível diversidade de ecossistemas do nosso planeta.
            Cada bioma possui características únicas e uma fauna representativa
            que merece nossa proteção.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {biomes.map((biome, index) => (
            <div
              key={biome.path}
              className="group focus:outline-none focus:ring-4 focus:ring-blue-400 rounded-xl biome-card"
              id={biome.path.replace('/', '')}
              onMouseEnter={() => setHoveredBiome(biome.path)}
              onMouseLeave={() => setHoveredBiome(null)}
            >
              <div
                className={`bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-500 
                transform ${
                  visibleBiomes.includes(biome.path.replace('/', ''))
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-16'
                }
                ${
                  biome.available
                    ? 'hover:scale-105 hover:shadow-2xl'
                    : 'hover:shadow-md cursor-not-allowed'
                } h-full flex flex-col relative`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {!biome.available && (
                  <div className="absolute inset-0 bg-gray-900/50 z-30 flex flex-col items-center justify-center">
                    <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg text-center">
                      <p className="text-gray-800 font-semibold">
                        Disponível em breve
                      </p>
                      <p className="text-gray-600 text-sm">
                        Aguarde o dia da apresentação
                      </p>
                    </div>
                  </div>
                )}
                <div className="relative h-64">
                  <Image
                    src={biome.image}
                    alt={`Paisagem do bioma ${biome.name}`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className={`object-cover z-0 transition-transform duration-700 ${
                      biome.available
                        ? 'group-hover:scale-110'
                        : 'filter grayscale-[30%]'
                    }`}
                    priority={index < 4}
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-t ${
                      biome.color
                    } ${
                      biome.available
                        ? 'opacity-60 group-hover:opacity-70'
                        : 'opacity-40'
                    } transition-opacity duration-300`}
                  ></div>
                  <div className="absolute inset-0 flex items-end justify-between p-6">
                    <h3 className="text-white text-2xl font-bold drop-shadow-md flex items-center">
                      <span className="text-3xl mr-2">{biome.icon}</span>
                      {biome.name}
                    </h3>
                    <div
                      className={`${
                        biome.available ? 'bg-white/20' : 'bg-gray-400/30'
                      } p-2 rounded-full backdrop-blur-sm`}
                    >
                      <FaArrowRight
                        className={`${
                          biome.available
                            ? 'text-white transform group-hover:translate-x-1'
                            : 'text-gray-300'
                        } transition-transform duration-300`}
                      />
                    </div>
                  </div>
                </div>
                <div
                  className={`p-6 flex-grow flex flex-col z-10 bg-gradient-to-br from-white to-gray-50 ${
                    !biome.available && 'opacity-75'
                  }`}
                >
                  <div className="flex items-start mb-4">
                    <FaLeaf
                      className={`${
                        biome.available
                          ? 'text-green-500 group-hover:scale-110'
                          : 'text-green-300'
                      } mt-1 mr-2 flex-shrink-0 transition-transform duration-300`}
                    />
                    <p className="text-gray-700">{biome.description}</p>
                  </div>
                  <div className="flex items-center mt-auto pt-4 border-t border-gray-100">
                    <div
                      className={`${
                        biome.available ? 'bg-amber-100' : 'bg-gray-100'
                      } p-2 rounded-full mr-3`}
                    >
                      <FaPaw
                        className={`${
                          biome.available
                            ? 'text-amber-600 group-hover:rotate-12'
                            : 'text-gray-400'
                        } transition-transform duration-300`}
                      />
                    </div>
                    <p
                      className={`${
                        biome.available ? 'text-gray-900' : 'text-gray-500'
                      } font-medium`}
                    >
                      {biome.animal}
                    </p>
                  </div>
                </div>
                {biome.available ? (
                  <Link
                    href={biome.path}
                    className={`bg-gradient-to-r ${
                      biome.color
                    } text-white p-4 flex justify-center items-center transition-all duration-300 
                    ${
                      hoveredBiome === biome.path
                        ? 'opacity-100 max-h-14'
                        : 'opacity-0 max-h-0 overflow-hidden'
                    }`}
                    aria-label={`Explorar o bioma ${biome.name}`}
                  >
                    <span className="mr-2 font-semibold">Explorar bioma</span>
                    <FaArrowRight className="animate-pulse" />
                  </Link>
                ) : (
                  <div
                    className={`bg-gray-400 text-white p-4 flex justify-center items-center transition-all duration-300 cursor-not-allowed
                    ${
                      hoveredBiome === biome.path
                        ? 'opacity-100 max-h-14'
                        : 'opacity-0 max-h-0 overflow-hidden'
                    }`}
                  >
                    <span className="mr-2 font-semibold">Indisponível</span>
                    <FaArrowRight className="opacity-50" />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
