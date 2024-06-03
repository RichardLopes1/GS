document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('button');

  buttons.forEach(button => {
      button.addEventListener('click', () => {
          const hiddenText = button.nextElementSibling;
          const arrow = button.querySelector('.arrow');

          if (hiddenText.style.display === 'none' || !hiddenText.style.display) {
              hiddenText.style.display = 'block';
              arrow.style.transform = 'rotate(90deg)';
          } else {
              hiddenText.style.display = 'none';
              arrow.style.transform = 'rotate(0deg)';
          }
      });
  });
});
