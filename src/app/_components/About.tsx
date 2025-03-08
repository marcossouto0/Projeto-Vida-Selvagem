'use client'

import { useEffect, useRef } from 'react'
import TeamCard from './TeamCard'
import { FaLeaf, FaHistory, FaUsers } from 'react-icons/fa'

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const missionRef = useRef<HTMLDivElement>(null)
  const historyRef = useRef<HTMLDivElement>(null)
  const teamRef = useRef<HTMLDivElement>(null)

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
    if (missionRef.current) observer.observe(missionRef.current)
    if (historyRef.current) observer.observe(historyRef.current)
    if (teamRef.current) observer.observe(teamRef.current)

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current)
      if (missionRef.current) observer.unobserve(missionRef.current)
      if (historyRef.current) observer.unobserve(historyRef.current)
      if (teamRef.current) observer.unobserve(teamRef.current)
    }
  }, [])

  return (
    <div
      id="about"
      ref={sectionRef}
      className="bg-gradient-to-b from-blue-950 to-blue-900 text-white py-20 md:py-28 opacity-0 transition-opacity duration-1000"
    >
      <div className="container mx-auto px-5 md:px-15 lg:px-30">
        <div className="text-center mb-16">
          <span className="inline-block text-blue-300 text-lg font-semibold tracking-wider mb-2">
            CONHEÇA NOSSA MISSÃO
          </span>
          <h2 className="text-5xl font-bold text-white mb-6">Sobre Nós</h2>
          <div className="w-24 h-1 bg-blue-400 mx-auto rounded-full"></div>
        </div>

        <div className="mt-10 grid md:grid-cols-2 gap-12 md:gap-16">
          <div
            ref={missionRef}
            className="bg-blue-800/30 p-8 rounded-xl border border-blue-700/30 shadow-xl opacity-0 transition-all duration-1000 transform translate-y-8"
          >
            <div className="flex items-center mb-6">
              <div className="bg-blue-600 p-3 rounded-lg mr-4">
                <FaLeaf className="text-white text-2xl" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold">
                O que é o projeto?
              </h3>
            </div>
            <p className="text-xl text-blue-100 leading-relaxed">
              O Projeto Vida Selvagem é uma organização sem fins lucrativos que
              atua na defesa dos animais desde 2002. Nossa missão é proteger e
              promover o bem-estar dos animais, além de conscientizar a
              população sobre a importância da preservação da fauna ao redor do
              mundo. Para isso, escolhemos um animal de cada bioma para
              representar a nossa causa e trabalhamos para garantir que eles
              tenham um ambiente seguro e saudável para viver.
            </p>
          </div>

          <div
            ref={historyRef}
            className="bg-blue-800/30 p-8 rounded-xl border border-blue-700/30 shadow-xl opacity-0 transition-all duration-1000 transform translate-y-8"
          >
            <div className="flex items-center mb-6">
              <div className="bg-blue-600 p-3 rounded-lg mr-4">
                <FaHistory className="text-white text-2xl" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold">Nossa História</h3>
            </div>
            <p className="text-xl text-blue-100 leading-relaxed">
              Tudo começou com a paixão por proteger os biomas e seus
              habitantes. Ao percebermos que muitos animais estavam ameaçados,
              decidimos agir. Assim nasceu o Projeto Vida Selvagem, com a missão
              de preservar um animal de cada bioma do mundo. Ao longo de duas
              décadas, expandimos nossa atuação e hoje somos referência em
              conservação e educação ambiental.
            </p>
          </div>
        </div>

        <div
          ref={teamRef}
          className="mt-20 opacity-0 transition-all duration-1000 transform translate-y-8"
        >
          <div className="flex items-center justify-center mb-10">
            <div className="bg-blue-600 p-3 rounded-lg mr-4">
              <FaUsers className="text-white text-2xl" />
            </div>
            <h3 className="text-3xl md:text-4xl font-bold">Nossa Equipe</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
            <TeamCard
              name="Antonio Marcos"
              role="Fundador e Diretor Geral"
              image="/marcos.jpg"
            />
            <TeamCard
              name="Samuel Bispo"
              role="Coordenador de Projetos"
              image="/samuel.jpg"
            />
            <TeamCard
              name="Gabriel Lima"
              role="Biólogo & Pesquisador"
              image="/gabriel.jpg"
            />
            <TeamCard
              name="Marcos Eduardo"
              role="Designer & Criador de Conteúdo"
              image="/dudu.jpg"
            />
            <TeamCard
              name="Pedro Lucas"
              role="Especialista em Captação de Recursos"
              image="/pedro.jpg"
            />
            <TeamCard
              name="Wenderson Inácio"
              role="Gestor de Comunicação & Parcerias"
              image="/wenderson.jpg"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
