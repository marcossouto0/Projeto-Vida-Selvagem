import Navbar from './Navbar'

export default function Hero() {
  return (
    <div className="bg-[url('/bg.jpg')] bg-no-repeat bg-cover bg-center bg-fixed my-0 w-100% h-screen">
      <div className="mx-10 md:mx-30">
        <Navbar />
        <div className="inline-flex flex-col gap-20">
          <div>
            <h1 className="mt-10 md:mt-25 text-6xl md:text-6xl font-bold text-blue-950 font-mono">
              Salvando animais a mais de 75 anos!
            </h1>
            <p className="text-3xl text-blue-950 mt-2">
              Defendendo a vida selvagem, um bioma de cada vez.
            </p>
          </div>
          <div>
            <a
              className="border-2 border-blue-950 text-blue-950 text-4xl font-bold py-3 px-5 rounded-lg items-center justify-center"
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
