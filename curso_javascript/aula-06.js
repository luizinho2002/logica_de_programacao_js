// Declara a variável idade que armazena o valor da idade da pessoa
let idade = 1;

// Inicializa um loop-while
do {
    // Imprime  a mensagem 'PASSOU' e a idade atual no console do navegador
    console.log('PASSOU', idade);

    // Incrementa a idade em 1
    idade = idade + 1;

    // Verifica se a condição do laço é verdadeira
    // Se a condição for verdadeira o código é executado novamente, caso contrário o loop é encerrado
} while (idade < 18);