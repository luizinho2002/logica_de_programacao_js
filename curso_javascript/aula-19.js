// A função (calcular) simplesmente imprime no console o texto (calcular) e o conteúdo do objeto (arguments).
// O objeto (arguments) contém todos os argumentos passados para a função quando ela é chamada;
// No exemplo, a função é chamada com 4 argumentos: 1,2,3 e 4. 
function calcular() {
    console.log('calcular');
    console.log(arguments);
}

// A função (calcular2) imprime no console o texto (calcular2) e retorna o número 53252.
const calcular2 = function() {
    console.log('calcular 2');
    return 53252;
}

// A função (calcular3) recebe uma função como parâmetro e a executa
//  No exemplo, a função (calcular3) é chamada sem nenhum parãmetro, então ela não executa nenhuma função
const calcular3 = (funcao) => {
    console.log('calcular3');
    return funcao();
}

// A função (calcular) é chamada com 4 argumentos: 1, 2, 3 e 4.
// A função (calcular2) é chamada sem nenhum argumento.
/* 
    A função (calcular3) é chamada sem nenhum argumento, mas como ela recebe uma função como parâmetro, ela não executa
    nenhuma função.
*/
calcular(1, 2, 3, 4);
calcular2();
calcular3();