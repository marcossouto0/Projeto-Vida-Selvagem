import Image from 'next/image'

export default function Animal() {
  return (
    <div className="bg-[#8B4513] text-white">
      <div className="mx-5 md:mx-15 lg:mx-30 py-10 md:py-20">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold">
            Bisão Americano: O Gigante das Planícies
          </h2>
          <p className="text-xl md:text-2xl mt-5">
            Imponente, resiliente e ecologicamente vital, o bisão americano
            moldou a paisagem e a cultura das Grandes Planícies por milênios.
            Quase extinto no século XIX, sua recuperação representa uma das
            maiores histórias de conservação da América do Norte.
          </p>
        </div>
        <div className="mt-10 md:mt-20 grid grid-cols-1 xl:grid-cols-2 gap-10 md:gap-20">
          <div className="flex justify-center xl:order-2">
            <Image
              src="/bison.jpg"
              alt="Bisão Americano"
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
                O bisão americano (Bison bison) é o maior mamífero terrestre da
                América do Norte, com machos adultos pesando até 900 kg e
                medindo 3 metros de comprimento. Sua silhueta característica
                inclui uma grande cabeça, ombros maciços com uma proeminente
                corcova muscular, e chifres curvos em ambos os sexos.
              </p>
              <p className="text-xl md:text-2xl mt-5">
                Suas adaptações notáveis incluem:
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-20 mt-3">
                <li className="text-xl md:text-2xl">
                  <strong>Pelagem densa:</strong> Especialmente no inverno, com
                  pelos que podem atingir 5 cm no corpo e até 40 cm na cabeça,
                  pescoço e ombros, proporcionando excelente isolamento térmico.
                </li>
                <li className="text-xl md:text-2xl">
                  <strong>Cabeça adaptada:</strong> Estrutura craniana que
                  permite mover a neve com a cabeça para acessar gramíneas
                  durante o inverno, e posicionada baixa para pastar
                  eficientemente.
                </li>
              </ul>
              <p className="text-xl md:text-2xl mt-5">
                Apesar de seu tamanho imponente, bisões são surpreendentemente
                ágeis, podendo correr a até 55 km/h, saltar cercas de 1,8 metro
                de altura e nadar através de rios largos. São herbívoros que se
                alimentam principalmente de gramíneas e outras plantas
                herbáceas.
              </p>
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-3xl md:text-4xl font-bold mt-10 md:mt-20">
            História e Recuperação:
          </h3>
          <p className="text-xl md:text-2xl mt-5">
            Antes da colonização europeia, estima-se que 30 a 60 milhões de
            bisões vagavam pelas planícies norte-americanas em manadas enormes.
            Eles eram o centro da vida e cultura de muitos povos indígenas,
            fornecendo alimento, abrigo, ferramentas e base espiritual.
          </p>
          <p className="text-xl md:text-2xl mt-5">
            No século XIX, a caça comercial em massa, incentivada como
            estratégia para subjugar os povos indígenas, reduziu a população a
            menos de 1.000 indivíduos por volta de 1890. Esta foi uma das mais
            rápidas e dramáticas reduções populacionais de uma espécie na
            história registrada.
          </p>
          <p className="text-xl md:text-2xl mt-5">
            Esforços de conservação iniciados no final do século XIX por
            visionários como William Hornaday e o Bronx Zoo salvaram a espécie
            da extinção. Hoje, aproximadamente 500.000 bisões existem na América
            do Norte, embora menos de 5% sejam considerados ecologicamente
            selvagens e geneticamente puros.
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
                Como "engenheiros do ecossistema", os bisões moldam a paisagem
                dos campos através do pastoreio seletivo, criação de poças
                temporárias (wallows), dispersão de sementes e ciclagem de
                nutrientes. Sua presença aumenta a biodiversidade vegetal e cria
                habitat para diversas espécies de aves e pequenos mamíferos.
              </p>
            </div>
            <div>
              <h4 className="text-2xl md:text-3xl font-bold">Cultural:</h4>
              <p className="text-xl md:text-2xl">
                Para muitos povos indígenas norte-americanos, o bisão permanece
                central para identidade cultural, práticas espirituais e
                soberania alimentar. A restauração do bisão está intrinsecamente
                ligada aos esforços de revitalização cultural de nações como
                Blackfeet, Lakota e Assiniboine.
              </p>
            </div>
            <div>
              <h4 className="text-2xl md:text-3xl font-bold">Econômica:</h4>
              <p className="text-xl md:text-2xl">
                O bisão oferece oportunidades para ecoturismo, produção
                sustentável de carne e desenvolvimento econômico para
                comunidades rurais e indígenas. Sua carne é mais magra que a
                bovina e rica em nutrientes, com crescente demanda no mercado.
              </p>
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-3xl md:text-4xl font-bold mt-10 md:mt-20">
            Desafios Atuais:
          </h3>
          <p className="text-xl md:text-2xl mt-5">
            Apesar da recuperação numérica, o bisão enfrenta desafios
            significativos para restauração ecológica completa. A fragmentação
            de habitat limita a capacidade de estabelecer manadas
            verdadeiramente selvagens em escala de paisagem. Conflitos com a
            pecuária, incluindo preocupações com transmissão de doenças como
            brucelose, restringem a expansão de populações.
          </p>
          <p className="text-xl md:text-2xl mt-5">
            A integridade genética é outra preocupação, pois muitos bisões
            comerciais têm algum grau de hibridização com gado doméstico. Apenas
            algumas populações, como as de Yellowstone e Wood Buffalo, são
            consideradas geneticamente puras.
          </p>
          <p className="text-xl md:text-2xl mt-5">
            Esforços de conservação atuais focam na restauração do bisão como
            espécie selvagem em terras públicas e tribais, expansão de
            corredores de habitat, e desenvolvimento de estratégias de manejo
            que integrem valores ecológicos, culturais e econômicos. Em 2016, o
            bisão foi designado como Mamífero Nacional dos Estados Unidos,
            simbolizando seu papel único na história e ecologia norte-americana.
          </p>
        </div>
      </div>
    </div>
  )
}
