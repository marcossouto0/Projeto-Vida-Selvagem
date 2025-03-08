import Navbar from '@/app/_components/Navbar'

export default function Hero() {
  return (
    <div
      id="savanna"
      className="bg-[url('/savanna.jpg')] bg-no-repeat bg-cover bg-center my-0 w-100% h-screen"
    >
      <div className="mx-5 md:mx-15 lg:mx-30">
        <Navbar />
        <div className="inline-flex flex-col gap-20">
          <div className="flex flex-col gap-3 md:gap-15">
            <h1 className="mt-5 md:mt-10 text-4xl md:text-5xl lg:text-6xl font-bold text-white font-mono">
              Savana: As Planícies Tropicais e o Tamanduá-Bandeira
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl text-white mt-1 md:mr-30">
              O tamanduá-bandeira é um dos símbolos das savanas sul-americanas,
              mas as queimadas e o desmatamento ameaçam sua sobrevivência.
              Conheça esse bioma único e como podemos protegê-lo.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
