import Image from 'next/image'

export default function Biome() {
  return (
    <div className="bg-black text-white py-10 md:py-20">
      <div className="mx-5 md:mx-15 lg:mx-30">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold">
            Deserto: O Bioma Extremo da Terra
          </h2>
          <p className="text-xl md:text-2xl mt-5">
            Quente, árido e desafiador. O deserto abriga formas de vida
            incríveis que desenvolveram adaptações surpreendentes para
            sobreviver em condições extremas.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-20 mt-10 md:mt-20">
          <div className="flex justify-center lg:justify-start">
            <Image
              src="/desert_2.jpg"
              alt="Deserto"
              width={'500'}
              height={0}
              className="rounded-xl overflow-hidden"
            />
          </div>
          <div className="flex flex-col justify-around gap-10 md:gap-20">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold">
                O Que é o Deserto?
              </h3>
              <p className="text-xl md:text-2xl mt-5">
                O deserto é um bioma caracterizado pela escassez de água e
                condições climáticas extremas. Com pouca precipitação anual
                (menos de 250mm), os desertos cobrem cerca de 20% da superfície
                terrestre e são conhecidos por suas temperaturas extremas, que
                podem variar drasticamente entre o dia e a noite.
              </p>
            </div>
            <div>
              <h3 className="text-3xl md:text-4xl font-bold">
                Onde Encontramos?
              </h3>
              <p className="text-xl md:text-2xl mt-5">
                Os desertos estão distribuídos por todos os continentes, exceto
                a Antártida. Os principais desertos incluem o Saara (África),
                Atacama (América do Sul), Kalahari (África), Gobi (Ásia), Grande
                Deserto Australiano e os desertos do sudoeste dos Estados
                Unidos, como o Mojave e o Sonora.
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
                Clima árido com pouca precipitação, dias quentes (até 50°C) e
                noites frias, com grande amplitude térmica diária.
              </p>
            </li>
            <li className="text-xl md:text-2xl">
              <h4 className="text-2xl md:text-3xl font-bold">Vegetação</h4>
              <p className="mt-3">
                Plantas xerófitas adaptadas à seca, como cactos, suculentas e
                arbustos espinhosos com raízes profundas.
              </p>
            </li>
            <li className="text-xl md:text-2xl">
              <h4 className="text-2xl md:text-3xl font-bold">Solo</h4>
              <p className="mt-3">
                Solos arenosos ou pedregosos, pobres em matéria orgânica, mas
                ricos em minerais devido à baixa lixiviação.
              </p>
            </li>
            <li className="text-xl md:text-2xl">
              <h4 className="text-2xl md:text-3xl font-bold">Fauna Adaptada</h4>
              <p className="mt-3">
                Animais com adaptações para conservar água e suportar altas
                temperaturas, como camelos, raposas-do-deserto e lagartos.
              </p>
            </li>
          </ul>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-20 mt-10 md:mt-20">
          <div>
            <h3 className="text-3xl md:text-4xl font-bold">
              Por que o deserto é tão importante?
            </h3>
            <p className="text-xl md:text-2xl mt-5">
              Apesar de parecer inóspito, o deserto é um ecossistema vital que
              abriga biodiversidade única. Seus solos armazenam carbono e seus
              organismos desenvolveram adaptações que inspiram tecnologias
              sustentáveis, como sistemas de captação de água e energia solar.
            </p>
          </div>
          <div>
            <h3 className="text-3xl md:text-4xl font-bold">
              Ameaças ao Deserto
            </h3>
            <p className="text-xl md:text-2xl mt-5">
              A desertificação, causada por práticas agrícolas inadequadas,
              desmatamento e mudanças climáticas, está expandindo as áreas
              desérticas. Além disso, a mineração, o turismo não sustentável e a
              urbanização ameaçam os frágeis ecossistemas desérticos.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
