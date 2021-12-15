/* Responsive navbar */
const header = document.getElementById('header');
const toggle = document.getElementById('toggle');
const navbar = document.getElementById('navbar');

document.onclick = function (e) {
    if (e.target.id !== 'header' && e.target.id !== 'toggle'
        && e.target.id !== 'navbar') {
        toggle.classList.remove('active');
        navbar.classList.remove('active');
    }
}

toggle.onclick = function () {
    toggle.classList.toggle('active');
    navbar.classList.toggle('active');
}


/* Swiper */
// let swiper = new Swiper('.swiper-container', {
//     direction: 'vertical',
//     sliderPerView: 1,
//     spaceBetween: 0,
//     mousewheel: true,
//     pagination: {
//         el: '.swiper-pagination',
//         type: 'progressbar',
//     }
// })