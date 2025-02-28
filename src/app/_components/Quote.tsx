import Image from 'next/image'

export default function Quote() {
  return (
    <div className="flex flex-col md:flex-row gap-15 items-center mx-10 md:mx-30 my-20">
      <div className='rounded-xl overflow-hidden'>
        <Image src={'/Mother_Teresa_1.jpg'} alt="Madre Teresa" width={300} height={0} />
      </div>
      <div>
        <blockquote className="text-3xl md:text-4xl text-blue-950 ">
          <p>
          “Os animais foram criados pela mesma mão caridosa de Deus que nos criou… é nosso dever protegê-los e promover o seu bem-estar.”
          </p>
          <footer className="text-right text-blue-950 font-bold text-2xl mt-1">- Madre Teresa de Calcutá (1910-1997)</footer>
        </blockquote>
      </div>
    </div>
  )
}
