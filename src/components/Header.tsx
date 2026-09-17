function Header() {
  return (
    <header
      id="topo"
      className="border-b border-line"
    >
      <div className="container flex flex-col sm:flex-row justify-between items-center mx-auto px-11 py-5 gap-8 sm:gap-0">
        <a href="#hero">Nicholas Pimenta</a>
        <nav>
          <ul className="flex flex-row gap-12 sm:gap-6">
            <li>
              <a href="#projetos" className="hover:text-accent duration-200 ease-linear">Projetos</a>
            </li>
            <li>
              <a href="#sobre" className="hover:text-accent duration-200 ease-linear">Sobre</a>
            </li>
            <li>
              <a href="#contato" className="hover:text-accent duration-200 ease-linear">Contato</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
