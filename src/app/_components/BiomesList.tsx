'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { FaLeaf, FaPaw, FaArrowRight } from 'react-icons/fa'

interface BiomeInfo {
  name: string
  path: string
  image: string
  description: string
  animal: string
  icon: string
}

export default function BiomesList() {
  const [hoveredBiome, setHoveredBiome] = useState<string | null>(null)

  const biomes: BiomeInfo[] = [
    {
      name: 'Tundra',
      path: '/tundra',
      image: '/tundra.jpg',
      description:
        'O bioma mais frio do planeta, caracterizado por baixas temperaturas, pouca precipitação e solo permanentemente congelado.',
      animal: 'Rena',
      icon: '❄️'
    },
    {
      name: 'Taiga',
      path: '/taiga',
      image: '/taiga.jpg',
      description:
        'A maior floresta do mundo, um cinturão verde que circunda o Hemisfério Norte com vastas florestas de coníferas.',
      animal: 'Lobo Cinzento',
      icon: '🌲'
    },
    {
      name: 'Floresta Temperada',
      path: '/tforest',
      image: '/tforest.jpg',
      description:
        'Bioma caracterizado por árvores decíduas, quatro estações bem definidas e solos férteis.',
      animal: 'Urso Pardo',
      icon: '🍂'
    },
    {
      name: 'Floresta Equatorial',
      path: '/eforest',
      image: '/eforest.jpg',
      description:
        'O berço da biodiversidade, com alta temperatura e umidade durante todo o ano, abrigando milhões de espécies.',
      animal: 'Onça Pintada',
      icon: '🌴'
    },
    {
      name: 'Campos',
      path: '/grasslands',
      image: '/grasslands.jpg',
      description:
        'Vastos ecossistemas dominados por gramíneas que cobrem cerca de 40% da superfície terrestre.',
      animal: 'Bisão Americano',
      icon: '🌾'
    },
    {
      name: 'Savana',
      path: '/savanna',
      image: '/savanna.jpg',
      description:
        'Ecossistema tropical caracterizado por uma mistura de árvores esparsas e extensas áreas de gramíneas, com estações secas e chuvosas bem definidas.',
      animal: 'Tamanduá-Bandeira',
      icon: '🌵'
    },
    {
      name: 'Deserto',
      path: '/desert',
      image: '/desert.jpg',
      description:
        'Bioma caracterizado pela escassez de água e condições climáticas extremas, com adaptações surpreendentes.',
      animal: 'Camelo',
      icon: '🏜️'
    },
    {
      name: 'Oceano',
      path: '/ocean',
      image: '/ocean.jpg',
      description:
        'O maior ecossistema da Terra, cobrindo mais de 70% da superfície do planeta e abrigando uma biodiversidade extraordinária.',
      animal: 'Pinguim',
      icon: '🌊'
    }
  ]

  return (
    <div
      id="biomes"
      className="py-20 bg-gradient-to-b from-blue-900 to-blue-800"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block text-blue-300 text-lg font-semibold tracking-wider mb-2">
            BIODIVERSIDADE GLOBAL
          </span>
          <h2 className="text-5xl font-bold text-white mb-6">
            Explore os Biomas
          </h2>
          <div className="w-24 h-1 bg-blue-400 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl max-w-3xl mx-auto text-blue-100 leading-relaxed">
            Descubra a incrível diversidade de ecossistemas do nosso planeta.
            Cada bioma possui características únicas e uma fauna representativa
            que merece nossa proteção.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {biomes.map(biome => (
            <Link
              href={biome.path}
              key={biome.path}
              className="group focus:outline-none focus:ring-4 focus:ring-blue-400 rounded-xl"
              onMouseEnter={() => setHoveredBiome(biome.path)}
              onMouseLeave={() => setHoveredBiome(null)}
              aria-label={`Explorar o bioma ${biome.name}`}
            >
              <div
                className="bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 
                transform hover:scale-105 hover:shadow-2xl h-full flex flex-col"
              >
                <div className="relative h-56">
                  <Image
                    src={biome.image}
                    alt={`Paisagem do bioma ${biome.name}`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    priority={biome.path === '/tundra'}
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent 
                    flex items-end justify-between p-6"
                  >
                    <h3 className="text-white text-2xl font-bold drop-shadow-md">
                      {biome.name}
                    </h3>
                    <span className="text-3xl">{biome.icon}</span>
                  </div>
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <div className="flex items-start mb-4">
                    <FaLeaf className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                    <p className="text-gray-700">{biome.description}</p>
                  </div>
                  <div className="flex items-center mt-auto pt-4 border-t border-gray-100">
                    <FaPaw className="text-amber-600 mr-2 flex-shrink-0" />
                    <p className="text-gray-900 font-medium">{biome.animal}</p>
                  </div>
                </div>
                <div
                  className={`bg-blue-600 text-white p-3 flex justify-center items-center transition-all duration-300 
                  ${
                    hoveredBiome === biome.path
                      ? 'opacity-100 h-12'
                      : 'opacity-0 h-0'
                  }`}
                >
                  <span className="mr-2">Explorar bioma</span>
                  <FaArrowRight />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
