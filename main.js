let icon = document.querySelector(".icon");
let nav = document.querySelector("nav");

function switching(){
    console.log(nav);
    nav.classList.toggle("boom");

}
icon.addEventListener("click",switching);



















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
