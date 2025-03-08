import Image from 'next/image'

export default function Biome() {
  return (
    <div className="bg-black text-white py-10 md:py-20">
      <div className="mx-5 md:mx-15 lg:mx-30">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold">
            Floresta Temperada: O Bioma das Quatro Estações
          </h2>
          <p className="text-xl md:text-2xl mt-5">
            Majestosa, sazonal e resiliente. A floresta temperada encanta com
            suas transformações ao longo do ano, abrigando uma biodiversidade
            adaptada aos ciclos das estações.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-20 mt-10 md:mt-20">
          <div className="flex justify-center lg:justify-start">
            <Image
              src="/tforest_2.jpg"
              alt="Floresta Temperada"
              width={'500'}
              height={0}
              className="rounded-xl overflow-hidden"
            />
          </div>
          <div className="flex flex-col justify-around gap-10 md:gap-20">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold">
                O Que é a Floresta Temperada?
              </h3>
              <p className="text-xl md:text-2xl mt-5">
                A floresta temperada é um bioma caracterizado por árvores de
                folhas largas e decíduas, que perdem suas folhas durante o
                outono e inverno. Localizada em regiões de clima temperado, com
                quatro estações bem definidas, apresenta temperaturas médias
                entre 10°C e 20°C e precipitação bem distribuída ao longo do ano
                (750-1.500 mm).
              </p>
            </div>
            <div>
              <h3 className="text-3xl md:text-4xl font-bold">
                Onde Encontramos?
              </h3>
              <p className="text-xl md:text-2xl mt-5">
                As florestas temperadas estão distribuídas principalmente no
                hemisfério norte, em regiões como o leste dos Estados Unidos e
                Canadá, Europa Ocidental e Central, leste da Ásia (China, Japão
                e Coreia) e partes da Austrália, Nova Zelândia e América do Sul
                (Chile e Argentina).
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
                Quatro estações bem definidas, com verões quentes, invernos
                frios, e precipitação distribuída ao longo do ano.
              </p>
            </li>
            <li className="text-xl md:text-2xl">
              <h4 className="text-2xl md:text-3xl font-bold">Vegetação</h4>
              <p className="mt-3">
                Árvores decíduas dominantes (carvalho, bordo, faia), com
                sub-bosque diversificado e estratificação vertical.
              </p>
            </li>
            <li className="text-xl md:text-2xl">
              <h4 className="text-2xl md:text-3xl font-bold">Solo</h4>
              <p className="mt-3">
                Solos férteis e profundos, ricos em matéria orgânica devido à
                decomposição anual das folhas caídas.
              </p>
            </li>
            <li className="text-xl md:text-2xl">
              <h4 className="text-2xl md:text-3xl font-bold">Biodiversidade</h4>
              <p className="mt-3">
                Fauna diversificada com adaptações sazonais, incluindo
                hibernação e migração durante o inverno.
              </p>
            </li>
          </ul>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-20 mt-10 md:mt-20">
          <div>
            <h3 className="text-3xl md:text-4xl font-bold">
              Por que a floresta temperada é tão importante?
            </h3>
            <p className="text-xl md:text-2xl mt-5">
              As florestas temperadas são fundamentais para a regulação
              climática regional, sequestro de carbono e manutenção de bacias
              hidrográficas. Além disso, fornecem madeira, alimentos,
              medicamentos e oportunidades recreativas, sendo vitais para a
              economia e bem-estar humano em muitas regiões.
            </p>
          </div>
          <div>
            <h3 className="text-3xl md:text-4xl font-bold">
              Ameaças à Floresta Temperada
            </h3>
            <p className="text-xl md:text-2xl mt-5">
              A urbanização, agricultura intensiva e exploração madeireira não
              sustentável reduziram drasticamente a extensão original das
              florestas temperadas. Mudanças climáticas, espécies invasoras e
              poluição também ameaçam a integridade desses ecossistemas e sua
              biodiversidade.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
