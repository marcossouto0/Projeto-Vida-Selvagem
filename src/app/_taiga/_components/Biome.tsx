import Image from 'next/image'

export default function Biome() {
  return (
    <div className="bg-black text-white py-10 md:py-20">
      <div className="mx-5 md:mx-15 lg:mx-30">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold">
            Taiga: A Maior Floresta do Mundo
          </h2>
          <p className="text-xl md:text-2xl mt-5">
            Vasta, resiliente e misteriosa. A taiga é a maior floresta do
            planeta, um cinturão verde que circunda o Hemisfério Norte e abriga
            uma biodiversidade adaptada aos invernos rigorosos.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-20 mt-10 md:mt-20">
          <div className="flex justify-center lg:justify-start">
            <Image
              src="/taiga_2.jpg"
              alt="Taiga"
              width={'500'}
              height={0}
              className="rounded-xl overflow-hidden"
            />
          </div>
          <div className="flex flex-col justify-around gap-10 md:gap-20">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold">
                O Que é a Taiga?
              </h3>
              <p className="text-xl md:text-2xl mt-5">
                A taiga, também conhecida como floresta boreal, é um bioma
                caracterizado por vastas florestas de coníferas que se estendem
                por grande parte do Hemisfério Norte. Cobrindo aproximadamente
                17 milhões de km², representa cerca de 29% da cobertura
                florestal mundial, formando o maior ecossistema terrestre
                contínuo do planeta.
              </p>
            </div>
            <div>
              <h3 className="text-3xl md:text-4xl font-bold">
                Onde Encontramos?
              </h3>
              <p className="text-xl md:text-2xl mt-5">
                A taiga forma um cinturão circumpolar entre 50° e 70° de
                latitude norte, estendendo-se por grandes áreas do Canadá,
                Alasca, Escandinávia e Rússia, com pequenas porções no norte da
                Mongólia, China e Japão. Está localizada ao sul da tundra ártica
                e ao norte das florestas temperadas.
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
                Invernos longos e rigorosos (-40°C a -20°C) e verões curtos e
                amenos (10°C a 20°C). Precipitação anual moderada (300-900 mm),
                principalmente como neve.
              </p>
            </li>
            <li className="text-xl md:text-2xl">
              <h4 className="text-2xl md:text-3xl font-bold">Vegetação</h4>
              <p className="mt-3">
                Dominada por coníferas (pinheiros, abetos, larício), adaptadas
                ao frio com folhas perenes em forma de agulha e formato cônico
                que facilita o escoamento da neve.
              </p>
            </li>
            <li className="text-xl md:text-2xl">
              <h4 className="text-2xl md:text-3xl font-bold">Solo</h4>
              <p className="mt-3">
                Ácido e pobre em nutrientes, com camada superficial de matéria
                orgânica (serrapilheira) de decomposição lenta devido às baixas
                temperaturas.
              </p>
            </li>
            <li className="text-xl md:text-2xl">
              <h4 className="text-2xl md:text-3xl font-bold">Biodiversidade</h4>
              <p className="mt-3">
                Relativamente baixa diversidade de espécies, mas com adaptações
                notáveis ao frio. Fauna inclui lobos, ursos, alces, linces,
                glutões e diversas aves migratórias.
              </p>
            </li>
          </ul>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-20 mt-10 md:mt-20">
          <div>
            <h3 className="text-3xl md:text-4xl font-bold">
              Por que a taiga é tão importante?
            </h3>
            <p className="text-xl md:text-2xl mt-5">
              A taiga é um dos maiores reservatórios de carbono do planeta,
              armazenando cerca de 30% do carbono terrestre em suas árvores e
              solos. Funciona como um gigantesco filtro de ar, produzindo
              oxigênio e capturando poluentes. Além disso, abriga algumas das
              últimas grandes áreas selvagens do mundo, essenciais para a
              conservação da biodiversidade global e para a manutenção do ciclo
              hidrológico.
            </p>
          </div>
          <div>
            <h3 className="text-3xl md:text-4xl font-bold">Ameaças à Taiga</h3>
            <p className="text-xl md:text-2xl mt-5">
              A taiga enfrenta múltiplas ameaças: exploração madeireira em larga
              escala, mineração, construção de oleodutos e gasodutos, e
              desenvolvimento de infraestrutura. As mudanças climáticas estão
              alterando os padrões de temperatura e precipitação, aumentando a
              frequência e intensidade de incêndios florestais e favorecendo
              surtos de pragas e doenças. Estas pressões combinadas estão
              fragmentando este vasto ecossistema e ameaçando sua integridade.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
