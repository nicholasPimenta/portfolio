import {
  ArrowUpRight,
  ChevronDown,
  ChevronUp,
  CodeXml,
  Maximize2,
  Minimize2,
} from "lucide-react";
import formularioPreview from "../assets/images/projects/formularioDeImpressao.png";
import formularioPdf from "../assets/images/projects/formularioParaImpressao.png";
import weatherPreview from "../assets/images/projects/weather2.png";
import lenovoPreview from "../assets/images/projects/gm2ProWhite.png";
import lenovoBlack from "../assets/images/projects/gm2ProBlack.png";
import lenovoPage from "../assets/images/projects/gm2Pro.png";
import { useState } from "react";

function Projects() {
  const [isImageFormExpanded, setIsImageFormExpanded] = useState(false);
  const [isContentFormExpanded, setIsContentFormExpanded] = useState(false);
  const [isDocumentFormExpanded, setIsDocumentFormExpanded] = useState(false);
  const expandFormImage = () => {
    setIsImageFormExpanded(true);
  };
  const collapseFormImage = () => {
    setIsImageFormExpanded(false);
  };
  const expandFormContent = () => {
    setIsContentFormExpanded(true);
  };
  const collapseFormContent = () => {
    setIsContentFormExpanded(false);
  };
  const expandFormDocument = () => {
    setIsDocumentFormExpanded(true);
  };
  const reduceFormDocument = () => {
    setIsDocumentFormExpanded(false);
  };
  const [isImageWeatherExpanded, setIsImageWeatherExpanded] = useState(false);
  const [isContentWeatherExpanded, setIsContentWeatherExpanded] =
    useState(false);
  const expandWeatherImage = () => {
    setIsImageWeatherExpanded(true);
  };
  const collapseWeatherImage = () => {
    setIsImageWeatherExpanded(false);
  };
  const expandWeatherContent = () => {
    setIsContentWeatherExpanded(true);
  };
  const collapseWeatherContent = () => {
    setIsContentWeatherExpanded(false);
  };

  const [isImageLenovoExpanded, setIsImageLenovoExpanded] = useState(false);
  const [isContentLenovoExpanded, setIsContentLenovoExpanded] = useState(false);
  const expandLenovoImage = () => {
    setIsImageLenovoExpanded(true);
  };
  const collapseLenovoImage = () => {
    setIsImageLenovoExpanded(false);
  };
  const expandLenovoContent = () => {
    setIsContentLenovoExpanded(true);
  };
  const collapseLenovoContent = () => {
    setIsContentLenovoExpanded(false);
  };

  return (
    <section id="projetos" className="px-8 md:px-11 py-14 mx-auto max-w-6xl">
      <div className="flex flex-row justify-start items-center gap-3 mb-8">
        <span className="border rounded-b-xl rounded-t-[50%] w-10 h-10 grid place-items-center text-accent">
          01
        </span>
        <h2 className="text-xl md:text-3xl font-medium">Projetos</h2>
      </div>
      <article aria-labelledby="form-title" className="border border-x-transparent border-t-transparent border-b-border-card mb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-16">
          <div className="grid min-w-0 gap-2">
            <figure className="bg-background-card border border-border-card p-1 md:p-2 rounded-xl md:rounded-2xl">
              <img
                src={formularioPreview}
                alt="Formulário para impressão com grupos de hábitos de vida, doenças crônicas, histórico familiar e observações preenchidas com dados fictícios."
                width={1440}
                height={900}
                loading="lazy"
                decoding="async"
                className="rounded-xl md:rounded-2xl"
              />
            </figure>
            <button
              type="button"
              aria-expanded={isImageFormExpanded}
              aria-controls="form-image"
              className="text-text md:flex md:items-center md:gap-2 md:py-1 hover:text-text-secondary md:cursor-pointer duration-200 ease-linear hidden"
              onClick={
                isImageFormExpanded ? collapseFormImage : expandFormImage
              }
            >
              {isImageFormExpanded ? (
                <Minimize2 aria-hidden="true" className="size-4" />
              ) : (
                <Maximize2 aria-hidden="true" className="size-4" />
              )}
              {isImageFormExpanded ? "Recolher imagem" : "Ampliar imagem"}
            </button>
          </div>
          <div className="grid min-w-0 gap-3.5">
            <h3
              id="form-title"
              className="text-lg md:text-2xl leading-[1.3] font-medium tracking-tight"
            >
              Formulário de Impressão
            </h3>
            <p className="text-text text-sm md:text-base">
              Da necessidade ao formulário: uma interface de preenchimento e um
              documento A4, desenvolvidos a partir de uma demanda real de um
              urologista.
            </p>
            <ul
              aria-label="Tecnologias"
              className="flex flex-wrap gap-1.5 md:gap-2"
            >
              <li className="px-1.5 py-1 md:px-2.5 md:py-1.5 bg-button-hover text-accent text-sm md:text-base rounded-lg">
                React
              </li>
              <li className="px-1.5 py-1 md:px-2.5 md:py-1.5 bg-button-hover text-accent text-sm md:text-base rounded-lg">
                TypeScript
              </li>
              <li className="px-1.5 py-1 md:px-2.5 md:py-1.5 bg-button-hover text-accent text-sm md:text-base rounded-lg">
                Tailwind CSS
              </li>
              <li className="px-1.5 py-1 md:px-2.5 md:py-1.5 bg-button-hover text-accent text-sm md:text-base rounded-lg">
                Vite
              </li>
            </ul>
            <div className="flex flex-row justify-start gap-4 items-center">
              <a
                href="https://clinica-dashboard-seven.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-accent bg-button-hover hover:bg-border-card text-xs md:text-base px-3 py-2 md:px-4 md:py-3 rounded-xl flex flex-row duration-200 ease-linear gap-2 items-center"
              >
                Ver projeto
                <ArrowUpRight aria-hidden="true" className="size-5" />
              </a>
              <a
                href="https://github.com/nicholasPimenta/clinica-dashboard"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-row border border-accent hover:bg-border-card text-xs md:text-base px-3 py-2 md:px-4 md:py-3 rounded-xl duration-200 ease-linear gap-2 items-center"
              >
                Ver código
                <CodeXml aria-hidden="true" className="size-5" />
              </a>
            </div>
            <button
              type="button"
              aria-expanded={isContentFormExpanded}
              aria-controls="form-details"
              className="text-accent flex flex-row items-center gap-2 cursor-pointer text-sm md:text-base"
              onClick={
                isContentFormExpanded ? collapseFormContent : expandFormContent
              }
            >
              {isContentFormExpanded
                ? "Fechar detalhes"
                : "Conhecer o processo"}
              {isContentFormExpanded ? (
                <ChevronUp aria-hidden="true" className="size-4" />
              ) : (
                <ChevronDown aria-hidden="true" className="size-4" />
              )}
            </button>
          </div>
        </div>
        <figure id="form-image" hidden={!isImageFormExpanded}>
          <img
            src={formularioPreview}
            alt="Formulário para impressão com grupos de hábitos de vida, doenças crônicas, histórico familiar e observações preenchidas com dados fictícios."
            width={1440}
            height={900}
            loading="lazy"
            decoding="async"
            className="rounded-xl"
          />
          <figcaption className="mt-3 text-sm text-text">
            Interface preenchida com dados fictícios. Identidade e exame
            provisórios.
          </figcaption>
        </figure>
        <div
          id="form-details"
          className="grid grid-cols-1 md:grid-cols-2 gap-x-7 gap-y-8 p-4 md:p-7 border border-border-card rounded-[18px] border-t-3 border-t-main bg-background-card mt-16 mb-6"
          hidden={!isContentFormExpanded}
        >
          <div className="text-text">
            <h4 className="tracking-tight mb-2 font-bold text-sm md:text-base">
              Problema e contexto
            </h4>
            <p className="tracking-tight leading-[1.65] text-sm md:text-base font-normal">
              O solicitante precisava complementar um sistema existente. A
              conversa sobre os requisitos mostrou que a proposta inicial de
              dashboard, agenda e pacientes deveria dar lugar a um formulário
              voltado à impressão.
            </p>
          </div>
          <div className="text-text">
            <h4 className="tracking-tight mb-2 font-bold text-sm md:text-base">
              Minha contribuição
            </h4>
            <p className="tracking-tight leading-[1.65] text-sm md:text-base font-normal">
              Conduzi o alinhamento com o solicitante e desenvolvi as duas
              partes da solução: a interface para registrar as informações e o
              documento gerado a partir do preenchimento.
            </p>
          </div>
          <div className="text-text">
            <h4 className="tracking-tight mb-2 font-bold text-sm md:text-base">
              Decisões de design e desenvolvimento
            </h4>
            <p className="tracking-tight leading-[1.65] text-sm md:text-base font-normal">
              Distribuí os campos por assunto e defini uma apresentação
              específica para o A4. Assim, a organização da tela atende ao
              preenchimento, enquanto o documento tem seu próprio formato de
              saída.
            </p>
          </div>
          <div className="text-text">
            <h4 className="tracking-tight mb-2 font-bold text-sm md:text-base">
              Desafios e aprendizados
            </h4>
            <p className="tracking-tight leading-[1.65] text-sm md:text-base font-normal">
              Delimitar o escopo foi a decisão central. O projeto reforçou a
              importância de compreender o fluxo de trabalho e confirmar o que
              precisa ser entregue antes de ampliar as funcionalidades.
            </p>
          </div>
          <div className="text-text col-span-1 md:col-span-2 py-5 border border-y-border-card border-x-transparent">
            <h4 className="tracking-tight mb-2 font-bold text-sm md:text-base">
              Estado atual
            </h4>
            <p className="tracking-tight leading-[1.65] text-sm md:text-base font-normal">
              A demonstração utiliza identidade e informações provisórias. O
              teste final de impressão e o envio de logo e telefone ainda
              aguardam retorno do solicitante.
            </p>
          </div>
          <figure className="col-span-1 md:col-span-2 flex flex-col justify-center items-center">
            <h4 className="tracking-tight mb-2 font-bold text-sm md:text-base text-text self-start">
              Do preenchimento à saída A4
            </h4>
            <button
              aria-expanded={isDocumentFormExpanded}
              aria-controls="form-document"
              className="md:flex md:flex-row md:items-center md:gap-2 md:mx-auto md:my-6 md:cursor-pointer hidden"
              onClick={
                isDocumentFormExpanded ? reduceFormDocument : expandFormDocument
              }
            >
              {isDocumentFormExpanded ? (
                <Minimize2 aria-hidden="true" className="size-4" />
              ) : (
                <Maximize2 aria-hidden="true" className="size-4" />
              )}
              {isDocumentFormExpanded
                ? "Reduzir documento"
                : "Ampliar documento"}
            </button>
            <img
              src={formularioPdf}
              alt="Documento A4 gerado a partir do formulário, com as mesmas seleções e observações. Exame, identidade e contatos demonstrativos."
              width={1488}
              height={2105}
              loading="lazy"
              decoding="async"
              id="form-document"
              className={`${isDocumentFormExpanded ? "w-full" : "w-105"}`}
            />
            <figcaption className="text-xs md:text-sm text-text text-center mt-4">
              Exemplo de documento gerado · dados fictícios e identidade
              provisória.
            </figcaption>
          </figure>
        </div>
      </article>
      <article aria-labelledby="weather-title" className="border border-x-transparent border-t-transparent border-b-border-card mb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-16">
          <div className="grid min-w-0 gap-2">
            <figure className="bg-background-card border border-border-card p-1 md:p-2 rounded-xl md:rounded-2xl">
              <img
                src={weatherPreview}
                alt="Weather 2.0 mostrando Rio de Janeiro, 23 graus, céu nublado e previsão dos próximos dias sobre um fundo de nuvens."
                width={1440}
                height={900}
                loading="lazy"
                decoding="async"
                className="rounded-xl md:rounded-2xl"
              />
            </figure>
            <button
              type="button"
              aria-expanded={isImageWeatherExpanded}
              aria-controls="weather-image"
              className="text-text md:flex md:items-center md:gap-2 md:py-1 hover:text-text-secondary cursor-pointer duration-200 ease-linear hidden"
              onClick={
                isImageWeatherExpanded
                  ? collapseWeatherImage
                  : expandWeatherImage
              }
            >
              {isImageWeatherExpanded ? (
                <Minimize2 aria-hidden="true" className="size-4" />
              ) : (
                <Maximize2 aria-hidden="true" className="size-4" />
              )}
              {isImageWeatherExpanded ? "Recolher imagem" : "Ampliar imagem"}
            </button>
          </div>
          <div className="grid min-w-0 gap-3.5">
            <h3
              id="weather-title"
              className="text-lg md:text-2xl leading-[1.3] font-medium tracking-tight"
            >
              Weather 2.0
            </h3>
            <p className="text-text text-sm md:text-base">
              Consulta do tempo por cidade, com condições atuais, previsão dos
              quatro dias seguintes e cenários visuais que acompanham o clima e
              o período do dia.
            </p>
            <ul
              aria-label="Tecnologias"
              className="flex flex-wrap gap-1.5 md:gap-2"
            >
              <li className="px-1.5 py-1 md:px-2.5 md:py-1.5 bg-button-hover text-accent rounded-lg text-sm md:text-base">
                React
              </li>
              <li className="px-1.5 py-1 md:px-2.5 md:py-1.5 bg-button-hover text-accent rounded-lg text-sm md:text-base">
                TypeScript
              </li>
              <li className="px-1.5 py-1 md:px-2.5 md:py-1.5 bg-button-hover text-accent rounded-lg text-sm md:text-base">
                CSS Modules
              </li>
              <li className="px-1.5 py-1 md:px-2.5 md:py-1.5 bg-button-hover text-accent rounded-lg text-sm md:text-base">
                Vite
              </li>
            </ul>
            <div className="flex flex-row justify-start gap-4 items-center">
              <a
                href="https://weather-20-olive.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-accent bg-button-hover hover:bg-border-card text-xs md:text-base px-3 py-2 md:px-4 md:py-3 rounded-xl flex flex-row duration-200 ease-linear gap-2 items-center"
              >
                Ver projeto
                <ArrowUpRight aria-hidden="true" className="size-5" />
              </a>
              <a
                href="https://github.com/nicholasPimenta/weather-2.0"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-row border border-accent hover:bg-border-card text-xs md:text-base px-3 py-2 md:px-4 md:py-3 rounded-xl duration-200 ease-linear gap-2 items-center"
              >
                Ver código
                <CodeXml aria-hidden="true" className="size-5" />
              </a>
            </div>
            <button
              type="button"
              aria-expanded={isContentWeatherExpanded}
              aria-controls="weather-details"
              className="text-accent flex flex-row items-center gap-2 cursor-pointer text-sm md:text-base"
              onClick={
                isContentWeatherExpanded
                  ? collapseWeatherContent
                  : expandWeatherContent
              }
            >
              {isContentWeatherExpanded
                ? "Fechar detalhes"
                : "Conhecer o processo"}
              {isContentWeatherExpanded ? (
                <ChevronUp aria-hidden="true" className="size-4" />
              ) : (
                <ChevronDown aria-hidden="true" className="size-4" />
              )}
            </button>
          </div>
        </div>
        <figure id="weather-image" hidden={!isImageWeatherExpanded}>
          <img
            src={weatherPreview}
            alt="Weather 2.0 mostrando Rio de Janeiro, 23 graus, céu nublado e previsão dos próximos dias sobre um fundo de nuvens."
            width={1440}
            height={900}
            loading="lazy"
            decoding="async"
            className="rounded-xl"
          />
        </figure>
        <div
          id="weather-details"
          className="grid grid-cols-1 md:grid-cols-2 gap-x-7 gap-y-8 p-4 md:p-7 border border-border-card rounded-[18px] border-t-3 border-t-main bg-background-card mt-16 mb-6"
          hidden={!isContentWeatherExpanded}
        >
          <div className="text-text">
            <h4 className="tracking-tight mb-2 font-bold text-sm md:text-base">
              Problema e contexto
            </h4>
            <p className="tracking-tight leading-[1.65] font-normal text-sm md:text-base">
              Retomei um projeto antigo para repensar a apresentação dos dados
              meteorológicos e o comportamento da interface durante a consulta,
              do carregamento até a exibição de um resultado ou erro.
            </p>
          </div>
          <div className="text-text">
            <h4 className="tracking-tight mb-2 font-bold text-sm md:text-base">
              Minha contribuição
            </h4>
            <p className="tracking-tight leading-[1.65] font-normal text-sm md:text-base">
              Da pesquisa visual à integração dos dados, trabalhei na interface
              de busca e na apresentação das condições atuais e da previsão.
              Também revisei a lógica que reúne os dados dos próximos dias.
            </p>
          </div>
          <div className="text-text">
            <h4 className="tracking-tight mb-2 font-bold text-sm md:text-base">
              Decisões de design e desenvolvimento
            </h4>
            <p className="tracking-tight leading-[1.65] font-normal text-sm md:text-base">
              A consulta à OpenWeather passa por uma função serverless. Na
              interface, temperatura, condição do tempo e previsão têm níveis
              distintos de destaque, acompanhados por cenários relacionados ao
              clima e ao horário.
            </p>
          </div>
          <div className="text-text">
            <h4 className="tracking-tight mb-2 font-bold text-sm md:text-base">
              Desafios e aprendizados
            </h4>
            <p className="tracking-tight leading-[1.65] font-normal text-sm md:text-base">
              A agregação da previsão exigiu correções. Usei sugestões do GitHub
              Copilot para explorar soluções, revisando e ajustando o código
              antes de incorporá-lo. O trabalho mostrou a importância de
              conferir como os dados da API se tornam informação na tela.
            </p>
          </div>
          <div className="text-text col-span-1 md:col-span-2 py-5 border border-t-border-card border-transparent">
            <h4 className="tracking-tight mb-2 font-bold text-sm md:text-base">
              Estado atual
            </h4>
            <p className="tracking-tight leading-[1.65] font-normal text-sm md:text-base">
              A versão demonstrativa está disponível para consulta por cidade,
              com estados de carregamento, erro e resultado e previsão dos
              quatro dias seguintes.
            </p>
          </div>
        </div>
      </article>
      <article aria-labelledby="lenovo-title" className="border border-x-transparent border-t-transparent border-b-border-card mb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-16">
          <div className="grid min-w-0 gap-2">
            <figure className="bg-background-card border border-border-card p-1 md:p-2 rounded-xl md:rounded-2xl">
              <img
                src={lenovoPreview}
                alt="Página conceitual Lenovo GM2 Pro com fones brancos em destaque e seleção entre as versões branca e preta."
                width={1440}
                height={900}
                loading="lazy"
                decoding="async"
                className="rounded-xl md:rounded-2xl"
              />
            </figure>
            <button
              type="button"
              aria-expanded={isImageLenovoExpanded}
              aria-controls="lenovo-image"
              className="text-text md:flex md:items-center md:gap-2 md:py-1 hover:text-text-secondary cursor-pointer duration-200 ease-linear hidden"
              onClick={
                isImageLenovoExpanded ? collapseLenovoImage : expandLenovoImage
              }
            >
              {isImageLenovoExpanded ? (
                <Minimize2 aria-hidden="true" className="size-4" />
              ) : (
                <Maximize2 aria-hidden="true" className="size-4" />
              )}
              {isImageLenovoExpanded ? "Recolher imagem" : "Ampliar imagem"}
            </button>
          </div>
          <div className="grid min-w-0 gap-3.5">
            <h3
              id="lenovo-title"
              className="text-lg md:text-2xl leading-[1.3] font-medium tracking-tight"
            >
              Lenovo GM2 Pro
            </h3>
            <p className="text-text text-sm md:text-base">
              Página conceitual de produto que combina imagens em destaque,
              títulos expressivos e seleção entre as versões branca e preta do
              Lenovo GM2 Pro.
            </p>
            <ul
              aria-label="Tecnologias"
              className="flex flex-wrap gap-1.5 md:gap-2"
            >
              <li className="px-1.5 py-1 md:px-2.5 md:py-1.5 bg-button-hover text-accent rounded-lg text-sm md:text-base">
                React
              </li>
              <li className="px-1.5 py-1 md:px-2.5 md:py-1.5 bg-button-hover text-accent rounded-lg text-sm md:text-base">
                TypeScript
              </li>
              <li className="px-1.5 py-1 md:px-2.5 md:py-1.5 bg-button-hover text-accent rounded-lg text-sm md:text-base">
                CSS Modules
              </li>
              <li className="px-1.5 py-1 md:px-2.5 md:py-1.5 bg-button-hover text-accent rounded-lg text-sm md:text-base">
                Vite
              </li>
            </ul>
            <div className="flex flex-row justify-start gap-4 items-center">
              <a
                href="https://lenovo-gm2-pro.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-accent bg-button-hover hover:bg-border-card text-xs md:text-base px-3 py-2 md:px-4 md:py-3 rounded-xl flex flex-row duration-200 ease-linear gap-2 items-center"
              >
                Ver projeto
                <ArrowUpRight aria-hidden="true" className="size-5" />
              </a>
              <a
                href="https://github.com/nicholasPimenta/lenovo-gm2-pro"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-row border border-accent hover:bg-border-card text-xs md:text-base px-3 py-2 md:px-4 md:py-3 rounded-xl duration-200 ease-linear gap-2 items-center"
              >
                Ver código
                <CodeXml aria-hidden="true" className="size-5" />
              </a>
            </div>
            <button
              type="button"
              aria-expanded={isContentLenovoExpanded}
              aria-controls="lenovo-details"
              className="text-accent flex flex-row items-center gap-2 cursor-pointer text-sm md:text-base"
              onClick={
                isContentLenovoExpanded
                  ? collapseLenovoContent
                  : expandLenovoContent
              }
            >
              {isContentLenovoExpanded
                ? "Fechar detalhes"
                : "Conhecer o processo"}
              {isContentLenovoExpanded ? (
                <ChevronUp aria-hidden="true" className="size-4" />
              ) : (
                <ChevronDown aria-hidden="true" className="size-4" />
              )}
            </button>
          </div>
        </div>
        <figure id="lenovo-image" hidden={!isImageLenovoExpanded}>
          <img
            src={lenovoPreview}
            alt="Página conceitual Lenovo GM2 Pro com fones brancos em destaque e seleção entre as versões branca e preta."
            width={1440}
            height={900}
            loading="lazy"
            decoding="async"
            className="rounded-xl"
          />
        </figure>
        <div
          id="lenovo-details"
          className="grid grid-cols-1 md:grid-cols-2 gap-x-7 gap-y-8 p-4 md:p-7 border border-border-card rounded-[18px] border-t-3 border-t-main bg-background-card mt-16 mb-6"
          hidden={!isContentLenovoExpanded}
        >
          <div className="text-text">
            <h4 className="tracking-tight mb-2 font-bold text-sm md:text-base">
              Problema e contexto
            </h4>
            <p className="tracking-tight leading-[1.65] font-normal text-sm md:text-base">
              Parti de uma página antiga dedicada à Baseus para criar uma nova
              proposta de apresentação de produto. A reformulação foi uma
              oportunidade de definir a direção visual e a estrutura antes de
              começar a implementação.
            </p>
          </div>
          <div className="text-text">
            <h4 className="tracking-tight mb-2 font-bold text-sm md:text-base">
              Minha contribuição
            </h4>
            <p className="tracking-tight leading-[1.65] font-normal text-sm md:text-base">
              Elaborei o briefing, reuni referências e produzi wireframes.
              Também preparei as imagens e construí a página, levando a
              composição planejada para uma interface com seleção de cor.
            </p>
          </div>
          <div className="text-text">
            <h4 className="tracking-tight mb-2 font-bold text-sm md:text-base">
              Decisões de design e desenvolvimento
            </h4>
            <p className="tracking-tight leading-[1.65] font-normal text-sm md:text-base">
              As imagens recortadas se combinam com a tipografia para dar
              destaque ao produto. A alternância de cor mantém a mesma
              composição e permite visualizar as duas versões sem sair da seção.
            </p>
          </div>
          <div className="text-text">
            <h4 className="tracking-tight mb-2 font-bold text-sm md:text-base">
              Desafios e aprendizados
            </h4>
            <p className="tracking-tight leading-[1.65] font-normal text-sm md:text-base">
              O principal aprendizado foi a relação entre preparação e
              implementação: definir a estrutura e ter os materiais prontos
              ajudou a orientar as escolhas de layout durante a construção da
              página.
            </p>
          </div>
          <div className="text-text col-span-1 md:col-span-2 py-5 border border-y-border-card border-x-transparent">
            <h4 className="tracking-tight mb-2 font-bold text-sm md:text-base">
              Estado atual
            </h4>
            <p className="tracking-tight leading-[1.65] font-normal text-sm md:text-base">
              A demonstração e o código estão disponíveis. Trata-se de um
              projeto conceitual independente, sem vínculo oficial com a Lenovo.
            </p>
          </div>
          <figure className="flex flex-col justify-center items-center col-span-1 md:col-span-2">
            <img
              src={lenovoPage}
              alt="Abertura da página conceitual Lenovo GM2 Pro, com tipografia expressiva e produto em destaque."
              width={1440}
              height={900}
              loading="lazy"
              decoding="async"
              className="rounded-xl"
            />
            <figcaption className="text-xs md:text-sm text-text text-left mt-4 border border-transparent border-b-border-card pb-6 mb-6 w-full">
              Abertura da página conceitual.
            </figcaption>
          </figure>
          <figure className="flex flex-col justify-center items-center col-span-1 md:col-span-2">
            <img
              src={lenovoBlack}
              alt="Seção de design da página conceitual com a versão preta do Lenovo GM2 Pro selecionada."
              width={1440}
              height={900}
              loading="lazy"
              decoding="async"
              className="rounded-xl"
            />
            <figcaption className="text-xs md:text-sm text-text text-left mt-4 w-full">
              A mesma composição com a versão preta selecionada.
            </figcaption>
          </figure>
        </div>
      </article>
    </section>
  );
}

export default Projects;
