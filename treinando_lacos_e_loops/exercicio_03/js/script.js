function validarInformacoes() {
    // Nome
    let nome = prompt('Digite seu nome:');
    if (nome.length < 3) {
        alert('Nome deve ter mais de 3 caracteres.');
        return false;
    }

    // Idade
    let idade = Number(prompt('Digite sua idade:'));
    if (idade < 0 || idade > 150) {
        alert('Idade deve estar entre 0 e 150.');
        return false;
    }

    // Salário
    let salario = Number(prompt('Digite seu salário'));
    if (salario <= 0) {
        alert('Salário deve ser maior que zero');
        return false;
    }

    // Sexo
    let sexo = prompt('Digite seu sexo (f/m):');
    if (sexo !== 'f' && sexo !== 'm') {
        alert('Sexo deve ser (f) ou (m). ');
        return false;
    }

    // Estado Civil
    let estadoCivil = prompt('Digite seu estado civil (s/c/v/d):');
    if (estadoCivil !== 's' && estadoCivil !== 'c' & estadoCivil !== 'v' && estadoCivil !== 'd') {
        alert('Estado Civil dever ser (s/c/v/d)');
    }

    // Informações válidas
    alert('Informações válidas!');
    return true;
}

validarInformacoes();