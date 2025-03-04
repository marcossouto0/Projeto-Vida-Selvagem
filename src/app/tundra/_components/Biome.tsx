import Image from 'next/image'

export default function Biome() {
  return (
    <div className="bg-black text-white py-10 md:py-20">
      <div className="mx-5 md:mx-15 lg:mx-30">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold">
            Tundra: O Bioma Extremo da Terra
          </h2>
          <p className="text-xl md:text-2xl mt-5">
            Fria, vasta e desafiadora. A tundra abriga formas de vida incríveis
            que resistem às condições mais extremas do planeta.
          </p>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-20 mt-10 md:mt-20'>
          <div className='flex justify-center lg:justify-start'>
            <Image
            src="/tundra_2.jpg"
            alt="Tundra"
            width={'500'}
            height={0}
            className="rounded-xl overflow-hidden"
          />
          </div>
          <div className="flex flex-col justify-around gap-10 md:gap-20">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold">
                O Que é a Tundra?
              </h3>
              <p className="text-xl md:text-2xl mt-5">
                A tundra é um bioma encontrado nas regiões mais frias do
                planeta, onde o solo permanece congelado quase o ano todo. Sua
                vegetação rasteira e clima extremo a tornam um dos habitats mais
                desafiadores do mundo.
              </p>
            </div>
            <div>
              <h3 className="text-3xl md:text-4xl font-bold">
                Onde Encontramos?
              </h3>
              <p className="text-xl md:text-2xl mt-5">
                A tundra é encontrada em regiões próximas aos polos, como no
                norte do Canadá, Alasca, Groenlândia, Rússia e Escandinávia. Ela
                também ocorre em altas montanhas, como os Alpes e o Himalaia.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-10 md:mt-20">
          <h3 className="text-3xl md:text-4xl mb-5 md:mb-10 font-bold">
            Principais Características:
          </h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-20 mt-5">
            <li className="text-xl md:text-2xl">
              <h4 className="text-2xl md:text-3xl font-bold">Clima</h4>
              <p className="mt-3">
                Clima polar seco, pouca chuva, invernos congelantes (-50°C) e
                verões curtos.
              </p>
            </li>
            <li className="text-xl md:text-2xl">
              <h4 className="text-2xl md:text-3xl font-bold">Vegetação</h4>
              <p className="mt-3">
                Sem árvores, apenas musgos, líquens, gramíneas, e pequenos
                arbustos.
              </p>
            </li>
            <li className="text-xl md:text-2xl">
              <h4 className="text-2xl md:text-3xl font-bold">
                Solo (Permafrost)
              </h4>
              <p className="mt-3">Camada de terra permanentemente congelada.</p>
            </li>
            <li className="text-xl md:text-2xl">
              <h4 className="text-2xl md:text-3xl font-bold">Fauna Adaptada</h4>
              <p className="mt-3">
                Animais com pelagens espessas e camuflagem para sobreviver ao
                inverno rigoroso.
              </p>
            </li>
          </ul>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-20 mt-10 md:mt-20">
          <div>
            <h3 className="text-3xl md:text-4xl font-bold">
              Por que a tundra é tão importante?
            </h3>
            <p className="text-xl md:text-2xl mt-5">
              Apesar de parecer inóspita, a tundra tem um papel crucial no
              equilíbrio climático da Terra. Seu permafrost armazena grandes
              quantidades de carbono, ajudando a regular o clima global.
            </p>
          </div>
          <div>
            <h3 className="text-3xl md:text-4xl font-bold">Ameaças à Tundra</h3>
            <p className="text-xl md:text-2xl mt-5">
              As mudanças climáticas estão aquecendo a tundra e ameaçando a
              sobrevivência de suas espécies. O derretimento do permafrost
              libera gases de efeito estufa, agravando o aquecimento global.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
