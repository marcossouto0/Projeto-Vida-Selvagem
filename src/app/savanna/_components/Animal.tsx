import Image from 'next/image'

export default function Animal() {
  return (
    <div className="bg-[#D2B48C] text-black">
      <div className="mx-5 md:mx-15 lg:mx-30 py-10 md:py-20">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold">
            Tamanduá-Bandeira: O Arquiteto do Cerrado
          </h2>
          <p className="text-xl md:text-2xl mt-5">
            Com sua aparência única e comportamento especializado, o
            tamanduá-bandeira é um dos animais mais emblemáticos do Cerrado
            brasileiro. Mas a perda de habitat e as queimadas ameaçam sua
            sobrevivência.
          </p>
        </div>
        <div className="mt-10 md:mt-20 grid grid-cols-1 xl:grid-cols-2 gap-10 md:gap-20">
          <div className="flex justify-center xl:order-2">
            <Image
              src="/anteater.jpg"
              alt="Tamanduá-Bandeira"
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
                O tamanduá-bandeira (Myrmecophaga tridactyla) é o maior dos
                quatro tamanduás existentes, podendo medir até 2,1 metros de
                comprimento e pesar entre 20 e 40 kg. Seu nome vem da cauda
                longa e peluda que lembra uma bandeira, usada como cobertor para
                se proteger do frio e como camuflagem.
              </p>
              <p className="text-xl md:text-2xl mt-5">
                Suas adaptações notáveis incluem:
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-20 mt-3">
                <li className="text-xl md:text-2xl">
                  <strong>Focinho alongado:</strong> Pode medir até 45 cm,
                  contendo uma língua pegajosa de até 60 cm que pode ser
                  projetada até 150 vezes por minuto para capturar formigas e
                  cupins.
                </li>
                <li className="text-xl md:text-2xl">
                  <strong>Garras poderosas:</strong> Possui garras curvas de até
                  10 cm nos membros anteriores, usadas para abrir formigueiros e
                  cupinzeiros e como defesa contra predadores.
                </li>
              </ul>
              <p className="text-xl md:text-2xl mt-5">
                O tamanduá-bandeira não possui dentes, mas tem um estômago
                especializado com paredes musculares espessas e ácido estomacal
                potente para triturar e digerir os insetos. Sua pelagem é áspera
                e densa, com coloração cinza-amarelada e marcas pretas
                características no peito e nos membros.
              </p>
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-3xl md:text-4xl font-bold mt-10 md:mt-20">
            Comportamento e Habitat:
          </h3>
          <p className="text-xl md:text-2xl mt-5">
            O tamanduá-bandeira é um animal solitário, exceto durante o período
            de acasalamento e quando a fêmea cuida do filhote. É principalmente
            terrestre, mas pode nadar bem e subir em árvores ocasionalmente. Tem
            hábitos crepusculares e noturnos, especialmente em áreas com
            presença humana.
          </p>
          <p className="text-xl md:text-2xl mt-5">
            Embora seja mais associado ao Cerrado, também habita outros biomas
            como Pantanal, Amazônia e Mata Atlântica. Prefere áreas abertas como
            campos e savanas, mas necessita de manchas florestais para descanso
            e proteção. Cada indivíduo pode ocupar um território de 9 a 25 km²,
            dependendo da disponibilidade de alimento.
          </p>
          <p className="text-xl md:text-2xl mt-5">
            Sua dieta é altamente especializada, consistindo quase
            exclusivamente de formigas e cupins. Um tamanduá adulto pode
            consumir até 30.000 insetos por dia, visitando dezenas de colônias.
            Esta especialização alimentar o torna um importante controlador de
            populações de insetos sociais.
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
                Como consumidor especializado de formigas e cupins, o
                tamanduá-bandeira regula as populações destes insetos,
                contribuindo para o equilíbrio do ecossistema. Ao escavar
                formigueiros e cupinzeiros, também promove a aeração e
                revolvimento do solo, auxiliando na ciclagem de nutrientes.
              </p>
            </div>
            <div>
              <h4 className="text-2xl md:text-3xl font-bold">Cultural:</h4>
              <p className="text-xl md:text-2xl">
                Figura em lendas e mitos de diversos povos indígenas
                brasileiros, além de ser representado em artesanato, arte
                popular e até mesmo na nota de 20 reais (série 1994). É um
                símbolo da fauna brasileira e um embaixador para a conservação
                do Cerrado.
              </p>
            </div>
            <div>
              <h4 className="text-2xl md:text-3xl font-bold">Científica:</h4>
              <p className="text-xl md:text-2xl">
                Sua especialização alimentar e adaptações morfológicas únicas
                são objeto de estudos evolutivos. Como espécie guarda-chuva, sua
                conservação beneficia muitas outras espécies que compartilham
                seu habitat, tornando-o um importante indicador da saúde dos
                ecossistemas.
              </p>
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-3xl md:text-4xl font-bold mt-10 md:mt-20">
            Ameaças:
          </h3>
          <p className="text-xl md:text-2xl mt-5">
            O tamanduá-bandeira enfrenta múltiplas ameaças à sua sobrevivência.
            A perda e fragmentação de habitat devido à expansão agrícola e
            urbana é a principal, reduzindo suas áreas de forrageamento e
            isolando populações. No Cerrado, já perdeu mais de 50% de seu
            habitat original.
          </p>
          <p className="text-xl md:text-2xl mt-5">
            Queimadas, especialmente as de grande intensidade, representam uma
            séria ameaça, pois o tamanduá-bandeira tem movimentação lenta e não
            consegue fugir rapidamente do fogo. Atropelamentos em rodovias
            também são uma causa significativa de mortalidade, agravada pela
            expansão da malha viária em áreas naturais.
          </p>
          <p className="text-xl md:text-2xl mt-5">
            Atualmente, o tamanduá-bandeira está classificado como "Vulnerável"
            na Lista Vermelha da IUCN e no Livro Vermelho da Fauna Brasileira
            Ameaçada de Extinção. Estima-se que suas populações tenham diminuído
            em mais de 30% nas últimas três gerações (cerca de 21 anos),
            principalmente devido à perda de habitat.
          </p>
        </div>
      </div>
    </div>
  )
}
