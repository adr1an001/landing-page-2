const btnHome = document.getElementById('botao-home')
const mainForm = document.getElementById('main-form')

btnHome.addEventListener('click', () => {
  window.open('https://www.instagram.com/adrianwanderbruch/')
})

mainForm.addEventListener('submit', (e) => {
  e.preventDefault();
  alert("Parabéns! Você é um Fusqueiro");
})