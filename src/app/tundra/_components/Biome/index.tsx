'use client'

import { useRef, useEffect, useState, createRef } from 'react'
import { FaGlobeAmericas, FaLeaf, FaMapMarkerAlt, FaTemperatureLow, FaSnowflake } from 'react-icons/fa'
import BiomeTitle from './BiomeTitle'
import BiomeDescription from './BiomeDescription'
import BiomeImage from './BiomeImage'
import BiomeContent from './BiomeContent'
import biomeData from '@/data/biomes/tundra/biome'

const icons = {
  FaLeaf,
  FaMapMarkerAlt,
  FaTemperatureLow,
  FaSnowflake
}

export default function Biome() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const descriptionRef = useRef<HTMLParagraphElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const [contentRefs, setContentRefs] = useState<React.RefObject<HTMLDivElement | null>[]>([])

  useEffect(() => {
    setContentRefs(Array(biomeData.contents.length).fill(undefined).map(() => createRef<HTMLDivElement>()))
  }, [])

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
    if (descriptionRef.current) observer.observe(descriptionRef.current)
    if (imageRef.current) observer.observe(imageRef.current)
    contentRefs.forEach(ref => {
      if (ref.current) observer.observe(ref.current)
    })

    return () => {
      observer.disconnect()
    }
  }, [contentRefs])

  return (
    <div
      id="biome-content"
      ref={sectionRef}
      className="bg-gradient-to-b from-blue-950 to-blue-900 text-white py-16 md:py-24"
    >
      <div className="container mx-auto px-5 md:px-15 lg:px-30">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-blue-600 rounded-full mb-6 hover:bg-blue-500 transition-colors duration-300">
            <FaGlobeAmericas className="text-blue-100 text-3xl" />
          </div>
          <BiomeTitle ref={titleRef} title={biomeData.title} />
          <div className="w-24 h-1 bg-blue-400 mx-auto mb-8 rounded-full"></div>
          <BiomeDescription description={biomeData.description} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <BiomeImage
            ref={imageRef}
            src={biomeData.image.src}
            alt={biomeData.image.alt}
            caption={biomeData.image.caption}
          />
          <div ref={contentRefs[0]} className="space-y-8">
            <BiomeContent
              ref={descriptionRef}
              icon={icons[biomeData.contents[0].icon as keyof typeof icons]}
              title={biomeData.contents[0].title}
              text={biomeData.contents[0].text || ''}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {biomeData.contents.slice(1).map((content, index) => (
              <BiomeContent
                key={index}
                ref={contentRefs[index + 1]}
                icon={icons[content.icon as keyof typeof icons]}
                title={content.title}
                text={content.text || ''}
                list={content.list}
                sections={content.sections}
              />
          ))}
        </div>
      </div>
    </div>
  )
}