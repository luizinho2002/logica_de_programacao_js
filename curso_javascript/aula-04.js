// Declara a variável quantidade com o valor 10
const quantidade = 10;

// Declara a variável soma com o valor 1
let soma = 1;

/* 
    Essa linha inicia um loop for que vai ser executado 10 vezes. A variável i começa com o valor 0 e é
    incrementada em cada iteração
*/
for(let i = 0; i < quantidade; i++) {
    
    // Essa linha imprime o valor da variável i
    console.log(i);
    
    // Essa linha incrementa a variável soma com o valor da variável i
    soma = soma + i;
}

// Essa linha imprime a mensagem 'ACABOU' e o valor da variável soma
console.log('ACABOU', soma);