import TeamCard from './TeamCard'

export default function About() {
  return (
    <div id="about" className="bg-blue-950 text-white py-15 md:py-20">
      <div className="mx-5 md:mx-15 lg:mx-30">
        <h2 className="text-3xl md:text-4xl font-bold">Sobre Nós</h2>
        <div className="mt-10 flex flex-col md:flex-row gap-10 md:gap-20">
          <div className="flex flex-col gap-5 md:gap-10">
            <h3 className="text-2xl md:text-3xl font-bold">
              O que é o projeto?
            </h3>
            <p className="text-xl md:text-2xl">
              O Projeto Vida Selvagem é uma organização sem fins lucrativos que
              atua na defesa dos animais desde 2002. Nossa missão é proteger e
              promover o bem-estar dos animais, além de conscientizar a
              população sobre a importância da preservação da fauna ao redor do
              mundo. Para isso, escolhemos um animal de cada bioma para
              representar a nossa causa e trabalhamos para garantir que eles
              tenham um ambiente seguro e saudável para viver.
            </p>
          </div>
          <div className="flex flex-col gap-5 md:gap-10">
            <h3 className="text-2xl md:text-3xl font-bold">Nossa História</h3>
            <p className="text-xl md:text-2xl">
              Tudo começou com a paixão por proteger os biomas e seus
              habitantes. Ao percebermos que muitos animais estavam ameaçados,
              decidimos agir. Assim nasceu o Projeto Vida Selvagem, com a missão
              de preservar um animal de cada bioma do mundo
            </p>
          </div>
        </div>
        <div className="mt-15 md:mt-20">
          <h3 className="text-3xl md:text-4xl font-bold">Nossa Equipe</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
            <TeamCard
              name="Antonio Marcos"
              role="Fundador e Diretor Geral"
              image="/marcos.jpg"
            />
            <TeamCard
              name="Ariel Gadelha"
              role="Coordenador de Projetos"
              image="/ariel.jpg"
            />
            <TeamCard
              name="Gabriel Lima"
              role="Biólogo & Pesquisador"
              image="/gabriel.jpg"
            />
            <TeamCard
              name="Marcos Eduardo"
              role="Designer & Criador de Conteúdo"
              image="/dudu.jpg"
            />
            <TeamCard
              name="Pedro Lucas"
              role="Especialista em Captação de Recursos"
              image="/pedro.jpg"
            />
            <TeamCard
              name="Wenderson Inácio"
              role="Gestor de Comunicação & Parcerias"
              image="/wenderson.jpg"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
