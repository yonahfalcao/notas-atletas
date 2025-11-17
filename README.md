
# Notas de Atletas - Ginástica Artística

## Descrição do Projeto

Este projeto consiste em uma aplicação em **JavaScript** que recebe o nome e as notas de atletas participantes de uma competição de ginástica artística,
calcula a média válida das notas (desconsiderando a maior e a menor nota)e apresenta os resultados de forma clara e organizada para o usuário.

A aplicação foi desenvolvida como parte de um projeto de certificação e tem como objetivo treinar manipulação de arrays, objetos e cálculos em JavaScript.

---

## Regras de Avaliação

Cada atleta é avaliado por **cinco jurados**, considerando os seguintes critérios:

1. Tempo de duração da apresentação
2. Originalidade da coreografia
3. Postura do atleta
4. Dificuldade das acrobacias
5. Sincronismo

**Regras para cálculo da média:**

- Cada nota varia de 1 a 10.
- A média válida é calculada considerando apenas as **três notas do meio**, desconsiderando a maior e a menor nota.

---

## Entrada de Dados

O projeto utiliza uma matriz de objetos para armazenar os atletas e suas notas, no formato:

javascript
'let atletas = [
    { nome: "Cesar Abascal", notas: [10, 9.34, 8.42, 10, 7.88] },
    { nome: "Fernando Puntel", notas: [8, 10, 10, 7, 9.33] },
    { nome: "Daiane Jelinsky", notas: [7, 10, 9.5, 9.5, 8] },
    { nome: "Bruno Castro", notas: [10, 10, 10, 9, 9.5] }
];

## Como Funciona

1. O programa percorre todos os atletas da matriz.
2. Ordena as notas do menor para o maior.
3. Remove a menor e a maior nota, mantendo apenas as três do meio.
4. Calcula a média das três notas restantes.
5. Exibe no console o nome do atleta, as notas obtidas e a média válida.

### Exemplo de saída:


Atleta: Cesar Abascal
Notas Obtidas: 10,9.34,8.42,10,7.88
Média Válida: 9.253333333333334

Atleta: Fernando Puntel
Notas Obtidas: 8,10,10,7,9.33
Média Válida: 9.11

Atleta: Daiane Jelinsky
Notas Obtidas: 7,10,9.5,9.5,8
Média Válida: 9

Atleta: Bruno Castro
Notas Obtidas: 10,10,10,9,9.5
Média Válida: 9.833333333333334

##Tecnologias Utilizadas:

JavaScript: Linguagem principal para processamento de dados e cálculo das médias.

Console do navegador: Para exibição dos resultados.

##Como Executar:
Crie um arquivo chamado notas-atletas.js e cole o código do projeto nele.

Abra o console do navegador (F12 no Chrome/Firefox) ou utilize Node.js.

Execute o script e observe os resultados no console.

Exemplo com Node.js:
node notas-atletas.js

##Estrutura do Código:

Matriz de atletas: Armazena os nomes e notas de cada atleta.

Função processarAtletas(): Responsável por calcular a média válida e imprimir os resultados.

Métodos de array utilizados:

sort() para ordenar notas

slice() para pegar as notas do meio

reduce() para somar as notas válidas

for ou forEach para percorrer os atletas


Autora
Nome: Yonah Pires de Souza Falcão
GitHub: https://github.com/yonahfalcao

