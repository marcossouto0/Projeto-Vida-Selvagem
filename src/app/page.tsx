'use client'

import About from './_components/About'
import Details from './_components/Details'
import Hero from './_components/Hero'
import Quote from './_components/Quote'

export default function Home() {
  return (
    <div>
        <Hero />
        <Quote />
        <About />
        <Details />
    </div>
  )
}
