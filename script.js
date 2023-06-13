const navbar = document.querySelector('#nav-bar')
const menu = navbar.querySelector('#nav-list')
const openBtn = navbar.querySelector('.bx-menu')
const closeBtn = menu.querySelector('.fa-times')

openBtn.onclick = () => menu.classList.toggle('menu')
closeBtn.onclick = () => menu.classList.toggle('menu')