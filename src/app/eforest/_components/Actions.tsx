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
    actionRefs.forEach((ref) => {
      if (ref && ref.current) observer.observe(ref.current)
    })

    return () => {
      observer.disconnect()
    }
  }, [actionRefs])

  return (
    <div
      className="bg-gradient-to-b from-emerald-950 to-emerald-800 py-16 md:py-24"
      ref={sectionRef}
    >
      <div className="container mx-auto px-5 md:px-15 lg:px-30">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-emerald-700 rounded-full mb-6">
            <FaHandHoldingHeart className="text-emerald-100 text-3xl" />
          </div>
          <h2
            ref={titleRef}
            className="text-4xl md:text-5xl font-bold mb-6 text-white opacity-0 transition-opacity duration-1000"
          >
            Nossas Ações
          </h2>
          <div className="w-24 h-1 bg-emerald-500 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl md:text-2xl text-white max-w-4xl mx-auto leading-relaxed">
            Conheça as iniciativas para proteger as florestas equatoriais e suas
            espécies, incluindo a onça pintada.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div
            ref={actionRefs[0]}
            className="bg-white rounded-xl p-8 shadow-lg border border-emerald-200 opacity-0 transition-all duration-1000 transform translate-y-8 hover:shadow-2xl hover:-translate-y-1"
          >
            <div className="bg-emerald-700 p-3 rounded-lg inline-flex mb-6">
              <FaHandsHelping className="text-emerald-100 text-2xl" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-emerald-800">
              Conservação e Proteção
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-emerald-600 mr-2 mt-1 text-lg">•</span>
                <span className="text-gray-700">
                  <strong className="text-emerald-700">
                    Criação e manutenção de áreas protegidas
                  </strong>{' '}
                  – Apoiar a expansão de parques nacionais e reservas nas
                  florestas equatoriais.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-600 mr-2 mt-1 text-lg">•</span>
                <span className="text-gray-700">
                  <strong className="text-emerald-700">
                    Corredores ecológicos
                  </strong>{' '}
                  – Estabelecer conexões entre fragmentos florestais para
                  permitir o deslocamento de jaguares e outras espécies.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-600 mr-2 mt-1 text-lg">•</span>
                <span className="text-gray-700">
                  <strong className="text-emerald-700">
                    Combate ao tráfico de animais
                  </strong>{' '}
                  – Fortalecer a fiscalização e aplicação de leis contra o
                  comércio ilegal de fauna silvestre.
                </span>
              </li>
            </ul>
          </div>

          <div
            ref={actionRefs[1]}
            className="bg-white rounded-xl p-8 shadow-lg border border-emerald-200 opacity-0 transition-all duration-1000 transform translate-y-8 hover:shadow-2xl hover:-translate-y-1"
          >
            <div className="bg-emerald-700 p-3 rounded-lg inline-flex mb-6">
              <FaGraduationCap className="text-emerald-100 text-2xl" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-emerald-800">
              Educação e Conscientização
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-emerald-600 mr-2 mt-1 text-lg">•</span>
                <span className="text-gray-700">
                  <strong className="text-emerald-700">
                    Programas educativos
                  </strong>{' '}
                  – Desenvolver materiais e atividades sobre a importância das
                  florestas equatoriais e sua biodiversidade.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-600 mr-2 mt-1 text-lg">•</span>
                <span className="text-gray-700">
                  <strong className="text-emerald-700">
                    Capacitação de comunidades locais
                  </strong>{' '}
                  – Promover práticas sustentáveis de manejo florestal e
                  alternativas econômicas ao desmatamento.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-600 mr-2 mt-1 text-lg">•</span>
                <span className="text-gray-700">
                  <strong className="text-emerald-700">
                    Campanhas de sensibilização
                  </strong>{' '}
                  – Informar sobre as ameaças à floresta equatorial e a urgência
                  de sua preservação.
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div
            ref={actionRefs[2]}
            className="bg-white rounded-xl p-8 shadow-lg border border-emerald-200 opacity-0 transition-all duration-1000 transform translate-y-8 hover:shadow-2xl hover:-translate-y-1"
          >
            <div className="bg-emerald-700 p-3 rounded-lg inline-flex mb-6">
              <FaSeedling className="text-emerald-100 text-2xl" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-emerald-800">
              Restauração e Desenvolvimento Sustentável
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-emerald-600 mr-2 mt-1 text-lg">•</span>
                <span className="text-gray-700">
                  <strong className="text-emerald-700">Reflorestamento</strong>{' '}
                  – Recuperar áreas degradadas com espécies nativas,
                  especialmente em zonas de transição e margens de rios.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-600 mr-2 mt-1 text-lg">•</span>
                <span className="text-gray-700">
                  <strong className="text-emerald-700">
                    Sistemas agroflorestais
                  </strong>{' '}
                  – Incentivar práticas que combinam agricultura, conservação
                  florestal e geração de renda.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-600 mr-2 mt-1 text-lg">•</span>
                <span className="text-gray-700">
                  <strong className="text-emerald-700">
                    Ecoturismo responsável
                  </strong>{' '}
                  – Desenvolver iniciativas que valorizem a floresta em pé e
                  gerem benefícios para comunidades locais.
                </span>
              </li>
            </ul>
          </div>

          <div
            ref={actionRefs[3]}
            className="bg-white rounded-xl p-8 shadow-lg border border-emerald-200 opacity-0 transition-all duration-1000 transform translate-y-8 hover:shadow-2xl hover:-translate-y-1"
          >
            <div className="bg-emerald-700 p-3 rounded-lg inline-flex mb-6">
              <FaUsers className="text-emerald-100 text-2xl" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-emerald-800">
              Parcerias e Políticas
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-emerald-600 mr-2 mt-1 text-lg">•</span>
                <span className="text-gray-700">
                  <strong className="text-emerald-700">
                    Alianças internacionais
                  </strong>{' '}
                  – Colaborar com organizações e países para implementar acordos
                  de proteção florestal e biodiversidade.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-600 mr-2 mt-1 text-lg">•</span>
                <span className="text-gray-700">
                  <strong className="text-emerald-700">
                    Incentivos econômicos
                  </strong>{' '}
                  – Apoiar mecanismos de pagamento por serviços ambientais e
                  produtos florestais não-madeireiros.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-600 mr-2 mt-1 text-lg">•</span>
                <span className="text-gray-700">
                  <strong className="text-emerald-700">
                    Monitoramento por satélite
                  </strong>{' '}
                  – Utilizar tecnologia para detectar desmatamento em tempo real
                  e orientar ações de fiscalização.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
