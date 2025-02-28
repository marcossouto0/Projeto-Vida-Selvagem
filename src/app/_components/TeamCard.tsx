import Image from "next/image";

export default function TeamCard({ name, role, image }: { name: string, role: string, image: string }) {
  return (
    <div className="flex gap-5">
      <div className="rounded-full overflow-hidden flex-shrink-0">
        <Image
          src={image}
          alt={name}
          height={150}
          width={150}
        />
      </div>
      <div className="flex flex-col justify-center gap-3">
        <h4 className='font-bold text-xl md:text-2xl'>{name}</h4>
        <p className="text-sm">{role}</p>
      </div>
    </div>
  )
}