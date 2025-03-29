import { FaChevronDown } from "react-icons/fa";


const hoverTheme = {
  tundra: 'group-hover:text-blue-300',
  desert: 'group-hover:text-yellow-300',
  eforest: 'group-hover:text-green-300',
  savanna: 'group-hover:text-orange-300',
  taiga: 'group-hover:text-emerald-300',
  tforest: 'group-hover:text-green-300',
  ocean: 'group-hover:text-blue-300',
  grasslands: 'group-hover:text-green-300',
} as const

type Biome = keyof typeof hoverTheme;

interface ScrollIndicatorProps {
  scrollToContent: () => void;
  biome: Biome;
}

export default function ScrollIndicator({ scrollToContent, biome }: ScrollIndicatorProps) {
  return (
    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white text-center">
    <button
      onClick={scrollToContent}
      className="group flex flex-col items-center animate-float cursor-pointer"
      aria-label="Rolar para conteúdo"
    >
      <span className={`text-sm mb-2 text-white ${hoverTheme[biome]} transition-colors duration-300`}>
        Deslize para Explorar
      </span>
      <FaChevronDown className={`text-white ${hoverTheme[biome]} transition-colors duration-300 animate-bounce`} />
    </button>
  </div>
  )
}