document.getElementById("loginForm").addEventListener("submit", function(event) {
event.preventDefault(); // Evita o envio padrão do formulário
    
    // Obter os valores dos campos de entrada
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Simples verificação de campos vazios
    if (email.trim() === "" || password.trim() === "") {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    alert("Login bem-sucedido! Você será redirecionado para a próxima página.");
    window.location.href = "próxima_página.html";
    
  });