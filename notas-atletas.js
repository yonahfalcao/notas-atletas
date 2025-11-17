
//Projeto Yonah DEVSTART 17.11.2025
// Lista de atletas com suas notas
let atletas = [
    { nome: "Cesar Abascal", notas: [10, 9.34, 8.42, 10, 7.88] },
    { nome: "Fernando Puntel", notas: [8, 10, 10, 7, 9.33] },
    { nome: "Daiane Jelinsky", notas: [7, 10, 9.5, 9.5, 8] },
    { nome: "Bruno Castro", notas: [10, 10, 10, 9, 9.5] }
];

// Função para calcular média válida e exibir resultados
function processarAtletas(listaAtletas) {
    for (let i = 0; i < listaAtletas.length; i++) {
        let atleta = listaAtletas[i];
        let notas = atleta.notas.slice(); // cria uma cópia para não alterar original

        // Ordena as notas do menor para o maior
        notas.sort((a, b) => a - b);

        // Remove a menor e a maior nota
        let notasValidas = notas.slice(1, 4);

        // Calcula a soma das notas válidas
        let soma = notasValidas.reduce((acc, val) => acc + val, 0);

        // Calcula a média das notas válidas
        let media = soma / notasValidas.length;

        // Exibe os resultados
        console.log(`Atleta: ${atleta.nome}`);
        console.log(`Notas Obtidas: ${atleta.notas.join(",")}`);
        console.log(`Média Válida: ${media}`);
        console.log(""); // linha em branco para separar atletas
    }
}

// Chama a função para processar todos os atletas
processarAtletas(atletas);
