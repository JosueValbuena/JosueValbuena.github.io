const navToggleBtn = document.querySelector('.navbar__toggle');
const navMenu = document.querySelector('.navbar__menu');
const navLinks = document.querySelectorAll('.navbar__menu__link');

navToggleBtn.addEventListener('click', () => {

    navMenu.classList.toggle('navbar__menu--visible')

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