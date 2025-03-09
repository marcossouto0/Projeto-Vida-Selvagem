'use client'

import { useRef, useEffect } from 'react'
import {
  FaGraduationCap,
  FaHandsHelping,
  FaRecycle,
  FaUsers,
  FaWater
} from 'react-icons/fa'

export default function Actions() {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const actionRefs = [useRef(null), useRef(null), useRef(null), useRef(null)]

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
    actionRefs.forEach(ref => {
      if (ref.current) observer.observe(ref.current)
    })

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <div
      className="bg-gradient-to-b from-blue-100 to-blue-200 py-16 md:py-24"
      ref={sectionRef}
    >
      <div className="container mx-auto px-5 md:px-15 lg:px-30">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-blue-700 rounded-full mb-6">
            <FaWater className="text-blue-100 text-3xl" />
          </div>
          <h2
            ref={titleRef}
            className="text-4xl md:text-5xl font-bold mb-6 text-blue-800 opacity-0 transition-opacity duration-1000"
          >
            Nossas Ações
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl md:text-2xl text-blue-700 max-w-4xl mx-auto leading-relaxed">
            Conheça as iniciativas para proteger os oceanos e suas espécies,
            incluindo os pinguins e toda a biodiversidade marinha.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div
            ref={actionRefs[0]}
            className="bg-white rounded-xl p-8 shadow-lg border border-blue-200 opacity-0 transition-all duration-1000 transform translate-y-8 hover:shadow-2xl hover:-translate-y-1"
          >
            <div className="bg-blue-700 p-3 rounded-lg inline-flex mb-6">
              <FaHandsHelping className="text-blue-100 text-2xl" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-blue-800">
              Conservação Marinha
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2 mt-1 text-lg">•</span>
                <span className="text-gray-700">
                  <strong className="text-blue-700">
                    Áreas Marinhas Protegidas
                  </strong>{' '}
                  – Apoiar a criação e expansão de áreas protegidas nos oceanos,
                  que atualmente cobrem menos de 8% da superfície marinha
                  global.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2 mt-1 text-lg">•</span>
                <span className="text-gray-700">
                  <strong className="text-blue-700">
                    Proteção de habitats críticos
                  </strong>{' '}
                  – Identificar e preservar áreas essenciais para alimentação,
                  reprodução e migração de espécies marinhas, incluindo colônias
                  de pinguins.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2 mt-1 text-lg">•</span>
                <span className="text-gray-700">
                  <strong className="text-blue-700">
                    Restauração de ecossistemas
                  </strong>{' '}
                  – Recuperar habitats marinhos degradados, como recifes de
                  coral, manguezais e pradarias marinhas, que são berçários para
                  inúmeras espécies.
                </span>
              </li>
            </ul>
          </div>

          <div
            ref={actionRefs[1]}
            className="bg-white rounded-xl p-8 shadow-lg border border-blue-200 opacity-0 transition-all duration-1000 transform translate-y-8 hover:shadow-2xl hover:-translate-y-1"
          >
            <div className="bg-blue-700 p-3 rounded-lg inline-flex mb-6">
              <FaRecycle className="text-blue-100 text-2xl" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-blue-800">
              Combate à Poluição
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2 mt-1 text-lg">•</span>
                <span className="text-gray-700">
                  <strong className="text-blue-700">
                    Limpeza de praias e oceanos
                  </strong>{' '}
                  – Organizar e apoiar iniciativas de remoção de resíduos em
                  ambientes costeiros e marinhos.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2 mt-1 text-lg">•</span>
                <span className="text-gray-700">
                  <strong className="text-blue-700">
                    Redução de plásticos
                  </strong>{' '}
                  – Promover alternativas sustentáveis ao plástico de uso único
                  e incentivar a economia circular.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2 mt-1 text-lg">•</span>
                <span className="text-gray-700">
                  <strong className="text-blue-700">
                    Monitoramento de poluição
                  </strong>{' '}
                  – Desenvolver sistemas de alerta e resposta rápida para
                  vazamentos de óleo e outros contaminantes.
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div
            ref={actionRefs[2]}
            className="bg-white rounded-xl p-8 shadow-lg border border-blue-200 opacity-0 transition-all duration-1000 transform translate-y-8 hover:shadow-2xl hover:-translate-y-1"
          >
            <div className="bg-blue-700 p-3 rounded-lg inline-flex mb-6">
              <FaGraduationCap className="text-blue-100 text-2xl" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-blue-800">
              Educação e Conscientização
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2 mt-1 text-lg">•</span>
                <span className="text-gray-700">
                  <strong className="text-blue-700">
                    Programas educativos
                  </strong>{' '}
                  – Desenvolver materiais sobre a importância dos oceanos e a
                  conservação de espécies marinhas.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2 mt-1 text-lg">•</span>
                <span className="text-gray-700">
                  <strong className="text-blue-700">Ciência cidadã</strong> –
                  Engajar o público em projetos de monitoramento e pesquisa
                  marinha.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2 mt-1 text-lg">•</span>
                <span className="text-gray-700">
                  <strong className="text-blue-700">
                    Campanhas de sensibilização
                  </strong>{' '}
                  – Promover a conscientização sobre ameaças e soluções
                  relacionadas à conservação oceânica.
                </span>
              </li>
            </ul>
          </div>

          <div
            ref={actionRefs[3]}
            className="bg-white rounded-xl p-8 shadow-lg border border-blue-200 opacity-0 transition-all duration-1000 transform translate-y-8 hover:shadow-2xl hover:-translate-y-1"
          >
            <div className="bg-blue-700 p-3 rounded-lg inline-flex mb-6">
              <FaUsers className="text-blue-100 text-2xl" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-blue-800">
              Pesca Sustentável
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2 mt-1 text-lg">•</span>
                <span className="text-gray-700">
                  <strong className="text-blue-700">
                    Certificação e rastreabilidade
                  </strong>{' '}
                  – Apoiar sistemas que garantam a origem sustentável de
                  produtos pesqueiros.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2 mt-1 text-lg">•</span>
                <span className="text-gray-700">
                  <strong className="text-blue-700">
                    Tecnologias de redução de capturas acidentais
                  </strong>{' '}
                  – Desenvolver e implementar equipamentos que minimizem a
                  captura não intencional de espécies protegidas.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2 mt-1 text-lg">•</span>
                <span className="text-gray-700">
                  <strong className="text-blue-700">
                    Apoio à pesca artesanal
                  </strong>{' '}
                  – Fortalecer comunidades pesqueiras tradicionais que utilizam
                  métodos de baixo impacto ambiental.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
