'use client'

import { useRef, useEffect, useState, useMemo } from 'react'
import {
  FaShieldAlt,
  FaBookOpen,
  FaUsers,
  FaSeedling,
  FaFlask,
  FaGlobeAfrica
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

  const actionRefs = useMemo(
    () => [actionRef0, actionRef1, actionRef2, actionRef3, actionRef4],
    []
  )

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
  }, [actionRefs])

  return (
    <div
      ref={sectionRef}
      className={`bg-gradient-to-b from-amber-100 to-amber-200 py-16 md:py-24 transition-opacity duration-1000 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="container mx-auto px-5 md:px-15 lg:px-30">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-amber-500 rounded-full mb-6">
            <FaGlobeAfrica className="text-amber-50 text-3xl" />
          </div>
          <h2
            ref={titleRef}
            className="text-4xl md:text-5xl font-bold mb-6 text-amber-900 opacity-0 transition-opacity duration-1000"
          >
            Nossas Ações
          </h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed text-amber-800">
            Trabalhamos para conservar os ecossistemas desérticos e proteger
            suas espécies únicas através de iniciativas sustentáveis e parcerias
            com comunidades locais.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div
            ref={actionRef0}
            className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl shadow-lg border border-amber-200 overflow-hidden opacity-0 transition-all duration-1000 transform translate-y-8 hover:shadow-xl hover:-translate-y-1"
          >
            <div className="bg-amber-500 px-6 py-4 flex items-center">
              <FaShieldAlt className="text-amber-50 text-2xl mr-3" />
              <h3 className="text-2xl md:text-3xl font-semibold text-white">
                Conservação e Proteção
              </h3>
            </div>
            <div className="p-6">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-amber-600 font-bold mr-2 mt-1">•</span>
                  <div>
                    <strong className="text-amber-800">
                      Monitoramento de populações selvagens
                    </strong>
                    <p className="text-amber-700">
                      Apoiar pesquisas sobre camelos selvagens e seus habitats,
                      utilizando tecnologia de rastreamento e análise de DNA.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-600 font-bold mr-2 mt-1">•</span>
                  <div>
                    <strong className="text-amber-800">
                      Criação de áreas protegidas
                    </strong>
                    <p className="text-amber-700">
                      Estabelecer e manter reservas em regiões desérticas
                      críticas para proteger a biodiversidade única.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-600 font-bold mr-2 mt-1">•</span>
                  <div>
                    <strong className="text-amber-800">
                      Combate à caça ilegal
                    </strong>
                    <p className="text-amber-700">
                      Fortalecer a fiscalização e aplicação de leis de proteção
                      à fauna através de treinamento de guardas e tecnologia de
                      vigilância.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div
            ref={actionRef1}
            className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl shadow-lg border border-amber-200 overflow-hidden opacity-0 transition-all duration-1000 transform translate-y-8 hover:shadow-xl hover:-translate-y-1"
          >
            <div className="bg-amber-500 px-6 py-4 flex items-center">
              <FaBookOpen className="text-amber-50 text-2xl mr-3" />
              <h3 className="text-2xl md:text-3xl font-semibold text-white">
                Educação e Conscientização
              </h3>
            </div>
            <div className="p-6">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-amber-600 font-bold mr-2 mt-1">•</span>
                  <div>
                    <strong className="text-amber-800">
                      Campanhas informativas
                    </strong>
                    <p className="text-amber-700">
                      Divulgar a importância dos desertos e seus habitantes
                      através de mídias sociais, documentários e exposições.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-600 font-bold mr-2 mt-1">•</span>
                  <div>
                    <strong className="text-amber-800">
                      Programas educacionais
                    </strong>
                    <p className="text-amber-700">
                      Desenvolver materiais interativos sobre ecossistemas
                      desérticos para escolas e plataformas de aprendizado
                      online.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-600 font-bold mr-2 mt-1">•</span>
                  <div>
                    <strong className="text-amber-800">
                      Ecoturismo responsável
                    </strong>
                    <p className="text-amber-700">
                      Promover visitas guiadas que respeitem o ambiente e as
                      comunidades locais, criando experiências imersivas e
                      educativas.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div
            ref={actionRef2}
            className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl shadow-lg border border-amber-200 overflow-hidden opacity-0 transition-all duration-1000 transform translate-y-8 hover:shadow-xl hover:-translate-y-1"
          >
            <div className="bg-amber-500 px-6 py-4 flex items-center">
              <FaUsers className="text-amber-50 text-2xl mr-3" />
              <h3 className="text-2xl font-semibold text-white">
                Apoio às Comunidades
              </h3>
            </div>
            <div className="p-6">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-amber-600 font-bold mr-2 mt-1">•</span>
                  <div>
                    <strong className="text-amber-800">
                      Parcerias com povos tradicionais
                    </strong>
                    <p className="text-amber-700">
                      Colaborar com comunidades que dependem dos camelos e do
                      ecossistema desértico.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-600 font-bold mr-2 mt-1">•</span>
                  <div>
                    <strong className="text-amber-800">
                      Práticas sustentáveis
                    </strong>
                    <p className="text-amber-700">
                      Incentivar o manejo responsável de rebanhos domésticos e
                      uso consciente dos recursos.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-600 font-bold mr-2 mt-1">•</span>
                  <div>
                    <strong className="text-amber-800">
                      Valorização cultural
                    </strong>
                    <p className="text-amber-700">
                      Preservar conhecimentos tradicionais sobre camelos e
                      ambientes desérticos.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div
            ref={actionRef3}
            className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl shadow-lg border border-amber-200 overflow-hidden opacity-0 transition-all duration-1000 transform translate-y-8 hover:shadow-xl hover:-translate-y-1"
          >
            <div className="bg-amber-500 px-6 py-4 flex items-center">
              <FaSeedling className="text-amber-50 text-2xl mr-3" />
              <h3 className="text-2xl font-semibold text-white">
                Combate à Desertificação
              </h3>
            </div>
            <div className="p-6">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-amber-600 font-bold mr-2 mt-1">•</span>
                  <div>
                    <strong className="text-amber-800">
                      Reflorestamento adaptado
                    </strong>
                    <p className="text-amber-700">
                      Plantar espécies nativas resistentes à seca em áreas
                      degradadas.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-600 font-bold mr-2 mt-1">•</span>
                  <div>
                    <strong className="text-amber-800">
                      Conservação de água
                    </strong>
                    <p className="text-amber-700">
                      Implementar sistemas eficientes de irrigação e captação em
                      regiões áridas.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-600 font-bold mr-2 mt-1">•</span>
                  <div>
                    <strong className="text-amber-800">
                      Agricultura sustentável
                    </strong>
                    <p className="text-amber-700">
                      Promover práticas que evitem a erosão e salinização do
                      solo em zonas áridas.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div
            ref={actionRef4}
            className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl shadow-lg border border-amber-200 overflow-hidden opacity-0 transition-all duration-1000 transform translate-y-8 hover:shadow-xl hover:-translate-y-1"
          >
            <div className="bg-amber-500 px-6 py-4 flex items-center">
              <FaFlask className="text-amber-50 text-2xl mr-3" />
              <h3 className="text-2xl font-semibold text-white">
                Pesquisa e Inovação
              </h3>
            </div>
            <div className="p-6">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-amber-600 font-bold mr-2 mt-1">•</span>
                  <div>
                    <strong className="text-amber-800">
                      Estudos científicos
                    </strong>
                    <p className="text-amber-700">
                      Apoiar pesquisas sobre adaptações dos camelos e suas
                      aplicações biomédicas.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-600 font-bold mr-2 mt-1">•</span>
                  <div>
                    <strong className="text-amber-800">
                      Tecnologias biomiméticas
                    </strong>
                    <p className="text-amber-700">
                      Desenvolver soluções baseadas nas adaptações dos
                      organismos desérticos.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-600 font-bold mr-2 mt-1">•</span>
                  <div>
                    <strong className="text-amber-800">
                      Monitoramento climático
                    </strong>
                    <p className="text-amber-700">
                      Acompanhar mudanças nos ecossistemas desérticos para ações
                      preventivas.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-amber-600/20 p-8 rounded-xl shadow-lg max-w-4xl mx-auto text-center border border-amber-500/30">
          <h3 className="text-2xl font-bold mb-4 text-amber-800">
            Faça Parte da Nossa Missão
          </h3>
          <p className="text-lg text-amber-700 mb-6">
            Juntos, podemos fazer a diferença na preservação dos desertos e seus
            habitantes. Seja através de doações, voluntariado ou simplesmente
            compartilhando conhecimento, cada ação conta para proteger estes
            ecossistemas únicos.
          </p>
          <button className="px-8 py-3 bg-amber-600 text-white font-semibold rounded-full hover:bg-amber-700 transition-colors duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-opacity-50">
            Quero Participar
          </button>
        </div>
      </div>
    </div>
  )
}
