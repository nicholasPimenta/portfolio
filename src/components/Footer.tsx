import { ArrowUp } from "lucide-react";

function Footer() {
  return (
    <footer className="flex flex-col md:flex-row justify-between items-center py-8 px-0 md:px-16 gap-4 md:gap-0">
      <p className="text-text">Nicholas Pimenta · Front-End</p>
      <a href="#hero">
        <p className="flex flex-row gap-2 text-text hover:text-accent duration-200 ease-linear cursor-pointer">
          Voltar ao início <ArrowUp />
        </p>
      </a>
    </footer>
  );
}

export default Footer;
