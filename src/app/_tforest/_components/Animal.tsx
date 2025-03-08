import Image from 'next/image'

export default function Animal() {
  return (
    <div className="bg-[#8B4513] text-white">
      <div className="mx-5 md:mx-15 lg:mx-30 py-10 md:py-20">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold">
            Urso Pardo: O Gigante da Floresta
          </h2>
          <p className="text-xl md:text-2xl mt-5">
            Imponente e adaptável, o urso pardo é um símbolo das florestas
            temperadas e um mestre da sobrevivência sazonal. Mas a perda de
            habitat e conflitos humanos ameaçam suas populações em muitas
            regiões.
          </p>
        </div>
        <div className="mt-10 md:mt-20 grid grid-cols-1 xl:grid-cols-2 gap-10 md:gap-20">
          <div className="flex justify-center xl:order-2">
            <Image
              src="/bear.jpg"
              alt="Urso Pardo"
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
                O urso pardo (Ursus arctos) é um dos maiores carnívoros
                terrestres, com machos pesando entre 180 e 360 kg e fêmeas entre
                130 e 200 kg. Seu tamanho varia conforme a subespécie e
                disponibilidade de alimentos, com o urso Kodiak do Alasca sendo
                um dos maiores, podendo atingir 680 kg.
              </p>
              <p className="text-xl md:text-2xl mt-5">
                Suas adaptações notáveis incluem:
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-20 mt-3">
                <li className="text-xl md:text-2xl">
                  <strong>Pelagem densa:</strong> Varia do marrom claro ao quase
                  preto, proporcionando isolamento térmico e camuflagem.
                </li>
                <li className="text-xl md:text-2xl">
                  <strong>Hibernação:</strong> Capacidade de entrar em torpor
                  durante o inverno, reduzindo metabolismo e temperatura
                  corporal para conservar energia.
                </li>
              </ul>
              <p className="text-xl md:text-2xl mt-5">
                Apesar de sua aparência robusta, ursos pardos são
                surpreendentemente ágeis, podendo correr a até 55 km/h em curtas
                distâncias. Possuem sentidos aguçados, especialmente o olfato,
                que é sete vezes mais sensível que o de um cão.
              </p>
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-3xl md:text-4xl font-bold mt-10 md:mt-20">
            Comportamento e Habitat:
          </h3>
          <p className="text-xl md:text-2xl mt-5">
            Ursos pardos são geralmente solitários, exceto durante a temporada
            de acasalamento e quando fêmeas cuidam de seus filhotes. São
            onívoros oportunistas, com dieta variando conforme a estação: na
            primavera, alimentam-se de gramíneas e raízes; no verão, consomem
            frutas, nozes e insetos; no outono, buscam alimentos ricos em
            gordura para preparar-se para a hibernação.
          </p>
          <p className="text-xl md:text-2xl mt-5">
            Habitam diversos ambientes, desde florestas temperadas e boreais até
            tundras alpinas e planícies costeiras. Historicamente, ocupavam
            grande parte da Europa, Ásia e América do Norte, mas hoje suas
            populações estão fragmentadas e reduzidas em muitas regiões devido à
            caça e perda de habitat.
          </p>
          <p className="text-xl md:text-2xl mt-5">
            A hibernação é uma adaptação crucial para sobreviver aos invernos
            rigorosos. Durante 3-7 meses, permanecem em tocas, vivendo das
            reservas de gordura acumuladas. Fêmeas grávidas dão à luz durante
            este período, amamentando os filhotes até a primavera.
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
                Como onívoros de topo, ursos pardos influenciam a estrutura e
                composição dos ecossistemas. Dispersam sementes, controlam
                populações de presas e, ao escavar em busca de alimentos,
                contribuem para a ciclagem de nutrientes no solo.
              </p>
            </div>
            <div>
              <h4 className="text-2xl md:text-3xl font-bold">Cultural:</h4>
              <p className="text-xl md:text-2xl">
                Figuram proeminentemente no folclore, mitologia e arte de muitas
                culturas, simbolizando força, coragem e sabedoria. Para povos
                indígenas do hemisfério norte, são animais espirituais
                importantes, reverenciados em cerimônias e tradições.
              </p>
            </div>
            <div>
              <h4 className="text-2xl md:text-3xl font-bold">Científica:</h4>
              <p className="text-xl md:text-2xl">
                Estudos sobre hibernação de ursos têm aplicações médicas
                potenciais, como tratamentos para osteoporose, doenças renais e
                cardíacas. Como espécie guarda-chuva, sua conservação beneficia
                muitas outras espécies que compartilham seu habitat.
              </p>
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-3xl md:text-4xl font-bold mt-10 md:mt-20">
            Ameaças:
          </h3>
          <p className="text-xl md:text-2xl mt-5">
            A perda e fragmentação de habitat devido à expansão urbana,
            agricultura e exploração madeireira representam as principais
            ameaças aos ursos pardos. Isolamento genético de populações pequenas
            aumenta riscos de endogamia e reduz a diversidade genética.
          </p>
          <p className="text-xl md:text-2xl mt-5">
            Conflitos com humanos, frequentemente relacionados a predação de
            gado ou encontros em áreas recreativas, resultam em mortes de ursos.
            Caça ilegal, seja por troféus ou para comércio de partes do corpo
            (especialmente bile e patas), continua sendo um problema em algumas
            regiões.
          </p>
          <p className="text-xl md:text-2xl mt-5">
            Mudanças climáticas afetam a disponibilidade de alimentos e padrões
            de hibernação, enquanto o desenvolvimento de infraestrutura
            (estradas, oleodutos) fragmenta habitats e aumenta mortalidade por
            atropelamentos. Globalmente, o urso pardo está classificado como
            "Menos Preocupante" pela IUCN, mas muitas subpopulações regionais
            estão ameaçadas ou em perigo.
          </p>
        </div>
      </div>
    </div>
  )
}
