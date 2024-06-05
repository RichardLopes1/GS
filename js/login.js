document.addEventListener('DOMContentLoaded', function() {
  const loginForm = document.getElementById('loginForm');

  loginForm.addEventListener('submit', function(event) {
    event.preventDefault(); 
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (email === '' || password === '') {
      alert('Por favor, preencha todos os campos.');
    } else {
      if (validateEmail(email) && validatePassword(password)) {
        alert('Login bem-sucedido!');
        window.location.href = 'pagina-inicial.html'; // Redireciona para a nova página
      } else {
        alert('Email ou senha inválidos.');
      }
    }
  });

  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }

  function validatePassword(password) {
    return password.length >= 6;
  }
});
