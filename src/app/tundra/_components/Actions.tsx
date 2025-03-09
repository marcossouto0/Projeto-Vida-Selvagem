'use client'

import { useRef, useEffect, useState } from 'react'
import {
  FaShieldAlt,
  FaGraduationCap,
  FaHandsHelping,
  FaSearch,
  FaGlobeAmericas,
  FaSnowflake
} from 'react-icons/fa'

export default function Actions() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const actionRef0 = useRef(null)
  const actionRef1 = useRef(null)
  const actionRef2 = useRef(null)
  const actionRef3 = useRef(null)
  const actionRef4 = useRef(null)
  const actionRefs = [
    actionRef0,
    actionRef1,
    actionRef2,
    actionRef3,
    actionRef4
  ]

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
      ref={sectionRef}
      className={`bg-gradient-to-b from-blue-950 to-blue-900 text-white py-16 md:py-24 transition-opacity duration-1000 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="container mx-auto px-5 md:px-15 lg:px-30">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-blue-600 rounded-full mb-6">
            <FaSnowflake className="text-blue-50 text-3xl" />
          </div>
          <h2
            ref={titleRef}
            className="text-4xl md:text-5xl font-bold mb-6 text-white opacity-0 transition-opacity duration-1000"
          >
            Nossas Ações
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed text-blue-100">
            Conheça as iniciativas que desenvolvemos para proteger a tundra e
            seus habitantes, com foco especial na conservação das renas e seu
            habitat.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div
            ref={actionRef0}
            className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-xl shadow-lg border border-blue-700 overflow-hidden opacity-0 transition-all duration-1000 transform translate-y-8 hover:shadow-xl hover:-translate-y-1"
          >
            <div className="bg-blue-600 px-6 py-4 flex items-center">
              <FaShieldAlt className="text-blue-50 text-2xl mr-3" />
              <h3 className="text-2xl md:text-3xl font-semibold text-white">
                Conservação e Proteção
              </h3>
            </div>
            <div className="p-6">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-blue-400 font-bold mr-2 mt-1">•</span>
                  <div>
                    <strong className="text-blue-300">
                      Monitoramento das populações
                    </strong>
                    <p className="text-blue-100">
                      Apoiar pesquisas sobre as renas e os impactos das mudanças
                      climáticas em suas rotas migratórias e comportamento.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 font-bold mr-2 mt-1">•</span>
                  <div>
                    <strong className="text-blue-300">
                      Criação de áreas protegidas
                    </strong>
                    <p className="text-blue-100">
                      Preservar territórios essenciais para a sobrevivência das
                      renas, incluindo rotas migratórias e áreas de reprodução.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 font-bold mr-2 mt-1">•</span>
                  <div>
                    <strong className="text-blue-300">
                      Combate à caça ilegal
                    </strong>
                    <p className="text-blue-100">
                      Promover fiscalização e conscientização contra a caça
                      predatória, trabalhando com comunidades locais e autoridades.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div
            ref={actionRef1}
            className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-xl shadow-lg border border-blue-700 overflow-hidden opacity-0 transition-all duration-1000 transform translate-y-8 hover:shadow-xl hover:-translate-y-1"
          >
            <div className="bg-blue-600 px-6 py-4 flex items-center">
              <FaGraduationCap className="text-blue-50 text-2xl mr-3" />
              <h3 className="text-2xl md:text-3xl font-semibold text-white">
                Educação e Conscientização
              </h3>
            </div>
            <div className="p-6">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-blue-400 font-bold mr-2 mt-1">•</span>
                  <div>
                    <strong className="text-blue-300">
                      Campanhas de sensibilização
                    </strong>
                    <p className="text-blue-100">
                      Criar conteúdos educativos sobre a importância da tundra e das
                      renas para o equilíbrio ecológico global.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 font-bold mr-2 mt-1">•</span>
                  <div>
                    <strong className="text-blue-300">
                      Programas escolares
                    </strong>
                    <p className="text-blue-100">
                      Desenvolver materiais didáticos sobre a tundra e as renas para
                      escolas, incentivando a conscientização desde cedo.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 font-bold mr-2 mt-1">•</span>
                  <div>
                    <strong className="text-blue-300">
                      Turismo responsável
                    </strong>
                    <p className="text-blue-100">
                      Promover o ecoturismo sustentável na tundra, gerando renda
                      para comunidades locais e conscientização para visitantes.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div
            ref={actionRef2}
            className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-xl shadow-lg border border-blue-700 overflow-hidden opacity-0 transition-all duration-1000 transform translate-y-8 hover:shadow-xl hover:-translate-y-1"
          >
            <div className="bg-blue-600 px-6 py-4 flex items-center">
              <FaHandsHelping className="text-blue-50 text-2xl mr-3" />
              <h3 className="text-2xl md:text-3xl font-semibold text-white">
                Apoio às Comunidades Tradicionais
              </h3>
            </div>
            <div className="p-6">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-blue-400 font-bold mr-2 mt-1">•</span>
                  <div>
                    <strong className="text-blue-300">
                      Valorização do conhecimento tradicional
                    </strong>
                    <p className="text-blue-100">
                      Reconhecer e integrar o conhecimento dos povos indígenas sobre
                      as renas e a tundra em projetos de conservação.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 font-bold mr-2 mt-1">•</span>
                  <div>
                    <strong className="text-blue-300">
                      Apoio a práticas sustentáveis
                    </strong>
                    <p className="text-blue-100">
                      Incentivar práticas tradicionais sustentáveis de manejo de
                      renas, respeitando a cultura e os direitos dos povos
                      indígenas.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 font-bold mr-2 mt-1">•</span>
                  <div>
                    <strong className="text-blue-300">
                      Desenvolvimento de alternativas econômicas
                    </strong>
                    <p className="text-blue-100">
                      Apoiar o desenvolvimento de alternativas econômicas
                      sustentáveis para comunidades que dependem das renas.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div
            ref={actionRef3}
            className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-xl shadow-lg border border-blue-700 overflow-hidden opacity-0 transition-all duration-1000 transform translate-y-8 hover:shadow-xl hover:-translate-y-1"
          >
            <div className="bg-blue-600 px-6 py-4 flex items-center">
              <FaSearch className="text-blue-50 text-2xl mr-3" />
              <h3 className="text-2xl md:text-3xl font-semibold text-white">
                Pesquisa e Monitoramento
              </h3>
            </div>
            <div className="p-6">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-blue-400 font-bold mr-2 mt-1">•</span>
                  <div>
                    <strong className="text-blue-300">
                      Estudos sobre mudanças climáticas
                    </strong>
                    <p className="text-blue-100">
                      Financiar pesquisas sobre os impactos das mudanças climáticas
                      na tundra e nas populações de renas.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 font-bold mr-2 mt-1">•</span>
                  <div>
                    <strong className="text-blue-300">
                      Monitoramento por satélite
                    </strong>
                    <p className="text-blue-100">
                      Utilizar tecnologias de sensoriamento remoto para monitorar as
                      migrações das renas e as mudanças na cobertura de neve e gelo.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 font-bold mr-2 mt-1">•</span>
                  <div>
                    <strong className="text-blue-300">
                      Colaboração científica internacional
                    </strong>
                    <p className="text-blue-100">
                      Promover a colaboração entre cientistas de diferentes países
                      para estudar e proteger as renas e a tundra.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div
            ref={actionRef4}
            className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-xl shadow-lg border border-blue-700 overflow-hidden opacity-0 transition-all duration-1000 transform translate-y-8 hover:shadow-xl hover:-translate-y-1"
          >
            <div className="bg-blue-600 px-6 py-4 flex items-center">
              <FaGlobeAmericas className="text-blue-50 text-2xl mr-3" />
              <h3 className="text-2xl md:text-3xl font-semibold text-white">
                Ação Climática
              </h3>
            </div>
            <div className="p-6">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-blue-400 font-bold mr-2 mt-1">•</span>
                  <div>
                    <strong className="text-blue-300">
                      Advocacia por políticas climáticas
                    </strong>
                    <p className="text-blue-100">
                      Defender políticas nacionais e internacionais de redução de
                      emissões de gases de efeito estufa para mitigar as mudanças
                      climáticas.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 font-bold mr-2 mt-1">•</span>
                  <div>
                    <strong className="text-blue-300">
                      Projetos de adaptação
                    </strong>
                    <p className="text-blue-100">
                      Desenvolver e implementar projetos de adaptação às mudanças
                      climáticas para comunidades e ecossistemas da tundra.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 font-bold mr-2 mt-1">•</span>
                  <div>
                    <strong className="text-blue-300">
                      Compensação de carbono
                    </strong>
                    <p className="text-blue-100">
                      Promover projetos de compensação de carbono que beneficiem a
                      conservação da tundra e das renas.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
