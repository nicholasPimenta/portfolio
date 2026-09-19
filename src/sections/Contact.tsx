import { BriefcaseBusiness, Check, CodeXml, Copy } from "lucide-react";
import { useState } from "react";

const email = "nicholas2ilva@gmail.com";

function Contact() {
  const [copy, setCopy] = useState("");
  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopy("E-mail copiado.");
    } catch {
      setCopy("Falha ao copiar.");
    }
  };
  const resetCopyMessage = () => {
    setCopy("");
  };

  return (
    <section id="contato" className="border-b border-line mb-12">
      <div className="px-6 md:px-11 py-6 mx-auto max-w-6xl">
        <div className="flex flex-row justify-start items-center gap-3 mb-4">
          <span className="border rounded-b-xl rounded-t-[50%] w-10 h-10 grid place-items-center text-accent">
            03
          </span>
          <h2 className="text-xl md:text-3xl font-medium">Contato</h2>
        </div>
        <div className="mb-6">
          <h3 className="font-medium text-2xl md:text-3xl">
            Tem uma oportunidade em Front-End?
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-0">
          <div className="flex flex-col gap-4 items-start justify-center self-stretch border-b border-border-card pb-8 md:border-b-0 md:border-r md:border-r-border-card md:pb-0 md:pr-8">
            <p className="text-xl text-text">{email}</p>
            <button
              type="button"
              onClick={copyEmail}
              onMouseLeave={resetCopyMessage}
              onBlur={resetCopyMessage}
              className="flex flex-row justify-center items-center gap-2  bg-button-hover hover:bg-background-card border border-main hover:border-accent text-main hover:text-text duration-200 ease-linear px-3 sm:px-4 py-3 sm:py-3.5 rounded-xl text-sm sm:text-base cursor-pointer w-full"
            >
              {copy === "E-mail copiado." ? (
                <Check aria-hidden="true" className="size-4" />
              ) : (
                <Copy aria-hidden="true" className="size-4" />
              )}
              <span aria-live="polite">{copy || "Copiar e-mail"}</span>
            </button>
          </div>
          <div className="flex flex-col gap-4 justify-center self-stretch md:pl-8">
            <a
              href="https://github.com/nicholasPimenta"
              className="flex flex-row justify-center items-center gap-2  bg-background-card hover:bg-button-hover border border-accent hover:border-main text-text hover:text-main duration-200 ease-linear px-3 sm:px-4 py-3 sm:py-3.5 rounded-xl text-sm sm:text-base"
              target="_blank"
              rel="noopener noreferrer"
            >
              <CodeXml aria-hidden="true" className="size-5 sm:size-6" /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/nicholas-pimenta/"
              className="flex flex-row justify-center items-center gap-2  bg-background-card hover:bg-button-hover border border-accent hover:border-main text-text hover:text-main duration-200 ease-linear px-3 sm:px-4 py-3 sm:py-3.5 rounded-xl text-sm sm:text-base"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BriefcaseBusiness
                aria-hidden="true"
                className="size-5 sm:size-6"
              />{" "}
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
