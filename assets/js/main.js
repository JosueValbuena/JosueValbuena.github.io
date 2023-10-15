const navToggleBtn = document.querySelector('.navbar__toggle');
const navMenu = document.querySelector('.navbar__menu');

navToggleBtn.addEventListener('click', () => {

    navMenu.classList.toggle('navbar__menu--visible')

    if (navMenu.classList.contains('navbar__menu--visible')) {
        navToggleBtn.setAttribute('aria-label', 'Cerrar menu');
    } else {
        navToggleBtn.setAttribute('aria-label', 'Abrir menu')
    }
})