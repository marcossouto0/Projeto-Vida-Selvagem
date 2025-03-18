export interface BiomeData {
  title: string
  description: string
  image: Image
  contents: Content[]
}

export interface Content {
  icon: unknown
  title: string
  text?: string
  textArr?: string[]
  list?: string[]
  sections?: Section[]
}

export interface Section {
  subtitle: string
  text: string
}

export interface Image {
  src: string
  alt: string
  caption: string
}

const biomeData: BiomeData = {
  title: 'Taiga: A Maior Floresta do Mundo',
  description:
    'Vasta, resiliente e misteriosa. A taiga é a maior floresta do planeta, um cinturão verde que circunda o Hemisfério Norte e abriga uma biodiversidade adaptada aos invernos rigorosos.',
  image: {
    src: '/taiga_2.jpg',
    alt: 'Paisagem da Taiga com coníferas e neve',
    caption:
      'Floresta boreal durante o inverno, com suas características coníferas cobertas de neve'
  },
  contents: [
    {
      icon: 'FaLeaf',
      title: 'O Que é a Taiga?',
      textArr: [
        'A taiga, também conhecida como floresta boreal, é o maior bioma terrestre do mundo, formando um vasto cinturão de florestas de coníferas que circunda o Hemisfério Norte abaixo da tundra ártica.',
        'Caracterizada por invernos longos e rigorosos e verões curtos, a taiga é dominada por coníferas como pinheiros, abetos e larício, adaptadas para suportar o frio extremo e a neve pesada, com suas folhas em forma de agulha e troncos cônicos.'
      ]
    },
    {
      icon: 'FaMapMarkerAlt',
      title: 'Onde Encontramos?',
      text: 'A taiga forma um cinturão quase contínuo através do Hemisfério Norte, cobrindo vastas áreas da América do Norte, Europa e Ásia.',
      list: [
        'América do Norte: Estados Unidos, Canadá e Alasca',
        'Europa: Escandinávia e Rússia',
        'Ásia: Sibéria, Japão e Rússia'
      ]
    },
    {
      icon: 'FaSnowflake',
      title: 'Principais Características',
      list: [
        'Clima: Invernos longos e frios, verões curtos e amenos',
        'Solo: Ácido e pobre em nutrientes, frequentemente coberto por uma camada de agulhas de pinheiro',
        'Vegetação: Dominada por coníferas com poucas espécies decíduas',
        'Biodiversidade: Adaptada ao frio, com animais que hibernam ou migram durante o inverno'
      ]
    },
    {
      icon: 'FaTree',
      title: 'Importância e Ameaças',
      sections: [
        {
          subtitle: 'Importância:',
          text: 'Grande sumidouro de carbono terrestre, regulação do clima global, filtração de água, habitat para espécies únicas e fonte de recursos madeireiros.'
        },
        {
          subtitle: 'Ameaças:',
          text: 'Desmatamento para extração de madeira, mineração, exploração de petróleo e gás, incêndios florestais intensificados pelas mudanças climáticas.'
        }
      ]
    }
  ]
}

export default biomeData
