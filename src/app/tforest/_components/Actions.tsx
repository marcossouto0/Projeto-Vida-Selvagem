'use client'

import { useRef, useEffect, useMemo } from 'react'
import {
  FaHandHoldingHeart,
  FaGraduationCap,
  FaHandsHelping,
  FaSeedling,
  FaUsers
} from 'react-icons/fa'

export default function Actions() {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const actionRef0 = useRef(null)
  const actionRef1 = useRef(null)
  const actionRef2 = useRef(null)
  const actionRef3 = useRef(null)
  const actionRefs = useMemo(
    () => [actionRef0, actionRef1, actionRef2, actionRef3],
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
    actionRefs.forEach(ref => {
      if (ref.current) observer.observe(ref.current)
    })

    return () => {
      observer.disconnect()
    }
  }, [actionRefs])

  return (
    <div
      className="bg-gradient-to-b from-green-950 to-green-800 py-16 md:py-24"
      ref={sectionRef}
    >
      <div className="container mx-auto px-5 md:px-15 lg:px-30">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-green-700 rounded-full mb-6">
            <FaHandHoldingHeart className="text-green-100 text-3xl" />
          </div>
          <h2
            ref={titleRef}
            className="text-4xl md:text-5xl font-bold mb-6 text-green-100 opacity-0 transition-opacity duration-1000"
          >
            Nossas Ações
          </h2>
          <div className="w-24 h-1 bg-green-500 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl md:text-2xl text-green-100 max-w-4xl mx-auto leading-relaxed">
            Conheça as iniciativas para proteger as florestas temperadas e
            preservar sua biodiversidade.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div
            ref={actionRefs[0]}
            className="bg-white rounded-xl p-8 shadow-lg border border-green-200 opacity-0 transform translate-y-8 transition duration-300 hover:shadow-2xl hover:-translate-y-1"
          >
            <div className="bg-green-700 p-3 rounded-lg inline-flex mb-6">
              <FaHandsHelping className="text-green-100 text-2xl" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-green-800">
              Conservação e Proteção
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-green-600 mr-2 mt-1 text-lg">•</span>
                <span className="text-gray-700">
                  <strong className="text-green-700">
                    Corredores ecológicos
                  </strong>{' '}
                  – Criar conexões entre áreas florestais fragmentadas para
                  permitir o deslocamento seguro de ursos e outras espécies.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2 mt-1 text-lg">•</span>
                <span className="text-gray-700">
                  <strong className="text-green-700">
                    Ampliação de áreas protegidas
                  </strong>{' '}
                  – Apoiar a criação e expansão de parques e reservas em
                  florestas temperadas.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2 mt-1 text-lg">•</span>
                <span className="text-gray-700">
                  <strong className="text-green-700">
                    Monitoramento de populações
                  </strong>{' '}
                  – Acompanhar o status das populações de ursos pardos e outras
                  espécies indicadoras.
                </span>
              </li>
            </ul>
          </div>

          <div
            ref={actionRefs[1]}
            className="bg-white rounded-xl p-8 shadow-lg border border-green-200 opacity-0 transform translate-y-8 transition duration-300 hover:shadow-2xl hover:-translate-y-1"
          >
            <div className="bg-green-700 p-3 rounded-lg inline-flex mb-6">
              <FaGraduationCap className="text-green-100 text-2xl" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-green-800">
              Educação e Conscientização
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-green-600 mr-2 mt-1 text-lg">•</span>
                <span className="text-gray-700">
                  <strong className="text-green-700">
                    Programas educativos
                  </strong>{' '}
                  – Desenvolver materiais e atividades para escolas sobre a
                  importância das florestas temperadas.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2 mt-1 text-lg">•</span>
                <span className="text-gray-700">
                  <strong className="text-green-700">
                    Coexistência com a vida selvagem
                  </strong>{' '}
                  – Ensinar comunidades locais a conviver de forma segura com
                  ursos e outros animais silvestres.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2 mt-1 text-lg">•</span>
                <span className="text-gray-700">
                  <strong className="text-green-700">Campanhas de mídia</strong>{' '}
                  – Divulgar informações sobre os desafios enfrentados pelas
                  florestas temperadas e suas espécies.
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div
            ref={actionRefs[2]}
            className="bg-white rounded-xl p-8 shadow-lg border border-green-200 opacity-0 transform translate-y-8 transition duration-300 hover:shadow-2xl hover:-translate-y-1"
          >
            <div className="bg-green-700 p-3 rounded-lg inline-flex mb-6">
              <FaSeedling className="text-green-100 text-2xl" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-green-800">
              Restauração e Manejo
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-green-600 mr-2 mt-1 text-lg">•</span>
                <span className="text-gray-700">
                  <strong className="text-green-700">Reflorestamento</strong> –
                  Recuperar áreas degradadas com espécies nativas das florestas
                  temperadas.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2 mt-1 text-lg">•</span>
                <span className="text-gray-700">
                  <strong className="text-green-700">Manejo sustentável</strong>{' '}
                  – Promover práticas de exploração madeireira que preservem a
                  integridade do ecossistema.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2 mt-1 text-lg">•</span>
                <span className="text-gray-700">
                  <strong className="text-green-700">
                    Controle de espécies invasoras
                  </strong>{' '}
                  – Implementar programas para reduzir o impacto de espécies
                  exóticas na flora e fauna nativas.
                </span>
              </li>
            </ul>
          </div>

          <div
            ref={actionRefs[3]}
            className="bg-white rounded-xl p-8 shadow-lg border border-green-200 opacity-0 transform translate-y-8 transition duration-300 hover:shadow-2xl hover:-translate-y-1"
          >
            <div className="bg-green-700 p-3 rounded-lg inline-flex mb-6">
              <FaUsers className="text-green-100 text-2xl" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-green-800">
              Parcerias e Políticas
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-green-600 mr-2 mt-1 text-lg">•</span>
                <span className="text-gray-700">
                  <strong className="text-green-700">
                    Colaboração com comunidades locais
                  </strong>{' '}
                  – Envolver moradores e proprietários rurais na conservação.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2 mt-1 text-lg">•</span>
                <span className="text-gray-700">
                  <strong className="text-green-700">
                    Advocacy por políticas públicas
                  </strong>{' '}
                  – Atuar junto a governos pela proteção legal das florestas
                  temperadas.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2 mt-1 text-lg">•</span>
                <span className="text-gray-700">
                  <strong className="text-green-700">
                    Parcerias com setor privado
                  </strong>{' '}
                  – Desenvolver iniciativas de responsabilidade ambiental com
                  empresas que operam em regiões de florestas temperadas.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
