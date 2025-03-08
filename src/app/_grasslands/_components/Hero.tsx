import Navbar from '@/app/_components/Navbar'

export default function Hero() {
  return (
    <div
      id="grasslands"
      className="bg-[url('/grasslands.jpg')] bg-no-repeat bg-cover bg-center my-0 w-100% h-screen"
    >
      <div className="mx-5 md:mx-15 lg:mx-30">
        <Navbar />
        <div className="inline-flex flex-col gap-20">
          <div className="flex flex-col gap-3 md:gap-15">
            <h1 className="mt-5 md:mt-10 text-4xl md:text-5xl lg:text-6xl font-bold text-white font-mono">
              Campos: As Planícies Douradas e o Bisão Americano
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl text-white mt-1 md:mr-30">
              O bisão americano é um símbolo dos campos nativos, mas a conversão
              de habitat e a caça histórica quase levaram à sua extinção.
              Conheça este bioma vital e como podemos protegê-lo.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
