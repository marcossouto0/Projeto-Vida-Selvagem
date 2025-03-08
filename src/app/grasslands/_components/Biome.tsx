import Image from 'next/image'

export default function Biome() {
  return (
    <div className="bg-black text-white py-10 md:py-20">
      <div className="mx-5 md:mx-15 lg:mx-30">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold">
            Campos: Os Oceanos de Gramíneas
          </h2>
          <p className="text-xl md:text-2xl mt-5">
            Vastos, dinâmicos e produtivos. Os campos nativos são ecossistemas
            dominados por gramíneas que cobrem cerca de 40% da superfície
            terrestre e sustentam uma biodiversidade única adaptada a espaços
            abertos.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-20 mt-10 md:mt-20">
          <div className="flex justify-center lg:justify-start">
            <Image
              src="/grasslands_2.jpg"
              alt="Campos"
              width={'500'}
              height={0}
              className="rounded-xl overflow-hidden"
            />
          </div>
          <div className="flex flex-col justify-around gap-10 md:gap-20">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold">
                O Que São os Campos?
              </h3>
              <p className="text-xl md:text-2xl mt-5">
                Os campos, também conhecidos como pradarias, estepes, savanas ou
                pampas, são biomas caracterizados pela predominância de
                vegetação herbácea, especialmente gramíneas, com poucas árvores
                dispersas. São mantidos por uma combinação de fatores como
                clima, fogo, pastoreio e solos, que impedem o estabelecimento de
                florestas densas.
              </p>
            </div>
            <div>
              <h3 className="text-3xl md:text-4xl font-bold">
                Onde Encontramos?
              </h3>
              <p className="text-xl md:text-2xl mt-5">
                Os campos ocorrem em todos os continentes exceto na Antártida.
                Incluem as Grandes Planícies da América do Norte, os Pampas da
                América do Sul, as Estepes da Eurásia, as Savanas africanas e os
                Campos australianos. Geralmente se desenvolvem em regiões com
                precipitação intermediária, insuficiente para sustentar
                florestas mas adequada para gramíneas.
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
                Estações bem definidas, com precipitação anual entre 250 e 1.000
                mm. Temperaturas variam amplamente conforme a localização, com
                extremos sazonais comuns em campos temperados.
              </p>
            </li>
            <li className="text-xl md:text-2xl">
              <h4 className="text-2xl md:text-3xl font-bold">Vegetação</h4>
              <p className="mt-3">
                Dominada por gramíneas e outras herbáceas, com sistemas
                radiculares profundos. A altura da vegetação varia de campos
                baixos (menos de 30 cm) a campos altos (até 2 metros).
              </p>
            </li>
            <li className="text-xl md:text-2xl">
              <h4 className="text-2xl md:text-3xl font-bold">Solo</h4>
              <p className="mt-3">
                Geralmente profundos, escuros e extremamente férteis, com alto
                teor de matéria orgânica. São considerados entre os solos mais
                produtivos do mundo para agricultura.
              </p>
            </li>
            <li className="text-xl md:text-2xl">
              <h4 className="text-2xl md:text-3xl font-bold">Biodiversidade</h4>
              <p className="mt-3">
                Rica em espécies herbáceas, insetos, aves e mamíferos adaptados
                a espaços abertos. Historicamente abrigavam grandes herbívoros
                como bisões, antílopes e cavalos selvagens.
              </p>
            </li>
          </ul>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-20 mt-10 md:mt-20">
          <div>
            <h3 className="text-3xl md:text-4xl font-bold">
              Por que os campos são tão importantes?
            </h3>
            <p className="text-xl md:text-2xl mt-5">
              Os campos são vitais para a segurança alimentar global, fornecendo
              a base para a produção de grãos, carne e laticínios. Seus solos
              armazenam enormes quantidades de carbono, principalmente nas
              raízes profundas das gramíneas. Além disso, regulam o ciclo
              hidrológico, previnem a erosão e fornecem habitat para
              polinizadores essenciais e controladores naturais de pragas.
            </p>
          </div>
          <div>
            <h3 className="text-3xl md:text-4xl font-bold">
              Ameaças aos Campos
            </h3>
            <p className="text-xl md:text-2xl mt-5">
              Os campos estão entre os biomas mais ameaçados do planeta, com
              mais de 50% já convertidos para agricultura, pecuária intensiva e
              desenvolvimento urbano. Outras ameaças incluem espécies invasoras,
              supressão de incêndios naturais, fragmentação de habitat e
              mudanças climáticas. Em muitas regiões, menos de 1% dos campos
              nativos originais permanecem intactos.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
