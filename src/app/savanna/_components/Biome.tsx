import Image from 'next/image'

export default function Biome() {
  return (
    <div className="bg-black text-white py-10 md:py-20">
      <div className="mx-5 md:mx-15 lg:mx-30">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold">
            Savana: O Bioma das Planícies Tropicais
          </h2>
          <p className="text-xl md:text-2xl mt-5">
            Diversa, resiliente e vital. A savana é um bioma caracterizado por
            extensas áreas de gramíneas com árvores esparsas, encontrado em
            regiões tropicais e subtropicais ao redor do mundo.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-20 mt-10 md:mt-20">
          <div className="flex justify-center lg:justify-start">
            <Image
              src="/savanna_2.jpg"
              alt="Savana"
              width={'500'}
              height={0}
              className="rounded-xl overflow-hidden"
            />
          </div>
          <div className="flex flex-col justify-around gap-10 md:gap-20">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold">
                O Que é a Savana?
              </h3>
              <p className="text-xl md:text-2xl mt-5">
                A savana é um bioma caracterizado por uma cobertura contínua de
                gramíneas, com árvores e arbustos dispersos que não formam um
                dossel fechado. É definida por estações secas e chuvosas bem
                marcadas, com precipitação anual entre 500 e 1.500 mm,
                concentrada principalmente na estação chuvosa.
              </p>
            </div>
            <div>
              <h3 className="text-3xl md:text-4xl font-bold">
                Onde Encontramos?
              </h3>
              <p className="text-xl md:text-2xl mt-5">
                As savanas ocorrem em todos os continentes, exceto na Antártida.
                As mais extensas estão na África (onde cobrem quase metade do
                continente), mas também são encontradas na América do Sul (como
                o Cerrado brasileiro), Austrália (Outback), Índia e Sudeste
                Asiático. Geralmente se desenvolvem em regiões com clima
                tropical sazonal.
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
                Tropical sazonal, com estação chuvosa (verão) e seca (inverno)
                bem definidas. Temperaturas médias entre 20°C e 30°C ao longo do
                ano.
              </p>
            </li>
            <li className="text-xl md:text-2xl">
              <h4 className="text-2xl md:text-3xl font-bold">Vegetação</h4>
              <p className="mt-3">
                Dominada por gramíneas, com árvores esparsas e adaptadas ao fogo
                e à seca, frequentemente com troncos tortuosos, cascas grossas e
                raízes profundas.
              </p>
            </li>
            <li className="text-xl md:text-2xl">
              <h4 className="text-2xl md:text-3xl font-bold">Solo</h4>
              <p className="mt-3">
                Geralmente antigos, profundos e pobres em nutrientes, com alto
                teor de ferro e alumínio, resultando em coloração avermelhada em
                muitas savanas.
              </p>
            </li>
            <li className="text-xl md:text-2xl">
              <h4 className="text-2xl md:text-3xl font-bold">Biodiversidade</h4>
              <p className="mt-3">
                Rica em espécies adaptadas às condições sazonais, incluindo
                grandes herbívoros, predadores, aves, répteis e uma diversidade
                notável de insetos e plantas.
              </p>
            </li>
          </ul>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-20 mt-10 md:mt-20">
          <div>
            <h3 className="text-3xl md:text-4xl font-bold">
              Por que as savanas são tão importantes?
            </h3>
            <p className="text-xl md:text-2xl mt-5">
              As savanas são essenciais para a biodiversidade global, abrigando
              algumas das mais impressionantes concentrações de vida selvagem do
              planeta. Funcionam como importantes sumidouros de carbono,
              armazenando-o principalmente nas raízes profundas das gramíneas e
              no solo. Além disso, sustentam milhões de pessoas através da
              agricultura, pecuária e outros recursos naturais.
            </p>
          </div>
          <div>
            <h3 className="text-3xl md:text-4xl font-bold">
              Ameaças às Savanas
            </h3>
            <p className="text-xl md:text-2xl mt-5">
              As savanas enfrentam múltiplas ameaças: conversão para agricultura
              em larga escala, especialmente monoculturas; urbanização e
              desenvolvimento de infraestrutura; alteração dos regimes naturais
              de fogo; espécies invasoras; e mudanças climáticas que podem
              alterar os padrões de precipitação. Em muitas regiões, mais de 50%
              da cobertura original de savanas já foi perdida.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
