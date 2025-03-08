import Image from 'next/image'

export default function Biome() {
  return (
    <div className="bg-black text-white py-10 md:py-20">
      <div className="mx-5 md:mx-15 lg:mx-30">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold">
            Oceanos: O Maior Ecossistema da Terra
          </h2>
          <p className="text-xl md:text-2xl mt-5">
            Vastos, profundos e misteriosos. Os oceanos cobrem mais de 70% da
            superfície terrestre, regulam nosso clima, produzem metade do
            oxigênio que respiramos e abrigam uma biodiversidade extraordinária.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-20 mt-10 md:mt-20">
          <div className="flex justify-center lg:justify-start">
            <Image
              src="/ocean_2.jpg"
              alt="Oceano"
              width={'500'}
              height={0}
              className="rounded-xl overflow-hidden"
            />
          </div>
          <div className="flex flex-col justify-around gap-10 md:gap-20">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold">
                O Que São os Oceanos?
              </h3>
              <p className="text-xl md:text-2xl mt-5">
                Os oceanos são vastas extensões de água salgada que circundam os
                continentes, formando um sistema interconectado que cobre cerca
                de 361 milhões de km² do planeta. Divididos tradicionalmente em
                cinco oceanos principais (Pacífico, Atlântico, Índico, Ártico e
                Antártico), constituem um único grande corpo d'água que contém
                97% da água da Terra.
              </p>
            </div>
            <div>
              <h3 className="text-3xl md:text-4xl font-bold">
                Onde Encontramos?
              </h3>
              <p className="text-xl md:text-2xl mt-5">
                Os oceanos circundam todos os continentes, com o Oceano Pacífico
                sendo o maior (ocupando um terço da superfície terrestre),
                seguido pelo Atlântico, Índico, Antártico e Ártico. Suas águas
                variam em profundidade, desde zonas costeiras rasas até abismos
                como a Fossa das Marianas, que atinge quase 11 km de
                profundidade.
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
              <h4 className="text-2xl md:text-3xl font-bold">
                Zonas Oceânicas
              </h4>
              <p className="mt-3">
                Estruturadas em camadas verticais (zona eufótica, mesopelágica,
                batipelágica, abissopelágica e hadopelágica) e horizontais
                (zonas nerítica e oceânica), cada uma com condições e formas de
                vida distintas.
              </p>
            </li>
            <li className="text-xl md:text-2xl">
              <h4 className="text-2xl md:text-3xl font-bold">
                Correntes Marinhas
              </h4>
              <p className="mt-3">
                Sistemas de circulação global que distribuem calor, nutrientes e
                organismos, influenciando profundamente o clima terrestre e os
                ecossistemas marinhos.
              </p>
            </li>
            <li className="text-xl md:text-2xl">
              <h4 className="text-2xl md:text-3xl font-bold">
                Ecossistemas Diversos
              </h4>
              <p className="mt-3">
                Desde recifes de coral e florestas de kelp até fontes
                hidrotermais e planícies abissais, os oceanos abrigam uma
                variedade impressionante de habitats.
              </p>
            </li>
            <li className="text-xl md:text-2xl">
              <h4 className="text-2xl md:text-3xl font-bold">Biodiversidade</h4>
              <p className="mt-3">
                Lar de mais de 230.000 espécies conhecidas e possivelmente
                milhões ainda não descobertas, desde o minúsculo plâncton até as
                maiores baleias, incluindo 18 espécies de pinguins.
              </p>
            </li>
          </ul>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-20 mt-10 md:mt-20">
          <div>
            <h3 className="text-3xl md:text-4xl font-bold">
              Por que os oceanos são tão importantes?
            </h3>
            <p className="text-xl md:text-2xl mt-5">
              Os oceanos são fundamentais para a vida na Terra. Produzem 50-80%
              do oxigênio atmosférico através do fitoplâncton, absorvem cerca de
              30% do CO₂ emitido por atividades humanas e armazenam 90% do calor
              excedente do planeta. Além disso, fornecem alimento para bilhões
              de pessoas, sustentam economias através da pesca, transporte e
              turismo, e são fonte de medicamentos e outros recursos valiosos.
            </p>
          </div>
          <div>
            <h3 className="text-3xl md:text-4xl font-bold">
              Ameaças aos Oceanos
            </h3>
            <p className="text-xl md:text-2xl mt-5">
              Os oceanos enfrentam múltiplas ameaças: aquecimento e acidificação
              devido às mudanças climáticas, poluição por plásticos e produtos
              químicos, sobrepesca que depleta estoques pesqueiros, destruição
              de habitats costeiros, e proliferação de zonas mortas devido à
              eutrofização. Estas pressões combinadas estão alterando
              profundamente os ecossistemas marinhos e ameaçando espécies como
              os pinguins.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
