// Define uma função chamada (calcular) que recebe um valor como parâmetro.
function calcular(valor) {

    // Verifica se o valor é igual a 0.
    if (valor === 0) {

        // Se for, lança um erro com a mensagem (Não pode ser 0).
        throw new Error('Não pode ser 0');
    }

    // Se não for, retorna o valor divido por 2.
    return valor / 2;
}

// Usa o bloco try para executar a função calcular(543).
try {
    // Se a função for executada com sucesso, o resultado é armazenado na variável resultado e impresso no console.
    const resultado = calcular(543);
    console.log('resultado:', resultado);

    // Usa o bloco catch para capturar qualquer erro que seja lançado pela função calcular.
} catch (error) {
    // Se um erro for capturado, a mensagem do erro é impressa no console.
    console.log(error.message)

    // Usa o bloco finally para executar um código que é sempre executado, independentemente de ter havido ou erro ou não.
} finally {
    // Nesse caso, a mensagem (Chegou no finally) é impressa no console.
    console.log('Chegou no finally');
}

// Imprime a mensagem (continua) no console.
console.log('continua');