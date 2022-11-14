const hamburger = document.querySelector('.hamburger')
const navMenu = document.querySelector('.nav_menu')

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active')
    hamburger.classList.toggle('burger')
    navMenu.classList.toggle('active')
    navMenu.classList.toggle('menu-nav')
})


document.querySelectorAll('header > div > nav > ul > li > a').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active')
    navMenu.classList.remove('active')
}))
