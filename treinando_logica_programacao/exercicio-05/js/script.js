// Função para calcular o volume da caixa d'água
function calcularVolumeCaixaAgua(altura, largura, profundidade) {
    // Validar se os valores são números
    if (isNaN(altura) || isNaN(largura) || isNaN(profundidade)) {
       return 'Erro: Todos os valores devem ser números.'; 
    }

    // Calcular o volume
    const volume = altura * largura * profundidade;

    // Retornar o volume
    return `O volume da caixa d'água é de ${volume} cm³`;
}

// Obter os valores do usuário
const altura = Number(prompt("Digite a altura da caixa d'água (cm): "));
const largura = Number(prompt("Digite a largura da caixa d'água (cm): "));
const profundidade = Number((prompt("Digite a pronfundidade da caixa d'água (cm): ")));

// Calcular o volume
const resultado = calcularVolumeCaixaAgua(altura, largura, profundidade);

// Exibir o resultado no console
console.log(resultado);