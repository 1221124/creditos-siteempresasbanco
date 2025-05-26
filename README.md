# Aplicação para Gestão de Créditos

Este repositório contém quatro micro-_frontends_ para a aplicação bancária de gestão de créditos: **FE-HOST**, **FE-DASHBOARD**, **FE-CREDITOS** e **FE-UTILS**.

## Estrutura do Repositório

O repositório está organizado da seguinte forma:

- **FE-HOST**: Aplicação principal que serve como host para os micro-_frontends_.
- **FE-DASHBOARD**: Micro-_frontend_ responsável pela página inicial.
- **FE-CREDITOS**: Micro-_frontend_ responsável pela gestão de créditos e respetivos documentos.
- **FE-UTILS**: Micro-_frontend_ que contém utilitários e componentes compartilhados entre os outros módulos.

## Tecnologias Utilizadas

- React
- TypeScript
- Webpack 5
- Module Federation
- Zustand
- React Bootstrap
- React Icons
- React PDF

## Pré-Requisitos

```bash
# Node.js
node -v
# Node Package Manager
npm -v
```

## Funcionalidade

- **FE-HOST**: Carregamento dinâmico dos micro-_frontends_ via Module Federation.
- **FE-DASHBOARD**: Página inicial da aplicação.
- **FE-CREDITOS**:
  - **garantias.screen.tsx**: Gestão de créditos do tipo "Garantias e Avales".
  - **creditosDocImportacao.screen.tsx**: Gestão dos créditos do tipo "Créditos Documentários de Importação".
- **FE-UTILS**: Contém componentes reutilizáveis e utilitários.

## Ambientes

### Ambiente de Desenvolvimento

Os micro-_frontends_ estão configurados para serem executados em diferentes portas no ambiente de desenvolvimento:

- **FE-HOST**: [http://localhost:3000](http://localhost:3000)
- **FE-DASHBOARD**: [http://localhost:3001](http://localhost:3001)
- **FE-CREDITOS**: [http://localhost:3003](http://localhost:3003)
- **FE-UTILS**: [http://localhost:3002](http://localhost:3002)

### Ambiente de Produção

Os micro-_frontends_ estão hospedados no Netlify e podem ser acedidos através dos seguintes links:

- **FE-HOST**: [https://siteempresasbanco.netlify.app/](https://siteempresasbanco.netlify.app/)
- **FE-DASHBOARD**: [https://dashboard-siteempresasbanco.netlify.app/](https://dashboard-siteempresasbanco.netlify.app/)
- **FE-CREDITOS**: [https://creditos-siteempresasbanco.netlify.app/](https://creditos-siteempresasbanco.netlify.app/)
- **FE-UTILS**: [https://utils-siteempresasbanco.netlify.app/](https://utils-siteempresasbanco.netlify.app/)

## Instalação e Execução

```bash
# Clonagem do repositório
git clone https://github.com/1221124/creditos-siteempresasbanco.git

# Instalação de dependências
cd FE-HOST | npm install
cd FE-DASHBOARD | npm install
cd FE-CREDITOS | npm install
cd FE-UTILS | npm install

# Gerar os tipos TypeScript para os módulos expostos via Module Federation
cd FE-HOST | npm run make-types
cd FE-DASHBOARD | npm make-types
cd FE-CREDITOS | npm make-types
cd FE-UTILS | npm make-types

# Correr o projeto (em ambiente de desenvolvimento - o URL localhost:3000 será automaticamente aberto no seu browser)
cd FE-HOST | npm run start
cd FE-DASHBOARD | npm run start
cd FE-CREDITOS | npm run start
cd FE-UTILS | npm run start
```

É também possível executar a aplicação em modo de produção ao aceder ao seguinte link:

```bash
# Aceder ao ambiente de produção
https://siteempresasbanco.netlify.app/
```
