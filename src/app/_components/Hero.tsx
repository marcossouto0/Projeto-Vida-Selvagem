import Navbar from './Navbar'

export default function Hero() {
  return (
    <div className="bg-[url('/bg.jpg')] bg-no-repeat bg-cover bg-center my-0 w-100% h-screen">
      <div className="mx-5 md:mx-15 lg:mx-30">
        <Navbar />
        <div className="flex flex-col gap-20">
          <div className='flex flex-col gap-5 md:gap-0'>
            <h1 className="mt-15 md:mt-25 text-5xl md:text-6xl font-bold text-blue-950 font-mono">
              Salvando animais a mais de 20 anos!
            </h1>
            <p className="text-2xl md:text-3xl text-blue-950 mt-2 mr-5">
              Defendendo a vida selvagem, um bioma de cada vez.
            </p>
          </div>
          <div>
            <a
              className="border-2 border-blue-950 text-blue-950 text-3xl md:text-4xl font-bold py-3 px-5 rounded-lg items-center justify-center"
              href="#about"
            >
              <span className="">Sobre Nós</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
