function Header() {
  return (
    <header
      id="topo"
      className="border-b border-line"
    >
      <div className="container flex flex-col sm:flex-row justify-between items-center mx-auto px-11 py-5 gap-8 sm:gap-0">
        <a href="#hero" className="text-text hover:text-accent duration-200 ease-linear font-bold">Nicholas Pimenta</a>
        <nav>
          <ul className="flex flex-row gap-12 sm:gap-6">
            <li>
              <a href="#projetos" className="hover:text-accent duration-200 ease-linear text-text">Projetos</a>
            </li>
            <li>
              <a href="#sobre" className="hover:text-accent duration-200 ease-linear text-text">Sobre</a>
            </li>
            <li>
              <a href="#contato" className="hover:text-accent duration-200 ease-linear text-text">Contato</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
