// Uma funcção é criada com o nome (teste) que recebe um parâmetro chamado (key).
function teste(key) {

    // (switch) Verifica o valor de (key) e compara com diferentes casos.
    switch (key) {

        /* 
            (Casos) cada caso é como um (se) individual. Se (key) for igual a (Luiz), (Pedro) ou (Antônio), uma mensagem
            específica é impressa no console.
        */
        case 'Luiz':
            console.log('LUIZ AQUI');
            break;
        case 'Pedro':
            console.log('Pedro AQUI');
            break;
        case 'Antônio':
            console.log('Antônio AQUI');
            break;

            // Se (key) não for igual a nenhum dos casos, a mensagem (Nome inválido) é impresso no console.
        default:
            console.log('Nome inválido');
            break;
    }
}

// A função (teste) é chamada com o argumento (Luiz)
teste('Luiz');