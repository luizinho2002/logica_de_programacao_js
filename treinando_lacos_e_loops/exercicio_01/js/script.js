// Declara a função pedeNota. Essa função irá pedir ao usuário para digitar uma nota entre 0 e 10.
function pedeNota() {
   
    // Pede ao usuário para digitar uma nota entre 0 e 10
    let nota = prompt('Digite uma nota entre 0 e 10: ');
    // Inicia um loop while que irá continuar enquanto a nota digitada pelo usuário for menor que 0 ou maior que 10
    while (nota < 0 || nota > 10) {
        // Solicita para que o usuário digite  novamente se a nota estiver fora do intervalo [0,10]
        nota = prompt('Nota inválida. Digite uma nota entre 0 e 10: ');
    }
     
    // Retorna  o valor da variável nota
    return nota;
}

// Imprime o valor retornardo pela função pedeNota
console.log(pedeNota());