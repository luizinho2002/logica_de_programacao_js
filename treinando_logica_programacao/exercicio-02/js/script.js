// Função para ler um número do usuário
function lerNumero() {
    const numero = prompt('Digite um número:');
    // Converte a string digitada para um número
    return Number(numero);
}

// Lê o primeiro número
const primeiroNumero = lerNumero();

// Lê o segundo número
const  segundoNumero = lerNumero();

// Calcula a diferença entre os dois números
const diferenca = primeiroNumero - segundoNumero;

// Mostra a diferença para o usuário
console.log(`A diferença entre ${primeiroNumero} e ${segundoNumero} é ${diferenca}`);