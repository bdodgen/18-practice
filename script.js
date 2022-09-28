const button = document.querySelector('button.action')
const box = document.querySelector('.box')

button.addEventListener('click', () => {
  box.classList.toggle('changed')
})