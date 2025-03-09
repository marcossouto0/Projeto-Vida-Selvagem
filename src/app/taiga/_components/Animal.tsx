'use client'

import Image from 'next/image'
import { useRef, useEffect } from 'react'
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
  const contentRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null)
  ]

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
  }, [])

  return (
    <div
      id="animal-section"
      ref={sectionRef}
      className="bg-gradient-to-b from-emerald-900 to-emerald-950 text-white"
    >
      <div className="mx-5 md:mx-15 lg:mx-30 py-10 md:py-20">
        <div>
          <h2
            ref={titleRef}
            className="text-4xl md:text-5xl font-bold opacity-0 transition-opacity duration-1000 flex items-center gap-3"
          >
            <GiWolfHowl className="text-emerald-400" /> Lobo Cinzento: O
            Guardião da Taiga
          </h2>
          <p
            ref={descriptionRef}
            className="text-xl md:text-2xl mt-5 opacity-0 transition-opacity duration-1000 delay-300"
          >
            Inteligente, social e resiliente, o lobo cinzento é um predador de
            topo que desempenha um papel crucial no equilíbrio dos ecossistemas
            boreais. Sua presença é um indicador da saúde da taiga, mas enfrenta
            ameaças crescentes à sua sobrevivência.
          </p>
        </div>
        <div className="mt-10 md:mt-20 grid grid-cols-1 xl:grid-cols-2 gap-10 md:gap-20">
          <div
            ref={imageRef}
            className="flex justify-center xl:order-2 opacity-0 transition-opacity duration-1000 delay-500"
          >
            <div className="relative overflow-hidden rounded-xl shadow-xl group">
              <Image
                src="/wolf.jpg"
                alt="Lobo Cinzento"
                width={500}
                height={500}
                className="rounded-xl transition-transform duration-700 group-hover:scale-105"
                style={{ objectFit: 'cover', height: '100%' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/70 to-transparent opacity-70"></div>
            </div>
          </div>
          <div className="flex flex-col justify-around gap-10 md:gap-20">
            <div
              ref={contentRefs[0]}
              className="opacity-0 transition-opacity duration-1000 delay-700 bg-emerald-900/50 p-6 rounded-lg shadow-lg border-l-4 border-emerald-400"
            >
              <h3 className="text-3xl md:text-4xl font-bold flex items-center gap-2">
                <FaPaw className="text-emerald-400" /> Características
              </h3>
              <p className="text-xl md:text-2xl mt-5">
                O lobo cinzento (Canis lupus) é um mamífero carnívoro de porte
                médio a grande, com pelagem densa que varia do cinza ao marrom.
                Possui sentidos aguçados, especialmente olfato e audição,
                adaptações essenciais para a caça em florestas densas da taiga.
              </p>
            </div>
            <div
              ref={contentRefs[1]}
              className="opacity-0 transition-opacity duration-1000 delay-900 bg-emerald-900/50 p-6 rounded-lg shadow-lg border-l-4 border-emerald-400"
            >
              <h3 className="text-3xl md:text-4xl font-bold flex items-center gap-2">
                <FaTree className="text-emerald-400" /> Habitat e Comportamento
              </h3>
              <p className="text-xl md:text-2xl mt-5">
                Vive em alcateias hierarquizadas nas vastas florestas boreais,
                onde caça em grupo presas como alces e renas. Sua comunicação
                complexa inclui uivos, linguagem corporal e marcação
                territorial, essenciais para a coordenação da alcateia.
              </p>
            </div>
            <div
              ref={contentRefs[2]}
              className="opacity-0 transition-opacity duration-1000 delay-1100 bg-emerald-900/50 p-6 rounded-lg shadow-lg border-l-4 border-emerald-400"
            >
              <h3 className="text-3xl md:text-4xl font-bold flex items-center gap-2">
                <FaLeaf className="text-emerald-400" /> Importância Ecológica
              </h3>
              <p className="text-xl md:text-2xl mt-5">
                Como predadores de topo, os lobos regulam populações de
                herbívoros, prevenindo o sobre pastoreio e promovendo a
                regeneração florestal. Sua presença influencia toda a cadeia
                alimentar, contribuindo para a biodiversidade e resiliência da
                taiga.
              </p>
            </div>
          </div>
        </div>
        <div
          ref={contentRefs[3]}
          className="bg-emerald-900/30 p-8 rounded-xl shadow-lg border border-emerald-400/30 mt-16 opacity-0 transition-all duration-1000 transform translate-y-8"
        >
          <h3 className="text-3xl md:text-4xl font-bold flex items-center gap-3">
            <FaTree className="text-emerald-400" />
            Comportamento e Habitat
          </h3>
          <p className="text-xl md:text-2xl mt-6 text-emerald-100 leading-relaxed">
            A taiga é um dos habitats preferenciais do lobo cinzento, embora a
            espécie seja extremamente adaptável e ocorra em diversos biomas,
            desde florestas temperadas até tundras árticas. Na floresta boreal,
            os lobos estabelecem territórios extensos, que podem variar de 80 a
            2.500 km², dependendo da disponibilidade de presas.
          </p>
          <p className="text-xl md:text-2xl mt-5 text-emerald-100 leading-relaxed">
            Como predadores de topo, os lobos se alimentam principalmente de
            ungulados como alces, caribus e veados, mas também consomem
            castores, lebres e outros pequenos mamíferos quando necessário. Sua
            estratégia de caça envolve perseguições de longa distância,
            identificando e isolando indivíduos vulneráveis do rebanho.
          </p>
          <p className="text-xl md:text-2xl mt-5 text-emerald-100 leading-relaxed">
            A comunicação entre lobos é sofisticada, combinando vocalizações
            (uivos, rosnados, latidos), linguagem corporal e marcações de
            território com urina e fezes. O famoso uivo do lobo pode ser ouvido
            a até 10 km de distância e serve para reunir a alcateia, defender
            território e fortalecer laços sociais.
          </p>
        </div>

        <div
          ref={contentRefs[4]}
          className="bg-emerald-900/30 p-8 rounded-xl shadow-lg border border-emerald-400/30 mt-16 opacity-0 transition-all duration-1000 transform translate-y-8"
        >
          <h3 className="text-3xl md:text-4xl font-bold flex items-center gap-3">
            <FaPaw className="text-emerald-400" />
            Importância
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
            <div className="bg-emerald-800/30 p-6 rounded-lg border-l-4 border-emerald-400">
              <h4 className="text-2xl md:text-3xl font-bold text-emerald-300">
                Ecológica
              </h4>
              <p className="text-xl md:text-2xl mt-4 text-emerald-100">
                Como predadores de topo, os lobos regulam populações de
                herbívoros, prevenindo o sobrepastoreio e promovendo a
                regeneração florestal. O conceito de &ldquo;cascata
                trófica&rdquo; foi demonstrado em Yellowstone, onde a
                reintrodução de lobos transformou positivamente todo o
                ecossistema, incluindo o curso dos rios.
              </p>
            </div>
            <div className="bg-emerald-800/30 p-6 rounded-lg border-l-4 border-emerald-400">
              <h4 className="text-2xl md:text-3xl font-bold text-emerald-300">
                Cultural
              </h4>
              <p className="text-xl md:text-2xl mt-4 text-emerald-100">
                Os lobos ocupam lugar de destaque no folclore, mitologia e
                literatura de muitas culturas do Hemisfério Norte. Para povos
                indígenas como os Inuit e Dene, o lobo é um animal espiritual
                importante, símbolo de lealdade, força e sabedoria.
              </p>
            </div>
            <div className="bg-emerald-800/30 p-6 rounded-lg border-l-4 border-emerald-400">
              <h4 className="text-2xl md:text-3xl font-bold text-emerald-300">
                Científica
              </h4>
              <p className="text-xl md:text-2xl mt-4 text-emerald-100">
                Estudos sobre comportamento social dos lobos têm aplicações em
                diversas áreas, desde ecologia até psicologia. Como espécie
                guarda-chuva, a conservação do lobo beneficia muitas outras
                espécies que compartilham seu habitat.
              </p>
            </div>
          </div>
        </div>

        <div
          ref={contentRefs[5]}
          className="bg-emerald-900/30 p-8 rounded-xl shadow-lg border border-emerald-400/30 mt-16 opacity-0 transition-all duration-1000 transform translate-y-8"
        >
          <h3 className="text-3xl md:text-4xl font-bold flex items-center gap-3">
            <FaExclamationTriangle className="text-emerald-400" />
            Ameaças
          </h3>
          <p className="text-xl md:text-2xl mt-6 text-emerald-100 leading-relaxed">
            Historicamente, os lobos foram intensamente perseguidos e eliminados
            de grande parte de sua área de distribuição original. Embora algumas
            populações estejam se recuperando, a espécie ainda enfrenta
            múltiplas ameaças: perda e fragmentação de habitat devido ao
            desenvolvimento humano, caça ilegal e conflitos com criadores de
            gado.
          </p>
          <p className="text-xl md:text-2xl mt-5 text-emerald-100 leading-relaxed">
            As mudanças climáticas representam uma ameaça crescente, alterando a
            disponibilidade de presas e os padrões de neve na taiga. Além disso,
            a hibridização com cães domésticos e doenças como a sarna e a raiva
            podem afetar significativamente populações isoladas.
          </p>
          <p className="text-xl md:text-2xl mt-5 text-emerald-100 leading-relaxed">
            O status de conservação do lobo cinzento varia globalmente. Enquanto
            algumas populações estão estáveis, outras permanecem ameaçadas ou em
            perigo. Na Europa e América do Norte, esforços de conservação têm
            permitido a recuperação em algumas áreas, mas a coexistência com
            humanos continua sendo um desafio significativo.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div
            ref={contentRefs[6]}
            className="bg-emerald-900/30 p-6 rounded-lg shadow-lg border-l-4 border-emerald-400 opacity-0 transition-all duration-1000 transform translate-y-8"
          >
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <GiWolfHowl className="text-emerald-400 text-sm" /> Ameaças
            </h3>
            <ul className="space-y-2 list-disc list-inside">
              <li>Perda de habitat devido ao desmatamento e expansão humana</li>
              <li>
                Caça ilegal e perseguição por conflitos com criadores de gado
              </li>
              <li>Fragmentação de territórios por estradas e infraestrutura</li>
              <li>Mudanças climáticas afetando a disponibilidade de presas</li>
            </ul>
          </div>

          <div
            ref={contentRefs[7]}
            className="bg-emerald-900/30 p-6 rounded-lg shadow-lg border-l-4 border-emerald-400 opacity-0 transition-all duration-1000 transform translate-y-8"
          >
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <FaShieldAlt className="text-emerald-400 text-sm" /> Conservação
            </h3>
            <ul className="space-y-2 list-disc list-inside">
              <li>Criação de áreas protegidas nas florestas boreais</li>
              <li>Programas de reintrodução em regiões onde foram extintos</li>
              <li>Educação ambiental para reduzir conflitos humanos-lobo</li>
              <li>Monitoramento de populações com tecnologias não invasivas</li>
            </ul>
          </div>
        </div>

        <div
          ref={contentRefs[8]}
          className="mt-16 text-center opacity-0 transition-all duration-1000 transform translate-y-8"
        >
          <p className="text-xl italic">
            &ldquo;O lobo é um símbolo de resistência e adaptação, qualidades
            essenciais para enfrentar os desafios ambientais do nosso
            tempo.&rdquo;
          </p>
        </div>
      </div>
    </div>
  )
}
