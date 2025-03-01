import Navbar from "@/app/_components/Navbar";

export default function Hero() {
  return (
    <div
      id="tundra"
      className="bg-[url('/tundra.jpg')] bg-no-repeat bg-cover bg-center my-0 w-100% h-screen"
    >
      <div className="mx-10 md:mx-30">
        <Navbar />
        <div className="inline-flex flex-col gap-20">
          <div className="flex flex-col gap-3 md:gap-15">
            <h1 className="mt-5 md:mt-10 text-4xl md:text-5xl lg:text-6xl font-bold text-[#040c0a] font-mono">
              Tundra: O Deserto Gelado e a Luta da Rena
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl text-[#040c0a] mt-1 md:mr-30">
              A rena é um símbolo da tundra, mas as mudanças climáticas ameaçam
              sua sobrevivência. Conheça esse bioma e como podemos protegê-lo.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
