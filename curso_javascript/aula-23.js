const fatorial = (valor) => {
   if (valor === 0 || valor === 1) {
    return 1;
   } 
    
   return valor * fatorial(valor - 1) ;
   // 4 * Fatorial 3
   // 3 * Fatorial 2
   // 2 * Fatorial 1 -> 1
   // 1
}

console.log(fatorial(9));