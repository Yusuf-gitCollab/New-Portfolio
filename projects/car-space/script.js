const ham = document.querySelector('.hamburger');
const navList = document.querySelector('.nav-list');

ham.addEventListener("click", function() {
    ham.classList.toggle('active');
    navList.classList.toggle('ham-active')
})