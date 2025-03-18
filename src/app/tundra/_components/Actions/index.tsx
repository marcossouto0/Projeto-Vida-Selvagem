'use client'

import React, { JSX, useEffect, useRef, useState } from 'react'
import {
  FaShieldAlt,
  FaGraduationCap,
  FaHandsHelping,
  FaSearch,
  FaGlobeAmericas,
  FaSnowflake
} from 'react-icons/fa'
import ActionCard from './ActionCard'
import actionsData from '@/data/biomes/tundra/actions'

const icons: { [key: string]: JSX.Element } = {
  FaShieldAlt: <FaShieldAlt className="text-blue-50 text-2xl" />,
  FaGraduationCap: <FaGraduationCap className="text-blue-50 text-2xl" />,
  FaHandsHelping: <FaHandsHelping className="text-blue-50 text-2xl" />,
  FaSearch: <FaSearch className="text-blue-50 text-2xl" />,
  FaGlobeAmericas: <FaGlobeAmericas className="text-blue-50 text-2xl" />
}

const Actions = () => {
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
            {actionsData.title}
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed text-blue-100">
            {actionsData.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {actionsData.actions.map((action, index) => (
            <ActionCard
              key={index}
              ref={el => {
                actionRefs.current[index] = el
              }}
              icon={icons[action.icon]}
              title={action.title}
              items={action.items}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Actions
