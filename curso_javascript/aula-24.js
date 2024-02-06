const somaAteN = (n) => {
    if (n === 0) {
        return 0;
    }
    return n + somaAteN(n - 1);
};

// Exemplos de uso
console.log(somaAteN(0)); // 0
console.log(somaAteN(1)); // 1
console.log(somaAteN(4)); // 10
console.log(somaAteN(10)); // 55
console.log(somaAteN(20)); // 210