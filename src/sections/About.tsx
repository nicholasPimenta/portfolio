import photo from "../assets/images/fotoSobreMim.png";

function About() {
  return (
    <section id="sobre" className="border-b border-line mb-12">
      <div className="px-6 md:px-11 py-6 mx-auto max-w-6xl">
        <div className="flex flex-row justify-start items-center gap-3 mb-8">
          <span className="border rounded-b-xl rounded-t-[50%] w-10 h-10 grid place-items-center text-accent">
            02
          </span>
          <h2 className="text-xl md:text-3xl font-medium">Sobre mim</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-[0.9fr_1.5fr] gap-11 items-center">
          <figure className="mx-auto md:mx-0 max-w-85 w-full bg-background-card border border-border-card  rounded-b-xl rounded-t-[50%] overflow-hidden">
            <img
              src={photo}
              alt="Nicholas Pimenta de camiseta preta e braços cruzados, diante de uma parede clara."
              loading="lazy"
              decoding="async"
              width={960}
              height={1200}
            />
          </figure>
          <div className="grid gap-6">
            <div>
              <h3 className="font-medium tracking-tight text-xl">
                Minha trajetória
              </h3>
              <p className="leading-[1.65] text-sm md:text-base text-text">
                Estou em início de carreira e busco minha primeira oportunidade
                em Front-End. Venho construindo experiência com projetos
                próprios e com uma demanda real, que trouxe o contato direto com
                um solicitante para o meu processo de desenvolvimento.
              </p>
            </div>
            <div>
              <h3 className="font-medium tracking-tight text-xl">
                Como trabalho e aprendo
              </h3>
              <p className="leading-[1.65] text-sm md:text-base text-text">
                Antes de escrever código, procuro entender a necessidade e
                definir a estrutura da página. Uso referências e wireframes para
                orientar as escolhas e reviso o resultado durante a
                implementação.
              </p>
            </div>
            <div className="border-b border-b-border-card pb-6">
              <h3 className="font-medium tracking-tight text-xl">
                Tecnologias e ferramentas
              </h3>
              <p className="flex flex-wrap gap-x-2 leading-[1.65] text-sm md:text-base text-text">
                <span>HTML, CSS e JavaScript</span>
                <span className="before:content-['•'] before:mr-2 before:text-accent">TypeScript</span>
                <span className="before:content-['•'] before:mr-2 before:text-accent">React</span>
                <span className="before:content-['•'] before:mr-2 before:text-accent">Tailwind CSS</span>
                <span className="before:content-['•'] before:mr-2 before:text-accent">CSS Modules</span>
                <span className="before:content-['•'] before:mr-2 before:text-accent">Vite</span>
                <span className="before:content-['•'] before:mr-2 before:text-accent">Git e GitHub</span>
              </p>
            </div>
            <p className="leading-[1.65] text-sm md:text-base text-text">
              Ferramentas de IA, incluindo GitHub Copilot, fazem parte do meu
              aprendizado. Ao usar sugestões, procuro compreender a solução,
              revisar o código e testar seu comportamento antes de incorporá-lo
              ao projeto.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
