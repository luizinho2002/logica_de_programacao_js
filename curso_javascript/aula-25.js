const luiz = {
    nome: 'Luiz',
    idade: 22,
    peso: 70,
    nacionalidade: 'Brasileiro',
    endereço: 'Rua Javari',
    numero: 237,
    pais: 'Brasil',
    temFilhos: false,
    genero: 'Masculino',
};

const exibirInformações = (pessoa, qualInformacao) => {
    console.log(`${qualInformacao} do ${pessoa.nome}:`, pessoa[qualInformacao]);
 
}
 
exibirInformações(luiz, 'genero');