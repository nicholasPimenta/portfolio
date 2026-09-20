import { ArrowLeft, Download } from "lucide-react";

const linkClassName =
  "text-accent underline decoration-accent/40 underline-offset-4 transition-colors duration-200 hover:text-main";

const curriculoPdf = "/documents/curriculo-nicholas-pimenta.pdf";
const curriculoDocx = "/documents/curriculo-nicholas-pimenta.docx";

function Curriculo() {
  return (
    <div className="resume-shell min-h-screen px-4 py-6 sm:px-6 sm:py-10">
      <nav
        aria-label="Navegação do currículo"
        className="resume-actions mx-auto mb-4 flex max-w-5xl"
      >
        <a
          href="/"
          className="inline-flex items-center gap-2 rounded-xl border border-border-card bg-background-card px-4 py-3 text-sm font-medium text-text transition-colors duration-200 hover:border-accent hover:bg-button-hover hover:text-accent"
        >
          <ArrowLeft aria-hidden="true" className="size-5" />
          Voltar ao portfólio
        </a>
      </nav>

      <main className="resume-page mx-auto max-w-5xl overflow-hidden rounded-3xl border border-border-card bg-background-card shadow-2xl shadow-black/20">
        <header className="resume-header border-b border-line px-6 py-8 sm:px-10 sm:py-10">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <span
              aria-hidden="true"
              className="resume-badge grid size-14 shrink-0 place-items-center rounded-b-2xl rounded-t-[50%] border border-accent text-lg font-semibold text-accent"
            >
              CV
            </span>

            <div>
              <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Nicholas Pimenta
              </h1>

              <p className="mt-2 text-base font-medium text-accent sm:text-lg">
                Desenvolvedor Front-End Júnior | React | TypeScript
              </p>
            </div>
          </div>

          <address className="resume-contact mt-6 grid gap-x-8 gap-y-2 text-sm leading-relaxed text-text sm:grid-cols-2">
            <p>
              <strong className="text-white">Localização:</strong> Duque de
              Caxias, RJ
            </p>

            <p>
              <strong className="text-white">Telefone:</strong> (21) 97481-3968
            </p>

            <p>
              <strong className="text-white">E-mail:</strong>{" "}
              nicholas2ilva@gmail.com
            </p>

            <p>
              <strong className="text-white">Portfólio:</strong>{" "}
              <a
                href="https://nicholas-pimenta-portfolio.vercel.app/"
                className={linkClassName}
              >
                nicholas-pimenta-portfolio.vercel.app
              </a>
            </p>

            <p>
              <strong className="text-white">GitHub:</strong>{" "}
              <a
                href="https://github.com/nicholasPimenta"
                className={linkClassName}
              >
                github.com/nicholasPimenta
              </a>
            </p>

            <p>
              <strong className="text-white">LinkedIn:</strong>{" "}
              <a
                href="https://www.linkedin.com/in/nicholas-pimenta/"
                className={linkClassName}
              >
                linkedin.com/in/nicholas-pimenta
              </a>
            </p>
          </address>
        </header>

        <section
          aria-labelledby="resumo-profissional"
          className="resume-section border-b border-line px-6 py-6 sm:px-10"
        >
          <h2
            id="resumo-profissional"
            className="text-xl font-semibold tracking-tight text-accent"
          >
            Resumo Profissional
          </h2>

          <p className="mt-4 leading-7 text-text">
            Desenvolvedor Front-End Júnior com projetos publicados em React e
            TypeScript, envolvendo formulários, consumo de APIs e páginas de
            apresentação de produtos. Experiência prática com planejamento de
            interfaces, wireframes, responsividade e interações. Desenvolvi
            também uma solução a partir de requisitos definidos diretamente com
            um solicitante, ajustando o escopo às necessidades reais de
            preenchimento e impressão.
          </p>
        </section>

        <section
          aria-labelledby="habilidades-tecnicas"
          className="resume-section border-b border-line px-6 py-6 sm:px-10"
        >
          <h2
            id="habilidades-tecnicas"
            className="text-xl font-semibold tracking-tight text-accent"
          >
            Habilidades Técnicas
          </h2>

          <div className="mt-4 grid gap-3 leading-7 text-text">
            <p>
              <strong className="text-white">Linguagens e tecnologias:</strong>{" "}
              HTML, CSS, JavaScript, TypeScript, React, CSS Modules, Tailwind
              CSS e Vite.
            </p>

            <p>
              <strong className="text-white">Ferramentas:</strong> Git, GitHub e
              Vercel.
            </p>

            <p>
              <strong className="text-white">Práticas:</strong> consumo de APIs
              REST, funções serverless, interfaces responsivas, acessibilidade
              web, planejamento de interfaces e criação de wireframes.
            </p>
          </div>
        </section>

        <section
          aria-labelledby="projetos"
          className="resume-section border-b border-line px-6 py-6 sm:px-10"
        >
          <h2
            id="projetos"
            className="text-xl font-semibold tracking-tight text-accent"
          >
            Projetos de Desenvolvimento
          </h2>

          <div className="mt-5 grid gap-6">
            <article className="resume-entry border-l-2 border-border-card pl-4 sm:pl-5">
              <h3 className="text-lg font-semibold text-white">
                Formulário de Impressão para Clínica Médica
              </h3>

              <p className="mt-2 leading-7 text-text">
                <strong className="text-white">Tecnologias:</strong> React,
                TypeScript, Tailwind CSS, shadcn/ui e Vite.
              </p>

              <div className="mt-2 grid gap-1 text-sm leading-6 text-text">
                <p>
                  <strong className="text-white">Demonstração:</strong>{" "}
                  <a
                    href="https://clinica-dashboard-seven.vercel.app/"
                    className={linkClassName}
                  >
                    clinica-dashboard-seven.vercel.app
                  </a>
                </p>

                <p>
                  <strong className="text-white">Código:</strong>{" "}
                  <a
                    href="https://github.com/nicholasPimenta/clinica-dashboard"
                    className={linkClassName}
                  >
                    github.com/nicholasPimenta/clinica-dashboard
                  </a>
                </p>
              </div>

              <ul className="mt-3 grid list-disc gap-2 pl-5 leading-7 text-text marker:text-accent">
                <li>
                  Alinhei os requisitos diretamente com um urologista, ajustando
                  a proposta inicial para um formulário que complementa um
                  sistema já utilizado pelo solicitante.
                </li>

                <li>
                  Desenvolvi a interface de preenchimento com campos agrupados e
                  uma apresentação específica para impressão em uma folha A4.
                </li>
              </ul>
            </article>

            <article className="resume-entry border-l-2 border-border-card pl-4 sm:pl-5">
              <h3 className="text-lg font-semibold text-white">Weather 2.0</h3>

              <p className="mt-2 leading-7 text-text">
                <strong className="text-white">Tecnologias:</strong> React,
                TypeScript, CSS Modules, Vite, OpenWeather API e função
                serverless.
              </p>

              <div className="mt-2 grid gap-1 text-sm leading-6 text-text">
                <p>
                  <strong className="text-white">Demonstração:</strong>{" "}
                  <a
                    href="https://weather-20-olive.vercel.app/"
                    className={linkClassName}
                  >
                    weather-20-olive.vercel.app
                  </a>
                </p>

                <p>
                  <strong className="text-white">Código:</strong>{" "}
                  <a
                    href="https://github.com/nicholasPimenta/weather-2.0"
                    className={linkClassName}
                  >
                    github.com/nicholasPimenta/weather-2.0
                  </a>
                </p>
              </div>

              <ul className="mt-3 grid list-disc gap-2 pl-5 leading-7 text-text marker:text-accent">
                <li>
                  Desenvolvi a busca por cidade, a apresentação das condições
                  meteorológicas atuais e a previsão dos quatro dias seguintes,
                  consultando a OpenWeather API por meio de uma função
                  serverless para proteger a chave de acesso.
                </li>

                <li>
                  Implementei os estados de carregamento, erro e resultado, os
                  cenários visuais relacionados ao clima e ao período do dia e a
                  lógica de agregação dos dados de previsão.
                </li>
              </ul>
            </article>

            <article className="resume-entry border-l-2 border-border-card pl-4 sm:pl-5">
              <h3 className="text-lg font-semibold text-white">
                Lenovo GM2 Pro
              </h3>

              <p className="mt-2 leading-7 text-text">
                <strong className="text-white">Tecnologias:</strong> React,
                TypeScript, CSS Modules e Vite.
              </p>

              <div className="mt-2 grid gap-1 text-sm leading-6 text-text">
                <p>
                  <strong className="text-white">Demonstração:</strong>{" "}
                  <a
                    href="https://lenovo-gm2-pro.vercel.app/"
                    className={linkClassName}
                  >
                    lenovo-gm2-pro.vercel.app
                  </a>
                </p>

                <p>
                  <strong className="text-white">Código:</strong>{" "}
                  <a
                    href="https://github.com/nicholasPimenta/lenovo-gm2-pro"
                    className={linkClassName}
                  >
                    github.com/nicholasPimenta/lenovo-gm2-pro
                  </a>
                </p>
              </div>

              <ul className="mt-3 grid list-disc gap-2 pl-5 leading-7 text-text marker:text-accent">
                <li>
                  Elaborei o briefing, pesquisei referências, produzi wireframes
                  e preparei as imagens para uma página conceitual de
                  apresentação do produto.
                </li>

                <li>
                  Implementei uma composição responsiva com animações,
                  microinterações e alternância entre as versões branca e preta.
                  Projeto independente, sem vínculo oficial com a Lenovo.
                </li>
              </ul>
            </article>
          </div>
        </section>

        <section
          aria-labelledby="experiencia-profissional"
          className="resume-section border-b border-line px-6 py-6 sm:px-10"
        >
          <h2
            id="experiencia-profissional"
            className="text-xl font-semibold tracking-tight text-accent"
          >
            Experiência Profissional
          </h2>

          <article className="resume-entry mt-4 border-l-2 border-border-card pl-4 sm:pl-5">
            <h3 className="text-lg font-semibold text-white">
              Estagiário de Apoio Pedagógico
            </h3>

            <p className="mt-1 text-text">
              <strong className="text-white">
                Educandário José Pinheiro Costa
              </strong>
            </p>

            <p className="mt-1 text-sm text-text-secondary">
              <time dateTime="2017-03">Março de 2017</time>
              {" – "}
              <time dateTime="2019-12">Dezembro de 2019</time>
            </p>

            <p className="mt-3 leading-7 text-text">
              Apoiei professores no atendimento aos alunos, na organização de
              atividades e na preparação de eventos escolares.
            </p>
          </article>
        </section>

        <section
          aria-labelledby="cursos-complementares"
          className="resume-section border-b border-line px-6 py-6 sm:px-10"
        >
          <h2
            id="cursos-complementares"
            className="text-xl font-semibold tracking-tight text-accent"
          >
            Cursos Complementares
          </h2>

          <div className="resume-courses mt-4 grid gap-6 sm:grid-cols-2">
            <article className="resume-entry border-l-2 border-border-card pl-4 sm:pl-5">
              <h3 className="text-lg font-semibold text-white">
                Formações e Cursos de Desenvolvimento Front-End
              </h3>

              <p className="mt-2 text-text">
                <strong className="text-white">Alura</strong>
              </p>

              <p className="mt-1 text-sm text-text-secondary">
                <time dateTime="2022-10">Outubro de 2022</time>
                {" – "}
                <time dateTime="2024-10">Outubro de 2024</time>
              </p>

              <p className="mt-3 leading-7 text-text">
                Conteúdos principais: HTML, CSS, JavaScript, React, TypeScript,
                Git e GitHub.
              </p>
            </article>

            <article className="resume-entry border-l-2 border-border-card pl-4 sm:pl-5">
              <h3 className="text-lg font-semibold text-white">
                Curso de Inglês
              </h3>

              <p className="mt-2 text-text">
                <strong className="text-white">Beway Idiomas</strong>
              </p>

              <p className="mt-1 text-sm text-text-secondary">
                <time dateTime="2022-05">Maio de 2022</time>
                {" – "}
                <time dateTime="2026-05">Maio de 2026</time>
              </p>

              <p className="mt-3 leading-7 text-text">Curso concluído.</p>
            </article>
          </div>
        </section>

        <section
          aria-labelledby="idiomas"
          className="resume-section px-6 py-6 sm:px-10"
        >
          <h2
            id="idiomas"
            className="text-xl font-semibold tracking-tight text-accent"
          >
            Idiomas
          </h2>

          <p className="mt-4 text-text">
            <strong className="text-white">Inglês:</strong> intermediário.
          </p>
        </section>
      </main>

      <footer className="resume-actions mx-auto max-w-5xl px-0 pt-5">
        <div className="flex flex-col gap-4 rounded-2xl border border-border-card bg-background-card p-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-semibold text-white">Baixar currículo</p>

            <p className="mt-1 text-sm text-text-secondary">
              Escolha o formato mais adequado para sua seleção.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href={curriculoPdf}
              download
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-main bg-main px-4 py-3 text-sm font-medium text-text-button transition-colors duration-200 hover:border-accent hover:bg-accent"
            >
              <Download aria-hidden="true" className="size-5" />
              Baixar em PDF
            </a>

            <a
              href={curriculoDocx}
              download
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-accent bg-transparent px-4 py-3 text-sm font-medium text-text transition-colors duration-200 hover:border-main hover:bg-button-hover hover:text-accent"
            >
              <Download aria-hidden="true" className="size-5" />
              Baixar em DOCX
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Curriculo;
