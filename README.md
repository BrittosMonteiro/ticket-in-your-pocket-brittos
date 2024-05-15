
# Documentação do Projeto: E-Commerce Ticket In Your Pocket


### Visão Geral
Este documento descreve o projeto de um E-Commerce voltado para a compra de ingressos para filmes. A plataforma permite aos usuários navegar, selecionar e comprar ingressos para filmes em exibição. O sistema é baseado em uma arquitetura de cliente-servidor, com o cliente implementado em React e Vite, e o servidor utilizando o Firebase como back-end.

## Tecnologias Utilizadas

### Frontend:


•	React: A biblioteca JavaScript é usada para criar interfaces de usuário interativas e dinâmicas.

•	Vite: O construtor de aplicações web oferece uma experiência de desenvolvimento rápida e eficiente.


### Backend:


•	Firebase: Firebase: A plataforma de desenvolvimento de aplicativos móveis e da web é utilizada para gerenciar a autenticação de usuários, armazenar dados do usuário, como histórico de compras e informações do carrinho, e fornece uma API para interagir com o banco de dados.


### Recursos e Funcionalidades

#### 1. Listagem de Filmes

•	O sistema consome uma API para listar os filmes disponíveis para compra.

•	Os filmes são apresentados ao usuário com informações relevantes, como título, sinopse, horários de exibição e preços dos ingressos.


#### 2. Autenticação de Usuários

•	O sistema oferece formulários de login e cadastro para os usuários.

•	Os usuários podem criar uma conta fornecendo informações básicas e autenticar-se para acessar recursos adicionais, como histórico de compra e gerenciamento do carrinho.


#### 3. Histórico de Compras

•	O sistema mantém um histórico de compras para cada usuário autenticado.

•	Os usuários podem revisar suas compras anteriores, incluindo detalhes como os filmes comprados, a data da compra e o valor total.


#### 4. Gerenciamento do Carrinho

•	Os usuários têm a capacidade de adicionar, alterar e remover itens do carrinho de compras.

•	O carrinho de compras mantém uma lista atualizada dos itens selecionados, juntamente com o total atualizado.

Arquitetura do Sistema

O sistema segue uma arquitetura cliente-servidor, com o cliente implementado em React e Vite, e o servidor utilizando o Firebase como back-end.


## Fluxo de Funcionamento

1. O usuário acessa a aplicação e é apresentado com uma lista de filmes disponíveis para compra.
2. O usuário pode navegar pelos filmes, visualizar detalhes e selecionar o filme desejado.
3. Se o usuário não estiver autenticado, ele será solicitado a fazer login ou se cadastrar.
4. Após o login ou cadastro, o usuário pode selecionar o filme desejado e adicionar ingressos ao carrinho.
5. O usuário pode revisar e modificar os itens no carrinho antes de finalizar a compra.
6. Ao finalizar a compra, o sistema registra a transação, atualiza o histórico de compras do usuário e conclui a transação.

## Instalação e execução do projeto

### Instalando dependencias
```
npm i ou npm install
```
### Executando o projeto
```
npm run dev
```

## Considerações Finais

Este projeto oferece uma plataforma intuitiva para a compra de ingressos para filmes, fornecendo uma experiência de usuário fluida e eficiente. A integração com o Firebase como backend oferece escalabilidade, segurança e confiabilidade para o sistema.

 GIF DO PROJETO
 É preciso fazer o download do video para conseguir visualizar, o google drive não suporta visualização de gif
 https://drive.google.com/file/d/1avoK9bsNJKvWGpA7mX48V39H85Da2t4Z/view?usp=sharing
 ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
 
 
 
 
 # React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh



  
