import Navbar from '@/app/_components/Navbar'

export default function Hero() {
  return (
    <div
      id="taiga"
      className="bg-[url('/taiga.jpg')] bg-no-repeat bg-cover bg-center my-0 w-100% h-screen"
    >
      <div className="mx-5 md:mx-15 lg:mx-30">
        <Navbar />
        <div className="inline-flex flex-col gap-20">
          <div className="flex flex-col gap-3 md:gap-15">
            <h1 className="mt-5 md:mt-10 text-4xl md:text-5xl lg:text-6xl font-bold text-white font-mono">
              Taiga: A Floresta Boreal e o Lobo Cinzento
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl text-white mt-1 md:mr-30">
              O lobo cinzento é um símbolo da taiga, mas a fragmentação de
              habitat e a caça ilegal ameaçam sua sobrevivência. Conheça este
              vasto bioma e como podemos protegê-lo.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
