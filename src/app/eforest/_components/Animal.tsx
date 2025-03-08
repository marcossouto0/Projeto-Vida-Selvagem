import Image from 'next/image'

export default function Animal() {
  return (
    <div className="bg-[#2E7D32] text-white">
      <div className="mx-5 md:mx-15 lg:mx-30 py-10 md:py-20">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold">
            Onça Pintada: A Guardiã da Floresta
          </h2>
          <p className="text-xl md:text-2xl mt-5">
            Poderosa e majestosa, a onça pintada é o maior felino das Américas e
            um símbolo da saúde dos ecossistemas florestais. Mas o desmatamento
            e a caça ilegal ameaçam sua sobrevivência.
          </p>
        </div>
        <div className="mt-10 md:mt-20 grid grid-cols-1 xl:grid-cols-2 gap-10 md:gap-20">
          <div className="flex justify-center xl:order-2">
            <Image
              src="/jaguar.jpg"
              alt="Onça Pintada"
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
                A onça pintada (Panthera onca) é o terceiro maior felino do
                mundo, depois do tigre e do leão, e o maior das Américas. Com
                corpo musculoso e compacto, pode pesar entre 56 e 96 kg, com
                machos significativamente maiores que as fêmeas.
              </p>
              <p className="text-xl md:text-2xl mt-5">
                Suas adaptações notáveis incluem:
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-20 mt-3">
                <li className="text-xl md:text-2xl">
                  <strong>Pelagem:</strong> Amarelo-dourada com rosetas pretas
                  que funcionam como camuflagem perfeita na floresta sombreada.
                </li>
                <li className="text-xl md:text-2xl">
                  <strong>Mordida poderosa:</strong> Possui a mordida mais forte
                  entre os felinos, capaz de perfurar crânios e carapaças de
                  tartarugas.
                </li>
              </ul>
              <p className="text-xl md:text-2xl mt-5">
                Diferente de outros grandes felinos, a onça pintada é uma
                excelente nadadora e passa considerável tempo na água, adaptação
                essencial para a vida nas florestas equatoriais com seus
                numerosos rios e áreas alagadas.
              </p>
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-3xl md:text-4xl font-bold mt-10 md:mt-20">
            Comportamento e Habitat:
          </h3>
          <p className="text-xl md:text-2xl mt-5">
            A onça pintada é um predador solitário e territorial, principalmente
            ativo durante o crepúsculo e à noite. Seu território pode variar de
            25 a 40 km² para fêmeas e até 80 km² para machos, dependendo da
            disponibilidade de presas.
          </p>
          <p className="text-xl md:text-2xl mt-5">
            Embora prefira florestas densas e úmidas, a onça pintada é adaptável
            e pode ser encontrada em diversos habitats, desde florestas
            equatoriais e tropicais até pântanos, savanas e áreas semi-áridas.
            Sua distribuição histórica se estendia do sudoeste dos Estados
            Unidos até o norte da Argentina, mas hoje está restrita
            principalmente à Amazônia e ao Pantanal.
          </p>
          <p className="text-xl md:text-2xl mt-5">
            Diferente de outros felinos que matam por asfixia, a onça pintada
            tem um método único de caça: perfura o crânio da presa com suas
            poderosas mandíbulas, demonstrando força e precisão excepcionais.
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
                Como predador de topo, a onça pintada regula as populações de
                presas, mantendo o equilíbrio do ecossistema. Sua presença
                indica florestas saudáveis e bem preservadas, funcionando como
                espécie-chave e guarda-chuva para a conservação.
              </p>
            </div>
            <div>
              <h4 className="text-2xl md:text-3xl font-bold">Cultural:</h4>
              <p className="text-xl md:text-2xl">
                A onça pintada tem profundo significado cultural para muitos
                povos indígenas das Américas, sendo venerada como símbolo de
                poder, força e sabedoria. Aparece em mitos, lendas e arte de
                diversas culturas pré-colombianas, como Maias, Astecas e Incas.
              </p>
            </div>
            <div>
              <h4 className="text-2xl md:text-3xl font-bold">Econômica:</h4>
              <p className="text-xl md:text-2xl">
                O ecoturismo focado na observação de onças pintadas gera renda
                para comunidades locais, incentivando a conservação. Além disso,
                como espécie guarda-chuva, sua proteção beneficia todo o
                ecossistema, mantendo serviços ambientais essenciais.
              </p>
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-3xl md:text-4xl font-bold mt-10 md:mt-20">
            Ameaças:
          </h3>
          <p className="text-xl md:text-2xl mt-5">
            A onça pintada enfrenta múltiplas ameaças à sua sobrevivência. O
            desmatamento e a fragmentação de habitat são as principais,
            reduzindo seu território e isolando populações. A expansão agrícola,
            pecuária e urbana continua invadindo áreas antes ocupadas pela
            espécie.
          </p>
          <p className="text-xl md:text-2xl mt-5">
            A caça ilegal, seja para troféus, por retaliação devido a ataques ao
            gado, ou para o comércio ilegal de partes do corpo, também
            representa uma séria ameaça. Conflitos com humanos aumentam à medida
            que os habitats naturais diminuem.
          </p>
          <p className="text-xl md:text-2xl mt-5">
            Atualmente, a onça pintada está classificada como "Quase Ameaçada"
            na Lista Vermelha da IUCN, com populações em declínio. Em algumas
            regiões, como a Mata Atlântica brasileira, está criticamente
            ameaçada, com menos de 300 indivíduos restantes.
          </p>
        </div>
      </div>
    </div>
  )
}
