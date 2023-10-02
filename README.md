# Paytech

Paytech é um projeto de gerenciamento de pagamentos desenvolvido com Angular 16, TypeScript, SCSS, Tailwind CSS e Angular Material. O projeto oferece funcionalidades de CRUD de pagamentos, bem como autenticação de usuários por meio de uma tela de login.

## Sumário

- [Visão Geral](#visão-geral)
- [Pré-requisitos](#pré-requisitos)
- [Instalação](#instalação)
- [Uso](#uso)
- [Padrões e Boas Práticas](#padrões-e-boas-práticas)
- [Testes Automatizados](#testes-automatizados)
- [Performance](#performance)

## Visão Geral

Paytech é um sistema de gerenciamento de pagamentos que simplifica o processo de registro, edição e exclusão de pagamentos. Ele foi construído utilizando Angular 16, aproveitando as vantagens do TypeScript para um código mais seguro e manutenível. A interface de usuário é estilizada com o poderoso Tailwind CSS e o Angular Material para garantir uma experiência agradável ao usuário.

## Pré-requisitos

Antes de começar, certifique-se de atender aos seguintes pré-requisitos:

- Node.js e npm instalados

## Instalação

Siga estas etapas para instalar o projeto em sua máquina:

1. Clone o repositório: `git clone https://github.com/alinelvs/PayTech.git`
2. Acesse o diretório do projeto: `cd PayTech`
3. Instale as dependências: `npm install`

## Uso

Para utilizar o projeto, siga os passos abaixo:

1. Inicie o servidor: `npm start`
2. Inicie a API: `npm run api`
3. Acesse o projeto no seu navegador: `http://localhost:4200`

## Testes Automatizados

O projeto inclui testes automatizados para garantir a qualidade do código. Você pode executar os testes utilizando o comando:

Inicie os testes: `npm test`

## Padrões e Boas Práticas

- O código segue um padrão consistente de formatação.
- Funções e variáveis são nomeadas de forma descritiva e em inglês.
- Boas práticas de organização de código são seguidas.
- Funções de ciclo de vida do Angular estão localizadas no local apropriado.

## Performance

Paytech foi desenvolvido com foco no desempenho para garantir uma experiência ágil aos usuários. Algumas das otimizações e práticas de desempenho incluem:

### Otimizações de Desempenho

- **Minimização de Re-renderizações**: Utilizamos as melhores práticas do Angular para minimizar re-renderizações desnecessárias de componentes, resultando em uma interface mais responsiva.

- **Carregamento Lazy**: Implementamos o carregamento preguiçoso (lazy loading) de módulos para reduzir o tempo de carregamento inicial e melhorar a eficiência.

- **Compactação e Otimização de Recursos Estáticos**: Comprimimos e otimizamos arquivos CSS, JavaScript e imagens para reduzir o tempo de carregamento de recursos estáticos.

### Memory Leak (Vazamento de Memória)

No desenvolvimento, também tomamos medidas para prevenir memory leaks, que podem afetar negativamente o desempenho do aplicativo. O memory leak ocorre quando a memória alocada não é liberada adequadamente. Abordamos esse problema da seguinte forma:

- **Gerenciamento Adequado de Objetos**: Garantimos que todos os objetos sejam desalocados quando não são mais necessários.

- **Utilização do Angular e RxJS**: Aproveitamos recursos poderosos do Angular e da biblioteca RxJS para gerenciamento de memória.

Ao seguir essas práticas de desempenho, Paytech oferece uma experiência fluida e responsiva aos usuários, independentemente do dispositivo ou conexão.


