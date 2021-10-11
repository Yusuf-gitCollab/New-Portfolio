const navLinks = document.querySelector('.nav-list');
const hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', function() {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('menu-open')
})