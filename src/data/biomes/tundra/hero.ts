export interface HeroData {
  title:       string;
  subtitle:    string;
  description: string;
  buttons:     Button[];
}

export interface Button {
  text: string;
  icon: null | string;
}


const heroData: HeroData = {
  "title": "Tundra: O Deserto Gelado e a Rena do Ártico",
  "subtitle": "Bioma Polar",
  "description": "A rena é um símbolo da tundra, mas as mudanças climáticas ameaçam sua sobrevivência. Conheça esse bioma único e como podemos protegê-lo para as gerações futuras.",
  "buttons": [
    {
      "text": "Explorar Bioma",
      "icon": "FaPaw"
    },
    {
      "text": "Saiba Mais",
      "icon": null
    }
  ]
} as const

export default heroData;