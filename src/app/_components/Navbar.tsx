import Image from 'next/image'

export default function Navbar() {
  return (
    <div className='flex items-center gap-1 py-2'>
      <Image src="/logo.png" alt="Logo" width={60} height={60} />
      <h1 className='text-neutral-800 text-xl md:text-4xl font-bold '>Projeto Vida Selvagem</h1>
    </div>
  )
}
