<br />
<p align="center">
    <img src="https://i.pinimg.com/originals/dd/64/da/dd64da585bc57cb05e5fd4d8ce873f57.png" alt="Logo" width="200">

  <h3 align="center">Biblioteca by <a href="https://github.com/Lorenalgm">Lorena</a></h3>
 <br />
  <p align="center">
     Sistema de gerenciamento de biblioteca
       <br />
    <br />
    <a href="https://github.com/devchallenge-io/biblioteca-backend">Desafio</a>
    ·
    <a href="https://www.devchallenge.com.br/">DevChallenge</a>
  </p>
</p>

## Índice

* [Devchallenge](#devchallenge) 
* [Desafio](#desafio)
* [Tecnologias](#tecnologias)
* [Como começar](#como-começar)

# Devchallenge
<a href="https://devchallenge.now.sh/"> DevChallenge</a> permite que você evolua suas skills como programador, por meio de projetos propostos pela <a href="https://discord.gg/yvYXhGj">comunidade</a>.

# Desafio
O Desafio consistia em criar o backend para um sistema de gerenciamento de uma biblioteca!

### Rotas da aplicação:

- **[POST]** (`/books`)
  - Utilizada para criar um novo `book`
  - A rota deverá receber um `json` com as informações abaixo
    ```json
    {
      "title": "string",
      "authors": ["string"],
      "publisher": "string",
      "url": "string"
    }
    ```

- **[GET]** (`/books`)
  - Utilizada para buscar os `books` existentes
  - Retorna todos os `books` que existem podendo receber `page` e `q` como `query params` para pagina, e pesquisa respectivamente

- **[PUT]** (`/books/:bookId`)
  - Utilizada para atualizar as informações de `book`
  - A rota deverá receber um `id` válido de um `book` existente
  - A rota deverá receber um `json` com as mesmas informações para a criação de um `book`
    ```json
    {
      "title": "string",
      "authors": ["string"],
      "publisher": "string",
      "url": "string"
    }
    ```

Foi adicionado ao projeto um arquivo `routes.json` dentro da pasta `.insomnia` com as rotas utilizadas podendo ser importados para o <a href="https://insomnia.rest/">Insomnia</a>.

# Tecnologias: 
- TypeScript
- Fastify
- Prisma
- Vitest
- Docker

# Como começar:
- Clone o repositório
- Crie o banco de dados
  - Utilizado o Docker
    - Basta executar `docker-compose up -d` que o container do banco de dados será criado
  - Utilizado o PostgreSQL
    - Basta criar um banco de dados com o nome `biblioteca-backend`
  - Executar as migrations
    - Para executar as migrations basta executar no terminal o comando `npx prisma migrate deploy`.
- Abra o projeto
- Instale as dependências com `npm`, `yarn` ou `pnpm`
- Renomeie o arquivo `.env.example` para `.env`
- Execute `npm run dev`


# Comunidade DevChallenge
Site: https://www.devchallenge.com.br/ <br>
Discord: https://discord.gg/yvYXhGj <br>
LinkedIn: https://www.linkedin.com/company/devchallenge/<br>
Twitter: https://twitter.com/dev_challenge<br>
Instagram: https://www.instagram.com/devchallenge/<br>

