import { ArrowDown, BriefcaseBusiness, CodeXml } from "lucide-react";

function Hero() {
  return (
    <section id="hero" className="mb-12">
      <div className="container flex flex-col justify-between items-center mx-auto pt-12 sm:pt-20 pb-6 gap-6 text-center">
        <p className="text-text">Desenvolvedor Front-End</p>
        <h1 className="text-4xl md:text-7xl font-medium tracking-tight text-balance px-4 sm:px-0">
          Nicholas Pimenta
        </h1>
        <h2 className="text-[22px] md:text-3xl tracking-tight leading-[1.4] font-medium">
          Interfaces bem pensadas,
          <br />
          <span className="text-accent">do design ao código.</span>
        </h2>
        <p className="text-text-secondary text-base px-4 sm:px-0 leading-[1.65]">
          Desenvolvo interfaces com React e TypeScript, combinando planejamento,{" "}
          <br className="hidden sm:block" />
          pesquisa visual e cuidado com as interações.
        </p>
        <a
          href="#projetos"
          className="flex flex-row justify-center items-center gap-1.5 bg-main text-text-button border border-main px-6 py-3.5 rounded-xl font-medium"
        >
          Ver projetos <ArrowDown aria-hidden="true" />
        </a>
      </div>
      <div className="flex flex-row gap-2 justify-center items-center border-b border-line pb-12 sm:pb-16">
        <a
          href="https://github.com/nicholasPimenta"
          className="flex flex-row justify-center items-center gap-2 bg-transparent hover:bg-button-hover duration-200 ease-linear px-3 sm:px-4 py-3 sm:py-3.5 rounded-xl text-sm sm:text-base"
        >
          <CodeXml aria-hidden="true" className="size-5 sm:size-6" /> Github
        </a>
        <a
          href="https://www.linkedin.com/in/nicholas-pimenta/"
          className="flex flex-row justify-center items-center gap-2 bg-transparent hover:bg-button-hover duration-200 ease-linear px-3 sm:px-4 py-3 sm:py-3.5 rounded-xl text-sm sm:text-base"
        >
          <BriefcaseBusiness aria-hidden="true" className="size-5 sm:size-6" /> Linkedin
        </a>
      </div>
    </section>
  );
}

export default Hero;
