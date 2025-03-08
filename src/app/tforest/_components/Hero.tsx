import Navbar from '@/app/_components/Navbar'

export default function Hero() {
  return (
    <div
      id="tforest"
      className="bg-[url('/tforest.jpg')] bg-no-repeat bg-cover bg-center my-0 w-100% h-screen"
    >
      <div className="mx-5 md:mx-15 lg:mx-30">
        <Navbar />
        <div className="inline-flex flex-col gap-20">
          <div className="flex flex-col gap-3 md:gap-15">
            <h1 className="mt-5 md:mt-10 text-4xl md:text-5xl lg:text-6xl font-bold text-white font-mono">
              Floresta Temperada: O Refúgio Sazonal e o Urso Pardo
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl text-white mt-1 md:mr-30">
              O urso pardo é um símbolo das florestas temperadas, mas a
              fragmentação de habitat e as mudanças climáticas ameaçam sua
              sobrevivência. Conheça esse bioma e como podemos protegê-lo.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
