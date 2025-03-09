'use client'

import { useRef, useEffect, useState, useMemo } from 'react'
import {
  FaSeedling,
  FaLeaf,
  FaUsers,
  FaGraduationCap,
  FaSearch
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
      className={`bg-gradient-to-b from-yellow-200 to-yellow-300 py-16 md:py-24 transition-opacity duration-1000 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="container mx-auto px-5 md:px-15 lg:px-30">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-yellow-600 rounded-full mb-6">
            <FaSeedling className="text-yellow-100 text-3xl" />
          </div>
          <h2
            ref={titleRef}
            className="text-4xl md:text-5xl font-bold mb-6 text-yellow-900 opacity-0 transition-opacity duration-1000"
          >
            Nossas Ações
          </h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed text-yellow-800">
            Trabalhamos para preservar os campos nativos e proteger a vida
            selvagem através de iniciativas sustentáveis que combinam
            conhecimento científico e sabedoria tradicional.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div
            ref={actionRefs[0]}
            className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl shadow-lg border border-yellow-200 overflow-hidden opacity-0 transform translate-y-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            <div className="bg-yellow-600 px-6 py-4 flex items-center">
              <FaLeaf className="text-yellow-50 text-2xl mr-3" />
              <h3 className="text-2xl md:text-3xl font-semibold text-white">
                Conservação e Restauração
              </h3>
            </div>
            <div className="p-6">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-yellow-600 font-bold mr-2 mt-1">•</span>
                  <div>
                    <strong className="text-yellow-800">
                      Proteção de campos nativos remanescentes
                    </strong>
                    <p className="text-yellow-700">
                      Apoiar a criação e expansão de áreas protegidas em
                      ecossistemas de campos, os biomas menos protegidos
                      globalmente.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 font-bold mr-2 mt-1">•</span>
                  <div>
                    <strong className="text-yellow-800">
                      Restauração ecológica
                    </strong>
                    <p className="text-yellow-700">
                      Recuperar campos degradados através da reintrodução de
                      espécies nativas de gramíneas e ervas, recriando a
                      estrutura e função do ecossistema original.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 font-bold mr-2 mt-1">•</span>
                  <div>
                    <strong className="text-yellow-800">
                      Reintrodução de bisões
                    </strong>
                    <p className="text-yellow-700">
                      Apoiar iniciativas de reintrodução de bisões em seu
                      habitat histórico, especialmente em terras públicas e
                      indígenas.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div
            ref={actionRefs[1]}
            className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl shadow-lg border border-yellow-200 overflow-hidden opacity-0 transition-all duration-1000 transform translate-y-8 hover:shadow-xl hover:-translate-y-1"
          >
            <div className="bg-yellow-600 px-6 py-4 flex items-center">
              <FaUsers className="text-yellow-50 text-2xl mr-3" />
              <h3 className="text-2xl md:text-3xl font-semibold text-white">
                Manejo Sustentável
              </h3>
            </div>
            <div className="p-6">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-yellow-600 font-bold mr-2 mt-1">•</span>
                  <div>
                    <strong className="text-yellow-800">
                      Pastoreio planejado
                    </strong>
                    <p className="text-yellow-700">
                      Promover práticas de pastoreio que mimiquem os padrões
                      históricos de herbívoros nativos, beneficiando a
                      biodiversidade e a saúde do solo.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 font-bold mr-2 mt-1">•</span>
                  <div>
                    <strong className="text-yellow-800">
                      Manejo integrado do fogo
                    </strong>
                    <p className="text-yellow-700">
                      Implementar queimadas controladas que restaurem o papel
                      ecológico do fogo na manutenção dos campos e prevenção de
                      incêndios catastróficos.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 font-bold mr-2 mt-1">•</span>
                  <div>
                    <strong className="text-yellow-800">
                      Agricultura regenerativa
                    </strong>
                    <p className="text-yellow-700">
                      Incentivar práticas agrícolas que conservem o solo,
                      aumentem o sequestro de carbono e mantenham elementos da
                      biodiversidade nativa.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div
            ref={actionRefs[2]}
            className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl shadow-lg border border-yellow-200 overflow-hidden opacity-0 transition-all duration-1000 transform translate-y-8 hover:shadow-xl hover:-translate-y-1"
          >
            <div className="bg-yellow-600 px-6 py-4 flex items-center">
              <FaGraduationCap className="text-yellow-50 text-2xl mr-3" />
              <h3 className="text-2xl font-semibold text-white">
                Educação e Divulgação
              </h3>
            </div>
            <div className="p-6">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-yellow-600 font-bold mr-2 mt-1">•</span>
                  <div>
                    <strong className="text-yellow-800">
                      Programas educativos
                    </strong>
                    <p className="text-yellow-700">
                      Desenvolver materiais sobre a importância dos campos
                      nativos e do bisão para escolas e comunidades.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 font-bold mr-2 mt-1">•</span>
                  <div>
                    <strong className="text-yellow-800">
                      Centros interpretativos
                    </strong>
                    <p className="text-yellow-700">
                      Estabelecer locais onde o público possa aprender sobre a
                      história, ecologia e conservação dos campos e seus
                      habitantes.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 font-bold mr-2 mt-1">•</span>
                  <div>
                    <strong className="text-yellow-800">
                      Campanhas de conscientização
                    </strong>
                    <p className="text-yellow-700">
                      Aumentar o conhecimento público sobre o valor dos campos
                      nativos, frequentemente subestimados em comparação com
                      florestas.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div
            ref={actionRefs[3]}
            className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl shadow-lg border border-yellow-200 overflow-hidden opacity-0 transition-all duration-1000 transform translate-y-8 hover:shadow-xl hover:-translate-y-1"
          >
            <div className="bg-yellow-600 px-6 py-4 flex items-center">
              <FaUsers className="text-yellow-50 text-2xl mr-3" />
              <h3 className="text-2xl font-semibold text-white">
                Povos e Culturas
              </h3>
            </div>
            <div className="p-6">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-yellow-600 font-bold mr-2 mt-1">•</span>
                  <div>
                    <strong className="text-yellow-800">
                      Colaboração com povos indígenas
                    </strong>
                    <p className="text-yellow-700">
                      Apoiar iniciativas lideradas por indígenas para
                      restauração de bisões e campos nativos, reconhecendo seu
                      conhecimento tradicional e direitos territoriais.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 font-bold mr-2 mt-1">•</span>
                  <div>
                    <strong className="text-yellow-800">
                      Engajamento de proprietários rurais
                    </strong>
                    <p className="text-yellow-700">
                      Desenvolver programas de incentivo para conservação de
                      campos nativos em propriedades privadas, como pagamentos
                      por serviços ambientais.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 font-bold mr-2 mt-1">•</span>
                  <div>
                    <strong className="text-yellow-800">
                      Desenvolvimento econômico sustentável
                    </strong>
                    <p className="text-yellow-700">
                      Promover oportunidades econômicas compatíveis com a
                      conservação, como ecoturismo e produção sustentável de
                      bisão.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div
            ref={actionRefs[4]}
            className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl shadow-lg border border-yellow-200 overflow-hidden opacity-0 transition-all duration-1000 transform translate-y-8 hover:shadow-xl hover:-translate-y-1"
          >
            <div className="bg-yellow-600 px-6 py-4 flex items-center">
              <FaSearch className="text-yellow-50 text-2xl mr-3" />
              <h3 className="text-2xl font-semibold text-white">
                Pesquisa e Inovação
              </h3>
            </div>
            <div className="p-6">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-yellow-600 font-bold mr-2 mt-1">•</span>
                  <div>
                    <strong className="text-yellow-800">
                      Estudos ecológicos
                    </strong>
                    <p className="text-yellow-700">
                      Apoiar pesquisas sobre a dinâmica dos ecossistemas de
                      campos e o papel do bisão como espécie-chave.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 font-bold mr-2 mt-1">•</span>
                  <div>
                    <strong className="text-yellow-800">
                      Monitoramento de populações
                    </strong>
                    <p className="text-yellow-700">
                      Acompanhar o status das populações de bisões e outras
                      espécies nativas dos campos para avaliar o sucesso das
                      iniciativas de conservação.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 font-bold mr-2 mt-1">•</span>
                  <div>
                    <strong className="text-yellow-800">Ciência do solo</strong>
                    <p className="text-yellow-700">
                      Investigar o potencial dos campos nativos para sequestro
                      de carbono e mitigação das mudanças climáticas.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-yellow-500/20 p-8 rounded-xl shadow-lg max-w-4xl mx-auto text-center border border-yellow-500/30">
          <h3 className="text-2xl font-bold mb-4 text-yellow-800">
            Faça Parte da Nossa Missão
          </h3>
          <p className="text-lg text-yellow-700 mb-6">
            Juntos, podemos restaurar os vastos campos que um dia dominaram a
            paisagem e as espécies emblemáticas que os habitavam. Cada ação
            conta para a preservação deste ecossistema vital para o equilíbrio
            do planeta.
          </p>
          <button className="px-8 py-3 bg-yellow-600 text-white font-semibold rounded-full hover:bg-yellow-700 transition-colors duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50">
            Quero Participar
          </button>
        </div>
      </div>
    </div>
  )
}
