document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita o envio padrão do formulário
    
    // Obter os valores dos campos de entrada
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    // Simples verificação de campos vazios
    if (email.trim() === "" || password.trim() === "") {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    // Se os campos estiverem preenchidos, você pode enviar o formulário ou realizar outras ações aqui
    // Por exemplo, você pode enviar uma solicitação AJAX para verificar as credenciais do usuário no servidor
    // Neste exemplo, apenas exibiremos um alerta indicando que o login foi bem-sucedido
    alert("Login bem-sucedido! Você será redirecionado para a próxima página.");

    // Aqui você pode redirecionar o usuário para a próxima página após o login bem-sucedido
    // window.location.href = "próxima_página.html";
  });