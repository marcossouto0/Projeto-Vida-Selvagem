import Image from 'next/image'

export default function Animal() {
  return (
    <div className="bg-[#E6C384] text-black">
      <div className="mx-5 md:mx-15 lg:mx-30 py-10 md:py-20">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold">
            Camelo: O Navio do Deserto
          </h2>
          <p className="text-xl md:text-2xl mt-5">
            Mestres da sobrevivência, os camelos desenvolveram adaptações
            extraordinárias para prosperar nos ambientes mais áridos do planeta.
            Mas a desertificação e as mudanças climáticas ameaçam seu habitat
            natural.
          </p>
        </div>
        <div className="mt-10 md:mt-20 grid grid-cols-1 xl:grid-cols-2 gap-10 md:gap-20">
          <div className="flex justify-center xl:order-2">
            <Image
              src="/camel.jpg"
              alt="Camelo"
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
                Os camelos são mamíferos da família Camelidae e são conhecidos
                por suas extraordinárias adaptações para sobreviver em ambientes
                desérticos. Existem duas espécies principais: o camelo-bactriano
                (com duas corcovas) nativo da Ásia Central, e o dromedário (com
                uma corcova) encontrado principalmente no Oriente Médio e norte
                da África.
              </p>
              <p className="text-xl md:text-2xl mt-5">
                Para sobreviverem em ambientes extremamente áridos, os camelos
                possuem adaptações notáveis:
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-20 mt-3">
                <li className="text-xl md:text-2xl">
                  <strong>Corcovas:</strong> Armazenam gordura (não água),
                  fornecendo energia quando alimentos são escassos e isolamento
                  térmico.
                </li>
                <li className="text-xl md:text-2xl">
                  <strong>Conservação de água:</strong> Podem perder até 25% do
                  peso corporal em água sem sofrer danos (humanos morrem com
                  15%) e beber até 200 litros em uma única vez.
                </li>
              </ul>
              <p className="text-xl md:text-2xl mt-5">
                Além disso, possuem narinas que podem fechar para bloquear
                areia, pálpebras triplas e cílios longos para proteção contra
                tempestades de areia, e pés largos e almofadados que distribuem
                o peso na areia.
              </p>
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-3xl md:text-4xl font-bold mt-10 md:mt-20">
            Adaptações Fisiológicas:
          </h3>
          <p className="text-xl md:text-2xl mt-5">
            Os camelos possuem um sistema circulatório e renal altamente
            especializado. Seus glóbulos vermelhos são ovais (não circulares
            como nos humanos), permitindo fluxo contínuo mesmo quando
            desidratados. Seus rins e intestinos são extremamente eficientes na
            conservação de água.
          </p>
          <p className="text-xl md:text-2xl mt-5">
            Sua temperatura corporal pode variar de 34°C pela manhã até 41°C
            durante o dia, reduzindo a perda de água por transpiração. Além
            disso, seu pelo espesso reflete o calor solar e proporciona
            isolamento contra as temperaturas extremas do deserto.
          </p>
          <p className="text-xl md:text-2xl mt-5">
            Essas adaptações permitem que os camelos sobrevivam até duas semanas
            sem água e vários meses sem comida, tornando-os perfeitamente
            adaptados para as condições extremas dos desertos.
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
                Os camelos desempenham um papel importante nos ecossistemas
                desérticos, dispersando sementes através de suas fezes e
                ajudando a manter a biodiversidade vegetal em ambientes áridos.
              </p>
            </div>
            <div>
              <h4 className="text-2xl md:text-3xl font-bold">Cultural:</h4>
              <p className="text-xl md:text-2xl">
                Por milênios, os camelos têm sido essenciais para as culturas do
                deserto, fornecendo transporte, leite, carne, lã e couro. Eles
                permitiram o comércio através das rotas de caravanas como a Rota
                da Seda e são símbolos culturais importantes em muitas
                sociedades.
              </p>
            </div>
            <div>
              <h4 className="text-2xl md:text-3xl font-bold">Científica:</h4>
              <p className="text-xl md:text-2xl">
                As adaptações dos camelos inspiram pesquisas biomédicas e
                tecnológicas, desde tratamentos para desidratação humana até o
                desenvolvimento de tecnologias de conservação de água e energia
                em regiões áridas.
              </p>
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-3xl md:text-4xl font-bold mt-10 md:mt-20">
            Ameaças:
          </h3>
          <p className="text-xl md:text-2xl mt-5">
            Apesar de suas incríveis adaptações, os camelos selvagens enfrentam
            diversas ameaças. A desertificação causada pelas mudanças climáticas
            está alterando seus habitats naturais, enquanto a expansão urbana e
            agrícola reduz suas áreas de forrageamento.
          </p>
          <p className="text-xl md:text-2xl mt-5">
            A caça ilegal, principalmente para carne e troféus, continua sendo
            uma ameaça significativa para as populações selvagens. Além disso, a
            hibridização com camelos domésticos está diluindo o pool genético
            das populações selvagens remanescentes.
          </p>
          <p className="text-xl md:text-2xl mt-5">
            O camelo-bactriano selvagem está classificado como "Criticamente em
            Perigo" na Lista Vermelha da IUCN, com menos de 1.000 indivíduos
            restantes na natureza. Embora os dromedários domésticos sejam
            abundantes, suas contrapartes selvagens são extremamente raras.
          </p>
        </div>
      </div>
    </div>
  )
}
