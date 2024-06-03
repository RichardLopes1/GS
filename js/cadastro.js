function validarFormulario() {
    var senha = document.getElementById('password').value;
    var confirmarSenha = document.getElementById('Confirmpassword').value;
    var email = document.getElementById('email').value;
    var emailRegex = '/^[^\s@]+@[^\s@]+\.[^\s@]+$/';

    if (senha !== confirmarSenha) {
      alert('As senhas não coincidem.');
      return false;
    }

    if (!emailRegex.test(email)) {
      alert('Por favor, insira um endereço de e-mail válido.');
      return false;
    }

    return true;
  }