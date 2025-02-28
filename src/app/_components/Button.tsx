"use client";

import Link from "next/link";

export default function Button({ name, className, disabled }: { name: string, className: string, disabled: boolean }) {
  className = `text-xl font-bold py-5 px-10 rounded-lg ${className}`

  if (disabled) {
    className = `${className} opacity-50 cursor-not-allowed`
    return (
      <div>
        <button className={className} disabled>{name}</button>
      </div>
    )
  }

  className = `${className} cursor-pointer transform hover:scale-105 transition duration-300 ease-in-out`
  return (
    <Link href="[biome]" as={`${name.toLowerCase()}`}>
      <button className={className}>{name}</button>
    </Link>
  )
}