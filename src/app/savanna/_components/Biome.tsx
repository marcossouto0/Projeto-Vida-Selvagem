import Image from 'next/image'

export default function Biome() {
  return (
    <div className="bg-black text-white py-10 md:py-20">
      <div className="mx-5 md:mx-15 lg:mx-30">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold">
            Cerrado: A Savana Brasileira
          </h2>
          <p className="text-xl md:text-2xl mt-5">
            Diverso, resiliente e vital. O Cerrado é o segundo maior bioma da
            América do Sul, um hotspot de biodiversidade e berço das principais
            bacias hidrográficas brasileiras.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-20 mt-10 md:mt-20">
          <div className="flex justify-center lg:justify-start">
            <Image
              src="/savanna_2.jpg"
              alt="Cerrado"
              width={'500'}
              height={0}
              className="rounded-xl overflow-hidden"
            />
          </div>
          <div className="flex flex-col justify-around gap-10 md:gap-20">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold">
                O Que é o Cerrado?
              </h3>
              <p className="text-xl md:text-2xl mt-5">
                O Cerrado é um bioma caracterizado por uma formação tipo savana,
                com árvores baixas, tortuosas, de casca grossa, dispersas em
                meio a arbustos e gramíneas. Ocupa cerca de 22% do território
                brasileiro, com clima tropical sazonal marcado por verões
                chuvosos e invernos secos.
              </p>
            </div>
            <div>
              <h3 className="text-3xl md:text-4xl font-bold">
                Onde Encontramos?
              </h3>
              <p className="text-xl md:text-2xl mt-5">
                O Cerrado está localizado principalmente no Planalto Central do
                Brasil, abrangendo os estados de Goiás, Tocantins, Mato Grosso,
                Mato Grosso do Sul, Minas Gerais, Bahia, Maranhão, Piauí,
                Rondônia, Paraná, São Paulo e Distrito Federal, além de partes
                do Paraguai e Bolívia.
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
                Tropical sazonal, com estação chuvosa (outubro a abril) e seca
                (maio a setembro), temperaturas médias entre 22°C e 27°C.
              </p>
            </li>
            <li className="text-xl md:text-2xl">
              <h4 className="text-2xl md:text-3xl font-bold">Vegetação</h4>
              <p className="mt-3">
                Mosaico de formações que vão do campo limpo ao cerradão, com
                adaptações ao fogo e à seca, como raízes profundas e cascas
                grossas.
              </p>
            </li>
            <li className="text-xl md:text-2xl">
              <h4 className="text-2xl md:text-3xl font-bold">Solo</h4>
              <p className="mt-3">
                Solos antigos, profundos, ácidos e pobres em nutrientes, com
                alto teor de alumínio e ferro, o que lhes confere coloração
                avermelhada.
              </p>
            </li>
            <li className="text-xl md:text-2xl">
              <h4 className="text-2xl md:text-3xl font-bold">Biodiversidade</h4>
              <p className="mt-3">
                Mais de 12.000 espécies de plantas (35% endêmicas), 850 espécies
                de aves e 300 de mamíferos, incluindo espécies emblemáticas como
                o lobo-guará e o tamanduá-bandeira.
              </p>
            </li>
          </ul>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-20 mt-10 md:mt-20">
          <div>
            <h3 className="text-3xl md:text-4xl font-bold">
              Por que o Cerrado é tão importante?
            </h3>
            <p className="text-xl md:text-2xl mt-5">
              O Cerrado é conhecido como o "berço das águas" do Brasil, pois
              abriga as nascentes das três maiores bacias hidrográficas da
              América do Sul (Amazônica, São Francisco e Prata). Além disso, é
              um dos hotspots mundiais de biodiversidade e um importante
              sumidouro de carbono, armazenando-o principalmente nas raízes
              profundas de sua vegetação.
            </p>
          </div>
          <div>
            <h3 className="text-3xl md:text-4xl font-bold">
              Ameaças ao Cerrado
            </h3>
            <p className="text-xl md:text-2xl mt-5">
              O Cerrado é um dos biomas mais ameaçados do Brasil, tendo perdido
              mais de 50% de sua cobertura original. A expansão agrícola,
              especialmente para cultivo de soja e criação de gado, é a
              principal causa de desmatamento. Queimadas descontroladas,
              mineração, urbanização e espécies invasoras também representam
              sérias ameaças à sua integridade.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
