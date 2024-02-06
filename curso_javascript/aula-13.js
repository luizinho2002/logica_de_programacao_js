function multiplos13(valor1, valor2) {
   // Declara as variáveis
   let maior = 0;
   let menor = 0;
   let soma = 0;
   
   // Compara os dois números recebidos como entrada
   if (valor1 > valor2) {
      maior = valor1;
      menor = valor2;
   } else {
      maior = valor2;
      menor = valor1;
   }

   // Itera sobre todos os números entre menor e maior
   for (menor; menor <= maior; menor++) {

    // Verifica se o número atual é múltiplo de 13
     if (menor % 13 !== 0) {

        // Adiciona o número atual a soma
        soma += menor;
     }
   }

   // Retorna a soma
   return soma;
}

// Chama a função com os valores passados por parâmetro
console.log(multiplos13(200, 100));