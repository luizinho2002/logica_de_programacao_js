// Função para converter km/h para m/s
function converterKmHmS(velocidadeKmH) {
    return velocidadeKmH / 3.6;
}

// Função para calcular tempo de viagem
function calcularTempoViagem(velocidadeMS, distancia) {
    return distancia / velocidadeMS;
}

// Entrada de dados
const velocidadeKmH = Number(prompt('Digite a velocidade em km/h: '));

// Conversão de km/h m/s
const velocidadeMS = converterKmHmS(velocidadeKmH);

// Cálculo do tempo de viagem
const distanciaSaoPauloRio = 435; // km
const tempoViagemHoras = calcularTempoViagem(velocidadeMS, distanciaSaoPauloRio);

// Exibição dos resultados no console
console.log(`A velocidade em m/s: ${velocidadeMS.toFixed(2)}`);
console.log(`Tempo de viagem de São Paulo ao Rio de Janeiro: ${tempoViagemHoras.toFixed(2)} horas`);

// Conversão de horas para minutos
const tempoViagemMinutos = tempoViagemHoras = tempoViagemHoras * 60;
console.log(`O tempo de viagem de São Paulo ao Rio de Janeiro: ${tempoViagemMinutos.toFixed(2)} minutos`);