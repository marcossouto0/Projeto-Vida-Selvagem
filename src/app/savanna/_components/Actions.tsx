'use client'

import { useRef, useEffect } from 'react'
import {
  FaShieldAlt,
  FaFire,
  FaRecycle,
  FaSearch,
  FaGraduationCap
} from 'react-icons/fa'

export default function Actions() {
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
      className="bg-gradient-to-b from-amber-950 to-amber-900 text-white py-16 md:py-24 opacity-0 transition-opacity duration-1000"
    >
      <div className="container mx-auto px-5 md:px-15 lg:px-30">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Nossas Ações</h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-amber-100 max-w-4xl mx-auto leading-relaxed">
            Conheça as iniciativas que desenvolvemos para proteger as savanas e
            seus habitantes, com foco especial na conservação do
            tamanduá-bandeira e seu habitat.
          </p>
        </div>

        <div className="space-y-16">
          {/* Conservação e Proteção */}
          <div
            ref={(el: HTMLDivElement | null) => {
              contentRefs.current[0] = el;
            }}
            className="opacity-0 transition-all duration-1000 transform translate-y-8"
          >
            <div className="flex items-center mb-6">
              <div className="bg-amber-600 p-3 rounded-lg mr-4">
                <FaShieldAlt className="text-amber-100 text-2xl" />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold">
                Conservação e Proteção
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-amber-800/30 p-6 rounded-xl border border-amber-700/30 hover:bg-amber-800/50 transition-colors duration-300">
                <h4 className="text-xl md:text-2xl font-semibold mb-3 text-amber-300">
                  Criação e ampliação de áreas protegidas
                </h4>
                <p className="text-amber-100">
                  Apoiar a expansão de áreas protegidas nas savanas globais, que
                  estão entre os biomas menos protegidos do mundo.
                </p>
              </div>

              <div className="bg-amber-800/30 p-6 rounded-xl border border-amber-700/30 hover:bg-amber-800/50 transition-colors duration-300">
                <h4 className="text-xl md:text-2xl font-semibold mb-3 text-amber-300">
                  Corredores ecológicos
                </h4>
                <p className="text-amber-100">
                  Estabelecer conexões entre fragmentos de savanas para permitir
                  o deslocamento de tamanduás-bandeira e outras espécies de
                  amplo território.
                </p>
              </div>

              <div className="bg-amber-800/30 p-6 rounded-xl border border-amber-700/30 hover:bg-amber-800/50 transition-colors duration-300">
                <h4 className="text-xl md:text-2xl font-semibold mb-3 text-amber-300">
                  Monitoramento de populações
                </h4>
                <p className="text-amber-100">
                  Acompanhar o status das populações de tamanduás-bandeira
                  através de tecnologias como armadilhas fotográficas e
                  rastreamento.
                </p>
              </div>
            </div>
          </div>

          {/* Manejo Integrado do Fogo */}
          <div
            ref={(el: HTMLDivElement | null) => {
              contentRefs.current[1] = el;
            }}
            className="opacity-0 transition-all duration-1000 transform translate-y-8"
          >
            <div className="flex items-center mb-6">
              <div className="bg-amber-600 p-3 rounded-lg mr-4">
                <FaFire className="text-amber-100 text-2xl" />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold">
                Manejo Integrado do Fogo
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-amber-800/30 p-6 rounded-xl border border-amber-700/30 hover:bg-amber-800/50 transition-colors duration-300">
                <h4 className="text-xl md:text-2xl font-semibold mb-3 text-amber-300">
                  Queimadas prescritas
                </h4>
                <p className="text-amber-100">
                  Implementar técnicas de queima controlada em épocas adequadas,
                  respeitando o papel ecológico do fogo nas savanas.
                </p>
              </div>

              <div className="bg-amber-800/30 p-6 rounded-xl border border-amber-700/30 hover:bg-amber-800/50 transition-colors duration-300">
                <h4 className="text-xl md:text-2xl font-semibold mb-3 text-amber-300">
                  Brigadas comunitárias
                </h4>
                <p className="text-amber-100">
                  Formar e equipar brigadas locais para prevenção e combate a
                  incêndios descontrolados.
                </p>
              </div>

              <div className="bg-amber-800/30 p-6 rounded-xl border border-amber-700/30 hover:bg-amber-800/50 transition-colors duration-300">
                <h4 className="text-xl md:text-2xl font-semibold mb-3 text-amber-300">
                  Sistemas de alerta precoce
                </h4>
                <p className="text-amber-100">
                  Desenvolver tecnologias para detecção rápida de focos de
                  incêndio, permitindo ação imediata.
                </p>
              </div>
            </div>
          </div>

          {/* Uso Sustentável */}
          <div
            ref={(el: HTMLDivElement | null) => {
              contentRefs.current[2] = el;
            }}
            className="opacity-0 transition-all duration-1000 transform translate-y-8"
          >
            <div className="flex items-center mb-6">
              <div className="bg-amber-600 p-3 rounded-lg mr-4">
                <FaRecycle className="text-amber-100 text-2xl" />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold">
                Uso Sustentável
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-amber-800/30 p-6 rounded-xl border border-amber-700/30 hover:bg-amber-800/50 transition-colors duration-300">
                <h4 className="text-xl md:text-2xl font-semibold mb-3 text-amber-300">
                  Práticas agrícolas sustentáveis
                </h4>
                <p className="text-amber-100">
                  Promover técnicas que permitam a produção de alimentos com
                  menor impacto sobre as savanas nativas.
                </p>
              </div>

              <div className="bg-amber-800/30 p-6 rounded-xl border border-amber-700/30 hover:bg-amber-800/50 transition-colors duration-300">
                <h4 className="text-xl md:text-2xl font-semibold mb-3 text-amber-300">
                  Extrativismo sustentável
                </h4>
                <p className="text-amber-100">
                  Apoiar a coleta e comercialização de produtos não-madeireiros
                  das savanas, gerando renda para comunidades locais.
                </p>
              </div>

              <div className="bg-amber-800/30 p-6 rounded-xl border border-amber-700/30 hover:bg-amber-800/50 transition-colors duration-300">
                <h4 className="text-xl md:text-2xl font-semibold mb-3 text-amber-300">
                  Turismo ecológico
                </h4>
                <p className="text-amber-100">
                  Desenvolver roteiros de observação de vida selvagem que
                  valorizem as savanas e gerem recursos para sua conservação.
                </p>
              </div>
            </div>
          </div>

          {/* Pesquisa e Monitoramento */}
          <div
            ref={(el: HTMLDivElement | null) => {
              contentRefs.current[3] = el;
            }}
            className="opacity-0 transition-all duration-1000 transform translate-y-8"
          >
            <div className="flex items-center mb-6">
              <div className="bg-amber-600 p-3 rounded-lg mr-4">
                <FaSearch className="text-amber-100 text-2xl" />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold">
                Pesquisa e Monitoramento
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-amber-800/30 p-6 rounded-xl border border-amber-700/30 hover:bg-amber-800/50 transition-colors duration-300">
                <h4 className="text-xl md:text-2xl font-semibold mb-3 text-amber-300">
                  Estudos ecológicos
                </h4>
                <p className="text-amber-100">
                  Apoiar pesquisas sobre a ecologia das savanas e o papel do
                  tamanduá-bandeira como espécie-chave.
                </p>
              </div>

              <div className="bg-amber-800/30 p-6 rounded-xl border border-amber-700/30 hover:bg-amber-800/50 transition-colors duration-300">
                <h4 className="text-xl md:text-2xl font-semibold mb-3 text-amber-300">
                  Monitoramento por satélite
                </h4>
                <p className="text-amber-100">
                  Utilizar imagens de satélite para acompanhar mudanças na
                  cobertura vegetal das savanas e identificar áreas prioritárias
                  para conservação.
                </p>
              </div>

              <div className="bg-amber-800/30 p-6 rounded-xl border border-amber-700/30 hover:bg-amber-800/50 transition-colors duration-300">
                <h4 className="text-xl md:text-2xl font-semibold mb-3 text-amber-300">
                  Ciência do solo
                </h4>
                <p className="text-amber-100">
                  Investigar o potencial das savanas para sequestro de carbono e
                  mitigação das mudanças climáticas.
                </p>
              </div>
            </div>
          </div>

          {/* Educação e Conscientização */}
          <div
            ref={(el: HTMLDivElement | null) => {
              contentRefs.current[4] = el;
            }}
            className="opacity-0 transition-all duration-1000 transform translate-y-8"
          >
            <div className="flex items-center mb-6">
              <div className="bg-amber-600 p-3 rounded-lg mr-4">
                <FaGraduationCap className="text-amber-100 text-2xl" />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold">
                Educação e Conscientização
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-amber-800/30 p-6 rounded-xl border border-amber-700/30 hover:bg-amber-800/50 transition-colors duration-300">
                <h4 className="text-xl md:text-2xl font-semibold mb-3 text-amber-300">
                  Programas educativos
                </h4>
                <p className="text-amber-100">
                  Desenvolver materiais sobre a importância das savanas e do
                  tamanduá-bandeira para escolas e comunidades.
                </p>
              </div>

              <div className="bg-amber-800/30 p-6 rounded-xl border border-amber-700/30 hover:bg-amber-800/50 transition-colors duration-300">
                <h4 className="text-xl md:text-2xl font-semibold mb-3 text-amber-300">
                  Campanhas de sensibilização
                </h4>
                <p className="text-amber-100">
                  Aumentar o conhecimento público sobre o valor das savanas,
                  frequentemente subestimadas em comparação com florestas.
                </p>
              </div>

              <div className="bg-amber-800/30 p-6 rounded-xl border border-amber-700/30 hover:bg-amber-800/50 transition-colors duration-300">
                <h4 className="text-xl md:text-2xl font-semibold mb-3 text-amber-300">
                  Engajamento comunitário
                </h4>
                <p className="text-amber-100">
                  Envolver comunidades locais na conservação das savanas,
                  valorizando seu conhecimento tradicional e promovendo sua
                  participação nas decisões de manejo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
