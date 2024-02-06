// Função para calcular a área do triângulo
function calcularAreaTriangulo(base, altura) {
    if (isNaN(base) || isNaN(altura)) {
        return 'Erro: valores inválidos. Insira apenas números';
    }

    // Cálculo da área
    const area = (base * altura) / 2;

    // Retorna o resultado
    return `A área do triângulo é de ${area} cm²`;
}

// Obtendo os valores do usuário
const base = Number(prompt('Digite o valor da base do triângulo (cm): '));
const altura = Number(prompt('Digite o valor da altura do triângulo (cm): '));

// Calculando e exibindo a área
const resultado = calcularAreaTriangulo(base, altura);
alert(resultado);