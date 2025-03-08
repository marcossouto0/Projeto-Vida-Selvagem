import Navbar from '@/app/_components/Navbar'

export default function Hero() {
  return (
    <div
      id="eforest"
      className="bg-[url('/eforest.jpg')] bg-no-repeat bg-cover bg-center my-0 w-100% h-screen"
    >
      <div className="mx-5 md:mx-15 lg:mx-30">
        <Navbar />
        <div className="inline-flex flex-col gap-20">
          <div className="flex flex-col gap-3 md:gap-15">
            <h1 className="mt-5 md:mt-10 text-4xl md:text-5xl lg:text-6xl font-bold text-white font-mono">
              Floresta Equatorial: O Pulmão do Planeta e a Onça Pintada
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl text-white mt-1 md:mr-30">
              A onça pintada é a guardiã das florestas equatoriais, mas o
              desmatamento e as mudanças climáticas ameaçam seu habitat. Conheça
              esse bioma e como podemos protegê-lo.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
