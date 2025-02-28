import Navbar from '@/app/_components/Navbar'

export default function Hero() {
  return (
    <div
      className="bg-[url('/taiga.jpg')] bg-no-repeat bg-cover bg-center bg-fixed my-0 w-100% h-screen"
    >
      <div className="mx-30">
        <Navbar />
        <div className="inline-flex flex-col gap-20">
          <div className="flex flex-col gap-15">
            <h1 className="mt-10 text-6xl font-bold text-[#040c0a] font-mono">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </h1>
            <p className="text-3xl text-[#040c0a] mt-2 mr-30">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis
              illo suscipit fuga autem sed eveniet, saepe doloribus quibusdam
              maxime debitis tempore accusamus eligendi expedita. Natus velit
              commodi harum minus. Quas.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
