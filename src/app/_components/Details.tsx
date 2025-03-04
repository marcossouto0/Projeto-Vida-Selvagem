import Button from './Button'

export default function Details() {
  return (
    <div className="py-10 md:py-20 bg-[#000524] text-white">
      <div className="mx-5 md:mx-15 lg:mx-30">
        <h2 className="text-3xl md:text-4xl font-bold">Saiba Mais</h2>
        <p className="mt-5 text-xl md:text-2xl">
          Escolha um bioma abaixo e saiba mais sobre:
        </p>
        <div className="mt-10 grid md:grid-cols-2 items-stretch lg:grid-cols-4 gap-10 md:gap-20">
          <Button
            name="Tundra"
            className="border-2 border-tundra hover:bg-tundra hover:text-black active:bg-tundra-dark active:border-tundra-dark"
            disabled={false}
          />
          <Button
            name="Taiga"
            className="border-2 border-taiga"
            disabled={true}
          />
          <Button
            name="Floresta Temperada"
            className="border-2 border-tforest"
            disabled={true}
          />
          <Button
            name="Floresta Equatorial"
            className="border-2 border-eforest"
            disabled={true}
          />
          <Button
            name="Savana"
            className="border-2 border-savanna"
            disabled={true}
          />
          <Button
            name="Campos"
            className="border-2 border-grasslands"
            disabled={true}
          />
          <Button
            name="Deserto"
            className="border-2 border-desert"
            disabled={true}
          />
          <Button
            name="Oceano"
            className="border-2 border-ocean"
            disabled={true}
          />
        </div>
      </div>
    </div>
  )
}
