import Footer from "./components/Footer";
import Header from "./components/Header";
import Curriculo from "./Curriculo";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";

function Home() {
  return (
    <>
      <a
        href="#conteudo-principal"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-background-card focus:px-4 focus:py-3 focus:text-text"
      >
        Pular para o conteúdo principal
      </a>
      <Header />
      <main id="conteudo-principal" tabIndex={-1}>
        <Hero />
        <Projects />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

function App() {
  const path = window.location.pathname.replace(/\/$/, "");

  if (path === "/curriculo") {
    return <Curriculo />
  }

  return <Home />;
}

export default App;
