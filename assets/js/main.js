/*BACKGROUND HEADER */
const scrollHeader = () => {
  const header = document.getElementById("header");
  // Quando a rolagem for maior que 50 de altura da janela de visualização, adicione a classe scroll-header à tag de cabeçalho
  this.scrollY >= 50
    ? header.classList.add("scroll-header")
    : header.classList.remove("scroll-header");
};
window.addEventListener("scroll", scrollHeader);


/* SWIPER PRODUTOS*/
let swiperProducts = new Swiper(".products__container", {
  spaceBetween: 32,
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  loop: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 72,
    },
  },
});

/*LINK ATIVO DAS SEÇÕES DE ROLAGEM*/
const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id"),
      sectionsClass = document.querySelector(
        ".nav__menu a[href*=" + sectionId + "]"
      );

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      sectionsClass.classList.add("active-link");
    } else {
      sectionsClass.classList.remove("active-link");
    }
  });
};
window.addEventListener("scroll", scrollActive);

/*SCROLL UP */
const scrollUp = () => {
  const scrollUp = document.getElementById("scroll-up");
  // Quando a rolagem for superior a 350 altura da janela de visualização, adicione a classe show-scroll à tag a com o scrolup
  this.scrollY >= 350
    ? scrollUp.classList.add("show-scroll")
    : scrollUp.classList.remove("show-scroll");
};
window.addEventListener("scroll", scrollUp);

// Tópico selecionado anteriormente (se o usuário tiver selecionado)
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

/*=============== SCROLL REVEAL ANIMACAO===============*/
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 400,
  // reset: true,
})

sr.reveal('.home__data, .products__container, .footer__container, .footer__info')
sr.reveal('.home__images', {delay: 600, origin: 'bottom'})
sr.reveal('.new__card, .brand__img', {interval: 100})
sr.reveal('.collection__explore:nth-child(1)', {origin: 'right'})
sr.reveal('.collection__explore:nth-child(2)', {origin: 'left'})