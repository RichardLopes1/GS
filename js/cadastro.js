// Função para validar o email
function validarEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
}

// Função para validar o número de telefone
function validarTelefone(telefone) {
    const re = /^\([1-9]{2}\) [2-9][0-9]{3,4}\-[0-9]{4}$/;
    return re.test(telefone);
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

// Função principal de validação
function validarFormulario(event) {
    event.preventDefault(); // Evita que o formulário seja enviado automaticamente
    
    const email = document.getElementById("email").value;
    const telefone = document.getElementById("number").value;

    if (!validarEmail(email)) {
        alert("Por favor, insira um endereço de email válido.");
        return;
    }

    if (!validarTelefone(telefone)) {
        alert("Por favor, insira um número de telefone válido no formato (xx) xxxx-xxxx.");
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

    // Se todas as validações passarem, o formulário está pronto para ser enviado
    alert("Formulário validado com sucesso! Agora você pode prosseguir.");
    // Aqui você pode adicionar o código para enviar o formulário, se necessário
}

// Adiciona um ouvinte de evento para o formulário quando for enviado
document.querySelector("form").addEventListener("submit", validarFormulario);
