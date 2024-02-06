// idade é declarada como uma constante com o valor 654.
// Dentro da função exibirIdade, outra variável idade é declarada com o valor 23.
const idade = 654;

// Essa função simplesmente usa console.log para mostrar o valor da variável idade dentro da função que é 23.
const exibirIdade = () => {
    const idade = 23;
    console.log(idade);
}

/* 
    Essa função chama a função exibirIdade e depois usa console.log para mostrar o valor da variável idade declarada fora
    da função, que é 654.
*/
const exibirExibirIdade = () => {
    exibirIdade();
    console.log(idade);
}

// A função exibirExibirIdade é chamada.
// A função exibirIdade é executada dentro de exibirExibirIdade, mostrando o valor 23 no console.
/* 
    Depois que exibirIdade termina, a função exibirExibirIdade mostra o valor da variável idade declarada fora da função
    654.
*/

exibirExibirIdade();