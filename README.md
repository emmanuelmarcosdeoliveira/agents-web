# Let Me Ask

[![React](https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=FFD62E)](https://vitejs.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![TanStack Query](https://img.shields.io/badge/TanStack%20Query-FF4154?style=flat-square&logo=react-query&logoColor=white)](https://tanstack.com/query/latest)
[![React Router](https://img.shields.io/badge/React%20Router-CA4245?style=flat-square&logo=react-router&logoColor=white)](https://reactrouter.com/)
[![Radix UI](https://img.shields.io/badge/Radix%20UI-111?style=flat-square&logo=radix-ui&logoColor=white)](https://www.radix-ui.com/)
[![Lucide](https://img.shields.io/badge/Lucide-000?style=flat-square&logo=lucide&logoColor=white)](https://lucide.dev/)

## 📋 Menu

- [ℹ️ Sobre o Projeto](#-sobre-o-projeto)
- [🛠️ Tecnologias e Bibliotecas](#-tecnologias-e-bibliotecas)
- [🧩 Padrões de Projeto](#-padrões-de-projeto)
- [⚙️ Setup e Configuração](#-setup-e-configuração)
- [🎤 Funcionalidade de Gravação de Áudio](#-funcionalidade-de-gravação-de-áudio)
- [🎓 Créditos e Licença](#-créditos-e-licença)

## ℹ️ Sobre o Projeto

**Let Me Ask** é uma aplicação web desenvolvida por Emmanuel Oliveira | OFS, baseada no projeto original da Rocketseat. O objetivo é proporcionar um ambiente para perguntas e respostas em tempo real, com interface moderna, responsiva e recursos de gravação de áudio.

## 🛠️ Tecnologias e Bibliotecas

- **React 19** – Biblioteca principal para construção da interface.
- **Vite** – Bundler moderno para desenvolvimento rápido.
- **TypeScript** – Tipagem estática para maior segurança.
- **TailwindCSS** – Utilitário para estilização rápida e responsiva.
- **@tanstack/react-query** – Gerenciamento de dados assíncronos e cache.
- **React Router DOM** – Navegação SPA.
- **Radix UI** – Componentes acessíveis e semânticos.
- **Lucide React** – Ícones SVG modernos.
- **Class Variance Authority, clsx, tailwind-merge** – Utilitários para composição de classes CSS.
- **MediaRecorder API** – Gravação de áudio diretamente do navegador.

## 🧩 Padrões de Projeto

- **Componentização**: Interface dividida em componentes reutilizáveis.
- **Hooks**: Uso extensivo de React Hooks para estado, efeitos e lógica de negócio.
- **Context API**: Gerenciamento de temas (dark/light/system) via ThemeProvider customizado.
- **Separation of Concerns**: Separação clara entre lógica, apresentação e estilos.
- **Atomic Design**: Organização dos componentes em átomos, moléculas e organismos.
- **Acessibilidade**: Uso de Radix UI e boas práticas para garantir acessibilidade.

## ⚙️ Setup e Configuração

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/emmanuelmarcosdeoliveira/agents-web
   cd agents-web
   ```
2. **Instale as dependências:**
   ```bash
   npm install
   ```
3. **Rode o projeto em modo desenvolvimento:**
   ```bash
   npm run dev
   ```
4. **Acesse:**
   Abra [http://localhost:5173](http://localhost:5173) no navegador.

   > **Observação:** É necessário ter o Node.js (versão 18+) instalado.
   >
   > Para funcionalidades de gravação de áudio, utilize navegadores modernos (Chrome, Edge, Firefox) e permita o acesso ao microfone.

## 🎤 Funcionalidade de Gravação de Áudio

- A página de gravação de áudio utiliza a API nativa do navegador (`MediaRecorder`) para capturar e enviar áudios para a sala.
- O layout foi ajustado para não permitir scroll, centralizando os controles na tela.
- Ícones do Lucide são usados para botões de ação (gravar, pausar, voltar).
- O ThemeProvider customizado permite alternar entre temas claro, escuro e sistema.

## 🎓 Créditos e Licença

Projeto desenvolvido por [Emmanuel Oliveira](https://www.ofs.dev.br) | OFS com base no projeto da [Rocketseat](https://rocketseat.com.br/).
Todos os créditos de concepção, design e ideia original pertencem à Rocketseat.
Este projeto é educacional, sem fins lucrativos.
