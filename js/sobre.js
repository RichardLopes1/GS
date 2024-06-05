document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.arrow-button');
  
    buttons.forEach(button => {
      button.addEventListener('click', function() {
        const hiddenText = this.nextElementSibling;
        if (hiddenText.style.display === 'none' || hiddenText.style.display === '') {
          hiddenText.style.display = 'block';
          this.querySelector('.arrow').innerHTML = '&#8593;'; // Mudando a seta para cima
        } else {
          hiddenText.style.display = 'none';
          this.querySelector('.arrow').innerHTML = '&#8594;'; // Mudando a seta para direita
        }
      });
    });
  });
  