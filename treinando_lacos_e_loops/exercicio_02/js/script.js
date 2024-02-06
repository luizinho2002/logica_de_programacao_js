function validarSenha(nomeUsuario, senha) {
    // Verifica se a senha é igual ao nome do usuário
    if(nomeUsuario === senha ) {
       // Mostra uma mensagem de erro
       console.log('A senha não pode ser igual ao nome de usuário');
       return false; 
    }

    // Se a senha for diferente do nome de usuário, retorna true
    return true;
}

// Lê o nome de usuário e a senha do usuário
nomeUsuario = prompt('Insira o seu nome de usuário');
senha = prompt('Insira a sua senha');

// Valida a senha 
if(!validarSenha(nomeUsuario, senha)) {
    // Volta a pedir as informações
    console.log('Por favor, insira novamente as informações.');
} else {
    // Mostra uma mensagem de sucesso
    console.log('Senha validada com sucesso!');
}