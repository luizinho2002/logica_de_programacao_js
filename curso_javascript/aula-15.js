function processarFrases(frase) {
    // Separar as palavras da frase
    const palavras = frase.split(' ');

    // Contar os caracteres de cada palavra
    const contagemCaracteres = palavras.map((palavra) => palavra.length);

    // Encontrar a palavra com maior quantidade de caracteres
    const palavraMaior = palavras.reduce((maior, palavraAtual) => {
        return palavraAtual.length > maior.length ? palavraAtual : maior;
    });

    // Retornar a contagem de caracteres e a palavra maior
    return {contagemCaracteres, palavraMaior};
}

function main() {
    // Ler as frases do usuário
    let frases = [];
    let frase = '';
    while ((frase = prompt('Digite uma frase (ou 0 para sair): ')) !== '0') {
        frases.push(frase);
    }

    // Processar cada frase e exibir o resultado
    for (const frase of frases) {
        const {contagemCaracteres, palavraMaior} = processarFrases(frase);
        console.log(`Contagem de caracteres: ${contagemCaracteres.join(' - ')}`);
        console.log(`Palavra com maior quantidade de caracteres: ${palavraMaior}\n`);
    }
}

main();