<div align="center">

# Portfólio — Nicholas Pimenta

Interfaces bem pensadas, do design ao código.

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-20232A?style=for-the-badge&logo=typescript&logoColor=3178C6)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-20232A?style=for-the-badge&logo=vite&logoColor=646CFF)](https://vite.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-20232A?style=for-the-badge&logo=tailwindcss&logoColor=06B6D4)](https://tailwindcss.com/)
[![Vercel](https://img.shields.io/badge/Vercel-20232A?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)

[Ver portfólio em produção](https://nicholas-pimenta-portfolio.vercel.app/) · [Acessar repositório](https://github.com/nicholasPimenta/portfolio) · [Ver currículo](https://nicholas-pimenta-portfolio.vercel.app/curriculo)

</div>

## Sobre o projeto

Este é meu portfólio pessoal como desenvolvedor Front-End, criado para apresentar meus projetos, minha trajetória e minha forma de trabalhar.

Cada projeto reúne uma apresentação visual, as tecnologias utilizadas e links para a demonstração e o código. As seções expansíveis permitem conhecer o contexto, minha contribuição, as decisões de desenvolvimento e os aprendizados de cada trabalho.

O site também conta com uma página dedicada ao currículo, disponível para leitura online e download em PDF ou DOCX, além de uma área de contato com cópia de e-mail.

A interface utiliza uma paleta escura com destaques em azul, tipografia Sora e Manrope e uma composição responsiva.

## Funcionalidades

- Apresentação profissional e chamada para conhecer os projetos;
- Navegação por âncoras entre projetos, apresentação pessoal e contato;
- Exibição dos projetos com imagens, descrições e tecnologias;
- Links para demonstrações e repositórios;
- Detalhes expansíveis sobre o processo de cada projeto;
- Ampliação e recolhimento das imagens dos projetos em telas médias e maiores;
- Visualização do exemplo de documento do Formulário de Impressão;
- Seção sobre trajetória, forma de trabalho e ferramentas;
- Cópia do e-mail para a área de transferência;
- Mensagens de sucesso ou falha ao copiar;
- Links para GitHub e LinkedIn;
- Página de currículo acessível pela rota `/curriculo`;
- Download do currículo em PDF e DOCX;
- Estilos específicos para impressão do currículo;
- Retorno ao início pelo rodapé;
- Layout responsivo;
- Carregamento adiado das imagens;
- Rolagem suave com respeito à preferência por movimento reduzido.

## Projetos apresentados

| Projeto | Descrição | Código |
| --- | --- | --- |
| Formulário de Impressão | Interface para preenchimento de informações clínicas e preparação de um documento A4, desenvolvida a partir de uma demanda real. | [Repositório](https://github.com/nicholasPimenta/clinica-dashboard) |
| Weather 2.0 | Aplicação meteorológica com consulta por cidade, previsão do tempo e cenários relacionados às condições climáticas. | [Repositório](https://github.com/nicholasPimenta/weather-2.0) |
| Lenovo GM2 PRO | Landing page conceitual de produto com composição responsiva e seleção entre as versões preta e branca. | [Repositório](https://github.com/nicholasPimenta/lenovo-gm2-pro) |

Os detalhes de cada projeto são organizados em:

- Problema e contexto;
- Minha contribuição;
- Decisões de design e desenvolvimento;
- Desafios e aprendizados;
- Estado atual.

## Tecnologias

- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vite.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Lucide React](https://lucide.dev/)
- [Google Fonts](https://fonts.google.com/) — Sora e Manrope
- Clipboard API
- [ESLint](https://eslint.org/)
- [Vercel](https://vercel.com/)

## Arquitetura da aplicação

```text
App
 │
 ├── / → Home
 │        ├── Header
 │        ├── Hero
 │        ├── Projects
 │        ├── About
 │        ├── Contact
 │        └── Footer
 │
 └── /curriculo → Curriculo
                    ├── Apresentação profissional
                    ├── Habilidades e projetos
                    ├── Experiência, cursos e idiomas
                    └── Downloads em PDF e DOCX
```

O componente `App` verifica o caminho atual do navegador para escolher entre a página principal e o currículo.

A página principal é dividida em componentes por seção. Os estados de expansão dos projetos e as mensagens da cópia de e-mail são controlados localmente com `useState`.

O portfólio não depende de backend, banco de dados ou chaves de API.

## Estrutura principal

```text
portfolio/
├── public/
│   ├── documents/
│   │   ├── curriculo-nicholas-pimenta.pdf
│   │   └── curriculo-nicholas-pimenta.docx
│   ├── apple-touch-icon.png
│   ├── favicon.ico
│   ├── favicon-16x16.png
│   ├── favicon-32x32.png
│   └── favicon-512.png
├── src/
│   ├── assets/
│   │   └── images/
│   │       ├── projects/
│   │       └── fotoSobreMim.webp
│   ├── components/
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── Projects.tsx
│   │   ├── About.tsx
│   │   └── Contact.tsx
│   ├── App.tsx
│   ├── Curriculo.tsx
│   ├── index.css
│   └── main.tsx
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── vercel.json
└── vite.config.ts
```

## Como executar localmente

### Pré-requisitos

Antes de começar, será necessário ter instalado:

- [Node.js](https://nodejs.org/) 22.12 ou superior;
- npm;
- [Git](https://git-scm.com/).

### 1. Clone o repositório

```bash
git clone https://github.com/nicholasPimenta/portfolio.git
```

### 2. Entre na pasta do projeto

```bash
cd portfolio
```

### 3. Instale as dependências

```bash
npm install
```

### 4. Inicie o ambiente de desenvolvimento

```bash
npm run dev
```

Acesse o endereço exibido no terminal, normalmente:

```text
http://localhost:5173
```

Para visualizar o currículo:

```text
http://localhost:5173/curriculo
```

Não é necessário configurar variáveis de ambiente.

## Build de produção

Para gerar o build:

```bash
npm run build
```

O comando executa a compilação TypeScript e gera os arquivos de produção no diretório `dist`.

Para visualizar o build localmente:

```bash
npm run preview
```

Acesse o endereço informado no terminal.

## Qualidade de código

Para executar a análise estática com ESLint:

```bash
npm run lint
```

A configuração inclui regras para TypeScript, React Hooks e React Refresh.

## Implantação

O projeto utiliza a Vercel para hospedagem.

Para publicar uma cópia, importe o repositório e utilize:

| Configuração | Valor |
| --- | --- |
| Framework | Vite |
| Comando de instalação | `npm install` |
| Comando de build | `npm run build` |
| Diretório de saída | `dist` |

O arquivo `vercel.json` contém a configuração de reescrita para a aplicação:

```json
{
  "$schema": "https://openapi.vercel.sh/vercel.json",
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

Essa configuração permite que acessos diretos à rota `/curriculo` carreguem a aplicação, que identifica o caminho e apresenta a página correspondente.

## Currículo

A rota `/curriculo` apresenta:

- Resumo profissional;
- Habilidades técnicas;
- Projetos de desenvolvimento;
- Experiência profissional;
- Cursos complementares;
- Idiomas;
- Informações e links de contato.

Os downloads utilizam arquivos estáticos armazenados em `public/documents`.

A página também possui regras de impressão para papel A4, com margens de 12 mm, fundo branco, ajustes de tipografia e ocultação dos controles de navegação e download.

> O conteúdo da página e os arquivos PDF e DOCX são mantidos separadamente. Ao atualizar o currículo, é necessário revisar as três versões.

## Acessibilidade

O projeto inclui cuidados como:

- Idioma da página definido como português do Brasil;
- Link para pular diretamente ao conteúdo principal;
- Estrutura com elementos semânticos;
- Identificação dos artigos de projetos com `aria-labelledby`;
- Botões expansíveis com `aria-expanded` e `aria-controls`;
- Uso de `hidden` nos painéis de detalhes recolhidos;
- Textos alternativos nas imagens informativas;
- Ícones decorativos ocultos de leitores de tela;
- Avisos acessíveis para links que abrem em uma nova aba;
- Mensagens da cópia de e-mail anunciadas com `aria-live`;
- Estados visíveis de foco;
- Desativação da rolagem suave quando há preferência por movimento reduzido.

## Decisões técnicas

### Apresentação progressiva dos projetos

Cada projeto apresenta primeiro as informações essenciais: imagem, descrição, tecnologias e links.

O botão **Conhecer o processo** revela os detalhes do trabalho. Essa organização permite explorar o contexto e as decisões de cada projeto conforme o interesse do visitante.

### Componentização por responsabilidade

Cabeçalho, rodapé e seções da página ficam em componentes separados.

O currículo possui um componente próprio, mantendo sua estrutura independente da apresentação principal.

### Rota de currículo sem biblioteca adicional

A aplicação possui duas páginas e utiliza `window.location.pathname` para identificar a rota do currículo.

Essa abordagem mantém a navegação simples para o escopo atual, com a configuração da Vercel permitindo o acesso direto ao endereço.

### Tailwind CSS e tema centralizado

A interface utiliza classes utilitárias do Tailwind CSS para organizar espaçamentos, tipografia, estados de interação e responsividade.

As cores compartilhadas são definidas com `@theme` em `src/index.css`, junto das regras globais e dos estilos de impressão.

### Contato com Clipboard API

O botão **Copiar e-mail** utiliza `navigator.clipboard.writeText()`.

A operação é tratada com `try/catch`, permitindo apresentar uma confirmação ou uma mensagem de falha ao visitante.

### Imagens em WebP

As imagens dos projetos e a fotografia pessoal utilizam o formato WebP, com dimensões declaradas, `loading="lazy"` e `decoding="async"`.

Essa configuração permite adiar o carregamento das imagens e informa ao navegador suas dimensões antes da exibição.

### Currículo online e arquivos para download

A versão HTML facilita a leitura diretamente no navegador.

Os arquivos PDF e DOCX oferecem formatos de download, enquanto os estilos de impressão adaptam a página para papel.

## Aprendizados

Este projeto reúne práticas de:

- Organização de um portfólio profissional;
- Apresentação de projetos e processos de desenvolvimento;
- Componentização com React;
- Desenvolvimento com TypeScript;
- Controle de estados e conteúdo expansível;
- Estilização com Tailwind CSS;
- Construção de layouts responsivos;
- Uso de atributos de acessibilidade;
- Integração com a Clipboard API;
- Tratamento de sucesso e falha em interações;
- Organização de imagens e arquivos estáticos;
- Criação de uma página de currículo;
- Estilização para impressão;
- Configuração de rotas na hospedagem;
- Build e publicação com Vite e Vercel.

## Autor

Desenvolvido por [Nicholas Pimenta](https://github.com/nicholasPimenta).

[LinkedIn](https://www.linkedin.com/in/nicholas-pimenta/) · [Portfólio](https://nicholas-pimenta-portfolio.vercel.app/)

---

<div align="center">

**[Acessar o Portfólio](https://nicholas-pimenta-portfolio.vercel.app/)**

</div>