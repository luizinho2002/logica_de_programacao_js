// Função para calcular a média ponderada
function calcularMediaPonderada(notas, pesos) {
    // Validar se os arrays de notas e pesos possuem o mesmo tamanho
    if (notas.length !== pesos.length) {
        throw new Error('Erro: Arrays de notas e pesos com tamanhos diferentes!');
    }

    // Validar se os pesos não são zero
    const somaPesos = pesos.reduce((soma, peso) => soma + peso, 0);
    if (somaPesos === 0) {
        throw new Error('Erro: A soma dos pesos das provas é zero!');
    }

    // Validar se todas as notas e pesos são números válidos
    for (let i = 0; i < notas.length; i++) {
       if (isNaN(notas[i]) || isNaN(pesos[i])) {
        throw new Error('Erro: Nota ou peso inválido!');
       }
    }

    // Calcuar o somatório das notas multiplicadas pelos seus pesos
    let somaNumerador = 0;
    for (let i = 0; i < notas.length; i++) {
        somaNumerador += notas[i] * pesos[i];
    }

    // Calcular o somatório dos pesos
    let somaDenominador = pesos.reduce((soma, peso) => soma + peso, 0);

    // Retornaar a média ponderada
    return somaNumerador / somaDenominador;
}

// Solicitar as notas ao usuário
const notas = [];
for (let i = 1; i <= 3; i++) {
    let nota = prompt(`Digite a nota da priva ${i}: `);
    while (isNaN(nota)) {
        nota = prompt(`Erro: Nota inválida! Digite a nota da prova ${i}: `);
    }
    notas.push(Number(parseFloat(nota)));
}

// Solicitar os pesos ao usuário
const pesos = [];
for (let i = 1; i <= 3; i++) {
    let peso = prompt(`Digite o peso da prova ${i}: `);
    while (isNaN(peso)) {
        peso = prompt(`Erro: Peso inválido! Digite o peso da prova ${i}: `);
    }
    pesos.push(parseFloat(peso));
}

// Calcular a média final
try {
    const mediaFinal = calcularMediaPonderada(notas, pesos);
    console.log(`A média final do aluno é: ${mediaFinal}`);
} catch (error) {
    console.log(error.message);
}