const fongola = document.getElementById('fongola')
const kanga = document.getElementById('kanga')
const container = document.querySelector('.container')

fongola.addEventListener('click', () => container.classList.add('lakisa-menu'))

kanga.addEventListener('click', () => container.classList.remove('lakisa-menu'))