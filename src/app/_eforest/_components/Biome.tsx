import Image from 'next/image'

export default function Biome() {
  return (
    <div className="bg-black text-white py-10 md:py-20">
      <div className="mx-5 md:mx-15 lg:mx-30">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold">
            Floresta Equatorial: O Berço da Biodiversidade
          </h2>
          <p className="text-xl md:text-2xl mt-5">
            Exuberante, úmida e diversa. A floresta equatorial abriga a maior
            biodiversidade do planeta, com milhões de espécies em um complexo
            ecossistema de vida.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-20 mt-10 md:mt-20">
          <div className="flex justify-center lg:justify-start">
            <Image
              src="/eforest_2.jpg"
              alt="Floresta Equatorial"
              width={'500'}
              height={0}
              className="rounded-xl overflow-hidden"
            />
          </div>
          <div className="flex flex-col justify-around gap-10 md:gap-20">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold">
                O Que é a Floresta Equatorial?
              </h3>
              <p className="text-xl md:text-2xl mt-5">
                A floresta equatorial é um bioma caracterizado por vegetação
                densa e exuberante, localizada próxima à linha do Equador. Com
                alta temperatura e umidade durante todo o ano, recebe entre
                2.000 e 10.000 mm de chuva anualmente, criando condições ideais
                para uma explosão de vida.
              </p>
            </div>
            <div>
              <h3 className="text-3xl md:text-4xl font-bold">
                Onde Encontramos?
              </h3>
              <p className="text-xl md:text-2xl mt-5">
                As florestas equatoriais estão distribuídas em três grandes
                regiões: a Amazônia na América do Sul (a maior do mundo), a
                Bacia do Congo na África Central, e as florestas do Sudeste
                Asiático, incluindo partes da Indonésia, Malásia e Papua Nova
                Guiné.
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
                Clima equatorial quente e úmido, com temperaturas médias entre
                25°C e 28°C e alta pluviosidade durante todo o ano.
              </p>
            </li>
            <li className="text-xl md:text-2xl">
              <h4 className="text-2xl md:text-3xl font-bold">Vegetação</h4>
              <p className="mt-3">
                Estrutura em estratos (dossel, sub-bosque, estrato arbustivo e
                solo), com árvores que podem ultrapassar 50 metros de altura.
              </p>
            </li>
            <li className="text-xl md:text-2xl">
              <h4 className="text-2xl md:text-3xl font-bold">Solo</h4>
              <p className="mt-3">
                Solos geralmente pobres em nutrientes devido à lixiviação
                causada pelas chuvas intensas, com a maior parte dos nutrientes
                concentrada na biomassa.
              </p>
            </li>
            <li className="text-xl md:text-2xl">
              <h4 className="text-2xl md:text-3xl font-bold">Biodiversidade</h4>
              <p className="mt-3">
                Abriga mais de 50% das espécies terrestres do planeta, com
                inúmeras espécies ainda não catalogadas pela ciência.
              </p>
            </li>
          </ul>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-20 mt-10 md:mt-20">
          <div>
            <h3 className="text-3xl md:text-4xl font-bold">
              Por que a floresta equatorial é tão importante?
            </h3>
            <p className="text-xl md:text-2xl mt-5">
              As florestas equatoriais são essenciais para o equilíbrio
              climático global, atuando como "pulmões do planeta" ao absorver
              CO₂ e liberar oxigênio. Além disso, regulam o ciclo hidrológico,
              previnem a erosão do solo, e são fonte de medicamentos, alimentos
              e outros recursos vitais.
            </p>
          </div>
          <div>
            <h3 className="text-3xl md:text-4xl font-bold">
              Ameaças à Floresta Equatorial
            </h3>
            <p className="text-xl md:text-2xl mt-5">
              O desmatamento para agricultura, pecuária, mineração e urbanização
              é a principal ameaça, destruindo milhões de hectares anualmente.
              Mudanças climáticas, incêndios florestais, exploração ilegal de
              madeira e biopirataria também comprometem este frágil ecossistema.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
