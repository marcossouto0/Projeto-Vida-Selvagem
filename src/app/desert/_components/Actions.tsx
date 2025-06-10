'use client'

import { useRef, useEffect, useState } from 'react'
import {
  FaShieldAlt,
  FaBookOpen,
  FaUsers,
  FaSeedling,
  FaFlask,
  FaGlobeAfrica
} from 'react-icons/fa'

const actions = [
  {
    icon: <FaShieldAlt className="text-amber-50 text-2xl mr-3" />,
    title: 'Conservação e Proteção',
    items: [
      {
        strong: 'Monitoramento de populações selvagens',
        text:
          'Apoiar pesquisas sobre camelos selvagens e seus habitats, utilizando tecnologia de rastreamento e análise de DNA.'
      },
      {
        strong: 'Criação de áreas protegidas',
        text:
          'Estabelecer e manter reservas em regiões desérticas críticas para proteger a biodiversidade única.'
      },
      {
        strong: 'Combate à caça ilegal',
        text:
          'Fortalecer a fiscalização e aplicação de leis de proteção à fauna através de treinamento de guardas e tecnologia de vigilância.'
      }
    ]
  },
  {
    icon: <FaBookOpen className="text-amber-50 text-2xl mr-3" />,
    title: 'Educação e Conscientização',
    items: [
      {
        strong: 'Campanhas informativas',
        text:
          'Divulgar a importância dos desertos e seus habitantes através de mídias sociais, documentários e exposições.'
      },
      {
        strong: 'Programas educacionais',
        text:
          'Desenvolver materiais interativos sobre ecossistemas desérticos para escolas e plataformas de aprendizado online.'
      },
      {
        strong: 'Ecoturismo responsável',
        text:
          'Promover visitas guiadas que respeitem o ambiente e as comunidades locais, criando experiências imersivas e educativas.'
      }
    ]
  },
  {
    icon: <FaUsers className="text-amber-50 text-2xl mr-3" />,
    title: 'Apoio às Comunidades',
    items: [
      {
        strong: 'Parcerias com povos tradicionais',
        text:
          'Colaborar com comunidades que dependem dos camelos e do ecossistema desértico.'
      },
      {
        strong: 'Práticas sustentáveis',
        text:
          'Incentivar o manejo responsável de rebanhos domésticos e uso consciente dos recursos.'
      },
      {
        strong: 'Valorização cultural',
        text:
          'Preservar conhecimentos tradicionais sobre camelos e ambientes desérticos.'
      }
    ]
  },
  {
    icon: <FaSeedling className="text-amber-50 text-2xl mr-3" />,
    title: 'Combate à Desertificação',
    items: [
      {
        strong: 'Reflorestamento adaptado',
        text:
          'Plantar espécies nativas resistentes à seca em áreas degradadas.'
      },
      {
        strong: 'Conservação de água',
        text:
          'Implementar sistemas eficientes de irrigação e captação em regiões áridas.'
      },
      {
        strong: 'Agricultura sustentável',
        text:
          'Promover práticas que evitem a erosão e salinização do solo em zonas áridas.'
      }
    ]
  },
  {
    icon: <FaFlask className="text-amber-50 text-2xl mr-3" />,
    title: 'Pesquisa e Inovação',
    items: [
      {
        strong: 'Estudos científicos',
        text:
          'Apoiar pesquisas sobre adaptações dos camelos e suas aplicações biomédicas.'
      },
      {
        strong: 'Tecnologias biomiméticas',
        text:
          'Desenvolver soluções baseadas nas adaptações dos organismos desérticos.'
      },
      {
        strong: 'Monitoramento climático',
        text:
          'Acompanhar mudanças nos ecossistemas desérticos para ações preventivas.'
      }
    ]
  }
]

export default function Actions() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const actionRefs = useRef<(HTMLDivElement | null)[]>([])

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
    actionRefs.current.forEach(ref => {
      if (ref) observer.observe(ref)
    })

    return () => {
      observer.disconnect()
    }
  }, [actionRefs])

  return (
    <div
      ref={sectionRef}
      className={`bg-gradient-to-b from-amber-700 to-amber-800 py-16 md:py-24 transition-opacity duration-1000 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="container mx-auto px-5 md:px-15 lg:px-30">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-4 bg-amber-500 rounded-full mb-6 shadow-lg animate-bounce-slow">
            <FaGlobeAfrica className="text-amber-50 text-4xl" />
          </div>
          <h2
            ref={titleRef}
            className="text-4xl md:text-5xl font-extrabold mb-6 text-amber-100 opacity-0 transition-opacity duration-1000 drop-shadow-lg"
          >
            Nossas Ações
          </h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed text-amber-200">
            Trabalhamos para conservar os ecossistemas desérticos e proteger suas espécies únicas através de iniciativas sustentáveis e parcerias com comunidades locais.
          </p>
        </div>

        {/* Responsive grid for actions */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {actions.map((action, idx) => (
            <div
              key={action.title}
              ref={el => { actionRefs.current[idx] = el }}
              className="group bg-gradient-to-br from-amber-50 to-amber-100 rounded-2xl shadow-xl border border-amber-200 overflow-hidden opacity-0 transition-all duration-1000 transform translate-y-8 hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.03] focus-within:shadow-2xl"
              tabIndex={0}
            >
              <div className="bg-amber-500 px-6 py-4 flex items-center gap-2">
                {action.icon}
                <h3 className="text-2xl md:text-3xl font-semibold text-white drop-shadow">
                  {action.title}
                </h3>
              </div>
              <div className="p-6">
                <ul className="space-y-4">
                  {action.items.map((item, i) => (
                    <li className="flex items-start" key={i}>
                      <span className="text-amber-600 font-bold mr-2 mt-1">•</span>
                      <div>
                        <strong className="text-amber-800">{item.strong}</strong>
                        <p className="text-amber-700">{item.text}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style jsx global>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0);}
          50% { transform: translateY(-8px);}
        }
        .animate-bounce-slow {
          animation: bounce-slow 2.5s infinite;
        }
      `}</style>
    </div>
  )
}
