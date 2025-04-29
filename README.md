# FE-HOST e FE-CREDITOS - Micro-Frontends para Gestão de Créditos

Este repositório contém dois micro-frontends para a aplicação bancária de gestão de créditos: **FE-HOST** e **FE-CREDITOS**.

## Estrutura do Repositório

O repositório está organizado da seguinte forma:

- **FE-HOST**: Aplicação principal que serve como host para os micro-frontends.
- **FE-CREDITOS**: Micro-frontend (remote) responsável pela gestão de créditos e respetivos documentos.

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

- **FE-HOST**: Carregamento dinâmico dos micro-frontends via Module Federation.
- **FE-CREDITOS**:
  - **garantias.screen.tsx**: Gestão de créditos do tipo "Garantias e Avales".
  - **creditosDocImportacao.screen.tsx**: Gestão dos créditos do tipo "Créditos Documentários de Importação".

## Instalação e Execução

```bash
# Clonagem do repositório
git clone https://github.com/1221124/creditos-siteempresasbanco.git

# Instalação de dependências
cd FE-CREDITS | npm install
cd FE-HOST | npm install

# Gerar os tipos TypeScript para os módulos expostos via Module Federation
cd FE-CREDITS | npm make-types
cd FE-HOST | npm run make-types

# Correr o projeto (em ambiente de desenvolvimento - o URL localhost:3000 será automaticamente aberto no seu browser)
cd FE-CREDITS | npm run start
cd FE-HOST | npm run start
```
