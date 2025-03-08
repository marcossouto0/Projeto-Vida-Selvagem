'use client'

import About from './_components/About'
import BiomesList from './_components/BiomesList'
import Hero from './_components/Hero'
import Quote from './_components/Quote'

export default function Home() {
  return (
    <div>
      <Hero />
      <Quote />
      <About />
      <BiomesList />
    </div>
  )
}
