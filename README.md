# Pokémon Home Page

## Objetivo da Aplicação

Esta aplicação é uma Single Page Application (SPA) desenvolvida para listar e fornecer detalhes sobre Pokémon, utilizando a API pública [PokeAPI](https://pokeapi.co/). A aplicação foi criada com o intuito de demonstrar habilidades no uso de React.js, Context API, styled-components, e react-router-dom, proporcionando uma experiência interativa e dinâmica aos usuários.

## Funcionalidades

- **Listagem Inicial de Pokémon:** A página inicial exibe uma lista de 10 Pokémons, incluindo suas imagens e nomes.
- **Botão "Carregar Mais":** Permite ao usuário carregar mais 10 Pokémons na listagem inicial.
- **Página de Detalhes do Pokémon:** Cada Pokémon na lista é clicável, levando o usuário a uma página interna com detalhes específicos, incluindo:
  - Imagem do Pokémon;
  - Nome do Pokémon;
  - Lista de Movimentos (Moves);
  - Lista de Habilidades (Abilities), com nome e descrição de cada habilidade;
  - Tipo(s) do Pokémon (Type).
- **Alternador de Tema (Light/Dark):** A aplicação possui um botão para alternar entre temas claro e escuro, proporcionando uma experiência visual personalizada.

## Ferramentas Utilizadas

- **React.js:** Utilizado para criar a estrutura da SPA e gerenciar o estado da aplicação.
- **Context API:** Utilizada para criar o alternador de tema (Theme Toggler) entre os modos claro e escuro.
- **styled-components:** Utilizados para estilizar os componentes, permitindo a aplicação de temas dinâmicos.
- **react-router-dom:** Usado para gerenciar a navegação entre as páginas (Home e Detalhes do Pokémon).

### Decisões Adotadas

1. **Utilização da PokeAPI:** Foi escolhida por ser uma API pública, rica em informações sobre Pokémons, e fácil de integrar com aplicações React.
2. **SPA com React:** Optou-se por criar uma SPA para proporcionar uma navegação rápida e eficiente, sem recarregamento de páginas.
3. **Context API e styled-components:** Escolhidos pela simplicidade na implementação de um alternador de temas e para manter a consistência do design da aplicação.

## Passo a Passo para Rodar o Projeto

### Pré-requisitos

- Node.js instalado
- npm ou yarn instalado

### Clonando o Repositório

git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio

### Instalando as Dependências
npm install
### ou
yarn install

### Rodando a Aplicação
npm start
# ou
yarn start
A aplicação estará disponível em http://localhost:3000.

### Build para Produção
npm run build
# ou
yarn build
Este comando criará uma versão otimizada para produção da aplicação na pasta build.

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou pull requests.