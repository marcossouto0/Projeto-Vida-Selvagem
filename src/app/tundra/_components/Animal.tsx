import Image from 'next/image'

export default function Animal() {
  return (
    <div className="bg-[#85AEB4] text-black">
      <div className="mx-10 md:mx-30 py-10 md:py-20">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold">
            Rena: A Viajante da Tundra
          </h2>
          <p className="text-xl md:text-2xl mt-5">
            Viajantes incansáveis, as renas percorrem milhares de quilômetros
            para sobreviver. Mas o aquecimento global ameaça seu habitat.
          </p>
        </div>
        <div className="mt-10 md:mt-20 grid grid-cols-1 xl:grid-cols-2 gap-10 md:gap-20">
          <Image
            src="/renas.jpg"
            alt="Rena"
            width={500}
            height={0}
            className="xl:order-2 rounded-xl overflow-hidden"
          />
          <div className="flex flex-col justify-around gap-10 md:gap-20">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold">
                Características
              </h3>
              <p className="text-xl md:text-2xl mt-5">
                As renas são mamíferos da família dos cervídeos e habitam a
                tundra, florestas boreais e montanhas frias do Hemisfério Norte,
                principalmente na América do Norte, Europa e Ásia. Diferente de
                outras espécies de cervos, tanto machos quanto fêmeas possuem
                chifres, que caem e crescem novamente a cada ano.
              </p>
              <p className="text-xl md:text-2xl mt-5">
                Para sobreviverem em ambientes extremos, as renas possuem duas
                camadas de pelo:
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 mt-3">
                <li className="text-xl md:text-2xl">
                  <strong>Camada interna:</strong> Subpelo fino e lanoso, que
                  fica próxima à pele e retém calor.
                </li>
                <li className="text-xl md:text-2xl">
                  <strong>Camada externa:</strong> Pelos longos e ocos, que
                  criam bolsões de ar, garantindo isolamento térmico e
                  protegendo contra o frio intenso.
                </li>
              </ul>
              <p className="text-xl md:text-2xl mt-5">
                Além de proporcionar aquecimento, esses pelos ocos também ajudam
                na flutuação na água, facilitando a travessia de rios e lagos
                durante suas longas migrações.
              </p>
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-3xl md:text-4xl font-bold mt-10 md:mt-20">
            Migrações:
          </h3>
          <p className="text-xl md:text-2xl mt-5">
            As renas são conhecidas por suas longas migrações em busca de
            alimento e melhores condições climáticas. Esses animais percorrem
            milhares de quilômetros todos os anos, enfrentando obstáculos como
            rios, lagos congelados e predadores.
          </p>
          <p className="text-xl md:text-2xl mt-5">
            Durante o inverno, as renas migram para regiões mais baixas em busca
            de alimentos, enquanto no verão, sobem para áreas mais altas, onde o
            clima é mais ameno e os insetos são menos abundantes.
          </p>
          <p className="text-xl md:text-2xl mt-5">
            Essas migrações são essenciais para a sobrevivência das renas, pois
            garantem acesso a alimentos e evitam a acumulação de parasitas, como
            carrapatos e moscas.
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
                Ecologicamente, as renas exercem um papel fundamental no
                controle da vegetação, dispersão de sementes e manutenção do
                ciclo do carbono, além de serem fonte de alimento para
                predadores como lobos, linces e ursos.
              </p>
            </div>
            <div>
              <h4 className="text-2xl md:text-3xl font-bold">Cultural:</h4>
              <p className="text-xl md:text-2xl">
                Culturalmente, são essenciais para diversos povos indígenas do
                Ártico, como os Samis, Nenets e Inuítes, que dependem delas para
                transporte, alimentação e vestimentas. Além disso, renas
                domesticadas ainda são usadas em algumas regiões para puxar
                trenós.
              </p>
            </div>
            <div>
              <h4 className="text-2xl md:text-3xl font-bold">Cientifica:</h4>
              <p className="text-xl md:text-2xl">
                Cientificamente servem como indicadores do impacto das mudanças
                climáticas. Com o aumento das temperaturas, as condições do solo
                e a disponibilidade de alimentos vêm mudando, afetando suas
                migrações e sobrevivência.
              </p>
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-3xl md:text-4xl font-bold mt-10 md:mt-20">
            Ameaças:
          </h3>
          <p className="text-xl md:text-2xl mt-5">
            As renas enfrentam diversas ameaças em seu habitat natural, sendo a
            principal delas o aquecimento global. Com o aumento da temperatura,
            o permafrost (camada de solo permanentemente congelada) está
            derretendo, tornando o solo instável e dificultando a busca por
            alimentos.
          </p>
          <p className="text-xl md:text-2xl mt-5">
            Além disso, o derretimento do gelo e a redução das áreas de tundra
            estão diminuindo o espaço disponível para as renas se alimentarem e
            se reproduzirem, o que coloca em risco a sobrevivência desses
            animais.
          </p>
          <p className="text-xl md:text-2xl mt-5">
            Outras ameaças incluem a caça ilegal, a perda de habitat devido à
            exploração de recursos naturais e a competição com outras espécies
            introduzidas.
          </p>
        </div>
      </div>
    </div>
  )
}
