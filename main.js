let icon = document.querySelector(".icon");
let nav = document.querySelector("nav");

function switching(){
    console.log(nav);
    nav.classList.toggle("boom");

}
icon.addEventListener("click",switching);
// ######

var swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  spaceBetween: 10,
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  },
  pagination: {
      el: '.swiper-pagination',
      clickable: true,
  },
  autoplay: {
      delay: 3000, // Autoplay delay in milliseconds
      disableOnInteraction: false, // Continue autoplay after user interactions
  },
});
















const swiper = new Swiper('.swiper', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });
