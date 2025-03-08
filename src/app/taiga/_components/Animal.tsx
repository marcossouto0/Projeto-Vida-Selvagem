import Image from 'next/image'

export default function Animal() {
  return (
    <div className="bg-[#2C3E50] text-white">
      <div className="mx-5 md:mx-15 lg:mx-30 py-10 md:py-20">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold">
            Lobo Cinzento: O Guardião da Taiga
          </h2>
          <p className="text-xl md:text-2xl mt-5">
            Inteligente, social e resiliente, o lobo cinzento é um predador de
            topo que desempenha um papel crucial no equilíbrio dos ecossistemas
            boreais. Sua presença é um indicador da saúde da taiga, mas enfrenta
            ameaças crescentes à sua sobrevivência.
          </p>
        </div>
        <div className="mt-10 md:mt-20 grid grid-cols-1 xl:grid-cols-2 gap-10 md:gap-20">
          <div className="flex justify-center xl:order-2">
            <Image
              src="/wolf.jpg"
              alt="Lobo Cinzento"
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
                O lobo cinzento (Canis lupus) é o maior membro selvagem da
                família Canidae, pesando entre 23 e 80 kg, com comprimento de 1
                a 1,5 metro (excluindo a cauda). Sua pelagem espessa varia do
                cinza ao marrom, com tons de preto, branco e bege,
                proporcionando camuflagem e proteção contra o frio intenso da
                taiga.
              </p>
              <p className="text-xl md:text-2xl mt-5">
                Suas adaptações notáveis incluem:
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-20 mt-3">
                <li className="text-xl md:text-2xl">
                  <strong>Sentidos aguçados:</strong> Olfato extremamente
                  desenvolvido, capaz de detectar presas a até 2,4 km de
                  distância, audição que capta sons a até 10 km, e visão noturna
                  superior à humana.
                </li>
                <li className="text-xl md:text-2xl">
                  <strong>Resistência física:</strong> Capacidade de percorrer
                  até 200 km por dia em busca de alimento, com velocidade de até
                  60 km/h em corridas curtas.
                </li>
              </ul>
              <p className="text-xl md:text-2xl mt-5">
                Lobos são animais altamente sociais que vivem em alcateias,
                grupos familiares hierárquicos geralmente compostos por 5 a 12
                indivíduos. Esta estrutura social complexa permite a caça
                cooperativa de presas maiores e o cuidado compartilhado com os
                filhotes, aumentando as chances de sobrevivência em ambientes
                rigorosos.
              </p>
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-3xl md:text-4xl font-bold mt-10 md:mt-20">
            Comportamento e Habitat:
          </h3>
          <p className="text-xl md:text-2xl mt-5">
            A taiga é um dos habitats preferenciais do lobo cinzento, embora a
            espécie seja extremamente adaptável e ocorra em diversos biomas,
            desde florestas temperadas até tundras árticas. Na floresta boreal,
            os lobos estabelecem territórios extensos, que podem variar de 80 a
            2.500 km², dependendo da disponibilidade de presas.
          </p>
          <p className="text-xl md:text-2xl mt-5">
            Como predadores de topo, os lobos se alimentam principalmente de
            ungulados como alces, caribus e veados, mas também consomem
            castores, lebres e outros pequenos mamíferos quando necessário. Sua
            estratégia de caça envolve perseguições de longa distância,
            identificando e isolando indivíduos vulneráveis do rebanho.
          </p>
          <p className="text-xl md:text-2xl mt-5">
            A comunicação entre lobos é sofisticada, combinando vocalizações
            (uivos, rosnados, latidos), linguagem corporal e marcações de
            território com urina e fezes. O famoso uivo do lobo pode ser ouvido
            a até 10 km de distância e serve para reunir a alcateia, defender
            território e fortalecer laços sociais.
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
                Como predadores de topo, os lobos regulam populações de
                herbívoros, prevenindo o sobrepastoreio e promovendo a
                regeneração florestal. O conceito de "cascata trófica" foi
                demonstrado em Yellowstone, onde a reintrodução de lobos
                transformou positivamente todo o ecossistema, incluindo o curso
                dos rios.
              </p>
            </div>
            <div>
              <h4 className="text-2xl md:text-3xl font-bold">Cultural:</h4>
              <p className="text-xl md:text-2xl">
                Os lobos ocupam lugar de destaque no folclore, mitologia e
                literatura de muitas culturas do Hemisfério Norte. Para povos
                indígenas como os Inuit e Dene, o lobo é um animal espiritual
                importante, símbolo de lealdade, força e sabedoria.
              </p>
            </div>
            <div>
              <h4 className="text-2xl md:text-3xl font-bold">Científica:</h4>
              <p className="text-xl md:text-2xl">
                Estudos sobre comportamento social dos lobos têm aplicações em
                diversas áreas, desde ecologia até psicologia. Como espécie
                guarda-chuva, a conservação do lobo beneficia muitas outras
                espécies que compartilham seu habitat.
              </p>
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-3xl md:text-4xl font-bold mt-10 md:mt-20">
            Ameaças:
          </h3>
          <p className="text-xl md:text-2xl mt-5">
            Historicamente, os lobos foram intensamente perseguidos e eliminados
            de grande parte de sua área de distribuição original. Embora algumas
            populações estejam se recuperando, a espécie ainda enfrenta
            múltiplas ameaças: perda e fragmentação de habitat devido ao
            desenvolvimento humano, caça ilegal e conflitos com criadores de
            gado.
          </p>
          <p className="text-xl md:text-2xl mt-5">
            As mudanças climáticas representam uma ameaça crescente, alterando a
            disponibilidade de presas e os padrões de neve na taiga. Além disso,
            a hibridização com cães domésticos e doenças como a sarna e a raiva
            podem afetar significativamente populações isoladas.
          </p>
          <p className="text-xl md:text-2xl mt-5">
            O status de conservação do lobo cinzento varia globalmente. Enquanto
            algumas populações estão estáveis, outras permanecem ameaçadas ou em
            perigo. Na Europa e América do Norte, esforços de conservação têm
            permitido a recuperação em algumas áreas, mas a coexistência com
            humanos continua sendo um desafio significativo.
          </p>
        </div>
      </div>
    </div>
  )
}
