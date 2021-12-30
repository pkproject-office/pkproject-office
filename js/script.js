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

// animation on scroll
function reveal() {
  let reveals = document.querySelectorAll(".reveal");

  for (let i = 0; i < reveals.length; i++) {
    let windowHeight = window.innerHeight;
    let elementTop = reveals[i].getBoundingClientRect().top;
    let elementVisible = 150; /*is the height at which the element should be revealed to the user*/

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}
window.addEventListener("scroll", reveal);


new Swiper('.swiper-container', {
    slidesPerView: 1,
    autoplay: {
      delay: 2000,
      pasueOnMouseEnter: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  })
  