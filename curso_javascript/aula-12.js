/*
    Define uma constante chamada QUANTIDADE que vale 6. Essa constante vai controlar quantos números ímpares serão
    impressos.
*/
const QUANTIDADE = 6;

// Define uma função chamada numerosImpares() que recebe um número como parâmetro.
function numerosImpares(valor) {

    /* 
        Declara uma variável chamada contar e a inicializa com o valor 0. Essa variável vai contar quantos números ímpares
        já foram impressos.
    */
    let contar = 0;

    /*
        Declara uma variável chamada novoValor e a inicializa com o valor do parâmetro passado para a função.
        Essa variável vai armazenar o próximo número ímpar a ser impresso.
    */
    let novoValor = valor;

    // Inicia um loop while que vai executar enquanto a variável contar for menor que o valor da constante QUANTIDADE.
    while (contar < QUANTIDADE) {

        // Verifica se o valor de novoValor é ímpar.
        if (novoValor % 2 !== 0) {

            // Se o valor de novoValor for ímpar, imprime o valor de novoValor e incrementa a variável contar.
            console.log(novoValor);
            contar++;
        }

        // Incrementa o valor de novoValor.
        novoValor++;
    }
}

// Chama a função numerosImpares() passando o valor 8 como parâmetro
numerosImpares(8);