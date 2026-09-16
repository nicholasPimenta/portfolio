import { ArrowDown, BriefcaseBusiness, CodeXml } from "lucide-react";

function Hero() {
  return (
    <section>
      <div>
        <p>Desenvolvedor Front-End</p>
        <h1>Nicholas Pimenta</h1>
        <h2>
          Interfaces bem pensadas, <span>do design ao código.</span>
        </h2>
        <p>
          Desenvolvo interfaces com React e Typescript, combinando planejamento,
          pesquisa visual e cuidado com as interações.
        </p>
        <button>Ver projetos <ArrowDown /></button>
      </div>
      <div>
          <CodeXml /> Github
          <BriefcaseBusiness /> Linkedin
      </div>
    </section>
  );
}

export default Hero;
