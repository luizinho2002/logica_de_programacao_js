// Função para perguntar a obter o nome
function obterNome() {
    let nome = prompt('Qual o seu nome?');
    return nome;
}

// Função para perguntar e obter o sobrenome
function obterSobrenome() {
    let sobrenome = prompt('Qual o seu sobrenome?');
    return sobrenome;
}

// Função para mostrar o nome completo
function  exibirNomeCompleto(nome, sobrenome) {
    let nomeCompleto = `${nome} ${sobrenome}`;
    alert(`Seu nome completo é ${nomeCompleto}`);
}

// Obter o nome e o sobrenome
let nome = obterNome();
let sobrenome = obterSobrenome();

// Mostar o nome completo
exibirNomeCompleto(nome, sobrenome);