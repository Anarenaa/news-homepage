const hamburger = document.querySelector('.hamburger-menu');
const navMenu = document.querySelector('.header__list');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    document.querySelector('.black-background').classList.toggle("active");
})