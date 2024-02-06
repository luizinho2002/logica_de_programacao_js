// Declara uma constante que não pode ser alterada depois de incializada
const numero1 = 1;
// Declara uma variável let que pode ser alterada mesmo depois de inicializada 
let numero2 = 2;

// Verifica se a condição é verdadeira
if(numero1 === 1 ) {
    // Se a condição for verdadeira numero2 passa a ter o valor 6
    numero2 = 6;
}

// Imprime a mensagem 'resultado' com o novo valor da variável numero2
console.log('resultado', numero2);