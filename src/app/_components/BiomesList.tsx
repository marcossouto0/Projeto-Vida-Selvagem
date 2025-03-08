'use client'

import Link from 'next/link'
import Image from 'next/image'

interface BiomeInfo {
  name: string
  path: string
  image: string
  description: string
  animal: string
}

export default function BiomesList() {
  const biomes: BiomeInfo[] = [
    {
      name: 'Tundra',
      path: '/tundra',
      image: '/tundra.jpg',
      description:
        'O bioma mais frio do planeta, caracterizado por baixas temperaturas, pouca precipitação e solo permanentemente congelado.',
      animal: 'Rena'
    },
    {
      name: 'Taiga',
      path: '/taiga',
      image: '/taiga.jpg',
      description:
        'A maior floresta do mundo, um cinturão verde que circunda o Hemisfério Norte com vastas florestas de coníferas.',
      animal: 'Lobo Cinzento'
    },
    {
      name: 'Floresta Temperada',
      path: '/tforest',
      image: '/tforest.jpg',
      description:
        'Bioma caracterizado por árvores decíduas, quatro estações bem definidas e solos férteis.',
      animal: 'Urso Pardo'
    },
    {
      name: 'Floresta Equatorial',
      path: '/eforest',
      image: '/eforest.jpg',
      description:
        'O berço da biodiversidade, com alta temperatura e umidade durante todo o ano, abrigando milhões de espécies.',
      animal: 'Onça Pintada'
    },
    {
      name: 'Campos',
      path: '/grasslands',
      image: '/grasslands.jpg',
      description:
        'Vastos ecossistemas dominados por gramíneas que cobrem cerca de 40% da superfície terrestre.',
      animal: 'Bisão Americano'
    },
    {
      name: 'Savana',
      path: '/savanna',
      image: '/savanna.jpg',
      description:
        'Ecossistema tropical caracterizado por uma mistura de árvores esparsas e extensas áreas de gramíneas, com estações secas e chuvosas bem definidas.',
      animal: 'Tamanduá-Bandeira'
    },
    {
      name: 'Deserto',
      path: '/desert',
      image: '/desert.jpg',
      description:
        'Bioma caracterizado pela escassez de água e condições climáticas extremas, com adaptações surpreendentes.',
      animal: 'Camelo'
    },
    {
      name: 'Oceano',
      path: '/ocean',
      image: '/ocean.jpg',
      description:
        'O maior ecossistema da Terra, cobrindo mais de 70% da superfície do planeta e abrigando uma biodiversidade extraordinária.',
      animal: 'Pinguim'
    }
  ]

  return (
    <div className="py-16 bg-blue-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">
          Explore os Biomas
        </h2>
        <p className="text-xl text-center mb-12 max-w-4xl mx-auto text-blue-100">
          Todos os biomas estão disponíveis para teste neste branch. Clique em
          um bioma para explorar suas características, fauna representativa e
          ações de conservação.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {biomes.map(biome => (
            <Link href={biome.path} key={biome.path} className="group">
              <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl">
                <div className="relative h-48">
                  <Image
                    src={biome.image}
                    alt={biome.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <h3 className="text-white text-2xl font-bold">
                      {biome.name}
                    </h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 mb-4">{biome.description}</p>
                  <p className="text-gray-900 font-semibold">
                    Animal: {biome.animal}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
