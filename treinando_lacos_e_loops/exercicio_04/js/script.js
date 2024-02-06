function anosParaAUltrapassarB(populacaoA, taxaCrescimentoA, populacaoB, taxaCrescimentoB) {
    // Inicializa o número de anos
    let anos = 0;

    // Enquanto a população de A for menor que a população de B
    while (populacaoA < populacaoB) {
        // Atualiza a população de A para o ano seguinte
        populacaoA = populacaoA * (1 + taxaCrescimentoA / 100);

        // Atualiza a população de B para o ano seguinte
        populacaoB = populacaoB * (1 + taxaCrescimentoA / 100);

        // Incrementa o número de anos
        anos++;
    }

    // Retorna o número de anos
    return anos;
}