import Image from 'next/image'

export default function Animal() {
  return (
    <div className="bg-[#1E3A8A] text-white">
      <div className="mx-5 md:mx-15 lg:mx-30 py-10 md:py-20">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold">
            Pinguins: Os Navegantes dos Oceanos
          </h2>
          <p className="text-xl md:text-2xl mt-5">
            Elegantes na água e desajeitados em terra, os pinguins são aves
            marinhas perfeitamente adaptadas à vida nos mares mais frios do
            planeta. Embaixadores dos oceanos, enfrentam ameaças crescentes
            devido às mudanças climáticas e à poluição marinha.
          </p>
        </div>
        <div className="mt-10 md:mt-20 grid grid-cols-1 xl:grid-cols-2 gap-10 md:gap-20">
          <div className="flex justify-center xl:order-2">
            <Image
              src="/penguin.jpg"
              alt="Pinguins"
              width={500}
              height={0}
              className=" rounded-xl overflow-hidden "
            />
          </div>
          <div className="flex flex-col justify-around gap-10 md:gap-20">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold">
                Características
              </h3>
              <p className="text-xl md:text-2xl mt-5">
                Os pinguins são aves não-voadoras da família Spheniscidae, com
                18 espécies distribuídas principalmente no Hemisfério Sul. Desde
                o pequeno pinguim-azul (40 cm) até o imponente pinguim-imperador
                (1,2 m), todas as espécies compartilham adaptações
                extraordinárias para a vida marinha.
              </p>
              <p className="text-xl md:text-2xl mt-5">
                Suas adaptações notáveis incluem:
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-20 mt-3">
                <li className="text-xl md:text-2xl">
                  <strong>Hidrodinâmica:</strong> Corpo fusiforme e asas
                  transformadas em nadadeiras rígidas que permitem nadar a até
                  36 km/h, mergulhando a profundidades de até 500 metros.
                </li>
                <li className="text-xl md:text-2xl">
                  <strong>Isolamento térmico:</strong> Camada densa de penas
                  impermeáveis sobrepostas e uma espessa camada de gordura
                  subcutânea que os protege das águas geladas.
                </li>
              </ul>
              <p className="text-xl md:text-2xl mt-5">
                Apesar de passarem até 80% de suas vidas no oceano, os pinguins
                retornam à terra para reprodução e muda de penas. São excelentes
                indicadores da saúde dos ecossistemas marinhos, pois suas
                populações refletem mudanças nas condições oceânicas e
                disponibilidade de presas.
              </p>
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-3xl md:text-4xl font-bold mt-10 md:mt-20">
            Distribuição e Habitat:
          </h3>
          <p className="text-xl md:text-2xl mt-5">
            Contrariamente à crença popular, nem todos os pinguins vivem em
            ambientes gelados. Enquanto algumas espécies habitam a Antártida e
            ilhas subantárticas, outras são encontradas em regiões temperadas e
            até tropicais. O pinguim-de-galápagos vive próximo à linha do
            Equador, enquanto o pinguim-africano habita as costas da África do
            Sul e Namíbia.
          </p>
          <p className="text-xl md:text-2xl mt-5">
            Cada espécie está adaptada a condições oceânicas específicas. O
            pinguim-de-humboldt prospera nas águas frias da Corrente de Humboldt
            ao longo da costa oeste da América do Sul, enquanto o
            pinguim-de-magalhães migra anualmente entre Argentina, Chile e
            Brasil, seguindo cardumes de peixes e correntes oceânicas.
          </p>
          <p className="text-xl md:text-2xl mt-5">
            Independentemente de sua distribuição, todos os pinguins dependem
            fundamentalmente da saúde dos oceanos. Passam a maior parte de suas
            vidas no mar, onde se alimentam principalmente de peixes, lulas e
            krill, capturados durante mergulhos que podem durar vários minutos.
          </p>
        </div>
        <div>
          <h3 className="text-3xl md:text-4xl font-bold mt-10 md:mt-20">
            Importância:
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 md:gap-10 mt-5">
            <div>
              <h4 className="text-2xl md:text-3xl font-bold">Ecológica:</h4>
              <p className="text-xl md:text-2xl">
                Os pinguins são consumidores-chave nos ecossistemas marinhos,
                regulando populações de peixes e krill. Seus excrementos (guano)
                fertilizam tanto ambientes terrestres quanto oceânicos,
                contribuindo para ciclos de nutrientes vitais.
              </p>
            </div>
            <div>
              <h4 className="text-2xl md:text-3xl font-bold">Científica:</h4>
              <p className="text-xl md:text-2xl">
                Como sentinelas dos oceanos, mudanças nas populações de pinguins
                indicam alterações na saúde marinha. Estudos sobre suas
                migrações revelam padrões de correntes oceânicas e
                disponibilidade de alimentos, auxiliando na compreensão dos
                impactos das mudanças climáticas.
              </p>
            </div>
            <div>
              <h4 className="text-2xl md:text-3xl font-bold">Cultural:</h4>
              <p className="text-xl md:text-2xl">
                Os pinguins são embaixadores carismáticos dos oceanos,
                despertando interesse global pela conservação marinha. Sua
                popularidade em filmes, livros e campanhas ambientais ajuda a
                sensibilizar o público sobre a importância da proteção dos
                ecossistemas marinhos.
              </p>
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-3xl md:text-4xl font-bold mt-10 md:mt-20">
            Ameaças:
          </h3>
          <p className="text-xl md:text-2xl mt-5">
            As mudanças climáticas representam uma ameaça significativa para os
            pinguins, alterando a temperatura e química dos oceanos, afetando a
            disponibilidade de presas e modificando habitats de reprodução.
            Espécies dependentes de gelo, como o pinguim-imperador, são
            particularmente vulneráveis ao aquecimento global.
          </p>
          <p className="text-xl md:text-2xl mt-5">
            A poluição marinha, especialmente por plásticos, petróleo e produtos
            químicos, impacta severamente estas aves. Microplásticos já foram
            encontrados nos tecidos de pinguins, e derramamentos de óleo podem
            ser catastróficos, destruindo a impermeabilidade de suas penas.
          </p>
          <p className="text-xl md:text-2xl mt-5">
            A pesca industrial excessiva compete diretamente com sua fonte
            alimentar, enquanto a introdução de espécies invasoras e o
            desenvolvimento costeiro ameaçam seus locais de nidificação.
            Atualmente, 10 das 18 espécies de pinguins estão classificadas como
            ameaçadas ou quase ameaçadas pela IUCN, com populações em declínio
            em várias regiões do mundo.
          </p>
        </div>
      </div>
    </div>
  )
}
