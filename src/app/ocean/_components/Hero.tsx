import Navbar from '@/app/_components/Navbar'

export default function Hero() {
  return (
    <div
      id="ocean"
      className="bg-[url('/ocean.jpg')] bg-no-repeat bg-cover bg-center my-0 w-100% h-screen"
    >
      <div className="mx-5 md:mx-15 lg:mx-30">
        <Navbar />
        <div className="inline-flex flex-col gap-20">
          <div className="flex flex-col gap-3 md:gap-15">
            <h1 className="mt-5 md:mt-10 text-4xl md:text-5xl lg:text-6xl font-bold text-white font-mono">
              Oceanos: O Coração Azul do Planeta e os Pinguins
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl text-white mt-1 md:mr-30">
              Os pinguins são embaixadores dos oceanos, mas as mudanças
              climáticas, a poluição e a pesca excessiva ameaçam sua
              sobrevivência. Conheça este bioma vital e como podemos protegê-lo.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
