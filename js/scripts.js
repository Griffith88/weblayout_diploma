const swiper = new Swiper('.hero__banner', {
  loop: true,
  freeMode: true,
  spaceBetween: 0,
  autoplay: {
    delay: 2000,
  },
  effect: 'fade',
  speed: 1000,
});

const element = document.querySelector(".selector-form");
const choices = new Choices(element, {
  searchEnabled: false,
  position: "bottom",
  shouldSort: false,
});

const swiper_galery = new Swiper('.galery-right__cards-form', {
  slidesPerView: 1,
  slidesPerGroup: 1,
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    691: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      grid: {
        rows: 2,
      },
      spaceBetween: 34,
    },
    1600: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      grid: {
        rows: 2,
      },
      spaceBetween: 50,
    },
  }
});

$(function () {
  $("#accordion").accordion({
    collapsible: true,
    icons: false
  });
});

$(function () {
  $("#accordion-empty").accordion({
    collapsible: true,
    icons: false
  });
});
