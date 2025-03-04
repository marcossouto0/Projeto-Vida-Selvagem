'use client'

import Link from 'next/link'

export default function Button({
  name,
  className,
  disabled
}: {
  name: string
  className: string
  disabled: boolean
}) {
  className = `text-lg md:text-xl font-bold py-5 px-10 rounded-lg flex justify-center items-center ${className}`

  if (disabled) {
    className = `${className} opacity-50 cursor-not-allowed`
    return <div className={className}>{name}</div>
  }

  className = `${className} cursor-pointer transform hover:scale-105 transition duration-300 ease-in-out`
  return (
    <Link href="[biome]" as={`${name.toLowerCase()}`} className={className}>
      {name}
    </Link>
  )
}
