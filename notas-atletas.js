// Matriz de objetos fornecido pelo projeto de certificação.
let atletas = [
    {
        nome: "Cesar Abascal",
        notas: [10, 9.34, 8.42, 10, 7.88]
    },
    {
        nome: "Fernando Puntel",
        notas: [8, 10, 10, 7, 9.33]
    },
    {
        nome: "Daiane Jelinsky",
        notas: [7, 10, 9.5, 9.5, 8]
    },
    {
        nome: "Bruno Castro",
        notas: [10, 10, 10, 9, 9.5]
    }
];

// função que calcula a média válida
function calculaMedia(notas) {
    let notasOrdenadas = notas.slice().sort((a, b) => a - b);
    let notasValidas = notasOrdenadas.slice(1, notas.length - 1);

    let soma = 0;
    notasValidas.forEach(nota => {
        soma += nota;
    });

    return soma / notasValidas.length;
}

// percorre atletas
for (let i = 0; i < atletas.length; i++) {
    let atleta = atletas[i];

    let media = calculaMedia(atleta.notas);

    console.log(`Atleta: ${atleta.nome}`);
    console.log(`Notas Obtidas: ${atleta.notas}`);
    console.log(`Média Válida: ${media}\n`);
};