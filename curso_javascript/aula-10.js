/* 
    Define uma constante chamada CONSUMO_AUTOMOVEL. Essa constante representa o consumo de combustível do automóvel
    em litros por quilômetro. No exemplo, o consumo é de 12 litros por quilômetro.
*/ 
const CONSUMO_AUTOMOVEL = 12;

/*
    Define uma função chamada gastoCombustivel(). A função recebe dois parâmetros: o tempo gasto dirigindo (em horas) e a
    velocidade média (em km/h).
*/
function gastoCombustivel(tempoGasto, velocidadeMedia) {
    
    /*
        Calcula a distância percorrida pelo automóvel multiplicando a velocidade média pelo tempo gasto dirigindo.
        Por exemplo, se o tempo gasto dirigindo for de 10 horas e a velocidade média for de 85km/h, a distância percorrida
        será de 850 km.
    */
    const distancia = velocidadeMedia * tempoGasto;

    /*
        Calcula o consumo de combustível dividindo a distância percorrida pelo consumo do automóvel. Por exemplo, se a
        distância percorrida for de 850 km e o consumo do automóvel for de 12 litros por quilômetro, o consumo de
        combustível será de 70.83 litros.
    */
    const consumoFinal = distancia / CONSUMO_AUTOMOVEL; 


    // Retorna o consumo de combustível formatado com três casas decimais.
    return consumoFinal.toFixed(3);
}

// Imprime os resultados na tela.
console.log(gastoCombustivel(10, 85));
console.log(gastoCombustivel(2, 92));
console.log(gastoCombustivel(22, 67));