const navToggleBtn = document.querySelector('.navbar__toggle');
const navMenu = document.querySelector('.navbar__menu');
const navLinks = document.querySelectorAll('.navbar__menu__link');
const navToggleBtnIconOpen = document.querySelector('.fa-bars');
const navToggleBtnIconClose = document.querySelector('.fa-xmark');

navToggleBtn.addEventListener('click', () => {

    navMenu.classList.toggle('navbar__menu--visible')
    navToggleBtnIconOpen.classList.toggle('navbar__icons--novisible')
    navToggleBtnIconClose.classList.toggle('navbar__icons--novisible')

    if (navMenu.classList.contains('navbar__menu--visible')) {
        navToggleBtn.setAttribute('aria-label', 'Cerrar menu');

    } else {
        navToggleBtn.setAttribute('aria-label', 'Abrir menu')
    }
})

navLinks.forEach((link) => {
    link.addEventListener('click', () => {
        navLinks.forEach((item) => {
            item.classList.remove('navbar__menu__link--active');
        })
        link.classList.add('navbar__menu__link--active');

        navMenu.classList.remove('navbar__menu--visible');
        navToggleBtn.setAttribute('aria-label', 'Abrir menu')
    });
});

/* document.addEventListener('click', (event) => {
    if (!navMenu.contains(event.target) && event.target !== navToggleBtn) {
        navMenu.classList.remove('navbar__menu--visible');
        navToggleBtn.setAttribute('aria-label', 'Abrir menu')
    }
    console.log('hola')
}); */