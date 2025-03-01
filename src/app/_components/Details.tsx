import Button from './Button'

export default function Details() {
  return (
    <div className=" py-20 bg-[#000524] text-white">
      <div className="flex flex-col gap-10 mx-10 md:mx-30">
        <h2 className="text-4xl font-bold">Saiba Mais</h2>
        <p className="text-2xl">Escolha um bioma abaixo e saiba mais sobre:</p>
      </div>
      <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-20 mx-10 md:mx-30">
        <Button
          name="Tundra"
          className="border-2 border-tundra hover:bg-tundra hover:text-black active:bg-tundra-dark"
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
  )
}
