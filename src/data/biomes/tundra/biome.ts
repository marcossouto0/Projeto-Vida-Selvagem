export interface BiomeData {
  title:       string;
  description: string;
  image:       Image;
  contents:    Content[];
}

export interface Content {
  icon:      unknown;
  title:     string;
  text?:     string[] | string;
  list?:     string[];
  sections?: Section[];
}

export interface Section {
  subtitle: string;
  text:     string;
}

export interface Image {
  src:     string;
  alt:     string;
  caption: string;
}


const biomeData: BiomeData = {
  "title": "Tundra: O Bioma Extremo da Terra",
  "description": "Fria, vasta e desafiadora. A tundra abriga formas de vida incríveis que resistem às condições mais extremas do planeta.",
  "image": {
    "src": "/tundra_2.jpg",
    "alt": "Paisagem da Tundra durante o verão com vegetação rasteira",
    "caption": "Tundra ártica durante o curto verão, quando a vegetação rasteira floresce"
  },
  "contents": [
    {
      "icon": "FaLeaf",
      "title": "O Que é a Tundra?",
      "text": [
        "A tundra é um bioma caracterizado por temperaturas extremamente baixas, solo permanentemente congelado (permafrost) e vegetação rasteira. É um dos ecossistemas mais frágeis e sensíveis às mudanças climáticas.",
        "Apesar das condições severas, a tundra abriga uma surpreendente diversidade de plantas e animais adaptados ao frio extremo, com estratégias de sobrevivência únicas que permitem sua existência neste ambiente hostil."
      ]
    },
    {
      "icon": "FaMapMarkerAlt",
      "title": "Onde Encontramos?",
      "text": "A tundra cobre aproximadamente 10% da superfície terrestre, principalmente nas regiões polares do Hemisfério Norte e em altas montanhas ao redor do mundo.",
      "list": [
        "Ártico: norte do Canadá, Alasca, Groenlândia, Escandinávia e Sibéria",
        "Tundra alpina: encontrada em grandes altitudes em montanhas ao redor do mundo",
        "Antártica: pequenas áreas costeiras livres de gelo durante o verão"
      ]
    },
    {
      "icon": "FaTemperatureLow",
      "title": "Principais Características",
      "list": [
        "Clima: Invernos longos e extremamente frios, verões curtos e frescos",
        "Solo: Permafrost (solo permanentemente congelado) com camada ativa superficial que descongela no verão",
        "Vegetação: Plantas baixas e resistentes como musgos, líquens, gramíneas e arbustos anões",
        "Biodiversidade: Adaptada ao frio extremo, com estratégias de sobrevivência únicas"
      ]
    },
    {
      "icon": "FaSnowflake",
      "title": "Importância e Ameaças",
      "sections": [
        {
          "subtitle": "Importância:",
          "text": "Regulação climática global, armazenamento de carbono no permafrost, habitat para espécies únicas e adaptadas ao frio extremo."
        },
        {
          "subtitle": "Ameaças:",
          "text": "Aquecimento global (aquece duas vezes mais rápido que o resto do planeta), exploração de petróleo e gás, mineração e desenvolvimento de infraestrutura."
        }
      ]
    }
  ]
}

export default biomeData;