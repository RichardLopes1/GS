// Função para validar o email
function validarEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
}


// Função para validar se os campos de nome e sobrenome estão preenchidos
function validarNomes() {
    const firstName = document.getElementById("firstname").value;
    const lastName = document.getElementById("lastname").value;
    return firstName.trim() !== "" && lastName.trim() !== "";
}

// Função para validar se as senhas coincidem
function validarSenhas() {
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("Confirmpassword").value;
    return password === confirmPassword;
    

}

// Função para validar o telefone
function validarTelefone(telefone) {
    const re = /^\d{11}$/;
    return re.test(telefone);
}

// Função para validar quantidades de digitos
function validarDigitosSenha(senha){
    const re = /^\d{6}$/;
    return re.test(senha)
}

// Função principal de validação
function validarFormulario(event) {
    event.preventDefault(); // Evita que o formulário seja enviado automaticamente
    
    const email = document.getElementById("email").value;
    const telefone = document.getElementById("number").value;
    const senha = document.getElementById("password").value;

    if (!validarEmail(email)) {
        alert("Por favor, insira um endereço de email válido.");
        return;
    }

    if (!validarNomes()) {
        alert("Por favor, preencha os campos de nome e sobrenome.");
        return;
    }

    if (!validarSenhas()) {
        alert("As senhas não coincidem. Por favor, digite novamente.");
        return;
    }

    if (!validarTelefone(telefone)) {
        alert("O telefone deve conter exatamente 11 dígitos.");
        return;
    }

    if (!validarDigitosSenha(senha)){
        alert("Senha deve conter no maxímo 6 digitos")
        return;
    }

    // Se todas as validações passarem, o formulário está pronto para ser enviado
    alert("Formulário validado com sucesso! Agora você pode prosseguir.");
    // Passagem pro Login
    window.location = 'login.html'
}

// Adiciona um ouvinte de evento para o formulário quando for enviado
document.querySelector("form").addEventListener("submit", validarFormulario);
