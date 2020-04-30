# Fatec Taquaritinga

> Website da Fatec Taquaritinga construído com Vue.js e Nuxt.js

Para explicações detalhadas de como as coisas funcionam, dê uma olhada na [documentação do Vue.js](https://br.vuejs.org) e na [documentação do Nuxt.js](https://nuxtjs.org).

## Desenvolvendo

Antes de iniciar, o ambiente de desenvolvimento deve estar com a versão mais recente do [Node.js](https://nodejs.org/en/) instalada, juntamente de seu gerenciador de pacotes NPM (automaticamente instalado junto). Para verificar se o seu ambiente está com ambos instalados, execute em um _terminal_:

```bash
# verifica sua versão do Node.js
$ node -v

# verifica sua versão do NPM
$ npm -v
```

Com os pré-requisitos funcionando, basta utilizar em um _terminal_ executando **no diretório atual do projeto**:

```bash
# instalar dependências
$ npm i

# servidor com hot reload para desenvolvimento
$ npm run dev

Outras opções de comandos que podem ser relevantes durante os testes:

```bash
# construir para produção e lançar servidor
$ npm run build
$ npm start

# gerar arquivos estáticos para hospedagem em CDN
$ npm run generate

# analisar qualidade do código-fonte
$ npm run lint

# analisar tamanho dos pacotes para produção
$ npm run analyze
```

## Publicando

[![Netlify Status](https://api.netlify.com/api/v1/badges/ac0d4398-e357-44fc-8b4a-ef52526a0942/deploy-status)](https://app.netlify.com/sites/fatec-site/deploys)

Para fins de testes da equipe durante o desenvolvimento, este projeto está sendo automaticamente publicado através da [Netlify](https://netlifly.com) quando novas mudanças são recebidas no _branch_ `master`. Portanto, para publicar uma alteração, basta enviar seu _pull_ para tal _branch_.

A solução final de publicação em um servidor da Fatec Taquaritinga ainda não foi ativada.

## Licença

Copyright © 2020 Faculdade de Tecnologia de Taquaritinga

Licenciado sob a [licença MIT](./LICENSE).
