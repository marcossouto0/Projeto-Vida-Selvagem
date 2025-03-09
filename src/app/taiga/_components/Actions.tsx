'use client'

import { useRef, useEffect, useMemo } from 'react'
import {
  FaShieldAlt,
  FaTree,
  FaHandsHelping,
  FaUsers,
  FaGlobeAmericas
} from 'react-icons/fa'

export default function Actions() {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const actionRef0 = useRef(null)
  const actionRef1 = useRef(null)
  const actionRef2 = useRef(null)
  const actionRef3 = useRef(null)
  const actionRef4 = useRef(null)
  const sectionRefs = useMemo(
    () => [actionRef0, actionRef1, actionRef2, actionRef3, actionRef4],
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
    sectionRefs.forEach(ref => {
      if (ref.current) observer.observe(ref.current)
    })

    return () => {
      observer.disconnect()
    }
  }, [sectionRefs])

  return (
    <div
      id="actions-section"
      ref={sectionRef}
      className="bg-gradient-to-b from-emerald-950 to-emerald-900 text-white"
    >
      <div className="mx-5 md:mx-15 lg:mx-30 py-10 md:py-20">
        <h2
          ref={titleRef}
          className="text-4xl md:text-5xl font-bold opacity-0 transition-opacity duration-1000 border-b-2 border-emerald-400 pb-2 inline-block"
        >
          Nossas Ações
        </h2>

        <div
          ref={sectionRefs[0]}
          className="mt-10 opacity-0 transition-opacity duration-1000 delay-300"
        >
          <h3 className="text-3xl md:text-4xl font-semibold flex items-center gap-2">
            <FaShieldAlt className="text-emerald-400" /> 1. Conservação de
            Habitat
          </h3>
          <ul className="bg-emerald-800/50 p-5 rounded-lg mt-5 shadow-lg border-l-4 border-emerald-400">
            <li className="text-xl md:text-2xl flex items-start gap-2">
              <span className="text-emerald-400 mt-1">•</span>
              <span>
                <strong>Proteção de florestas intactas</strong> – Apoiar a
                criação e expansão de áreas protegidas na taiga, preservando os
                últimos grandes blocos de floresta boreal intacta.
              </span>
            </li>
            <li className="text-xl md:text-2xl mt-5 flex items-start gap-2">
              <span className="text-emerald-400 mt-1">•</span>
              <span>
                <strong>Corredores ecológicos</strong> – Estabelecer conexões
                entre áreas florestais fragmentadas para permitir o deslocamento
                de lobos e outras espécies de amplo território.
              </span>
            </li>
            <li className="text-xl md:text-2xl mt-5 flex items-start gap-2">
              <span className="text-emerald-400 mt-1">•</span>
              <span>
                <strong>Restauração florestal</strong> – Recuperar áreas
                degradadas com espécies nativas de coníferas, restaurando
                habitats para a fauna boreal.
              </span>
            </li>
          </ul>
        </div>

        <div
          ref={sectionRefs[1]}
          className="mt-10 opacity-0 transition-opacity duration-1000 delay-500"
        >
          <h3 className="text-3xl md:text-4xl font-semibold flex items-center gap-2">
            <FaTree className="text-emerald-400" /> 2. Manejo Florestal
            Sustentável
          </h3>
          <ul className="bg-emerald-800/50 p-5 rounded-lg mt-5 shadow-lg border-l-4 border-emerald-400">
            <li className="text-xl md:text-2xl flex items-start gap-2">
              <span className="text-emerald-400 mt-1">•</span>
              <span>
                <strong>Certificação florestal</strong> – Promover sistemas de
                certificação que garantam práticas de extração madeireira de
                baixo impacto e respeito à biodiversidade.
              </span>
            </li>
            <li className="text-xl md:text-2xl mt-5 flex items-start gap-2">
              <span className="text-emerald-400 mt-1">•</span>
              <span>
                <strong>Alternativas econômicas</strong> – Desenvolver
                oportunidades de renda baseadas em produtos florestais
                não-madeireiros e serviços ecossistêmicos.
              </span>
            </li>
            <li className="text-xl md:text-2xl mt-5 flex items-start gap-2">
              <span className="text-emerald-400 mt-1">•</span>
              <span>
                <strong>Combate à extração ilegal</strong> – Apoiar a
                fiscalização e rastreabilidade da madeira para reduzir o
                desmatamento ilegal na taiga.
              </span>
            </li>
          </ul>
        </div>

        <div
          ref={sectionRefs[2]}
          className="mt-10 opacity-0 transition-opacity duration-1000 delay-700"
        >
          <h3 className="text-3xl md:text-4xl font-semibold flex items-center gap-2">
            <FaHandsHelping className="text-emerald-400" /> 3. Coexistência com
            Predadores
          </h3>
          <ul className="bg-emerald-800/50 p-5 rounded-lg mt-5 shadow-lg border-l-4 border-emerald-400">
            <li className="text-xl md:text-2xl flex items-start gap-2">
              <span className="text-emerald-400 mt-1">•</span>
              <span>
                <strong>Mitigação de conflitos</strong> – Implementar técnicas
                para reduzir ataques de lobos a rebanhos, como cercas elétricas,
                cães de guarda e manejo adaptativo.
              </span>
            </li>
            <li className="text-xl md:text-2xl mt-5 flex items-start gap-2">
              <span className="text-emerald-400 mt-1">•</span>
              <span>
                <strong>Compensação por perdas</strong> – Apoiar programas que
                compensem criadores por perdas comprovadas causadas por
                predadores, reduzindo incentivos à caça ilegal.
              </span>
            </li>
            <li className="text-xl md:text-2xl mt-5 flex items-start gap-2">
              <span className="text-emerald-400 mt-1">•</span>
              <span>
                <strong>Monitoramento de populações</strong> – Acompanhar o
                status das populações de lobos e suas presas para informar
                estratégias de conservação e manejo.
              </span>
            </li>
          </ul>
        </div>

        <div
          ref={sectionRefs[3]}
          className="mt-10 opacity-0 transition-opacity duration-1000 delay-900"
        >
          <h3 className="text-3xl md:text-4xl font-semibold flex items-center gap-2">
            <FaGlobeAmericas className="text-emerald-400" /> 4. Ação Climática
          </h3>
          <ul className="bg-emerald-800/50 p-5 rounded-lg mt-5 shadow-lg border-l-4 border-emerald-400">
            <li className="text-xl md:text-2xl flex items-start gap-2">
              <span className="text-emerald-400 mt-1">•</span>
              <span>
                <strong>Proteção de sumidouros de carbono</strong> – Preservar
                florestas boreais maduras e solos de turfa que armazenam grandes
                quantidades de carbono.
              </span>
            </li>
            <li className="text-xl md:text-2xl mt-5 flex items-start gap-2">
              <span className="text-emerald-400 mt-1">•</span>
              <span>
                <strong>Prevenção de incêndios</strong> – Implementar sistemas
                de detecção precoce e combate a incêndios florestais, cuja
                frequência e intensidade têm aumentado com as mudanças
                climáticas.
              </span>
            </li>
            <li className="text-xl md:text-2xl mt-5 flex items-start gap-2">
              <span className="text-emerald-400 mt-1">•</span>
              <span>
                <strong>Adaptação baseada em ecossistemas</strong> – Promover
                práticas que aumentem a resiliência da taiga frente às mudanças
                climáticas, como diversificação de espécies em áreas
                reflorestadas.
              </span>
            </li>
          </ul>
        </div>

        <div
          ref={sectionRefs[4]}
          className="mt-10 opacity-0 transition-opacity duration-1000 delay-1100"
        >
          <h3 className="text-3xl md:text-4xl font-semibold flex items-center gap-2">
            <FaUsers className="text-emerald-400" /> 5. Educação e Engajamento
          </h3>
          <ul className="bg-emerald-800/50 p-5 rounded-lg mt-5 shadow-lg border-l-4 border-emerald-400">
            <li className="text-xl md:text-2xl flex items-start gap-2">
              <span className="text-emerald-400 mt-1">•</span>
              <span>
                <strong>Programas educativos</strong> – Desenvolver materiais
                sobre a importância da taiga e do lobo cinzento para escolas e
                comunidades.
              </span>
            </li>
            <li className="text-xl md:text-2xl mt-5 flex items-start gap-2">
              <span className="text-emerald-400 mt-1">•</span>
              <span>
                <strong>Ecoturismo responsável</strong> – Promover o turismo de
                observação de vida selvagem como alternativa econômica
                sustentável para comunidades locais.
              </span>
            </li>
            <li className="text-xl md:text-2xl mt-5 flex items-start gap-2">
              <span className="text-emerald-400 mt-1">•</span>
              <span>
                <strong>Ciência cidadã</strong> – Envolver o público em projetos
                de monitoramento da biodiversidade da taiga, aumentando a
                conscientização e gerando dados valiosos.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
